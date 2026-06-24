const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
  },
  {
    name: "Michael Brown",
    role: "Product Director",
  },
  {
    name: "Emily Wilson",
    role: "Education Consultant",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl shadow-sm p-8 text-center"
            >
              <div className="h-24 w-24 bg-cyan-100 rounded-full mx-auto" />

              <h3 className="mt-5 text-xl font-bold">
                {member.name}
              </h3>

              <p className="text-slate-500">
                {member.role}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}