import JavafullstackServiceDetails from "@/components/Javafullstack/JavafullstackServiceDetails";
import JavafullstackServiceSection from "@/components/Javafullstack/JavafullstackServiceHeadline";
import JavafullstackCareerOpportunities from "@/components/Javafullstack/JavafullstackCareerOpportunities";
import JavafullstackCertification from "@/components/Javafullstack/JavafullstackCertification";
import JavafullstackFaqSection from "@/components/Javafullstack/JavafullstackFaqSection";
import Header from "@/components/Skill/Header";
import React from "react";
import JavafullstackHeroSection from "@/components/Javafullstack/JavafullstackHeroSection";
import Footer from "@/components/Skill/FooterSection";
export default function javaPage() {
    return (
        <div>
            <Header />
            <JavafullstackHeroSection />
            <JavafullstackServiceSection />
            <JavafullstackServiceDetails   />
            <JavafullstackCareerOpportunities />
            <JavafullstackCertification />
            <JavafullstackFaqSection      />
            <Footer />
            {/* Add your Java fullstack page components here */}
        </div>
    );
}