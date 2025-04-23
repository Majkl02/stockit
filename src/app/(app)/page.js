import DashboardDateTime from '../_components/DashboardDateTime'
import DashboardHeader from '../_components/DashboardHeader'

export default function Dashboard() {
  return (
    <div className='mx-auto max-w-7xl px-6 py-10'>
      <div className='mb-8 flex flex-col justify-between gap-6 rounded-2xl bg-white p-10 text-gray-700 shadow-lg md:flex-row md:items-center'>
        <DashboardHeader />
        <DashboardDateTime />
      </div>

      <div className='rounded-2xl bg-white p-8 text-gray-700 shadow-lg'>
        <h2 className='mb-6 text-3xl font-bold'>My Current Statistics</h2>
        <ul className='space-y-4 text-xl text-gray-600'>
          <li>
            🏢 Organizations I am part of:{' '}
            <span className='font-semibold'>3</span>
          </li>
          <li>
            👥 Groups I am part of: <span className='font-semibold'>8</span>
          </li>
          <li>
            🚪 Rooms I have access to: <span className='font-semibold'>25</span>
          </li>
          <li>
            📦 Stocked items I have access to:{' '}
            <span className='font-semibold'>362</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
