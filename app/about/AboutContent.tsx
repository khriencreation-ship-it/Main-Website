'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';

const AboutContent = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="max-w-360 mx-auto bg-brandGray my-6 shadow-sm rounded-3xl p-6 md:p-16"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about-image.jpeg"
              alt="About Khrien"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-black text-center lg:text-left"
        >
          <div className="text-brandPurple text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-black mb-6">
            Building the Future of Business Technology
          </h2>
          <p className="text-lg md:text-xl text-black/80 mb-6 leading-relaxed">
            We are a creative technology company dedicated to building tools and
            digital products that help modern businesses thrive. Our mission is
            to empower teams with powerful software solutions, backed by
            creative expertise that drives real growth.
          </p>
          <p className="text-lg md:text-xl text-black/80 mb-8 leading-relaxed">
            Founded with a vision to bridge the gap between innovation and
            practical business needs, Khrien has grown into a dynamic agency
            that combines cutting-edge technology with creative excellence.
          </p>
          <div className="flex justify-center lg:justify-start">
            <BrandButton
              buttonPosition="start"
              button="Learn More"
              naviagateTo="services"
              backgroundColor="brandGreen"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutContent;
