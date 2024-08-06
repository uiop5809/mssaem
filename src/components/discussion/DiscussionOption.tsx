'use client'

import { DiscussionOptionI } from '@/model/Discussion'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const DiscussionOptionTheme = {
  size: {
    small: 'min-h-30', // home
    large: 'min-h-54', // discussion
  },
}

export interface DiscussionOptionProps {
  discussionOption: DiscussionOptionI
  size: keyof typeof DiscussionOptionTheme.size
  onClick: () => void
}

// TODO: 사진 크기 맞추기
const DiscussionOption = ({
  discussionOption,
  size,
  onClick,
}: DiscussionOptionProps) => {
  const { content, imgUrl, disabled, selectedPercent, selected } =
    discussionOption

  return (
    <button
      type="submit"
      className={clsx(
        'flex flex-col justify-center items-center border-gray4 border-1 rounded-7.5 gap-2.5 p-4 sm:p-5 text-center w-full',
        DiscussionOptionTheme.size[size],
        {
          'bg-main2 text-white': selected,
          'bg-white text-black': !selected,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {!selected && imgUrl && (
        <Image src={imgUrl} alt="thumbnail" width={175} height={175} />
      )}
      <div>
        <p
          className={clsx('flex flex-col gap-3', 'text-body font-regular', {
            'text-body sm:text-title2 font-bold': selected || !imgUrl,
          })}
        >
          {content}
        </p>
        {selected && <p className="text-title2">{selectedPercent}%</p>}
      </div>
    </button>
  )
}

export default DiscussionOption
