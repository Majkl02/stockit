'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '../context/GlobalContext'

export default function AuthGate({ children }) {
  const { isLoggedIn } = useGlobalContext()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) return null

  return <>{children}</>
}
