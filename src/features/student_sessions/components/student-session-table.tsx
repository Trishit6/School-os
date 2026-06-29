import { FiEdit, FiTrash } from 'react-icons/fi'

import type { StudentSession } from '../types'

type Props = {
  sessions: StudentSession[]

  onEdit: (session: StudentSession) => void

  onDelete: (session: StudentSession) => void
}

export default function StudentSessionTable({
  sessions,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="grid grid-cols-6 border-b bg-slate-50 px-6 py-4 text-xs font-semibold uppercase">
        <div>Student</div>
        <div>Admission</div>
        <div>Session</div>
        <div>Class</div>
        <div>Roll No</div>
        <div>Actions</div>
      </div>

      {sessions.map((session) => (
        <div
          key={session.id}
          className="grid grid-cols-6 items-center border-b px-6 py-4"
        >
          <div>{session.student?.name}</div>

          <div>{session.student?.admissionNo}</div>

          <div>{session.academicSession?.name}</div>

          <div>{session.academicClass?.name}</div>

          <div>{session.rollNo}</div>

          <div className="flex gap-2">
            <button onClick={() => onEdit(session)}>
              <FiEdit />
            </button>

            <button onClick={() => onDelete(session)}>
              <FiTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
