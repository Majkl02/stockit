import './../globals.css'
import { GlobalProvider } from './../context/GlobalContext'

export default function LoginLayout({ children }) {
  return (
    <div className='flex h-screen flex-col'>
      <p>LOGIN LAYOUT</p>
      <GlobalProvider>{children}</GlobalProvider>
    </div>
  )
}
