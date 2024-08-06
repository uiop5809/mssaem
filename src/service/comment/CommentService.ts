import Service from '@/apis/AxiosInstance'
import { CommentList } from '@/model/Comment'

export interface CommentListProps {
  boardId: number
  page: number
  size: number
}

export interface PostCommentProps {
  boardId: number
  comment: FormData
  commentId?: number
}

export interface CommentDetailProps {
  boardId: number
  commentId: number
}

class CommentService extends Service {
  getCommentList({ boardId, page, size }: CommentListProps) {
    return this.http.get<CommentList>(
      `/boards/${boardId}/comments?page=${page}&size=${size}`,
    )
  }

  getCommentBest({ boardId, page, size }: CommentListProps) {
    return this.http.get<Comment>(
      `/boards/${boardId}/comments/best?page=${page}&size=${size}`,
    )
  }

  postCommentLike({ boardId, commentId }: CommentDetailProps) {
    return this.http.post(
      `/member/boards/${boardId}/comments/${commentId}/like`,
    )
  }

  postComment({ boardId, comment, commentId }: PostCommentProps) {
    const url = commentId
      ? `/member/boards/${boardId}/comments?commentId=${commentId}`
      : `/member/boards/${boardId}/comments`

    return this.http.post(url, comment, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  deleteComment({ boardId, commentId }: CommentDetailProps) {
    return this.http.delete(`/member/boards/${boardId}/comments/${commentId}`)
  }
}

export default new CommentService()
