import api from '#/lib/api.ts'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

interface RegisterFormData {
  name: string
  email: string
  phone: string
  role: string
  gender: string
  dob: string
  password: string
  password_confirmation: string
  terms: boolean
}

export default function RegisterForm() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    gender: '',
    dob: '',
    password: '',
    password_confirmation: '',
    terms: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.value,
    }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.terms) {
      alert('Please accept Terms & Conditions')
      return
    }

    if (formData.password !== formData.password_confirmation) {
      alert('Passwords do not match')
      return
    }

    try {
      setLoading(true)

      const response = await api.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        gender: formData.gender,
        date_of_birth: formData.dob,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      })

      console.log('REGISTER SUCCESS', response.data)

      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }

      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }

      await navigate({
        to: '/dashboard',
        replace: true,
      })
    } catch (error: any) {
      console.error(error)

      alert(error?.response?.data?.message ?? 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">Full Name</label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="admin@admin.com"
            className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91XXXXXXXXXX"
            className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
          />
        </div>
      </div>

      {/* Role + Gender */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Role</label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
          >
            <option value="">Select Role</option>
            <option value="applicant">Applicant</option>
            <option value="parent">Parent</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* DOB */}
      <div>
        <label className="mb-2 block text-sm font-medium">Date Of Birth</label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
        />
      </div>

      {/* Passwords */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>

          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            name="password_confirmation"
            required
            value={formData.password_confirmation}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-cyan-600"
          />
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />

        <span>I agree to the Terms & Conditions</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-cyan-600 font-semibold text-white hover:bg-cyan-700 disabled:opacity-50"
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  )
}
