import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

export default function GuestFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-cyan-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Skoolix
                </h2>

                <p className="text-sm text-slate-400">
                  School Management System
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-slate-400 leading-relaxed">
              Simplify school administration, manage attendance,
              examinations, fees, grades and communication from a
              single modern platform.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-500" />
                support@skoolix.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-500" />
                +91 98765 43210
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#features" className="hover:text-cyan-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#modules" className="hover:text-cyan-400">
                  Modules
                </a>
              </li>

              <li>
                <a href="#dashboard" className="hover:text-cyan-400">
                  Dashboard
                </a>
              </li>

              <li>
                <Link to="/register" className="hover:text-cyan-400">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/about-us" className="hover:text-cyan-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-cyan-400">
                  Contact
                </Link>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Modules
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Students</li>
              <li>Teachers</li>
              <li>Attendance</li>
              <li>Exams</li>
              <li>Grades</li>
              <li>Fees</li>
            </ul>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid gap-6 border-y border-slate-800 py-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              500+
            </h3>
            <p className="text-slate-400">
              Schools Using Skoolix
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              15K+
            </h3>
            <p className="text-slate-400">
              Students Managed
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">
              99.9%
            </h3>
            <p className="text-slate-400">
              Platform Uptime
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Skoolix. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}