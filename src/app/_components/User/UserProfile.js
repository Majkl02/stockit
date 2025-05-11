'use client'

import { SquarePen, Mail, MapPin, Phone, Calendar } from 'lucide-react'
import { useAuth } from '@/app/context/AuthContext'
import Link from 'next/link'
import { formatDate } from '@/app/_lib/utils/formatDate'

export default function UserProfile() {
  const { user } = useAuth()

  if (!user)
    return (
      <p className='mt-20 text-center text-4xl font-bold text-gray-600'>
        Loading profile...
      </p>
    )

  return (
    <div className='container mx-auto mt-10 mb-10 max-w-300 rounded-md shadow-md'>
      <div className='h-20 rounded-t-md bg-gradient-to-r from-sky-500 to-blue-500'></div>
      <div className='overflow-hidden px-5'>
        <div className='flex flex-row items-start justify-between pt-6'>
          <div className='mb-4'>
            <h1 className='text-4xl font-bold text-gray-700'>{`${user.first_name} ${user.last_name}`}</h1>
            <p className='text-gray-600'>User Profile</p>
          </div>
          <Link
            href='/profile/edit'
            variant='outline'
            size='sm'
            className='flex cursor-pointer items-center gap-1 rounded-md border-2 border-sky-400 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm shadow-sky-200 hover:bg-gray-50'
          >
            <SquarePen className='h-4 w-4' />
            Edit Profile
          </Link>
        </div>

        <div className='space-y-6'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-700'>About Me</h3>
            <p>{user.description}</p>
          </div>

          <hr />

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Contact Information</h3>

            <div className='grid gap-4 md:grid-cols-2'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500'>
                  <Mail color='white' className='h-5 w-5' />
                </div>
                <div>
                  <p className='text-sm'>Email</p>
                  <p className='font-medium'>{user.email}</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500'>
                  <Phone color='white' className='h-5 w-5' />
                </div>
                <div>
                  <p className='text-sm'>Phone</p>
                  <p className='font-medium'>{user.phone_number}</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500'>
                  <MapPin color='white' className='h-5 w-5' />
                </div>
                <div>
                  <p className='text-sm'>Address</p>
                  <p className='font-medium'>{user.address}</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500'>
                  <Calendar color='white' className='h-5 w-5' />
                </div>
                <div>
                  <p className='text-sm'>Birthdate</p>
                  <p className='font-medium'>{formatDate(user.birth_date)}</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>Account Details</h3>
            </div>

            <div className='mb-6 grid gap-4 md:grid-cols-2'>
              <div>
                <p className='text-sm'>Member Since</p>
                <p className='font-medium'>{formatDate(user.created_at)}</p>
              </div>
              <div>
                <p className='text-sm'>Last Login</p>
                <p className='font-medium'>
                  {formatDate(user.last_login_at, true)}
                </p>
              </div>
              <div>
                <p className='text-sm'>Account Status</p>
                <div className='flex items-center gap-1.5'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500'></div>
                  <p className='font-medium'>Active</p>
                </div>
              </div>
              {/* TODO: Dotiahnut nazvy organizacii */}
              <div>
                <p className='text-sm'>Organization</p>
                <p className='font-medium'>FIIT STU</p>
              </div>
            </div>
          </div>

          <hr />

          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>Your permissions</h3>
            </div>

            <div className='mb-6 grid gap-4 md:grid-cols-2'>
              {user.permissions_flat_list.map(permission => {
                return (
                  <div key={permission.permission_name}>
                    <div>
                      <p className='text-sm'>Scope type </p>
                      <p className='font-medium'>{permission.scope_type}</p>
                    </div>
                    <div>
                      <p className='text-sm'>Permission name </p>
                      <p className='font-medium'>
                        {permission.permission_name}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm'>Permission description </p>
                      <p className='font-medium'>
                        {permission.permission_description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='border-t px-6 py-4'>
            <div className='flex w-full justify-between text-right'>
              <p className='text-xs'>
                Last updated: {formatDate(user.last_edit_at, true)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
