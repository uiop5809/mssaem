import { Meta, StoryFn } from '@storybook/react'
import DiscussionButton, { DiscussionButtonProps } from './DiscussionButton'

export default {
  title: 'Discussion/DiscussionButton',
  component: DiscussionButton,
  argTypes: {
    text: { control: 'text' },
    imgUrl: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
} as Meta<DiscussionButtonProps>

const Template: StoryFn<DiscussionButtonProps> = (
  args: DiscussionButtonProps,
) => <DiscussionButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: '글쓰기',
  onClick: () => alert('clicked'),
  disabled: false,
}

export const ImageButton = Template.bind({})
ImageButton.args = {
  text: '글쓰기',
  imgUrl: '/images/common/thumbnail.svg',
  onClick: () => alert('clicked'),
  disabled: false,
}
