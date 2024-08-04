import { Meta, StoryFn } from '@storybook/react'
import Dropdown, { DropdownProps } from './Dropdown'

export default {
  title: 'Worry/Dropdown',
  component: Dropdown,
} as Meta<DropdownProps>

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => (
  <Dropdown {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
