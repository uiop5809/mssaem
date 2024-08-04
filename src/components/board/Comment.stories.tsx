import Comment, { CommentProps } from '@/components/board/Comment'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Board/Comment',
  component: Comment,
} as Meta<CommentProps>

const Template: StoryFn<CommentProps> = (args: CommentProps) => (
  <Comment {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  likeCount: '10',
  createdAt: '10분전',
  isLiked: 1,
  isAllowed: '1',
  content:
    '말을 너무 많이 들으면 머리가 너무 아파요;; 말을 너무 많이 들으면 머리가 너무 아파요;; 말을 너무 많이 들으면 머리가 너무 아파요;; 말을 너무 많이 들으면 머리가 너무 아파요;; 말을 너무 많이 들으면 머리가 너무 아파요;; 말을 너무 많이 들으면 머리가 너무 아파요;;',
  memberSimpleInfo: {
    profileImgUrl: '/images/common/default.svg',
    nickName: '유보라',
    mbti: 'enfp',
    badge: '엠비티어른',
  },
}
