import Button, { ButtonProps } from '@/components/common/Button'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select', options: ['main1', 'main2'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'full'] },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
)

export const PurpleSmallBtn = Template.bind({})
PurpleSmallBtn.args = {
  text: '글쓰기',
  color: 'purple',
  size: 'small',
  onClick: () => {},
}

export const PurpleLargeBtn = Template.bind({})
PurpleLargeBtn.args = {
  text: '로그인하고 이용하기',
  color: 'purple',
  size: 'medium',
  onClick: () => {},
}

export const GrayLargeBtn = Template.bind({})
GrayLargeBtn.args = {
  text: '로그인',
  color: 'gray',
  size: 'login',
  onClick: () => {},
}

export const Badge = Template.bind({})
Badge.args = {
  text: 'MBTI',
  color: 'istj',
  size: 'badge',
  onClick: () => {},
}
