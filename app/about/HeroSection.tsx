import Image from "next/image";
import heroImage from '@/public/about-bg.jpeg'

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden max-w-360 mx-auto bg-white my-6 mt-[12vh] md:mt-[14vh] shadow-sm rounded-3xl p-8 md:p-20">
        <Image src={heroImage} alt="" className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-black/50 z-10" />
      </section>
    </>
  );
};
export default HeroSection;
