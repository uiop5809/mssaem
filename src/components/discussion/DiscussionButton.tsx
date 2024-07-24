'use client'

import Image from 'next/image'
import clsx from 'clsx'

export interface DiscussionButtonProps {
  text: string
  imgUrl?: string
  onClick: () => void
  disabled?: boolean
}

const DiscussionButton = ({
  text,
  imgUrl,
  onClick,
  disabled,
}: DiscussionButtonProps) => (
  <button
    type="submit"
    className="flex flex-col justify-center items-center border-gray4 border-1 rounded-7.5 gap-2.5 p-5 bg-white text-center w-full min-h-54"
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
