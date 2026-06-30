import { useMemo, useState } from 'react'
import { FiDownload, FiPlus, FiSearch } from 'react-icons/fi'

import { useStudentSessions } from './hooks/use-student-sessions'
import {
  createStudentSession,
  updateStudentSession,
  deleteStudentSession,
} from './services/student-session-service'

import StudentSessionForm from './components/student-session-form'
import StudentSessionTable from './components/student-session-table'

import type { StudentSession } from './types'
import type { StudentSessionSchema } from './schemas/student-session.schema'

export default function StudentSessionComponent() {
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [selectedSession, setSelectedSession] = useState<
    StudentSession | undefined
  >()

  const {
    data: sessions = [],
    refetch,
    isLoading,
    error,
  } = useStudentSessions()

  // 🔥 search filter (safe)
  const filteredSessions = useMemo(() => {
    const q = search.toLowerCase().trim()

    return sessions.filter((s) => {
      return (
        s.student?.name?.toLowerCase().includes(q) ||
        String(s.rollNo ?? '').includes(q)
      )
    })
  }, [sessions, search])

  // CREATE
  async function handleCreate(values: StudentSessionSchema) {
    await createStudentSession({
      student_id: values.studentId,
      academic_session_id: values.academicSessionId,
      academic_class_id: values.academicClassId,
      roll_no: values.rollNo,
      status: values.status,
    })

    await refetch()
    setShowForm(false)
  }

  // UPDATE
  async function handleUpdate(values: StudentSessionSchema) {
    if (!selectedSession) return

    await updateStudentSession(selectedSession.id, {
      student_id: values.studentId,
      academic_session_id: values.academicSessionId,
      academic_class_id: values.academicClassId,
      roll_no: values.rollNo,
      status: values.status,
    })

    await refetch()
    setSelectedSession(undefined)
    setShowForm(false)
  }

  // DELETE
  async function handleDelete(session: StudentSession) {
    if (!window.confirm('Delete this student session?')) return

    await deleteStudentSession(session.id)
    await refetch()
  }

  return (
    <div className="space-y-6">
      {/* HEADER (RESTORED DESIGN) */}
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
            Academic
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Student Sessions
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage student academic session assignments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <FiDownload />
            Export
          </button>

          <button
            onClick={() => {
              setSelectedSession(undefined)
              setShowForm(true)
            }}
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
          >
            <FiPlus />
            Assign Student
          </button>
        </div>
      </div>

      {/* SEARCH (RESTORED DESIGN) */}
      <div className="flex items-center gap-3">
        <div className="flex w-[350px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <FiSearch className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student or roll no"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* STATES */}
      {isLoading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          Loading...
        </div>
      ) : error ? (
        <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center text-red-600">
          Failed to load student sessions.
        </div>
      ) : (
        <StudentSessionTable
          sessions={filteredSessions}
          onEdit={(s) => {
            setSelectedSession(s)
            setShowForm(true)
          }}
          onDelete={handleDelete}
        />
      )}

      {/* FORM MODAL */}
      {showForm && (
        <StudentSessionForm
          session={selectedSession}
          students={[]}
          academicSessions={[]}
          academicStandards={[]}
          academicClasses={[]}
          onClose={() => {
            setShowForm(false)
            setSelectedSession(undefined)
          }}
          onSubmit={selectedSession ? handleUpdate : handleCreate}
        />
      )}
    </div>
  )
}
