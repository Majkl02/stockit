'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'
import it_tech from '/public/it_tech.png'
import org_icon from '/public/organization.svg'
import loc_icon from '/public/location.svg'

export default function Item({ id, name, organization, location, image }) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/inventory/items/${id}`)}
      className='mb-4 flex cursor-pointer flex-col rounded-2xl bg-gray-200 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0'
    >
      <div className='relative aspect-[3/2] flex-1 rounded-t-2xl'>
        <Image
          src={it_tech}
          fill
          alt='item-tech-img'
          className='flex-1 rounded-t-2xl object-cover'
        />
      </div>
      <div className='p-2'>
        <h1 className='text-lg font-semibold text-gray-700'>
          {name.length > 25 ? name.slice(0, 20) + '...' : name}
        </h1>
        <div className='flex items-center gap-2'>
          <Image src={org_icon} alt='organization' />
          <p className='text-sm text-gray-600'>{organization}</p>
        </div>
        <div className='flex items-center gap-2'>
          <Image src={loc_icon} alt='organization' />
          <p className='text-sm text-gray-600'>{location}</p>
        </div>
      </div>
    </div>
  )
}
