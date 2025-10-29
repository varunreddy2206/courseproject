import Header from "@/components/Skill/Header";
import FrontendServiceDetails from "@/components/Frontend/FrontendServiceDetails";
import FrontendServiceHeadline from "@/components/Frontend/FrontendServiceHeadline";
import FrontendCareerOpportunities from "@/components/Frontend/FrontendCareerOpportunities";
import FrontendCertification from "@/components/Frontend/FrontendCertification";
import FrontendFaqSection from "@/components/Frontend/FrontendFaqSection";
import React from "react";
import FrontendHeroSection from "@/components/Frontend/FrontendHeroSection";
import Footer from "@/components/Skill/FooterSection";
export default function FrontendPage() {
    return (
        <div>
            <Header />
            <FrontendHeroSection />
            <FrontendServiceHeadline />
            <FrontendServiceDetails   />
            <FrontendCareerOpportunities />
            <FrontendCertification />
            <FrontendFaqSection      />
            <Footer />
            {/* Add your Frontend page components here */}

        </div>
    );
}