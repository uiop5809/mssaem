import { Profile } from '@/model/User'
import UserService from './UserService'

const queryKeys = {
  user: ['user'] as const,
  terms: ['terms'] as const,
  profile: (id: number) => ['profile', id] as const,
}

const queryOptions = {
  terms: {
    queryKey: queryKeys.terms,
    queryFn: async () => {
      const res = await UserService.getTerms()
      return res.data
    },
  },

  profile: {
    queryKey: (id: number) => queryKeys.profile(id),
    queryFn: async (id: number) => {
      const res = await UserService.getProfile(id)
      return res.data
    },
  },

  userInfo: {
    queryKey: queryKeys.user,
    queryFn: async () => {
      const res = await UserService.getUserInfo()
      return res.data
    },
  },

  patchProfile: {
    queryKey: (boardId: number) => queryKeys.profile(boardId),
    mutationFn: async (profile: Profile): Promise<void> => {
      await UserService.patchProfile(profile)
    },
  },

  postProfileImg: {
    queryKey: queryKeys.profile,
    mutationFn: async (profileImg: FormData): Promise<void> => {
      await UserService.postProfileImg(profileImg)
    },
  },

  deleteProfileImg: {
    queryKey: queryKeys.profile,
    mutationFn: async (): Promise<void> => {
      await UserService.deleteProfileImg()
    },
  },
}

export default queryOptions
