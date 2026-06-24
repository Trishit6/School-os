export default function ContactInfo() {
  return (
    <div>

      <h2 className="text-4xl font-black text-slate-900">
        Get In Touch
      </h2>

      <p className="mt-4 text-slate-500">
        Reach out to our team anytime.
      </p>

      <div className="mt-10 space-y-6">

        <div className="bg-white p-6 rounded-3xl border">

          <h3 className="font-bold text-lg">
            📍 Address
          </h3>

          <p className="mt-2 text-slate-500">
            Siliguri, West Bengal, India
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl border">

          <h3 className="font-bold text-lg">
            📞 Phone
          </h3>

          <p className="mt-2 text-slate-500">
            +91 98765 43210
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl border">

          <h3 className="font-bold text-lg">
            ✉ Email
          </h3>

          <p className="mt-2 text-slate-500">
            support@skoolix.com
          </p>

        </div>

      </div>

    </div>
  );
}