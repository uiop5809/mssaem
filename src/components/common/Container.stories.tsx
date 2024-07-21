import Container, { ContainerProps } from '@/components/common/Container'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Container',
  component: Container,
} as Meta<ContainerProps>

const Template: StoryFn<ContainerProps> = (args: ContainerProps) => (
  <Container {...args} />
)

export const WhiteContainer = Template.bind({})
WhiteContainer.args = {
  color: 'white',
}

export const PurpleContainer = Template.bind({})
PurpleContainer.args = {
  color: 'purple',
}
