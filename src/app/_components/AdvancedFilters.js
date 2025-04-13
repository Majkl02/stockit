export default function AdvancedFilters({
  organizations,
  locations,
  filtersOpen
}) {
  return (
    <div
      className={`overflow-hidden transition-all duration-400 ease-in-out ${
        filtersOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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
          <select
            id='organization'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700'
          >
            <option value=''>All Organizations</option>
            {organizations.map(org => (
              <option key={org.organization_id} value={org.organization_id}>
                {org.organization_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor='location'
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Location
          </label>
          <select
            id='location'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700'
          >
            <option value=''>All locations</option>
            {locations.map(loc => (
              <option key={loc.location_id} value={loc.location_id}>
                {loc.location_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor='group'
            className='mb-1 block text-sm font-medium text-gray-800'
          >
            Status
          </label>
          <select
            id='group'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700'
          >
            <option value=''>Exhibited</option>
            <option value='1'>Archived</option>
            <option value='2'>...</option>
            <option value='3'>...</option>
            <option value='4'>...</option>
          </select>
        </div>
      </div>
    </div>
  )
}
