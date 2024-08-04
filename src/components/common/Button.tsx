'use client'

const buttonTheme = {
  color: {
    enfp: 'bg-enfp',
    enfj: 'bg-enfj',
    infp: 'bg-infp',
    infj: 'bg-infj',
    intj: 'bg-intj',
    intp: 'bg-intp',
    entj: 'bg-entj',
    entp: 'bg-entp',
    istp: 'bg-istp',
    isfp: 'bg-isfp',
    estp: 'bg-estp',
    esfp: 'bg-esfp',
    istj: 'bg-istj',
    isfj: 'bg-isfj',
    estj: 'bg-estj',
    esfj: 'bg-esfj',

    purple: 'bg-main2',
    lightpurple: 'bg-main',
    green: 'bg-green',
    gray: 'bg-gray3',

    NEWBIE: 'bg-newbie',
    MBTMI: 'bg-mbtmi',
    FUNFUN: 'bg-funfun',
  },
  size: {
    small: 'px-8.75 py-2.5 rounded-3xl text-body font-bold',
    medium: 'px-5 py-2.5 rounded-3xl text-title3 font-bold',
    large: 'px-8.75 py-2.5 rounded-3xl text-title3 font-bold',
    login: 'py-4.5 w-95 rounded-2xl text-body font-regular',
    badge: 'px-2.5 py-0.75 rounded-3xl text-footnote font-regular',
  },
}

export type Color = keyof typeof buttonTheme.color | '엠비티어른' | '엠비티라노'
export type Size = keyof typeof buttonTheme.size

export interface ButtonProps {
  text: string
  size: Size
  color?: Color
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const Button = ({
  text,
  size,
  color = 'green',
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  let colorClass

  if (color === '엠비티어른') {
    colorClass = 'bg-mbtiadult'
  } else if (color === '엠비티라노') {
    colorClass = 'bg-mbtilano'
  } else {
    colorClass = buttonTheme.color[color]
  }

  return (
    <button
      type="button"
      className={`text-white ${buttonTheme.size[size]} ${colorClass} whitespace-nowrap ${className}`} // 수정
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'green',
  onClick: undefined,
  disabled: false,
  className: '', // 추가
}

export default Button
