import DashboardDateTime from '../components/DashboardDateTime'
import DashboardHeader from '../components/DashboardHeader'

export default function Dashboard() {
  return (
    <>
      <div className='flex justify-between p-10'>
        <DashboardHeader />
        <div>
          <DashboardDateTime />
        </div>
      </div>
      <div className='m-10 rounded-md bg-sky-600 font-medium shadow-2xl shadow-blue-400'>
        <h2 className='p-4 text-3xl font-bold'>My current statistics:</h2>
        <p className='p-4 text-2xl'>Organizations I am part of: 3</p>
        <p className='p-4 text-2xl'>Groups I am part of: 8</p>
        <p className='p-4 text-2xl'>Rooms I have access to: 25</p>
        <p className='p-4 text-2xl'>Stocked items I have access to: 362</p>
      </div>
    </>
  )
}
