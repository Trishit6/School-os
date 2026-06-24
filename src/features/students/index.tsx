import { useState } from "react"
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiPlus,
} from "react-icons/fi"

import StudentForm from "./components/student-form"

const students = [
  {
    name: "Aisha Khan",
    id: "S-1042",
    grade: "10-A",
    guardian: "Rehan Khan",
    attendance: 96,
    gpa: 3.8,
    status: "Active",
    initials: "AK",
  },
  {
    name: "Liam Carter",
    id: "S-1043",
    grade: "9-B",
    guardian: "Sara Carter",
    attendance: 88,
    gpa: 3.4,
    status: "Active",
    initials: "LC",
  },
  {
    name: "Mei Tanaka",
    id: "S-1044",
    grade: "11-A",
    guardian: "Hiro Tanaka",
    attendance: 99,
    gpa: 3.9,
    status: "Active",
    initials: "MT",
  },
  {
    name: "Diego Alvarez",
    id: "S-1045",
    grade: "8-C",
    guardian: "Lucia Alvarez",
    attendance: 74,
    gpa: 2.9,
    status: "On Leave",
    initials: "DA",
  },
  {
    name: "Noah Becker",
    id: "S-1046",
    grade: "12-A",
    guardian: "Klaus Becker",
    attendance: 91,
    gpa: 3.6,
    status: "Active",
    initials: "NB",
  },
]

export default function StudentsComponent() {
  const [showForm, setShowForm] = useState(false)

  const [search, setSearch] = useState("")

  const filteredStudents = students.filter(
    (student) => {
      const query = search.toLowerCase()

      return (
        student.name
          .toLowerCase()
          .includes(query) ||
        student.id
          .toLowerCase()
          .includes(query) ||
        student.grade
          .toLowerCase()
          .includes(query) ||
        student.guardian
          .toLowerCase()
          .includes(query)
      )
    }
  )

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-start justify-between">

        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
            People
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Students
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            1,284 enrolled across 42 classes —
            manage profiles, attendance and
            academic standing.
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
            <FiDownload />
            Export
          </button>

          <button
            onClick={() => setShowForm(true)}
            className="
              flex items-center gap-2
              rounded-xl
              bg-[#0b8ca1]
              px-4 py-2
              text-sm font-semibold
              text-white
              hover:bg-[#09788a]
            "
          >
            <FiPlus />
            Enroll Student
          </button>

        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-3">

        <div className="flex w-[350px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">

          <FiSearch className="text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by name, ID, grade or guardian"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <FiFilter />
          Filters
        </button>

      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">

          <div>Student</div>
          <div>Grade</div>
          <div>Guardian</div>
          <div>Attendance</div>
          <div>GPA</div>
          <div>Status</div>

        </div>

        {filteredStudents.length > 0 ? (

          filteredStudents.map((student) => (

            <div
              key={student.id}
              className="grid grid-cols-6 items-center border-b border-slate-100 px-6 py-4 text-sm hover:bg-slate-50"
            >

              {/* STUDENT */}
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                  {student.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">
                    {student.name}
                  </h4>

                  <p className="text-xs text-slate-400">
                    {student.id}
                  </p>
                </div>

              </div>

              {/* GRADE */}
              <div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium">
                  {student.grade}
                </span>
              </div>

              {/* GUARDIAN */}
              <div className="text-slate-600">
                {student.guardian}
              </div>

              {/* ATTENDANCE */}
              <div className="flex items-center gap-3">

                <div className="h-2 w-[90px] overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="h-full rounded-full bg-[#0b8ca1]"
                    style={{
                      width: `${student.attendance}%`,
                    }}
                  />

                </div>

                <span className="text-xs font-medium text-slate-600">
                  {student.attendance}%
                </span>

              </div>

              {/* GPA */}
              <div className="font-semibold text-slate-700">
                {student.gpa}
              </div>

              {/* STATUS */}
              <div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    student.status === "Active"
                      ? "bg-cyan-100 text-cyan-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {student.status}
                </span>

              </div>

            </div>
          ))

        ) : (

          <div className="p-12 text-center">

            <h3 className="text-lg font-semibold text-slate-700">
              No Students Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with a different
              student name, ID, grade or guardian.
            </p>

          </div>

        )}

      </div>

      {/* STUDENT FORM MODAL */}
      {showForm && (
        <StudentForm
          onClose={() =>
            setShowForm(false)
          }
        />
      )}

    </div>
  )
}