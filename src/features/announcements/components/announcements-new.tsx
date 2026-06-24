import { FiSave, FiSend, FiUpload } from "react-icons/fi";

export default function NewAnnouncementPage() {
  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 mb-6">
          <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold uppercase">
            Operations
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            New Announcement
          </h1>

          <p className="mt-2 text-slate-500">
            Create and publish announcements for students, teachers,
            parents and staff.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8">
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-semibold mb-2">
                Announcement Title
              </label>

              <input
                type="text"
                placeholder="Enter announcement title"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-cyan-600"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Category
                </label>

                <select className="w-full h-12 rounded-xl border border-slate-300 px-4">
                  <option>Event</option>
                  <option>Notice</option>
                  <option>Academics</option>
                  <option>Examination</option>
                  <option>Holiday</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Priority
                </label>

                <select className="w-full h-12 rounded-xl border border-slate-300 px-4">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Audience
                </label>

                <select className="w-full h-12 rounded-xl border border-slate-300 px-4">
                  <option>All Users</option>
                  <option>Students</option>
                  <option>Teachers</option>
                  <option>Parents</option>
                  <option>Staff</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Publish Date
                </label>

                <input
                  type="date"
                  className="w-full h-12 rounded-xl border border-slate-300 px-4"
                />
              </div>

            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Expiry Date
              </label>

              <input
                type="date"
                className="w-full h-12 rounded-xl border border-slate-300 px-4"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Announcement Message
              </label>

              <textarea
                rows={8}
                placeholder="Write your announcement..."
                className="w-full rounded-xl border border-slate-300 p-4 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Attachment
              </label>

              <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:border-cyan-500">
                <FiUpload
                  size={24}
                  className="text-slate-400 mb-2"
                />

                <span className="text-slate-500">
                  Click to upload file
                </span>

                <input
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex justify-end gap-4 pt-4">

              <button
                type="button"
                className="h-12 px-6 rounded-xl border border-slate-300 flex items-center gap-2"
              >
                <FiSave />
                Save Draft
              </button>

              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-cyan-600 text-white flex items-center gap-2 hover:bg-cyan-700"
              >
                <FiSend />
                Publish Announcement
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
}