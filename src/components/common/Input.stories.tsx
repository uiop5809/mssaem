import Input, { InputProps } from '@/components/common/Input'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['gray', 'purple'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'large'],
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

export const LargeInput = Template.bind({})
LargeInput.args = {
  placeholder: '댓글을 작성하려면 로그인 해주세요',
  color: 'purple',
  size: 'large',
}
