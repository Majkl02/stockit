import '@/app/globals.css'
import AddNewItemButton from '@/app/_components/AddNewItem/AddNewItemButton'
import Navigation from '@/app/_components/MainLayout/Navigation'
import Header from '@/app/_components/MainLayout/Header'

export default function MainLayout({ children }) {
  return (
    <>
      <AddNewItemButton />
      <Header />
      <div className='flex flex-1'>
        <Navigation />
        <main className='bg-primary flex-1 overflow-auto'>{children}</main>
      </div>
    </>
  )
}
