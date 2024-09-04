'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ChattingInput from '@/components/chatting/ChattingInput'
import ChattingProfile from '@/components/chatting/ChattingProfile'
import ChattingMessage from '@/components/chatting/ChattingMessage'
import { ChattingMessageI, ChattingRoomI } from '@/model/Chatting'
import { useWebSocket } from '@/hooks/useSocket'
import { userInfoState } from '@/recoil/UserInfo'
import { useRecoilState, useRecoilValue } from 'recoil'
import { chatRoomsState } from '@/recoil/chatRoomsState'

const Chatting = () => {
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState)
  const [currentChatRoomId, setCurrentChatRoomId] = useState<number | null>(
    null,
  )
  const [input, setInput] = useState('')
  const userInfo = useRecoilValue(userInfoState)
  const { connectSocket, socketRefs } = useWebSocket()

  const [messages, setMessages] = useState<ChattingMessageI[]>([])

  // 1. 메시지 수신 핸들러 함수
  const handleWebSocketMessage = (newMessage: ChattingMessageI) => {
    if (userInfo && userInfo.id !== Number(newMessage.memberId)) {
      setMessages((prevMessages) => [...prevMessages, newMessage])
    }
  }

  // 2. 메시지 수신 시작 함수
  const startReceivingMessages = (roomId: number) => {
    const key = `${roomId}-${userInfo?.id}`
    const socket = socketRefs[key]

    if (socket) {
      socket.onmessage = (event) => {
        const newMessage = JSON.parse(event.data)
        handleWebSocketMessage(newMessage)
      }
    } else {
      console.error(`WebSocket is not connected for key: ${key}`)
    }
  }

  // 3. WebSocket 연결 함수
  const connectToWebSocket = (room: ChattingRoomI) => {
    const key = `${room.chatRoomId}-${userInfo?.id}`
    const wsUrlUser = `wss://bkleacy8ff.execute-api.ap-northeast-2.amazonaws.com/mssaem?chatRoomId=${room.chatRoomId}&member=${userInfo?.id}&worryBoardId=${room.worryBoardId}`

    // 이미 해당 방에 연결된 WebSocket이 있는지 확인
    if (!socketRefs[key]) {
      console.log(`WebSocket 연결 중: ${key}`)
      connectSocket(wsUrlUser, key)
    }

    // WebSocket이 열리면 메시지 수신 시작
    const socket = socketRefs[key]
    if (socket && socket.readyState === WebSocket.OPEN) {
      startReceivingMessages(room.chatRoomId)
    } else {
      // WebSocket이 아직 열려있지 않으면 onopen에서 처리
      socket!.onopen = () => {
        console.log(`WebSocket connected for key: ${key}`)
        startReceivingMessages(room.chatRoomId)
      }
    }
  }

  /* 채팅방 목록 불러오기 */
  const fetchChatRoomsAndConnectSockets = async () => {
    try {
      const response = await axios.get(
        `https://ik7f6nxm8g.execute-api.ap-northeast-2.amazonaws.com/mssaem/chatroom?memberId=${userInfo?.id}`,
      )
      const rooms = response.data
      if (rooms.length > 0) {
        setChatRooms(rooms)
      }

      if (rooms.length > 0 && currentChatRoomId === null) {
        setCurrentChatRoomId(rooms[0].chatRoomId)
      }

      rooms.forEach((room: ChattingRoomI) => {
        connectToWebSocket(room)
      })
    } catch (error) {
      console.error('Failed to fetch chat rooms:', error)
    }
  }

  useEffect(() => {
    if (userInfo) {
      fetchChatRoomsAndConnectSockets()
    }
  }, [userInfo])

  /* 채팅방 변경 시 메시지 불러오기 */
  useEffect(() => {
    if (currentChatRoomId) {
      const selectedRoom =
        chatRooms &&
        chatRooms.find((room) => room.chatRoomId === currentChatRoomId)

      if (selectedRoom) {
        const fetchMessages = async () => {
          try {
            const response = await axios.get(
              `https://ik7f6nxm8g.execute-api.ap-northeast-2.amazonaws.com/mssaem/chatmessage?chatRoomId=${currentChatRoomId}`,
            )
            setMessages(response.data)
          } catch (error) {
            console.error('Failed to fetch messages:', error)
          }
        }
        fetchMessages()
      }
    }
  }, [currentChatRoomId, chatRooms])

  /* 메시지 전송 */
  const sendMessage = () => {
    const key = `${currentChatRoomId}-${userInfo?.id}`

    if (socketRefs[key]?.readyState === WebSocket.OPEN && input.trim() !== '') {
      const message = {
        action: 'sendMessage',
        chatRoomId: currentChatRoomId,
        message: input,
        memberId: userInfo?.id?.toString() || '',
      }

      socketRefs[key]?.send(JSON.stringify(message))

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: input,
          timestamp: new Date().toISOString(),
          memberId: userInfo?.id?.toString() || '',
        },
      ])

      setInput('')
    } else {
      console.error('WebSocket is not open or message is empty.')
    }
  }

  /* 채팅방 나가기 */
  const leaveChatRoom = async (chatRoomId: number) => {
    try {
      await axios.delete(
        `https://ik7f6nxm8g.execute-api.ap-northeast-2.amazonaws.com/mssaem/chatroom?chatRoomId=${chatRoomId}&memberId=${userInfo?.id}`,
      )
      setChatRooms((prevRooms: any) =>
        prevRooms.filter((room: any) => room.chatRoomId !== chatRoomId),
      )
      setMessages([])
      setCurrentChatRoomId(
        chatRooms && chatRooms.length > 1 ? chatRooms[0].chatRoomId : null,
      )
    } catch (error) {
      console.error('Failed to leave the chat room:', error)
    }
  }

  return (
    <div className="w-full-vw ml-half-vw bg-main3 py-10">
      <div className="flex h-screen-40 border-7.5 mx-2% sm:mx-6% md:mx-13% bg-white rounded-7.5 shadow-custom-light">
        <div className="border-r flex flex-col overflow-y-scroll scrollbar-hide">
          <div className="flex items-center p-10 border-b text-title3 font-bold h-27.5">
            채팅 목록
          </div>
          <ul>
            {chatRooms &&
              chatRooms.map((room) => (
                <li
                  key={room.chatRoomId}
                  className="border-b last:border-none box-border"
                >
                  <ChattingProfile
                    user={room.memberSimpleInfo}
                    lastMessage={room.lastMessage}
                    lastSendAt={room.lastSendAt}
                    onClick={() => setCurrentChatRoomId(room.chatRoomId)}
                    current={room.chatRoomId === currentChatRoomId}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col flex-1 bg-white rounded-7.5">
          <div className="flex items-center border-b p-4 h-27.5">
            {currentChatRoomId && (
              <button
                type="button"
                className="text-red-500 ml-auto"
                onClick={() => leaveChatRoom(currentChatRoomId)}
              >
                {currentChatRoomId} 채팅방 나가기
              </button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto box-border">
            {messages.length > 0 ? (
              messages.map((msg, index) => {
                const currentRoom =
                  chatRooms &&
                  chatRooms.find(
                    (room) => room.chatRoomId === currentChatRoomId,
                  )
                return (
                  <div key={index} className="my-2 p-2 box-border">
                    <ChattingMessage
                      other={currentRoom!!.memberSimpleInfo}
                      msg={msg}
                    />
                  </div>
                )
              })
            ) : (
              <p className="p-4">No messages yet.</p>
            )}
          </div>
          <div className="flex items-center p-6">
            <ChattingInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatting
