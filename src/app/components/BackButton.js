'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <div
      className='flex h-10 w-20 items-center justify-center rounded-2xl bg-blue-500'
      onClick={() => router.back()}
    >
      <Image
        src='/arrow-back-outline.svg'
        alt='arrow back'
        width={30}
        height={30}
      />
    </div>
  )
}
