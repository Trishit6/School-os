import {
  FiUsers,
  FiBookOpen,
  FiHome,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Students",
    value: "1,284",
    change: "+24 this week",
    icon: FiUsers,
    iconBg:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  },
  {
    title: "Teachers",
    value: "87",
    change: "+3 this week",
    icon: FiBookOpen,
    iconBg:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    title: "Classes",
    value: "42",
    change: "+1 this week",
    icon: FiHome,
    iconBg:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    title: "Fees Collected",
    value: "₹184K",
    change: "+12% this week",
    icon: FiDollarSign,
    iconBg:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-3xl
              border border-slate-200 dark:border-slate-700
              bg-white dark:bg-slate-800
              p-6
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  {item.value}
                </h2>

                <div className="flex items-center gap-1 mt-3 text-emerald-600 dark:text-emerald-400">
                  <FiTrendingUp size={14} />

                  <span className="text-sm font-medium">
                    {item.change}
                  </span>
                </div>
              </div>

              <div
                className={`
                  h-14
                  w-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  ${item.iconBg}
                `}
              >
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}