import {
  FiPlus,
  FiMail,
} from "react-icons/fi"

const teachers = [
  {
    name: "Dr. Helen Park",
    subject: "Mathematics",
    email: "h.park@school.edu",
    classes: "5 classes",
    since: "Since 2017",
    initial: "P",
  },
  {
    name: "Mr. Samuel Doyle",
    subject: "Physics",
    email: "s.doyle@school.edu",
    classes: "4 classes",
    since: "Since 2015",
    initial: "D",
  },
  {
    name: "Ms. Farah Idris",
    subject: "English Literature",
    email: "f.idris@school.edu",
    classes: "6 classes",
    since: "Since 2019",
    initial: "I",
  },
  {
    name: "Mr. Kenji Sato",
    subject: "History",
    email: "k.sato@school.edu",
    classes: "3 classes",
    since: "Since 2012",
    initial: "S",
  },
  {
    name: "Ms. Camila Rosa",
    subject: "Biology",
    email: "c.rosa@school.edu",
    classes: "4 classes",
    since: "Since 2020",
    initial: "R",
  },
  {
    name: "Mr. Adam Levi",
    subject: "Computer Science",
    email: "a.levi@school.edu",
    classes: "5 classes",
    since: "Since 2021",
    initial: "L",
  },
]

export default function TeachersComponent() {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* HEADER */}
      <div className="flex items-start justify-between px-5 py-5 border-b border-slate-200 bg-white">

        <div>
          <span className="px-3 py-1 rounded-full bg-[#dff4f7] text-[#0b8ca1] text-[10px] font-bold uppercase tracking-wide">
            People
          </span>

          <h1 className="mt-3 text-[28px] font-bold text-slate-900 leading-none">
            Teachers
          </h1>

          <p className="mt-2 text-[14px] text-slate-500">
            Faculty directory and class assignments.
          </p>
        </div>

        <button className="h-[46px] px-5 rounded-2xl bg-[#0b8ca1] text-white text-[14px] font-semibold flex items-center gap-2 hover:bg-[#09798b] transition">
          <FiPlus size={16} />
          Add teacher
        </button>
      </div>

      {/* GRID */}
      <div className="p-5 grid grid-cols-3 gap-4">

        {teachers.map((teacher) => (
          <div
            key={teacher.email}
            className="
              bg-white
              rounded-[24px]
              overflow-hidden
              border
              border-slate-200
              shadow-sm
            "
          >

            {/* TOP */}
            <div className="h-[92px] bg-gradient-to-r from-[#007d94] via-[#8f9b82] to-[#f2ab57] relative">

              {/* AVATAR */}
              <div className="
                absolute
                left-4
                bottom-[-18px]
                h-[54px]
                w-[54px]
                rounded-[18px]
                bg-[#f8fafc]
                border
                border-slate-200
                shadow-sm
                flex
                items-center
                justify-center
                text-[#007d94]
                text-[24px]
                font-bold
              ">
                {teacher.initial}
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-4 pt-8 pb-4">

              <h2 className="text-[17px] font-bold text-slate-900">
                {teacher.name}
              </h2>

              <p className="mt-1 text-[14px] text-slate-500">
                {teacher.subject}
              </p>

              {/* TAGS */}
              <div className="flex gap-2 mt-4">

                <span className="h-[26px] px-3 rounded-full border border-slate-300 flex items-center text-[12px] font-medium text-slate-700">
                  {teacher.classes}
                </span>

                <span className="h-[26px] px-3 rounded-full border border-slate-300 flex items-center text-[12px] font-medium text-slate-700">
                  {teacher.since}
                </span>
              </div>

              {/* LINE */}
              <div className="h-[1px] bg-slate-200 my-4" />

              {/* FOOTER */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-slate-500 text-[13px]">
                  <FiMail size={14} />
                  {teacher.email}
                </div>

                <button className="text-[12px] font-semibold text-slate-700 hover:text-[#0b8ca1]">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}