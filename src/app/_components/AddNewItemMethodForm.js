'use client'

export default function AddNewItemLocationForm({ setActiveStep }) {
  return (
    <div className='rounded-md p-4'>
      <h2 className='mb-4 text-center text-3xl font-bold text-gray-700'>
        Choose a method
      </h2>
      <div className='mt-10 flex justify-around gap-4'>
        <button
          className='h-25 w-50 cursor-pointer space-x-1 rounded-2xl bg-sky-500 px-4 py-2 font-bold text-gray-800 uppercase shadow-md shadow-gray-400 hover:bg-sky-400'
          onClick={() => setActiveStep(step => step + 1)}
        >
          Classic
        </button>
        <button
          className='h-25 w-50 cursor-pointer space-x-1 rounded-2xl bg-sky-500 px-4 py-2 font-bold text-gray-800 uppercase shadow-md shadow-gray-400 hover:bg-sky-400'
          onClick={() => alert('Under construction 🛠️')}
        >
          AI Filled
        </button>
      </div>
    </div>
  )
}
