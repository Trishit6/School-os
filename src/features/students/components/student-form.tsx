import { FiX } from "react-icons/fi"

type Props = {
  onClose: () => void
}

export default function StudentForm({
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-5">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Student Admission Form
            </h2>

            <p className="text-sm text-slate-500">
              Add a new student to the school system
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <FiX size={20} />
          </button>

        </div>

        {/* FORM */}
        <form className="max-h-[80vh] overflow-y-auto p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                First Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Last Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Date of Birth
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Gender
              </label>

              <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Admission Number
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Class
              </label>

              <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
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

            <div>
              <label className="mb-2 block text-sm font-medium">
                Section
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Guardian Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Guardian Phone
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Address
              </label>

              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

          </div>

          <div className="mt-8 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#0b8ca1] px-5 py-3 font-medium text-white hover:bg-[#09788a]"
            >
              Save Student
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}