import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/features/home/components/hero-section";
import { StatsSection } from "@/features/home/components/stats-section";
import { FeatureSection } from "@/features/home/components/feature-section";
import { ModulesSection } from "@/features/home/components/modules-section";
import { DashboardPreviewSection } from "@/features/home/components/dashboard-preview-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { CTASection } from "@/features/home/components/cta-section";
import GuestLayout from "../layouts/guest-layout/index";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <GuestLayout>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <ModulesSection />
      <DashboardPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </GuestLayout>
  );
}