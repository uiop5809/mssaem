import Login from '@/components/auth/Login'
import { User } from '@/model/User'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Auth/Login',
  component: Login,
} as Meta<User>

const Template: StoryFn<User> = (args: User) => <Login {...args} />

export const Primary = Template.bind({})
Primary.args = {
  profileImgUrl: '/images/common/default.svg',
  nickName: '유보라',
  mbti: 'ENFP',
  badge: '엠비티어른',
}
