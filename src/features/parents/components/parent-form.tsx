import { FaCamera, FaUsers } from "react-icons/fa";

interface ParentFormProps {
  parent?: any;
}

export default function ParentForm({
  parent,
}: ParentFormProps) {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Parent Information
        </h2>

        <p className="text-slate-500 mt-1">
          Add or update parent details and student relationships.
        </p>
      </div>

      {/* Profile Upload */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h3 className="text-lg font-semibold mb-6">
          Profile Photo
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="relative">
            <img
              src={
                parent?.photo ||
                "https://ui-avatars.com/api/?name=Parent"
              }
              alt=""
              className="w-32 h-32 rounded-full object-cover border-4 border-[#0b8ca1]"
            />

            <button
              type="button"
              className="absolute bottom-0 right-0 bg-[#0b8ca1] text-white p-3 rounded-full"
            >
              <FaCamera />
            </button>
          </div>

          <div>
            <input
              type="file"
              className="block w-full text-sm"
            />

            <p className="text-sm text-slate-500 mt-2">
              JPG, PNG up to 5MB
            </p>
          </div>

        </div>
      </div>

      {/* Parent Details */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h3 className="text-lg font-semibold mb-6">
          Personal Details
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 text-sm font-medium">
              Parent Name
            </label>

            <input
              defaultValue={parent?.name}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Father Name
            </label>

            <input
              defaultValue={parent?.fatherName}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Mother Name
            </label>

            <input
              defaultValue={parent?.motherName}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              defaultValue={parent?.email}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>

            <input
              defaultValue={parent?.phone}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Alternate Phone
            </label>

            <input
              defaultValue={parent?.alternatePhone}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Occupation
            </label>

            <input
              defaultValue={parent?.occupation}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Status
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-4 py-3">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h3 className="text-lg font-semibold mb-6">
          Address Details
        </h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">

          <div className="lg:col-span-3">
            <label className="block mb-2 text-sm font-medium">
              Address
            </label>

            <textarea
              rows={4}
              defaultValue={parent?.address}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              City
            </label>

            <input
              defaultValue={parent?.city}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              State
            </label>

            <input
              defaultValue={parent?.state}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              PIN Code
            </label>

            <input
              defaultValue={parent?.pinCode}
              className="w-full border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

        </div>
      </div>

      {/* Student Mapping */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaUsers className="text-[#0b8ca1]" />

          <h3 className="text-lg font-semibold">
            Linked Students
          </h3>
        </div>

        <select
          multiple
          className="w-full border border-slate-200 rounded-2xl p-4 h-44"
        >
          <option>Aarav Sharma</option>
          <option>Anaya Sharma</option>
          <option>Riya Das</option>
          <option>Rahul Roy</option>
        </select>

        <p className="text-sm text-slate-500 mt-2">
          Hold Ctrl/Cmd to select multiple students.
        </p>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 bg-white rounded-3xl shadow-lg p-5 flex justify-end gap-4">

        <button
          type="button"
          className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-8 py-3 rounded-2xl bg-[#0b8ca1] text-white hover:bg-[#09798b]"
        >
          Save Parent
        </button>

      </div>
    </div>
  );
}