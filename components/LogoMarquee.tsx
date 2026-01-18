'use client';

import { motion } from 'motion/react';
import React from 'react';

const LogoMarquee = () => {
    // Array of client names/logos for the marquee
    const clients = [
        'Nike',
        'Adidas',
        'Apple',
        'Microsoft',
        'Google',
        'Amazon',
        'Meta',
        'Tesla',
        'Disney',
        'Samsung',
    ];

    // We duplicate the array to ensure seamless infinite scrolling
    const duplicatedClients = [...clients, ...clients];

    return (
        <div className="w-full mt-12 py-6 overflow-hidden relative">
            <div
                className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, var(--color-brandGreen), transparent)' }}
            />
            <div
                className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, var(--color-brandGreen), transparent)' }}
            />

            <motion.div
                className="flex whitespace-nowrap gap-16"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {duplicatedClients.map((client, index) => (
                    <div
                        key={index}
                        className="text-2xl md:text-3xl font-black uppercase italic text-black/40 hover:text-black transition-colors duration-300"
                    >
                        {client}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoMarquee;
