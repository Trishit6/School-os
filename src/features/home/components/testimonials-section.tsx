import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Principal",
    school: "Bright Future School",
    message:
      "Managing attendance, examinations and student records has become incredibly simple with Skoolix.",
  },
  {
    name: "Priya Das",
    role: "Administrator",
    school: "Sunrise Academy",
    message:
      "The dashboard is intuitive and saves hours of administrative work every week.",
  },
  {
    name: "Amit Verma",
    role: "Vice Principal",
    school: "Green Valley School",
    message:
      "Excellent reporting tools and smooth communication between teachers and management.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Trusted By Educational Institutions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Schools rely on Skoolix to simplify administration
            and improve academic management.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-slate-600">
                "{item.message}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                  <p className="text-xs text-slate-400">
                    {item.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}