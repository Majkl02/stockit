import './../globals.css'
import { GlobalProvider } from '../context/GlobalContext'
import AddNewItemButton from '../components/AddNewItemButton'
import Navigation from '../components/Navigation'
import Header from '../components/Header'

export default function MainLayout({ children }) {
  return (
    <GlobalProvider>
      <>
        <AddNewItemButton />
        <Header />
        <div className='flex flex-1'>
          <Navigation />
          <main className='bg-primary flex-1 overflow-auto'>{children}</main>
        </div>
      </>
    </GlobalProvider>
  )
}
