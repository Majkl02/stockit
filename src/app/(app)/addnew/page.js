import AddNewItem from '@/app/_components/AddNewItem/AddNewItem'
import { getLocations, getCategories, getAttributes } from '@/app/_lib/data'

export default async function AddNewItemPage() {
  const locations = await getLocations()
  const categories = await getCategories()
  const attributes = await getAttributes()

  return (
    <AddNewItem
      locations={locations}
      categories={categories}
      attributes={attributes}
    />
  )
}
