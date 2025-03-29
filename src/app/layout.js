import { GlobalProvider } from './context/GlobalContext'

export const metadata = {
  title: 'StockIt',
  description: 'University Final Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex h-screen flex-col'>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}
