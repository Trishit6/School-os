import { useMemo, useState } from 'react'
import {
  FiDownload,
  FiLoader,
  FiPlus,
  FiSearch,
  FiUserCheck,
  FiUsers,
} from 'react-icons/fi'

import StudentForm from './components/student-form'
import StudentTable from './components/student-table'
import StudentProfileModal from './components/student-profile-modal'

import {
  useStudents,
  useCreateStudent,
  useUpdateStudent,
  useDeleteStudent,
} from './hooks/use-students'

import type { Student, StudentFormData } from './types'

function StatCard({
  label,
  value,
  icon,
}: {
  label: string
  value: number
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>
        <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700">{icon}</div>
      </div>
    </div>
  )
}

export default function StudentsComponent() {
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [profileStudent, setProfileStudent] = useState<Student | null>(null)

  const { data: students = [], isLoading } = useStudents()

  const createMutation = useCreateStudent()
  const updateMutation = useUpdateStudent()
  const deleteMutation = useDeleteStudent()

  const filteredStudents = useMemo(() => {
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.guardianName.toLowerCase().includes(search.toLowerCase()),
    )
  }, [students, search])

  const activeStudents = useMemo(
    () => students.filter((student) => student.status).length,
    [students],
  )

  // const withPhotos = useMemo(
  //   () => students.filter((student) => !!student.photo).length,
  //   [students],
  // )

  async function handleCreate(data: StudentFormData) {
    try {
      await createMutation.mutateAsync(data)
      setShowForm(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function handleEdit(data: StudentFormData) {
    if (!selectedStudent) return

    try {
      await updateMutation.mutateAsync({
        id: selectedStudent.id,
        data,
      })
      setSelectedStudent(null)
      setShowForm(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDelete(student: Student) {
    if (!window.confirm('Delete this student?')) return

    try {
      await deleteMutation.mutateAsync(student.id)
    } catch (error) {
      console.error(error)
    }
  }

  function handleView(student: Student) {
    setProfileStudent(student)
  }

  const formLoading = createMutation.isPending || updateMutation.isPending

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
        <div className="bg-[linear-gradient(135deg,#ecfeff_0%,#f8fafc_40%,#ffffff_100%)] px-6 py-8 md:px-8">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                People
              </span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Students
              </h1>

              <p className="mt-3 text-sm text-slate-500 md:text-base">
                Manage student identity, profile photos, guardian details, and
                academic visibility from one place.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                <FiDownload />
                Export
              </button>

              <button
                onClick={() => {
                  setSelectedStudent(null)
                  setShowForm(true)
                }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-4 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                <FiPlus />
                Add Student
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-slate-200 bg-slate-50/70 p-6 md:grid-cols-3">
          <StatCard
            label="Total students"
            value={students.length}
            icon={<FiUsers />}
          />
          <StatCard
            label="Active students"
            value={activeStudents}
            icon={<FiUserCheck />}
          />
          {/* <StatCard
            label="Profiles with photo"
            value={withPhotos}
            icon={<FiUsers />}
          /> */}
        </div>
      </section>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex h-12 w-full max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 shadow-sm">
          <FiSearch className="text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student or guardian..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <p className="text-sm text-slate-500">
          Showing{' '}
          <span className="font-semibold text-slate-900">
            {filteredStudents.length}
          </span>{' '}
          of{' '}
          <span className="font-semibold text-slate-900">
            {students.length}
          </span>{' '}
          students
        </p>
      </div>

      {isLoading ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-12 shadow-sm">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <FiLoader className="h-6 w-6 animate-spin text-cyan-600" />
            <p className="text-sm font-medium text-slate-700">
              Loading student records...
            </p>
            <p className="text-sm text-slate-500">
              Please wait while the directory is being prepared.
            </p>
          </div>
        </div>
      ) : (
        <StudentTable
          students={filteredStudents}
          onView={handleView}
          onEdit={(student) => {
            setSelectedStudent(student)
            setShowForm(true)
          }}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <StudentForm
          student={selectedStudent}
          onClose={() => {
            setShowForm(false)
            setSelectedStudent(null)
          }}
          onSubmit={selectedStudent ? handleEdit : handleCreate}
          loading={formLoading}
        />
      )}

      {profileStudent && (
        <StudentProfileModal
          student={profileStudent}
          onClose={() => setProfileStudent(null)}
        />
      )}
    </div>
  )
}
