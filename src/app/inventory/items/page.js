import Item from '@/app/components/Item'
import ItemPagination from '@/app/components/ItemPagination'
import SearchForm from '@/app/components/SearchForm'

export default function Items() {
  return (
    <>
      <h1 className='px-4 py-2 text-center text-6xl font-bold'>Inventory</h1>
      <SearchForm />
      <div className='grid grid-cols-8 gap-2 p-10'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        {/* Add as many <Item />s as you want */}
      </div>
      <ItemPagination />
    </>
  )
}
