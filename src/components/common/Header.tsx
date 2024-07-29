'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import Image from 'next/image'
import Button from './Button'

// Category 컴포넌트를 동적으로 불러오기
const Category = dynamic(() => import('./Category'), { ssr: false })

const Header = () => (
  <header className="flex flex-col gap-8">
    <div className="flex justify-between items-center">
      <Image src="/images/common/logo.svg" alt="logo" width={238} height={78} />
      <Button text="로그인하고 이용하기" color="purple" size="medium" />
    </div>
    <Category />
  </header>
)

export default Header
