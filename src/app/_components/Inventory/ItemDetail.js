'use client'

import Image from 'next/image'
import placeholder_img from '/public/item-placeholder-img.jpg'
import ItemCategory from '@/app/_components/Item/ItemCategory'
import { Building, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ItemDetail({ itemObject }) {
  const [itemImages, setItemImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  // console.log('itemObject', itemObject)

  useEffect(() => {
    let isMounted = true

    async function fetchItemImages() {
      const fetchedImages = []

      for (const attachment of itemObject.attachments) {
        try {
          const response = await fetch(`/api/attachments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              url: attachment.link
            })
          })

          if (!response.ok) throw new Error('Failed to fetch item image')

          const blob = await response.blob()
          const objectUrl = URL.createObjectURL(blob)

          fetchedImages.push(objectUrl)
        } catch (err) {
          console.error('Error loading image:', err)
        }
      }

      if (isMounted) {
        setItemImages(fetchedImages)
      }
    }

    fetchItemImages()
  }, [itemObject.attachments])

  useEffect(() => {
    if (itemImages.length > 0) {
      setSelectedImage(itemImages[0])
      console.log('itemImages', itemImages)
    }
  }, [itemImages])

  return (
    <div className='mx-auto mt-5 mb-10 max-w-6xl rounded-lg border-2 border-gray-200 bg-white p-10 shadow-md'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Image Gallery */}
        <div className='space-y-4'>
          <div className='relative aspect-square overflow-hidden rounded-lg border-gray-300 shadow-lg'>
            <Image
              src={selectedImage ? selectedImage : placeholder_img}
              alt={'Selected image'}
              fill
              className='object-contain'
              priority
            />
          </div>
          <div className='flex space-x-2 overflow-x-auto pb-2'>
            {itemImages.map((image, index) => (
              <div
                key={index}
                className={`relative h-20 w-20 cursor-pointer overflow-hidden rounded-md border-2 ${
                  selectedImage === image
                    ? 'border-3 border-sky-700'
                    : 'border-3 border-gray-300'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`View ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className='space-y-6'>
          <div>
            {itemObject.categories.length > 0 ? (
              <div className='mt-3 flex flex-wrap gap-2'>
                {itemObject.categories.map(category => (
                  <ItemCategory key={category.id} category={category.name} />
                ))}
              </div>
            ) : (
              'No categories'
            )}
          </div>

          <hr className='my-4 border-gray-300' />

          <div>
            <h2 className='mb-2 text-xl font-semibold'>Description</h2>
            <p className='text-gray-700'>
              {itemObject.description
                ? itemObject.description
                : 'No description'}
            </p>
          </div>

          <hr className='my-4 border-gray-300' />

          <div>
            <h2 className='mb-4 text-xl font-semibold'>Attributes</h2>
            {itemObject.attributes.length === 0 ? (
              <p className='text-gray-500'>No attributes available</p>
            ) : (
              <div className='rounded-2xl border border-gray-200 p-4 shadow'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  {itemObject.attributes.map(attribute => (
                    <div key={attribute.name} className='space-y-1'>
                      <p className='text-sm font-medium text-gray-500'>
                        {attribute.name}
                      </p>
                      <p className='font-medium text-gray-800'>
                        {attribute.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <hr className='my-4 border-gray-300' />

          <div>
            <h2 className='mb-4 text-xl font-semibold text-gray-700'>
              Organization & Location
            </h2>
            <div className='rounded-2xl border border-gray-200 p-4 shadow'>
              {/* Organization Details */}
              <div className='mb-4 flex items-center space-x-2'>
                <Building />
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {itemObject.organization.organization_name}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {itemObject.organization.street}{' '}
                    {itemObject.organization.street_number},{' '}
                    {itemObject.organization.city},{' '}
                    {itemObject.organization.postal_code},{' '}
                    {itemObject.organization.country}
                  </p>
                  <p className='mt-1 text-sm text-gray-500 italic'>
                    {itemObject.organization.description}
                  </p>
                </div>
              </div>

              <hr className='my-3 border-gray-300' />

              {/* Location Details */}
              <div className='flex items-center space-x-2'>
                <MapPin />
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {itemObject.location.location_name} (
                    {itemObject.location.room})
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {itemObject.location.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
