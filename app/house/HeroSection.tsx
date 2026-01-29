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
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-6xl font-black uppercase italic leading-tight text-white"
        >
          <span>Where Business Owners Build Smarter</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-2xl font-semibold text-white/80"
        >
          <span>
            The House is a private ecosystem for founders and operators building
            real businesses — from first idea to fully operational systems. This
            is where structure replaces confusion, and growth becomes
            intentional.
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center items-center space-x-6"
        >
          <BrandButton
            buttonPosition="center"
            button="Join the House "
            navigateTo="#"
            backgroundColor="brandGreen"
          />
          <BrandButton
            buttonPosition="center"
            button="Apply to Enter"
            navigateTo="#"
            backgroundColor="brandYellow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
