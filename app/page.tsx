import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import House from '@/components/House';
import SupportServices from '@/components/SupportServices';
import ValuePropostition from '@/components/ValuePropostition';
import TrustSection from '@/components/TrustSection';
import WhatsApp from '@/components/ui/WhatsApp';

const page = () => {
  return (
    <>
      <main className="px-4 lg:px-9 min-h-screen">
        <WhatsApp />
        <HeroSection />
        <ValuePropostition />
        <SupportServices />
        {/* <House /> */}
        <TrustSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
};

export default page;
