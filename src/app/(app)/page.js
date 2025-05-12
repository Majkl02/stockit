import DashboardDateTime from '../_components/Dashboard/DashboardDateTime'
import DashboardHeader from '../_components/Dashboard/DashboardHeader'
import DashboardRecentlyStoredItems from '../_components/Dashboard/DashboardRecentlyStoredItems'
import DashboardStatistics from '../_components/Dashboard/DashboardStatistics'

export default function Dashboard() {
  return (
    <div className='mx-auto max-w-7xl px-6 py-10'>
      <div className='mb-8 flex flex-col justify-between gap-6 rounded-2xl bg-white p-10 text-gray-700 shadow-lg md:flex-row md:items-center'>
        <DashboardHeader />
        <DashboardDateTime />
      </div>
      <DashboardStatistics />
      <DashboardRecentlyStoredItems />
    </div>
  )
}
