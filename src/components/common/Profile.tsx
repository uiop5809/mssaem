'use client'

import Image from 'next/image'
import Button, { Color } from './Button'

export interface ProfileProps {
  nickName: string
  mbti: Color
  badge?: string
  profileImgUrl: string
  createdAt?: string
}

const Profile = ({
  nickName,
  mbti,
  badge,
  profileImgUrl,
  createdAt,
}: ProfileProps) => (
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
      <div className="flex items-center gap-2">
        <div className="text-headline font-semibold">{nickName} 님</div>
        {createdAt && <div className="text-gray2 text-caption">{createdAt}</div>}
      </div>
      <div className="flex gap-2.5">
        <Button text={mbti} color={mbti} size="badge" />
        {badge && <Button text={badge} size="badge" />}
      </div>
    </div>
  </div>
)

Profile.defaultProps = {
  badge: undefined,
  createdAt: undefined,
}

export default Profile
