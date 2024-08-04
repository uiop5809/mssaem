import User from './User'

interface Discussion {
  id: number
  title: string
  content: string
  participantCount: number
  commentCount: number
  createdAt: string
  memberSimpleInfo: User
  options: DiscussionOption[]
}

interface DiscussionOption {
  id: number
  content: string
  imgUrl: string
  selectedPercent: string
  selected: boolean
}

export type { Discussion, DiscussionOption }
