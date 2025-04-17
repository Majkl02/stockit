'use client'

import AddNewItemForm from '@/app/_components/AddNewItemForm'
import AddNewItemMethodForm from '@/app/_components/AddNewItemMethodForm'
import AddNewItemUploadPhotoForm from '@/app/_components/AddNewItemUploadPhotoForm'
import AddNewItemReviewForm from '@/app/_components/AddNewItemReviewForm'
import AddNewItemStepper from '@/app/_components/AddNewItemStepper'
import { useState } from 'react'

//TODO: Prerobit na server komponent kvoli data fetchom
export default function AddNewItem() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    { id: 1, label: 'Choose method' },
    { id: 2, label: 'Upload photos' },
    { id: 3, label: 'Item form' },
    { id: 4, label: 'Review' }
  ]

  // Content for each step
  const stepContent = [
    <AddNewItemMethodForm key='location' setActiveStep={setActiveStep} />,
    <AddNewItemUploadPhotoForm key='photo' />,
    <AddNewItemForm key='item' />,
    <AddNewItemReviewForm key='review' />
  ]

  const formData = {
    organization: null,
    location: null,
    photos: {
      mainPhoto: null,
      additionalPhotos: []
    },
    itemDetails: null,
    review: null
  }

  return (
    <div className='mx-auto my-4 mt-10 max-w-6xl rounded-2xl bg-gray-100 shadow-md shadow-gray-400'>
      <h1 className='py-4 text-center text-6xl font-bold text-gray-700'>
        Add New Item
      </h1>
      <AddNewItemStepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      >
        <div className='mt-8'>{stepContent[activeStep - 1]}</div>
      </AddNewItemStepper>
    </div>
  )
}
