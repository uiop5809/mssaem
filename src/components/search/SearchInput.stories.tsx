import { Meta, StoryFn } from '@storybook/react'
import SearchInput, { SearchInputProps } from '@/components/search/SearchInput'

export default {
  title: 'Search/SearchInput',
  component: SearchInput,
} as Meta<SearchInputProps>

const Template: StoryFn<SearchInputProps> = (args: SearchInputProps) => (
  <SearchInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  boardId: 1,
  boardTitle: '어제 강남 러쉬에서 만난 대문자 E 직원',
  discussionId: null,
  discussionTitle: null,
  worryBoardId: null,
  worryBoardTitle: null,
}
