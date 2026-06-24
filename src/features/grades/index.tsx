const students = [
  {
    name: "Aisha Khan",
    subject: "Mathematics",
    score: 94,
    grade: "A",
    remark: "Outstanding",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-700",
  },
  {
    name: "Liam Carter",
    subject: "Physics",
    score: 78,
    grade: "B+",
    remark: "Solid effort",
    color: "bg-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Mei Tanaka",
    subject: "English Lit",
    score: 97,
    grade: "A+",
    remark: "Exceptional writing",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-700",
  },
  {
    name: "Diego Alvarez",
    subject: "Biology",
    score: 65,
    grade: "C",
    remark: "Needs review",
    color: "bg-orange-400",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    name: "Noah Becker",
    subject: "History",
    score: 88,
    grade: "A-",
    remark: "Strong analysis",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-700",
  },
  {
    name: "Zara Ahmed",
    subject: "Chemistry",
    score: 81,
    grade: "B+",
    remark: "Improving",
    color: "bg-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
  },
]

export default function GradesComponent() {
  return (
    <div className="bg-[#f6f8fb] min-h-screen">

      {/* HEADER */}
      <div className="bg-white border-b border-slate-200 px-7 py-8">

        <div className="flex items-start justify-between">

          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-100 text-[#0b8ca1] text-[10px] font-semibold tracking-wide">
              ACADEMICS
            </span>

            <h1 className="text-[38px] leading-none font-bold text-slate-900 mt-4">
              Gradebook
            </h1>

            <p className="text-[15px] text-slate-500 mt-4">
              Recent assessment results across all subjects.
            </p>
          </div>

          <button className="h-11 px-6 rounded-2xl bg-[#0b8ca1] hover:bg-[#09788a] transition text-white font-semibold text-[15px] shadow-sm">
            Enter grades
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="p-7">

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-5 px-8 py-5 border-b border-slate-200 text-[15px] font-semibold text-slate-500">

            <div>Student</div>
            <div>Subject</div>
            <div>Score</div>
            <div>Grade</div>
            <div>Remark</div>
          </div>

          {/* ROWS */}
          {students.map((student, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center px-8 py-5 border-b border-slate-100 last:border-none hover:bg-slate-50 transition"
            >

              {/* NAME */}
              <div className="font-semibold text-[16px] text-slate-900">
                {student.name}
              </div>

              {/* SUBJECT */}
              <div className="text-[15px] text-slate-500">
                {student.subject}
              </div>

              {/* SCORE */}
              <div className="flex items-center gap-4">

                <div className="w-[96px] h-[6px] rounded-full bg-slate-200 overflow-hidden">

                  <div
                    className={`h-full rounded-full ${student.color}`}
                    style={{
                      width: `${student.score}%`,
                    }}
                  />
                </div>

                <span className="text-[15px] text-slate-700">
                  {student.score}
                </span>
              </div>

              {/* GRADE */}
              <div>
                <span
                  className={`inline-flex h-8 items-center rounded-full px-4 text-[13px] font-semibold ${student.badge}`}
                >
                  {student.grade}
                </span>
              </div>

              {/* REMARK */}
              <div className="text-[15px] text-slate-500">
                {student.remark}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}