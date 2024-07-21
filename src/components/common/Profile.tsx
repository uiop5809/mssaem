import Image from 'next/image'
import Button, { Color } from './Button'

export interface ProfileProps {
  url: string
  name: string
  mbti: Color
  badge?: string
}

const Profile = ({ url, name, mbti, badge }: ProfileProps) => (
  <div className="flex items-center gap-4.5">
    <div className="w-14 h-14 relative rounded-full overflow-hidden">
      <Image
        src={url}
        alt="profile"
        className="w-full h-full object-cover"
        width={40}
        height={40}
      />
    </div>
    <div className="flex flex-col gap-1">
      <div className="text-headline font-semibold">{name} 님</div>
      <div className="flex gap-2.5">
        <Button text={mbti} color={mbti} size="badge" />
        {badge && <Button text={badge} size="badge" />}
      </div>
    </div>
  </div>
)

Profile.defaultProps = {
  badge: undefined,
}

export default Profile
