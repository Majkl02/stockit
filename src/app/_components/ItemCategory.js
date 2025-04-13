import Image from 'next/image'
import it_cat from '/public/category.svg'

export default function ItemCategory({ category }) {
  return (
    <div className='flex w-fit gap-1 rounded-md bg-gray-200 p-2'>
      <Image src={it_cat} alt='nav icon' />
      <span className='text-sm text-gray-600'>{category}</span>
    </div>
  )
}
