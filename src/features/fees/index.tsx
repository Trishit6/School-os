import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FiPlus,
  FiSearch,
  FiDownload,
  FiEdit2,
  FiEye,
} from "react-icons/fi";

const invoices = [
  {
    id: "INV-9001",
    student: "Aisha Khan",
    amount: "1,200",
    due: "2026-05-15",
    status: "Paid",
  },
  {
    id: "INV-9002",
    student: "Liam Carter",
    amount: "1,200",
    due: "2026-05-15",
    status: "Pending",
  },
  {
    id: "INV-9003",
    student: "Mei Tanaka",
    amount: "1,450",
    due: "2026-05-20",
    status: "Paid",
  },
  {
    id: "INV-9004",
    student: "Diego Alvarez",
    amount: "1,200",
    due: "2026-04-30",
    status: "Overdue",
  },
  {
    id: "INV-9005",
    student: "Noah Becker",
    amount: "1,450",
    due: "2026-05-25",
    status: "Pending",
  },
  {
    id: "INV-9006",
    student: "Zara Ahmed",
    amount: "1,200",
    due: "2026-05-15",
    status: "Paid",
  },
];

export default function FeesComponent() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(search.toLowerCase()) ||
      invoice.student.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      invoice.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 bg-[#f6f7f9] min-h-screen">
      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white px-6 py-6 flex items-start justify-between">
        <div>
          <div className="inline-flex items-center rounded-full bg-[#d9f4f8] px-3 py-[2px] text-[10px] font-semibold tracking-wide text-[#0b8ca1]">
            OPERATIONS
          </div>

          <h1 className="mt-3 text-[34px] leading-none font-bold text-[#0f172a]">
            Fees & Invoices
          </h1>

          <p className="mt-3 text-[14px] text-slate-500">
            Track tuition payments and outstanding dues.
          </p>
        </div>

        <Link
          to="/NewInvoicePage"
          className="mt-3 flex h-[42px] items-center gap-2 rounded-[14px] bg-[#007c91] px-5 text-[14px] font-semibold text-white shadow-sm hover:bg-[#006d80]"
        >
          <FiPlus size={15} />
          New Invoice
        </Link>
      </div>

      <div className="p-5">
        {/* SEARCH + FILTER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
          <div className="relative w-full max-w-[420px]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Invoice ID or Student Name..."
              className="w-full h-11 rounded-xl border border-slate-300 bg-white pl-11 pr-4 outline-none focus:border-cyan-600"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Paid", "Pending", "Overdue"].map((item) => (
              <button
                key={item}
                onClick={() => setStatusFilter(item)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  statusFilter === item
                    ? "bg-cyan-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">Billed</p>
            <h2 className="mt-3 text-[28px] font-bold text-[#007c91]">
              ₹7,700
            </h2>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">Collected</p>
            <h2 className="mt-3 text-[28px] font-bold text-green-600">
              ₹3,850
            </h2>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">Pending</p>
            <h2 className="mt-3 text-[28px] font-bold text-yellow-500">
              ₹2,650
            </h2>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[14px] text-slate-500">Overdue</p>
            <h2 className="mt-3 text-[28px] font-bold text-red-500">
              ₹1,200
            </h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-5 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_180px] border-b border-slate-200 px-6 py-4 text-sm font-semibold text-slate-500">
            <p>Invoice</p>
            <p>Student</p>
            <p>Amount</p>
            <p>Due Date</p>
            <p>Status</p>
            <p className="text-center">Actions</p>
          </div>

          {filteredInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_180px] items-center border-b border-slate-100 px-6 py-5 hover:bg-slate-50 transition"
            >
              <p className="font-mono text-sm text-slate-700">
                {invoice.id}
              </p>

              <p className="font-semibold text-slate-800">
                {invoice.student}
              </p>

              <p className="font-medium text-slate-700">
                ₹{invoice.amount}
              </p>

              <p className="text-slate-500">
                {invoice.due}
              </p>

              <div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : invoice.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  title="View Invoice"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 transition hover:bg-cyan-100"
                >
                  <FiEye size={16} />
                </button>

                <button
                  title="Download PDF"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-700 transition hover:bg-green-100"
                >
                  <FiDownload size={16} />
                </button>

                <button
                  title="Edit Invoice"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 transition hover:bg-amber-100"
                >
                  <FiEdit2 size={16} />
                </button>
              </div>
            </div>
          ))}

          {filteredInvoices.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No invoices found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}