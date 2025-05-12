'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditOrganization({ orgId }) {
  const [formData, setFormData] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchOrganization() {
      try {
        const res = await fetch(`/api/organizations/${orgId}`)
        const data = await res.json()
        setFormData(data)
      } catch (err) {
        console.error('Failed to load organization:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrganization()
  }, [orgId])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    //TODO: Implement the update logic here
    // try {
    //   const res = await fetch(`/api/organizations/${orgId}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })

    //   if (!res.ok) throw new Error('Update failed')

    //
    // } catch (err) {
    //   console.error('Failed to update organization:', err)
    // }
    router.push(`/management/organizations/${orgId}`)
  }

  if (loading || !formData) {
    return <div className='text-center text-2xl text-gray-600'>Loading...</div>
  }

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-12 text-center text-5xl font-bold text-gray-700'>
        {`Edit: ${formData.organization_name}`}
      </h1>

      <form
        onSubmit={handleSubmit}
        className='space-y-6 rounded-lg bg-white p-8 shadow-md'
      >
        <div className='grid gap-4 md:grid-cols-2'>
          {[
            { name: 'organization_name', label: 'Organization Name' },
            { name: 'description', label: 'Description' },
            { name: 'street', label: 'Street' },
            { name: 'street_number', label: 'Street Number' },
            { name: 'city', label: 'City' },
            { name: 'postal_code', label: 'Postal Code' },
            { name: 'country', label: 'Country', full: true }
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
