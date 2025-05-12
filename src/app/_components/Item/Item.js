'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import placeholder_img from '/public/item-placeholder-img.jpg'
import org_icon from '/public/organization.svg'
import loc_icon from '/public/location.svg'

export default function Item({ id, name, organization, location, image }) {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/inventory/items/${id}`)}
      className='group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]'
    >
      <div className='relative aspect-[4/3] w-full'>
        <Image
          src={image ? image : placeholder_img}
          alt='Item image'
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </div>

      <div className='space-y-1 p-4'>
        <h2 className='truncate text-xl font-semibold text-gray-800'>{name}</h2>

        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <Image
            src={org_icon}
            alt='Organization icon'
            width={16}
            height={16}
          />
          <span className='truncate'>{organization}</span>
        </div>

        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <Image src={loc_icon} alt='Location icon' width={16} height={16} />
          <span className='truncate'>{location}</span>
        </div>
      </div>
    </div>
  )
}
