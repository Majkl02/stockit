'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import user_pic from '/public/person-circle-outline.svg'
import useLogout from '@/app/hooks/useLogout'

export default function HeaderUser() {
  const { user } = useAuth()

  const logout = useLogout()

  function handleLogout(e) {
    e.preventDefault()
    logout()
  }

  if (!user) return null

  return (
    <div className='flex rounded-md border-2 border-sky-500 bg-sky-700 shadow-md shadow-sky-700'>
      <Link
        href='/profile'
        className='flex rounded-l-md px-4 py-2 hover:bg-sky-600'
      >
        <Image src={user_pic} alt='User icon' width={30} height='auto' />
        <span className='px-2 py-1'>{`${user.first_name} ${user.last_name}`}</span>
      </Link>

      <Image
        src='/log-out-outline.svg'
        alt='nav icon'
        width={30}
        height={30}
        className='cursor-pointer rounded-r-md pr-1 pl-1 hover:bg-sky-600'
        onClick={handleLogout}
      />
    </div>
  )
}
