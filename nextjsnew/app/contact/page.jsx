import ContactDetails from '@/components/Contact/ContactDetails';
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactSection from '@/components/Contact/ContactSection';
import Footer from '@/components/Skill/FooterSection';
import Header from '@/components/Skill/Header';
import React from 'react';
export default function ContactPage() {
    return (
        <div>
            <Header />
            <ContactSection />
            <ContactInfo    />
            <ContactDetails />
             <Footer />
        </div>
    );
}