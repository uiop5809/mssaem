'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const categories = [
  { path: '/', label: 'HOME' },
  { path: '/board/mbti', label: '게시판' },
  { path: '/match/matching', label: 'M쌤 매칭' },
  { path: '/debate/postlist', label: 'MBTI 과몰입 토론' },
]

const extraCategories = [
  { path: '/chatting', label: '채팅' },
  { path: '/alarm', label: '알람' },
  { path: '/favorites', label: '즐겨찾기' },
]

const Category = () => {
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
    <div className="sm:overflow-x-visible overflow-x-auto relative">
      <div className="h-12 border-t border-t-gray5 sm:border-t-0 whitespace-nowrap sm:whitespace-normal flex justify-between items-center relative">
        <ul className="flex items-center text-title3 font-normal">
          {categories.map((category) => (
            <li key={category.path} className="list-none">
              <button
                type="button"
                onClick={() => handleClick(category.path)}
                className={`mr-7 cursor-pointer relative hover:text-main1 transition-all ${
                  selected === category.path
                    ? 'text-main1 font-bold after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:bg-main1 after:opacity-100'
                    : ''
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>

        {/* 데스크탑 버전 */}
        <ul className="hidden sm:flex items-center text-title3 font-normal list-none">
          {extraCategories.map((category) => (
            <li key={category.path} className="list-none">
              <button
                type="button"
                onClick={() => handleClick(category.path)}
                className={`ml-7 cursor-pointer relative hover:text-main1 transition-all ${
                  selected === category.path
                    ? 'text-main1 font-bold after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:bg-main1 after:opacity-100'
                    : ''
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
          <li className="list-none">
            <button
              type="button"
              onClick={() => router.push('/search')}
              className="ml-7 cursor-pointer relative hover:text-main1 transition-all"
            >
              <Image
                src="/images/common/search.svg"
                alt="search"
                width={35}
                height={35}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Category
