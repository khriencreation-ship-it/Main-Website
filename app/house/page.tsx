import Footer from '@/components/Footer';
import React from 'react';
import HeroSection from './HeroSection';
import PromiseSection from './PromiseSection';
import PathsSection from './PathsSection';
import MembershipSection from './MembershipSection';
import ToolsSection from './ToolsSection';
import HouseCta from './HouseCta';

const page = () => {
  return (
    <>
      <main className="px-4 lg:px-9 mt-[13vh] md:mt-[14vh]">
        <HeroSection />
        <PromiseSection />
        <PathsSection />
        <MembershipSection />
        <ToolsSection />
        {/* <JoinSection /> */}
        <HouseCta />
      </main>
      <Footer />
    </>
  );
};

export default page;
