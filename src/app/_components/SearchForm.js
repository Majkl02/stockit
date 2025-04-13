'use client'

import { useState } from 'react'
import AdvancedFilters from './AdvancedFilters'
import SearchField from './SearchField'
import ToggleAdvancedFiltersButton from './ToggleAdvancedFiltersButton'

export default function SearchForm({ organizations, locations }) {
  const [filtersOpen, setFiltersOpen] = useState(false)

  function handleFilters() {
    setFiltersOpen(cur => !cur)
  }

  return (
    <div className='mx-auto w-full max-w-4xl p-4'>
      <form onSubmit={e => e.preventDefault()}>
        {/* Search field and button */}
        <SearchField />
        {/* Filter dropdowns */}
        <AdvancedFilters
          organizations={organizations}
          locations={locations}
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
