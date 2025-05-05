import InventoryItems from '@/app/_components/InventoryItems'
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
