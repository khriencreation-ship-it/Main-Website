import Footer from "@/components/Footer";
import ProductSection from "./ProductSection";
import CtaSection from "@/components/CtaSection";

const page = () => {
  return (
    <>
      <main className="px-4 lg:px-9 mt-[13vh] md:mt-[14vh]">
        <ProductSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default page;
