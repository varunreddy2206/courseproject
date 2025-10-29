import ProjectpHeroSection from "@/components/Projects/ProjectHeroSection";
import ProjectsCareerOpportunities from "@/components/Projects/ProjectsCareerOpportunities";
import ProjectsCertification from "@/components/Projects/ProjectsCertification";
import ProjectsFaqSection from "@/components/Projects/ProjectsFaqSection";
import ProjectsServiceDetails from "@/components/Projects/ProjectsServiceDetails";
import ProjectsServiceHeadline from "@/components/Projects/ProjectsServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function ProjectsPage() {
    return (
        <div>
            <Header />
            <ProjectpHeroSection />
            <ProjectsServiceHeadline />
            <ProjectsServiceDetails />
            <ProjectsCareerOpportunities />
            <ProjectsCertification />
            <ProjectsFaqSection />
            <Footer />

        </div>
    );
}