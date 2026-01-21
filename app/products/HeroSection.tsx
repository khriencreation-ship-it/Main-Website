'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-360 mx-auto my-6 mt-[12vh] md:mt-[14vh] shadow-sm rounded-3xl h-[50vh] md:h-[70vh] flex items-center justify-center">
      <Image
        src="/about-bg.jpeg"
        alt="About Khrien Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70 z-10 " />
      <div className="relative z-20 text-white space-y-6 w-full text-center px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-7xl font-black uppercase italic leading-tight text-white"
        >
          <span>Modern Legal Operations Software
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl font-semibold text-white/80"
        >
          <span>FirmDesk is a secure, purpose-built legal operations platform designed to support how modern law firms actually work — from case management to internal workflows and institutional knowledge.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className=" flex items-center justify-center gap-4"
        >
          <BrandButton
            buttonPosition="center"
            button="Request a Demo"
            naviagateTo="#"
            backgroundColor="brandYellow"
          />
          <BrandButton
            buttonPosition="center"
            button="Request Access"
            naviagateTo="#"
            backgroundColor="brandYellow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
