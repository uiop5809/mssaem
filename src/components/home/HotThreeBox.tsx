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
    <div className="w-full-vw ml-half-vw flex flex-wrap justify-center gap-7.5 px-5 sm:px-5% md:px-12% py-16 bg-main4 p-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4">
      {data && (
        <>
          <HotThree
            boardId={data.boardId}
            boardTitle={data.boardTitle}
            discussionId={data.discussionId}
            discussionTitle={data.discussionTitle}
            worryBoardId={data.worryBoardId}
            worryBoardTitle={data.worryBoardTitle}
          />
          <HotThree
            boardId={data.boardId}
            boardTitle={data.boardTitle}
            discussionId={data.discussionId}
            discussionTitle={data.discussionTitle}
            worryBoardId={data.worryBoardId}
            worryBoardTitle={data.worryBoardTitle}
          />
          <HotThree
            boardId={data.boardId}
            boardTitle={data.boardTitle}
            discussionId={data.discussionId}
            discussionTitle={data.discussionTitle}
            worryBoardId={data.worryBoardId}
            worryBoardTitle={data.worryBoardTitle}
          />
          <NotLogin />
        </>
      )}
    </div>
  )
}

export default HotThreeBox
