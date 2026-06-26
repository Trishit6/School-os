import { FiRefreshCw, FiSearch } from 'react-icons/fi'

interface AcademicStandardFilterProps {
  search: string
  onSearchChange: (value: string) => void

  status: string
  onStatusChange: (value: string) => void

  onReset: () => void
}

export default function AcademicStandardFilter({
  search,
  onSearchChange,
  status,
  onStatusChange,
  onReset,
}: AcademicStandardFilterProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Search */}

        <div className="relative">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or code..."
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950"
          />
        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="">All Status</option>

          <option value="active">Active</option>

          <option value="inactive">Inactive</option>
        </select>

        {/* Reset */}

        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 font-medium transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <FiRefreshCw />
          Reset Filters
        </button>
      </div>
    </div>
  )
}
