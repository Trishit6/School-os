const colors = [
  "bg-cyan-50 border-cyan-200 text-cyan-700",
  "bg-purple-50 border-purple-200 text-purple-700",
  "bg-orange-50 border-orange-200 text-orange-700",
  "bg-green-50 border-green-200 text-green-700",
  "bg-red-50 border-red-200 text-red-700",
]

export default function TimetableComponent() {

  const timetable = [
    ["Mathematics", "Physics", "English", "History", "Biology", "PE"],
    ["English", "Mathematics", "Chemistry", "Biology", "CS", "Art"],
    ["Physics", "History", "Mathematics", "English", "PE", "Music"],
    ["Biology", "English", "CS", "Mathematics", "History", "Lab"],
    ["Chemistry", "PE", "Mathematics", "English", "Physics", "Library"],
  ]

  const times = ["08:00", "09:00", "10:00", "11:30", "12:30", "13:30"]

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

  return (
    <div className="p-5 bg-[#f6f8fb] min-h-screen">

      {/* HEADER */}
      <div className="flex items-start justify-between mb-5">

        <div>
          <span className="px-3 py-1 rounded-full bg-cyan-100 text-[#0b8ca1] text-[10px] font-semibold">
            ACADEMICS
          </span>

          <h1 className="text-[34px] font-bold mt-2 text-slate-900">
            Timetable
          </h1>

          <p className="text-slate-500 text-sm mt-1">
            Grade 10 — A · Spring Term 2026
          </p>
        </div>

        <div className="flex gap-2">
          <button className="h-10 px-5 rounded-xl border border-slate-200 bg-white text-sm font-medium shadow-sm">
            Print
          </button>

          <button className="h-10 px-5 rounded-xl bg-[#0b8ca1] text-white text-sm font-medium shadow-sm">
            Edit schedule
          </button>
        </div>
      </div>

      {/* TIMETABLE */}
      <div className="bg-white border border-slate-200 rounded-[24px] p-5 overflow-x-auto shadow-sm">

        {/* TIME */}
        <div className="grid grid-cols-7 gap-3 mb-3 min-w-[1000px]">
          <div></div>

          {times.map((time) => (
            <div
              key={time}
              className="text-center text-[12px] font-semibold text-slate-500"
            >
              {time}
            </div>
          ))}
        </div>

        {/* ROWS */}
        <div className="space-y-3 min-w-[1000px]">

          {timetable.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-7 gap-3"
            >

              {/* DAY */}
              <div className="flex items-center justify-center text-sm font-semibold text-slate-600">
                {days[rowIndex]}
              </div>

              {/* SUBJECTS */}
              {row.map((subject, i) => {

                const color = colors[i % colors.length]

                return (
                  <div
                    key={i}
                    className={`rounded-[20px] border px-4 py-3 min-h-[82px] transition hover:shadow-sm ${color}`}
                  >
                    <h3 className="text-[15px] font-semibold">
                      {subject}
                    </h3>

                    <p className="text-[12px] mt-1 opacity-70">
                      Room 204
                    </p>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}