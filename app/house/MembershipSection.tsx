'use client';

import { motion } from 'motion/react';
import { FiLayers, FiUsers, FiCpu, FiMessageSquare, FiActivity } from 'react-icons/fi';

const MembershipSection = () => {
    const benefits = [
        {
            title: 'Structured growth paths',
            description: 'Clearly defined stages of business evolution.',
            icon: <FiLayers />,
        },
        {
            title: 'Strategic discussions',
            description: 'High-level sessions focused on real business move.',
            icon: <FiMessageSquare />,
        },
        {
            title: 'Peer collaboration',
            description: 'Learn from other builders in an exclusive environment.',
            icon: <FiUsers />,
        },
        {
            title: 'Practical insights',
            description: 'No fluff (builders only, no spectators allowed).',
            icon: <FiActivity />,
        },
        {
            title: 'Shared ecosystem',
            description: 'Direct access to proprietary tools and systems.',
            icon: <FiCpu />,
        },
    ];

    return (
        <section className="max-w-360 mx-auto my-12 px-4 md:px-0">
            <div className="bg-black text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black uppercase italic mb-4"
                    >
                        What Members Get
                    </motion.h2>
                    <p className="text-xl md:text-2xl font-semibold text-brandYellow mb-12">
                        More Than a Community — An Operating Environment
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="text-3xl text-brandYellow mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-white/60">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-xl md:text-2xl italic font-black text-white/40 uppercase tracking-tighter">
                            Everything is designed to move members forward — not keep them busy.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MembershipSection;
