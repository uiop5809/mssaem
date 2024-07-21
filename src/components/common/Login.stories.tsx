import Login, { LoginProps } from '@/components/common/Login'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Login',
  component: Login,
} as Meta<LoginProps>

const Template: StoryFn<LoginProps> = (args: LoginProps) => <Login {...args} />

export const Primary = Template.bind({})
Primary.args = {
  url: '/images/common/default.svg',
  name: '유보라',
  mbti: 'enfp',
  badge: '엠비티어른',
}
