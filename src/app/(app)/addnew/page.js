import AddNewItem from '@/app/_components/AddNewItem/AddNewItem'
import { getLocations, getCategories } from '@/app/_lib/data'

export default async function AddNewItemPage() {
  const locations = await getLocations()
  const categories = await getCategories()

  return <AddNewItem locations={locations} categories={categories} />
}
