// components/academic-session-header.tsx

import { FiDownload, FiPlus } from 'react-icons/fi'

type Props = {
  onAddSession: () => void
}

export default function AcademicSessionHeader({ onAddSession }: Props) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
          Academics
        </span>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Academic Sessions
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage academic years, session periods and active school sessions.
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
            shadow-sm
            hover:bg-slate-50
          "
        >
          <FiDownload />
          Export
        </button>

        <button
          onClick={onAddSession}
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
