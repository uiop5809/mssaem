import Service from '@/apis/AxiosInstance'
import { BoardDetail, BoardList, BoardListNumber } from '@/model/Board'

interface BoardListProps {
  mbti: string
  page: number
  size: number
}

interface BoardPatchProps {
  id: number
  board: FormData
}

class BoardService extends Service {
  getBoardList({ mbti, page, size }: BoardListProps) {
    const url =
      mbti === 'all'
        ? `/boards?page=${page}&size=${size}`
        : `/boards/mbti?mbti=${mbti}&page=${page}&size=${size}`

    return this.http.get<BoardList>(url)
  }

  getBoardListNumber() {
    return this.http.get<BoardListNumber>('/boards/list')
  }

  getBoardDetail(boardId: number) {
    return this.http.get<BoardDetail>(`/boards/${boardId}`)
  }

  postCategoryBookmark(mbti: string) {
    return this.http.post(`/member/bookmark?mbtiEnum=${mbti}`)
  }

  postBoardLike(boardId: number) {
    return this.http.post(`/member/boards/${boardId}/like`)
  }

  postBoard(board: FormData) {
    return this.http.post(`/member/boards`, board, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  patchBoard({ id, board }: BoardPatchProps) {
    return this.http.patch(`/member/boards/${id}`, board, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  deleteBoard(id: number) {
    return this.http.delete(`/member/boards/${id}`)
  }
}

export default new BoardService()
