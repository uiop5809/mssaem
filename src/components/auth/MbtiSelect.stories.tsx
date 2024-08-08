import { Meta, StoryFn } from '@storybook/react'
import MbtiSelect, { MbtiSelectProps } from '@/components/auth/MbtiSelect'

export default {
  title: 'Auth/MbtiSelect',
  component: MbtiSelect,
} as Meta<MbtiSelectProps>

const Template: StoryFn<MbtiSelectProps> = (args: MbtiSelectProps) => (
  <MbtiSelect {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  options: ['I', 'i', 'E', 'e'],
}
