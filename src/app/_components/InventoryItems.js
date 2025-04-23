'use client'

import { useState } from 'react'
import ItemSection from './ItemSection'
import SearchForm from './SearchForm'

export default function InventoryItems({ allItems, organizations, locations }) {
  const [items, setItems] = useState(allItems)
  const [itemsMetadata, setItemsMetadata] = useState({})

  //TODO: Dokoncit logiku pre pagination pri filtroch
  const orgMap = Object.fromEntries(
    organizations.map(org => [org.organization_id, org.organization_name])
  )

  // DEBUG
  // console.log('Organizations map:', orgMap)

  const locMap = Object.fromEntries(
    locations.map(loc => [loc.location_id, loc.location_name])
  )
  // DEBUG
  // console.log('Locations map:', locMap)

  const itemList = items.map(item => {
    return {
      id: item.item_id,
      name: item.item_name,
      organization: orgMap[item.organization_id],
      location: locMap[item.location_id],
      imageUrl: item.imageUrl,
      status: item.status
    }
  })

  console.log('Item list:', itemList)

  return (
    <>
      <div className='mx-4 my-4 rounded-2xl bg-gray-100 shadow-md shadow-gray-400'>
        <h1 className='px-4 py-2 text-center text-6xl font-bold text-gray-700'>
          Inventory
        </h1>
        <SearchForm
          organizations={organizations}
          locations={locations}
          handleItems={setItems}
          handleItemsMetadata={setItemsMetadata}
        />
      </div>
      {itemList.length === 0 && (
        <div className='mt-20 text-center text-4xl font-bold text-gray-500'>
          No items found
        </div>
      )}
      {itemList.length > 0 && (
        <ItemSection items={itemList} itemsMetadata={itemsMetadata} />
      )}
    </>
  )
}
