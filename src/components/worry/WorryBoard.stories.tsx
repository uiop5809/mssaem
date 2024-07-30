import { Meta, StoryFn } from '@storybook/react'
import WorryBoard, { WorryBoardProps } from './WorryBoard'

export default {
  title: 'Worry/WorryBoard',
  component: WorryBoard,
} as Meta<WorryBoardProps>

const Template: StoryFn<WorryBoardProps> = (args: WorryBoardProps) => (
  <WorryBoard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: '학생회장 선배 도와주세요ㅠㅠ',
  content: '마음이 있는 것 같나요??',
  memberMbti: 'istj',
  targetMbti: 'esfp',
  createdDate: '3분전',
  imgUrl: '/images/common/thumbnail.svg',
}
