import User from './User'

interface Board {
  id: number
  title: string
  content: string
  imgUrl: string
  boardMbti: string
  likeCount: number
  commentCount: number
  createdAt: string
  memberSimpleInfo: User
}

export default Board
