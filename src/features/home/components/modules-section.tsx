import {
  Users,
  UserCog,
  CalendarCheck,
  Clock3,
  FileSpreadsheet,
  GraduationCap,
  Wallet,
  Megaphone,
} from "lucide-react";

const modules = [
  {
    icon: Users,
    name: "Students",
  },
  {
    icon: UserCog,
    name: "Teachers",
  },
  {
    icon: CalendarCheck,
    name: "Attendance",
  },
  {
    icon: Clock3,
    name: "Timetable",
  },
  {
    icon: FileSpreadsheet,
    name: "Examinations",
  },
  {
    icon: GraduationCap,
    name: "Grades",
  },
  {
    icon: Wallet,
    name: "Fees",
  },
  {
    icon: Megaphone,
    name: "Announcements",
  },
];

export function ModulesSection() {
  return (
    <section
      id="modules"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
            School Modules
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Powerful Modules For Every Department
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Everything required to run a modern educational
            institution efficiently and professionally.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.name}
                className="group rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 transition-all group-hover:bg-cyan-600">
                  <Icon className="h-8 w-8 text-cyan-600 group-hover:text-white" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {module.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Manage and monitor {module.name.toLowerCase()} efficiently.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}