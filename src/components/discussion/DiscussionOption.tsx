'use client'

import { DiscussionOptionI } from '@/model/Discussion'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const DiscussionOptionTheme = {
  size: {
    small: 'min-h-30', // home
    large: 'min-h-54', // discussion
  },
}

export interface DiscussionOptionProps {
  discussionOption: DiscussionOptionI
  size: keyof typeof DiscussionOptionTheme.size
  disabled: boolean
  selectedPercent: string
  handleOptionClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}

const DiscussionOption = ({
  discussionOption,
  size,
  disabled,
  handleOptionClick,
}: DiscussionOptionProps) => {
  const { content, imgUrl, selectedPercent, selected } = discussionOption

  return (
    <motion.button
      type="button"
      className={clsx(
        'flex flex-col justify-center items-center border-gray4 border-1 rounded-7.5 gap-2.5 p-4 text-center w-full min-h-30 sm:min-h-54',
        DiscussionOptionTheme.size[size],
        {
          'bg-main2 text-white': selected,
          'bg-white text-black': !selected,
        },
      )}
      onClick={handleOptionClick}
      disabled={disabled}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3 }}
    >
      {imgUrl && (
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
        {selected && (
          <motion.p
            className="text-title3"
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {selectedPercent}
          </motion.p>
        )}
      </div>
    </motion.button>
  )
}

export default DiscussionOption
