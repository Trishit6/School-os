import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { StatsSection } from "./components/stats-section";
import { FeatureSection } from "./components/feature-section";
import { ModulesSection } from "./components/modules-section";
import { DashboardPreviewSection } from "./components/dashboard-preview-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />

        <StatsSection />

        <FeatureSection />

        <ModulesSection />

        <DashboardPreviewSection />

        <TestimonialsSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}