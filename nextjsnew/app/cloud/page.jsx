import CloudCareerOpportunities from "@/components/Cloud/CloudCareerOpportunities";
import CloudCertification from "@/components/Cloud/CloudCertification";
import CloudFaqSection from "@/components/Cloud/CloudFaqSection";
import CloudHeroSection from "@/components/Cloud/CloudHeroSection";
import CloudServiceDetails from "@/components/Cloud/CloudServiceDetails";
import CloudServiceHeadline from "@/components/Cloud/CloudServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function CloudPage() {
    return (
        <div>
            <Header />
            <CloudHeroSection />
            <CloudServiceHeadline />
            <CloudServiceDetails />
            <CloudCareerOpportunities />
            <CloudCertification />
            <CloudFaqSection />
            <Footer />

        </div>
    );
}