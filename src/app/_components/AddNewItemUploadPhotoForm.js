'use client'

import { useState } from 'react'
import { Upload, CircleX } from 'lucide-react'

export default function PhotoUploadForm({ attachments, setAttachments }) {
  const handleFileChange = e => {
    const { id, files } = e.target
    console.log(e.target.files)
    console.log('Attachments: ' + attachments.FRONT)
    setAttachments(prev => ({
      ...prev,
      [id]: files[0]
    }))
  }

  const handleRemoveFile = e => {
    const { id } = e.target
    setAttachments(prev => ({
      ...prev,
      [id]: null
    }))
    console.log(attachments)
  }

  const renderUploadField = (label, id) => (
    <div className='space-y-1'>
      {/* Visible label above the input */}
      <label className='block text-sm font-medium text-gray-700'>{label}</label>

      {/* Upload field */}
      <div className='flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition hover:bg-gray-100'>
        <label htmlFor={id} className='w-full cursor-pointer truncate text-sm'>
          {attachments[id]?.name || `Choose a ${label.toLowerCase()} image...`}
          <input
            id={id}
            type='file'
            accept='.webp, .jpeg, .png'
            onChange={handleFileChange}
            className='hidden'
          />
        </label>

        {attachments[id] ? (
          <CircleX
            className='h-5 w-5 cursor-pointer text-red-500 hover:text-red-700'
            onClick={() =>
              setAttachments(prev => ({
                ...prev,
                [id]: null
              }))
            }
          />
        ) : (
          <Upload className='h-4 w-4 opacity-60' />
        )}
      </div>
    </div>
  )

  return (
    <div className='mx-auto my-4 mt-10 max-w-6xl rounded-2xl border-4 border-sky-800 bg-gray-100 p-4 shadow-xl shadow-gray-400'>
      <h2 className='mb-4 text-center text-3xl font-bold text-gray-600'>
        Upload desired item photos
      </h2>
      <form className='space-y-4'>
        {renderUploadField('Front-side photo', 'front')}
        {renderUploadField('Back-side photo', 'back')}
        {renderUploadField('Left-side photo', 'left')}
        {renderUploadField('Right-side photo', 'right')}
        {renderUploadField('Top-side photo', 'top')}
        {renderUploadField('Bottom-side photo', 'botom')}
      </form>
    </div>
  )
}
