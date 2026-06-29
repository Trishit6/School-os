import { FiDownload, FiPlus } from 'react-icons/fi'

type Props = {
  onAdd: () => void
}

export default function StudentSessionHeader({ onAdd }: Props) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
          Academic
        </span>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Student Sessions
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage student class assignments and academic sessions.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
          <FiDownload />
          Export
        </button>

        <button
          onClick={onAdd}
          className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-white"
        >
          <FiPlus />
          Assign Student
        </button>
      </div>
    </div>
  )
}
