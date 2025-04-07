'use client'

export default function AddNewItemLocationForm() {
  return (
    <div className='rounded-md border p-4'>
      <h2 className='mb-4 text-xl font-bold'>Choose item location</h2>
      <form onSubmit={e => e.preventDefault()}>
        {/* Filter dropdowns */}
        <div className='flex flex-col gap-4'>
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
