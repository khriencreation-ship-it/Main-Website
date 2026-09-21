'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const JobsHeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-360 mx-auto my-6 mt-[13vh] md:mt-[16vh] shadow-sm rounded-3xl bg-zinc-900 border border-zinc-800 p-8 md:p-20 text-white">
      {/* Background accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brandGreen/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brandPurple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-sm font-extrabold uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-brandYellow animate-ping" />
          Careers at Khrien
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
        >
          Join Our Mission to Build <span className="text-brandGreen">Smarter Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          We are looking for creative thinkers, passionate builders, and strategic minds to shape the future of tech, brand execution, and community growth.
        </motion.p>
      </div>
    </section>
  );
};

export default JobsHeroSection;
