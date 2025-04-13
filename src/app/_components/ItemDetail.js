'use client'
import Image from 'next/image'
import it_tech from '/public/it_tech.png'
import ItemCategory from './ItemCategory'

import { useState } from 'react'

const product = {
  id: '1',
  name: 'Premium Leather Backpack',
  description:
    'A high-quality leather backpack perfect for daily use or travel. Features multiple compartments, padded laptop sleeve, and adjustable shoulder straps for maximum comfort. Made from genuine full-grain leather that develops a beautiful patina over time.',
  mainImage: it_tech,
  images: [it_tech, it_tech, it_tech, it_tech],
  categories: [
    <ItemCategory key='1' />,
    <ItemCategory key='2' />,
    <ItemCategory key='3' />,
    <ItemCategory key='4' />
  ],
  attributes: [
    { name: 'Material', value: 'Full-grain leather' },
    { name: 'Dimensions', value: '18" x 12" x 6"' },
    { name: 'Weight', value: '2.5 lbs' },
    { name: 'Color', value: 'Chestnut Brown' },
    { name: 'Capacity', value: '25L' },
    { name: 'Warranty', value: 'Lifetime' }
  ]
}

export default function ItemDetail({ itemObject }) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage)

  return (
    <div className='mx-auto mt-5 max-w-6xl rounded-lg border-2 border-gray-200 bg-white p-10 shadow-md'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Image Gallery */}
        <div className='space-y-4'>
          <div className='relative aspect-square overflow-hidden rounded-lg border-gray-300 shadow-lg'>
            <Image
              src={selectedImage || '/placeholder.svg'}
              alt={product.name}
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
              onClick={() => setSelectedImage(product.mainImage)}
            >
              <Image
                src={product.mainImage || '/placeholder.svg'}
                alt='Front view'
                fill
                className='object-cover'
              />
            </div>
            {product.images.map((image, index) => (
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
                    <p className='font-medium'>{attribute.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
