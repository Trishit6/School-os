import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import api from '@/lib/api'
import { FieldInfo } from './Login/components/field-info'

export default function ForgotPasswordComponent() {
  const [successMessage, setSuccessMessage] = useState('')

  const form = useForm({
    defaultValues: {
      email: '',
    },
    onSubmit: async ({ value }) => {
      try {
        await api.post('/auth/forgot-password', {
          email: value.email,
        })

        setSuccessMessage('Password reset link has been sent to your email.')
      } catch (error: any) {
        alert(error?.response?.data?.message ?? 'Failed to send reset link')
      }
    },
  })

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-full bg-[#0b8ca1] flex items-center justify-center text-white text-xl">
            🎓
          </div>
        </div>

        <div className="text-center mt-5">
          <h1 className="text-[32px] font-bold text-slate-900">
            Forgot Password
          </h1>

          <p className="mt-3 text-slate-400 text-[15px]">
            Enter your email to receive a reset link
          </p>
        </div>

        <div className="mt-8">
          {successMessage ? (
            <div className="text-center">
              <p className="text-green-600 text-sm">{successMessage}</p>

              <div className="mt-6">
                <Link to="/login" className="text-cyan-600 font-semibold">
                  Back to Login
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
              className="space-y-5"
            >
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) =>
                    !value
                      ? 'Email is required'
                      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? 'Enter a valid email'
                        : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <input
                      type="email"
                      placeholder="admin@admin.com"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="w-full h-12 rounded-xl border border-slate-300 px-4"
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-cyan-600 text-white"
              >
                Send Reset Link
              </button>

              <div className="text-center text-sm">
                <Link to="/login" className="text-cyan-600 font-semibold">
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
