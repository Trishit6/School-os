import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import {
  FiMail,
  FiPhone,
  FiUser,
  FiShield,
  FiLogOut,
  FiEdit,
} from 'react-icons/fi'

import api from '@/lib/api'
import { useAuth } from '@/features/auth/contexts/auth-context'

interface User {
  id: number
  name: string
  email: string
  phone?: string | null
  role: string
  gender?: string | null
  date_of_birth?: string | null
}

export default function ProfileComponent() {
  const navigate = useNavigate()
  const auth = useAuth()

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/auth/profile')

        setUser(response.data.user)
      } catch (error) {
        navigate({
          to: '/login',
          replace: true,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await auth.logout()

      navigate({
        to: '/login',
        replace: true,
      })
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-slate-500">Loading Profile...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const initials =
    user.name
      ?.split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'U'

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-48 bg-gradient-to-r from-cyan-600 to-sky-500" />

          <div className="px-8 pb-8">
            <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-end gap-5">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                  <div className="flex h-full w-full items-center justify-center bg-cyan-100 text-4xl font-bold text-cyan-700">
                    {initials}
                  </div>
                </div>

                <div className="pb-2">
                  <h1 className="text-3xl font-bold text-slate-900">
                    {user.name}
                  </h1>

                  <p className="capitalize text-slate-500">{user.role}</p>

                  <p className="text-sm text-slate-400">{user.email}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  className="
                    flex items-center gap-2
                    rounded-xl border border-slate-200
                    px-5 py-3
                    transition
                    hover:bg-slate-50
                  "
                >
                  <FiEdit />
                  Edit Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="
                    flex items-center gap-2
                    rounded-xl bg-red-500
                    px-5 py-3
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >
                  <FiLogOut />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-6 text-xl font-bold">Personal Information</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm text-slate-400">Full Name</p>

              <div className="flex items-center gap-2">
                <FiUser />
                <span>{user.name}</span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-slate-400">Email Address</p>

              <div className="flex items-center gap-2">
                <FiMail />
                <span>{user.email}</span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-slate-400">Phone Number</p>

              <div className="flex items-center gap-2">
                <FiPhone />
                <span>{user.phone || '-'}</span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-slate-400">Role</p>

              <div className="flex items-center gap-2">
                <FiShield />
                <span className="capitalize">{user.role}</span>
              </div>
            </div>

            {user.gender && (
              <div>
                <p className="mb-2 text-sm text-slate-400">Gender</p>

                <span className="capitalize">{user.gender}</span>
              </div>
            )}

            {user.date_of_birth && (
              <div>
                <p className="mb-2 text-sm text-slate-400">Date of Birth</p>

                <span>{user.date_of_birth}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
