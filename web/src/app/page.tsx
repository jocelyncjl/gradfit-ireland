import {Header} from "@/components/marketing/Header";
import {HeroSection} from "@/components/marketing/HeroSection";
import {ProblemSection} from "@/components/marketing/ProblemSection";
// import {FeatureShowcaseSection} from "@components/marketing/FeatureShowcaseSection";
// import {ProcessSection} from "@/components/marketing/PrecessSection";
// import {EvidenceBasedSection} from "@/components/marketing/EvidenceBasedSection";
// import {FinalCTASection} from "@/components/marketing/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbf8] text-slate-950">
      <Header />
      <HeroSection />
      <ProblemSection/>
    
    </main>

  );



}