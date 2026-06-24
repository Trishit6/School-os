import type { ReactNode } from "react";
import {
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

type StatCardProps = {
  title: string;
  value: string;
  growth: string;
  icon: ReactNode;
  color: string;
};

export default function StatCard({
  title,
  value,
  growth,
  icon,
  color,
}: StatCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute
          -right-6
          -top-6
          h-24
          w-24
          rounded-full
          bg-cyan-500/5
          blur-2xl
        "
      />

      <div className="relative flex items-start justify-between">
        {/* Content */}
        <div>
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-slate-500
              dark:text-slate-400
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                bg-emerald-50
                dark:bg-emerald-900/20
                px-2.5
                py-1
              "
            >
              <FiTrendingUp
                size={13}
                className="text-emerald-600"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  text-emerald-600
                "
              >
                {growth}
              </span>
            </div>

            <span
              className="
                text-xs
                text-slate-400
                dark:text-slate-500
              "
            >
              vs last week
            </span>
          </div>
        </div>

        {/* Icon */}
        <div
          className={`
            h-14
            w-14
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            shadow-sm
            transition-transform
            duration-300
            group-hover:scale-110
            ${color}
          `}
        >
          {icon}
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-4
          dark:border-slate-800
        "
      >
        <span
          className="
            text-xs
            text-slate-500
            dark:text-slate-400
          "
        >
          Updated just now
        </span>

        <FiArrowUpRight
          className="
            text-slate-400
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>
    </div>
  );
}