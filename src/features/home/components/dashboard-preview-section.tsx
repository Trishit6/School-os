import {
  Users,
  UserCheck,
  GraduationCap,
  Wallet,
  TrendingUp,
  CalendarCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1,284",
    label: "Students",
  },
  {
    icon: UserCheck,
    value: "87",
    label: "Teachers",
  },
  {
    icon: CalendarCheck,
    value: "94.2%",
    label: "Attendance",
  },
  {
    icon: Wallet,
    value: "₹184K",
    label: "Collected",
  },
];

export function DashboardPreviewSection() {
  return (
    <section
      id="dashboard"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
            Dashboard Preview
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Powerful Insights At Your Fingertips
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Monitor attendance, students, teachers, finances,
            examinations and performance from a single dashboard.
          </p>
        </div>

        <div className="relative">
          {/* Floating Cards */}
          <div className="absolute -left-6 top-10 hidden rounded-2xl border bg-white p-4 shadow-lg lg:block">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-xs text-slate-500">
                  Growth
                </p>
                <h4 className="font-bold text-slate-900">
                  +18%
                </h4>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 bottom-10 hidden rounded-2xl border bg-white p-4 shadow-lg lg:block">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-cyan-600" />
              <div>
                <p className="text-xs text-slate-500">
                  Results
                </p>
                <h4 className="font-bold text-slate-900">
                  92.4%
                </h4>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="overflow-hidden rounded-[32px] border bg-white shadow-2xl">
            <div className="border-b bg-slate-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>

            <div className="grid lg:grid-cols-4">
              {/* Sidebar */}
              <div className="border-r bg-slate-900 p-6 text-white">
                <h3 className="mb-8 text-xl font-bold">
                  Skoolix
                </h3>

                <div className="space-y-3">
                  {[
                    "Dashboard",
                    "Students",
                    "Teachers",
                    "Attendance",
                    "Exams",
                    "Fees",
                    "Reports",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`rounded-xl px-4 py-3 ${
                        item === "Dashboard"
                          ? "bg-cyan-600"
                          : "bg-slate-800"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="col-span-3 p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    School Overview
                  </h3>

                  <p className="text-slate-500">
                    Real-time statistics and performance.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl border p-5"
                      >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                          <Icon className="h-6 w-6 text-cyan-600" />
                        </div>

                        <h4 className="text-2xl font-bold text-slate-900">
                          {stat.value}
                        </h4>

                        <p className="text-sm text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border p-6">
                    <h4 className="font-semibold text-slate-900">
                      Attendance Trend
                    </h4>

                    <div className="mt-6 flex h-40 items-end gap-2">
                      {[50, 80, 70, 95, 85, 90, 100].map(
                        (value, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-lg bg-cyan-500"
                            style={{
                              height: `${value}%`,
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border p-6">
                    <h4 className="font-semibold text-slate-900">
                      Recent Activity
                    </h4>

                    <div className="mt-5 space-y-4">
                      {[
                        "New student enrolled",
                        "Exam result published",
                        "Fee payment received",
                        "Attendance updated",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-cyan-600" />

                          <p className="text-sm text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}