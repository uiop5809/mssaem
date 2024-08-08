import WorryService, { WorryListProps, WorryPatchProps } from './WorryService'

const queryKeys = {
  worry: (worryId: number) => ['worry', worryId] as const,
  worryList: ['worryList'] as const,
  worryListNumber: ['worryListNumber'] as const,
  bookmarkList: ['bookmarkList'] as const,
}

const queryOptions = {
  worryList: {
    queryKey: queryKeys.worryList,
    queryFn: async ({ page, size, strFromMbti, strToMbti }: WorryListProps) => {
      const res = await WorryService.getWaitingWorryList({
        page,
        size,
        strFromMbti,
        strToMbti,
      })
      return res.data
    },
  },

  worryDetail: {
    queryKey: (worryId: number) => queryKeys.worry(worryId),
    queryFn: async (worryId: number) => {
      const res = await WorryService.getWorryDetail(worryId)
      return res.data
    },
  },

  postWorry: {
    queryKey: queryKeys.worryList,
    mutationFn: async (worry: FormData): Promise<void> => {
      await WorryService.postWorry(worry)
    },
  },

  patchWorry: {
    queryKey: (worryId: number) => queryKeys.worry(worryId),
    mutationFn: async ({ id, worry }: WorryPatchProps): Promise<void> => {
      await WorryService.patchWorry({ id, worry })
    },
  },

  deleteWorry: {
    queryKey: queryKeys.worryList,
    mutationFn: async (worryId: number): Promise<void> => {
      await WorryService.deleteWorry(worryId)
    },
  },

  patchWorrySolved: {
    queryKey: (worryId: number) => queryKeys.worry(worryId),
    mutationFn: async (worryId: number): Promise<void> => {
      await WorryService.patchWorrySolved(worryId)
    },
  },
}

export { queryKeys, queryOptions }
