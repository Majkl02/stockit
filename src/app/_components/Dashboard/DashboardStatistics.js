'use client'
import { useAuth } from '@/app/context/AuthContext'

export default function DashboardStatistics() {
  const { user } = useAuth()

  const filteredOrgs = user?.user_roles.filter(
    role => role.scope_type === 'ORGANIZATION'
  ).length
  const numberOfOrganizations =
    user?.permissions_flat_list[0].permission_name === 'EVERYTHING'
      ? 'All'
      : filteredOrgs

  const filteredGroups = user?.user_roles.filter(
    role => role.scope_type === 'GROUP'
  ).length
  const numberOfGroups =
    user?.permissions_flat_list[0].permission_name === 'EVERYTHING'
      ? 'All'
      : filteredGroups

  const filteredLocations = user?.user_roles.filter(
    role => role.scope_type === 'LOCATION'
  ).length

  const numberOfLocations =
    user?.permissions_flat_list[0].permission_name === 'EVERYTHING'
      ? 'All'
      : filteredLocations

  return (
    <div className='mb-10 rounded-2xl bg-white p-8 text-gray-700 shadow-lg'>
      <h2 className='mb-6 text-3xl font-bold'>My Current Statistics</h2>
      <ul className='space-y-4 text-xl text-gray-600'>
        <li>
          🏢 Organizations I am part of:
          <span className='font-semibold'> {numberOfOrganizations}</span>
        </li>
        <li>
          👥 Groups I am part of:
          <span className='font-semibold'> {numberOfGroups}</span>
        </li>
        <li>
          🚪 Locations I have access to:
          <span className='font-semibold'> {numberOfLocations}</span>
        </li>
      </ul>
    </div>
  )
}
