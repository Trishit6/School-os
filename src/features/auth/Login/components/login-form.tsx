import { useForm } from '@tanstack/react-form'
import { Link, useNavigate } from '@tanstack/react-router'

import FormInput from '#/components/form-input'
import { loginService } from '../../data/api'
import { useAuth } from '../../contexts/auth-context'

export default function LoginForm() {
  const navigate = useNavigate()
  const auth = useAuth() // ✅ HERE

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },

    onSubmit: async ({ value }) => {
      try {
        const data = await loginService({
          email: value.email,
          password: value.password,
        })

        await auth.login(data.token, data.user)

        await navigate({
          to: '/dashboard',
          replace: true,
        })
      } catch (error: any) {
        console.error(error)

        alert(error?.response?.data?.message ?? 'Login failed')
      }
    },
  })

  return (
    <>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          void form.handleSubmit()
        }}
      >
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) {
                return 'Email is required'
              }

              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return 'Invalid email address'
              }

              return undefined
            },
          }}
        >
          {(field) => (
            <FormInput
              field={field}
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) => {
              if (!value) {
                return 'Password is required'
              }

              if (value.length < 6) {
                return 'Minimum 6 characters'
              }

              return undefined
            },
          }}
        >
          {(field) => (
            <FormInput
              field={field}
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => ({
            canSubmit: state.canSubmit,
            isSubmitting: state.isSubmitting,
          })}
        >
          {({ canSubmit, isSubmitting }) => (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="
                w-full
                h-12
                rounded-lg
                bg-cyan-600
                font-semibold
                text-white
                transition-all
                hover:bg-cyan-700
                disabled:cursor-not-allowed
                disabled:bg-slate-300
              "
            >
              {isSubmitting ? 'Signing In...' : 'Login'}
            </button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link
          to="/register"
          className="font-semibold text-cyan-600 hover:text-cyan-700"
        >
          Register
        </Link>
      </div>
    </>
  )
}
