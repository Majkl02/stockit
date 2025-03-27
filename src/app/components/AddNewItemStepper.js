'use client'

import React from 'react'
import { useState } from 'react'

export default function Stepper({
  steps,
  initialStep = 1,
  onStepChange,
  children
}) {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const goToStep = step => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step)
      if (onStepChange) {
        onStepChange(step)
      }
    }
  }

  const nextStep = () => {
    goToStep(currentStep + 1)
  }

  const prevStep = () => {
    goToStep(currentStep - 1)
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
                onClick={() => goToStep(step.id)}
                className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                  step.id < currentStep
                    ? 'bg-sky-500 text-white' // Completed
                    : step.id === currentStep
                      ? 'bg-sky-600 text-white' // Current
                      : 'bg-gray-200 text-gray-600'
                } // Upcoming`}
                aria-current={step.id === currentStep ? 'step' : undefined}
              >
                {step.id}
              </button>
              <div
                className={`text-sm font-medium ${step.id <= currentStep ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {step.label}
              </div>
            </div>

            {/* Connector Line (except after last step) */}
            {index < steps.length - 1 && (
              <div
                className={`mx-2 h-1 flex-1 ${step.id < currentStep ? 'bg-sky-500' : 'bg-gray-300'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      {children}
      {/* Navigation Buttons */}
      <div className='mt-8 flex justify-between'>
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className='rounded-md border border-sky-600 px-4 py-2 text-sky-600 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className='rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  )
}
