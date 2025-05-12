'use client'

import {
  Mail,
  MapPin,
  Phone,
  Calendar,
  KeyRound,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react'
import { useAuth } from '@/app/context/AuthContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

export default function UserProfileEdit() {
  const { user, setUser } = useAuth()
  const router = useRouter()

  const [visible, setVisible] = useState({
    old_password: false,
    new_password: false,
    repeat_new_password: false
  })

  const [passwordMessage, setPasswordMessage] = useState('')
  const passwordSchema = z
    .string()
    .min(10, { message: 'Password must be at least 10 characters long' })
    .max(50, { message: 'Password must be less than 50 characters long' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter'
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter'
    })
    .regex(/\d/, { message: 'Password must contain at least one number' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: 'Password must contain at least one special character'
    })

  // Toggle visibility for the specific field
  const togglePassVisibility = field => {
    setVisible(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const [formData, setFormData] = useState({
    email: user.email,
    address: user.address,
    description: user.description,
    first_name: user.first_name,
    last_name: user.last_name,
    phone_number: user.phone_number,
    birth_date: user.birth_date
  })

  const [passwords, setPasswords] = useState({
    old_password: '',
    new_password: '',
    repeat_new_password: ''
  })

  const handleUserChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = e => {
    const { name, value } = e.target
    setPasswords(prev => ({ ...prev, [name]: value }))
  }

  async function updateUser() {
    try {
      const res = await fetch(`/api/users/${user.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error('Error updating user:', errorData)
        return
      }

      const data = await res.json()
      setUser(prev => ({ ...prev, ...data }))
      console.log('User updated successfully:', data)
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  async function updatePassword() {
    console.log('Updating password with:', passwords)
    try {
      const res = await fetch(`/api/users/${user.user_id}/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          old_password: passwords.old_password,
          new_password: passwords.new_password
        })
      })

      if (!res.ok) {
        const errorData = await res.json()
        // console.log('Error updating password:', errorData)
        setPasswordMessage(`Chyba: ${errorData.message}!`)
        return
      }

      setPasswordMessage('Password updated successfully!')
    } catch (error) {
      console.error('Error updating password:', error)
    }
  }

  const handleUserSubmit = e => {
    e.preventDefault()
    updateUser()
    router.push('/profile')
  }

  const handleNewPasswordSubmit = e => {
    e.preventDefault()

    if (passwords.new_password !== passwords.repeat_new_password) {
      setPasswordMessage('New password does not match!')
      return
    }

    const passwordValidation = passwordSchema.safeParse(passwords.new_password)
    if (!passwordValidation.success) {
      setPasswordMessage(passwordValidation.error.errors[0].message)
      return
    }
    if (passwords.old_password === passwords.new_password) {
      setPasswordMessage('New password cannot be the same as old password!')
      return
    }

    updatePassword()
  }

  return (
    <div className='container mx-auto mt-10 mb-10 max-w-300 rounded-md shadow-md'>
      <div className='h-20 rounded-t-md bg-gradient-to-r from-sky-500 to-blue-500'></div>
      <div className='overflow-hidden px-5'>
        <form onSubmit={handleUserSubmit}>
          <div className='flex flex-row items-start justify-between pt-6'>
            <div className='mb-4'>
              <h1 className='text-4xl font-bold text-gray-700'>Edit Profile</h1>
              <p className='text-gray-600'>
                Make changes to your user profile below
              </p>
            </div>
            <button
              type='submit'
              className='flex cursor-pointer items-center gap-1 rounded-md border-2 border-green-500 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm hover:bg-green-50'
            >
              Save Changes
            </button>
          </div>

          <div className='mb-8 space-y-6'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-gray-700'>About Me</h3>
              <div className='space-y-4'>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      First Name
                    </label>
                    <input
                      type='text'
                      name='first_name'
                      value={formData.first_name}
                      onChange={handleUserChange}
                      className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='last_name'
                      value={formData.last_name}
                      onChange={handleUserChange}
                      className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                    />
                  </div>
                </div>
              </div>
              <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                Description
              </label>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleUserChange}
                className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                rows={4}
              />
            </div>

            <hr />

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-gray-700'>
                Contact Information
              </h3>

              <div className='grid gap-4 md:grid-cols-2'>
                <div>
                  <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                    <Mail className='h-4 w-4' /> Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleUserChange}
                    className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                    required
                  />
                </div>

                <div>
                  <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                    <Phone className='h-4 w-4' /> Phone
                  </label>
                  <input
                    type='tel'
                    name='phone_number'
                    value={formData.phone_number}
                    onChange={handleUserChange}
                    className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                  />
                </div>

                <div>
                  <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                    <MapPin className='h-4 w-4' /> Address
                  </label>
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleUserChange}
                    className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                  />
                </div>

                <div>
                  <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                    <Calendar className='h-4 w-4' /> Birthdate
                  </label>
                  <input
                    type='date'
                    name='birth_date'
                    value={formData.birth_date}
                    onChange={handleUserChange}
                    className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <hr />
        <form className='mt-6 mb-6'>
          <div className='space-y-4'>
            <h3 className='text-center text-lg font-semibold text-gray-700'>
              Change password
            </h3>

            <div className='flex flex-col items-center gap-4'>
              {/* Old Password */}
              <div className='relative w-full max-w-sm'>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Lock className='h-4 w-4' /> Old Password
                </label>
                <input
                  type={visible.old_password ? 'text' : 'password'}
                  name='old_password'
                  value={passwords.old_password}
                  onChange={handlePasswordChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                  required
                />
                <div
                  className='absolute top-8.5 right-3 cursor-pointer text-gray-500 hover:text-gray-700'
                  onClick={() => togglePassVisibility('old_password')}
                >
                  {visible.old_password ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </div>
              </div>

              {/* New Password */}
              <div className='relative w-full max-w-sm'>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Lock className='h-4 w-4' /> New Password
                </label>
                <input
                  type={visible.new_password ? 'text' : 'password'}
                  name='new_password'
                  value={passwords.new_password}
                  onChange={handlePasswordChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                  required
                />
                <div
                  className='absolute top-8.5 right-3 cursor-pointer text-gray-500 hover:text-gray-700'
                  onClick={() => togglePassVisibility('new_password')}
                >
                  {visible.new_password ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </div>
              </div>

              {/* Repeat New Password */}
              <div className='relative w-full max-w-sm'>
                <label className='mb-1 flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Lock className='h-4 w-4' /> Repeat New Password
                </label>
                <input
                  type={visible.repeat_new_password ? 'text' : 'password'}
                  name='repeat_new_password'
                  value={passwords.repeat_new_password}
                  onChange={handlePasswordChange}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                  required
                />
                <div
                  className='absolute top-8.5 right-3 cursor-pointer text-gray-500 hover:text-gray-700'
                  onClick={() => togglePassVisibility('repeat_new_password')}
                >
                  {visible.repeat_new_password ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </div>
              </div>
              <span className={`text-sm text-gray-500`}>{passwordMessage}</span>
              <button type='submit' onClick={handleNewPasswordSubmit}>
                <span className='flex cursor-pointer items-center gap-1 rounded-md border-2 border-sky-500 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm hover:bg-sky-50'>
                  <KeyRound className='h-4 w-4' /> Change Password
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
