'use client'

import Image from 'next/image'
import BackButton from '@/app/_components/Actions/BackButton'
import ActionPopup from '@/app/_components/Actions/ActionPopup'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ItemDetailHeader({ title, itemId }) {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  async function handleItemDelete() {
    try {
      const res = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE'
      })

      if (!res.ok) throw new Error('Failed to delete item.')

      alert('Item deleted successfully.')
      // Redirect to the inventory page or update the UI accordingly

      router.push('/inventory/items')
    } catch (error) {
      console.error('Error deleting item:', error)
    } finally {
      setIsVisible(false)
    }
  }

  return (
    <div className='mx-auto mt-10 max-w-6xl rounded-lg border-2 border-gray-200 bg-white p-10 shadow-md'>
      <div className='flex items-center justify-between'>
        <BackButton />
        <h1 className='text-3xl font-bold text-gray-700'>{title}</h1>
        <div className='flex items-center gap-2'>
          <button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-sky-700 hover:bg-sky-800'>
            <Image
              src='/icon-edit.svg'
              alt='item edit'
              width={30}
              height={30}
            />
          </button>
          <button
            onClick={() => setIsVisible(true)}
            className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-sky-700 hover:bg-sky-800'
          >
            <Image
              src='/icon-delete.svg'
              alt='item delete'
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
      {isVisible && (
        <ActionPopup
          message='Are you sure you want to permanently delete this item?'
          primaryButtonText='Yes'
          secondaryButtonText='No'
          onItemDelete={handleItemDelete}
          setIsOpen={setIsVisible}
        />
      )}
    </div>
  )
}
