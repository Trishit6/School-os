import {
  FiUserPlus,
  FiCheckSquare,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";

const actions = [
  {
    title: "Enroll Student",
    icon: <FiUserPlus />,
  },
  {
    title: "Mark Attendance",
    icon: <FiCheckSquare />,
  },
  {
    title: "Schedule Exam",
    icon: <FiCalendar />,
  },
  {
    title: "Generate Invoice",
    icon: <FiDollarSign />,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {actions.map((action) => (
          <button
            key={action.title}
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border border-slate-200 dark:border-slate-700
              bg-slate-50 dark:bg-slate-900
              px-4
              py-4
              text-left
              transition-all
              hover:border-cyan-300
              hover:bg-cyan-50
              dark:hover:bg-cyan-900/20
            "
          >
            <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
              {action.icon}
            </div>

            <span className="font-medium text-slate-800 dark:text-slate-100">
              {action.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}