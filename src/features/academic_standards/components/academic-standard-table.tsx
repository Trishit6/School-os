import { FiEdit2, FiTrash2 } from 'react-icons/fi'

import type { AcademicStandard } from '../types'

interface AcademicStandardTableProps {
  data: AcademicStandard[]

  loading: boolean

  onEdit: (standard: AcademicStandard) => void

  onDelete: (id: number) => void
}

export default function AcademicStandardTable({
  data,
  loading,
  onEdit,
  onDelete,
}: AcademicStandardTableProps) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
        Loading Academic Standards...
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-lg font-semibold">No Academic Standards Found</h2>

        <p className="mt-2 text-sm text-slate-500">
          Click "Add Academic Standard" to create one.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <table className="min-w-full">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>

            <th className="px-6 py-4 text-left text-sm font-semibold">Code</th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Created
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((standard) => (
            <tr
              key={standard.id}
              className="border-t border-slate-200 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <td className="px-6 py-4 font-medium">{standard.name}</td>

              <td className="px-6 py-4">{standard.code}</td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    standard.status
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                  }`}
                >
                  {standard.status ? 'Active' : 'Inactive'}
                </span>
              </td>

              <td className="px-6 py-4">
                {new Date(standard.createdAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(standard)}
                    className="rounded-lg p-2 text-cyan-600 transition hover:bg-cyan-100 dark:hover:bg-slate-800"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => onDelete(standard.id)}
                    className="rounded-lg p-2 text-red-600 transition hover:bg-red-100 dark:hover:bg-slate-800"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
