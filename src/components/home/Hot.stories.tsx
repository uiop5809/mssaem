import Hot, { HotProps } from '@/components/home/Hot'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Home/Hot',
  component: Hot,
} as Meta<HotProps>

const Template: StoryFn<HotProps> = (args: HotProps) => <Hot {...args} />

export const Primary = Template.bind({})
Primary.args = {
  boardId: 1,
  boardTitle: '어제 강남 러쉬에서 만난 대문자 E 직원',
  discussionId: null,
  discussionTitle: null,
  worryBoardId: null,
  worryBoardTitle: null,
}
