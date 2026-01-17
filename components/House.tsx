import Image from "next/image";
import HouseImage from '@/public/house-section.png';
import HouseIcon from '@/public/khrien-house-icon.png';
import BrandButton from "./ui/BrandButton";
const House = () => {
    return (
        <>
            <section className="max-w-360 mx-auto bg-brandGray my-6 shadow-sm rounded-3xl p-8 md:p-20 md:pr-0 md:pb-0 pr-0 pb-0 overflow-hidden">
                <div className="flex justify-between items-center gap-10">
                    <div className="w-1/2 py-8 md:py-0">
                        <p className="text-lg md:text-2xl font-normal text-black my-8 ">THE HOUSE — YOUR GROWTH NETWORK</p>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-black">A Community for Business Builders</h1>
                        <p className="text-lg md:text-2xl font-normal text-black my-8 ">The House of Khrien is more than a group — it's a home for business owners on a growth journey.</p>
                        <BrandButton
                            buttonPosition="start"
                            button="Join the House"
                            naviagateTo="#"
                            backgroundColor="brandYellow"
                        />
                    </div>
                    <div className="w-1/2 relative">
                        <Image src={HouseImage} className="w-full h-full object-cover" alt=''></Image>
                    </div>
                </div>
            </section>
            <section>
                <div className=" px-5 my-8">
                    {/* <p className="text-lg md:text-2xl font-normal text-white text-center my-8 ">Choose your path</p> */}
                    <div className="flex w-full justify-between items-center ">
                        <div className="">
                            <h1 className="text-brandYellow text-5xl text-black">Foundation</h1>
                        </div>
                        <Image src={HouseIcon} className="size-16 object-cover" alt=''></Image>
                        <div className="">
                            <h1 className="text-brandYellow text-5xl text-black">Structure</h1>
                        </div>
                        <Image src={HouseIcon} className="size-16 object-cover" alt=''></Image>
                        <div className="">
                            <h1 className="text-brandYellow text-5xl text-black">Occupancy</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default House;