'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AddNewItemButton() {
  const pathname = usePathname()

  // Don't render the button if we're already on the /addnew page
  if (pathname === '/addnew') return null

  return (
    <Link
      href='/addnew'
      className='fixed right-4 bottom-4 z-50 flex h-15 w-20 items-center justify-center rounded-2xl bg-sky-700 px-4 py-2 text-3xl font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-500 active:translate-y-0'
    >
      +
    </Link>
  )
}
