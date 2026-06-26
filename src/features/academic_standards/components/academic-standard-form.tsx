import { useEffect } from 'react'
import { useForm } from '@tanstack/react-form'

import type { AcademicStandard, AcademicStandardFormData } from '../types'

interface AcademicStandardFormProps {
  initialValues?: AcademicStandard | null

  loading?: boolean

  onSubmit: (values: AcademicStandardFormData) => Promise<void>

  onCancel?: () => void
}

export default function AcademicStandardForm({
  initialValues,
  loading = false,
  onSubmit,
  onCancel,
}: AcademicStandardFormProps) {
  const form = useForm({
    defaultValues: {
      name: '',
      code: '',
      status: true,
    },

    onSubmit: async ({ value }) => {
      await onSubmit(value)
    },
  })

  useEffect(() => {
    if (!initialValues) return

    form.setFieldValue('name', initialValues.name)

    form.setFieldValue('code', initialValues.code)

    form.setFieldValue('status', initialValues.status)
  }, [initialValues])

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        void form.handleSubmit()
      }}
    >
      {/* Name */}

      <form.Field
        name="name"
        validators={{
          onChange: ({ value }) =>
            value.length < 2 ? 'Minimum 2 characters' : undefined,
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Academic Standard
            </label>

            <input
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Class One"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            />

            {field.state.meta.errors.length > 0 && (
              <p className="mt-1 text-sm text-red-500">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Code */}

      <form.Field
        name="code"
        validators={{
          onChange: ({ value }) =>
            value.length < 1 ? 'Code is required' : undefined,
        }}
      >
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">Code</label>

            <input
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="STD-01"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            />

            {field.state.meta.errors.length > 0 && (
              <p className="mt-1 text-sm text-red-500">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Status */}

      <form.Field name="status">
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-medium">Status</label>

            <select
              value={field.state.value ? '1' : '0'}
              onChange={(e) => field.handleChange(e.target.value === '1')}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            >
              <option value="1">Active</option>

              <option value="0">Inactive</option>
            </select>
          </div>
        )}
      </form.Field>

      {/* Buttons */}

      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-slate-300 px-5 py-2.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-cyan-600 px-6 py-2.5 font-medium text-white transition hover:bg-cyan-700 disabled:opacity-50"
        >
          {loading ? 'Saving...' : initialValues ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
}
