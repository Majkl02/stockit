'use client'

import { useState } from 'react'
import AdvancedFilters from './AdvancedFilters'
import SearchField from './SearchField'
import ToggleAdvancedFiltersButton from './ToggleAdvancedFiltersButton'

export default function SearchForm({ organizations, locations, fetchItems }) {
  // State variables for search term and selected filters: Controlled components
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOrg, setSelectedOrg] = useState([])
  const [selectedLoc, setSelectedLoc] = useState([])
  const [selectedStatus, setSelectedStatus] = useState([])

  // State variable for filter dropdowns
  const [filtersOpen, setFiltersOpen] = useState(false)

  function handleFilters() {
    setFiltersOpen(cur => !cur)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const params = new URLSearchParams()

    if (selectedOrg.length > 0) {
      selectedOrg.forEach(orgId => params.append('organizations', orgId))
    }

    if (selectedLoc.length > 0) {
      selectedLoc.forEach(locId => params.append('locations', locId))
    }

    if (selectedStatus.length > 0) {
      selectedStatus.forEach(statusId => params.append('statuses', statusId))
    }

    if (searchTerm) {
      params.append('itemName', searchTerm)
    }

    fetchItems(params)
  }

  return (
    <div className='mx-auto w-full max-w-4xl p-4'>
      <form onSubmit={e => handleSubmit(e)}>
        {/* Search field and button */}
        <SearchField searchTerm={searchTerm} handleSerchTerm={setSearchTerm} />
        {/* Filter dropdowns */}
        <AdvancedFilters
          organizations={organizations}
          handleOrganization={setSelectedOrg}
          selectedOrg={selectedOrg}
          locations={locations}
          handleLocation={setSelectedLoc}
          selectedLoc={selectedLoc}
          handleStatus={setSelectedStatus}
          selectedStatus={selectedStatus}
          filtersOpen={filtersOpen}
        />
        <ToggleAdvancedFiltersButton
          handleFilters={handleFilters}
          filtersOpen={filtersOpen}
        />
      </form>
    </div>
  )
}
