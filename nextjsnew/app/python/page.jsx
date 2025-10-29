import PythonCareerOpportunities from "@/components/Python/PythonCareerOpportunities";
import PythonCertification from "@/components/Python/PythonCertification";
import PythonFaqSection from "@/components/Python/PythonFaqSection";
import PythonHeroSection from "@/components/Python/PythonHeroSection";
import PythonServiceDetails from "@/components/Python/PythonServiceDetails";
import PythonServiceHeadline from "@/components/Python/PythonServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function PythonPage() {
    return (
        <div>
            <Header />
            <PythonHeroSection />
            <PythonServiceHeadline />
            <PythonServiceDetails />
            <PythonCareerOpportunities />
            <PythonCertification />
            <PythonFaqSection />
            <Footer />

        </div>
    );
}