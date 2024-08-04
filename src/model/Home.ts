import Board from './Board'
import { Discussion } from './Discussion'

interface HotThree {
  boardId: number
  boardTitle: string
  discussionId: number
  discussionTitle: string
  worryBoardId: number
  worryBoardTitle: string
}

interface HotBoardMore {
  page: number
  totalSize: number
  result: Board[]
}

interface HotDiscussionMore {
  page: number
  totalSize: number
  result: Discussion[]
}

interface PopularMssaem {
  id: number
  nickName: string
  mbti: string
  badge: string
  profileImgUrl: string
  introduction: string
}

export type { HotThree, HotBoardMore, HotDiscussionMore, PopularMssaem }
