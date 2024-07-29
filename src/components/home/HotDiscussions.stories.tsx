import HotDiscussions, {
  HotDiscussionsProps,
} from '@/components/home/HotDiscussions'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Home/HotDiscussions',
  component: HotDiscussions,
} as Meta<HotDiscussionsProps>

const Template: StoryFn<HotDiscussionsProps> = (args: HotDiscussionsProps) => (
  <HotDiscussions {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: '머리가 더 꽃밭인 것 같은 MBTI는?',
  content: '머라고 생각하시나요?',
  participantCount: 51,
  commentCount: 18,
  createdAt: '1분 전',
  memberSimpleInfo: {
    profileImgUrl: '/images/common/default.svg',
    nickName: '유보라',
    mbti: 'enfp',
    badge: '엠비티어른',
  },
}
