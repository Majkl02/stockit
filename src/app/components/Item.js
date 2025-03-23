'use client'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function Item() {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push('/inventory/organizations/rooms/items')}
      className='flex h-50 w-60 flex-col rounded-2xl bg-blue-500 shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0'
    >
      <Image
        src='/item-placeholder-img.jpg'
        alt='item-placeholder-img'
        width={240}
        height={60}
        className='h-30 w-60 rounded-t-2xl'
      />
      <div className='p-2'>
        <h1 className='text-lg font-semibold'>Item 1</h1>
        <p className='text-sm text-gray-600'>Description...</p>
      </div>
    </div>
  )
}
