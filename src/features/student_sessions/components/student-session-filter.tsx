import { FiFilter, FiSearch } from 'react-icons/fi'

type Props = {
  search: string
  setSearch: (value: string) => void
}

export default function StudentSessionFilter({ search, setSearch }: Props) {
  return (
    <div className="flex gap-3">
      <div className="flex w-[320px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
        <FiSearch />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
        <FiFilter />
        Filters
      </button>
    </div>
  )
}
