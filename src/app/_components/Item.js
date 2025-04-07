'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'
import it_tech from '/public/it_tech.png'

export default function Item({ id }) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/inventory/items/${id}`)}
      className='mb-4 flex h-50 w-full cursor-pointer flex-col rounded-2xl bg-gray-300 shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0'
    >
      <div className='w-full overflow-hidden rounded-t-2xl'>
        <Image
          src={it_tech}
          alt='item-tech-img'
          className='h-auto w-full rounded-t-2xl object-contain'
          priority
          sizes='100%'
        />
      </div>
      <div className='p-2'>
        <h1 className='text-lg font-semibold'>Item 1</h1>
        <p className='text-sm text-gray-600'>Description...</p>
      </div>
    </div>
  )
}
