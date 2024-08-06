import { Meta, StoryFn } from '@storybook/react'
import ChattingProfile, {
  ChattingProfileProps,
} from '@/components/chatting/ChattingProfile'

export default {
  title: 'Chatting/ChattingProfile',
  component: ChattingProfile,
} as Meta<ChattingProfileProps>

const Template: StoryFn<ChattingProfileProps> = (
  args: ChattingProfileProps,
) => <ChattingProfile {...args} />

export const Primary = Template.bind({})
Primary.args = {
  chattingProfile: {
    profileImgUrl: '/images/common/default.svg',
    nickName: '유보라',
    mbti: 'ENFP',
    badge: '엠비티어른',
    recent: '3',
    lastMessage: '카페에서 남친이랑 싸웠어요..',
  },
}
