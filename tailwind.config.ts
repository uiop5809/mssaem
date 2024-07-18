import type { Config } from 'tailwindcss'

// 개발환경에선 px로, 프로덕션 환경에선 rem으로 변환
const pxToRem = (px: number, base: number = 16): string => `${px / base}rem`

const generateRange = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#DACAFF',
        main1: '#A580FC',
        main2: '#AD71EA',
        main3: '#FAF8FF',
        main4: '#F4EFFF',
        maindark: '#222222',
        alarm: '#FF5C5C',
        gray1: '#4E4F4E',
        gray2: '#7A7A7B',
        gray3: '#A7A7A7',
        gray4: '#D4D3D3',
        gray5: '#F5F5F5',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      sizes: {
        herotitle: '38px',
        bigtitle: '32px',
        title1: '28px',
        title2: '22px',
        title3: '18px',
        headline: '16px',
        body: '16px',
        footnote: '14px',
        caption: '12px',
      },
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      container: {
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      spacing: {
        ...generateRange(1, 100).reduce<Record<string, string>>((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),
      },
    },
  },
  plugins: [],
}
export default config
