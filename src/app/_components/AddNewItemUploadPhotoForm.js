'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'

export default function PhotoUploadForm() {
  const [files, setFiles] = useState({
    mainphoto: null,
    rightphoto: null,
    leftphoto: null,
    backphoto: null,
    topphoto: null
  })

  const handleFileChange = e => {
    const { id, files: selectedFiles } = e.target
    setFiles(prev => ({
      ...prev,
      [id]: selectedFiles[0]
    }))
  }

  const renderUploadField = (label, id) => (
    <>
      <label className='mb-1 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='relative w-full'>
        <input
          id={id}
          type='file'
          accept='.jpg, .jpeg, .png'
          onChange={handleFileChange}
          className='peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0'
        />
        <div className='flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition hover:bg-gray-100'>
          <span className='truncate text-sm'>
            {files[id]?.name || `Choose a ${label.toLowerCase()} image...`}
          </span>
          <Upload className='h-4 w-4 opacity-60' />
        </div>
      </div>
    </>
  )

  return (
    <form onSubmit={e => e.preventDefault()} className='space-y-4'>
      {renderUploadField('Front-side photo', 'mainphoto')}
      {renderUploadField('Right-side photo', 'rightphoto')}
      {renderUploadField('Left-side photo', 'leftphoto')}
      {renderUploadField('Back-side photo', 'backphoto')}
      {renderUploadField('Top-side photo', 'topphoto')}
    </form>
  )
}
