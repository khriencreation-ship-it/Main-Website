'use client';

import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';

const AudienceSection = () => {
    const audiences = [
        'Law firms seeking operational structure',
        'Litigation and corporate practices',
        'Growing firms transitioning from manual systems',
        'Established firms modernizing internal processes',
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="max-w-360 mx-auto my-24 bg-zinc-900 text-white p-8 md:p-16 lg:p-20 rounded-3xl">
            <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-black capitalize text-brandYellow">Who It&apos;s For</p>
                <h2 className="text-3xl md:text-6xl font-black leading-none mt-2">
                    Designed for Serious Legal Practices
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mt-4">
                    <span className='text-brandGreen'>FirmDesk</span>  is ideal for:
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            >
                {audiences.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex items-center gap-4 p-6 bg-zinc-800 rounded-2xl border border-zinc-700 hover:border-brandYellow transition-colors duration-300 group"
                    >
                        <div className="shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <FiArrowRight className="text-brandYellow text-xl" />
                        </div>
                        <p className="text-lg md:text-xl font-semibold">
                            {item}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Closing Statement */}
            <div className="text-center mt-12">
                <p className="text-xl md:text-2xl">
                    If your firm values efficiency, clarity, and long-term stability,
                </p>
                <p className="text-2xl md:text-3xl font-black mt-2">
                    <span className='text-brandYellow'>FirmDesk</span> is built for you.
                </p>
            </div>
        </section>
    );
};

export default AudienceSection;
