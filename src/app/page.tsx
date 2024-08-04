import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex p-5 sm:px-5% md:px-10%">
      <Header />
    </main>
  )
}
