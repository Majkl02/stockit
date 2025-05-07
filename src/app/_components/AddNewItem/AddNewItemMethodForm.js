'use client'

export default function AddNewItemLocationForm({ setActiveStep }) {
  return (
    <div className='rounded-md p-4'>
      <h2 className='mb-4 text-center text-3xl font-bold text-gray-600'>
        Would you like to use AI to fill the item name?
      </h2>
      <div className='mt-10 flex justify-center gap-4'>
        <button
          className='h-10 w-auto cursor-pointer space-x-1 rounded-2xl bg-sky-700 px-4 py-2 font-semibold text-white uppercase shadow-md shadow-gray-400 hover:bg-sky-800'
          onClick={() => setActiveStep(step => step + 1)}
        >
          No
        </button>
        <button
          className='h-10 w-auto cursor-pointer space-x-1 rounded-2xl bg-sky-700 px-4 py-2 font-bold text-white uppercase shadow-md shadow-gray-400 hover:bg-sky-800'
          onClick={() => alert('Under construction 🛠️')}
        >
          Yes
        </button>
      </div>
    </div>
  )
}
