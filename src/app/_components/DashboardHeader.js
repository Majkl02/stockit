'use client'

import { useAuth } from '../context/AuthContext'

export default function DashboardHeader() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div>
      <h1 className='text-5xl font-bold text-gray-700'>
        Welcome, {user.first_name}!
      </h1>
      <p className='mt-2 text-lg font-medium text-gray-500'>
        Role: {user.user_roles[0].role_name}
        {/* //TODO: Asi bude mat viac roli v roznych organizaciach */}
      </p>
    </div>
  )
}
