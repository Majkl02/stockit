import { AuthProvider } from './context/AuthContext'

import { Inter } from 'next/font/google'

// Application font configuration
// This font is used in the entire application
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

// Main application metadata
export const metadata = {
  title: 'StockIt',
  description: 'University Final Project',
  icons: {
    icon: '/favicon.ico'
  }
}

// Main application layout component
// This component wraps the entire application and provides global context providers
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex h-screen flex-col`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
