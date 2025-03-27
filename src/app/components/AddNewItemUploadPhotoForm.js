'use client'

export default function AddNewItemUploadPhotoForm() {
  return (
    <div className='rounded-md border p-4'>
      <h2 className='mb-4 text-xl font-bold'>Upload photos</h2>
      <form onSubmit={e => e.preventDefault()}>
        {/* Filter dropdowns */}
        <div className='flex flex-col gap-4'>
          <div>
            <label
              htmlFor='mainphoto'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Front-side photo
            </label>
            <input
              id='mainphoto'
              type='file'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              accept='.jpg, .jpeg, .png'
            ></input>
          </div>
          <div>
            <label
              htmlFor='rightphoto'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Right-side photo
            </label>
            <input
              id='rightphoto'
              type='file'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              accept='.jpg, .jpeg, .png'
            ></input>
          </div>
          <div>
            <label
              htmlFor='leftphoto'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Left-side photo
            </label>
            <input
              id='leftphoto'
              type='file'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              accept='.jpg, .jpeg, .png'
            ></input>
          </div>
          <div>
            <label
              htmlFor='backphoto'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Back-side photo
            </label>
            <input
              id='backphoto'
              type='file'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              accept='.jpg, .jpeg, .png'
            ></input>
          </div>
          <div>
            <label
              htmlFor='topphoto'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Top-side photo
            </label>
            <input
              id='topphoto'
              type='file'
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              accept='.jpg, .jpeg, .png'
            ></input>
          </div>
        </div>
      </form>
    </div>
  )
}
