import { useState } from 'react'
import { FiDownload, FiPlus, FiSearch } from 'react-icons/fi'

import StudentForm from './components/student-form'
import StudentTable from './components/student-table'

import { useStudents } from './hooks/use-students'

import type { Student, StudentFormData } from './types'

export default function StudentsComponent() {
  const [search, setSearch] = useState('')

  const [showForm, setShowForm] = useState(false)

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)

  const { data: students = [], isLoading } = useStudents()

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.guardianName.toLowerCase().includes(search.toLowerCase()),
  )

  const handleCreate = (data: StudentFormData) => {
    console.log('Create', data)

    setShowForm(false)
  }

  const handleEdit = (data: StudentFormData) => {
    console.log('Update', selectedStudent?.id, data)

    setShowForm(false)

    setSelectedStudent(null)
  }

  const handleDelete = (student: Student) => {
    console.log('Delete', student.id)
  }

  const handleView = (student: Student) => {
    console.log(student)
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
            People
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">Students</h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage student records and guardians.
          </p>
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
            className="flex items-center gap-2 rounded-xl bg-[#0b8ca1] px-4 py-2 text-sm font-semibold text-white"
          >
            <FiPlus />
            Add Student
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex w-[350px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
        <FiSearch className="text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student or guardian"
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* TABLE */}
      {isLoading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          Loading students...
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

      {/* FORM */}
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
    </div>
  )
}
