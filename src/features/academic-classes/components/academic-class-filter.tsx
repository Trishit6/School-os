import { FiSearch } from 'react-icons/fi'

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function AcademicClassFilter({ value, onChange }: Props) {
  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search academic classes..."
        className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-900"
      />
    </div>
  )
}
