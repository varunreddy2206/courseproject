import DataScienceCareerOpportunities from "@/components/DataScience/DataScienceCareerOpportunities";
import DataScienceCertification from "@/components/DataScience/DataScienceCertification";
import DataScienceFaqSection from "@/components/DataScience/DataScienceFaqSection";
import DataScienceHeroSection from "@/components/DataScience/DataScienceHeroSection";
import DataScienceServiceDetails from "@/components/DataScience/DataScienceServiceDetails";
import DataScienceServiceHeadline from "@/components/DataScience/DataScienceServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function DataSciencePage() {
    return (
        <div>
            <Header />
            <DataScienceHeroSection />
            <DataScienceServiceHeadline />
            <DataScienceServiceDetails />  
            <DataScienceCareerOpportunities />
            <DataScienceCertification />
            <DataScienceFaqSection />
            <Footer />

        </div>
    );
}