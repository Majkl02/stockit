'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <div
      className='h-10 w-10 rounded-2xl bg-blue-500'
      onClick={() => router.back()}
    >
      <span className='flex h-10 w-10 items-center justify-center'>&larr;</span>
    </div>
  )
}
