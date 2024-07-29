import Footer from '@/components/common/Footer'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Footer',
  component: Footer,
} as Meta

const Template: StoryFn = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {}
