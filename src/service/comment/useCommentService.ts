import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query'
import { queryOptions } from './CommentQueries'
import {
  CommentDetailProps,
  CommentListProps,
  PostCommentProps,
} from './CommentService'

const useCommentList = ({ boardId, page, size }: CommentListProps) =>
  useQuery({
    ...queryOptions.commentList,
    queryKey: ['commentList'],
    queryFn: () => queryOptions.commentList.queryFn({ boardId, page, size }),
  })

const useCommentBest = ({ boardId, page, size }: CommentListProps) =>
  useQuery({
    ...queryOptions.commentBest,
    queryKey: ['commentBest'],
    queryFn: () => queryOptions.commentBest.queryFn({ boardId, page, size }),
  })

const useCommentLike = () => {
  const mutationFn = ({
    boardId,
    commentId,
  }: CommentDetailProps): Promise<void> =>
    queryOptions.postCommentLike.mutationFn({ boardId, commentId })

  const options: UseMutationOptions<void, Error, CommentDetailProps, unknown> =
    {
      mutationFn,
    }
  return useMutation<void, Error, CommentDetailProps>(options)
}

const usePostComment = () => {
  const mutationFn = ({
    boardId,
    comment,
    commentId,
  }: PostCommentProps): Promise<void> =>
    queryOptions.postComment.mutationFn({ boardId, comment, commentId })

  const options: UseMutationOptions<void, Error, PostCommentProps, unknown> = {
    mutationFn,
  }
  return useMutation<void, Error, PostCommentProps>(options)
}

const useDeleteComment = () => {
  const mutationFn = ({
    boardId,
    commentId,
  }: CommentDetailProps): Promise<void> =>
    queryOptions.deleteComment.mutationFn({ boardId, commentId })

  const options: UseMutationOptions<void, Error, CommentDetailProps, unknown> =
    {
      mutationFn,
    }
  return useMutation<void, Error, CommentDetailProps>(options)
}

export {
  useCommentList,
  useCommentBest,
  useCommentLike,
  usePostComment,
  useDeleteComment,
}
