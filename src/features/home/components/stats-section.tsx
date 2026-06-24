import {
  Users,
  School,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,000+",
    label: "Students Managed",
  },
  {
    icon: School,
    value: "500+",
    label: "Schools",
  },
  {
    icon: BarChart3,
    value: "98%",
    label: "Attendance Accuracy",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "System Uptime",
  },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
                  <Icon className="h-6 w-6 text-cyan-600" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}