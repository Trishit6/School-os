import { Link } from "@tanstack/react-router";

export default function GuestHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold">
            🎓
          </div>

          <div>
            <h1 className="font-bold text-lg text-slate-900">
              Skoolix
            </h1>

            <p className="text-xs text-slate-400">
              School Management System
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-600 hover:text-cyan-600 font-medium"
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className="text-slate-600 hover:text-cyan-600 font-medium"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-slate-600 hover:text-cyan-600 font-medium"
          >
            Contact
          </Link>

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="h-11 px-5 rounded-xl border flex items-center font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="h-11 px-5 rounded-xl bg-cyan-600 text-white flex items-center font-medium"
          >
            Register
          </Link>

        </div>

      </div>

    </header>
  );
}