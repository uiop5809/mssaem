import type { Config } from 'tailwindcss'

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
      HEROTITLE: '1.5rem',
      BIGTITLE: '1.4rem',
      TITLE1: '1.3rem',
      TITLE2: '1.2rem',
      TITLE3: '1rem',
      HEADLINE: '0.9rem',
      BODY: '0.8rem',
      FOOTNOTE: '0.7rem',
      CAPTION: '0.6rem',
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
  },
  plugins: [],
}
export default config
