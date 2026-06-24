import {
  FiUsers,
  FiBookOpen,
  FiHome,
  FiDollarSign,
} from "react-icons/fi";

import StatCard from "./stat-card";

const stats = [
  {
    title: "Students",
    value: "1,284",
    growth: "+24 this week",
    icon: <FiUsers />,
    color: `
      bg-cyan-100
      text-cyan-700
      dark:bg-cyan-900/30
      dark:text-cyan-400
    `,
  },
  {
    title: "Teachers",
    value: "87",
    growth: "+3 this week",
    icon: <FiBookOpen />,
    color: `
      bg-orange-100
      text-orange-700
      dark:bg-orange-900/30
      dark:text-orange-400
    `,
  },
  {
    title: "Classes",
    value: "42",
    growth: "+1 this week",
    icon: <FiHome />,
    color: `
      bg-emerald-100
      text-emerald-700
      dark:bg-emerald-900/30
      dark:text-emerald-400
    `,
  },
  {
    title: "Fees Collected",
    value: "₹184k",
    growth: "+12% this week",
    icon: <FiDollarSign />,
    color: `
      bg-yellow-100
      text-yellow-700
      dark:bg-yellow-900/30
      dark:text-yellow-400
    `,
  },
];

export default function StatsGrid() {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2
            className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
            "
          >
            School Overview
          </h2>

          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Real-time school performance metrics
          </p>
        </div>

        <div
          className="
            hidden
            md:flex
            items-center
            rounded-xl
            border
            border-slate-200
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            px-3
            py-2
            text-xs
            text-slate-500
            dark:text-slate-400
          "
        >
          Last updated: Just now
        </div>
      </div>

      {/* Stats Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            growth={item.growth}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}