import { Link } from "@tanstack/react-router";
import {
  FiArrowRight,
  FiBell,
  FiBookOpen,
  FiClipboard,
  FiDollarSign,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";

const actions = [
  {
    title: "Enroll Student",
    description: "Add a new student record",
    icon: <FiUserPlus size={18} />,
    to: "/students",
  },
  {
    title: "Attendance",
    description: "Mark today's attendance",
    icon: <FiClipboard size={18} />,
    to: "/attendance",
  },
  {
    title: "Schedule Exam",
    description: "Create examination timetable",
    icon: <FiBookOpen size={18} />,
    to: "/exams",
  },
  {
    title: "Generate Invoice",
    description: "Create student fee invoices",
    icon: <FiDollarSign size={18} />,
    to: "/fees",
  },
  {
    title: "Announcement",
    description: "Notify students and staff",
    icon: <FiBell size={18} />,
    to: "/announcements",
  },
  {
    title: "Teachers",
    description: "Manage teacher records",
    icon: <FiUsers size={18} />,
    to: "/teachers",
  },
];

export default function QuickActions() {
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
          <h2
            className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
            "
          >
            Quick Actions
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Frequently used shortcuts
          </p>
        </div>

        <span
          className="
            rounded-full
            bg-cyan-100
            dark:bg-cyan-900/30
            px-3
            py-1
            text-xs
            font-medium
            text-cyan-700
            dark:text-cyan-400
          "
        >
          ERP Tools
        </span>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.to}
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-800
              bg-slate-50
              dark:bg-slate-800/50
              p-4
              transition-all
              duration-300
              hover:border-cyan-300
              dark:hover:border-cyan-700
              hover:bg-cyan-50
              dark:hover:bg-cyan-950/20
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-100
                  dark:bg-cyan-900/30
                  text-cyan-700
                  dark:text-cyan-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {action.icon}
              </div>

              <div>
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {action.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {action.description}
                </p>
              </div>
            </div>

            <FiArrowRight
              size={16}
              className="
                text-slate-400
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-cyan-600
              "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}