import React from 'react';
import HeroSection from './HeroSection';
import TextMarquee from './TextMarquee';
import AboutContent from './AboutContent';
import MissionSection from './MissionSection';
import TrustSection from '@/components/TrustSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <main className="px-4 lg:px-9 min-h-screen">
      <HeroSection />
      <TextMarquee />
      <AboutContent />
      <MissionSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
