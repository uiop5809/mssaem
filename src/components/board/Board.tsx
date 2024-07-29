'use client'

import Image from 'next/image'
import Profile, { ProfileProps } from '../common/Profile'

export interface BoardProps {
  title: string
  content: string
  imgUrl: string
  likeCount: number
  commentCount: number
  createdAt: string
  memberSimpleInfo: ProfileProps
}

const Board = ({
  title,
  content,
  imgUrl,
  likeCount,
  commentCount,
  createdAt,
  memberSimpleInfo,
}: BoardProps) => (
  <div className="flex justify-between items-center">
    <div className="flex flex-col justify-between gap-5">
      <Profile {...memberSimpleInfo} />
      <div className="flex flex-col gap-1">
        <p className="text-title3 font-bold">{title}</p>
        <p className="text-body text-mainblack">{content}</p>
      </div>
      <div className="flex items-center gap-7">
        <span className="text-caption text-gray2">{createdAt}</span>
        <p className="text-caption text-gray2">공감 {likeCount}</p>
        <p className="text-caption text-gray2">댓글 {commentCount}</p>
      </div>
    </div>

    <div>
      {imgUrl && <Image src={imgUrl} alt="board" width={150} height={150} />}
    </div>
  </div>
)

export default Board
