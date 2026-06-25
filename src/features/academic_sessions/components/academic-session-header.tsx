import { FiDownload, FiPlus } from 'react-icons/fi'

type Props = {
  onAdd: () => void
}

export default function AcademicSessionHeader({ onAdd }: Props) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
          Academic
        </span>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Academic Sessions
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage school academic years and active sessions.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="
            flex items-center gap-2
            rounded-xl border border-slate-200
            bg-white px-4 py-2
            text-sm font-semibold
            text-slate-700
            hover:bg-slate-50
          "
        >
          <FiDownload />
          Export
        </button>

        <button
          onClick={onAdd}
          className="
            flex items-center gap-2
            rounded-xl
            bg-[#0b8ca1]
            px-4 py-2
            text-sm font-semibold
            text-white
            hover:bg-[#09788a]
          "
        >
          <FiPlus />
          Add Session
        </button>
      </div>
    </div>
  )
}
