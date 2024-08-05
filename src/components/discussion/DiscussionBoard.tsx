'use client'

import { User } from '@/model/User'
import Image from 'next/image'
import Container from '../common/Container'
import Profile from '../common/Profile'
import DiscussionButton from './DiscussionButton'

export interface DiscussionBoardProps {
  title: string
  content: string
  participantCount: number
  commentCount: number
  createdAt: string
  memberSimpleInfo: User
  options: []
}

// TODO: options 수정
const DiscussionBoard = ({
  title,
  content,
  participantCount,
  commentCount,
  createdAt,
  memberSimpleInfo,
}: DiscussionBoardProps) => (
  <Container color="purple">
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex justify-between">
          <Profile user={memberSimpleInfo} />
          <div className="text-cpation text-gray2">{createdAt}</div>
        </div>
        <div className="flex flex-col gap -1">
          <p className="text-title3 font-bold">{title}</p>
          <p className="text-body text-mainblack">{content}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-8">
          <DiscussionButton
            content="손절한다"
            onClick={() => {}}
            size="small"
          />
          <DiscussionButton content="안한다" onClick={() => {}} size="small" />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-1">
            <Image
              src="/images/discussion/red_circle.svg"
              alt="red"
              width={12}
              height={12}
            />
            <p className="text-caption text-gray2">
              {participantCount}명이 참여 중!
            </p>
          </div>
          <p className="text-caption text-gray2">댓글 {commentCount}</p>
        </div>
      </div>
    </div>
  </Container>
)

export default DiscussionBoard
