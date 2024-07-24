'use client'

const InputTheme = {
  color: {
    gray: ' text-gray2',
  },
  size: {
    medium: 'p-4.5 text-headline', // 닉네임
  },
}

type Color = keyof typeof InputTheme.color
type Size = keyof typeof InputTheme.size

export interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  color: Color
  size: Size
}

const Input = ({ value, onChange, color, size }: InputProps) => (
  <input
    className={`bg-white border-gray4 border-2 rounded-3.75 ${InputTheme.color[color]} ${InputTheme.size[size]}`}
    value={value}
    onChange={onChange}
  />
)

export default Input
