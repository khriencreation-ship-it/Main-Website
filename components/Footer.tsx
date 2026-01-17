import Image from 'next/image';
import logo from '@/public/sample-logo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='max-w-360 mx-auto bg-brandGreen my-6 shadow-sm rounded-3xl p-8 md:p-16'>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
            <li className='text-xl font-bold hover:text-brandPurple transition-all duration-100 ease-in-out'>About Us</li>
            <li className='text-xl font-bold hover:text-brandPurple transition-all duration-100 ease-in-out'>Services</li>
            <li className='text-xl font-bold hover:text-brandPurple transition-all duration-100 ease-in-out'>House</li>
            <li className='text-xl font-bold hover:text-brandPurple transition-all duration-100 ease-in-out'>Academy</li>
            <li className='text-xl font-bold hover:text-brandPurple transition-all duration-100 ease-in-out'>Contact Us</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className='text-2xl font-bold'>Connect with us</h1>
          <div className=" flex space-x-4">
            <span className='border border-brandGray p-3 rounded-full'><FaFacebook className='scale-150 hover:text-brandPurple transition-all duration-100 ease-in-out' /></span>
            <span className='border border-brandGray p-3 rounded-full'><FaInstagram className='scale-150 hover:text-brandPurple transition-all duration-100 ease-in-out' /></span>
            <span className='border border-brandGray p-3 rounded-full'><BsTwitterX className='scale-150 hover:text-brandPurple transition-all duration-100 ease-in-out' /></span>
            <span className='border border-brandGray p-3 rounded-full'><FaLinkedin className='scale-150 hover:text-brandPurple transition-all duration-100 ease-in-out' /></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
