import { User } from './User'

interface CommentI {
  commentId: number
  likeCount: number
  parentId: number
  createdAt: string
  isLiked: boolean
  isAllowed: boolean
  memberSimpleInfo: User
  content: string
}

interface CommentList {
  page: number
  totalSize: number
  result: Comment[]
}

export type { CommentI, CommentList }
