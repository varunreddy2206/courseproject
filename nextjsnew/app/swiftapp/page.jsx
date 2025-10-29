import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import SwiftappCareerOpportunities from "@/components/Swiftapp/SwiftappCareerOpportunities";
import SwiftappCertification from "@/components/Swiftapp/SwiftappCertification";
import SwiftappFaqSection from "@/components/Swiftapp/SwiftappFaqSection";
import SwiftappServiceDetails from "@/components/Swiftapp/SwiftappServiceDetails";
import SwiftappServiceHeadline from "@/components/Swiftapp/SwiftappServiceHeadline";
import SwiftHeroSection from "@/components/Swiftapp/SwiftHeroSection";
import React from "react";
export default function SwiftappPage() {
    return (
        <div>
            <Header />
            <SwiftHeroSection />
            <SwiftappServiceHeadline />
            <SwiftappServiceDetails />
            <SwiftappCareerOpportunities />
            <SwiftappCertification />
            <SwiftappFaqSection />
            <Footer />

        </div>
    );
}