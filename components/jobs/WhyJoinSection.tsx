'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FaRocket, FaLightbulb, FaHeart, FaGraduationCap } from 'react-icons/fa6';

const PERKS = [
  {
    icon: FaRocket,
    title: 'Impact-Driven Work',
    desc: 'Work on transformational projects that directly shape businesses, brand identities, and digital products.',
    color: 'text-brandGreen',
    borderColor: 'border-brandGreen/30',
  },
  {
    icon: FaGraduationCap,
    title: 'Continuous Learning',
    desc: 'Grow faster with hands-on mentorship, access to premium tools, and continuous skill development.',
    color: 'text-brandPurple',
    borderColor: 'border-brandPurple/30',
  },
  {
    icon: FaLightbulb,
    title: 'Creative Autonomy',
    desc: 'Bring your ideas to life in an environment that values innovation, bold initiative, and smart solutions.',
    color: 'text-brandYellow',
    borderColor: 'border-brandYellow/30',
  },
  {
    icon: FaHeart,
    title: 'Culture & Balance',
    desc: 'Enjoy flexible hybrid work structures, collaborative teamwork, and an inspiring work environment.',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
  },
];

const WhyJoinSection = () => {
  return (
    <section className="max-w-360 mx-auto my-16 px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          Why Build Your Career at <span className="text-brandGreen">Khrien</span>?
        </h2>
        <p className="text-zinc-400 text-lg">
          We foster an atmosphere where ambitious individuals thrive, create exceptional work, and build the future together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {PERKS.map((perk, i) => {
          const Icon = perk.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-zinc-900/90 border ${perk.borderColor} p-6 rounded-3xl space-y-4 hover:bg-zinc-800/80 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center ${perk.color} text-2xl`}>
                <Icon />
              </div>
              <h3 className="text-xl font-bold text-white">{perk.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{perk.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyJoinSection;
