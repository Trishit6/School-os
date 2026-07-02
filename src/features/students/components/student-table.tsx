import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi'
import type { Student } from '../types'

type Props = {
  students: Student[]
  onView: (student: Student) => void
  onEdit: (student: Student) => void
  onDelete: (student: Student) => void
}

function StudentAvatar({ student }: { student: Student }) {
  if (student.photo) {
    return (
      <img
        src={student.photo}
        alt={student.name}
        className="h-12 w-12 rounded-2xl object-cover ring-1 ring-slate-200"
      />
    )
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 font-bold text-cyan-700 ring-1 ring-cyan-200">
      {student.name.charAt(0).toUpperCase()}
    </div>
  )
}

export default function StudentTable({
  students,
  onView,
  onEdit,
  onDelete,
}: Props) {
  if (!students.length) {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto max-w-md">
          <h3 className="text-lg font-semibold text-slate-900">
            No students found
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Try changing the search keyword or add a new student record.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Student directory
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Review identities, guardian details, and account status.
            </p>
          </div>

          <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            {students.length} records
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Student
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                ID
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Date Of Birth
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Guardian
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-t border-slate-100 transition hover:bg-slate-50/70"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <StudentAvatar student={student} />

                    <div className="min-w-0">
                      <p className="truncate font-semibold text-slate-900">
                        {student.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {student.photo ? 'Photo added' : 'No photo uploaded'}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-slate-700">
                  #{student.id}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.dateOfBirth}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {student.guardianName}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      student.status
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {student.status ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(student)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-cyan-600 transition hover:bg-cyan-100"
                    >
                      <FiEye size={18} />
                    </button>

                    <button
                      onClick={() => onEdit(student)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-amber-600 transition hover:bg-amber-100"
                    >
                      <FiEdit2 size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(student)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-rose-600 transition hover:bg-rose-100"
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
