interface Props {
  open: boolean
  onClose: () => void
  onConfirm: () => void | Promise<void>
}

export default function AcademicClassDeleteDialog({
  open,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        <h2 className="text-xl font-bold">Delete Academic Class</h2>

        <p className="mt-3 text-slate-500">
          Are you sure you want to delete this academic class?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border px-4 py-2">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
