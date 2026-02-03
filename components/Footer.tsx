"use client"
import Image from 'next/image';
import logo from '@/public/sample-logo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden overscroll-auto max-w-360 mx-auto bg-brandGreen my-6 z-20 shadow-sm rounded-3xl p-8 md:p-20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        <div className="logo">
          <Image src={logo} width={100} height={100} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className='text-2xl font-bold'>Contact</h1>
          <ul className='space-y-2'>
            <li className='text-xl font-bold'><a href="mailto:hello@khrien.com">hello@khrien.com</a></li>
            <li className='text-xl font-bold'><a href="tel:+2349061593966">+2349061593966</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className='text-2xl font-bold'>Useful Links</h1>
          <ul className='space-y-2'>
            <li className='text-xl font-bold hover:text-brandYellow transition-all duration-100 ease-in-out'>About Us</li>
            <li className='text-xl font-bold hover:text-brandYellow transition-all duration-100 ease-in-out'>Services</li>
            <li className='text-xl font-bold hover:text-brandYellow transition-all duration-100 ease-in-out'>House</li>
            <li className='text-xl font-bold hover:text-brandYellow transition-all duration-100 ease-in-out'>Academy</li>
            <li className='text-xl font-bold hover:text-brandYellow transition-all duration-100 ease-in-out'>Contact Us</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className='text-2xl font-bold'>Connect with us</h1>
          <div className=" flex space-x-4">
            <span className='border border-brandGray p-3 rounded-full'><FaFacebook className='scale-150 hover:text-brandYellow transition-all duration-100 ease-in-out' /></span>
            <span className='border border-brandGray p-3 rounded-full'><FaInstagram className='scale-150 hover:text-brandYellow transition-all duration-100 ease-in-out' /></span>
            <span className='border border-brandGray p-3 rounded-full'><FaLinkedin className='scale-150 hover:text-brandYellow transition-all duration-100 ease-in-out' /></span>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 z-0 left-1/2 -translate-x-1/2 translate-y-1/4">
        <Image src={logo} className='scale-200 z-0 opacity-10' alt=''></Image>
      </div>
    </footer>
  );
};

export default Footer;
