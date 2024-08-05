import {
  useMutation,
  useQuery,
  UseMutationOptions,
} from '@tanstack/react-query'
import { queryOptions } from './BoardQueries'

interface BoardPatchProps {
  id: number
  board: FormData
}

const useBoardList = (mbti: string, page: number, size: number) =>
  useQuery({
    ...queryOptions.boardList,
    queryKey: ['boardList', mbti, page, size],
    queryFn: () => queryOptions.boardList.queryFn({ mbti, page, size }),
  })

const useBoardListNumber = () => useQuery(queryOptions.boardListNumber)

const useBoardDetail = (boardId: number) =>
  useQuery({
    ...queryOptions.boardDetail,
    queryKey: ['boardDetail', boardId],
    queryFn: () => queryOptions.boardDetail.queryFn(boardId),
  })

const usePostCategoryBookmark = () => {
  const mutationFn = (mbti: string): Promise<void> =>
    queryOptions.postBoardLike.mutationFn(mbti)

  const options: UseMutationOptions<void, Error, string, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, string>(options)
}

const usePostBoardLike = () => {
  const mutationFn = (boardId: number): Promise<void> =>
    queryOptions.postBoardLike.mutationFn(boardId)

  const options: UseMutationOptions<void, Error, number, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, number>(options)
}

const usePostBoard = () => {
  const mutationFn = (board: FormData): Promise<void> =>
    queryOptions.postBoard.mutationFn(board)

  const options: UseMutationOptions<void, Error, FormData, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, FormData>(options)
}

const usePatchBoard = () => {
  const mutationFn = ({ id, board }: BoardPatchProps): Promise<void> =>
    queryOptions.patchBoard.mutationFn({ id, board })

  const options: UseMutationOptions<void, Error, BoardPatchProps, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, BoardPatchProps>(options)
}

const useDeleteBoard = () => {
  const mutationFn = (id: number): Promise<void> =>
    queryOptions.deleteBoard.mutationFn(id)

  const options: UseMutationOptions<void, Error, number, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, number>(options)
}

export {
  useBoardList,
  useBoardListNumber,
  useBoardDetail,
  usePostCategoryBookmark,
  usePostBoardLike,
  usePostBoard,
  usePatchBoard,
  useDeleteBoard,
}
