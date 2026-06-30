import { useMemo, useState } from 'react'
import { FiDownload, FiPlus, FiSearch } from 'react-icons/fi'

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

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
            People
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">Students</h1>

          <p className="mt-2 text-sm text-slate-500">Manage student records.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
            <FiDownload />
            Export
          </button>

          <button
            onClick={() => {
              setSelectedStudent(null)
              setShowForm(true)
            }}
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
          >
            <FiPlus />
            Add Student
          </button>
        </div>
      </div>

      <div className="flex w-[350px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
        <FiSearch className="text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {isLoading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          Loading...
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
