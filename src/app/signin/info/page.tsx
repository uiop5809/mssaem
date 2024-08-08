'use client'

import MbtiSelect from '@/components/auth/MbtiSelect'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Info = () => {
  const router = useRouter()
  const [nickName, setNickName] = useState('')

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }

  return (
    <div className="flex flex-col items-start my-18 w-full max-w-95 mx-auto gap-10">
      <div className="w-full text-center">
        <div className="text-maindark text-title1 font-bold">
          유저 정보 입력
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="text-gray2 text-headline font-semibold">
          M쌤에서 사용할 닉네임을 입력해주세요.
        </div>
        <Input
          value={nickName}
          onChange={handleNicknameChange}
          placeholder="닉네임"
          color="gray"
          size="medium"
        />
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="text-gray2 text-headline font-semibold">
          당신의 MBTI는 무엇인가요?
        </div>
        <div className="flex justify-between align-center">
          <MbtiSelect options={['E', 'e', 'i', 'I']} />
          <MbtiSelect options={['S', 's', 'n', 'N']} />
          <MbtiSelect options={['T', 't', 'f', 'F']} />
          <MbtiSelect options={['J', 'j', 'p', 'P']} />
        </div>
      </div>

      <Button
        text="회원가입"
        color="GRAY"
        size="login"
        onClick={() => {
          router.push('/')
        }}
      />
    </div>
  )
}

export default Info
