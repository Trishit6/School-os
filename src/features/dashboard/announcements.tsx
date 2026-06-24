import { Link } from "@tanstack/react-router";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
} from "react-icons/fi";

const announcements = [
  {
    title: "Annual Sports Day",
    description:
      "All students must report to the main sports ground by 8:00 AM.",
    date: "08 Nov 2026",
    priority: "Important",
  },
  {
    title: "Midterm Examination Schedule",
    description:
      "Exam dates and seating arrangements have been published.",
    date: "12 Nov 2026",
    priority: "Academic",
  },
  {
    title: "Parent Teacher Meeting",
    description:
      "PTM will be conducted for Grades 6-12 this month.",
    date: "22 Nov 2026",
    priority: "Event",
  },
];

export default function Announcements() {
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
            Announcements
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Latest updates and school notices
          </p>
        </div>

        <Link
          to="/announcements"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-200
            dark:border-cyan-900
            px-3
            py-2
            text-sm
            font-medium
            text-cyan-700
            dark:text-cyan-400
            hover:bg-cyan-50
            dark:hover:bg-cyan-950/30
            transition
          "
        >
          View All
          <FiArrowRight size={15} />
        </Link>
      </div>

      {/* Announcement List */}
      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.title}
            className="
              group
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
            "
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
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
                "
              >
                <FiBell size={18} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className="
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      rounded-full
                      bg-cyan-100
                      dark:bg-cyan-900/40
                      px-2.5
                      py-1
                      text-[11px]
                      font-medium
                      text-cyan-700
                      dark:text-cyan-400
                    "
                  >
                    {item.priority}
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-slate-400
                  "
                >
                  <FiCalendar size={13} />
                  {item.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}