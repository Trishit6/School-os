import ContactHero from "./components/contact-hero";
import ContactInfo from "./components/contact-info";
import ContactForm from "./components/contact-form";
import FaqSection from "./components/faq-section";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <FaqSection />
    </>
  );
}