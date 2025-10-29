import CoursesServicesSection from '@/components/Services/CoursesServicesSection';
import SkillHero from '@/components/Services/Skill';
import FooterSection from '@/components/Skill/FooterSection';
import Header from '@/components/Skill/Header';
import React from 'react';

export default function ServicesPage() {
  return (
    <main>
      <Header />
        <SkillHero />
        <CoursesServicesSection />
        <FooterSection />
    </main>
     

  )
}