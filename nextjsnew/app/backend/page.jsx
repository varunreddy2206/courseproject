import BackendCareerOpportunities from "@/components/Backend/BackendCareerOpportunities";
import BackendCertification from "@/components/Backend/BackendCertification";
import BackendFaqSection from "@/components/Backend/BackendFaqSection";
import BackendHeroSection from "@/components/Backend/BackendHeroSection";
import BackendServiceDetails from "@/components/Backend/BackendServiceDetails";
import BackendServiceHeadline from "@/components/Backend/BackendServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function backendPage() {
    return (
        <div>
            <Header />
            <BackendHeroSection />
            <BackendServiceHeadline />
            <BackendServiceDetails   />
            <BackendCareerOpportunities />
            <BackendCertification />
            <BackendFaqSection      />
            <Footer />

        </div>
    );
}