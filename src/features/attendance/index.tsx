import { useState } from "react"

import {
  FiCheck,
  FiClock,
  FiX,
} from "react-icons/fi"

const initialStudents = [
  {
    name: "Aisha Khan",
    id: "S-1042",
    initials: "AK",
    status: "present",
  },
  {
    name: "Liam Carter",
    id: "S-1043",
    initials: "LC",
    status: "present",
  },
  {
    name: "Mei Tanaka",
    id: "S-1044",
    initials: "MT",
    status: "present",
  },
  {
    name: "Diego Alvarez",
    id: "S-1045",
    initials: "DA",
    status: "absent",
  },
  {
    name: "Noah Becker",
    id: "S-1046",
    initials: "NB",
    status: "present",
  },
  {
    name: "Zara Ahmed",
    id: "S-1047",
    initials: "ZA",
    status: "late",
  },
]

const classes = [
  {
    name: "Grade 10 — A",
    details: "30 present · 0 late · 2 absent",
    percent: "94%",
  },
  {
    name: "Grade 10 — B",
    details: "27 present · 1 late · 2 absent",
    percent: "90%",
  },
  {
    name: "Grade 9 — A",
    details: "26 present · 1 late · 1 absent",
    percent: "93%",
  },
  {
    name: "Grade 9 — B",
    details: "25 present · 1 late · 3 absent",
    percent: "86%",
  },
  {
    name: "Grade 11 — A",
    details: "24 present · 1 late · 1 absent",
    percent: "92%",
  },
  {
    name: "Grade 12 — A",
    details: "22 present · 0 late · 2 absent",
    percent: "92%",
  },
]

export default function AttendanceComponent() {

  const [students, setStudents] =
    useState(initialStudents)

  const updateStatus = (
    index: number,
    status: string
  ) => {

    const updated = [...students]

    updated[index].status = status

    setStudents(updated)
  }

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* HEADER */}
      <div className="flex items-start justify-between border-b border-slate-200 bg-white px-5 py-5">

        <div>
          <div className="inline-flex rounded-full bg-[#dff4f7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0b8ca1]">
            Academics
          </div>

          <h1 className="mt-2 text-[42px] font-bold leading-none text-slate-900">
            Attendance
          </h1>

          <p className="mt-2 text-[13px] text-slate-500">
            Thursday, May 7 · Period 2
          </p>
        </div>

        <button className="mt-2 rounded-xl bg-[#0b8ca1] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#09788a]">
          Save roll call
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        {/* STATS */}
        <div className="grid grid-cols-4 gap-3">

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-[12px] text-slate-500">
              Overall today
            </p>

            <h2 className="mt-2 text-[34px] font-bold text-slate-900">
              91%
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-[12px] text-slate-500">
              Present
            </p>

            <h2 className="mt-2 text-[34px] font-bold text-[#4bbf73]">
              154
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-[12px] text-slate-500">
              Late
            </p>

            <h2 className="mt-2 text-[34px] font-bold text-[#f0ad4e]">
              4
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-[12px] text-slate-500">
              Absent
            </p>

            <h2 className="mt-2 text-[34px] font-bold text-[#ef4444]">
              11
            </h2>
          </div>
        </div>

        {/* MAIN */}
        <div className="mt-4 grid grid-cols-[1fr_340px] gap-4">

          {/* LEFT */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="px-4 pt-4">
              <h3 className="text-[16px] font-semibold text-slate-900">
                Class roll · Grade 10 — A
              </h3>
            </div>

            <div className="px-4 py-2">

              {students.map((student, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between border-b border-slate-100 py-3 last:border-none"
                >

                  {/* STUDENT */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7f1f6] text-[13px] font-bold text-[#0b8ca1]">
                      {student.initials}
                    </div>

                    <div>
                      <h4 className="text-[15px] font-semibold text-slate-900">
                        {student.name}
                      </h4>

                      <p className="text-[12px] text-slate-400">
                        {student.id}
                      </p>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-2">

                    {/* PRESENT */}
                    <button
                      onClick={() =>
                        updateStatus(index, "present")
                      }
                      className={`flex h-9 items-center gap-1 rounded-xl border px-3 text-[12px] font-medium transition
                      ${
                        student.status === "present"
                          ? "border-[#0b8ca1] bg-[#0b8ca1] text-white"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <FiCheck size={14} />
                      Present
                    </button>

                    {/* LATE */}
                    <button
                      onClick={() =>
                        updateStatus(index, "late")
                      }
                      className={`flex h-9 items-center gap-1 rounded-xl border px-3 text-[12px] font-medium transition
                      ${
                        student.status === "late"
                          ? "border-[#0b8ca1] bg-[#0b8ca1] text-white"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <FiClock size={14} />
                      Late
                    </button>

                    {/* ABSENT */}
                    <button
                      onClick={() =>
                        updateStatus(index, "absent")
                      }
                      className={`flex h-9 items-center gap-1 rounded-xl border px-3 text-[12px] font-medium transition
                      ${
                        student.status === "absent"
                          ? "border-[#ef4444] bg-[#ef4444] text-white"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <FiX size={14} />
                      Absent
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            <h3 className="text-[16px] font-semibold text-slate-900">
              By class
            </h3>

            <div className="mt-4 space-y-3">

              {classes.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 px-4 py-3"
                >

                  <div className="flex items-start justify-between">

                    <div>
                      <h4 className="text-[14px] font-semibold text-slate-900">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-[11px] text-slate-500">
                        {item.details}
                      </p>
                    </div>

                    <div className="rounded-full bg-[#eef2f7] px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      {item.percent}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}