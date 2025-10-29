import FlutterCareerOpportunities from "@/components/Flutter/FlutterCareerOpportunities";
import FlutterCertification from "@/components/Flutter/FlutterCertification";
import FlutterFaqSection from "@/components/Flutter/FlutterFaqSection";
import FlutterHeroSection from "@/components/Flutter/FlutterHeroSection";
import FlutterServiceDetails from "@/components/Flutter/FlutterServiceDetails";
import FlutterServiceHeadline from "@/components/Flutter/FlutterServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function FlutterPage() {
    return (
        <div>
            <Header />
            <FlutterHeroSection />
            <FlutterServiceHeadline />
            <FlutterServiceDetails />
            <FlutterCareerOpportunities />
            <FlutterCertification />
            <FlutterFaqSection />
            <Footer />

        </div>
    );      
}