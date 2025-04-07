import Link from 'next/link'

export default function AddNewItemButton() {
  return (
    <button className='fixed right-4 bottom-4 rounded-3xl bg-sky-700 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-500 active:translate-y-0'>
      <Link href={'/addnew'} className='block px-4 py-2 text-3xl'>
        +
      </Link>
    </button>
  )
}
