import { MBTI } from '@/components/common/Button'

interface WorryBoardI {
  title: string
  content: string
  memberMbti: MBTI
  targetMbti: MBTI
  createdDate: string
  imgUrl: string
}

export type { WorryBoardI }
