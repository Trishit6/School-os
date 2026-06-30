import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { useForm } from '@tanstack/react-form'

import type { Student, StudentFormData } from '../types'

type Props = {
  student: Student | null
  onClose: () => void
  onSubmit: (data: StudentFormData) => void
  loading?: boolean
}

export default function StudentForm({
  student,
  onClose,
  onSubmit,
  loading = false,
}: Props) {
  const form = useForm({
    defaultValues: {
      name: '',
      dateOfBirth: '',
      guardianName: '',
      status: true,
    },

    onSubmit: async ({ value }) => {
      onSubmit(value)
    },
  })

  useEffect(() => {
    if (!student) return

    form.setFieldValue('name', student.name)
    form.setFieldValue('dateOfBirth', student.dateOfBirth)
    form.setFieldValue('guardianName', student.guardianName)
    form.setFieldValue('status', student.status)
  }, [student])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {student ? 'Edit Student' : 'Add Student'}
            </h2>

            <p className="text-sm text-slate-500">Manage student information</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* FORM */}
        <form
          className="space-y-5 p-6"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          {/* NAME */}
          <form.Field name="name">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Student Name
                </label>

                <input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                  placeholder="Enter student name"
                />
              </div>
            )}
          </form.Field>

          {/* DOB */}
          <form.Field name="dateOfBirth">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Date Of Birth
                </label>

                <input
                  type="date"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>
            )}
          </form.Field>

          {/* GUARDIAN */}
          <form.Field name="guardianName">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Guardian Name
                </label>

                <input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                  placeholder="Enter guardian name"
                />
              </div>
            )}
          </form.Field>

          {/* STATUS */}
          <form.Field name="status">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium">Status</label>

                <select
                  value={field.state.value ? 'true' : 'false'}
                  onChange={(e) =>
                    field.handleChange(e.target.value === 'true')
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                >
                  <option value="true">ACTIVE</option>
                  <option value="false">INACTIVE</option>
                </select>
              </div>
            )}
          </form.Field>

          {/* FOOTER */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white hover:bg-cyan-700"
            >
              {loading ? 'Saving...' : 'Save Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
