'use client'

const buttonTheme = {
  color: {
    purple: 'bg-main2',
    lightpurple: 'bg-main',
    green: 'bg-green',
    gray: 'bg-gray3',
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
  },
  size: {
    small: 'px-8.75 py-2.5 rounded-3xl text-body font-bold',
    medium: 'px-5 py-2.5 rounded-3xl text-title3 font-bold',
    large: 'px-8.75 py-2.5 rounded-3xl text-title3 font-bold',
    login: 'py-4.5 w-95 rounded-2xl text-body font-regular',
    badge: 'px-2.5 py-0.75 rounded-3xl text-footnote font-regular',
  },
}

export type Color = keyof typeof buttonTheme.color
export type Size = keyof typeof buttonTheme.size

export interface ButtonProps {
  text: string
  size: Size
  color?: Color
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  text,
  size,
  color = 'green',
  onClick,
  disabled,
}: ButtonProps) => (
  <button
    type="button"
    className={`text-white ${buttonTheme.size[size]} ${buttonTheme.color[color]} whitespace-nowrap`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)

Button.defaultProps = {
  color: 'green',
  onClick: undefined,
  disabled: false,
}

export default Button
