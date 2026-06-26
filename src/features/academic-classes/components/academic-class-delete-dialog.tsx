import { FiAlertTriangle } from 'react-icons/fi'

interface Props {
  open: boolean

  loading?: boolean

  title?: string

  description?: string

  onConfirm: () => void

  onCancel: () => void
}

export default function AcademicClassDeleteDialog({
  open,
  loading = false,
  title = 'Delete Academic Class',
  description = 'Are you sure you want to delete this academic class? This action cannot be undone.',
  onConfirm,
  onCancel,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
          <FiAlertTriangle size={30} className="text-red-600" />
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold">{title}</h2>

        <p className="mt-3 text-center text-slate-500 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="
              rounded-xl
              border
              border-slate-300
              px-6
              py-3
              font-medium
              transition
              hover:bg-slate-100
              disabled:cursor-not-allowed
              dark:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="
              rounded-xl
              bg-red-600
              px-6
              py-3
              font-medium
              text-white
              transition
              hover:bg-red-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}
