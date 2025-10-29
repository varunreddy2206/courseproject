import ReactServiceHeadline from "@/components/React/ReactServiceHeadline";
import ReactServiceDetails from "@/components/React/ReactServiceDetails";
import ReactCareerOpportunities from "@/components/React/ReactCareerOpportunities";
import ReactCertification from "@/components/React/ReactCertification";
import ReactFaqSection from "@/components/React/ReactFaqSection";
import Header from "@/components/Skill/Header";
import React from "react";
import ReactNativeHeroSection from "@/components/React/ReactNativeHeroSection";
import Footer from "@/components/Skill/FooterSection";
export default function ReactPage() {
    return (
        <div>
            <Header />
            <ReactNativeHeroSection />
            <ReactServiceHeadline />
            <ReactServiceDetails />
            <ReactCareerOpportunities />
            <ReactCertification />
            <ReactFaqSection />
            <Footer />

        </div>
    );
}