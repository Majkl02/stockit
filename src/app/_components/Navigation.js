'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Dashboard', path: '/', iconPath: '/home-outline.svg' },
    {
      name: 'Inventory',
      path: '/inventory/items',
      iconPath: '/cube-outline.svg'
    },
    {
      name: 'Add New Item',
      path: '/addnew',
      iconPath: '/add-circle-outline.svg'
    },
    { name: 'Profile', path: '/profile', iconPath: '/person-outline.svg' },
    { name: 'Settings', path: '/settings', iconPath: '/settings-outline.svg' }
  ]

  return (
    <nav className='text flex w-64 flex-col bg-gray-900 p-5 text-white uppercase'>
      <ul className='space-y-4'>
        {navItems.map(item => {
          const isActive =
            pathname === item.path || (item.path === '/' && pathname === '')
          return (
            <li
              key={item.path}
              className={`transform rounded-lg transition-all duration-200 ${
                isActive ? 'translate-x-2 bg-sky-700' : 'hover:bg-sky-800'
              } hover:translate-x-2`}
            >
              <Link
                href={item.path}
                className='flex items-center gap-4 px-4 py-2'
              >
                <Image
                  src={item.iconPath}
                  alt='nav icon'
                  width={30}
                  height={30}
                />
                <span>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
