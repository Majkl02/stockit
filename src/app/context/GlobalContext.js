'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  // const [user, setUser] = useState(null)

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

// 3. Create a custom hook (optional, but clean)
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used inside a GlobalProvider')
  }
  return context
}
