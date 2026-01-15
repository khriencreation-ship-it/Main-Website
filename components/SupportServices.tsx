import React from 'react';
import {
  FiPenTool,
  FiImage,
  FiShare2,
  FiEdit3,
  FiVideo,
  FiLayout,
} from 'react-icons/fi';

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

  return (
    <section className="min-h-screen max-w-360 mx-auto bg-brandGreen my-6 shadow-sm rounded-3xl p-8 md:p-20">
      <div className="flex flex-col space-y-5 justify-center items-center max-w-3xl mx-auto text-center text-black">
        <div className="">
          <p>CREATIVE SUPPORT SERVICES</p>
        </div>
        <h1 className="text-6xl font-black leading-none text-black">
          Strategic Services that Complement Technology
        </h1>
        <p className="text-2xl">
          Our creative service suite enhances your digital presence and supports
          product adoption
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-brandPurple/30 py-12 px-8 
                 shadow-sm hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 bg-brandYellow/80"
          >
            {/* Icon */}
            <div
              className="mb-5 w-14 h-14 flex items-center justify-center
                      text-brandPurple text-3xl font-bold
                      bg-brandGreen rounded-full"
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-brandPurple">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportServices;
