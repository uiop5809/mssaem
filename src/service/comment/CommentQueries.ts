import CommentService, {
  CommentDetailProps,
  CommentListProps,
  PostCommentProps,
} from './CommentService'

const queryKeys = {
  commentList: ['commentList'] as const,
  commentBest: ['commentBest'] as const,
}

const queryOptions = {
  commentList: {
    queryKey: queryKeys.commentList,
    queryFn: async ({ boardId, page, size }: CommentListProps) => {
      const res = await CommentService.getCommentList({ boardId, page, size })
      return res.data
    },
  },

  commentBest: {
    queryKey: queryKeys.commentBest,
    queryFn: async ({ boardId, page, size }: CommentListProps) => {
      const res = await CommentService.getCommentBest({ boardId, page, size })
      return res.data
    },
  },

  postCommentLike: {
    queryKey: queryKeys.commentList,
    mutationFn: async ({ boardId, commentId }: CommentDetailProps): Promise<void> => {
      await CommentService.postCommentLike({ boardId, commentId })
    },
  },

  postComment: {
    queryKey: queryKeys.commentList,
    mutationFn: async ({
      boardId,
      comment,
      commentId,
    }: PostCommentProps): Promise<void> => {
      await CommentService.postComment({
        boardId,
        comment,
        commentId,
      })
    },
  },

  deleteComment: {
    queryKey: queryKeys.commentList,
    mutationFn: async ({
      boardId,
      commentId,
    }: CommentDetailProps): Promise<void> => {
      await CommentService.deleteComment({ boardId, commentId })
    },
  },
}

export { queryKeys, queryOptions }
