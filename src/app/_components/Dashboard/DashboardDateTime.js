'use client'

import { useEffect, useState } from 'react'

export default function DashboardDateTime() {
  const [dateTime, setDateTime] = useState(null)

  useEffect(() => {
    setDateTime(new Date())

    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!dateTime) return null

  const formattedDate = dateTime.toLocaleDateString('sk-SK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const formattedTime = dateTime.toLocaleTimeString('sk-SK', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return (
    <div className='inline-flex flex-col items-center rounded-md bg-gray-50 px-4 py-2 text-right shadow-md'>
      <div className='text-2xl font-semibold text-gray-700'>
        {formattedTime}
      </div>
      <div className='text-sm text-gray-500'>{formattedDate}</div>
    </div>
  )
}
