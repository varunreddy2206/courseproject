import KotlinappCareerOpportunities from "@/components/Kotlinapp/KotlinappCareerOpportunities";
import KotlinappCertification from "@/components/Kotlinapp/KotlinappCertification";
import KotlinappFaqSection from "@/components/Kotlinapp/KotlinappFaqSection";
import KotlinappServiceDetails from "@/components/Kotlinapp/KotlinappServiceDetails";
import KotlinappServiceHeadline from "@/components/Kotlinapp/KotlinappServiceHeadline";
import KotlinHeroSection from "@/components/Kotlinapp/KotlinHeroSection";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function KotlinappPage() {
    return (
        <div>
            <Header />
            <KotlinHeroSection />
            <KotlinappServiceHeadline />
            <KotlinappServiceDetails />
            <KotlinappCareerOpportunities />
            <KotlinappCertification />
            <KotlinappFaqSection    />
            <Footer />

        </div>
    );
}