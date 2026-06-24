import { useAuth } from "#/features/auth/contexts/auth-context.tsx";
import { Link } from "@tanstack/react-router";
import {
  FiGrid,
  FiUsers,
  FiBookOpen,
  FiCalendar,
  FiClipboard,
  FiClock,
  FiFileText,
  FiBarChart2,
  FiDollarSign,
  FiBell,
  FiHome,
} from "react-icons/fi";

export default function Sidebar() {
  const { user } = useAuth();

  const baseLinkClass =
    "flex items-center gap-2 px-2 py-1.5 text-[13px] font-medium rounded-lg transition-colors";

  const firstName =
    user?.name?.trim()?.split(" ")[0] || "User";

  const role = user?.role || "Profile";

  const initial =
    firstName.charAt(0).toUpperCase() || "U";

  return (
    <aside className="w-[174px] bg-white border-r border-slate-200 flex flex-col justify-between">
      <div>
        <div className="px-3 pt-5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#0b8ca1] flex items-center justify-center text-white text-sm">
              🎓
            </div>

            <div>
              <h2 className="font-bold text-[15px] text-slate-900">
                Skoolix
              </h2>
              <p className="text-[11px] text-slate-400">
                School OS
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 space-y-5">
          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              Overview
            </p>

            <div className="space-y-1">
              <Link
                to="/dashboard"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
                activeOptions={{ exact: true }}
              >
                <FiGrid size={16} />
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              People
            </p>

            <div className="space-y-1">
              <Link
                to="/students"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiUsers size={16} />
                Students
              </Link>

              <Link
                to="/teachers"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiBookOpen size={16} />
                Teachers
              </Link>

              <Link
                to="/parents"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiHome size={16} />
                Parents
              </Link>

              <Link
                to="/classes"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiClipboard size={16} />
                Classes
              </Link>
            </div>
          </div>

          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              Academics
            </p>

            <div className="space-y-1">
              <Link
                to="/attendance"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiCalendar size={16} />
                Attendance
              </Link>

              <Link
                to="/timetable"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiClock size={16} />
                Timetable
              </Link>

              <Link
                to="/exams"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiFileText size={16} />
                Exams
              </Link>

              <Link
                to="/grades"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiBarChart2 size={16} />
                Grades
              </Link>
            </div>
          </div>

          <div>
            <p className="px-2 mb-2 text-[10px] uppercase text-slate-400">
              Operations
            </p>

            <div className="space-y-1">
              <Link
                to="/fees"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiDollarSign size={16} />
                Fees
              </Link>

              <Link
                to="/announcements"
                className={baseLinkClass}
                activeProps={{
                  className: "bg-[#0b8ca1]/10 text-[#0b8ca1]",
                }}
                inactiveProps={{
                  className: "text-slate-600 hover:bg-slate-50",
                }}
              >
                <FiBell size={16} />
                Announcements
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <Link
          to="/profile"
          className="w-full border rounded-2xl p-2 flex items-center gap-2 hover:border-[#0b8ca1] transition"
        >
          <div className="h-8 w-8 rounded-full bg-orange-200 flex items-center justify-center text-[12px] font-bold">
            {initial}
          </div>

          <div className="text-left">
            <h4 className="text-[12px] font-semibold">
              {firstName}
            </h4>

            <p className="text-[10px] text-slate-400 capitalize">
              {role}
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}