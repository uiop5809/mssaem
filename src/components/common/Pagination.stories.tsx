import { useState } from 'react'
import Pagination, { PaginationProps } from '@/components/common/Pagination'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Common/Pagination',
  component: Pagination,
} as Meta

const Template: StoryFn<PaginationProps> = ({
  itemsCount,
  pageSize,
  currentPage: initialCurrentPage,
  onPageChange,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialCurrentPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    onPageChange(page)
  }

  return (
    <Pagination
      itemsCount={itemsCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  itemsCount: 45,
  pageSize: 10,
  currentPage: 1,
  onPageChange: (page: number) => console.log(`Current page: ${page}`),
}
