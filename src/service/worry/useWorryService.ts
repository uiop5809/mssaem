import {
  useMutation,
  useQuery,
  UseMutationOptions,
} from '@tanstack/react-query'
import { queryOptions } from './WorryQueries'

interface WorryPatchProps {
  id: number
  worry: FormData
}

const useWaitingWorryList = (
  page: number,
  size: number,
  strFromMbti: string,
  strToMbti: string,
) =>
  useQuery({
    ...queryOptions.worryList,
    queryKey: ['worryList', page, size, strFromMbti, strToMbti],
    queryFn: () =>
      queryOptions.worryList.queryFn({ page, size, strFromMbti, strToMbti }),
  })

const useWorryDetail = (worryId: number) =>
  useQuery({
    ...queryOptions.worryDetail,
    queryKey: ['worryDetail', worryId],
    queryFn: () => queryOptions.worryDetail.queryFn(worryId),
  })

const usePostWorry = () => {
  const mutationFn = (worry: FormData): Promise<void> =>
    queryOptions.postWorry.mutationFn(worry)

  const options: UseMutationOptions<void, Error, FormData, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, FormData>(options)
}

const usePatchWorry = () => {
  const mutationFn = ({ id, worry }: WorryPatchProps): Promise<void> =>
    queryOptions.patchWorry.mutationFn({ id, worry })

  const options: UseMutationOptions<void, Error, WorryPatchProps, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, WorryPatchProps>(options)
}

const useDeleteWorry = () => {
  const mutationFn = (id: number): Promise<void> =>
    queryOptions.deleteWorry.mutationFn(id)

  const options: UseMutationOptions<void, Error, number, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, number>(options)
}

const usePatchWorrySolved = () => {
  const mutationFn = (worryId: number): Promise<void> =>
    queryOptions.patchWorrySolved.mutationFn(worryId)

  const options: UseMutationOptions<void, Error, number, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, number>(options)
}

export {
  useWaitingWorryList,
  useWorryDetail,
  usePostWorry,
  usePatchWorry,
  useDeleteWorry,
  usePatchWorrySolved,
}
