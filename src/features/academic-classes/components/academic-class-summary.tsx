import { FiBookOpen, FiCheckCircle, FiUsers } from 'react-icons/fi'

interface Props {
  totalClasses: number

  activeClasses: number

  totalCapacity: number
}

export default function AcademicClassSummary({
  totalClasses,
  activeClasses,
  totalCapacity,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {/* Total Classes */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Classes
            </p>

            <h2 className="mt-2 text-3xl font-bold">{totalClasses}</h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400">
            <FiBookOpen size={24} />
          </div>
        </div>
      </div>

      {/* Active Classes */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Active Classes
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">
              {activeClasses}
            </h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
            <FiCheckCircle size={24} />
          </div>
        </div>
      </div>

      {/* Capacity */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Capacity
            </p>

            <h2 className="mt-2 text-3xl font-bold text-violet-600 dark:text-violet-400">
              {totalCapacity}
            </h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
            <FiUsers size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
