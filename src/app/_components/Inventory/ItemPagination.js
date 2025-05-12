'use client'

import Image from 'next/image'
import arr_l from '/public/arrow-left.svg'
import arr_r from '/public/arrow-right.svg'

export default function ItemPagination({
  currentPage,
  totalPages,
  hasNext,
  hasPrevious,
  onPageChange,
  parameters
}) {
  const prevPage = () => {
    if (currentPage > 0) onPageChange(parameters, currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) onPageChange(parameters, currentPage + 1)
  }

  return (
    <div className='flex items-center justify-center gap-4 p-4'>
      <button
        onClick={prevPage}
        disabled={currentPage === 0 || !hasPrevious}
        className='flex cursor-pointer justify-center gap-2 rounded bg-sky-800 px-4 py-2 text-white hover:bg-sky-700 disabled:opacity-50'
      >
        <Image src={arr_l} alt='arrow left icon' />
        Prev
      </button>

      <span className='px-2 text-lg font-medium text-gray-700'>
        Page {currentPage + 1} of {totalPages}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages || !hasNext}
        className='flex cursor-pointer justify-center gap-2 rounded bg-sky-800 px-4 py-2 text-white hover:bg-sky-700 disabled:opacity-50'
      >
        Next
        <Image src={arr_r} alt='arrow right icon' />
      </button>
    </div>
  )
}
