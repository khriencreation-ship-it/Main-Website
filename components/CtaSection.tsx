"use client"
import BrandButton from './ui/BrandButton';
import { motion } from 'motion/react';

const CtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-360 mx-auto bg-brandGray my-6 shadow-sm rounded-3xl p-6 md:p-20"
    >
      <div className=" flex flex-col justify-center items-center text-black max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-center">
          Build Smarter. Build with Khrien.
        </h1>
        <p className="text-xl md:text-2xl text-center my-6">
          Whether you&apos;re launching a product, structuring your operations, or
          scaling a business, we&apos;re here to help with tools and creative
          excellence.
        </p>
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6 mx-auto">
          <BrandButton
            buttonPosition="center"
            button="Schedule A meeting"
            navigateTo="#"
            backgroundColor="brandGreen"
          />
          <BrandButton
            buttonPosition="center"
            button="Contact Us"
            navigateTo="contact"
            backgroundColor="brandYellow"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
