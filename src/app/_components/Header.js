'use client'

import Image from 'next/image'
import HeaderUser from './HeaderUser'
import { useAuth } from '../context/AuthContext'
import logo from '/public/Logo.png'

export default function Header() {
  const { user } = useAuth()

  return (
    <header className='flex h-30 max-w-screen items-center justify-between bg-gray-800 px-6 py-4 text-white'>
      <div className='flex items-center gap-5 text-5xl font-bold'>
        <Image src={logo} alt='StockIt Logo' width={60} />
        <h1>StockIT</h1>
      </div>
      {user && <HeaderUser />}
    </header>
  )
}
