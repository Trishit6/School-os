import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Modules", href: "#modules" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-cyan-600 p-2 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>

          <div>
            <h1 className="font-bold text-slate-900">Skoolix</h1>
            <p className="text-xs text-slate-500">
              School Management System
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Login</Button>

          <Button className="bg-cyan-600 hover:bg-cyan-700">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-4 px-6 py-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-slate-700"
              >
                {item.label}
              </a>
            ))}

            <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}