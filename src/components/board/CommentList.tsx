'use client'

import { useCommentList } from '@/service/comment/useCommentService'
import Comment from './Comment'

interface CommentListProps {
  boardId: number
  page: number
  size: number
}

const CommentList = ({ boardId, page, size }: CommentListProps) => {
  const { data } = useCommentList({ boardId, page, size })

  return (
    <div className="flex flex-col gap-5">
      {data && data.result.map((comment) => <Comment comment={comment} />)}
    </div>
  )
}

export default CommentList
