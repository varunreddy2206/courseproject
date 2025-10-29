import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import TestingCareerOpportunities from "@/components/Testing/TestingCareerOpportunities";
import TestingCertification from "@/components/Testing/TestingCertification";
import TestingFaqSection from "@/components/Testing/TestingFaqSection";
import TestingHeroSection from "@/components/Testing/TestingHeroSection";
import TestingServiceDetails from "@/components/Testing/TestingServiceDetails";
import TestingServiceHeadline from "@/components/Testing/TestingServiceHeadline";
import React from "react";
export default function ManualtestingPage() {
    return (
        <div>
            <Header />
            <TestingHeroSection />
            <TestingServiceHeadline />
            <TestingServiceDetails />
            <TestingCareerOpportunities />
            <TestingCertification />
            <TestingFaqSection />
            <Footer />

        </div>
    );
}