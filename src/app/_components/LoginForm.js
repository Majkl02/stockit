'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { proceedLogin } from '../_lib/login-services'
import pass_eye_closed from '/public/pass-eye-closed.svg'
import pass_eye from '/public/pass-eye.svg'
import logo from '/public/Logo.png'

export default function LoginForm() {
  const router = useRouter()
  const { user, setUser } = useAuth()
  const [invalidCreds, setInvalidCreds] = useState(false)
  const [badRequest, setBadRequest] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setInvalidCreds(false)
    setBadRequest(false)

    const email = e.target.email.value
    const password = e.target.password.value

    // DEBUG
    // console.log(email, password)

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) {
        if (res.status === 401) setInvalidCreds(true)
        else setBadRequest(true)
        return
      }

      const data = await res.json()

      // DEBUG
      // console.log('Data:' + data)

      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))

      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
      setBadRequest(true)
    }
  }

  return (
    <div
      className='w-full max-w-md rounded-lg border border-blue-300 bg-white p-6 shadow-md transition focus:ring-2 focus:ring-blue-200 focus:outline-none'
      tabIndex='0'
    >
      <div className='flex items-center justify-center gap-5 text-5xl font-bold'>
        <Image src={logo} alt='StockIt Logo' width={50} />
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
          <div className='relative'>
            <input
              id='password'
              type={passwordVisible ? 'text' : 'password'}
              className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
              required
              placeholder='********'
            />
            <button
              type='button'
              className='absolute top-3 right-4 flex cursor-pointer items-center'
              onClick={handleTogglePassword}
            >
              <Image
                src={passwordVisible ? pass_eye : pass_eye_closed}
                alt='StockIt Logo'
              />
            </button>
          </div>
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
          className='btn-login w-full cursor-pointer rounded-md bg-[#00a9e0] px-4 py-2 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
        >
          Login
        </button>
      </form>
    </div>
  )
}
