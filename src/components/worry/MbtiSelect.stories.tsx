import { Meta, StoryFn } from '@storybook/react'
import MbtiSelect from './MbtiSelect'

export default {
  title: 'Worry/MbtiSelect',
  component: MbtiSelect,
} as Meta

const Template: StoryFn = () => <MbtiSelect />

export const Primary = Template.bind({})
Primary.args = {}
