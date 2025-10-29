import SkillHero from '@/components/Skill/Skill'; 
import HeroSection from '@/components/Herosection/Herosection';  
import React from 'react';
import AiHeroSection from '@/components/Skill/AiHeroSection';
import ExpectationsSection from '@/components/Skill/ExpectationsSection';
import CourseLearningSection from '@/components/Skill/CourseLearningSection';
import AIDangerQuoteSection from '@/components/Skill/AIDangerQuoteSection';
import CourseForYouSection from '@/components/Skill/CourseForYouSection';
import TestimonialsSection from '@/components/Skill/TestimonialsSection';
import InstructorBioSection from '@/components/Skill/InstructorBioSection';
import MentorShowcaseSection from '@/components/Skill/MentorShowcaseSection';
import EnrollmentSection from '@/components/Skill/EnrollmentSection';
import FaqAnswersSection from '@/components/Skill/FaqAnswersSection';
import Header from '@/components/Skill/Header';
import FooterSection from '@/components/Skill/FooterSection';
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      {/* <SkillHero /> */}
      <AiHeroSection />
      <ExpectationsSection />
      <CourseLearningSection />
      <AIDangerQuoteSection />
      <CourseForYouSection />
      <TestimonialsSection />
      {/* <InstructorBioSection /> */}
      {/* <MentorShowcaseSection /> */}
      <EnrollmentSection />
      <FaqAnswersSection />
      <FooterSection />
      {/* other sections */}
    </main>
  );
}
