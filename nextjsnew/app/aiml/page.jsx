import AimlCareerOpportunities from "@/components/AIML/AimlCareerOpportunities";
import AimlCertification from "@/components/AIML/AimlCertification";
import AimlFaqSection from "@/components/AIML/AimlFaqSection";
import AimlHeroSection from "@/components/AIML/AimlHeroSection";
import AimlServiceDetails from "@/components/AIML/AimlServiceDetails";
import AimlServiceSection from "@/components/AIML/AimlServiceSection";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function AIMLPage() {
    return (
        <div>
            <Header />
            <AimlHeroSection />
            <AimlServiceSection />
            <AimlServiceDetails />
            <AimlCareerOpportunities />
            <AimlCertification />
            <AimlFaqSection />
            <Footer />

            {/* You can import and use the components here */}

        </div>
    );
}