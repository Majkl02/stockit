'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { refreshAccessToken } from '../_lib/data-services'

const AuthContext = createContext()

// const REFRESH_DELAY = 3000 //TODO: Odkomentovat po spojazdneni refreshu

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [user])

  //TODO: Spojazdnit
  // const scheduleRefresh = () => {
  //
  //     setTimeout(async () => {
  //       const token = document.cookie
  //         .split('; ')
  //         .find(row => row.startsWith('access_token='))
  //         ?.split('=')[1]
  //       const data = await refreshAccessToken(token)
  //       console.log('Data from refresh:', data)
  //       if (data?.access_token) {
  //         localStorage.setItem('user', JSON.stringify(data.user_info))
  //         setUser(data.user_info)
  //         console.log('REFRESHING USER')
  //         scheduleRefresh() // schedule next refresh
  //       } else {
  //         logout()
  //       }
  //     }, REFRESH_DELAY)
  //   }

  // --- 3. Logout --- //TODO: VYMAZAT COOOKIES A REDIRECT NA LOGIN
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    // Optional: redirect to login
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an AuthProvider')
  return context
}
