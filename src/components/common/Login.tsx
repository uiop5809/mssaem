import { useRouter } from 'next/router'
import { Color } from './Button'
import Profile from './Profile'

export interface LoginProps {
  url: string
  name: string
  mbti: Color
  badge?: string
}

const menuItems = [
  { id: 'chat', label: 'M쌤 채팅', path: '/chat' },
  { id: 'notification', label: '알림', path: '/notifications' },
  { id: 'activity', label: '활동', path: '/activity' },
  { id: 'profile', label: '프로필 설정', path: '/profile-settings' },
]

const Login = ({ url, name, mbti, badge }: LoginProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center w-68 h-full px-7 py-8 bg-white rounded-7.5">
      <div className="w-full flex justify-end">
        <p className="text-gray2 text-caption cursor-pointer">로그아웃</p>
      </div>
      <div className="flex flex-col gap-4">
        <Profile url={url} name={name} mbti={mbti} badge={badge} />
        <ul className="flex justify-between w-full text-gray2 text-caption">
          {menuItems.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <button
                type="button"
                className="whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer bg-transparent border-none p-0 m-0"
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </button>
              {index < menuItems.length - 1 && <span className="mx-2">|</span>}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

Login.defaultProps = {
  badge: undefined,
}

export default Login
