import HotThree, { HotThreeProps } from '@/components/home/HotThree'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Home/HotThree',
  component: HotThree,
} as Meta<HotThreeProps>

const Template: StoryFn<HotThreeProps> = (args: HotThreeProps) => (
  <HotThree {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  hotThree: {
    boardId: 1,
    boardTitle: '어제 강남 러쉬에서 만난 대문자 E 직원',
    discussionId: 1,
    discussionTitle: '어제 강남 러쉬에서 만난 대문자 E 직원',
    worryBoardId: 1,
    worryBoardTitle: '어제 강남 러쉬에서 만난 대문자 E 직원',
  },
  board: 'board',
}
