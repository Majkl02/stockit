import Image from 'next/image'
import Link from 'next/link'

export default function HeaferUser() {
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
        <span className='px-2 py-1'>Michal Januska</span>
      </Link>

      <Image
        src='/log-out-outline.svg'
        alt='nav icon'
        width={30}
        height={30}
        className='cursor-pointer rounded-r-md pr-1 pl-1 hover:bg-sky-600'
      />
    </div>
  )
}
