import InventoryItems from '@/app/_components/InventoryItems'
import ItemSection from '@/app/_components/ItemSection'
import SearchForm from '@/app/_components/SearchForm'
import { getItems, getLocations, getOrganizations } from '@/app/_lib/data'

export default async function Items() {
  const [items, organizations, locations] = await Promise.all([
    getItems(),
    getOrganizations(),
    getLocations()
  ])

  return (
    <InventoryItems
      allItems={items}
      organizations={organizations}
      locations={locations}
    />
  )
}
