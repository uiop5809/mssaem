'use client'

import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Button from './Button'

const Category = dynamic(() => import('./Category'), { ssr: false })

const extraCategories = [
  { path: '/chatting', label: '채팅' },
  { path: '/alarm', label: '알람' },
  { path: '/favorites', label: '즐겨찾기' },
]

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (pathname) {
      setSelected(pathname)
    }
  }, [pathname])

  const handleClick = (path: string) => {
    setSelected(path)
    router.push(path)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-custom-light px-5 sm:px-7% md:px-10%">
        {/* desktop */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => router.push('/')}
          className="hidden sm:flex justify-between items-center cursor-pointer py-5"
        >
          <Image
            src="/images/common/logo.svg"
            alt="logo"
            width={238}
            height={78}
          />
          <Button text="로그인하고 이용하기" color="PURPLE" size="medium" />
        </div>

        {/* mobile */}
        <div className="sm:hidden flex justify-between items-center pt-10 pb-2">
          <div
            role="button"
            tabIndex={0}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          >
            <Image
              src="/images/common/cat_logo.svg"
              alt="cat logo"
              width={35}
              height={30}
            />
          </div>
          <div className="flex items-center gap-5 list-none">
            {extraCategories.map((category) => (
              <li key={category.path}>
                <button
                  type="button"
                  onClick={() => handleClick(category.path)}
                  className={`cursor-pointer relative hover:text-main1 transition-all ${
                    selected === category.path
                      ? 'text-main1 font-bold after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:bg-main1 after:opacity-100'
                      : ''
                  }`}
                >
                  {category.label}
                </button>
              </li>
            ))}
            <button type="button" onClick={() => router.push('/search')}>
              <Image
                src="/images/common/search.svg"
                alt="search"
                width={35}
                height={35}
              />
            </button>
          </div>
        </div>
        <Category />
      </header>
      <div className="pt-30 sm:pt-38.5">
        {/* 다른 콘텐츠는 이 div 내부에 위치 */}
      </div>
    </>
  )
}

export default Header
