import './globals.css'
import { GlobalProvider } from './context/GlobalContext'

import AddNewItemButton from './components/AddNewItemButton.js'
import Navigation from './components/Navigation'
import Header from './components/Header'
import AuthGate from './components/AuthGate'

export const metadata = {
  title: 'StockIt',
  description: 'University Final Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex h-screen flex-col'>
        <GlobalProvider>
          <>
            <AddNewItemButton />
            <Header />
            <div className='flex flex-1'>
              <Navigation />
              <main className='bg-primary flex-1 overflow-auto'>
                {children}
              </main>
            </div>
          </>
        </GlobalProvider>
      </body>
    </html>
  )
}
