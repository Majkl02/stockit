import Link from 'next/link'

export default function Management() {
  const sections = [
    { name: 'Organizations', href: '/management/organizations' },
    { name: 'Locations', href: '/management/locations' },
    { name: 'Groups', href: '/management/groups' },
    { name: 'Users', href: '/management/users' }
  ]

  return (
    <div className='mx-auto my-16 max-w-4xl px-4'>
      <h1 className='mb-12 text-center text-6xl font-bold text-gray-700'>
        System Management
      </h1>

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {sections.map(section => (
          <Link
            key={section.name}
            href={section.href}
            className='rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl hover:ring-2 hover:ring-sky-400'
          >
            <h2 className='text-center text-2xl font-semibold text-gray-700 group-hover:text-sky-600'>
              Manage {section.name}
            </h2>
            <p className='mt-2 text-center text-sm text-gray-500'>
              View, create, edit and remove {section.name.toLowerCase()} from
              the system.
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
