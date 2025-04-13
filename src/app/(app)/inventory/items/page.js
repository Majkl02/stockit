import ItemSection from '@/app/_components/ItemSection'
import SearchForm from '@/app/_components/SearchForm'
import { getItems, getLocations, getOrganizations } from '@/app/_lib/data'

const items = [
  { id: 1, key: 1 },
  { id: 2, key: 2 },
  { id: 3, key: 3 },
  { id: 4, key: 4 },
  { id: 5, key: 5 },
  { id: 6, key: 6 },
  { id: 7, key: 7 },
  { id: 8, key: 8 },
  { id: 9, key: 9 },
  { id: 10, key: 10 },
  { id: 11, key: 11 },
  { id: 12, key: 12 },
  { id: 13, key: 13 },
  { id: 14, key: 14 },
  { id: 15, key: 15 }
]

export default async function Items() {
  const [items, organizations, locations] = await Promise.all([
    getItems(),
    getOrganizations(),
    getLocations()
  ])

  const orgMap = Object.fromEntries(
    organizations.map(org => [org.organization_id, org.organization_name])
  )

  console.log('Organizations map:', orgMap)

  const locMap = Object.fromEntries(
    locations.map(loc => [loc.location_id, loc.location_name])
  )

  console.log('Locations map:', locMap)

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

  return (
    <>
      <div className='mx-4 my-4 rounded-2xl bg-gray-200 shadow-xl'>
        <h1 className='px-4 py-2 text-center text-6xl font-bold text-gray-700'>
          Inventory
        </h1>
        <SearchForm
          organizations={organizations}
          locations={locations}
          // status={}
        />
      </div>
      {!items && (
        <div className='mt-100 text-center text-4xl font-bold text-gray-500'>
          No items found
        </div>
      )}
      {items && <ItemSection items={itemList} />}
    </>
  )
}
