'use client'

import Image from 'next/image'
import mbtiList from '@/constants/mbtiList'
import { useBoardListNumber } from '@/service/board/useBoardService'

interface MbtiCategoriesProps {
  selectedMbti: string
  setMbti: (mbti: string) => void
}

const MbtiCategories = ({ selectedMbti, setMbti }: MbtiCategoriesProps) => {
  const { data } = useBoardListNumber()
  const totalBoardCount = data?.boardCount || 0

  return (
    <div className="grid grid-cols-5 gap-4">
      <div
        className={`col-span-1 flex items-start justify-center cursor-pointer ${selectedMbti === 'all' ? 'underline' : ''}`}
        onClick={() => setMbti('all')}
      >
        전체 ({totalBoardCount})
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-4">
        {mbtiList.map((mbti, index) => {
          const mbtiCount = (data as any)?.[mbti.toLowerCase()] || 0
          return (
            <div
              key={index}
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setMbti(mbti)}
            >
              <p
                className={`w-21 text-gray2 ${selectedMbti === mbti ? 'underline' : ''}`}
              >
                {mbti} ({mbtiCount})
              </p>
              <Image
                src="/images/board/star_empty.svg"
                alt="star"
                width={16}
                height={16}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MbtiCategories
