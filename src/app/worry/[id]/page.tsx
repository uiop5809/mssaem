'use client'

import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import { useParams, useRouter } from 'next/navigation'
import {
  useDeleteWorry,
  usePostChattingRoom,
  useWorryDetail,
} from '@/service/worry/useWorryService'
import WorryProfile from '@/components/user/WorryProfile'
import { useUserInfo } from '@/service/user/useUserService'
import { useToast } from '@/hooks/useToast'
import { useWebSocket } from '@/hooks/useSocket'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { chatRoomsState } from '@/recoil/chatRoomsState'

const WorryDetail = () => {
  const { id } = useParams()
  const worryId = Number(id)
  const router = useRouter()
  const { showToast } = useToast()

  const { data: worryDetail } = useWorryDetail(Number(id))
  const { data: userInfo } = useUserInfo()
  const { mutate: postChattingRoom } = usePostChattingRoom()
  const { connectSocket, socketRefs } = useWebSocket()
  const setChatRooms = useSetRecoilState(chatRoomsState)

  /* 채팅방 목록 불러오기 */
  const fetchChatRoomsAndConnectSockets = async () => {
    try {
      const response = await axios.get(
        `https://ik7f6nxm8g.execute-api.ap-northeast-2.amazonaws.com/mssaem/chatroom?memberId=${userInfo?.id}`,
      )
      const rooms = response.data
      setChatRooms(rooms)
      router.push(`/chatting`)
    } catch (error) {
      console.error('Failed to fetch chat rooms:', error)
    }
  }

  const handleChattingStartClick = () => {
    if (userInfo?.id === worryDetail?.memberSimpleInfo.id) {
      showToast('본인이 작성한 글입니다.')
    } else if (
      userInfo &&
      userInfo.mbti.toUpperCase() === worryDetail?.targetMbti
    ) {
      showToast('채팅을 시작합니다.')
      postChattingRoom(
        { worryBoardId: worryId },
        {
          onSuccess: (chatRoomId: number) => {
            const userKey = `${chatRoomId}-${userInfo.id}`
            const ownerKey = `${chatRoomId}-${worryDetail?.memberSimpleInfo.id}`

            const wsUrlUser = `wss://bkleacy8ff.execute-api.ap-northeast-2.amazonaws.com/mssaem?chatRoomId=${chatRoomId}&member=${userInfo.id}&worryBoardId=${worryId}`
            const wsUrlOwner = `wss://bkleacy8ff.execute-api.ap-northeast-2.amazonaws.com/mssaem?chatRoomId=${chatRoomId}&member=${worryDetail?.memberSimpleInfo.id}&worryBoardId=${worryId}`

            connectSocket(wsUrlUser, userKey)
            connectSocket(wsUrlOwner, ownerKey)

            if (socketRefs[userKey]) {
              socketRefs[userKey]!.onopen = async () => {
                console.log('User WebSocket is connected')
                setTimeout(() => {
                  fetchChatRoomsAndConnectSockets()
                }, 1000)
              }
            }
          },
        },
      )
    } else {
      showToast('MBTI가 달라요')
    }
  }

  const { mutate } = useDeleteWorry()
  const handleDeleteClick = () => {
    mutate(worryId)
    router.push('/worry?waitingPage=1&solvedPage=1')
  }

  return (
    <>
      <div className="text-title3 text-maindark font-semibold my-5">
        M쌤 매칭을 기다리는 고민
      </div>
      <Container color="purple">
        {worryDetail && worryDetail.isEditAllowed && (
          <div className="flex justify-end gap-2.5">
            <Button
              text="수정"
              color="LIGHTPURPLE"
              size="small"
              onClick={() => {
                router.push(`/worry/${id}/update`)
              }}
            />
            <Button
              text="삭제"
              color="PURPLE"
              size="small"
              onClick={handleDeleteClick}
            />
          </div>
        )}

        <div className="h-[1px] bg-main my-5" />
        {worryDetail && (
          <>
            <div className="flex justify-between mb-7.5">
              <WorryProfile
                userId={worryDetail.memberSimpleInfo.id}
                profileImgUrl={worryDetail.memberSimpleInfo.profileImgUrl}
                nickName={worryDetail.memberSimpleInfo.nickName}
                strFromMbti={worryDetail.memberSimpleInfo.mbti}
                strToMbti={worryDetail.targetMbti}
              />
              <div className="flex text-caption text-gray2 items-end justify-end flex-col-reverse gap-1 sm:gap-3.5 sm:flex-row sm:items-start">
                <p>조회수 {worryDetail.hits}회</p>
                <p className="hidden sm:inline">|</p>
                <p>{worryDetail.createdAt}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-title3 font-bold text-maindark">
                {worryDetail.title}
              </p>
              <div
                className="text-body text-maindark"
                dangerouslySetInnerHTML={{ __html: worryDetail.content }}
              />
            </div>
          </>
        )}
        <div className="h-[1px] bg-main my-5" />
        <div className="flex justify-center">
          <Button
            text="채팅 시작"
            color="PURPLE"
            size="small"
            onClick={handleChattingStartClick}
          />
        </div>
      </Container>
    </>
  )
}

export default WorryDetail
