import { useForm } from '@tanstack/react-form'

import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicSessionOption,
  AcademicStandardOption,
} from '../types'

interface Props {
  initialValues?: AcademicClass | null

  sessions: AcademicSessionOption[]

  standards: AcademicStandardOption[]

  loading: boolean

  onSubmit: (values: AcademicClassFormData) => Promise<void>

  onCancel: () => void
}

export default function AcademicClassForm({
  initialValues,
  sessions,
  standards,
  loading,
  onSubmit,
  onCancel,
}: Props) {
  const form = useForm({
    defaultValues: {
      academic_session_id: initialValues?.academicSessionId ?? 0,

      academic_standard_id: initialValues?.academicStandardId ?? 0,

      name: initialValues?.name ?? '',

      capacity: initialValues?.capacity ?? 30,

      status: initialValues?.status ?? true,
    },

    onSubmit: async ({ value }) => {
      await onSubmit(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-6"
    >
      {/* Academic Session */}

      <form.Field name="academic_session_id">
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Academic Session
            </label>

            <select
              value={field.state.value}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            >
              <option value={0}>Select Academic Session</option>

              {sessions.map((session) => (
                <option key={session.id} value={session.id}>
                  {session.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </form.Field>

      {/* Academic Standard */}

      <form.Field name="academic_standard_id">
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Academic Standard
            </label>

            <select
              value={field.state.value}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            >
              <option value={0}>Select Academic Standard</option>

              {standards.map((standard) => (
                <option key={standard.id} value={standard.id}>
                  {standard.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </form.Field>

      {/* Class Name */}

      <form.Field name="name">
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Class Name
            </label>

            <input
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter class name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
        )}
      </form.Field>

      {/* Capacity */}

      <form.Field name="capacity">
        {(field) => (
          <div>
            <label className="mb-2 block text-sm font-semibold">Capacity</label>

            <input
              type="number"
              min={1}
              value={field.state.value}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
        )}
      </form.Field>

      {/* Status */}

      <form.Field name="status">
        {(field) => (
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={field.state.value}
              onChange={(e) => field.handleChange(e.target.checked)}
              className="h-5 w-5"
            />

            <span className="font-medium">Active</span>
          </label>
        )}
      </form.Field>

      {/* Buttons */}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-50"
        >
          {loading
            ? 'Saving...'
            : initialValues
              ? 'Update Class'
              : 'Create Class'}
        </button>
      </div>
    </form>
  )
}
