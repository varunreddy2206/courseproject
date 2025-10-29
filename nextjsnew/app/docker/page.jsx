import DockerCareerOpportunities from "@/components/Docker/DockerCareerOpportunities";
import DockerCertification from "@/components/Docker/DockerCertification";
import DockerFaqSection from "@/components/Docker/DockerFaqSection";
import DockerHeroSection from "@/components/Docker/DockerHeroSection";
import DockerServiceDetails from "@/components/Docker/DockerServiceDetails";
import DockerServiceHeadline from "@/components/Docker/DockerServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function DockerPage() {
    return (
        <div>
            <Header /> 
            <DockerHeroSection />
            <DockerServiceHeadline />
            <DockerServiceDetails />
            <DockerCareerOpportunities />
            <DockerCertification />
            <DockerFaqSection  />
            <Footer />

        </div>
    );
}