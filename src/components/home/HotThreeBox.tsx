'use client'

import { useHotThree } from '@/service/home/useHomeService'
import { useUserInfo } from '@/service/user/useUserService'
import HotThree from './HotThree'
import NotLogin from '../auth/NotLogin'
import Login from '../auth/Login'

const HotThreeBox = () => {
  const { data: hotThree } = useHotThree()
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {/* mobile */}
      <div className="bg-main4 flex items-center w-full-vw ml-half-vw gap-5 px-6% py-5 overflow-x-scroll scrollbar-hide sm:hidden">
        {userInfo ? (
          <>
            <Login user={userInfo} />
            {hotThree && (
              <>
                <HotThree hotThree={hotThree} board="board" />
                <HotThree hotThree={hotThree} board="discussion" />
                <HotThree hotThree={hotThree} board="worry" />
              </>
            )}
          </>
        ) : (
          <>
            <NotLogin />
            {hotThree && (
              <>
                <HotThree hotThree={hotThree} board="board" />
                <HotThree hotThree={hotThree} board="discussion" />
                <HotThree hotThree={hotThree} board="worry" />
              </>
            )}
          </>
        )}
      </div>
      {/* desktop */}
      <div className="hidden bg-main4 w-full-vw ml-half-vw gap-7.5 px-6% py-7.5 sm:px-8% sm:grid sm:grid-cols-2 md:px-13% lg:py-12.5 lg:grid lg:grid-cols-4">
        {userInfo ? (
          <>
            {hotThree && (
              <>
                <HotThree hotThree={hotThree} board="board" />
                <HotThree hotThree={hotThree} board="discussion" />
                <HotThree hotThree={hotThree} board="worry" />
              </>
            )}
            <Login user={userInfo} />
          </>
        ) : (
          <>
            {hotThree && (
              <>
                <HotThree hotThree={hotThree} board="board" />
                <HotThree hotThree={hotThree} board="discussion" />
                <HotThree hotThree={hotThree} board="worry" />
              </>
            )}
            <NotLogin />
          </>
        )}
      </div>
    </>
  )
}

export default HotThreeBox
