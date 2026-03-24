import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { PitchSection } from "@/components/sections/PitchSection";
import { BrandiSection } from "@/components/sections/BrandiSection";
import { SuitePreview } from "@/components/sections/SuitePreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BooksyPreview } from "@/components/sections/BooksyPreview";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { GooglePreview } from "@/components/sections/GooglePreview";
import { SuiteFinderSection } from "@/components/sections/SuiteFinderSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <PitchSection />
      <BrandiSection />
      <SuitePreview />
      <ServicesGrid />
      <TestimonialsSection />
      <BooksyPreview />
      <SocialProofSection />
      <GooglePreview />
      <SuiteFinderSection />
    </>
  );
}
