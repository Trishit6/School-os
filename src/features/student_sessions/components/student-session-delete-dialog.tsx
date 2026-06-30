import { FiAlertTriangle } from 'react-icons/fi'

type Props = {
  open: boolean
  loading?: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function StudentSessionDeleteDialog({
  open,
  loading = false,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-red-100 p-3">
            <FiAlertTriangle size={22} className="text-red-600" />
          </div>

          <div>
            <h3 className="text-lg font-bold">Delete Student Session</h3>
            <p className="text-sm text-slate-500">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-slate-600">
          Are you sure you want to remove this assignment?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border px-5 py-2.5"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-2.5 text-white"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}
