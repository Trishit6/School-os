import {
  FiPlus,
  FiBookOpen,
  FiUsers,
  FiMapPin,
} from "react-icons/fi";

const classes = [
  {
    code: "C-10A",
    name: "Grade 10 - A",
    lead: "Dr. Helen Park",
    room: "204",
    students: "32",
    subjects: "8",
  },
  {
    code: "C-10B",
    name: "Grade 10 - B",
    lead: "Ms. Farah Idris",
    room: "206",
    students: "30",
    subjects: "8",
  },
  {
    code: "C-09A",
    name: "Grade 9 - A",
    lead: "Mr. Samuel Doyle",
    room: "112",
    students: "28",
    subjects: "7",
  },
  {
    code: "C-09B",
    name: "Grade 9 - B",
    lead: "Ms. Camila Rosa",
    room: "114",
    students: "29",
    subjects: "7",
  },
  {
    code: "C-11A",
    name: "Grade 11 - A",
    lead: "Mr. Adam Levi",
    room: "301",
    students: "26",
    subjects: "8",
  },
  {
    code: "C-12A",
    name: "Grade 12 - A",
    lead: "Mr. Kenji Sato",
    room: "305",
    students: "24",
    subjects: "8",
  },
];

export default function ClassesComponent() {
  return (
    <div className="space-y-5">
      {/* HEADER */}
      <div
        className="
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-800
          bg-white
          dark:bg-slate-900
          p-5
        "
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-cyan-100
                dark:bg-cyan-950/40
                px-3
                py-1
                text-xs
                font-semibold
                text-cyan-700
                dark:text-cyan-400
              "
            >
              Academic Management
            </span>

            <h1
              className="
                mt-3
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Classes
            </h1>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Manage classrooms, teachers and student allocations.
            </p>
          </div>

          <button
            className="
              h-11
              px-5
              rounded-2xl
              bg-cyan-600
              hover:bg-cyan-700
              text-white
              text-sm
              font-semibold
              flex
              items-center
              gap-2
              transition
            "
          >
            <FiPlus size={16} />
            New Class
          </button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          className="
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            p-5
          "
        >
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Total Classes
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            42
          </h2>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            p-5
          "
        >
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Students
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            1,284
          </h2>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            p-5
          "
        >
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Teachers Assigned
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            87
          </h2>
        </div>
      </div>

      {/* CLASS CARDS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
        "
      >
        {classes.map((item) => (
          <div
            key={item.code}
            className="
              rounded-3xl
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-5
              hover:border-cyan-500
              transition-all
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <span
                  className="
                    text-xs
                    font-semibold
                    text-cyan-600
                    dark:text-cyan-400
                  "
                >
                  {item.code}
                </span>

                <h3
                  className="
                    mt-2
                    text-lg
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.lead}
                </p>
              </div>

              <div
                className="
                  h-11
                  w-11
                  rounded-2xl
                  bg-cyan-100
                  dark:bg-cyan-950/40
                  text-cyan-700
                  dark:text-cyan-400
                  flex
                  items-center
                  justify-center
                "
              >
                <FiBookOpen size={18} />
              </div>
            </div>

            <div className="mt-5 border-t border-slate-200 dark:border-slate-800 pt-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-slate-500">
                    Room
                  </p>

                  <div className="flex items-center gap-1 mt-1">
                    <FiMapPin size={12} />
                    <span className="font-semibold">
                      {item.room}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Students
                  </p>

                  <p className="mt-1 font-semibold">
                    {item.students}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Subjects
                  </p>

                  <p className="mt-1 font-semibold">
                    {item.subjects}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}