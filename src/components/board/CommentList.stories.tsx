import { CommentListProps } from '@/service/comment/CommentService'
import { Meta, StoryFn } from '@storybook/react'
import CommentList from './CommentList'

export default {
  title: 'Board/CommentList',
  component: CommentList,
} as Meta<CommentListProps>

const Template: StoryFn<CommentListProps> = (args: CommentListProps) => (
  <CommentList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  boardId: 1,
  page: 0,
  size: 10,
}
