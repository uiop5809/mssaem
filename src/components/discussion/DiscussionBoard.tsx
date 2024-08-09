'use client'

import { DiscussionBoardI, DiscussionOptionI } from '@/model/Discussion'
import Image from 'next/image'
import Container from '../common/Container'
import Profile from '../common/Profile'
import DiscussionOption from './DiscussionOption'

export interface DiscussionBoardProps {
  discussionBoard: DiscussionBoardI
}

const DiscussionBoard = ({ discussionBoard }: DiscussionBoardProps) => {
  const {
    title,
    content,
    createdAt,
    participantCount,
    commentCount,
    memberSimpleInfo,
    options,
  } = discussionBoard

  // TODO: Discussion Button Click API 연동
  const handleDiscussionOptionClick = () => {}

  // 날짜 부분만 추출
  const formattedCreatedAt = createdAt.split(' ')[0]

  return (
    <Container color="purple">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-5">
          <div className="flex justify-between">
            <Profile user={memberSimpleInfo} />
            <div className="text-caption text-gray2">{formattedCreatedAt}</div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-title3 font-bold">{title}</p>
            <p className="text-body text-mainblack">{content}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {options &&
              options.map((option: DiscussionOptionI, index: number) => (
                <DiscussionOption
                  key={index}
                  discussionOption={option}
                  size="small"
                  onClick={handleDiscussionOptionClick}
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
}

export default DiscussionBoard
