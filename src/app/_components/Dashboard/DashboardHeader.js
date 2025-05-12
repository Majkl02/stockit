'use client'

import { useAuth } from '../../context/AuthContext'
import UserRole from '../User/UserRole'

export default function DashboardHeader() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div>
      <h1 className='text-5xl font-bold text-gray-700'>
        Welcome, {user.first_name}!
      </h1>
      <p className='mt-2 text-lg font-medium text-gray-500'>Roles:</p>
      {user.user_roles.map(role => (
        <UserRole key={role.role_name} roleName={role.role_name} />
      ))}
    </div>
  )
}
