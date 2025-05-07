'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditLocationForm({ locationId }) {
  const [formData, setFormData] = useState(null)
  const [originalName, setOriginalName] = useState('')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchLocation() {
      try {
        const res = await fetch(`/api/locations/${locationId}`)
        const data = await res.json()
        setFormData(data)
        setOriginalName(data.location_name)
      } catch (err) {
        console.error('Failed to load location:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [locationId])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const res = await fetch(`/api/locations/${locationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          location_name: formData.location_name,
          room: formData.room,
          description: formData.description,
          organization_id: formData.organization_id
        })
      })

      if (!res.ok) throw new Error('Update failed')
    } catch (err) {
      console.error('Failed to update location:', err)
    }

    router.push(`/management/locations/${locationId}`)
  }

  if (loading || !formData) {
    return <div className='text-center text-2xl text-gray-600'>Loading...</div>
  }

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-12 text-center text-5xl font-bold text-gray-700'>
        {`Edit: ${originalName}`}
      </h1>

      <form
        onSubmit={handleSubmit}
        className='space-y-6 rounded-lg bg-white p-8 shadow-md'
      >
        <div className='grid gap-4 md:grid-cols-2'>
          {[
            { name: 'location_name', label: 'Location Name' },
            { name: 'room', label: 'Room' },
            { name: 'description', label: 'Description', full: true },
            { name: 'organization_id', label: 'Organization ID', full: true }
          ].map(({ name, label, full }) => (
            <div key={name} className={full ? 'md:col-span-2' : ''}>
              <label className='block text-sm font-medium text-gray-700'>
                {label}
              </label>
              <input
                type='text'
                name={name}
                value={formData[name] || ''}
                onChange={handleChange}
                className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
              />
            </div>
          ))}
        </div>

        <button
          type='submit'
          className='w-full cursor-pointer rounded-md bg-sky-500 px-6 py-2 text-white hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none'
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}
