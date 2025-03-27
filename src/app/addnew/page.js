'use client'

import AddNewItemStepper from '@/app/components/AddNewItemStepper.js'
import { useState } from 'react'
import AddNewItemLocationForm from '../components/AddNewItemLocationForm'
import AddNewItemForm from '../components/AddNewItemForm'
import AddNewItemUploadPhotoForm from '../components/AddNewItemUploadPhotoForm'
import AddNewItemReviewForm from '../components/AddNewItemReviewForm'

export default function AddNewItem() {
  const [activeStep, setActiveStep] = useState(1)
  const steps = [
    { id: 1, label: 'Choose item location' },
    { id: 2, label: 'Item form' },
    { id: 3, label: 'Upload photos' },
    { id: 4, label: 'Review' }
  ]

  // Content for each step
  const stepContent = [
    <AddNewItemLocationForm key='location' />,
    <AddNewItemForm key='item' />,
    <AddNewItemUploadPhotoForm key='photo' />,
    <AddNewItemReviewForm key='review' />
  ]

  return (
    <>
      <h1 className='px-4 py-2 text-center text-6xl font-bold'>Add New Item</h1>
      <AddNewItemStepper
        steps={steps}
        initialStep={activeStep}
        onStepChange={setActiveStep}
      >
        <div className='mt-8'>{stepContent[activeStep - 1]}</div>
      </AddNewItemStepper>
    </>
  )
}
