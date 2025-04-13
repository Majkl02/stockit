'use client'

import Image from 'next/image'
import arr_l from '/public/arrow-left.svg'
import arr_r from '/public/arrow-right.svg'

export default function ItemPagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  const prevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  return (
    <div className='flex items-center justify-center gap-4 p-4'>
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className='flex cursor-pointer justify-center gap-2 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400 disabled:opacity-50'
      >
        <Image src={arr_l} alt='arrow left icon' />
        Prev
      </button>

      <span className='px-2 text-lg font-medium'>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className='flex cursor-pointer justify-center gap-2 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400 disabled:opacity-50'
      >
        Next
        <Image src={arr_r} alt='arrow right icon' />
      </button>
    </div>
  )
}
