import type { Metadata } from 'next'
import './globals.css'
import Recoil from '@/recoil/Recoil'
import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import ReactQueryProviders from '@/hooks/useReactQuery'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
})

// const Footer = dynamic(() => import('@/components/common/Footer'), {
//   ssr: false,
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable} font-pretendard`}>
        <Recoil>
          <ReactQueryProviders>
            <main className="flex flex-col p-5 sm:px-5% md:px-10%">
              <Header />
              {children}
              {/* <Footer /> */}
            </main>
          </ReactQueryProviders>
        </Recoil>
      </body>
    </html>
  )
}
