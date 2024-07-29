import dynamic from 'next/dynamic'

// Header 컴포넌트를 동적으로 불러오기
const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
    </main>
  )
}
