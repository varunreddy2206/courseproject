import ApitestingCareerOpportunities from "@/components/Apitesting/ApitestingCareerOpportunities";
import ApitestingCertification from "@/components/Apitesting/ApitestingCertification";
import ApitestingFaqSection from "@/components/Apitesting/ApitestingFaqSection";
import ApitestingHeroSection from "@/components/Apitesting/ApitestingHeroSection";
import ApitestingServiceDetails from "@/components/Apitesting/ApitestingServiceDetails";
import ApitestingServiceHeadline from "@/components/Apitesting/ApitestingServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function SeleniumapiPage() {
    return (
        <div>
            <Header />
            <ApitestingHeroSection />
            <ApitestingServiceHeadline />
            <ApitestingServiceDetails />
            <ApitestingCareerOpportunities />
            <ApitestingCertification />
            <ApitestingFaqSection />
            <Footer />

        </div>
    );
}