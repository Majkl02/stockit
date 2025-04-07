export default function AdvancedFilters({ filtersOpen }) {
  return (
    <div
      className={`overflow-hidden transition-all duration-400 ease-in-out ${
        filtersOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className='mb-2 grid grid-cols-1 gap-4 px-2 pt-2 sm:grid-cols-3'>
        <div>
          <label
            htmlFor='organization'
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Organization
          </label>
          <select
            id='organization'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700'
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
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Group
          </label>
          <select
            id='group'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700'
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
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Room
          </label>
          <select
            id='room'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700'
          >
            <option value=''>All rooms</option>
            <option value='1'>Room 1</option>
            <option value='2'>Room 2</option>
            <option value='3'>Room 3</option>
            <option value='4'>Room 4</option>
          </select>
        </div>
      </div>
    </div>
  )
}
