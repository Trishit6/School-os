import { FiEdit, FiTrash, FiCheckCircle } from 'react-icons/fi'
import type { AcademicSession } from '../types'

type Props = {
  sessions: AcademicSession[]
  onEdit: (session: AcademicSession) => void
  onDelete: (id: number) => void
  onActivate: (id: number) => void
}

export default function AcademicSessionTable({
  sessions,
  onEdit,
  onDelete,
  onActivate,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div
        className="
          grid grid-cols-6
          border-b border-slate-200
          bg-slate-50
          px-6 py-4
          text-xs font-semibold
          uppercase tracking-wide
          text-slate-500
        "
      >
        <div>Session Name</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Status</div>
        <div>Current</div>
        <div>Actions</div>
      </div>

      {sessions.map((session) => (
        <div
          key={session.id}
          className="
            grid grid-cols-6
            items-center
            border-b border-slate-100
            px-6 py-4
            hover:bg-slate-50
          "
        >
          <div>
            <h4 className="font-semibold text-slate-800">{session.name}</h4>
          </div>

          <div className="text-sm text-slate-600">{session.start_date}</div>

          <div className="text-sm text-slate-600">{session.end_date}</div>

          <div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                session.is_active
                  ? 'bg-green-100 text-green-700'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {session.is_active ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div>
            {session.is_active ? (
              <span
                className="
                  rounded-full
                  bg-cyan-100
                  px-3 py-1
                  text-xs
                  font-semibold
                  text-cyan-700
                "
              >
                Current Session
              </span>
            ) : (
              <span className="text-slate-400 text-sm">—</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!session.is_active && (
              <button
                onClick={() => onActivate(session.id)}
                className="
                  rounded-lg
                  p-2
                  text-green-600
                  hover:bg-green-50
                "
                title="Activate Session"
              >
                <FiCheckCircle />
              </button>
            )}

            <button
              onClick={() => onEdit(session)}
              className="
                rounded-lg
                p-2
                hover:bg-slate-100
              "
            >
              <FiEdit />
            </button>

            <button
              onClick={() => onDelete(session.id)}
              className="
                rounded-lg
                p-2
                text-red-500
                hover:bg-red-50
              "
            >
              <FiTrash />
            </button>
          </div>
        </div>
      ))}

      {sessions.length === 0 && (
        <div className="p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            No Academic Sessions Found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Create your first academic session.
          </p>
        </div>
      )}
    </div>
  )
}
