import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { LeadCaptureSection } from "@/components/sections/LeadCaptureSection";
import { WhyLeaseSection } from "@/components/sections/WhyLeaseSection";
import { BrandiSection } from "@/components/sections/BrandiSection";
import { SpecialistsSection } from "@/components/sections/SpecialistsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <LeadCaptureSection />
      <WhyLeaseSection />
      <BrandiSection />
      <SpecialistsSection />
      <TestimonialsSection />
      <StatsSection />
      <ServicesSection />
      <SocialSection />
      <FinalCTASection />
    </>
  );
}
