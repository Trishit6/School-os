import { FcNext } from 'react-icons/fc'
import { FiPlus } from 'react-icons/fi'

interface AcademicStandardHeaderProps {
  onCreate: () => void
}

export default function AcademicStandardHeader({
  onCreate,
}: AcademicStandardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Academic Standards
        </h1>

        <p className="mt-1 text-slate-500">
          Manage all academic standards of your school.
        </p>
      </div>

      <button
        onClick={onCreate}
        className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700"
      >
        <FiPlus />
        Add Academic Standard
      </button>
    </div>
  )
}
FcNext
