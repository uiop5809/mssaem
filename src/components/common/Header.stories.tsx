import Header from '@/components/common/Header'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Header',
  component: Header,
} as Meta

const Template: StoryFn = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {}
