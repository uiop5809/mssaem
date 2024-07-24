'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export interface LabeledButtonProps {
  label: string
  onClick: () => void
}

const LabeledButton = ({ label, onClick }: LabeledButtonProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
    onClick()
  }

  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer"
      onClick={handleClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Image
        src="/images/common/check.svg"
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
}

LabeledButton.displayName = 'LabeledButton'

export default LabeledButton
