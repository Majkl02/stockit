import './globals.css'

import AddNewItemButton from './components/AddNewItemButton.js'
import LogInForm from './components/LogInForm.js'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Item from './components/Item'

export const metadata = {
  title: 'StockIt',
  description: 'University Final Project'
}

let userLoggedIn = true

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex h-screen flex-col'>
        {userLoggedIn ? (
          <>
            <AddNewItemButton />
            {/* Header */}
            <Header />

            <div className='flex flex-1'>
              {/* Sidebar Navigation */}
              <Navigation />
              {/* Main Content Area */}
              <main className='bg-primary flex-1 overflow-auto'>
                {children}
              </main>
            </div>
          </>
        ) : (
          <LogInForm />
        )}
      </body>
    </html>
  )
}
