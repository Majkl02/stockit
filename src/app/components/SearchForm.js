'use client'

export default function SearchForm() {
  return (
    <div className='mx-auto w-full max-w-4xl p-4'>
      <form onSubmit={e => e.preventDefault()}>
        {/* Search field and button */}
        <div className='mb-4 flex w-full'>
          <div className='relative flex-grow'>
            <input
              type='text'
              placeholder='Search...'
              className='w-full rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none'
            />
          </div>
          <button
            type='submit'
            className='flex items-center justify-center rounded-r-md bg-sky-900 px-4 py-2 text-white hover:bg-sky-700'
          >
            <span className='ml-2 hidden sm:inline'>Search</span>
          </button>
        </div>

        {/* Filter dropdowns */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
          <div>
            <label
              htmlFor='organization'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Organization
            </label>
            <select
              id='organization'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
            >
              <option value=''>All Organizations</option>
              <option value='1'>Org. 1</option>
              <option value='2'>Org. 2</option>
              <option value='3'>Org. 3</option>
              <option value='4'>Org. 4</option>
            </select>
          </div>

          <div>
            <label
              htmlFor='group'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Group
            </label>
            <select
              id='group'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
            >
              <option value=''>All groups</option>
              <option value='1'>Group 1</option>
              <option value='2'>Group 2</option>
              <option value='3'>Group 3</option>
              <option value='4'>Group 4</option>
            </select>
          </div>

          <div>
            <label
              htmlFor='room'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Room
            </label>
            <select
              id='room'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
            >
              <option value=''>All rooms</option>
              <option value='1'>Room 1</option>
              <option value='2'>Room 2</option>
              <option value='3'>Room 3</option>
              <option value='4'>Room 4</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}
