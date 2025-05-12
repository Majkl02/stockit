'use client'

import { useState } from 'react'

export default function AddNewOrganization() {
  const [formData, setFormData] = useState({
    organization_name: '',
    description: '',
    street: '',
    street_number: '',
    city: '',
    postal_code: '',
    country: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Submitting org:', formData)
    try {
      const res = fetch('/api/organizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      console.log('Response:', res)

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      alert('Organization added successfully!')
    } catch (err) {
      console.error('Error adding organization:', err)
      alert('Failed to add organization. Please try again.')
    }
  }

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-12 text-center text-6xl font-bold text-gray-700'>
        Add New Organization
      </h1>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-md'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Organization Name
          </label>
          <input
            type='text'
            name='organization_name'
            value={formData.organization_name}
            onChange={handleChange}
            required
            className='mt-1 w-xl rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <textarea
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
            multiple
            className='mt-1 w-xl rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
          />
        </div>
        <div className='flex w-xl justify-between'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Street
            </label>
            <input
              type='text'
              name='street'
              value={formData.street}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Street Number
            </label>
            <input
              type='text'
              name='street_number'
              value={formData.street_number}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>
        </div>
        <div className='flex w-xl justify-between'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              City
            </label>
            <input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Postal Code
            </label>
            <input
              type='text'
              name='postal_code'
              value={formData.postal_code}
              onChange={handleChange}
              className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Country
          </label>
          <input
            type='text'
            name='country'
            value={formData.country}
            onChange={handleChange}
            className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
          />
        </div>

        <button
          type='submit'
          className='w-auto cursor-pointer rounded-md bg-sky-500 px-6 py-2 text-white hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none'
        >
          Add Organization
        </button>
      </form>
    </div>
  )
}
