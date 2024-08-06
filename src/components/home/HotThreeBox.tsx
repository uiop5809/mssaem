'use client'

import { useHotThree } from '@/service/home/useHomeService'
import HotThree from './HotThree'
import NotLogin from '../auth/NotLogin'

const HotThreeBox = () => {
  const { data, isLoading, error } = useHotThree()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <>
      {/* mobile */}
      <div className="bg-main4 flex items-center w-full-vw ml-half-vw gap-5 px-5.5 py-5 overflow-x-scroll scrollbar-hide sm:hidden">
        <NotLogin />
        {data && (
          <>
            <HotThree hotThree={data} board="board" />
            <HotThree hotThree={data} board="discussion" />
            <HotThree hotThree={data} board="worry" />
          </>
        )}
      </div>
      <div className="hidden bg-main4 w-full-vw ml-half-vw gap-7.5 px-6% py-7.5 sm:px-7% sm:grid sm:grid-cols-2 md:px-13% lg:py-12.5 lg:grid lg:grid-cols-4">
        {data && (
          <>
            <HotThree hotThree={data} board="board" />
            <HotThree hotThree={data} board="discussion" />
            <HotThree hotThree={data} board="worry" />
          </>
        )}
        <NotLogin />
      </div>
    </>
  )
}

export default HotThreeBox
