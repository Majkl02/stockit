'use client'

export default function AddNewItemForm() {
  return (
    <div className='rounded-md border p-4'>
      <h2 className='mb-4 text-xl font-bold'>Fill out item form</h2>
      <form onSubmit={e => e.preventDefault()}>
        {/* Filter dropdowns */}
        <div className='flex flex-col gap-4'>
          <div>
            <label
              htmlFor='label'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Label
            </label>
            <input
              type='text'
              id='label'
              name='label'
              required
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              placeholder='Item Label'
            ></input>
          </div>
          <div>
            <label
              htmlFor='label'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Description
            </label>
            <textarea
              type='text'
              id='description'
              name='description'
              required
              className='h-20 w-full rounded-md border border-gray-300 px-3 py-2'
              rows={10}
              placeholder='Item description'
            ></textarea>
          </div>
          <div>
            <label
              htmlFor='serialnumber'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Serial number
            </label>
            <input
              type='text'
              id='serialnumber'
              name='serialnumber'
              required
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              placeholder='Serial number'
            ></input>
          </div>
          <div>
            <label
              htmlFor='quantity'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Quantity
            </label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              required
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              min={1}
              max={100}
            ></input>
          </div>
        </div>
      </form>
    </div>
  )
}
