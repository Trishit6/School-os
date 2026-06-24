import {
  FiBell,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const announcements = [
  {
    title: "Annual Sports Day on June 8",
    description:
      "All students gather at the main field by 8:00 AM.",
    date: "Today",
    priority: "High",
  },
  {
    title: "Midterm Schedule Published",
    description:
      "Exams page has been updated with new dates.",
    date: "Yesterday",
    priority: "Medium",
  },
  {
    title: "Parent Teacher Meeting",
    description:
      "PTM will be conducted next Friday.",
    date: "2 days ago",
    priority: "Normal",
  },
];

export default function Announcements() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Announcements
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Latest school updates
          </p>
        </div>

        <button className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl
              border border-slate-200 dark:border-slate-700
              p-4
              hover:border-cyan-300
              dark:hover:border-cyan-700
              transition-all
              cursor-pointer
            "
          >
            <div className="flex justify-between gap-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                  <FiBell />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs text-slate-400">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}