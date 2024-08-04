'use client'

import Image from 'next/image'
import Button, { Color } from '../common/Button'

export interface PopularMssaemProps {
  nickName: string
  mbti: Color
  badge: string
  profileImageurl: string
  introduction: string
}

const PopularMssaem = ({
  nickName,
  mbti,
  badge,
  profileImageurl,
  introduction,
}: PopularMssaemProps) => (
  <div className="flex flex-col items-center gap-4">
    <Image src={profileImageurl} alt="profile" width={194} height={194} />
    <div className="flex flex-col items-center gap-2.5">
      <div className="text-title1 text-maindark font-bold">{nickName} 님</div>
      <div className="flex gap-2.5">
        <Button text={mbti} color={mbti} size="badge" />
        <Button text={badge} color={badge} size="badge" />
      </div>
    </div>
    <div className="text-body text-gray1 font-regular">{introduction}</div>
  </div>
)

export default PopularMssaem
