import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SupportServices from '@/components/SupportServices';
import ValuePropostition from '@/components/ValuePropostition';

const page = () => {
  return (
    <>
      <main className="px-4 lg:px-9 min-h-screen">
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
