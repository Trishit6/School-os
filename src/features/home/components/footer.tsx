import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-600 p-2">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Skoolix
                </h3>
                <p className="text-sm text-slate-400">
                  School Management System
                </p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Modern school management software helping
              schools streamline operations, improve
              communication and enhance academic excellence.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-slate-900 p-2 transition hover:bg-cyan-600"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-2 transition hover:bg-cyan-600"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-2 transition hover:bg-cyan-600"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-2 transition hover:bg-cyan-600"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Product
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-cyan-400"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#modules"
                  className="hover:text-cyan-400"
                >
                  Modules
                </a>
              </li>

              <li>
                <a
                  href="#dashboard"
                  className="hover:text-cyan-400"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400"
                >
                  Integrations
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Partners
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-cyan-500" />
                <span>support@skoolix.com</span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-cyan-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-500" />
                <span>
                  Siliguri, West Bengal, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Skoolix.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-cyan-400">
                Terms of Service
              </a>

              <a href="#" className="hover:text-cyan-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}