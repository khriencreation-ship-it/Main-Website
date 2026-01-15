import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SupportServices from '@/components/SupportServices';
import ValuePropostition from '@/components/ValuePropostition';

const page = () => {
  return (
    <>
      <main className="">
        <HeroSection />
        <ValuePropostition />
        <SupportServices />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
};

export default page;
