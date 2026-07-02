import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  FiBookOpen,
  FiDownload,
  FiPlus,
  FiSearch,
  FiUsers,
} from 'react-icons/fi'

import { useStudentSessions } from './hooks/use-student-sessions'
import {
  createStudentSession,
  deleteStudentSession,
  updateStudentSession,
} from './services/student-session-service'
import { academicSessionService } from '#/features/academic_sessions/data/services.ts'

import StudentSessionForm from './components/student-session-form'
import StudentSessionTable from './components/student-session-table'

import type { StudentSession } from './types'
import type { StudentSessionSchema } from './schemas/student-session.schema'

function StatCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string | number
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {title}
          </p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default function StudentSessionComponent() {
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [selectedSession, setSelectedSession] = useState<
    StudentSession | undefined
  >(undefined)

  const { data: academicSessions = [] } = useQuery({
    queryKey: ['academic-sessions'],
    queryFn: academicSessionService.getAll,
  })

  const {
    data: sessions = [],
    refetch,
    isLoading,
    error,
  } = useStudentSessions()

  const totalRecords = sessions.length

  const totalAcademicSessions = useMemo(() => {
    return academicSessions.length
  }, [academicSessions])

  const totalSearchResults = useMemo(() => {
    const q = search.toLowerCase().trim()

    if (!q) return sessions.length

    return sessions.filter((s) => {
      return (
        s.student?.name?.toLowerCase().includes(q) ||
        s.student?.email?.toLowerCase().includes(q) ||
        s.student?.phone?.toLowerCase().includes(q) ||
        s.academicSession?.name?.toLowerCase().includes(q) ||
        s.academicClass?.name?.toLowerCase().includes(q) ||
        s.academicClass?.code?.toLowerCase().includes(q) ||
        String(s.rollNo ?? '').includes(q) ||
        String(s.id ?? '').includes(q)
      )
    }).length
  }, [sessions, search])

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

  async function handleDelete(session: StudentSession) {
    if (!window.confirm('Delete this student session?')) return

    await deleteStudentSession(session.id)
    await refetch()
  }

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#f8fafc_40%,#ffffff_100%)] shadow-sm">
        <div className="flex flex-col gap-6 px-6 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-cyan-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Academic Management
            </span>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Student Sessions
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Manage student academic session assignments, organize class
                mapping, and quickly search records from one workspace.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <FiDownload className="h-4 w-4" />
              Export
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedSession(undefined)
                setShowForm(true)
              }}
              className="inline-flex h-11 items-center gap-2 rounded-2xl bg-cyan-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
            >
              <FiPlus className="h-4 w-4" />
              Assign Student
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          title="Total records"
          value={totalRecords}
          icon={<FiUsers className="h-5 w-5" />}
        />
        <StatCard
          title="Academic sessions"
          value={totalAcademicSessions}
          icon={<FiBookOpen className="h-5 w-5" />}
        />
        <StatCard
          title="Search results"
          value={totalSearchResults}
          icon={<FiSearch className="h-5 w-5" />}
        />
      </div>

      {isLoading ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center text-slate-500 shadow-sm">
          Loading student sessions...
        </div>
      ) : error ? (
        <div className="rounded-[28px] border border-rose-200 bg-rose-50 p-12 text-center text-rose-600 shadow-sm">
          Failed to load student sessions.
        </div>
      ) : (
        <StudentSessionTable
          sessions={sessions}
          academicSessions={academicSessions}
          search={search}
          onSearchChange={setSearch}
          onEdit={(s) => {
            setSelectedSession(s)
            setShowForm(true)
          }}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <StudentSessionForm
          session={selectedSession}
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
