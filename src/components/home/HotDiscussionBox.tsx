'use client'

import { useHotDiscussion } from '@/service/home/useHomeService'
import HotDiscussion from './HotDiscussion'

const HotDiscussionBox = () => {
  const { data, isLoading, error } = useHotDiscussion()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error loading data</div>
  }

  return (
    <>
      <div className="text-title3 text-maindark font-bold my-5">HOT 토론글</div>
      <div className="flex flex-wrap justify-center gap-7.5 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
        {data && (
          <>
            {data.map((board) => (
              <HotDiscussion
                key={board.id}
                title={board.title}
                content={board.content}
                participantCount={board.participantCount}
                commentCount={board.commentCount}
                createdAt={board.createdAt}
                memberSimpleInfo={board.memberSimpleInfo}
                options={board.options}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default HotDiscussionBox
