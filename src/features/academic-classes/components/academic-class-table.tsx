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
      <div className="rounded-2xl border bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        Loading academic classes...
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className="rounded-2xl border bg-white p-8 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-900">
        No academic classes found.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Class
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Code
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Academic Standard
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
                className="border-t border-slate-200 dark:border-slate-800"
              >
                <td className="px-6 py-4 font-medium">{academicClass.name}</td>

                <td className="px-6 py-4">
                  <span className="rounded-lg bg-cyan-100 px-2 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                    {academicClass.code}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {academicClass.academicStandard.name}
                </td>

                <td className="px-6 py-4 text-center">
                  {academicClass.capacity}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      academicClass.status
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {academicClass.status ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td className="px-6 py-4">
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
