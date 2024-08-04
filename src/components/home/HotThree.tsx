import React from 'react'

export interface HotThreeProps {
  boardId: number | null
  boardTitle: string | null
  discussionId: number | null
  discussionTitle: string | null
  worryBoardId: number | null
  worryBoardTitle: string | null
}

const HotThree = ({
  boardId,
  boardTitle,
  discussionId,
  discussionTitle,
  worryBoardId,
  worryBoardTitle,
}: HotThreeProps) => {
  const getCurrentLabel = () => {
    if (boardId != null) return '게시물'
    if (discussionId != null) return '토론글'
    if (worryBoardId != null) return '고민글'
    return '내용 없음'
  }

  const getTitle = () => {
    if (boardId != null) return boardTitle
    if (discussionId != null) return discussionTitle
    if (worryBoardId != null) return worryBoardTitle
    return null
  }

  const currentLabel = getCurrentLabel()
  const title = getTitle()

  return (
    <div className="relative flex flex-col justify-between w-full h-44 pt-8.75 pr-7.5 pb-5 pl-7.5 bg-white rounded-7.5">
      <div className="absolute top-[-10px] left-3.75 bg-alarm text-white text-footnote px-2.5 py-2 font-regular">
        HOT
      </div>
      <div className="text-gray2 text-headline font-semibold">
        지금의 {currentLabel}
      </div>
      {title && (
        <div className="text-maindark text-title3 font-semibold">{title}</div>
      )}
      <div className="text-gray2 text-caption underline text-right">
        바로가기
      </div>
    </div>
  )
}

export default HotThree
