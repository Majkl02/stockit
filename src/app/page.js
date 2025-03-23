'use client'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [time, setTime] = useState(new Date())

  // Effect, that displays current date (runs only on mount)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000) // Updates every second

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className='flex justify-between p-10'>
        <div>
          <h1 className='text-7xl'>Welcome, Michal!</h1>
          <p className='text-2xl'>Role: Superadmin</p>
        </div>
        <div>
          <span className='text-2xl'>{time.toLocaleString()}</span>
        </div>
      </div>
      <div className='m-10 rounded-md bg-blue-500 shadow-2xl shadow-blue-400'>
        <h2 className='p-4 text-3xl'>Current statistics:</h2>
        <p className='p-4 text-2xl'>Number of groups: 8</p>
        <p className='p-4 text-2xl'>Number of rooms: 25</p>
        <p className='p-4 text-2xl'>Number of items stocked: 362</p>
      </div>
    </>
  )
}
