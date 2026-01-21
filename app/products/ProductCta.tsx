'use client';

import BrandButton from '@/components/ui/BrandButton';
import { motion } from 'motion/react';

const ProductCta = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-360 mx-auto bg-brandYellow my-24 rounded-3xl p-8 md:p-16 lg:p-20"
        >
            <div className="flex flex-col justify-center items-center text-black max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-none mb-6">
                    See How ChamberDesk Fits Your Firm
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl">
                    Whether you want to explore the product or understand the access program,
                    our team will guide you through the best path.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <BrandButton
                        buttonPosition="center"
                        button="Request a Demo"
                        naviagateTo="#"
                        backgroundColor="brandGreen"
                    />
                    <BrandButton
                        buttonPosition="center"
                        button="Request Access"
                        naviagateTo="#"
                        backgroundColor="brandPurple"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default ProductCta;
