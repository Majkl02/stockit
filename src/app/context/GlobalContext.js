'use client'

import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => setIsLoggedIn(prev => !prev)

  return (
    <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, toggleLogin }}>
      {children}
    </GlobalContext.Provider>
  )
}

// 3. Create a custom hook (optional, but clean)
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used inside a GlobalProvider')
  }
  return context
}
