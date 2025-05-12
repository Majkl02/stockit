'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

export default function useLogout() {
  const router = useRouter()
  const { setUser } = useAuth()

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST'
      })

      // Clear client state and storage
      localStorage.removeItem('user')
      setUser(null)

      // Redirect
      router.push('/login')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return handleLogout
}
