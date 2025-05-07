import Item from '@/app/_components/Item/Item'

export default function ItemsGrid({ currentItems }) {
  return (
    <div className='grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {currentItems.map(item => (
        <Item
          id={item.id}
          key={item.id}
          name={item.name}
          organization={item.organization}
          location={item.location}
          image={item.imageUrl}
        />
      ))}
    </div>
  )
}
