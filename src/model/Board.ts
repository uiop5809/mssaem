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

interface BoardDetail {
  memberSimpleInfo: User
  boardId: number
  title: string
  content: string
  imgUrlList: string[]
  createdAt: string
  likeCount: number
  commentCount: number
  isAllowed: boolean
  isLiked: boolean
  boardMbti: string
  hits: number
}

interface BoardList {
  page: number
  totalSize: number
  result: Board[]
}

interface BoardListNumber {
  boardCount: number
  esfp: number | null
  isfj: number | null
  estj: number | null
  entp: number | null
  esfj: number | null
  isfp: number | null
  intp: number | null
  infp: number | null
  entj: number | null
  istj: number | null
  enfj: number | null
  infj: number | null
  enfp: number | null
  intj: number | null
  istp: number | null
  estp: number | null
}

export type { Board, BoardDetail, BoardList, BoardListNumber }
