import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ToggleAdvancedFiltersButton({
  handleFilters,
  filtersOpen
}) {
  return (
    <div
      className='flex cursor-pointer items-center justify-center gap-1 text-sm text-gray-600'
      onClick={() => handleFilters(cur => !cur)}
    >
      <span>{filtersOpen ? 'Close' : 'Open'} advanced filters</span>
      <span className='px-1.5 text-xs font-medium'>
        {filtersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}{' '}
      </span>
    </div>
  )
}
