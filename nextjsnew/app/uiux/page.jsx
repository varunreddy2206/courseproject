import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import UiuxCareerOpportunities from "@/components/Uiux/UiuxCareerOpportunities";
import UiuxCertification from "@/components/Uiux/UiuxCertification";
import UiuxFaqSection from "@/components/Uiux/UiuxFaqSection";
import UiuxHeroSection from "@/components/Uiux/UiuxHeroSection";
import UiuxServiceDetails from "@/components/Uiux/UiuxServiceDetails";
import UiuxServiceHeadline from "@/components/Uiux/UiuxServiceHeadline";
import React from "react";
export default function UiuxPage() {
    return (
        <div>
            <Header />
            <UiuxHeroSection />
            <UiuxServiceHeadline />
            <UiuxServiceDetails />
            <UiuxCareerOpportunities />
            <UiuxCertification />
            <UiuxFaqSection />
            <Footer />

        </div>
    );
}