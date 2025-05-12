import Image from 'next/image'
import it_cat from '/public/category.svg'

export default function ItemCategory({ category }) {
  return (
    <div className='flex w-fit gap-1 rounded-md bg-gray-100 p-2 shadow-md shadow-gray-300'>
      <Image src={it_cat} alt='nav icon' />
      <span className='text-sm text-gray-600'>{category}</span>
    </div>
  )
}
