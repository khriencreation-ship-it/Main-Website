'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';

const HeroSection = () => {
  return (
    <section className="relative bg-brandPurple overflow-hidden max-w-360 mx-auto my-6 mt-[12vh] md:mt-[16vh] shadow-sm rounded-3xl h-[50vh] md:h-[70vh] flex items-center justify-center">
      <div className="relative z-20 text-white space-y-6 w-full text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-7xl font-black uppercase italic leading-tight text-white"
        >
          <span>More Than Creative. Built for Outcomes.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl font-semibold text-white/80"
        >
          We don’t treat branding, content, or design as standalone deliverables.
 Each service is approached as part of a larger system — supporting product adoption, trust, and performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className=""
        >
          <BrandButton
            buttonPosition="center"
            button=" Book a Discovery Call"
            naviagateTo="#"
            backgroundColor="brandYellow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
