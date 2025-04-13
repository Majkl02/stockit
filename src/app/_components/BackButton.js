'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-700'
      onClick={() => router.back()}
    >
      <Image
        src='/arrow-back-outline.svg'
        alt='arrow back'
        width={30}
        height={30}
      />
    </button>
  )
}
