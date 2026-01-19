'use client';

import { motion } from 'motion/react';
import { TbTargetArrow } from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { PiUsersThreeLight } from 'react-icons/pi';
import { IconType } from 'react-icons';

type MissionItem = {
  title: string;
  description: string;
  icon: IconType;
};

const MissionSection = () => {
  const missions: MissionItem[] = [
    {
      icon: PiUsersThreeLight,
      title: 'Our Vision',
      description:
        'To be the go-to partner for businesses seeking innovative digital solutions that transform operations and drive sustainable growth.',
    },
    {
      icon: HiOutlineLightBulb,
      title: 'Our Mission',
      description:
        'Empowering teams with powerful software solutions and creative expertise that deliver measurable results and meaningful business outcomes.',
    },
    {
      icon: TbTargetArrow,
      title: 'Our Values',
      description:
        'Innovation, integrity, and impact guide everything we do. We believe in building technology that creates real value for our clients.',
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
    <section className="max-w-360 mx-auto my-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {missions.map((mission, idx) => (
          <motion.div
            variants={itemVariants}
            className="bg-brandLightGray text-black text-center p-10 rounded-xl flex flex-col justify-center items-center space-y-6 hover:bg-brandPurple hover:text-white transition-all duration-500 group"
            key={idx}
          >
            <div className="bg-black size-20 rounded-full relative transition-transform duration-500 group-hover:-translate-y-3">
              <mission.icon className="size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brandGray" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">{mission.title}</h3>
            <p className="text-lg leading-relaxed">{mission.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MissionSection;
