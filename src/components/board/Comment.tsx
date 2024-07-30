'use client'

import { useState } from 'react'
import Image from 'next/image'
import Profile, { ProfileProps } from '../common/Profile'

export interface CommentProps {
  likeCount: string
  createdAt: string
  isLiked: number
  isAllowed: string
  content: string
  memberSimpleInfo: ProfileProps
}

// TODO: 대댓글 isAllowed에 따라 렌더링 변경
const Comment = ({
  likeCount,
  createdAt,
  isLiked: initialIsLiked,
  isAllowed,
  content,
  memberSimpleInfo,
}: CommentProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked)

  const toggleLike: () => void = () => {
    setIsLiked((prevIsLiked) => (prevIsLiked ? 0 : 1))
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-start">
        <Profile {...memberSimpleInfo} createdAt={createdAt} />
        <div className="flex gap-1.25 items-center">
          <button onClick={toggleLike} type="button">
            {isLiked ? (
              <Image
                src="/images/board/heart_fill.svg"
                alt="like"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/images/board/heart_empty.svg"
                alt="unlike"
                width={20}
                height={20}
              />
            )}
          </button>
          <span className="text-gray2 text-title3 font-bold ">{likeCount}</span>
        </div>
      </div>
      <div className="text-maindark text-headline">{content}</div>
    </div>
  )
}

export default Comment
