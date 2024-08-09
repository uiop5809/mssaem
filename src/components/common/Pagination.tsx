export interface PaginationProps {
  itemsCount: number
  pageSize: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(itemsCount / pageSize)
  if (pagesCount === 1) return null

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <nav>
      <ul className="flex justify-center items-center gap-3">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            type="button"
            className="text-headline text-gray2 font-semibold"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            이전
          </button>
        </li>
        {pages.map((page) => (
          <li key={page} className={`${page === currentPage ? 'active' : ''}`}>
            <button
              type="button"
              className={`text-headline text-gray2 font-semibold w-8 h-8 border rounded-[3px] ${
                page === currentPage
                  ? 'border-pointcolor1 bg-main4 text-maindark'
                  : 'border-transparent'
              }`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`${currentPage === pagesCount ? 'disabled' : ''}`}>
          <button
            type="button"
            className="text-headline text-gray2 font-semibold"
            onClick={handleNextPage}
            disabled={currentPage === pagesCount}
          >
            다음
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
