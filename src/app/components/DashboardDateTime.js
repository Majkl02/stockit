'use client'

import { useEffect, useState } from 'react'

export default function DashboardDateTime() {
  const [dateTime, setDateTime] = useState(null)

  useEffect(() => {
    setDateTime(new Date()) // Set after mount to avoid hydration mismatch

    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!dateTime) return null // Or show a loading placeholder

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
    <div className='inline-flex flex-col rounded-md bg-gray-100 px-3 py-2 text-center shadow-sm'>
      <div className='text-lg font-medium'>{formattedTime}</div>
      <div className='text-sm text-gray-600'>{formattedDate}</div>
    </div>
  )
}
