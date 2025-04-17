'use client'
import Image from 'next/image'
import it_tech from '/public/it_tech.png'
import ItemCategory from './ItemCategory'

import { useState } from 'react'

const images = [it_tech, it_tech, it_tech, it_tech]
const mainImage = it_tech

export default function ItemDetail({ itemObject }) {
  const [selectedImage, setSelectedImage] = useState(mainImage)

  console.log('itemObject', itemObject)

  return (
    <div className='mx-auto mt-5 mb-10 max-w-6xl rounded-lg border-2 border-gray-200 bg-white p-10 shadow-md'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Image Gallery */}
        <div className='space-y-4'>
          <div className='relative aspect-square overflow-hidden rounded-lg border-gray-300 shadow-lg'>
            <Image
              src={selectedImage || '/placeholder.svg'}
              alt={'Selected image'}
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='flex justify-between space-x-2 overflow-x-auto pb-2'>
            <div
              className={
                'relative h-20 w-20 cursor-pointer overflow-hidden rounded-md border-gray-300'
              }
              onClick={() => setSelectedImage(mainImage)}
            >
              <Image
                src={mainImage || '/placeholder.svg'}
                alt='Front view'
                fill
                className='object-cover'
              />
            </div>
            {images.map((image, index) => (
              <div
                key={index}
                className={
                  'relative h-20 w-20 cursor-pointer overflow-hidden rounded-md border-gray-300'
                }
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image || '/placeholder.svg'}
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
            {/* <h1 className='text-3xl font-bold tracking-tight'>
              {product.name}
            </h1> */}
            <div className='mt-3 flex flex-wrap gap-2'>
              {itemObject.categories.map(category => (
                <ItemCategory key={category.id} category={category.name} />
              ))}
            </div>
          </div>

          <hr className='my-4 border-gray-300' />

          <div>
            <h2 className='mb-2 text-xl font-semibold'>Description</h2>
            <p className='text-gray-700'>{itemObject.description}</p>
          </div>

          <hr className='my-4 border-gray-300' />

          <div>
            <h2 className='mb-4 text-xl font-semibold'>Attributes</h2>
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
          </div>

          <hr className='my-4 border-gray-300' />

          <div>
            <h2 className='mb-4 text-xl font-semibold'>
              Ogranization & Location
            </h2>
            <div className='rounded-2xl border border-gray-200 p-4 shadow'>
              <p>{itemObject.organization}</p>
              <p>{itemObject.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
