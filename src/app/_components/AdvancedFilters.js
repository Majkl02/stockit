'use client'
import { useState } from 'react'
import Select from 'react-select'
import { ItemStatus } from '@/app/_lib/enums'

export default function AdvancedFilters({
  organizations,
  handleOrganization,
  selectedOrg,
  locations,
  handleLocation,
  selectedLoc,
  handleStatus,
  selectedStatus,
  filtersOpen
}) {
  const [locationsList, setLocationsList] = useState(locations)
  //TODO: Status list should be dynamic

  function handleOrgChange(selected) {
    const selectedValues = selected.map(option => option.value)

    if (selectedValues.length > 0) {
      const filteredLocations = locations.filter(loc =>
        selectedValues.includes(loc.organization_id)
      )
      setLocationsList(filteredLocations)
    } else {
      setLocationsList(locations)
    }

    handleOrganization(selectedValues)
  }

  const orgOptions = organizations.map(org => ({
    value: org.organization_id,
    label: org.organization_name
  }))

  const locOptions = locationsList.map(loc => ({
    value: loc.location_id,
    label: loc.location_name
  }))

  const statusOptions = Object.entries(ItemStatus).map(([key, value]) => ({
    value: key,
    label: value
  }))

  return (
    <div
      className={`transition-all duration-400 ease-in-out ${
        filtersOpen
          ? 'max-h-[500px] opacity-100'
          : 'max-h-0 overflow-hidden opacity-0'
      }`}
    >
      <div className='mb-2 grid grid-cols-1 gap-4 px-2 pt-2 sm:grid-cols-3'>
        <div>
          <label
            htmlFor='organization'
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Organization
          </label>
          <Select
            options={orgOptions}
            isMulti
            value={orgOptions.filter(opt => selectedOrg.includes(opt.value))}
            onChange={handleOrgChange}
          />
        </div>

        <div>
          <label
            htmlFor='location'
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Location
          </label>
          <Select
            options={locOptions}
            isMulti
            value={locOptions.filter(opt => selectedLoc.includes(opt.value))}
            onChange={selected =>
              handleLocation(selected.map(option => option.value))
            }
          />
        </div>
        <div>
          <label
            htmlFor='status'
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Status
          </label>
          <Select
            options={statusOptions}
            isMulti
            value={statusOptions.filter(opt =>
              selectedStatus.includes(opt.value)
            )}
            onChange={selected =>
              handleStatus(selected.map(option => option.value))
            }
          />
        </div>
      </div>
    </div>
  )
}
