'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '../context/GlobalContext'

export default function HeaderUser() {
  const router = useRouter()
  const { user, setUser } = useGlobalContext()

  function handleLogout(e) {
    e.preventDefault()
    document.cookie = 'access_token=; Max-Age=0; path=/'
    document.cookie = 'refresh_token=; Max-Age=0; path=/'
    localStorage.removeItem('user')
    setUser(null)
    router.push('/login')
  }

  if (!user) return null

  return (
    <div className='flex rounded-md bg-sky-700'>
      <Link
        href='/profile'
        className='flex rounded-l-md px-4 py-2 hover:bg-sky-600'
      >
        <Image
          src='/person-circle-outline.svg'
          alt='nav icon'
          width={30}
          height={30}
        />
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
