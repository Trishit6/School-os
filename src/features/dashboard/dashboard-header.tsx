import { useAuth } from "../auth/contexts/auth-context";
import {
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

export default function DashboardHeader() {
  const { user } = useAuth();

  const firstName =
    user?.name?.trim()?.split(" ")[0];

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  const initial =
    firstName?.charAt(0).toUpperCase() || "U";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        p-5
        lg:p-6
        shadow-sm
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-10
          -right-10
          h-48
          w-48
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          gap-5
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left Content */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-cyan-50
                dark:bg-cyan-950/40
                px-3
                py-1
                text-xs
                font-medium
                text-cyan-700
                dark:text-cyan-400
              "
            >
              <FiTrendingUp size={12} />
              School Dashboard
            </span>
          </div>

          <h1
            className="
              text-2xl
              lg:text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {greeting}
            {firstName ? `, ${firstName}` : ""} 👋
          </h1>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Welcome back to Skoolix School OS.
            Monitor school performance, student
            activity, attendance, academics, and
            operations from one centralized dashboard.
          </p>
        </div>

        {/* Right Content */}
        <div
          className="
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
          "
        >
          {/* Academic Session */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              dark:border-slate-800
              bg-slate-50
              dark:bg-slate-800
              px-4
              py-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-cyan-100
                dark:bg-cyan-900/40
                text-cyan-700
                dark:text-cyan-400
              "
            >
              <FiCalendar size={18} />
            </div>

            <div>
              <p
                className="
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Academic Session
              </p>

              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Spring Term 2026
              </p>
            </div>
          </div>

          {/* User Profile */}
          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              dark:border-slate-800
              bg-slate-50
              dark:bg-slate-800
              px-4
              py-3
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-cyan-500
                to-cyan-700
                text-sm
                font-semibold
                text-white
                shadow-sm
              "
            >
              {initial}
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                {user?.name}
              </p>

              <p
                className="
                  text-xs
                  capitalize
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {user?.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}