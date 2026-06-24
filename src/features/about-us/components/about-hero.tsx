import { Link } from "@tanstack/react-router";
import { FiArrowLeft } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-slate-50 py-24 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}
        <div className="mb-12">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-200
              shadow-sm
              hover:border-cyan-500
              hover:text-cyan-600
              dark:hover:text-cyan-400
              transition-all
            "
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-cyan-100
              dark:bg-cyan-900/30
              px-5
              py-2
              text-sm
              font-semibold
              text-cyan-700
              dark:text-cyan-400
            "
          >
            ABOUT SKOOLIX
          </span>

          <h1
            className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            Empowering Schools
            <br />
            Through Technology
          </h1>

          <p
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              md:text-xl
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Skoolix School OS is a modern School Management
            System designed to streamline administration,
            strengthen communication, and drive better
            educational outcomes for institutions worldwide.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="
                px-8
                py-4
                rounded-2xl
                bg-[#0b8ca1]
                text-white
                font-semibold
                hover:bg-[#09798b]
                transition-all
              "
            >
              Contact Us
            </Link>

            <Link
              to="/"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                text-slate-700
                dark:text-slate-200
                font-semibold
                hover:border-cyan-500
                transition-all
              "
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}