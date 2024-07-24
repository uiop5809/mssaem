import NotLogin from '@/components/auth/NotLogin'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Auth/NotLogin',
  component: NotLogin,
} as Meta

const Template: StoryFn = (args) => <NotLogin {...args} />

export const Primary = Template.bind({})
Primary.args = {}
