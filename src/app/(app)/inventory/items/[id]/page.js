import ItemDetail from '@/app/_components/ItemDetail'

export default async function ItemDetailPage({ params }) {
  const { id } = await params
  return (
    <div>
      <ItemDetail />
    </div>
  )
}
