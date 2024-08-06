'use client'

import Image from 'next/image'
import { WorryBoardI } from '@/model/Worry'
import Button from '../common/Button'

export interface WorryBoardProps {
  worryBoard: WorryBoardI
}

const WorryBoard = ({ worryBoard }: WorryBoardProps) => {
  const { title, content, memberMbti, targetMbti, createdDate, imgUrl } =
    worryBoard

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-2.5">
          <Button text={memberMbti} color={memberMbti} size="badge" />
          <Image
            src="/images/worry/arrow_right.svg"
            alt="arrow"
            width={18}
            height={4}
          />
          <Button text={targetMbti} color={targetMbti} size="badge" />
          <p className="text-gray2 text-caption">{createdDate}</p>
        </div>
        <div className="flex flex-col gap-1.75">
          <div className="text-title3 font-semibold">{title}</div>
          <div className="text-body font-regular">{content}</div>
        </div>
      </div>
      <Image src={imgUrl} alt="image" width={84} height={84} />
    </div>
  )
}

export default WorryBoard
