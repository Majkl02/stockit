'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Stepper({
  steps,
  activeStep = 1,
  setActiveStep,
  children,
  attachments,
  newItem
}) {
  const [message, setMessage] = useState('')
  const [uploading, setUploading] = useState(false)

  const router = useRouter()

  async function goToStep(step) {
    if (step >= 1 && step <= steps.length) {
      if (step === 2 && attachments.front === null) {
        setMessage('Please upload at least one photo before proceeding.')
        return
      }

      if (step === 4 && newItem.item_name === '') {
        setMessage('Please fill at least the item name before proceeding.')
        return
      }

      setMessage('')
      setActiveStep(step)
    } else if (step > steps.length) {
      try {
        setUploading(true)
        setMessage('Uploading item...')
        // 1. Upload the item
        const itemRes = await fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newItem)
        })

        if (!itemRes.ok) throw new Error('Failed to create item.')

        const itemData = await itemRes.json()
        const itemId = itemData.item_id

        // 2. Upload each attachment
        for (const [position, file] of Object.entries(attachments)) {
          if (!file) continue

          const formData = new FormData()
          formData.append('file', file)

          const uploadRes = await fetch(
            `/api/attachments/item/${itemId}?type=IMAGE&position=${position.toUpperCase()}`,
            {
              method: 'POST',
              body: formData
            }
          )

          if (!uploadRes.ok) {
            console.error(`Failed to upload ${position} photo`)
          }
        }

        setUploading(false)
        setMessage('')
        router.push('/addnew?success=true')
      } catch (error) {
        console.error('Error uploading item or attachments:', error)
        setMessage('Failed to upload item. Please try again.')
      }
    }
  }

  const nextStep = () => {
    goToStep(activeStep + 1)
  }

  const prevStep = () => {
    goToStep(activeStep - 1)
  }

  return (
    <div className='mx-auto w-full max-w-3xl px-4 py-8'>
      {/* Stepper Navigation */}
      <div className='mb-8 flex items-center justify-between'>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Circle */}
            <div className='flex flex-col items-center'>
              <button
                className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                  step.id < activeStep
                    ? 'bg-sky-600 text-white' // Completed
                    : step.id === activeStep
                      ? 'bg-sky-800 text-white' // Current
                      : 'bg-gray-200 text-gray-600'
                } // Upcoming`}
                aria-current={step.id === activeStep ? 'step' : undefined}
              >
                {step.id}
              </button>
              <div
                className={`text-sm font-medium ${step.id <= activeStep ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {step.label}
              </div>
            </div>

            {/* Connector Line (except after last step) */}
            {index < steps.length - 1 && (
              <div
                className={`mx-2 h-1 flex-1 ${step.id < activeStep ? 'bg-sky-600' : 'bg-gray-300'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className='mt-8 flex items-center justify-between'>
        <button
          onClick={prevStep}
          disabled={activeStep === 1 || uploading}
          className='cursor-pointer rounded-md border border-sky-600 px-4 py-2 text-sky-600 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Previous
        </button>
        {message && (
          <p className='mx-auto mt-2 text-center text-sm font-medium text-red-600'>
            {message}
          </p>
        )}
        <button
          onClick={nextStep}
          hidden={activeStep === 2}
          disabled={uploading}
          className='cursor-pointer rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50'
        >
          {activeStep === steps.length ? 'Upload' : 'Next'}
        </button>
      </div>
      {children}
    </div>
  )
}
