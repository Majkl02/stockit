import DashboardDateTime from '../_components/DashboardDateTime'
import DashboardHeader from '../_components/DashboardHeader'
import DashboardRecentStoredItems from '../_components/DashboardRecentStoredItems'
import DashboardStatistics from '../_components/DashboardStatistics'

export default function Dashboard() {
  return (
    <div className='mx-auto max-w-7xl px-6 py-10'>
      <div className='mb-8 flex flex-col justify-between gap-6 rounded-2xl bg-white p-10 text-gray-700 shadow-lg md:flex-row md:items-center'>
        <DashboardHeader />
        <DashboardDateTime />
      </div>
      <DashboardStatistics />
      <DashboardRecentStoredItems />
    </div>
  )
}
