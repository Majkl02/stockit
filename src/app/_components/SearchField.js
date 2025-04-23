export default function SearchField({ handleSerchTerm, searchTerm }) {
  return (
    <div className='mb-4 flex w-full'>
      <div className='relative flex-grow'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search...'
          className='w-full rounded-l-md border border-gray-300 bg-white px-4 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-700 focus:outline-none'
          onChange={e => handleSerchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <button
        type='submit'
        className='flex cursor-pointer items-center justify-center rounded-r-md bg-sky-900 px-4 py-2 text-white hover:bg-sky-700'
      >
        <span className='ml-2 hidden sm:inline'>Search</span>
      </button>
    </div>
  )
}
