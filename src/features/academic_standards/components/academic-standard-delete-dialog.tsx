interface AcademicStandardDeleteDialogProps {
  open: boolean
  loading?: boolean

  title?: string

  onClose: () => void
  onConfirm: () => void
}

export default function AcademicStandardDeleteDialog({
  open,
  loading = false,
  title = 'this academic standard',
  onClose,
  onConfirm,
}: AcademicStandardDeleteDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Delete Academic Standard
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Are you sure you want to delete{' '}
          <span className="font-semibold">{title}</span>?
        </p>

        <p className="mt-2 text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-slate-300 px-5 py-2.5 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}
