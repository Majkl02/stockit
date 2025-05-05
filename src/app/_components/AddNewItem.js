'use client'

import AddNewItemForm from '@/app/_components/AddNewItemForm'
import AddNewItemMethodForm from '@/app/_components/AddNewItemMethodForm'
import AddNewItemUploadPhotoForm from '@/app/_components/AddNewItemUploadPhotoForm'
import AddNewItemReviewForm from '@/app/_components/AddNewItemReviewForm'
import AddNewItemStepper from '@/app/_components/AddNewItemStepper'
import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AddNewItem({ locations, categories }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true
      return
    }

    if (searchParams.get('success') === 'true') {
      setShowSuccess(true)
      setActiveStep(1)
      setNewItemData({
        location_id: locations[0].location_id,
        item_name: '',
        description: '',
        status: 'IN_USE',
        item_categories: [],
        item_attributes: []
      })
      setAttachments({
        front: null,
        back: null,
        left: null,
        right: null,
        top: null,
        bottom: null
      })

      // Redirect after delay, only after first render
      const timeout = setTimeout(() => {
        router.push('/addnew')
      }, 3000)

      return () => clearTimeout(timeout) // Cleanup
    } else {
      setShowSuccess(false)
    }
  }, [searchParams, router, locations])

  const [activeStep, setActiveStep] = useState(1)
  const [newItemData, setNewItemData] = useState({
    location_id: locations[0].location_id,
    item_name: '',
    description: '',
    status: 'IN_USE',
    item_categories: [],
    item_attributes: []
  })

  const [attachments, setAttachments] = useState({
    front: null,
    back: null,
    left: null,
    right: null,
    top: null,
    bottom: null
  })

  const steps = [
    { id: 1, label: 'Upload photos' },
    { id: 2, label: 'AI Option' },
    { id: 3, label: 'Item form' },
    { id: 4, label: 'Review' }
  ]

  // Content for each step
  const stepContent = [
    <AddNewItemUploadPhotoForm
      key='photo'
      attachments={attachments}
      setAttachments={setAttachments}
    />,
    <AddNewItemMethodForm key='ai' setActiveStep={setActiveStep} />,
    <AddNewItemForm
      key='item'
      locations={locations}
      categories={categories}
      newItem={newItemData}
      setNewItem={setNewItemData}
    />,
    <AddNewItemReviewForm
      key='review'
      newItem={newItemData}
      locations={locations}
      categories={categories}
      attachments={attachments}
    />
  ]

  return (
    <div className='mx-auto my-4 mt-10 max-w-6xl rounded-2xl border-6 border-sky-800 bg-gray-100 shadow-xl shadow-gray-400'>
      <h1 className='py-4 text-center text-6xl font-bold text-gray-700'>
        Add New Item
      </h1>
      {showSuccess && (
        <div className='flex justify-center'>
          <div className='mb-6 inline-block rounded-md bg-green-100 px-4 py-3 text-green-800 shadow-md'>
            ✅ Item uploaded successfully!
          </div>
        </div>
      )}
      <AddNewItemStepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        newItem={newItemData}
        attachments={attachments}
      >
        <div className='mt-8'>{stepContent[activeStep - 1]}</div>
      </AddNewItemStepper>
    </div>
  )
}
