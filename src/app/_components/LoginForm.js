'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '../context/GlobalContext'
import { useEffect, useState } from 'react'
import { proceedLogin } from '../_lib/data-services'

export default function LoginForm() {
  const router = useRouter()
  const { user, setUser } = useGlobalContext()
  const [invalidCreds, setInvalidCreds] = useState(false)
  const [badRequest, setBadRequest] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    setInvalidCreds(false)
    setBadRequest(false)

    console.log(email, password)

    const data = await proceedLogin(
      email,
      password,
      setInvalidCreds,
      setBadRequest
    )
    console.log('Data:' + data)
    if (data === undefined) return

    setUser(data.user_info)
    document.cookie = `access_token=${data.access_token}; path=/; max-age=36000`
    document.cookie = `refresh_token=${data.refresh_token}; path=/; max-age=604800`
    localStorage.setItem('user', JSON.stringify(data.user_info))
    console.log(data)

    router.push('/')
  }

  return (
    <div
      className='w-full max-w-md rounded-lg border border-blue-300 bg-white p-6 shadow-md transition focus:ring-2 focus:ring-blue-200 focus:outline-none'
      tabIndex='0'
    >
      <div className='flex items-center justify-center gap-5 text-5xl font-bold'>
        <Image src='/Logo.png' alt='StockIt Logo' width={30} height={10} />
        <h1>StockIT</h1>
      </div>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900'>Login</h2>
        <p className='text-sm text-gray-600'>
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='email'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
            placeholder='name@example.com'
            required
          />
        </div>

        <div>
          <label
            htmlFor='password'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
            required
          />
        </div>
        {invalidCreds && (
          <p className='text-center text-red-400'>Invalid email or password!</p>
        )}
        {badRequest && (
          <p className='text-center text-red-400'>
            Bad request! Can not perform login action.
          </p>
        )}
        <button
          type='submit'
          className='btn-login w-full rounded-md bg-[#00a9e0] px-4 py-2 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
        >
          Login
        </button>
      </form>
    </div>
  )
}
