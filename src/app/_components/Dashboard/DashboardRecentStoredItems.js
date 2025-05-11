'use client'

import { useEffect, useState } from 'react'
import Item from '../Item/Item'

export default function DashboardRecentStoredItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const parameters = new URLSearchParams()
      parameters.set('sort', 'created_at:desc')
      parameters.set('size', '5')
      try {
        const response = await fetch(
          `/api/items/filter?${parameters.toString()}`,
          {
            method: 'GET'
          }
        )

        const items = await response.json()
        console.log('Recent stored items:', items)
        setItems(items.data)
      } catch (error) {
        console.error('Error fetching recent stored items:', error)
      }
    }
    fetchItems()
  }, [])

  if (!items || items.length === 0) {
    return (
      <div className='rounded-2xl bg-white p-8 text-gray-700 shadow-lg'>
        <h2 className='mb-6 text-3xl font-bold'>Recently Stored Items</h2>
        <p className='text-lg font-medium text-gray-500'>
          No items found. Please add some items to your inventory.
        </p>
      </div>
    )
  }

  return (
    <div className='rounded-2xl bg-white p-8 text-gray-700 shadow-lg'>
      <h2 className='mb-6 text-3xl font-bold'>Recently Stored Items</h2>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
        {items.map(item => (
          <Item
            key={item.item_id}
            id={item.item_id}
            name={item.item_name}
            location={item.location}
            organization={item.organization}
          />
        ))}
      </div>
    </div>
  )
}
