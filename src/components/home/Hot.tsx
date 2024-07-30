import React from 'react'

export interface HotProps {
  boardId: number | null
  boardTitle: string | null
  discussionId: number | null
  discussionTitle: string | null
  worryBoardId: number | null
  worryBoardTitle: string | null
}

const Hot = ({
  boardId,
  boardTitle,
  discussionId,
  discussionTitle,
  worryBoardId,
  worryBoardTitle,
}: HotProps) => {
  let currentLabel
  if (boardId != null) {
    currentLabel = '게시물'
  } else if (discussionId != null) {
    currentLabel = '토론글'
  } else if (worryBoardId != null) {
    currentLabel = '고민글'
  }

  return (
    <div className="flex flex-col justify-between w-full h-44 p-9 bg-white rounded-7.5">
      <div className="text-gray2 text-headline font-semibold">
        지금의 {currentLabel}
      </div>
      {boardId != null && (
        <div className="text-maindark text-title3 font-semibold">
          {boardTitle}
        </div>
      )}
      {discussionId != null && (
        <div className="text-maindark text-title3 font-semibold">
          {discussionTitle}
        </div>
      )}
      {worryBoardId != null && (
        <div className="text-maindark text-title3 font-semibold">
          {worryBoardTitle}
        </div>
      )}
      <div className="text-gray2 text-caption underline text-right">
        바로가기
      </div>
    </div>
  )
}

export default Hot
