import { GlobalProvider } from './context/PermissionContext'
import { AuthProvider } from './context/AuthContext'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'StockIt',
  description: 'University Final Project',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex h-screen flex-col`}>
        <AuthProvider>
          <GlobalProvider>{children}</GlobalProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
