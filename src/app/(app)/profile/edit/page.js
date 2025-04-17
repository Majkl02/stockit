'use client'

import { Mail, MapPin, Phone, Calendar } from 'lucide-react'
import { useAuth } from '@/app/context/AuthContext'
import { useState } from 'react'

export default function UserProfileEdit() {
  const { user, setUser } = useAuth()

  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    address: user.address,
    birth_date: user.birth_date,
    description: user.description
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // 🔄 TODO: Send data to backend and update context
    console.log('Updated Profile:', formData)
    setUser(prev => ({ ...prev, ...formData }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='container mx-auto mt-10 mb-10 max-w-3xl rounded-md shadow-md'
    >
      <div className='h-20 rounded-t-md bg-gradient-to-r from-sky-500 to-blue-500'></div>
      <div className='overflow-hidden px-5'>
        <div className='flex flex-row items-start justify-between pt-6'>
          <div className='mb-4'>
            <h1 className='text-4xl font-bold'>Edit Profile</h1>
            <p className='text-gray-600'>
              Make changes to your user profile below
            </p>
          </div>
          <button
            type='submit'
            className='flex cursor-pointer items-center gap-1 rounded-md border-2 border-green-500 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm hover:bg-green-50'
          >
            Save Changes
          </button>
        </div>

        <div className='space-y-6'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>About Me</h3>
            <div className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='first_name'
                    value={formData.first_name}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-300 px-3 py-2'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='last_name'
                    value={formData.last_name}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-300 px-3 py-2'
                  />
                </div>
              </div>
            </div>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full rounded-md border border-gray-300 px-3 py-2'
              rows={4}
            />
          </div>

          <hr />

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Contact Information</h3>

            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Mail className='h-4 w-4' /> Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2'
                  required
                />
              </div>

              <div>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Phone className='h-4 w-4' /> Phone
                </label>
                <input
                  type='tel'
                  name='phone_number'
                  value={formData.phone_number}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2'
                />
              </div>

              <div>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <MapPin className='h-4 w-4' /> Address
                </label>
                <input
                  type='text'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2'
                />
              </div>

              <div>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Calendar className='h-4 w-4' /> Birthdate
                </label>
                <input
                  type='date'
                  name='birth_date'
                  value={formData.birth_date}
                  onChange={handleChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='px-6 py-4 text-center'>
          <p className='text-xs text-gray-500'>
            Last updated: {user.last_edit_at}
          </p>
        </div>
      </div>
    </form>
  )
}
