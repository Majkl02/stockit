import { GlobalProvider } from './context/GlobalContext'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'StockIt',
  description: 'University Final Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex h-screen flex-col`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}
