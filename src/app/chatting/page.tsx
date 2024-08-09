'use client'

import ChattingProfile from '@/components/chatting/ChattingProfile'
import ChattingProfileI from '@/model/Chatting'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Chatting = () => {
  const [chatRooms] = useState<number[]>([1, 2, 3]) // 예시로 채팅방 3개를 추가
  const [currentChatRoomId, setCurrentChatRoomId] = useState<number>(1) // 현재 선택된 채팅방
  const [messages, setMessages] = useState<{ [key: number]: string[] }>({})
  const [input, setInput] = useState<string>('')
  const [isConnected, setIsConnected] = useState<boolean>(true)
  const socketRef = useRef<WebSocket | null>(null)

  const chattProfile: ChattingProfileI = {
    nickName: '박빵이',
    mbti: 'ENFP',
    badge: 'ENFP',
    profileImgUrl: '/images/common/default.svg',
    recent: '5',
    lastMessage: '안녕하세요',
  }

  useEffect(() => {
    const socket = new WebSocket(
      `wss://lc3cc1cnma.execute-api.ap-northeast-2.amazonaws.com/mssaem?chatRoomId=${currentChatRoomId}&member=1`,
    )
    socketRef.current = socket
    socket.onopen = () => {
      setIsConnected(true)
    }
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data)
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentChatRoomId]: [
          ...(prevMessages[currentChatRoomId] || []),
          receivedMessage.message,
        ],
      }))
    }
    return () => {
      socket.close()
    }
  }, [currentChatRoomId])

  const sendMessage = () => {
    if (socketRef.current && input.trim() !== '') {
      const message = {
        action: 'sendMessage',
        chatRoomId: currentChatRoomId,
        message: input,
      }
      socketRef.current.send(JSON.stringify(message))
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentChatRoomId]: [
          ...(prevMessages[currentChatRoomId] || []),
          input,
        ],
      }))
      setInput('')
    }
  }

  const disconnect = () => {
    if (socketRef.current) {
      socketRef.current.close()
      socketRef.current = null
      setIsConnected(false)
    }
  }

  const selectChatRoom = (chatRoomId: number) => {
    if (isConnected) {
      disconnect()
    }
    setCurrentChatRoomId(chatRoomId)
  }

  return (
    <div className="w-full-vw ml-half-vw bg-main3 py-10">
      <div className="flex h-screen-40 border-7.5  mx-2% sm:mx-6% md:mx-13% bg-white rounded-7.5 shadow-custom-light ">
        {/* Left Sidebar for Chat Rooms */}
        <div className="border-r flex flex-col overflow-y-scroll scrollbar-hide">
          <div className="flex items-center p-10 border-b text-title3 font-bold h-27.5">
            채팅 목록
          </div>
          <ul className="">
            {chatRooms.map((roomId) => (
              <li
                key={roomId}
                className="border-b last:border-none box-border p-4"
              >
                <ChattingProfile
                  chattingProfile={chattProfile}
                  onClick={() => selectChatRoom(roomId)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content for Chat Messages */}
        <div className="flex flex-col flex-1 bg-white rounded-br-lg">
          <div className="flex items-center border-b p-4 h-27.5">
            <Image
              src="/images/common/default.svg"
              alt="User"
              className="rounded-full mr-4"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-bold">유저 님</h3>
              <p className="text-sm text-gray-300">온라인</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto border-b box-border">
            {messages[currentChatRoomId]?.map((msg, index) => (
              <div key={index} className="my-2 p-2 border-b box-border">
                {msg}
              </div>
            )) || <p className="p-4">No messages yet.</p>}
          </div>

          <div className="border-t flex items-center box-border p-2">
            <input
              type="text"
              className="flex-1 p-2 box-border"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage()
                }
              }}
            />
            <button
              type="button"
              className="bg-purple-500 text-white p-2 ml-2"
              onClick={sendMessage}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatting
