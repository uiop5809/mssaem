'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const DiscussionButtonTheme = {
  size: {
    small: 'min-h-30', // home
    large: 'min-h-54', // discussion
  },
}

export type Size = keyof typeof DiscussionButtonTheme.size

export interface DiscussionButtonProps {
  content: string
  imgUrl?: string
  onClick?: () => void
  disabled?: boolean
  size: Size
  selectedPercent?: number
  selected?: boolean
}

const DiscussionButton = ({
  content,
  imgUrl,
  size,
  selectedPercent,
  selected: initialSelected = false,
  disabled: initialDisabled = false,
  onClick,
}: DiscussionButtonProps) => {
  const [selected, setSelected] = useState(initialSelected)
  const [disabled, setDisabled] = useState(initialDisabled)

  const handleClick = () => {
    setSelected(true)
    setDisabled(true)
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <button
      type="submit"
      className={clsx(
        'flex flex-col justify-center items-center border-gray4 border-1 rounded-7.5 gap-2.5 p-5 text-center w-full',
        DiscussionButtonTheme.size[size],
        {
          'bg-main2 text-white': selected,
          'bg-white text-black': !selected,
        },
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {!selected && imgUrl && (
        <Image src={imgUrl} alt="thumbnail" width={175} height={175} />
      )}
      <div>
        <p
          className={clsx('flex flex-col gap-3', 'text-body font-regular', {
            'text-title2 font-bold': selected || !imgUrl,
          })}
        >
          {content}
        </p>
        {selected && <p className="text-title2">{selectedPercent}%</p>}
      </div>
    </button>
  )
}

DiscussionButton.defaultProps = {
  imgUrl: undefined,
  disabled: false,
  selectedPercent: 0,
  selected: false,
  onClick: () => {},
}

export default DiscussionButton
