'use client'

import { useState, useEffect } from 'react'
import ItemSection from './ItemSection'
import SearchForm from './SearchForm'

const ITEMS_PER_PAGE = 10 // Number of items per page

export default function InventoryItems({ organizations, locations }) {
  // State variables for items, metadata and parameters
  const [items, setItems] = useState(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [itemsMetadata, setItemsMetadata] = useState({})
  const [parameters, setParameters] = useState(null)

  // Async function to fetch items from the server
  // This function is called when the component mounts, when the user submits the search/filter form or when the user changes the page in the pagination component
  // It takes the search/filter parameters and the page number from the pagination component as arguments
  async function fetchItems(params = null, page = 0) {
    // If no parameters are provided, create a new URLSearchParams object and set the default values
    const parameters = params !== null ? params : new URLSearchParams()
    parameters.set('showArchived', 'false')
    parameters.set('page', `${page}`)
    parameters.set('size', ITEMS_PER_PAGE)
    //parameters.set('sort', 'item_name') //TODO: Add sorting functionality
    // DEBUG
    // console.log('Parameters:', parameters.toString())
    setParameters(parameters)

    // If the user has selected any filters, add them to the parameters object
    try {
      const res = await fetch(`/api/items/filter?${parameters.toString()}`, {
        method: 'GET'
      })

      if (!res.ok) throw new Error('Failed to fetch filtered items.')

      const data = await res.json()
      //DEBUG
      // console.log('Filtered items:', data)
      setImagesLoaded(false)
      setItems(data.data)
      setItemsMetadata(data.metadata)
      //DEBUG
      // console.log('Items metadata:', data.metadata)
    } catch (err) {
      console.error('Error fetching filtered items:', err)
    }
  }

  // useEffect to fetch items when the component mounts
  // This is the initial fetch of items when the component mounts
  useEffect(() => {
    fetchItems()
  }, [])

  useEffect(() => {
    if (!items || imagesLoaded) return
    const fetchItemImages = async () => {
      if (items) {
        const updatedItems = await Promise.all(
          items.map(async item => {
            if (item.attachments.length === 0) {
              return { ...item, imageUrl: null } // Use a placeholder image if no attachments are found
            }
            const frontImage = item.attachments.find(
              attachment => attachment.position === 'FRONT'
            )
            // console.log('frontImage', frontImage)
            try {
              const response = await fetch(`/api/attachments`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  url:
                    frontImage !== undefined
                      ? frontImage.link
                      : item.attachments[0].link
                })
              })

              if (!response.ok) throw new Error('Failed to fetch item image')

              const blob = await response.blob()
              const objectUrl = URL.createObjectURL(blob)

              return { ...item, imageUrl: objectUrl }
            } catch (err) {
              console.error('Error loading image:', err)
            }
          })
        )
        setImagesLoaded(true)
        setItems(updatedItems)
        console.log('Updated items with images:', updatedItems)
      }
    }

    fetchItemImages()
  }, [items, imagesLoaded])

  // Map the organization and location IDs to their names for easier access
  // This is done to avoid multiple lookups in the organizations and locations arrays
  const orgMap = Object.fromEntries(
    organizations.map(org => [org.organization_id, org.organization_name])
  )

  const locMap = Object.fromEntries(
    locations.map(loc => [loc.location_id, loc.location_name])
  )
  // DEBUG
  // console.log('Organizations map:', orgMap)
  // DEBUG
  // console.log('Locations map:', locMap)

  // If items are not available, show a loading message
  // This is done to avoid rendering the component before the data is available
  if (!items) {
    return (
      <div className='mt-20 text-center text-4xl font-bold text-gray-500'>
        Loading items...
      </div>
    )
  }

  // If items are available, map them to the desired format for rendering
  const itemList = items.map(item => {
    return {
      id: item.item_id,
      name: item.item_name,
      organization: orgMap[item.organization_id],
      location: locMap[item.location_id],
      imageUrl: item.imageUrl,
      status: item.status,
      created_at: item.created_at
    }
  })

  console.log('Item list:', itemList)
  // DEBUG
  // console.log('Item list:', itemList)

  return (
    <>
      <div className='mx-4 my-4 rounded-2xl bg-gray-100 shadow-md shadow-gray-400'>
        <h1 className='px-4 py-2 text-center text-6xl font-bold text-gray-700'>
          Inventory
        </h1>
        <SearchForm
          organizations={organizations}
          locations={locations}
          fetchItems={fetchItems}
        />
      </div>
      {itemList.length === 0 && (
        <div className='mt-20 text-center text-4xl font-bold text-gray-500'>
          No items found :(
        </div>
      )}
      {itemList.length > 0 && (
        <ItemSection
          items={itemList}
          itemsMetadata={itemsMetadata}
          onPageChange={fetchItems}
          parameters={parameters}
        />
      )}
    </>
  )
}
