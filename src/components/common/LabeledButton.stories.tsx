import { Meta, StoryFn } from '@storybook/react'
import LabeledButton, { LabeledButtonProps } from './LabeledButton'

export default {
  title: 'Common/LabeledButton',
  component: LabeledButton,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta<LabeledButtonProps>

const Template: StoryFn<LabeledButtonProps> = (args: LabeledButtonProps) => (
  <LabeledButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: '[필수] 이용 약관',
}
