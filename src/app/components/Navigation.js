import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='text flex w-64 flex-col bg-gray-900 p-5 text-white uppercase'>
      <ul className='space-y-4'>
        {[
          { name: 'Dashboard', path: '/' },
          { name: 'Inventory', path: '/inventory/organizations' },
          { name: 'Add New Item', path: '/addnew' },
          { name: 'Profile', path: '/profile' },
          { name: 'Settings', path: '/settings' }
        ].map(item => (
          <li key={item.path} className={`rounded-lg hover:bg-gray-700`}>
            <Link href={item.path} className='block px-4 py-2'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
