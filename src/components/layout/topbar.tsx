import { FiBell, FiMenu, FiSearch } from "react-icons/fi"

export default function Topbar() {
  return (
    <header className="h-[46px] bg-white border-b border-slate-200 px-4 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <FiMenu className="text-slate-500" size={18} />

        <div className="h-[32px] w-[320px] rounded-xl border border-slate-200 bg-[#fafafa] flex items-center px-3 gap-2">
          <FiSearch size={14} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search students, classes, invoices..."
            className="bg-transparent outline-none text-[13px] w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">

        <FiBell className="text-slate-500" size={16} />

        <div className="text-right">
          <h4 className="text-[11px] font-semibold text-slate-700">
            Spring Term 2026
          </h4>

          <p className="text-[10px] text-slate-400">
            Week 7 · Day 4
          </p>
        </div>
      </div>
    </header>
  )
}