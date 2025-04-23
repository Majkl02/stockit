// 2. Add new location page - /management/locations/addnew/page.js
'use client'

import { useState } from 'react'

export default function AddNewLocation() {
  const [formData, setFormData] = useState({
    location_name: '',
    room: '',
    description: '',
    organization_id: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Submitting location:', formData)
    // You can add POST logic here later
  }

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-12 text-center text-6xl font-bold text-gray-700'>
        Add New Location
      </h1>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-md'
      >
        <div className='grid w-full gap-4 md:grid-cols-2'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Location Name
            </label>
            <input
              type='text'
              name='location_name'
              value={formData.location_name}
              onChange={handleChange}
              required
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Room
            </label>
            <input
              type='text'
              name='room'
              value={formData.room}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <input
              type='text'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Organization ID
            </label>
            <input
              type='text'
              name='organization_id'
              value={formData.organization_id}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-auto cursor-pointer rounded-md bg-sky-500 px-6 py-2 text-white hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none'
        >
          Add Location
        </button>
      </form>
    </div>
  )
}
