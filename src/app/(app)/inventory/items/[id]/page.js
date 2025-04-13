import ItemDetail from '@/app/_components/ItemDetail'
import ItemDetailHeader from '@/app/_components/ItemDetailHeader'
import {
  getItemById,
  getLocationById,
  getOrganizationById
} from '@/app/_lib/data'

export default async function ItemDetailPage({ params }) {
  const { id } = await params

  const item = await getItemById(id)
  console.log('Item detail:', item)

  const [organization, location] = await Promise.all([
    getOrganizationById(item.organization_id),
    getLocationById(item.location_id)
  ])

  const itemObject = {
    id: item.item_id,
    name: item.item_name,
    description: item.description,
    organization: organization.organization_name,
    location: location.location_name,
    categories: item.categories,
    attributes: item.attributes,
    imageUrl: item.imageUrl
  }

  console.log('Organization:', organization)
  console.log('Location:', location)

  return (
    <div>
      <ItemDetailHeader title={itemObject.name} />
      <ItemDetail id={id} itemObject={itemObject} />
    </div>
  )
}
