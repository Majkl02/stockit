import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='text flex w-64 flex-col bg-gray-900 p-5 text-white uppercase'>
      <ul className='space-y-4'>
        {[
          { name: 'Dashboard', path: '/', iconPath: '/home-outline.svg' },
          {
            name: 'Inventory',
            path: '/inventory/organizations',
            iconPath: '/cube-outline.svg'
          },
          {
            name: 'Add New Item',
            path: '/addnew',
            iconPath: '/add-circle-outline.svg'
          },
          {
            name: 'Profile',
            path: '/profile',
            iconPath: '/person-outline.svg'
          },
          {
            name: 'Settings',
            path: '/settings',
            iconPath: '/settings-outline.svg'
          }
        ].map(item => (
          <li key={item.path} className={`rounded-lg hover:bg-sky-900`}>
            <div className='flex gap-4'>
              <Image
                src={item.iconPath}
                alt='nav icon'
                width={30}
                height={30}
                className='text-gray-50'
              />
              <Link href={item.path} className='block px-4 py-2'>
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}
