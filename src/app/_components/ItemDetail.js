import Image from 'next/image'
import it_tech from '/public/it_tech.png'
import ItemCategory from './ItemCategory'

export default function ItemDetail({ id }) {
  return (
    <div className='mt-5 rounded-2xl bg-gray-200 p-5'>
      <div className='flex h-100 w-250 items-center'>
        <div>
          <h1 className='mb-10 text-5xl font-bold'>Item {id}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Image
          src={it_tech}
          alt='item-tech-img'
          // className=''
          width={300}
          height={300}
        />
      </div>
      <div className='flex flex-wrap gap-2'>
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
        <ItemCategory />
      </div>
    </div>
  )
}
