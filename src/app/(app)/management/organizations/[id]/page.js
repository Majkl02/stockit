import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'

async function getOrganization(id) {
  //TODO: handle cookie error
  try {
    const res = await fetch(`http://localhost:3000/api/organizations/${id}`, {
      headers: {
        cookie: cookies().toString()
      },
      cache: 'no-store'
    })

    if (!res.ok) return null

    return await res.json()
  } catch (err) {
    console.error('Failed to fetch organization:', err)
    return null
  }
}

export default async function OrganizationDetail({ params }) {
  const { id } = await params
  const organization = await getOrganization(id)
  console.log('Organization detail:', organization)

  if (!organization) return notFound()

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-8 text-center text-5xl font-bold text-gray-700'>
        {organization.organization_name}
      </h1>

      <div className='flex flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-md'>
        <div className='w-full'>
          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Description</h2>
            <p className='text-gray-600'>{organization.description || '—'}</p>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Address</h2>
            <p className='text-gray-600'>
              {organization.street} {organization.street_number},{' '}
              {organization.city}, {organization.postal_code},{' '}
              {organization.country}
            </p>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <h2 className='text-sm text-gray-500'>Created At</h2>
              <p className='text-gray-800'>{organization.created_at}</p>
            </div>
            <div>
              <h2 className='text-sm text-gray-500'>Last Edited</h2>
              <p className='text-gray-800'>{organization.last_edit_at}</p>
            </div>
          </div>
        </div>
        <div className='flex w-auto items-center justify-between gap-4'>
          <Link
            href={`/management/organizations/${id}/edit`}
            className='w-auto cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600'
          >
            Edit Organization
          </Link>
          <Link
            href={``}
            className='w-auto cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600'
          >
            Delete Organization
          </Link>
        </div>
      </div>
    </div>
  )
}
