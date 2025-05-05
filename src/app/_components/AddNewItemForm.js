import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

export default function AddNewItemForm({
  locations,
  categories,
  newItem,
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
          {/* <div>
            <label
              htmlFor='attributes'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Attributes
            </label>
            <div className='flex items-center gap-4'>
              <select
                type='input'
                id='attributes'
                name='attributes'
                required
                className='w-full rounded-md border border-gray-300 px-3 py-2'
              >
                <option value='clothing'>Weight</option>
                <option value='electronics'>Age</option>
                <option value='furniture'>Color</option>
              </select>
              <div className='w-30 cursor-pointer rounded-2xl bg-gray-200 p-2 text-center hover:bg-gray-300'>
                Add
              </div>
            </div>
          </div> */}
        </div>
      </form>
    </div>
  )
}
