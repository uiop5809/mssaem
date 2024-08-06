'use client'

import { User } from '@/model/User'
import Image from 'next/image'
import Button from './Button'

export interface ProfileProps {
  user: User
  createdAt?: string
}

const Profile = ({ user, createdAt }: ProfileProps) => (
  <div className="flex items-center gap-4.5">
    <div className="w-14 h-14 relative rounded-full overflow-hidden">
      <Image
        src={user.profileImgUrl}
        alt="profile"
        className="w-full h-full object-cover"
        width={40}
        height={40}
      />
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <div className="text-headline font-semibold">{user.nickName} 님</div>
        {createdAt && (
          <div className="text-gray2 text-caption">{createdAt}</div>
        )}
      </div>
      <div className="flex gap-2.5">
        <Button text={user.mbti} color={user.mbti} size="badge" />
        {user.badge && <Button text={user.badge} size="badge" />}
      </div>
    </div>
  </div>
)

Profile.defaultProps = {
  createdAt: undefined,
}

export default Profile
