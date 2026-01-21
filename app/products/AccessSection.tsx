'use client';

import { motion } from 'motion/react';
import { FiKey, FiAward, FiCheck } from 'react-icons/fi';

const AccessSection = () => {
    const accessFeatures = [
        'Full product access for a defined period',
        'Secure, isolated data environment',
        'Customized process fit (no custom features)',
        'Professional onboarding and support',
    ];

    const ownershipFeatures = [
        'Full ownership (one-time license)',
        'Structured payment plan toward ownership',
        'Access fees may count toward ownership',
        'Defined upgrade terms',
    ];

    return (
        <section className="max-w-360 mx-auto my-24 px-4 md:px-0">
            <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-black capitalize">Access & Ownership</p>
                <h2 className="text-3xl md:text-6xl font-black leading-none mt-2">
                    Start with Access. Own When You&apos;re Ready.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                    FirmDesk is not a SaaS subscription. It&apos;s an enterprise-grade platform
                    offered through a structured access and ownership model.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Access Program Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-brandGreen p-8 md:p-10 rounded-2xl"
                >
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
                        <FiKey className="text-brandGreen text-2xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6">
                        Access Program
                    </h3>
                    <div className="space-y-4">
                        {accessFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 bg-black/20 rounded-full flex items-center justify-center mt-0.5">
                                    <FiCheck className="text-black text-sm" />
                                </div>
                                <p className="text-lg font-medium text-black">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Ownership Paths Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-brandPurple p-8 md:p-10 rounded-2xl text-white"
                >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6">
                        <FiAward className="text-brandPurple text-2xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6">
                        Ownership Paths
                    </h3>
                    <div className="space-y-4">
                        {ownershipFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                                    <FiCheck className="text-white text-sm" />
                                </div>
                                <p className="text-lg font-medium text-white">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer Note */}
            <p className="text-center text-xl md:text-2xl mt-12 max-w-3xl mx-auto">
                This model ensures <span className="font-black">commitment</span>, <span className="font-black">sustainability</span>, and <span className="font-black">long-term value</span>.
            </p>
        </section>
    );
};

export default AccessSection;
