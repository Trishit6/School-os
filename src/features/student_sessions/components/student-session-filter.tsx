import { FiSearch, FiFilter } from 'react-icons/fi'

type Props = {
  search: string
  setSearch: (v: string) => void
}

export default function StudentSessionFilter({ search, setSearch }: Props) {
  return (
    <div className="flex gap-3">
      <div className="flex w-[320px] items-center gap-2 rounded-xl border bg-white px-3 py-2">
        <FiSearch className="text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full outline-none"
        />
      </div>

      <button className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2">
        <FiFilter />
        Filters
      </button>
    </div>
  )
}
