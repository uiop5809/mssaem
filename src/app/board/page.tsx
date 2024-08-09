'use client'

import Board from '@/components/board/Board'
import MbtiCategories from '@/components/board/MbtiCategories'
import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import Pagination from '@/components/common/Pagination'
import { useBoardList } from '@/service/board/useBoardService'
import { useState } from 'react'

const BoardPage = () => {
  const [mbti, setMbti] = useState<string>('all')
  const [page, setPage] = useState<number>(1)
  const pageSize = 6

  const { data: boardList } = useBoardList(mbti, page - 1, pageSize)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <>
      <MbtiCategories selectedMbti={mbti} setMbti={setMbti} />
      <div className="text-title3 text-maindark font-semibold my-5">
        {mbti === 'all' ? '전체' : mbti} 게시판
      </div>
      <Container color="purple">
        <div className="text-right mb-5">
          <Button
            text="글 쓰기"
            color="PURPLE"
            size="small"
            onClick={() => {}}
          />
        </div>
        <div className="h-[1px] bg-main" />
        {boardList &&
          boardList.result.map((board) => (
            <div key={board.id}>
              <Board board={board} />
              <div className="h-[1px] bg-main" />
            </div>
          ))}

        {/* Pagination 컴포넌트 추가 */}
        {boardList && (
          <div className="mt-5">
            <Pagination
              itemsCount={boardList.totalSize}
              pageSize={pageSize}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </Container>
    </>
  )
}

export default BoardPage
