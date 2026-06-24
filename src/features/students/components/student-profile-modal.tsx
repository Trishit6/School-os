import { FiX, FiMail, FiPhone, FiUser } from "react-icons/fi"
import type { Student } from "../types";

type Props = {
  student: Student
  onClose: () => void
}

export default function StudentProfileModal({
  student,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="relative bg-gradient-to-r from-cyan-600 to-cyan-800 p-8 text-white">

          <button
            onClick={onClose}
            className="
              absolute
              right-5
              top-5
              rounded-xl
              bg-white/10
              p-2
              hover:bg-white/20
            "
          >
            <FiX size={20} />
          </button>

          <div className="flex items-center gap-5">

            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-white/20
                text-3xl
                font-bold
              "
            >
              {student.firstName.charAt(0)}
              {student.lastName.charAt(0)}
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {student.firstName} {student.lastName}
              </h2>

              <p className="mt-1 text-cyan-100">
                Admission No: {student.admissionNo}
              </p>

              <span
                className="
                  mt-3
                  inline-block
                  rounded-full
                  bg-white/20
                  px-4
                  py-1
                  text-sm
                "
              >
                {student.status}
              </span>
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 p-8 lg:grid-cols-2">

          {/* PERSONAL */}
          <div className="rounded-2xl border border-slate-200 p-6">

            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Personal Information
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FiUser className="text-cyan-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Full Name
                  </p>
                  <p className="font-medium">
                    {student.firstName} {student.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-cyan-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>
                  <p className="font-medium">
                    {student.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-cyan-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Phone
                  </p>
                  <p className="font-medium">
                    {student.phone}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Gender
                </p>

                <p className="font-medium capitalize">
                  {student.gender}
                </p>
              </div>
            </div>
          </div>

          {/* ACADEMIC */}
          <div className="rounded-2xl border border-slate-200 p-6">

            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Academic Information
            </h3>

            <div className="space-y-4">

              <div>
                <p className="text-xs text-slate-500">
                  Class
                </p>

                <p className="font-medium">
                  {student.grade} - {student.section}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Attendance
                </p>

                <p className="font-medium">
                  {student.attendance}%
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  GPA
                </p>

                <p className="font-medium">
                  {student.gpa}
                </p>
              </div>

            </div>
          </div>

          {/* GUARDIAN */}
          <div className="rounded-2xl border border-slate-200 p-6 lg:col-span-2">

            <h3 className="mb-5 text-lg font-bold text-slate-800">
              Guardian Information
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <p className="text-xs text-slate-500">
                  Guardian Name
                </p>

                <p className="font-medium">
                  {student.guardianName}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Guardian Phone
                </p>

                <p className="font-medium">
                  {student.guardianPhone}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex justify-end border-t border-slate-200 p-5">

          <button
            onClick={onClose}
            className="
              rounded-xl
              bg-slate-900
              px-5
              py-2.5
              text-white
              hover:bg-slate-800
            "
          >
            Close
          </button>

        </div>
      </div>
    </div>
  )
}