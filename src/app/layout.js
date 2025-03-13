import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'StockIt',
  description: 'University Final Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex h-screen flex-col'>
        {/* Header */}
        <header className='flex h-30 max-w-screen items-center justify-between bg-gray-800 px-6 py-4 text-white'>
          <div className='flex items-center gap-5 text-5xl font-bold'>
            <Image src='/Logo.png' alt='StockIt Logo' width={60} height={0} />
            <h1>StockIt</h1>
          </div>
          <HeaderUser />
          {/* Replace with dynamic user data */}
        </header>

        <div className='flex flex-1'>
          {/* Sidebar Navigation */}
          <nav className='text flex w-64 flex-col bg-gray-900 p-5 text-white uppercase'>
            <ul className='space-y-4'>
              <li>
                <a href='/dashboard' className='block rounded px-4 py-2'>
                  Dashboard
                </a>
              </li>
              <li>
                <a href='/inventory' className='block rounded px-4 py-2'>
                  Inventory
                </a>
              </li>
              <li>
                <a href='/orders' className='block rounded px-4 py-2'>
                  Add New Item
                </a>
              </li>
              <li>
                <a href='/settings' className='block rounded px-4 py-2'>
                  Settings
                </a>
              </li>
            </ul>
          </nav>

          {/* Main Content Area */}
          <main className='bg-primary flex-1 overflow-auto'>{children}</main>
        </div>
      </body>
    </html>
  )
}

function HeaderUser() {
  return (
    <div className='flex w-60 flex-col rounded-md bg-blue-800'>
      <span className='px-4 py-2'>Michal Januska</span>
      <div className='flex w-full gap-5'>
        <a href='#' className='px-4 py-2'>
          Profile
        </a>
        <a href='#' className='px-4 py-2'>
          Log out
        </a>
      </div>
    </div>
  )
}
