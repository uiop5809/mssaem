import { useRouter } from 'next/router'
import Button from './Button'

const menuItems = [
  { id: '/findId', label: '아이디 찾기', path: '/findId' },
  { id: '/findPw', label: '비밀번호 찾기', path: '/findPw' },
  { id: '/signup', label: '회원가입', path: '/signup' },
]

const NotLogin = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3.25 items-center w-68 h-full px-7 py-8 bg-white rounded-7.5">
      <p className="text-gray1 text-caption cursor-pointer">
        M쌤이 되어 더 자유롭게 이용하세요
      </p>
      <Button text="로그인하고 이용하기" color="lightpurple" size="large" />
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
  )
}

NotLogin.defaultProps = {
  badge: undefined,
}

export default NotLogin
