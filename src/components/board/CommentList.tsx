'use client'

import { useCommentList } from '@/service/comment/useCommentService'
import Comment from './Comment'

interface CommentListProps {
  id: number
  page: number
  size: number
}

const CommentList = ({ id, page, size }: CommentListProps) => {
  const { data } = useCommentList({ id, page, size })

  return (
    <div className="flex flex-col gap-5">
      {data && data.result.map((comment) => <Comment comment={comment} />)}
    </div>
  )
}

export default CommentList
