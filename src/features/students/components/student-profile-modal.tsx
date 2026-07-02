import {
  FiCalendar,
  FiClock,
  FiShield,
  FiUser,
  FiUsers,
  FiX,
} from 'react-icons/fi'

import type { Student } from '../types'
import type { StudentSession } from '../../student_sessions/types'

type Props = {
  student: Student
  onClose: () => void
}

function StudentAvatar({ student }: { student: Student }) {
  if (student.photo) {
    return (
      <img
        src={student.photo}
        alt={student.name}
        className="h-28 w-28 rounded-3xl object-cover ring-4 ring-white/30 shadow-xl"
      />
    )
  }

  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/15 text-4xl font-bold text-white ring-4 ring-white/20">
      {student.name.charAt(0).toUpperCase()}
    </div>
  )
}

export default function StudentProfileModal({ student, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/15 bg-white shadow-2xl">
        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#155e75_0%,#0891b2_40%,#0f172a_100%)] px-6 py-6 text-white md:px-10 md:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

          <button
            onClick={onClose}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <FiX size={20} />
          </button>

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
            <StudentAvatar student={student} />

            <div className="min-w-0">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-50">
                Student profile
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                {student.name}
              </h2>

              <p className="mt-2 text-sm text-cyan-100">
                Student ID #{student.id}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ${
                    student.status
                      ? 'bg-emerald-400/20 text-emerald-50'
                      : 'bg-rose-400/20 text-rose-50'
                  }`}
                >
                  {student.status ? 'Active' : 'Inactive'}
                </span>

                <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-cyan-50">
                  {student.studentSessions?.length ?? 0} academic records
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[calc(92vh-180px)] overflow-y-auto bg-slate-50/70 p-6 md:p-8">
          <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Personal Information
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-700">
                      <FiUser />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        Name
                      </span>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {student.name}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-700">
                      <FiCalendar />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        Date Of Birth
                      </span>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {student.dateOfBirth}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-700">
                      <FiUsers />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        Guardian
                      </span>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {student.guardianName}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-700">
                      <FiShield />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        Status
                      </span>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {student.status ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <FiClock className="text-cyan-700" />
                  Academic History
                </h3>

                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  {student.studentSessions?.length ?? 0} entries
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Session
                      </th>
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Class
                      </th>
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Roll No
                      </th>
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {student.studentSessions &&
                    student.studentSessions.length > 0 ? (
                      student.studentSessions.map((session: StudentSession) => (
                        <tr
                          key={session.id}
                          className="border-t border-slate-100 hover:bg-slate-50"
                        >
                          <td className="px-5 py-4 text-slate-700">
                            {session.academicSession?.name ?? '-'}
                          </td>
                          <td className="px-5 py-4 text-slate-700">
                            {session.academicClass?.name ?? '-'}
                          </td>
                          <td className="px-5 py-4 font-semibold text-slate-900">
                            {session.rollNo}
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                session.status
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-rose-100 text-rose-700'
                              }`}
                            >
                              {session.status ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-14 text-center text-sm text-slate-500"
                        >
                          No academic history found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-6 py-4">
                <button
                  onClick={onClose}
                  className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
