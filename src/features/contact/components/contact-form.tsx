export default function ContactForm() {
  return (
    <div className="bg-white rounded-[32px] border p-8 shadow-sm">

      <h2 className="text-3xl font-black">
        Send Message
      </h2>

      <form className="mt-8 space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-14 px-5 rounded-2xl border outline-none focus:border-cyan-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full h-14 px-5 rounded-2xl border outline-none focus:border-cyan-500"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full h-14 px-5 rounded-2xl border outline-none focus:border-cyan-500"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full rounded-2xl border p-5 outline-none resize-none focus:border-cyan-500"
        />

        <button
          type="submit"
          className="w-full h-14 rounded-2xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}