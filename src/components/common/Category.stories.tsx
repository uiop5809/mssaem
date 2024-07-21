import Category from '@/components/common/Category'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Category',
  component: Category,
} as Meta

const Template: StoryFn = (args) => <Category {...args} />

export const Primary = Template.bind({})
Primary.args = {}
