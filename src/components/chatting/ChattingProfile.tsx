'use client'

import Image from 'next/image'
import Button, { Color } from '../common/Button'

export interface ChattingProfileProps {
  nickName: string
  mbti: Color
  badge?: string
  profileImgUrl: string
  recent?: string
  lastMessage: string
}

const ChattingProfile = ({
  nickName,
  mbti,
  badge,
  profileImgUrl,
  recent,
  lastMessage,
}: ChattingProfileProps) => (
  <div className="flex items-center gap-4.5">
    <div className="w-14 h-14 relative rounded-full overflow-hidden">
      <Image
        src={profileImgUrl}
        alt="profile"
        className="w-full h-full object-cover"
        width={40}
        height={40}
      />
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2.5">
        <div className="text-headline font-semibold">{nickName} 님</div>
        <div className="flex gap-2.5">
          <Button text={mbti} color={mbti} size="badge" />
          {badge && <Button text={badge} size="badge" />}
        </div>
        {recent && <div className="text-gray2 text-caption">{recent}분 전</div>}
      </div>
      <div className="text-body text-maindark">{lastMessage}</div>
    </div>
  </div>
)

ChattingProfile.defaultProps = {
  badge: undefined,
  recent: undefined,
}

export default ChattingProfile
