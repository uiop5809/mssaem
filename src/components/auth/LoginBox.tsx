'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const LoginBox = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center my-22 w-full max-w-95 mx-auto text-center">
      <Image
        src="/images/common/cat_logo.svg"
        alt="logo"
        width={103}
        height={93}
      />
      <div className="text-maindark text-title1 font-bold mt-7.5 mb-5">
        로그인 / 회원가입
      </div>
      <div className="text-gray2 text-headline font-normal">
        소셜 로그인 및 이메일로 가입할 수 있습니다.
      </div>
      <hr className="bg-gray4 border-0 w-full h-[1px] my-10" />

      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <button
          type="button"
          className="w-full max-w-xs"
          onClick={() =>
            router.push(
              'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email',
            )
          }
        >
          <Image
            src="/images/auth/google_btn.svg"
            alt="google_btn"
            layout="responsive"
            width={200}
            height={50}
          />
        </button>
        <button
          type="button"
          className="w-full max-w-xs"
          onClick={() =>
            router.push(
              'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email',
            )
          }
        >
          <Image
            src="/images/auth/kakao_btn.svg"
            alt="kakao_btn"
            layout="responsive"
            width={200}
            height={50}
          />
        </button>
      </div>
    </div>
  )
}

export default LoginBox
