'use client'

import Image from 'next/image'

const SearchInput = () => (
  <div className="relative w-full">
    <input
      type="text"
      placeholder="검색어를 입력해주세요."
      className="text-maindark text-title3 font-bold border-b border-maindark w-full py-2 pr-10 focus:outline-none"
    />
    <button
      type="button"
      className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2"
      onMouseDown={(e) => e.preventDefault()}
      aria-label="Search"
    >
      <Image
        src="/images/search/search.svg"
        alt="Search"
        width={35}
        height={35}
      />
    </button>
  </div>
)

export default SearchInput
