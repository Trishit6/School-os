import { Link } from "@tanstack/react-router";
import { FaPlus } from "react-icons/fa";

export default function ParentHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Parent Management
        </h1>
        <p className="text-slate-500">
          Manage parent records and student relationships
        </p>
      </div>

      <Link
        to="/parents/add-parent"
        className="bg-[#0b8ca1] hover:bg-[#09798b] text-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-lg"
      >
        <FaPlus />
        Add Parent
      </Link>
    </div>
  );
}