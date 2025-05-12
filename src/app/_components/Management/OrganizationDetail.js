'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ActionPopup from '../Actions/ActionPopup'

export default function OrganizationDetail({ organization }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const router = useRouter()

  async function handleDeleteOrg() {
    console.log('Delete organization:', organization.organization_id)
    try {
      const res = await fetch(
        `/api/organizations/${organization.organization_id}`,
        {
          method: 'DELETE'
        }
      )
      if (res.ok) {
        console.log('Organization deleted successfully')
        router.push('/management/organizations')
      } else {
        console.error('Failed to delete organization:', res.statusText)
      }
    } catch (error) {
      console.error('Error deleting organization:', error)
    }
  }

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      {showDeletePopup && (
        <ActionPopup
          setIsOpen={setShowDeletePopup}
          onItemDelete={handleDeleteOrg}
        />
      )}
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
            href={`/management/organizations/${organization.organization_id}/edit`}
            className='w-auto cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600'
          >
            Edit Organization
          </Link>
          <button
            onClick={() => setShowDeletePopup(true)}
            className='w-auto cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600'
          >
            Delete Organization
          </button>
        </div>
      </div>
    </div>
  )
}
