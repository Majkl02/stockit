// 3. Location detail page - /management/locations/[id]/page.js
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'

async function getLocation(id) {
  //TODO: handle cookie error
  try {
    const res = await fetch(`http://localhost:3000/api/locations/${id}`, {
      headers: {
        cookie: cookies().toString()
      },
      cache: 'no-store'
    })

    if (!res.ok) return null

    return await res.json()
  } catch (err) {
    console.error('Failed to fetch location:', err)
    return null
  }
}

export default async function LocationDetail({ params }) {
  const { id } = await params
  const location = await getLocation(id)
  console.log('Location detail:', location)

  if (!location) return notFound()

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-8 text-center text-5xl font-bold text-gray-700'>
        {location.location_name}
      </h1>

      <div className='flex flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-md'>
        <div className='w-full'>
          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Room</h2>
            <p className='text-gray-600'>{location.room || '—'}</p>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Description</h2>
            <p className='text-gray-600'>{location.description || '—'}</p>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-gray-700'>
              Organization ID
            </h2>
            <p className='text-gray-600'>{location.organization_id}</p>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <h2 className='text-sm text-gray-500'>Created At</h2>
              <p className='text-gray-800'>{location.created_at}</p>
            </div>
            <div>
              <h2 className='text-sm text-gray-500'>Last Edited</h2>
              <p className='text-gray-800'>{location.last_edit_at}</p>
            </div>
          </div>
        </div>

        <div className='flex w-auto items-center justify-between gap-4'>
          <Link
            href={`/management/locations/${id}/edit`}
            className='w-auto cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600'
          >
            Edit Location
          </Link>
          <Link
            href={``}
            className='w-auto cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600'
          >
            Delete Location
          </Link>
        </div>
      </div>
    </div>
  )
}
