import BrandButton from './ui/BrandButton';

const CtaSection = () => {
  return (
    <section className="max-w-360 mx-auto bg-brandGray my-6 shadow-sm rounded-3xl p-8 md:p-20">
      <div className=" flex flex-col justify-center items-center text-black max-w-4xl mx-auto">
        <h1 className="text-8xl font-black text-center">
          Build Smarter. Build with Khrien.
        </h1>
        <p className="text-2xl text-center my-6">
          Whether you’re launching a product, structuring your operations, or
          scaling a business, we’re here to help with tools and creative
          excellence.
        </p>
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6 mx-auto">
          <BrandButton
            buttonPosition="center"
            button="Let’s Build Together"
            naviagateTo="#"
            backgroundColor="brandGreen"
          />
          <BrandButton
            buttonPosition="center"
            button="Contact Us"
            naviagateTo="#"
            backgroundColor="brandYellow"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
