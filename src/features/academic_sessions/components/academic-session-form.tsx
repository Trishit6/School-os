// components/academic-session-form.tsx

import { FiX } from 'react-icons/fi'
import type { AcademicSession } from '../types'

type Props = {
  formData: {
    name: string
    start_date: string
    end_date: string
    is_active: boolean
  }
  editingSession: AcademicSession | null
  loading: boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
}

export default function AcademicSessionForm({
  formData,
  editingSession,
  loading,
  onChange,
  onSubmit,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {editingSession
                ? 'Edit Academic Session'
                : 'Create Academic Session'}
            </h2>

            <p className="text-sm text-slate-500">
              Manage academic session details
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6 p-8">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Session Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="2026-2027"
              required
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Start Date
              </label>

              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={onChange}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">End Date</label>

              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={onChange}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  focus:border-cyan-500
                "
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="is_active"
                checked={formData.is_active}
                onChange={onChange}
                className="h-4 w-4"
              />

              <span className="text-sm font-medium">
                Set as Current Active Session
              </span>
            </label>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                border-slate-300
                px-5
                py-3
                font-medium
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                rounded-xl
                bg-[#0b8ca1]
                px-5
                py-3
                font-medium
                text-white
                hover:bg-[#09788a]
                disabled:opacity-50
              "
            >
              {loading
                ? 'Saving...'
                : editingSession
                  ? 'Update Session'
                  : 'Create Session'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
