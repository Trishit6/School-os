import type { AcademicSession } from '../types'
import { FiEdit, FiTrash } from 'react-icons/fi'

type Props = {
  sessions: AcademicSession[]
}

export default function AcademicSessionTable({ sessions }: Props) {
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
        <div>Name</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Current</div>
        <div>Status</div>
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
          <div>{session.name}</div>

          <div>{session.startDate}</div>

          <div>{session.endDate}</div>

          <div>{session.isCurrent ? 'Yes' : 'No'}</div>

          <div>
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
              {session.status ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className="flex gap-2">
            <button className="rounded-lg p-2 hover:bg-slate-100">
              <FiEdit />
            </button>

            <button className="rounded-lg p-2 text-red-500 hover:bg-red-50">
              <FiTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
