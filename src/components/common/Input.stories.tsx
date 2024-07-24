import Input, { InputProps } from '@/components/common/Input'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['gray'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['medium'],
      },
    },
  },
} as Meta<InputProps>

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />

export const MediumInput = Template.bind({})
MediumInput.args = {
  value: '닉네임',
  color: 'gray',
  size: 'medium',
}
