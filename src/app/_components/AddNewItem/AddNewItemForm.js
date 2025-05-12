'use client'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

export default function AddNewItemForm({
  locations,
  categories,
  attributes,
  newItem,
  attributeDetails,
  setAttributeDetails,
  setSelectedAttributes,
  selectedAttributes,
  setNewItem
}) {
  const locOptions = locations.map(loc => ({
    value: loc.location_id,
    label: loc.location_name
  }))

  const categOptions = categories.map(cat => ({
    value: cat.id,
    label: cat.name
  }))

  const attrOptions = attributes.map(attr => ({
    value: attr.id,
    label: attr.name
  }))

  // State to manage individual attribute objects

  useEffect(() => {
    setNewItem(prev => ({
      ...prev,
      item_attributes: attributeDetails.map(attr => ({
        attribute_id: attr.id,
        value: attr.value
      }))
    }))
  }, [attributeDetails, setNewItem])

  // Handle adding attributes
  const handleAttributeChange = selected => {
    const selectedValues = selected.map(option => option.value)
    setSelectedAttributes(selectedValues)

    // Sync the state for detailed attribute fields
    const newDetails = selected.map(option => {
      const existing = attributeDetails.find(attr => attr.id === option.value)
      return existing
        ? existing
        : { id: option.value, label: option.label, value: '' }
    })
    setAttributeDetails(newDetails)

    console.log(newItem)
  }

  // Handle field changes for value and description
  const handleFieldChange = (id, field, value) => {
    const updatedDetails = attributeDetails.map(attr =>
      attr.id === id ? { ...attr, [field]: value } : attr
    )
    setAttributeDetails(updatedDetails)
  }

  return (
    <div className='rounded-2xl border-4 border-sky-700 p-6 shadow-lg shadow-gray-400'>
      <h2 className='mb-4 text-xl font-bold text-gray-700'>Item form</h2>
      <form onSubmit={e => e.preventDefault()}>
        {/* Filter dropdowns */}
        <div className='flex flex-col gap-4'>
          <div>
            <label
              htmlFor='location'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Location
            </label>
            <Select
              options={locOptions}
              required
              value={locOptions.find(loc => newItem.location_id === loc.value)}
              onChange={selected => {
                setNewItem(prev => ({
                  ...prev,
                  location_id: selected.value
                }))
              }}
              className='w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-700 focus:outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='label'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Item Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={newItem.item_name}
              onChange={e => {
                setNewItem(prev => ({ ...prev, item_name: e.target.value }))
              }}
              required
              className='w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-700 focus:outline-none'
              placeholder='Item Name'
            ></input>
          </div>
          <div>
            <label
              htmlFor='label'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Description
            </label>
            <textarea
              type='text'
              id='description'
              name='description'
              required
              value={newItem.description}
              onChange={e => {
                setNewItem(prev => ({ ...prev, description: e.target.value }))
              }}
              className='h-20 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-700 focus:outline-none'
              rows={10}
              placeholder='Item description'
            ></textarea>
          </div>

          <div>
            <label
              htmlFor='categories'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Categories
            </label>
            <div className='flex items-center gap-4'>
              <Select
                options={categOptions}
                isMulti
                value={categOptions.filter(categ =>
                  newItem.item_categories.includes(categ.value)
                )}
                onChange={selected => {
                  const selectedValues = selected.map(option => option.value)
                  console.log(selectedValues)
                  setNewItem(prev => ({
                    ...prev,
                    item_categories: selectedValues
                  }))
                  console.log(newItem)
                }}
                className='w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-700 focus:outline-none'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='attributes'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Attributes
            </label>
            <div className='flex items-center gap-4'>
              <Select
                options={attrOptions}
                isMulti
                value={attrOptions.filter(attr =>
                  selectedAttributes.includes(attr.value)
                )}
                onChange={handleAttributeChange}
                className='w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-sky-700 focus:outline-none'
              />
            </div>
          </div>
          {/* Render Attribute Fields */}
          {attributeDetails.map(attribute => (
            <div
              key={attribute.id}
              className='mt-4 rounded-md border border-gray-300 p-4'
            >
              <h4 className='mb-2 text-lg font-semibold text-gray-700'>
                {attribute.label}
              </h4>

              <div className='mb-3'>
                <label className='block text-sm font-medium text-gray-600'>
                  Value
                </label>
                <input
                  type='text'
                  value={attribute.value}
                  onChange={e =>
                    handleFieldChange(attribute.id, 'value', e.target.value)
                  }
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-700 focus:outline-none'
                  placeholder='Enter value...'
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}
