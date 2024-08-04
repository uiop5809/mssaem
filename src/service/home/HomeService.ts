import Service from '@/apis/AxiosInstance'
import Board from '@/model/Board'
import { Discussion } from '@/model/Discussion'
import { HotBoardMore, HotDiscussionMore, HotThree } from '@/model/Home'
import Worry from '@/model/Worry'

interface HotMoreProps {
  page: number
  size: number
}

class HomeService extends Service {
  getHotThree() {
    return this.http.get<HotThree>(`/three-hot`)
  }

  getHotBoard() {
    return this.http.get<Board[]>(`/boards/home`)
  }

  getHotBoardMore({ page, size }: HotMoreProps) {
    return this.http.get<HotBoardMore>(`/boards/hot?page=${page}&size=${size}`)
  }

  getHotDiscussion() {
    return this.http.get<Discussion[]>(`/discussions/home`)
  }

  getHotDiscussionMore({ page, size }: HotMoreProps) {
    return this.http.get<HotDiscussionMore>(
      `/discussions/hot?page=${page}&size=${size}`,
    )
  }

  getWorry() {
    return this.http.get<Worry[]>(`/worry-board/home`)
  }

  getPopularMssaem() {
    return this.http.get(`/teacher`)
  }
}

export default new HomeService()
