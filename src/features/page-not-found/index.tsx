import { Link } from "@tanstack/react-router";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function PageNotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-sm p-10 text-center">
        {/* Logo */}
        <div className="h-24 w-24 mx-auto rounded-full bg-cyan-100 flex items-center justify-center text-5xl">
          🎓
        </div>

        {/* 404 */}
        <h1 className="mt-6 text-8xl font-bold text-cyan-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist,
          has been moved, or the URL is incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition"
          >
            <FiHome />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition"
          >
            <FiArrowLeft />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-slate-100">
          <p className="text-sm text-slate-400">
            Skoolix School Management System
          </p>
        </div>
      </div>
    </div>
  );
}