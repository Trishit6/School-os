import { FiPlus } from 'react-icons/fi'

interface Props {
  onCreate: () => void
}

export default function AcademicClassHeader({ onCreate }: Props) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
          Academic Management
        </span>

        <h1 className="mt-3 text-3xl font-bold">Academic Classes</h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage academic classes, capacities, standards and academic sessions.
        </p>
      </div>

      <button
        onClick={onCreate}
        className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700"
      >
        <FiPlus />
        Add Academic Class
      </button>
    </div>
  )
}
