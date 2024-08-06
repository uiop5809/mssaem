import { MBTI } from '@/components/common/Button'

interface ChattingProfileI {
  nickName: string
  mbti: MBTI
  badge?: string
  profileImgUrl: string
  recent?: string
  lastMessage: string
}

export default ChattingProfileI
