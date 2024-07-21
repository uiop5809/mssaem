import NotLogin from '@/components/common/NotLogin'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/NotLogin',
  component: NotLogin,
} as Meta

const Template: StoryFn = (args) => <NotLogin {...args} />

export const Primary = Template.bind({})
Primary.args = {}
