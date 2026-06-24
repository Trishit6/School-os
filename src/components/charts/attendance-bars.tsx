import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { class: "G7", value: 92 },
  { class: "G8", value: 90 },
  { class: "G9", value: 89 },
  { class: "G10", value: 88 },
  { class: "G11", value: 86 },
  { class: "G12", value: 82 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg px-4 py-3">
      <p className="font-medium text-slate-800 dark:text-slate-100">
        {payload[0].payload.class}
      </p>

      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
        Attendance: {payload[0].value}%
      </p>
    </div>
  );
};

export default function AttendanceBars() {
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
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
          Today's Attendance
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Attendance percentage by class
        </p>
      </div>

      <div className="h-[280px] sm:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="class"
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="value"
              radius={[12, 12, 0, 0]}
              animationDuration={1200}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    index % 2 === 0
                      ? "#06b6d4"
                      : "#0891b2"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}