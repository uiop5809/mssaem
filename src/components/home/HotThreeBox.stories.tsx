import HotThreeBox from '@/components/home/HotThreeBox'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Home/HotThreeBox',
  component: HotThreeBox,
} as Meta

const Template: StoryFn = () => <HotThreeBox />

export const Primary = Template.bind({})
Primary.args = {}
