import Link from 'next/link'

export default function AddNewItemButton() {
  return (
    <Link
      href={'/addnew'}
      className='fixed right-4 bottom-4 z-50 block rounded-2xl bg-sky-700 px-4 py-2 text-3xl font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-500 active:translate-y-0'
    >
      +
    </Link>
  )
}
