import { useState } from "react";
import {
  FiSave,
  FiArrowLeft,
  FiFileText,
} from "react-icons/fi";
import { Link } from "@tanstack/react-router";

export default function NewInvoicePage() {
  const [formData, setFormData] = useState({
    invoiceNo: `INV-${Date.now()}`,
    student: "",
    className: "",
    feeType: "",
    amount: "",
    dueDate: "",
    status: "Pending",
    description: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(formData);

    alert("Invoice Created Successfully");
  };

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <div>

            <div className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold text-cyan-700">
              OPERATIONS
            </div>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              Create Invoice
            </h1>

            <p className="mt-2 text-slate-500">
              Generate fee invoices for students.
            </p>

          </div>

          <Link
            to="/fees"
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50"
          >
            <FiArrowLeft />
            Back
          </Link>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Invoice No */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Invoice Number
              </label>

              <input
                value={formData.invoiceNo}
                readOnly
                className="h-12 w-full rounded-xl border border-slate-300 bg-slate-100 px-4"
              />
            </div>

            {/* Student */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Student Name
              </label>

              <input
                name="student"
                value={formData.student}
                onChange={handleChange}
                placeholder="Enter Student Name"
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              />
            </div>

            {/* Class */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Class
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              >
                <option value="">
                  Select Class
                </option>

                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
              </select>
            </div>

            {/* Fee Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Fee Type
              </label>

              <select
                name="feeType"
                value={formData.feeType}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              >
                <option value="">
                  Select Fee Type
                </option>

                <option>Tuition Fee</option>
                <option>Exam Fee</option>
                <option>Library Fee</option>
                <option>Transport Fee</option>
                <option>Hostel Fee</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Amount (₹)
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0"
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              >
                <option>Pending</option>
                <option>Paid</option>
                <option>Overdue</option>
              </select>
            </div>

          </div>

          {/* Description */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Fee details..."
              className="w-full rounded-xl border border-slate-300 p-4 outline-none resize-none focus:border-cyan-600"
            />
          </div>

          {/* Notes */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Notes
            </label>

            <textarea
              rows={3}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes..."
              className="w-full rounded-xl border border-slate-300 p-4 outline-none resize-none focus:border-cyan-600"
            />
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex justify-end gap-3">

            <Link
              to="/fees"
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-[#007c91] px-5 py-3 font-medium text-white hover:bg-[#006d80]"
            >
              <FiSave />
              Create Invoice
            </button>

          </div>

        </form>

        {/* QUICK INFO */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <FiFileText
              className="text-cyan-600"
              size={20}
            />

            <div>
              <h3 className="font-semibold text-slate-900">
                Invoice Tips
              </h3>

              <p className="text-sm text-slate-500">
                Use fee categories properly to keep reports and accounting
                accurate.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}