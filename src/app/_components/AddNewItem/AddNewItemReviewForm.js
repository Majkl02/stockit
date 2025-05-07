import Image from 'next/image'

export default function AddNewItemReviewForm({
  newItem,
  locations,
  categories,
  attachments
}) {
  const locationLabel = locations.find(
    loc => loc.location_id === newItem.location_id
  )?.location_name

  const categoryLabels = categories
    .filter(cat => newItem.item_categories.includes(cat.id))
    .map(cat => cat.name)

  const hasImages = Object.values(attachments).some(file => file !== null)

  return (
    <div className='rounded-2xl border-4 border-sky-700 p-6 shadow-lg shadow-gray-400'>
      <h2 className='mb-6 text-xl font-bold text-gray-700'>
        Review Item Details
      </h2>

      <div className='flex flex-col gap-4'>
        {/* Location */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Location
          </label>
          <p className='rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800'>
            {locationLabel}
          </p>
        </div>

        {/* Name */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Item Name
          </label>
          <p className='rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800'>
            {newItem.item_name}
          </p>
        </div>

        {/* Description */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Description
          </label>
          <p className='rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800'>
            {newItem.description ? newItem.description : 'No description'}
          </p>
        </div>

        {/* Categories */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Categories
          </label>
          <ul className='rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800'>
            {categoryLabels.length > 0 ? (
              categoryLabels.map((cat, index) => <li key={index}>{cat}</li>)
            ) : (
              <li>No categories selected</li>
            )}
          </ul>
        </div>

        {/* Uploaded Photos */}
        <div>
          <label className='mb-2 block text-sm font-medium text-gray-700'>
            Uploaded Photos
          </label>
          {hasImages ? (
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
              {Object.entries(attachments).map(([position, file]) => {
                if (!file) return null
                const url = URL.createObjectURL(file)
                return (
                  <div key={position} className='space-y-1'>
                    <Image
                      src={url}
                      alt={`${position} view`}
                      width={200}
                      height={200}
                      className='h-40 w-full rounded-md object-cover shadow'
                    />
                    <p className='text-center text-sm text-gray-600 capitalize'>
                      {position}
                    </p>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className='text-gray-500'>No photos uploaded</p>
          )}
        </div>
      </div>
    </div>
  )
}
