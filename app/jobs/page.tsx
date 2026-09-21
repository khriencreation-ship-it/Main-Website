import React from 'react';
import { Metadata } from 'next';
import JobsHeroSection from '@/components/jobs/JobsHeroSection';
import JobListSection from '@/components/jobs/JobListSection';
import WhyJoinSection from '@/components/jobs/WhyJoinSection';
import TrustSection from '@/components/TrustSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers & Jobs | Open Roles at Khrien',
  description:
    'Explore career opportunities at Khrien. Join our team as a Community Manager or apply for open roles in tech, design, marketing, and strategy.',
};

const JobsPage = () => {
  return (
    <main className="px-4 lg:px-9 min-h-screen">
      <JobsHeroSection />
      <JobListSection />
      <WhyJoinSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default JobsPage;
