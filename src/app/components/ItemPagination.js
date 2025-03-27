export default function ItemPagination() {
  return (
    <div className='flex items-center justify-center space-x-1 py-4'>
      {/* Previous button */}
      <button
        className='rounded-md p-2 text-gray-600 hover:bg-gray-100'
        aria-label='Previous page'
      >
        {'<'}
      </button>

      {/* Page numbers */}
      <button className='rounded-md px-3 py-1 hover:bg-gray-100'>1</button>

      <button className='rounded-md bg-sky-600 px-3 py-1 text-white'>2</button>

      <button className='rounded-md px-3 py-1 hover:bg-gray-100'>3</button>

      <button className='rounded-md px-3 py-1 hover:bg-gray-100'>4</button>

      <button className='rounded-md px-3 py-1 hover:bg-gray-100'>5</button>

      <span className='px-2'>...</span>

      <button className='rounded-md px-3 py-1 hover:bg-gray-100'>10</button>

      {/* Next button */}
      <button
        className='rounded-md p-2 text-gray-600 hover:bg-gray-100'
        aria-label='Next page'
      >
        {'>'}
      </button>
    </div>
  )
}
