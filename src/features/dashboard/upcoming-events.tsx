import {
  FiCalendar,
  FiArrowUpRight,
} from "react-icons/fi";

const events = [
  {
    title: "Annual Sports Day",
    date: "08",
    month: "NOV",
    year: "2026",
    category: "Sports",
    categoryColor:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  },
  {
    title: "Science Exhibition",
    date: "15",
    month: "NOV",
    year: "2026",
    category: "Academic",
    categoryColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    title: "Parent Teacher Meeting",
    date: "22",
    month: "NOV",
    year: "2026",
    category: "Meeting",
    categoryColor:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

export default function UpcomingEvents() {
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
            Upcoming Events
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            School activities and scheduled events
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
          View Calendar
          <FiArrowUpRight size={14} />
        </button>
      </div>

      {/* Event List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-800
              p-4
              transition-all
              duration-300
              hover:border-cyan-300
              dark:hover:border-cyan-700
              hover:bg-slate-50
              dark:hover:bg-slate-800/40
            "
          >
            {/* Date Box */}
            <div
              className="
                flex
                h-16
                w-16
                flex-col
                items-center
                justify-center
                rounded-2xl
                bg-cyan-50
                dark:bg-cyan-950/30
                border
                border-cyan-100
                dark:border-cyan-900
                shrink-0
              "
            >
              <span className="text-lg font-bold text-cyan-700 dark:text-cyan-400">
                {event.date}
              </span>

              <span className="text-[10px] font-semibold text-slate-500 uppercase">
                {event.month}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {event.title}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`
                    rounded-full
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    ${event.categoryColor}
                  `}
                >
                  {event.category}
                </span>

                <span className="text-xs text-slate-400">
                  {event.month} {event.date}, {event.year}
                </span>
              </div>
            </div>

            {/* Icon */}
            <div
              className="
                hidden
                md:flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                dark:bg-slate-800
                text-slate-500
                group-hover:text-cyan-600
                transition-colors
              "
            >
              <FiCalendar size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}