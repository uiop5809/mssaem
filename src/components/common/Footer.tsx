'use client'

import React from 'react'
import Image from 'next/image'

const option = ['이용약관', '개인정보처리방침', '문의 이메일']

const Footer = () => (
  <footer className="flex flex-col items-center gap-5 my-10">
    <ul className="flex justify-center items-center gap-3 text-gray2 text-caption">
      {option.map((item, index) => (
        <React.Fragment key={index}>
          <li className="flex items-center">
            <a href={`#${item}`} className="px-2">
              {item}
            </a>
          </li>
          {index < option.length - 1 && (
            <li className="flex items-center">
              <span className="mx-1.5">|</span>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
    <hr className="w-full text-gray4" />
    <Image
      src="/images/common/mini_logo.svg"
      alt="logo"
      width={86}
      height={28}
    />
  </footer>
)

export default Footer
