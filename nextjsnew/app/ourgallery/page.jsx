import OurGallery from "@/components/Ourgallery/OurGallery";
import OurServicesSection from "@/components/Ourgallery/OurServicesSection";
import Footer from "@/components/Skill/FooterSection";
import Header from "@/components/Skill/Header";
import React from "react";
export default function Ourgalleryage() {
    return (
        <div>
            <Header />
            <OurServicesSection />
            <OurGallery />
            <Footer />
        </div>
    );
}