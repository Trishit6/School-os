import {
  FiCalendar,
  FiCheckCircle,
  FiLoader,
  FiType,
  FiX,
} from 'react-icons/fi'
import type { AcademicSession, AcademicSessionPayload } from '../types'

type Props = {
  formData: AcademicSessionPayload
  editingSession: AcademicSession | null
  loading: boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
}

type FieldProps = {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
  hint?: string
}

function Field({ label, icon, children, hint }: FieldProps) {
  return (
    <div className="space-y-2.5">
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        {icon && <span className="text-slate-400">{icon}</span>}
        <span>{label}</span>
      </label>

      {children}

      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:bg-slate-100"
    />
  )
}

export default function AcademicSessionForm({
  formData,
  editingSession,
  loading,
  onChange,
  onSubmit,
  onClose,
}: Props) {
  const title = editingSession
    ? 'Edit Academic Session'
    : 'Create Academic Session'
  const submitLabel = loading
    ? 'Saving...'
    : editingSession
      ? 'Update Session'
      : 'Create Session'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/20 bg-white shadow-2xl">
        <div className="relative border-b border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#f8fafc_40%,#ffffff_100%)] px-8 py-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                <FiCalendar className="h-3.5 w-3.5" />
                Academic Session
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Create and manage session timelines, dates, and active status.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 bg-slate-50/70 p-8">
          <Field
            label="Session Name"
            icon={<FiType className="h-4 w-4" />}
            hint="Use a clear format like 2026-2027."
          >
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="2026-2027"
              required
              disabled={loading}
            />
          </Field>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Start Date" icon={<FiCalendar className="h-4 w-4" />}>
              <Input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={onChange}
                required
                disabled={loading}
              />
            </Field>

            <Field label="End Date" icon={<FiCalendar className="h-4 w-4" />}>
              <Input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={onChange}
                required
                disabled={loading}
              />
            </Field>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={onChange}
                disabled={loading}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
              />

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <FiCheckCircle className="h-4 w-4 text-cyan-600" />
                  Set as current active session
                </div>
                <p className="text-xs text-slate-500">
                  Mark this session as the active academic session for the
                  system.
                </p>
              </div>
            </label>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 min-w-40 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-cyan-400"
            >
              {loading && <FiLoader className="h-4 w-4 animate-spin" />}
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
