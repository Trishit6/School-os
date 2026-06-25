import { FiFilter, FiSearch } from 'react-icons/fi'

type Props = {
  search: string
  setSearch: (value: string) => void
}

export default function AcademicSessionFilters({ search, setSearch }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex w-[320px]
          items-center gap-2
          rounded-xl
          border border-slate-200
          bg-white
          px-3 py-2
        "
      >
        <FiSearch className="text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search session..."
          className="
            w-full
            bg-transparent
            text-sm
            outline-none
          "
        />
      </div>

      <button
        className="
          flex items-center gap-2
          rounded-xl
          border border-slate-200
          bg-white
          px-4 py-2
          text-sm font-medium
          text-slate-700
          hover:bg-slate-50
        "
      >
        <FiFilter />
        Filters
      </button>
    </div>
  )
}
