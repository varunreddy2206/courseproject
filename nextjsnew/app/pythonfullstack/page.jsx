import Header from "@/components/Skill/Header";
import PythonfullstackServiceDetails from "@/components/Pythonfullstack/PythonfullstackServiceDetails";
import PythonfullstackServiceHeadline from "@/components/Pythonfullstack/PythonfullstackServiceHeadline";
import PythonfullstackCareerOpportunities from "@/components/Pythonfullstack/PythonfullstackCareerOpportunities";
import PythonfullstackCertification from "@/components/Pythonfullstack/PythonfullstackCertification";
import PythonfullstackFaqSection from "@/components/Pythonfullstack/PythonfullstackFaqSection";
import React from "react";
import PythonfullstackHeroSection from "@/components/Pythonfullstack/PythonfullstackHeroSection";
import Footer from "@/components/Skill/FooterSection";
export default function PythonfullstackPage() {
    return (
        <div>
            <Header />
            <PythonfullstackHeroSection />
            <PythonfullstackServiceHeadline />
            <PythonfullstackServiceDetails   />
            <PythonfullstackCareerOpportunities />
            <PythonfullstackCertification />
            <PythonfullstackFaqSection      />
            <Footer />
            {/* Add your Python fullstack page components here */}

        </div>
    );
}
            