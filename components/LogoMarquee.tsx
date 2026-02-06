'use client';

import { motion } from 'motion/react';
import Image from 'next/image';


const LogoMarquee = () => {
    // Array of client names/logos for the marquee
    const clients = [
        "/alister-greene.png",
        "/beanewborn.png",
        "/bentlab-kids.png",
        "/gaise-baba.png",
        "/moade-associates.png",
        "/neegles.png",
        "/TFC-Logo.png",
    ];

    // We duplicate the array to ensure seamless infinite scrolling
    const duplicatedClients = [...clients, ...clients];
    const duration = typeof window !== "undefined" && window.innerWidth < 768
        ? 30
        : 50;
    return (
        <div className="w-full mt-12 py-2 overflow-hidden relative">
            <div
                className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, var(--color-brandGreen), transparent)' }}
            />
            <div
                className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, var(--color-brandGreen), transparent)' }}
            />

            <motion.div
                className="flex w-max"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {duplicatedClients.map((client, index) => (
                    <div
                        key={index}
                        className="shrink-0 px-5"
                    >
                        <Image src={client} alt="Client Logo" width={400} height={400} className='w-[300px] h-[300px] md:w-[400px] md:h-[200px] object-contain transition-transform hover:scale-105' />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoMarquee;
