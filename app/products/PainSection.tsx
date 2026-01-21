'use client';

import { motion } from 'motion/react';
import { FiCheck } from 'react-icons/fi';

const PainSection = () => {
    const solutions = [
        'Centralizing legal operations in one system',
        'Reducing manual and repetitive work',
        'Improving visibility, accountability, and collaboration',
        'Supporting structured growth without operational chaos',
    ];

    return (
        <section className="max-w-360 mx-auto my-24 px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Problem Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl md:text-2xl font-black capitalize text-red-600">The Problem</p>
                    <h2 className="text-3xl md:text-6xl font-black leading-none mt-2 mb-6">
                        Legal Operations Are Still Fragmented
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Most law firms rely on disconnected tools, manual processes, and legacy systems
                        that slow work down, increase risk, and limit growth.
                    </p>
                </motion.div>

                {/* Right: Solutions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-brandGray p-8 md:p-10 rounded-2xl border border-brandGreen/30"
                >
                    <h3 className="text-2xl md:text-3xl font-black mb-8 text-brandGreen">
                        FirmDesk solves this by:
                    </h3>
                    <div className="space-y-5">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className="shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                    <FiCheck className="text-brandGreen text-xl" />
                                </div>
                                <p className="text-lg md:text-xl font-medium text-black pt-1.5">
                                    {solution}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PainSection;
