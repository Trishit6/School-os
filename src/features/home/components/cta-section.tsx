import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-slate-950 p-10 text-white lg:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300">
              Get Started Today
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Transform Your School Management Experience
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Streamline administration, improve communication,
              manage students efficiently and gain real-time insights
              with a modern school management platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent text-white hover:bg-slate-900"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="mt-12 grid gap-6 border-t border-slate-800 pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  500+
                </h3>
                <p className="mt-2 text-slate-400">
                  Schools Using Skoolix
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  15K+
                </h3>
                <p className="mt-2 text-slate-400">
                  Students Managed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  99.9%
                </h3>
                <p className="mt-2 text-slate-400">
                  Platform Uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}