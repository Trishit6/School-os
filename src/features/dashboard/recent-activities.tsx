import {
  FiUserPlus,
  FiCalendar,
  FiDollarSign,
  FiBook,
  FiArrowUpRight,
} from "react-icons/fi";

const activities = [
  {
    icon: <FiUserPlus size={16} />,
    title: "New Student Enrolled",
    description: "Rahul Sharma joined Grade 8A",
    time: "10:30 AM",
    color:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  },
  {
    icon: <FiCalendar size={16} />,
    title: "Attendance Updated",
    description: "Attendance submitted for Grade 10",
    time: "11:15 AM",
    color:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: <FiDollarSign size={16} />,
    title: "Fee Invoice Generated",
    description: "Monthly invoice created for 45 students",
    time: "12:05 PM",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    icon: <FiBook size={16} />,
    title: "Exam Schedule Published",
    description: "Midterm examination timetable released",
    time: "01:40 PM",
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

export default function RecentActivities() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Activities
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Latest actions across your school
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-cyan-600
            hover:text-cyan-700
          "
        >
          View All
          <FiArrowUpRight size={14} />
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              flex
              gap-4
            "
          >
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  h-11
                  w-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              {index !== activities.length - 1 && (
                <div
                  className="
                    mt-2
                    w-px
                    flex-1
                    bg-slate-200
                    dark:bg-slate-700
                  "
                />
              )}
            </div>

            {/* Content */}
            <div
              className="
                flex-1
                rounded-2xl
                border
                border-slate-100
                dark:border-slate-800
                p-4
                transition-all
                duration-300
                hover:border-cyan-200
                dark:hover:border-cyan-800
                hover:bg-slate-50
                dark:hover:bg-slate-800/50
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                <span
                  className="
                    whitespace-nowrap
                    text-xs
                    font-medium
                    text-slate-400
                  "
                >
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}