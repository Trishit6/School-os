import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const images = [
  "https://images.unsplash.com/photo-1669023414171-56f0740e34cd?w=1200&auto=format&fit=crop&q=80",
  "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=1200&auto=format&fit=crop&q=80",
  "https://media.istockphoto.com/id/1349104991/photo/e-learning-online-education-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=mG2l86JNDQmEP9t2NkJ4Nvc8rL-OGdXoU55ZrS1LDhA=",
  "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"


];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-sky-200/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              🚀 Modern School Management Platform
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Manage Your
              <span className="block text-cyan-600">
                School Smarter
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Streamline attendance, examinations, fees,
              student records and communication with one
              powerful platform designed for modern schools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center rounded-xl bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <button className="inline-flex items-center rounded-xl border bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                <span className="text-slate-600">
                  Student Management
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                <span className="text-slate-600">
                  Attendance Tracking
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                <span className="text-slate-600">
                  Examination System
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                <span className="text-slate-600">
                  Fee Management
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  500+
                </h3>
                <p className="text-slate-500">
                  Schools
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  15K+
                </h3>
                <p className="text-slate-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  99.9%
                </h3>
                <p className="text-slate-500">
                  Uptime
                </p>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-2xl">
              <img
                src={images[currentImage]}
                alt="School Management"
                className="h-[500px] w-full rounded-[24px] object-cover transition-all duration-700"
              />
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentImage === index
                      ? "w-10 bg-cyan-600"
                      : "w-3 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-6 top-10 hidden rounded-2xl border bg-white p-4 shadow-xl lg:block">
              <p className="text-sm text-slate-500">
                Active Students
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                1,284
              </h3>
            </div>

            <div className="absolute -right-6 bottom-16 hidden rounded-2xl border bg-white p-4 shadow-xl lg:block">
              <p className="text-sm text-slate-500">
                Attendance
              </p>

              <h3 className="text-2xl font-bold text-cyan-600">
                94.2%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}