import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import KarkaPlatforms from '@/components/sections/KarkaPlatforms';
import TrustSection from '@/components/sections/TrustSection';
import AcademyVideoTour from '@/components/sections/AcademyVideoTour';
import ProgramsSection from '@/components/sections/ProgramsSection';
import FourPillarsSection from '@/components/sections/FourPillarsSection';
import PayAfterHiredSection from '@/components/sections/PayAfterHiredSection';
import CareerGuidanceSection from '@/components/sections/CareerGuidanceSection';
import CareerQuiz from '@/components/sections/CareerQuiz';
import HiringPartnersSection from '@/components/sections/HiringPartnersSection';
import StoriesSection from '@/components/sections/StoriesSection';
import FAQSection from '@/components/sections/FAQSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import CTASection from '@/components/sections/CTASection';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#4a044e] selection:text-white">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero: AI-Driven Software Developer & Hiring Partners */}
        <Hero />

        {/* 2. Explore Our Programs: 6 Official Bootcamps & Internships */}
        <ProgramsSection />

        {/* 3. Pay After You Get Hired Model: Zero Upfront Fees */}
        <PayAfterHiredSection />

        {/* 4. Why Karka? The 6 Core Pillars */}
        <TrustSection />

        {/* 5. 4 Pillars of a Job-Ready Tech Career */}
        <FourPillarsSection />

        {/* 6. Explore Karka Platforms: Karka Infini AI & Spike AI */}
        <KarkaPlatforms />

        {/* 7. Voices of Our Learners: Filmstrip Video Player & Student Reviews */}
        <AcademyVideoTour />

        {/* 8. Where Our Karka Graduates Work: Official Hiring Partners */}
        <HiringPartnersSection />

        {/* 9. Real Student Transitions & Capstones */}
        <StoriesSection />

        {/* 10. Choose Your Career Track: 8 Tracks & Targeted Audience Pathways */}
        <CareerGuidanceSection />

        {/* 11. Interactive Career Matcher Diagnostic */}
        <CareerQuiz />

        {/* 12. Frequently Asked Questions (Official Accordion) */}
        <FAQSection />

        {/* 13. Get In Touch With Us: Let's Talk About Your Future */}
        <GetInTouchSection />

        {/* 14. Ready to Future-Proof Your Career? Final CTA */}
        <CTASection />
      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
