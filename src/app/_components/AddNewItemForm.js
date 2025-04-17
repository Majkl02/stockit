export default function AddNewItemForm() {
  return (
    <div className='rounded-md border-2 p-4'>
      <h2 className='mb-4 text-xl font-bold'>Item form</h2>
      <form onSubmit={e => e.preventDefault()}>
        {/* Filter dropdowns */}
        <div className='flex flex-col gap-4'>
          <div>
            <label
              htmlFor='categories'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Location
            </label>
            <select
              type='input'
              id='categories'
              name='categories'
              required
              className='w-full rounded-md border border-gray-300 px-3 py-2'
            >
              <option value='clothing'>Room 1</option>
              <option value='electronics'>Room 2</option>
              <option value='furniture'>Room 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='label'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Item Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              placeholder='Item Name'
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
              htmlFor='categories'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Categories
            </label>
            <div className='flex items-center gap-4'>
              <select
                type='input'
                id='categories'
                name='categories'
                required
                className='w-full rounded-md border border-gray-300 px-3 py-2'
              >
                <option value='clothing'>Computer</option>
                <option value='electronics'>Headphones</option>
                <option value='furniture'>Mobile</option>
              </select>
              <div className='w-30 cursor-pointer rounded-2xl bg-gray-200 p-2 text-center hover:bg-gray-300'>
                Add
              </div>
            </div>
            <div className='mt-5 flex gap-2'>
              <span className='rounded-2xl bg-gray-400 p-2 text-center hover:bg-gray-300'>
                Computer
              </span>
              <span className='rounded-2xl bg-gray-400 p-2 text-center hover:bg-gray-300'>
                Headphones
              </span>
              <span className='rounded-2xl bg-gray-400 p-2 text-center hover:bg-gray-300'>
                Mobile
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor='attributes'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Attributes
            </label>
            <div className='flex items-center gap-4'>
              <select
                type='input'
                id='attributes'
                name='attributes'
                required
                className='w-full rounded-md border border-gray-300 px-3 py-2'
              >
                <option value='clothing'>Weight</option>
                <option value='electronics'>Age</option>
                <option value='furniture'>Color</option>
              </select>
              <div className='w-30 cursor-pointer rounded-2xl bg-gray-200 p-2 text-center hover:bg-gray-300'>
                Add
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
