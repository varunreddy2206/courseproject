import DevopsCareerOpportunities from "@/components/Devops/DevopsCareerOpportunities";
import DevopsCertification from "@/components/Devops/DevopsCertification";
import DevopsFaqSection from "@/components/Devops/DevopsFaqSection";
import DevOpsHeroSection from "@/components/Devops/DevOpsHeroSection";
import DevopsServiceDetails from "@/components/Devops/DevopsServiceDetails";
import DevopsServiceHeadline from "@/components/Devops/DevopsServiceHeadline";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function DevOpsPage() {
    return (
        <div>
            <Header />
            <DevOpsHeroSection />
            <DevopsServiceHeadline />
            <DevopsServiceDetails />
            <DevopsCareerOpportunities />
            <DevopsCertification />
            <DevopsFaqSection />
            <Footer />

        </div>
    );
}