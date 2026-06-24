import { Link } from "@tanstack/react-router";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPlus,
} from "react-icons/fi";

const exams = [
  {
    className: "Class 10",
    subject: "Mathematics",
    examType: "Midterm",
    month: "MAY",
    date: "12",
    day: "Tue",
    duration: "2 Hours",
    room: "Hall A",
  },
  {
    className: "Class 11",
    subject: "Physics",
    examType: "Midterm",
    month: "MAY",
    date: "14",
    day: "Thu",
    duration: "2 Hours",
    room: "Hall B",
  },
  {
    className: "Class 10",
    subject: "English Literature",
    examType: "Quiz",
    month: "MAY",
    date: "09",
    day: "Sat",
    duration: "45 Min",
    room: "Hall C",
  },
  {
    className: "Class 12",
    subject: "Biology",
    examType: "Final",
    month: "JUN",
    date: "02",
    day: "Tue",
    duration: "3 Hours",
    room: "Lab 1",
  },
  {
    className: "Class 9",
    subject: "History",
    examType: "Midterm",
    month: "MAY",
    date: "18",
    day: "Mon",
    duration: "1h 30m",
    room: "Hall D",
  },
];

export default function ExamsComponent() {
  return (
    <div>
      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white px-7 py-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-100 text-[#0b8ca1] text-[11px] font-semibold uppercase">
              Academics
            </span>

            <h1 className="mt-4 text-[38px] font-bold text-slate-900 leading-none">
              Exams
            </h1>

            <p className="mt-3 text-[15px] text-slate-500">
              Upcoming examinations and assessment schedules.
            </p>
          </div>

          <Link
            to="/add-exams"
            className="h-11 px-5 rounded-2xl bg-[#0b8ca1] hover:bg-[#09798a] transition text-white font-semibold text-[14px] flex items-center gap-2 shadow-sm"
          >
            <FiPlus size={18} />
            Schedule Exam
          </Link>
        </div>
      </div>

      {/* EXAM LIST */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-5
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              {/* TOP */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-flex h-8 items-center rounded-full border border-slate-200 px-3 text-[13px] font-semibold text-slate-700">
                    {exam.className}
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-slate-900">
                    {exam.examType} — {exam.subject}
                  </h2>
                </div>

                <div className="h-16 w-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-bold text-[#0b8ca1] tracking-wider">
                    {exam.month}
                  </span>

                  <span className="text-[28px] font-bold leading-none text-[#0b8ca1]">
                    {exam.date}
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-5 border-t border-slate-200" />

              {/* DETAILS */}
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <FiCalendar size={15} />
                  <span>{exam.day}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiClock size={15} />
                  <span>{exam.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMapPin size={15} />
                  <span>{exam.room}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}