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

export const SmallPrimary = Template.bind({})
SmallPrimary.args = {
  text: '글쓰기',
  onClick: () => alert('clicked'),
  disabled: false,
  size: 'small',
}

export const SmallImageButton = Template.bind({})
SmallImageButton.args = {
  text: '글쓰기',
  imgUrl: '/images/common/thumbnail.svg',
  onClick: () => alert('clicked'),
  disabled: false,
  size: 'small',
}

export const LargePrimary = Template.bind({})
LargePrimary.args = {
  text: '글쓰기',
  onClick: () => alert('clicked'),
  disabled: false,
  size: 'large',
}

export const LargeImageButton = Template.bind({})
LargeImageButton.args = {
  text: '글쓰기',
  imgUrl: '/images/common/thumbnail.svg',
  onClick: () => alert('clicked'),
  disabled: false,
  size: 'large',
}
