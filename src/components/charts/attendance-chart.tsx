import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "W1", value: 72 },
  { week: "W2", value: 80 },
  { week: "W3", value: 72 },
  { week: "W4", value: 84 },
  { week: "W5", value: 81 },
  { week: "W6", value: 90 },
  { week: "W7", value: 93 },
  { week: "W8", value: 100 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg px-4 py-3">
      <p className="font-medium text-slate-800 dark:text-slate-100">
        {payload[0].payload.week}
      </p>

      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
        Attendance: {payload[0].value}%
      </p>
    </div>
  );
};

export default function AttendanceChart() {
  return (
    <div
      className="
        rounded-3xl
        border border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800
        p-4 sm:p-6
        shadow-sm
        transition-all
      "
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
            Attendance Trend
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            School-wide attendance rate
          </p>
        </div>

        <span
          className="
            self-start
            rounded-2xl
            bg-cyan-50 dark:bg-cyan-900/30
            text-cyan-700 dark:text-cyan-300
            px-4 py-2
            text-sm
            font-medium
          "
        >
          94.2% Avg
        </span>
      </div>

      <div className="h-[280px] sm:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="attendanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#06b6d4"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="week"
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[60, 100]}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#0891b2"
              strokeWidth={4}
              fill="url(#attendanceGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}