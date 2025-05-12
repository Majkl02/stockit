import ItemPagination from './ItemPagination'
import ItemsGrid from './ItemsGrid'

export default function ItemSection({
  items,
  itemsMetadata,
  onPageChange,
  parameters
}) {
  console.log('Item image:', items[0].imageUrl)
  return (
    <>
      <ItemsGrid currentItems={items} />

      <ItemPagination
        currentPage={itemsMetadata.page}
        totalPages={itemsMetadata.total_pages}
        hasNext={itemsMetadata.has_next}
        hasPrevious={itemsMetadata.has_previous}
        onPageChange={onPageChange}
        parameters={parameters}
      />
    </>
  )
}
