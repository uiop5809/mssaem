'use client'

import Image from 'next/image'
import mbtiList from '@/constants/mbtiList'

interface MbtiCategoriesProps {
  selectedMbti: string
  setMbti: (mbti: string) => void
}

// TODO: 게시물 개수 수정
const MbtiCategories = ({ selectedMbti, setMbti }: MbtiCategoriesProps) => (
  <div className="grid grid-cols-5 gap-4">
    <div
      className={`col-span-1 flex items-start justify-center cursor-pointer ${selectedMbti === 'all' ? 'underline' : ''}`}
      onClick={() => setMbti('all')}
    >
      전체 (5,230)
    </div>
    <div className="col-span-4 grid grid-cols-4 gap-4">
      {mbtiList.map((mbti, index) => (
        <div
          key={index}
          className="flex gap-3 items-center cursor-pointer"
          onClick={() => setMbti(mbti)}
        >
          <p
            className={`w-21 text-gray2 ${selectedMbti === mbti ? 'underline' : ''}`}
          >
            {mbti} (210)
          </p>
          <Image
            src="/images/board/star_empty.svg"
            alt="star"
            width={16}
            height={16}
          />
        </div>
      ))}
    </div>
  </div>
)

export default MbtiCategories
