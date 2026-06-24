import { FiDownload, FiPlus } from "react-icons/fi"

type Props = {
  onAddStudent: () => void
}

export default function StudentHeader({
  onAddStudent,
}: Props) {
  return (
    <div className="flex items-start justify-between">

      <div>
        <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
          People
        </span>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Students
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage student profiles, admissions,
          attendance and academic records.
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
        onClick={onAddStudent}
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
        Add Student
        </button>

      </div>
    </div>
  )
}