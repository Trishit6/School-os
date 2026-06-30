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
  if (!sessions.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500">
        No student sessions found.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="grid grid-cols-5 border-b bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <div>Student</div>
        <div>Session</div>
        <div>Class</div>
        <div>Roll No</div>
        <div className="text-right">Actions</div>
      </div>

      {sessions.map((session) => (
        <div
          key={session.id}
          className="grid grid-cols-5 items-center border-b px-6 py-4 text-sm text-slate-700"
        >
          <div className="font-medium text-slate-900">
            {session.student?.name ?? '-'}
          </div>
          <div>{session.academicSession?.name ?? '-'}</div>
          <div>
            {session.academicClass?.name ?? '-'}
            {session.academicClass?.code && (
              <span className="ml-2 rounded bg-cyan-50 px-1.5 py-0.5 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/10">
                {session.academicClass.code}
              </span>
            )}
          </div>
          <div>{session.rollNo}</div>
          <div className="flex justify-end gap-3 text-right">
            <button
              onClick={() => onEdit(session)}
              className="text-slate-400 hover:text-cyan-600"
            >
              <FiEdit size={16} />
            </button>
            <button
              onClick={() => onDelete(session)}
              className="text-slate-400 hover:text-red-600"
            >
              <FiTrash size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
