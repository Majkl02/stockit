'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Locations() {
  const [locations, setLocations] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch('/api/locations')
        const data = await res.json()
        setLocations(data)
      } catch (err) {
        console.error('Failed to fetch locations:', err)
      }
    }

    fetchLocations()
  }, [])

  const filtered = locations.filter(loc =>
    loc.location_name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <div className='mb-12 text-center'>
        <h1 className='mb-4 text-5xl font-bold text-gray-700'>
          Manage Locations
        </h1>

        <div className='flex flex-col items-center gap-4 sm:justify-between'>
          <input
            type='text'
            placeholder='Search locations...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='w-full max-w-sm rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
          />
          <Link
            href='/management/locations/addnew'
            className='mt-2 inline-block rounded-md bg-sky-500 px-5 py-2 text-white shadow-sm hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none sm:mt-0'
          >
            Add Location
          </Link>
        </div>
      </div>

      <div className='grid gap-4'>
        {filtered.length === 0 && (
          <p className='text-center text-gray-500'>No locations found.</p>
        )}

        {filtered.map(loc => (
          <Link
            href={`/management/locations/${loc.location_id}`}
            key={loc.location_id}
            className='rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm transition hover:shadow-md'
          >
            <h2 className='text-xl font-semibold text-gray-800'>
              {loc.location_name}
            </h2>
            <p className='text-sm text-gray-500'>{loc.city}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
