import AboutHero from "./components/about-hero"
import ValuesSection from "./components/values-section"
import TeamSection from "./components/team-section"
import MissionSection from "./components/mission-secion";

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </>
  )
}