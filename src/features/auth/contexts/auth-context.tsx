import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { fetchUserProfileService, logoutService } from '../data/api'

import type { UserWithRole } from '../data/schema'

interface AuthContextType {
  user: UserWithRole | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (token: string, user?: UserWithRole) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserWithRole | null>(() => {
    const storedUser = localStorage.getItem('user')

    if (!storedUser) return null

    try {
      return JSON.parse(storedUser)
    } catch {
      return null
    }
  })

  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user && !!localStorage.getItem('token')

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token')

      if (!token) {
        setUser(null)
        setIsLoading(false)
        return
      }

      try {
        const profile = await fetchUserProfileService()

        setUser(profile)

        localStorage.setItem('user', JSON.stringify(profile))
      } catch (error) {
        console.error('Auth initialization failed:', error)

        localStorage.removeItem('token')
        localStorage.removeItem('user')

        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    void initializeAuth()
  }, [])

  const login = async (token: string, userData?: UserWithRole) => {
    localStorage.setItem('token', token)

    if (userData) {
      setUser(userData)

      localStorage.setItem('user', JSON.stringify(userData))

      return
    }

    const profile = await fetchUserProfileService()

    setUser(profile)

    localStorage.setItem('user', JSON.stringify(profile))
  }

  const logout = async () => {
    try {
      await logoutService()
    } catch (error) {
      console.error(error)
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      setUser(null)
    }
  }

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated,
      login,
      logout,
    }),
    [user, isLoading, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
