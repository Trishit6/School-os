import { FiSearch, FiX } from 'react-icons/fi'

interface Props {
  search: string

  onSearchChange: (value: string) => void

  total: number
}

export default function AcademicClassFilter({
  search,
  onSearchChange,
  total,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by class, session or standard..."
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
          />

          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-red-500"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        <div className="rounded-xl bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400">
          Total Classes : {total}
        </div>
      </div>
    </div>
  )
}
