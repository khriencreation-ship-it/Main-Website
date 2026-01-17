"use client"
import Link from 'next/link';
import heroImage from '@/public/star-icon.webp';
import Image from 'next/image';
import BrandButton from './ui/BrandButton';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-360 mx-auto bg-white my-6 mt-[14vh] shadow-sm rounded-3xl p-8 md:p-20">
      <div className="">
        <video  autoPlay muted loop playsInline
        className='absolute top-0 left-0 inset-1 w-full h-full object-cover z-0'
        preload='metadata'
        poster='https://res.cloudinary.com/dluhzoptp/image/upload/f_auto,q_auto,w_1920/landingPage-poster_nlsczt
' >
          <source
  src="https://res.cloudinary.com/dluhzoptp/video/upload/f_auto,q_auto,w_1920,h_1080,c_fill/landingPage-video_dsx4r1"
  type="video/mp4"
/>
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      <div className=" relative flex justify-between items-center py-10 flex-col md:flex-row gap-10 z-30">
        <div className="text-white space-y-6 w-full text-center">
          <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-tight text-white">
            <span>We Build Tools & Digital Products</span>
            <span> for Modern Businesses.</span>
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-white/80">
            Empowering teams with powerful software solutions, backed by
            creative expertise.
          </p>
          <div className="flex gap-4 items-start justify-center">
            <BrandButton
              buttonPosition="start"
              button="Get Started"
              naviagateTo="#"
              backgroundColor="brandYellow"
            />
            <BrandButton
              buttonPosition="start"
              button="Explore Solutions"
              naviagateTo="#"
              backgroundColor="brandGreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
