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

export default function StudentProfileModal({ student, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-cyan-800 px-10 py-8 text-white">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-xl bg-white/20 p-2 hover:bg-white/30"
          >
            <FiX size={20} />
          </button>

          <div className="flex items-center gap-6">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/20 text-4xl font-bold">
              {student.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-4xl font-bold">{student.name}</h2>

              <p className="mt-2 text-cyan-100">Student ID : {student.id}</p>

              <span
                className={`mt-4 inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
                  student.status ? 'bg-green-500/30' : 'bg-red-500/30'
                }`}
              >
                {student.status ? 'ACTIVE' : 'INACTIVE'}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8 p-8">
          {/* Personal */}

          <div className="rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-4">
              <h3 className="text-xl font-bold text-slate-800">
                Personal Information
              </h3>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-cyan-600">
                  <FiUser />
                  <span className="text-xs font-semibold uppercase">Name</span>
                </div>

                <p className="font-semibold text-slate-800">{student.name}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-cyan-600">
                  <FiCalendar />
                  <span className="text-xs font-semibold uppercase">
                    Date Of Birth
                  </span>
                </div>

                <p className="font-semibold text-slate-800">
                  {student.dateOfBirth}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-cyan-600">
                  <FiUsers />
                  <span className="text-xs font-semibold uppercase">
                    Guardian
                  </span>
                </div>

                <p className="font-semibold text-slate-800">
                  {student.guardianName}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-2 text-cyan-600">
                  <FiShield />
                  <span className="text-xs font-semibold uppercase">
                    Status
                  </span>
                </div>

                <p className="font-semibold">
                  {student.status ? 'Active' : 'Inactive'}
                </p>
              </div>
            </div>
          </div>

          {/* Academic History */}

          <div className="rounded-2xl border border-slate-200">
            <div className="border-b bg-slate-50 px-6 py-4">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800">
                <FiClock />
                Academic History
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Session
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Class
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
                      Roll No
                    </th>

                    <th className="px-5 py-4 text-left text-sm font-semibold">
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
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          {session.academicSession?.name ?? '-'}
                        </td>

                        <td className="px-5 py-4">
                          {session.academicClass?.name ?? '-'}
                        </td>

                        <td className="px-5 py-4 font-semibold">
                          {session.rollNo}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              session.status
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
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
                        className="py-10 text-center text-slate-500"
                      >
                        No Academic History Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end border-t border-slate-200 bg-slate-50 p-6">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
