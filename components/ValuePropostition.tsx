"use client"
import Image from 'next/image';
import ValuePropostitionImage from '@/public/khrien-landingpage.png';
import BrandButton from './ui/BrandButton';
import { TbTargetArrow } from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { PiUsersThreeLight } from 'react-icons/pi';
import { IconType } from 'react-icons';
import { motion } from 'motion/react';

type Value = {
  title: string;
  description: string;
  icon: IconType;
};

const ValuePropostition = () => {
  const values: Value[] = [
    {
      icon: PiUsersThreeLight,
      title: 'Empowerment',
      description:
        'We build intuitive tools that give teams clarity, control, and confidence to grow.',
    },
    {
      icon: HiOutlineLightBulb,
      title: 'Innovation',
      description:
        'Forward-thinking software designed to adapt, scale, and keep businesses ahead.',
    },
    {
      icon: TbTargetArrow,
      title: 'Impact',
      description:
        'Technology crafted to deliver measurable results and meaningful business outcomes.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className=" max-w-360 mx-auto bg-brandGreen my-6 shadow-sm rounded-3xl p-6 md:p-16"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 p-2 md:p-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[40%]"
          >
            <Image src={ValuePropostitionImage} alt="value-proposition-image" className='w-full h-auto object-cover scale-110 md:scale-125' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-black text-center md:text-left"
          >
            <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-tight text-black">
              Technology with Purpose.
            </h1>
            <p className="text-lg md:text-2xl font-normal text-black my-6 md:my-8 ">
              {' '}
              Khrien builds custom software, applications, and tools that help
              businesses overcome operational challenges and scale with
              confidence. We also provide strategic creative services to make
              your brand and products resonate.
            </p>
            <div className='flex justify-center md:justify-start'>
              <BrandButton
                buttonPosition="start"
                button="How We Help"
                navigateTo="#"
                backgroundColor="brandYellow"
              />
            </div>
            <div className="w-full flex gap-4 mt-8 justify-center md:justify-start items-center">
              <h1 className=" text-xl md:text-2xl font-semibold text-black italic ">
                Innovation.
              </h1>
              <h1 className=" text-xl md:text-2xl font-semibold text-black italic ">
                Growth.
              </h1>
              <h1 className=" text-xl md:text-2xl font-semibold text-black italic ">
                Impact.
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <section className="max-w-360 mx-auto my-8 shadow-sm rounded-3xl  ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {values.map((value, idx) => {
            return (
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                key={idx}
              >
                {/* <div className=" bg-black size-20 rounded-full relative transition-transform duration-500 group-hover:-translate-y-3">
                </div> */}
                <value.icon className=" text-4xl text-brandYellow mb-4 " />
                <h1 className="text-xl font-bold mb-2">{value.title}</h1>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default ValuePropostition;
