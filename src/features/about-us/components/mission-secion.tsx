export default function MissionSection() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
              className="rounded-3xl h-[450px] w-full object-cover"
            />

          </div>

          <div>

            <h2 className="text-4xl font-black">
              Our Mission
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We help educational institutions
              modernize their operations with a
              centralized platform for managing
              students, teachers, attendance,
              grades, examinations and finances.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our goal is to reduce paperwork,
              save time and improve educational
              outcomes for schools worldwide.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}