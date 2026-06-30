import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi'
import type { Student } from '../types'

type Props = {
  students: Student[]
  onView: (student: Student) => void
  onEdit: (student: Student) => void
  onDelete: (student: Student) => void
}

export default function StudentTable({
  students,
  onView,
  onEdit,
  onDelete,
}: Props) {
  if (!students.length) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center text-slate-500 shadow-sm">
        No students found.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                ID
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Student
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Date Of Birth
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Guardian
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-semibold text-slate-700">
                  {student.id}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                      {student.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        {student.name}
                      </p>

                      <p className="text-xs text-slate-500">Student</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.dateOfBirth}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.guardianName}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      student.status
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {student.status ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(student)}
                      className="rounded-lg p-2 text-cyan-600 transition hover:bg-cyan-100"
                    >
                      <FiEye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(student)}
                      className="rounded-lg p-2 text-amber-600 transition hover:bg-amber-100"
                    >
                      <FiEdit2 size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(student)}
                      className="rounded-lg p-2 text-red-600 transition hover:bg-red-100"
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
