"use client"
import Image from 'next/image';
import heroImage from '@/public/star-icon.webp';
import {
  FiPenTool,
  FiImage,
  FiShare2,
  FiEdit3,
  FiVideo,
  FiLayout,
} from 'react-icons/fi';
import BrandButton from './ui/BrandButton';
import { motion } from 'motion/react';

const SupportServices = () => {
  const services = [
    {
      title: 'Branding & Identity',
      description:
        'We build strong, memorable brand identities that reflect your values and connect with your audience. From logo design to brand guidelines, we ensure consistency and clarity across all touchpoints.',
      icon: <FiPenTool />,
    },
    {
      title: 'Graphics Design',
      description:
        'Our graphic design services deliver visually compelling designs that communicate your message effectively. We create eye-catching visuals for digital and print, tailored to your brand style.',
      icon: <FiImage />,
    },
    {
      title: 'Social Media Management',
      description:
        'We manage and grow your social media presence with strategic planning, consistent posting, and audience engagement. Our goal is to increase brand awareness and build meaningful connections.',
      icon: <FiShare2 />,
    },
    {
      title: 'Content Creation',
      description:
        'We produce high-quality, engaging content that tells your story and drives results. From copywriting to visual content, everything is crafted to resonate with your target audience.',
      icon: <FiEdit3 />,
    },
    {
      title: 'Motion Graphics & Video',
      description:
        'We create dynamic motion graphics and videos that capture attention and communicate ideas clearly. Perfect for marketing, social media, and brand storytelling.',
      icon: <FiVideo />,
    },
    {
      title: 'UI/UX & Web Design',
      description:
        'We design intuitive, user-centered websites and digital experiences that are visually appealing and easy to use. Our focus is on usability, performance, and conversion-driven design.',
      icon: <FiLayout />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative max-w-360 mx-auto bg-black my-6 shadow-sm rounded-3xl p-6 md:p-20"
    >
      {/* <Image
        src={heroImage}
        alt="Hero"
        className="hidden md:block size-12 absolute right-32 top-20 animate-pulse"
      />
      <Image
        src={heroImage}
        alt="Hero"
        className="hidden md:block size-12 absolute left-32 top-40 animate-pulse"
      />
      <Image
        src={heroImage}
        alt="Hero"
        className="hidden md:block size-12 absolute right-5 top-1/2 animate-pulse"
      />
      <Image
        src={heroImage}
        alt="Hero"
        className="hidden bg-brandYellow rounded-full p-1 md:block size-12 absolute bottom-16 left-20 animate-pulse"
      /> */}
      <div className="flex flex-col space-y-5 justify-center items-center max-w-3xl mx-auto text-center text-brandYellow">
        <div className="text-xl md:text-2xl font-black">
          <p className='capitalize'>creative support services</p>
        </div>
        <h1 className="text-3xl md:text-6xl font-black leading-none text-brandYellow">
          Strategic Services that Complement Technology
        </h1>
        <p className="text-lg md:text-2xl">
          Our creative service suite enhances your digital presence and supports
          product adoption
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            {/* Icon */}
            <div
              className="text-3xl text-brandYellow mb-4"
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-white/60">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-col space-y-5 justify-center items-center max-w-3xl mx-auto text-center text-black">
        <p className="text-2xl">
          These services ensure your software, tools, and business present exceptionally everywhere they show up.
        </p>
        <BrandButton
          buttonPosition="center"
          button="Explore Services"
          navigateTo="/services"
          backgroundColor="brandGreen"
        />
      </div>
    </motion.section>
  );
};

export default SupportServices;
