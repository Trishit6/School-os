const values = [
  {
    title: "Innovation",
    description:
      "Building modern tools for future-ready schools.",
  },
  {
    title: "Transparency",
    description:
      "Providing accurate data and reporting.",
  },
  {
    title: "Security",
    description:
      "Protecting school information and records.",
  },
  {
    title: "Excellence",
    description:
      "Delivering reliable educational solutions.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {values.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <h3 className="font-bold text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}