import Item from '@/app/_components/Item'
import ItemPagination from '@/app/_components/ItemPagination'
import SearchForm from '@/app/_components/SearchForm'

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

export default function Items() {
  return (
    <>
      <div className='mx-4 my-4 rounded-2xl bg-gray-200'>
        <h1 className='px-4 py-2 text-center text-6xl font-bold text-gray-700'>
          Inventory
        </h1>
        <SearchForm />
      </div>
      <div className='grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {/* Add as many <Item />s as you want */}
        {items.map(item => (
          <Item id={item.id} key={item.key} />
        ))}
      </div>
      <ItemPagination />
    </>
  )
}
