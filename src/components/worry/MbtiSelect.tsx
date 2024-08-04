'use client'

import Image from 'next/image'
import { useState } from 'react'
import Dropdown from '@/components/worry/Dropdown'

const MbtiSelect = () => {
  const [selectedLeftType, setSelectedLeftType] = useState('전체')
  const [selectedRightType, setSelectedRightType] = useState('전체')
  const [showLeftDropdown, setShowLeftDropdown] = useState(false)
  const [showRightDropdown, setShowRightDropdown] = useState(false)

  const handleLeftTypeClick = (type: string) => {
    setSelectedLeftType(type)
    setShowLeftDropdown(false)
  }

  const handleRightTypeClick = (type: string) => {
    setSelectedRightType(type)
    setShowRightDropdown(false)
  }

  return (
    <div className="flex relative w-full">
      <div className="flex justify-between items-center gap-4 mb-4">
        <Dropdown
          selectedType={selectedLeftType}
          showDropdown={showLeftDropdown}
          onToggleDropdown={() => setShowLeftDropdown(!showLeftDropdown)}
          onSelectType={handleLeftTypeClick}
        />
        <Image
          src="/images/worry/arrow_right.svg"
          alt="arrow_right"
          width={18}
          height={7}
        />
        <Dropdown
          selectedType={selectedRightType}
          showDropdown={showRightDropdown}
          onToggleDropdown={() => setShowRightDropdown(!showRightDropdown)}
          onSelectType={handleRightTypeClick}
        />
      </div>
    </div>
  )
}

export default MbtiSelect
