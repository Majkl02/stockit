'use client'

import { useGlobalContext } from '../context/GlobalContext'

export default function DashboardHeader() {
  const { user } = useGlobalContext()

  return (
    <div>
      {user && (
        <h1 className='text-7xl font-bold'>Welcome, {user.first_name}!</h1>
      )}
      <p className='text-2xl font-semibold'>Role: Superadmin</p>
    </div>
  )
}
