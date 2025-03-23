import Image from 'next/image'
import HeaderUser from './HeaderUser'

export default function Header() {
  return (
    <header className='flex h-30 max-w-screen items-center justify-between bg-gray-800 px-6 py-4 text-white'>
      <div className='flex items-center gap-5 text-5xl font-bold'>
        <Image src='/Logo.png' alt='StockIt Logo' width={60} height={0} />
        <h1>StockIt</h1>
      </div>
      {/* Replace with dynamic user data */}
      <HeaderUser />
    </header>
  )
}
