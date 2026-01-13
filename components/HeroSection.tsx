import Link from 'next/link';
import heroImage from '@/public/star-icon.webp';
import Image from 'next/image';
import heroImageTwo from '@/public/hero-image.jpg';

const HeroSection = () => {
  return (
    <div className="min-h-screen max-w-360 mx-auto bg-white my-6 mt-[13vh] shadow-sm rounded-3xl p-8 md:p-20">
      <div className="flex justify-between items-center py-10 flex-col md:flex-row gap-10">
        <div className="text-black space-y-6 w-full md:w-[48%]">
          <h1 className="text-4xl md:text-7xl font-inter font-black uppercase italic leading-tight">
            <span>We Build Tools & Digital Products</span>
            <span className="inline-block mx-4 align-middle">
              <Image src={heroImage} alt="Hero" className="size-24" />
            </span>
            <span>for Modern Businesses.</span>
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-gray-700">
            Empowering teams with powerful software solutions, backed by
            creative expertise.
          </p>
          <div className="flex gap-4 items-center">
            <Link
              href="#"
              className="inline-block border-5 rounded-full border-r border-t border-black font-semibold bg-brandYellow px-10 py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out"
              aria-label="Get Started"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-block border-5 rounded-full border-r border-t border-black font-semibold bg-white px-10 py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out"
              aria-label="Get Started"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[48%]">
          <Image
            src={heroImageTwo}
            alt="Hero"
            className="w-full h-auto scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
