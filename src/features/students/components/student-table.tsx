import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'
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
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        <div>ID</div>
        <div>Name</div>
        <div>Date Of Birth</div>
        <div>Guardian</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {students.map((student) => (
        <div
          key={student.id}
          className="grid grid-cols-6 items-center border-b border-slate-100 px-6 py-4 hover:bg-slate-50"
        >
          <div className="font-medium">{student.id}</div>

          <div>{student.name}</div>

          <div>{student.dateOfBirth}</div>

          <div>{student.guardianName}</div>

          <div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                student.status
                  ? 'bg-cyan-100 text-cyan-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {student.status ? 'ACTIVE' : 'INACTIVE'}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onView(student)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <FiEye />
            </button>

            <button
              onClick={() => onEdit(student)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <FiEdit />
            </button>

            <button
              onClick={() => onDelete(student)}
              className="rounded-lg p-2 text-red-500 hover:bg-red-50"
            >
              <FiTrash />
            </button>
          </div>
        </div>
      ))}

      {students.length === 0 && (
        <div className="p-10 text-center text-slate-500">No students found</div>
      )}
    </div>
  )
}
