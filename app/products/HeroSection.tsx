'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';

const HeroSection = () => {
  return (
    <section className="rel ative bg-brandPurple overflow-hidden max-w-360 mx-auto my-6 mt-[13vh] md:mt-[16vh] shadow-sm rounded-3xl flex flex-col justify-center items-center gap-1 h-[50vh] md:h-[70vh]">

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <Image
          src="/white.png"
          alt="FirmDesk Image"
          width={400} height={100}
          className=""
          priority
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white space-y-6 px-6 p y-8 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-semibold text-white/90"
        >
          FirmDesk is a secure, purpose-built legal operations platform designed
          to support how modern law firms actually work — from case management to
          internal workflows and institutional knowledge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* <BrandButton
            buttonPosition="center"
            button="Request a Demo"
            navigateTo="#"
            backgroundColor="brandYellow"
          /> */}
          <BrandButton
            buttonPosition="center"
            button="See Demo"
            navigateTo="#"
            backgroundColor="brandYellow"
          />
          <BrandButton
            buttonPosition="center"
            button="See Pitch Deck"
            navigateTo="#"
            backgroundColor="brandGreen"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;