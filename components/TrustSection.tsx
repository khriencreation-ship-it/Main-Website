import LogoMarquee from "./LogoMarquee";

const TrustSection = () => {
    return (
        <section className=" relative max-w-360 mx-auto bg-brandGreen my-6 shadow-sm rounded-3xl p-8 md:p-20 text-center overflow-hidden">
            <div className="text-2xl font-black text-center">
                <p className='capitalize'>TRUSTED BY INDUSTRY LEADERS</p>
            </div>
            <h1 className="text-6xl font-black leading-none text-black">
                Proven Track Record of Strategic Excellence
            </h1>
            <p className="text-2xl mt-4">
                We've empowered diverse businesses with tools and services that drive real growth.
            </p>

            <LogoMarquee />
        </section>
    );
};
export default TrustSection;