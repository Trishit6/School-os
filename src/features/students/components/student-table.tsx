import {
  FiEdit,
  FiEye,
  FiTrash,
} from "react-icons/fi"
import type { Student } from "../types";

type Props = {
  students: Student[]
  onView: (student: Student) => void
}

export default function StudentTable({
  students,
  onView,
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
          grid grid-cols-7
          border-b border-slate-200
          bg-slate-50
          px-6 py-4
          text-xs font-semibold
          uppercase tracking-wide
          text-slate-500
        "
      >
        <div>Student</div>
        <div>Class</div>
        <div>Guardian</div>
        <div>Attendance</div>
        <div>GPA</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {students.map((student) => (
        <div
          key={student.id}
          className="
            grid grid-cols-7
            items-center
            border-b border-slate-100
            px-6 py-4
            hover:bg-slate-50
          "
        >
          <div>
            <h4 className="font-semibold">
              {student.firstName}{" "}
              {student.lastName}
            </h4>

            <p className="text-xs text-slate-400">
              {student.admissionNo}
            </p>
          </div>

          <div>
            {student.grade}-{student.section}
          </div>

          <div>
            {student.guardianName}
          </div>

          <div>
            {student.attendance}%
          </div>

          <div>
            {student.gpa}
          </div>

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
              {student.status}
            </span>
          </div>

          <div className="flex gap-2">

            <button
              onClick={() =>
                onView(student)
              }
              className="
                rounded-lg
                p-2
                hover:bg-slate-100
              "
            >
              <FiEye />
            </button>

            <button
              className="
                rounded-lg
                p-2
                hover:bg-slate-100
              "
            >
              <FiEdit />
            </button>

            <button
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
    </div>
  )
}