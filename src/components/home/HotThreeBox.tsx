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
    <div className="bg-main4 w-full-vw ml-half-vw flex flex-wrap justify-center gap-7.5 px-6% py-7.5  sm:px-7% sm:grid sm:grid-cols-2  md:px-13% lg:py-12.5 lg:grid lg:grid-cols-4">
      {data && (
        <>
          <HotThree
            boardTitle={data.boardTitle}
            discussionTitle={data.discussionTitle}
            worryBoardTitle={data.worryBoardTitle}
            board="board"
          />
          <HotThree
            boardTitle={data.boardTitle}
            discussionTitle={data.discussionTitle}
            worryBoardTitle={data.worryBoardTitle}
            board="discussion"
          />
          <HotThree
            boardTitle={data.boardTitle}
            discussionTitle={data.discussionTitle}
            worryBoardTitle={data.worryBoardTitle}
            board="worry"
          />
          <NotLogin />
        </>
      )}
    </div>
  )
}

export default HotThreeBox
