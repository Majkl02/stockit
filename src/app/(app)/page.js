import DashboardDateTime from '../components/DashboardDateTime'
import DashboardHeader from '../components/DashboardHeader'

export default function Dashboard() {
  return (
    <>
      <div className='m-10 flex justify-between rounded-md bg-gray-200 p-10 shadow-sm'>
        <DashboardHeader />
        <div>
          <DashboardDateTime />
        </div>
      </div>
      <div className='m-10 rounded-md bg-gray-200 font-medium shadow-2xl shadow-gray-300'>
        <h2 className='p-4 text-3xl font-bold'>My current statistics:</h2>
        <p className='p-4 text-2xl'>Organizations I am part of: 3</p>
        <p className='p-4 text-2xl'>Groups I am part of: 8</p>
        <p className='p-4 text-2xl'>Rooms I have access to: 25</p>
        <p className='p-4 text-2xl'>Stocked items I have access to: 362</p>
      </div>
    </>
  )
}
