'use client';

import { motion } from 'motion/react';
import {
    FiLock,
    FiServer,
    FiShield,
    FiUserCheck,
    FiHeadphones,
} from 'react-icons/fi';

const TechnologySection = () => {
    const features = [
        {
            title: 'Secure Data Isolation',
            description: 'Each firm gets a completely isolated data environment.',
            icon: <FiLock />,
            hoverColor: 'hover:bg-brandYellow',
        },
        {
            title: 'Modern Architecture',
            description: 'Built on scalable, modern infrastructure.',
            icon: <FiServer />,
            hoverColor: 'hover:bg-brandPurple',
        },
        {
            title: 'Security Standards',
            description: 'Industry-standard security practices throughout.',
            icon: <FiShield />,
            hoverColor: 'hover:bg-brandGreen',
        },
        {
            title: 'Role-Based Permissions',
            description: 'Granular access control for every user.',
            icon: <FiUserCheck />,
            hoverColor: 'hover:bg-brandYellow',
        },
        {
            title: 'Dedicated Support',
            description: 'Professional onboarding and technical support.',
            icon: <FiHeadphones />,
            hoverColor: 'hover:bg-brandPurple',
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
        <section className="max-w-360 mx-auto my-24 px-4 md:px-0">
            <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-black capitalize">Technology & Security</p>
                <h2 className="text-3xl md:text-6xl font-black leading-none mt-2">
                    Enterprise-<span className='text-brandYellow'>Ready</span> by Design
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.slice(0, 3).map((feature, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`rounded-2xl border border-brandPurple/30 py-12 px-8 
                             shadow-sm hover:shadow-xl
                             transition-all duration-300 bg-brandGray group text-center ${feature.hoverColor}`}
                    >
                        {/* Icon */}
                        <div
                            className="mb-5 w-14 h-14 mx-auto flex items-center justify-center
                                    text-brandPurple text-3xl font-bold
                                    bg-black rounded-full group-hover:-translate-y-3 group-hover:text-white transition-all duration-300 ease-in-out"
                        >
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-semibold mb-3 text-black">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-black text-lg leading-relaxed text-center">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8"
            >
                {features.slice(3, 5).map((feature, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`rounded-2xl border border-brandPurple/30 py-12 px-8 
                             shadow-sm hover:shadow-xl
                             transition-all duration-300 bg-brandGray group text-center ${feature.hoverColor}`}
                    >
                        {/* Icon */}
                        <div
                            className="mb-5 w-14 h-14 mx-auto flex items-center justify-center
                                    text-brandPurple text-3xl font-bold
                                    bg-black rounded-full group-hover:-translate-y-3 group-hover:text-white transition-all duration-300 ease-in-out"
                        >
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-semibold mb-3 text-black">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-black text-lg leading-relaxed text-center">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom callout */}
            <p className="text-center text-xl md:text-2xl mt-12 max-w-3xl mx-auto">
                Built to meet the operational demands of <span className="font-black text-brandYellow">professional legal environments</span>.
            </p>
        </section>
    );
};

export default TechnologySection;
