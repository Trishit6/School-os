import {
  CalendarDays,
  FileText,
  GraduationCap,
  IndianRupee,
  Clock3,
  Megaphone,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Attendance Management",
    description:
      "Track daily attendance with real-time reports and analytics.",
  },
  {
    icon: FileText,
    title: "Examination System",
    description:
      "Create exams, publish results, and generate report cards.",
  },
  {
    icon: GraduationCap,
    title: "Academic Performance",
    description:
      "Monitor student progress and improve learning outcomes.",
  },
  {
    icon: IndianRupee,
    title: "Fee Management",
    description:
      "Manage fee collection, dues, invoices and payment history.",
  },
  {
    icon: Clock3,
    title: "Smart Timetable",
    description:
      "Generate and manage schedules for classes and teachers.",
  },
  {
    icon: Megaphone,
    title: "Announcements",
    description:
      "Instantly communicate important notices across the school.",
  },
];

export function FeatureSection() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
            Features
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything Your School Needs
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A complete digital ecosystem for students,
            teachers, administrators and parents.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 transition group-hover:bg-cyan-600">
                  <Icon className="h-7 w-7 text-cyan-600 group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}