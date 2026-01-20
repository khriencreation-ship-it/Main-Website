'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

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
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70 z-10" />
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-5xl md:text-8xl font-black uppercase italic drop-shadow-lg"
        >
          About Khrien
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-white/80 text-lg md:text-2xl mt-4 max-w-2xl mx-auto font-medium"
        >
          Where Innovation Meets Purpose
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
