'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';
import purplePattern from '@/public/brandPurplePatterns.png';
import houseIcon from '@/public/house-section.png';

const HeroSection = () => {
  return (
    <section className="relative bg-brandPurple overflow-hidden max-w-360 mx-auto my-6 mt-[13vh] md:mt-[16vh] shadow-sm rounded-[3rem] min-h-[70vh] flex flex-col lg:flex-row items-center justify-center">

      <div className="relative z-10 text-white w-full px-8 md:px-20 py-20 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brandYellow">The Private Growth Ecosystem</span>

          <h1 className="text-5xl md:text-6xl max-w-4xl  font-black uppercase italic leading-[0.85] text-white tracking-tighter mb-8">
            Where <span className="text-brandYellow">Business Owners</span> Build Smarter
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl space-y-10"
        >
          <p className="text-xl md:text-2xl font-medium text-white/80 leading-tight">
            The House is a private ecosystem for founders and operators building real businesses — from first idea to fully operational systems.
            This is where structure replaces confusion, and growth becomes intentional.

          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <BrandButton
              buttonPosition="start"
              button="Join the House"
              navigateTo="#"
              backgroundColor="brandGreen"
            />
            <BrandButton
              buttonPosition="start"
              button="Apply for Membership"
              navigateTo="#"
              backgroundColor="brandYellow"
            />
          </div>
        </motion.div>


      </div>

      <motion.div
        className=''
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, }}
        transition={{
          opacity: { duration: 0.8, ease: 'easeOut' },
          scale: { duration: 1.2, ease: 'easeOut' },
          rotate: { duration: 1.2, ease: 'easeOut' },
        }}
      >
        <Image src={houseIcon} className="object-cover z-30" alt="" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
