'use client'

import React from 'react'
import Image from 'next/image'

export interface LabeledButtonProps {
  label: string
  isClicked: boolean
  onClick: () => void
}

const LabeledButton = ({ label, isClicked, onClick }: LabeledButtonProps) => (
  <div className="flex items-center gap-2.5 cursor-pointer" onClick={onClick}>
    <Image
      src={
        isClicked ? '/images/common/checked.svg' : '/images/common/check.svg'
      }
      alt="check"
      width={17}
      height={17}
    />
    <span
      className={`text-body ${isClicked ? 'text-gray1 font-bold' : 'text-gray2 font-regular'}`}
    >
      {label}
    </span>
  </div>
)

export default LabeledButton
