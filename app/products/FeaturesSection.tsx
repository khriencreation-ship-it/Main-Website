'use client';

import { motion } from 'motion/react';
import {
    FiBriefcase,
    FiUsers,
    FiFileText,
    FiCheckSquare,
    FiBook,
    FiShield,
    FiBarChart2,
} from 'react-icons/fi';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Case & Matter Management',
            description: 'Organize and track all your cases in one place with full visibility.',
            icon: <FiBriefcase />,
        },
        {
            title: 'Client & Contact Records',
            description: 'Maintain comprehensive client profiles and contact history.',
            icon: <FiUsers />,
        },
        {
            title: 'Document Management',
            description: 'Version control and secure document storage for all files.',
            icon: <FiFileText />,
        },
        {
            title: 'Task & Workflow Tracking',
            description: 'Assign tasks, set deadlines, and track progress across teams.',
            icon: <FiCheckSquare />,
        },
        {
            title: 'Internal Knowledge Base',
            description: 'Store notes, records, and institutional knowledge securely.',
            icon: <FiBook />,
        },
        {
            title: 'Role-Based Access Control',
            description: 'Control who sees what with granular permission settings.',
            icon: <FiShield />,
        },
        {
            title: 'Reporting & Insights',
            description: 'Get operational visibility with built-in reporting tools.',
            icon: <FiBarChart2 />,
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
                <p className="text-xl md:text-2xl font-black capitalize">Key Features</p>
                <h2 className="text-3xl md:text-6xl font-black leading-none mt-2">
                    Built for Control, Clarity, and Scale
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="rounded-2xl border border-brandPurple/30 py-12 px-8 
                             shadow-sm hover:shadow-xl hover:-translate-y-1
                             transition-all duration-300 bg-brandGray group text-center"
                    >
                        {/* Icon */}
                        <div
                            className="mb-5 w-14 h-14 mx-auto flex items-center justify-center
                                    text-brandYellow text-3xl font-bold
                                    bg-black rounded-full group-hover:-translate-y-3 transition-all duration-300 ease-in-out"
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
                All features work together as a <span className="font-black text-brandGreen">single system</span> — not as add-ons.
            </p>
        </section>
    );
};

export default FeaturesSection;
