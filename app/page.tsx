import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustSection from '@/components/sections/TrustSection';
import AcademyVideoTour from '@/components/sections/AcademyVideoTour';
import KarkaPlatforms from '@/components/sections/KarkaPlatforms';
import CareerGuidanceSection from '@/components/sections/CareerGuidanceSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import CareerQuiz from '@/components/sections/CareerQuiz';
import HowItWorks from '@/components/sections/HowItWorks';
import StoriesSection from '@/components/sections/StoriesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <KarkaPlatforms />
        <AcademyVideoTour />
        <TrustSection />
        <CareerGuidanceSection />
        <ProgramsSection />
        <CareerQuiz />
        <HowItWorks />
        <StoriesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
