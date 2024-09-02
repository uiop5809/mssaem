'use client'

import { useHotThree } from '@/service/home/useHomeService'
import { HotThreeI } from '@/model/Home'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '@/recoil/UserInfo'
import HotThree from './HotThree'
import NotLogin from '../auth/NotLogin'
import Login from '../auth/Login'

const renderHotThree = (hotThree: HotThreeI) => (
  <>
    <HotThree hotThree={hotThree} board="board" />
    <HotThree hotThree={hotThree} board="discussion" />
    <HotThree hotThree={hotThree} board="worry" />
  </>
)

const HotThreeBox = () => {
  const { data: hotThree } = useHotThree()
  const userInfo = useRecoilValue(userInfoState)

  return (
    <>
      {/* mobile */}
      <div className="bg-main4 flex items-center w-full-vw ml-half-vw gap-5 px-6% py-5 overflow-x-scroll scrollbar-hide sm:hidden">
        {!userInfo ? <NotLogin /> : <Login user={userInfo} />}
        {hotThree && renderHotThree(hotThree)}
      </div>

      {/* desktop */}
      <div className="hidden bg-main4 w-full-vw ml-half-vw gap-7.5 px-6% py-7.5 sm:px-8% sm:grid sm:grid-cols-2 md:px-13% lg:py-12.5 lg:grid lg:grid-cols-4">
        {hotThree && renderHotThree(hotThree)}
        {!userInfo ? <NotLogin /> : <Login user={userInfo} />}
      </div>
    </>
  )
}

export default HotThreeBox
