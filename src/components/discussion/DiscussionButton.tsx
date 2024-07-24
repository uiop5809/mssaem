'use client'

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
  text: string
  imgUrl?: string
  onClick: () => void
  disabled?: boolean
  size: Size
}

const DiscussionButton = ({
  text,
  imgUrl,
  onClick,
  disabled,
  size,
}: DiscussionButtonProps) => (
  <button
    type="submit"
    className={`flex flex-col justify-center items-center border-gray4 border-1 rounded-7.5 gap-2.5 p-5 bg-white text-center w-full ${DiscussionButtonTheme.size[size]}`}
    onClick={onClick}
    disabled={disabled}
  >
    {imgUrl && <Image src={imgUrl} alt="thumbnail" width={175} height={175} />}
    <p
      className={clsx('text-body font-regular', {
        'text-title1 font-bold': !imgUrl,
      })}
    >
      {text}
    </p>
  </button>
)

DiscussionButton.defaultProps = {
  imgUrl: undefined,
  disabled: false,
}

export default DiscussionButton
