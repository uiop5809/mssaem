import type { Config } from 'tailwindcss'

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
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      MAIN: '#DACAFF',
      MAIN1: '#A580FC',
      MAIN2: '#AD71EA',
      MAIN3: '#FAF8FF',
      MAIN4: '#F4EFFF',
      MAINDARK: '#222222',

      ALARM: '#FF5C5C',
      YELLOW: '#F5D480',

      GRAY1: '#4E4F4E',
      GRAY2: '#7A7A7B',
      GRAY3: '#A7A7A7',
      GRAY4: '#D4D3D3',
      GRAY5: '#F5F5F5',

      WHITE: '#FFFFFF',
      BLACK: '#000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    sizes: {
      HEROTITLE: '38px',
      BIGTITLE: '32px',
      TITLE1: '28px',
      TITLE2: '22px',
      TITLE3: '18px',
      HEADLINE: '16px',
      BODY: '16px',
      FOOTNOTE: '14px',
      CAPTION: '12px',
    },
    weights: {
      REGULAR: 400,
      MEDIUM: 500,
      SEMIBOLD: 600,
      BOLD: 700,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
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
  plugins: [],
}
export default config
