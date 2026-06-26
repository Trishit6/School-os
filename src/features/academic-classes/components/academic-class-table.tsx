import { FiEdit2, FiTrash2 } from 'react-icons/fi'

import type { AcademicClass } from '../types'

interface Props {
  data: AcademicClass[]

  loading: boolean

  onEdit: (academicClass: AcademicClass) => void

  onDelete: (id: number) => void
}

export default function AcademicClassTable({
  data,
  loading,
  onEdit,
  onDelete,
}: Props) {
  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-500">Loading academic classes...</p>
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-xl font-semibold">No Academic Classes Found</h3>

        <p className="mt-2 text-slate-500">Create your first academic class.</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Class Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Academic Standard
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Academic Session
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Capacity
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((academicClass) => (
              <tr
                key={academicClass.id}
                className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/30"
              >
                <td className="px-6 py-5">
                  <div>
                    <p className="font-semibold">{academicClass.name}</p>

                    <p className="mt-1 text-xs text-slate-500">
                      ID #{academicClass.id}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">
                  {academicClass.academicStandard.name}
                </td>

                <td className="px-6 py-5">
                  {academicClass.academicSession.name}
                </td>

                <td className="px-6 py-5 text-center">
                  {academicClass.capacity}
                </td>

                <td className="px-6 py-5 text-center">
                  {academicClass.status ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Active
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                      Inactive
                    </span>
                  )}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(academicClass)}
                      className="rounded-lg p-2 text-cyan-600 transition hover:bg-cyan-100 dark:hover:bg-cyan-900/20"
                    >
                      <FiEdit2 size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(academicClass.id)}
                      className="rounded-lg p-2 text-red-600 transition hover:bg-red-100 dark:hover:bg-red-900/20"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
