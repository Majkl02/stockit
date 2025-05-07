'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import { useState } from 'react'
import pass_eye_closed from '/public/pass-eye-closed.svg'
import pass_eye from '/public/pass-eye.svg'
import logo from '/public/Logo.png'

export default function LoginForm() {
  const router = useRouter()
  const { setUser } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)

  // Function to toggle password visibility
  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault()
    // Reset error state
    setErrorMessage('')
    // Get the email and password values from the form
    const email = e.target.email.value
    const password = e.target.password.value

    // DEBUG
    // console.log(email, password)

    // Call the internal login api with the email and password
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      // If the response is not ok, set the correct error state
      if (!res.ok) {
        // DEBUG
        // console.log('Response:', data.errorMessage)
        setErrorMessage(data.errorMessage)
        return
      }

      // If the response is ok, set the user state and redirect to the dashboard page
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))

      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className='w-full max-w-md rounded-lg border-2 border-sky-500 bg-white p-6 shadow-lg shadow-sky-200 transition focus:ring-2 focus:ring-sky-500'>
      {/* Logo and heading part */}
      <div className='flex items-center justify-center gap-5 text-5xl font-bold text-gray-800'>
        <Image src={logo} alt='StockIt Logo' width={50} />
        <h1 className='tracking-wide'>StockIT</h1>
      </div>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-800'>Login</h2>
        <p className='text-sm text-gray-600'>
          Enter your credentials to access your account
        </p>
      </div>
      {/* Form part */}
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Email field */}
        <label
          htmlFor='email'
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
          placeholder='name@example.com'
          required
        />

        {/* Password field */}
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
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
            required
            placeholder='********'
          />
          {/* Eye icon for password visibility toggle */}
          <button
            type='button'
            className='absolute top-3 right-4 flex cursor-pointer items-center'
            onClick={handleTogglePassword}
          >
            <Image
              src={passwordVisible ? pass_eye_closed : pass_eye}
              alt='StockIt Logo'
            />
          </button>
        </div>

        {errorMessage && (
          <p className='text-center text-red-400'>{errorMessage}</p>
        )}
        <button
          type='submit'
          className='btn-login text-md w-full cursor-pointer rounded-md bg-[#00a9e0] px-4 py-2 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none'
        >
          Login
        </button>
      </form>
    </div>
  )
}
