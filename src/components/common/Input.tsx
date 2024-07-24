'use client'

const InputTheme = {
  color: {
    gray: 'text-gray2',
    purple: 'border-main text-gray2',
  },
  size: {
    medium: 'p-4.5 text-headline rounded-3.75', // 닉네임
    large: 'px-5 py-4 text-headline rounded-7.5 font-bold w-full', // 댓글
  },
}

type Color = keyof typeof InputTheme.color
type Size = keyof typeof InputTheme.size

export interface InputProps {
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  color: Color
  size: Size
}

const Input = ({ value, placeholder, onChange, color, size }: InputProps) => (
  <input
    className={`bg-white border-1 ${InputTheme.color[color]} ${InputTheme.size[size]} focus:outline-none focus:border-main`}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)

Input.defaultProps = {
  placeholder: '',
}

export default Input
