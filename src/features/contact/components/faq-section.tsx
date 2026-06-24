const faqs = [
  {
    question: "Can I manage multiple schools?",
    answer:
      "Yes, Skoolix supports multi-school management.",
  },
  {
    question: "Is student data secure?",
    answer:
      "All data is protected using industry-standard security practices.",
  },
  {
    question: "Does it support fee management?",
    answer:
      "Yes, including invoices, payments and reports.",
  },
  {
    question: "Can parents access information?",
    answer:
      "Parent portals can be integrated into the system.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-3xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-lg">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-500">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}