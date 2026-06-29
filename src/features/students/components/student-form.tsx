import { FiX } from 'react-icons/fi'
import { useForm } from '@tanstack/react-form'

import type { Student, StudentFormData } from '../types'

type Props = {
  student?: Student | null
  onClose: () => void
  onSubmit: (data: StudentFormData) => void
}

export default function StudentForm({ student, onClose, onSubmit }: Props) {
  const form = useForm({
    defaultValues: {
      name: student?.name ?? '',
      dateOfBirth: student?.dateOfBirth ?? '',
      guardianName: student?.guardianName ?? '',
      status: student?.status ?? true,
    } satisfies StudentFormData,

    onSubmit: async ({ value }) => {
      onSubmit(value)
    },
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {student ? 'Edit Student' : 'Add Student'}
            </h2>

            <p className="text-sm text-slate-500">Manage student information</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="p-8"
        >
          <div className="space-y-6">
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
                  />
                </div>
              )}
            </form.Field>

            {/* DATE OF BIRTH */}
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
                  />
                </div>
              )}
            </form.Field>

            {/* STATUS */}
            <form.Field name="status">
              {(field) => (
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Status
                  </label>

                  <select
                    value={field.state.value ? 'true' : 'false'}
                    onChange={(e) =>
                      field.handleChange(e.target.value === 'true')
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  >
                    <option value="true">Active</option>

                    <option value="false">Inactive</option>
                  </select>
                </div>
              )}
            </form.Field>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#0b8ca1] px-5 py-3 font-medium text-white hover:bg-[#09788a]"
            >
              {student ? 'Update Student' : 'Save Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
