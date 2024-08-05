'use client'

import { DiscussionOption } from '@/model/Discussion'
import User from '@/model/User'
import Image from 'next/image'
import Profile from '../common/Profile'
import Container from '../common/Container'
import DiscussionButton from '../discussion/DiscussionButton'

export interface HotDiscussionProps {
  title: string
  content: string
  participantCount: number
  commentCount: number
  createdAt: string
  memberSimpleInfo: User
  options: DiscussionOption[]
}

const HotDiscussion = ({
  title,
  content,
  participantCount,
  commentCount,
  createdAt,
  memberSimpleInfo,
  options,
}: HotDiscussionProps) => (
  <Container color="purple">
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex justify-between">
          <Profile user={memberSimpleInfo} />
          <div className="text-caption text-gray2">{createdAt}</div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-title3 font-bold">{title}</p>
          <p className="text-body text-mainblack">{content}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <DiscussionButton
              key={option.id}
              content={option.content}
              onClick={() => {}}
              size="small"
            />
          ))}
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

export default HotDiscussion
