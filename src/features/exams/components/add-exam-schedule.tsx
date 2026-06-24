import { FiCalendar, FiClock, FiMapPin, FiBookOpen, FiSave } from "react-icons/fi";

export default function AddExamSchedulePage() {
  return (
    <div className="p-6 bg-[#f6f8fb] min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 mb-6">
          <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase">
            Academics
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Schedule Exam
          </h1>

          <p className="mt-2 text-slate-500">
            Create a new exam schedule for a class.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8">
          <form className="space-y-6">

            {/* CLASS + SUBJECT */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Class
                </label>

                <select className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600">
                  <option>Select Class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>

                <div className="relative">
                  <FiBookOpen className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Mathematics"
                    className="w-full h-12 rounded-xl border border-slate-300 pl-11 pr-4 outline-none focus:border-cyan-600"
                  />
                </div>
              </div>
            </div>

            {/* EXAM TYPE */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Exam Type
              </label>

              <select className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600">
                <option>Midterm</option>
                <option>Final</option>
                <option>Unit Test</option>
                <option>Weekly Test</option>
                <option>Practical</option>
              </select>
            </div>

            {/* DATE + TIME */}
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Exam Date
                </label>

                <div className="relative">
                  <FiCalendar className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="date"
                    className="w-full h-12 rounded-xl border border-slate-300 pl-11 pr-4 outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Start Time
                </label>

                <div className="relative">
                  <FiClock className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="time"
                    className="w-full h-12 rounded-xl border border-slate-300 pl-11 pr-4 outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  End Time
                </label>

                <div className="relative">
                  <FiClock className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="time"
                    className="w-full h-12 rounded-xl border border-slate-300 pl-11 pr-4 outline-none focus:border-cyan-600"
                  />
                </div>
              </div>
            </div>

            {/* ROOM + MARKS */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Exam Room
                </label>

                <div className="relative">
                  <FiMapPin className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Hall A"
                    className="w-full h-12 rounded-xl border border-slate-300 pl-11 pr-4 outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Total Marks
                </label>

                <input
                  type="number"
                  placeholder="100"
                  className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
                />
              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Instructions
              </label>

              <textarea
                rows={5}
                placeholder="Enter exam instructions..."
                className="w-full rounded-xl border border-slate-300 p-4 outline-none resize-none focus:border-cyan-600"
              />
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-cyan-600 text-white flex items-center gap-2 hover:bg-cyan-700"
              >
                <FiSave />
                Save Schedule
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}