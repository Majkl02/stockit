'use client'

// Treba nareferencovat ostatne formulare a dat ich ako disabled
export default function AddNewItemLocationForm() {
  return (
    <div className='rounded-md border p-4'>
      <h2 className='mb-4 text-xl font-bold'>Item review</h2>
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
              disabled
            >
              <option value=''>Organization 2</option>
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
              disabled
            >
              <option value='1'>Room 1</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}
