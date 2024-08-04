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
        green: '#5BE1A9',

        gray1: '#4E4F4E',
        gray2: '#7A7A7B',
        gray3: '#A7A7A7',
        gray4: '#D4D3D3',
        gray5: '#F5F5F5',
        gray6: '#E0E0E0',

        enfp: '#F9CAF2',
        enfj: '#FCE8CA',
        infp: '#CAFCD4',
        infj: '#CAEEFC',
        intj: '#C6A1AE',
        intp: '#7581F2',
        entj: '#3D3DA0',
        entp: '#A588FF',
        istp: '#B2A8A6',
        isfp: '#FFD1C5',
        estp: '#A4B79F',
        esfp: '#D8C8FD',
        istj: '#83899B',
        isfj: '#4B784B',
        estj: '#68676B',
        esfj: '#B8C4EE',

        newbie: '#80E045',
        mbtilano: '#00AF76',
        mbtmi: '#FAA454',
        mbtiadult: '#F85CA2',
        funfun: '#00B5DC',
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
        pretendard: ['var(--font-pretendard)'],
      },
      fontSize: {
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
      spacing: {
        '0.75': '3px',
        '1.25': '5px',
        '3.25': '13px',
        '3.75': '15px',
        '4.5': '18px',
        '7.5': '30px',
        '8.75': '35px',
        '68': '272px',
        '95': '380px',
        ...generateRange(1, 100).reduce<Record<string, string>>((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),
      },
      borderRadius: {
        '2.5': '10px',
        '3.75': '15px',
        '7.5': '30px',
        '14': '56px',
      },
      borderWidth: {
        '1': '1px',
      },
      width: {
        '21': '84px',
        '24': '96px',
      },
      height: {
        '21': '84px',
        '24': '96px',
        '44': '166px',
      },
      minHeight: {
        '30': '120px',
        '54': '212px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.transparent-scrollbar': {
          'scrollbar-color': 'transparent transparent',
          'scrollbar-width': 'thin',
        },
      })
    },
  ],
}
export default config
