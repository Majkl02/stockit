'use client'

import { useState } from 'react'

export default function ActionPopup({
  message = 'Are you sure you want to continue?',
  primaryButtonText = 'Confirm',
  secondaryButtonText = 'Cancel',
  onItemDelete,
  setIsOpen
}) {
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSecondaryAction = () => {
    handleClose()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      {/* Popup container */}
      <div className='animate-in fade-in zoom-in relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg duration-300 dark:bg-sky-900'>
        {/* Close button */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
        >
          <p className='h-5 w-5'>X</p>
        </button>

        {/* Message */}
        <div className='mt-2 mb-6'>
          <p className='text-gray-700 dark:text-gray-200'>{message}</p>
        </div>

        {/* Action buttons */}
        <div className='flex justify-end space-x-3'>
          <button
            onClick={handleSecondaryAction}
            className='cursor-pointer font-bold dark:text-gray-100'
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onItemDelete}
            className='cursor-pointer font-bold hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200'
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}
