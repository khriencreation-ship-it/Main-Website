'use client';

import { motion } from 'motion/react';

const TextMarquee = () => {
  const phrases = [
    'Founded with a vision to empower businesses through creative digital solutions',
    'Khrien has grown into a dynamic agency',
    'Building tools that drive real growth',
    'Innovation meets purpose',
  ];

  const duplicatedPhrases = [...phrases, ...phrases];

  return (
    <div className="w-full py-6 overflow-hidden bg-black relative">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedPhrases.map((phrase, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-xl md:text-2xl font-semibold text-brandYellow">
              {phrase}
            </span>
            <span className="text-brandPurple text-3xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TextMarquee;
