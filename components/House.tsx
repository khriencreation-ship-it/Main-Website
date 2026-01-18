"use client"
import Image from "next/image";
import HouseImage from '@/public/house-section.png';
import HouseIcon from '@/public/khrien-house-icon.png';
import BrandButton from "./ui/BrandButton";
import { motion } from 'motion/react';

const House = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-360 mx-auto bg-brandGray my-6 shadow-sm rounded-3xl p-8 md:p-20 md:pr-0 md:pb-0 pr-0 pb-0 overflow-hidden"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="w-full md:w-1/2 py-8 md:py-0 text-center md:text-left">
                        <p className="text-lg md:text-2xl font-normal text-black my-4 md:my-8 ">THE HOUSE — YOUR GROWTH NETWORK</p>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-black">A Community for Business Builders</h1>
                        <p className="text-lg md:text-2xl font-normal text-black my-6 md:my-8 ">The House of Khrien is more than a group — it&apos;s a home for business owners on a growth journey.</p>
                        <div className="flex justify-center md:justify-start">
                            <BrandButton
                                buttonPosition="start"
                                button="Join the House"
                                naviagateTo="#"
                                backgroundColor="brandYellow"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Image src={HouseImage} className="w-full h-full object-cover" alt=''></Image>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <section>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className=" px-5 my-12"
                >
                    <div className="flex flex-wrap w-full justify-center md:justify-between items-center gap-6 md:gap-0">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl text-black">Foundation</h1>
                        </div>
                        <Image src={HouseIcon} className="hidden md:block size-16 object-cover" alt=''></Image>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl text-black">Structure</h1>
                        </div>
                        <Image src={HouseIcon} className="hidden md:block size-16 object-cover" alt=''></Image>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl text-black">Occupancy</h1>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default House;