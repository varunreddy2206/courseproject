import FullstackCareerOpportunities from "@/components/Fullstack/FullsatckCareerOpportunities";
import FullstackCertification from "@/components/Fullstack/FullstackCertification";
import FullstackFaqSection from "@/components/Fullstack/FullstackFaqSection";
import FullstackHeroSection from "@/components/Fullstack/FullstackHeroSection";
import FullstackServiceDetails from "@/components/Fullstack/FullstackServiceDetails";
import FullstackServiceSection from "@/components/Fullstack/FullstackServiceSection";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function FullstackPage() {
  return (
    <div>
      <Header />
      <FullstackHeroSection />
      <FullstackServiceSection />
      <FullstackServiceDetails />
      <FullstackCareerOpportunities />
      <FullstackCertification />
      <FullstackFaqSection />
      <Footer />

      {/* You can import and use the components here */}
    </div>
  );
}