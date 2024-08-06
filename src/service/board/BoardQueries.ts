import BoardService from './BoardService'

const queryKeys = {
  board: (boardId: number) => ['board', boardId] as const,
  boardList: ['boardList'] as const,
  boardListNumber: ['boardListNumber'] as const,
  bookmarkList: ['bookmarkList'] as const,
}

interface BoardListProps {
  mbti: string
  page: number
  size: number
}

interface BoardPatchProps {
  id: number
  board: FormData
}

const queryOptions = {
  boardList: {
    queryKey: queryKeys.boardList,
    queryFn: async ({ mbti, page, size }: BoardListProps) => {
      const res = await BoardService.getBoardList({
        mbti,
        page,
        size,
      })
      return res.data
    },
  },

  boardListNumber: {
    queryKey: queryKeys.boardListNumber,
    queryFn: async () => {
      const res = await BoardService.getBoardListNumber()
      return res.data
    },
  },

  boardDetail: {
    queryKey: (boardId: number) => queryKeys.board(boardId),
    queryFn: async (boardId: number) => {
      const res = await BoardService.getBoardDetail(boardId)
      return res.data
    },
  },

  postCategoryBookmark: {
    queryKey: queryKeys.bookmarkList,
    mutationFn: async (mbti: string): Promise<void> => {
      await BoardService.postCategoryBookmark(mbti)
    },
  },

  postBoardLike: {
    queryKey: (boardId: number) => queryKeys.board(boardId),
    mutationFn: async (boardId: number): Promise<void> => {
      await BoardService.postBoardLike(boardId)
    },
  },

  postBoard: {
    queryKey: queryKeys.boardList,
    mutationFn: async (board: FormData): Promise<void> => {
      await BoardService.postBoard(board)
    },
  },

  patchBoard: {
    queryKey: (boardId: number) => queryKeys.board(boardId),
    mutationFn: async ({ id, board }: BoardPatchProps): Promise<void> => {
      await BoardService.patchBoard({ id, board })
    },
  },

  deleteBoard: {
    queryKey: queryKeys.boardList,
    mutationFn: async (boardId: number): Promise<void> => {
      await BoardService.deleteBoard(boardId)
    },
  },
}

export { queryKeys, queryOptions }
