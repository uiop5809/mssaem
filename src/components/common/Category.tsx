'use client'

import { useRouter } from 'next/router'
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
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (router.pathname) {
      setSelected(router.pathname)
    }
  }, [router.pathname])

  const handleClick = (path: string) => {
    setSelected(path)
    router.push(path)
  }

  return (
    <div className="flex justify-between items-center mb-1">
      <ul className="flex items-center text-title3 font-normal">
        {categories.map((category) => (
          <li key={category.path}>
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

      <ul className="flex items-center text-title3 font-normal">
        {extraCategories.map((category) => (
          <li key={category.path}>
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
      </ul>
    </div>
  )
}

export default Category
