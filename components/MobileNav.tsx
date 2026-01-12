import Link from 'next/link';
import React from 'react'

type MobileNavProps = {
    menuOpen: boolean;
}
const MobileNav = ({ menuOpen }: MobileNavProps) => {
    return (
        <div className={`bg-brandLightGray top-[9vh] fixed z-50 w-full lg:hidden ${menuOpen ? "block" : "hidden "}`}>
            <nav className='px-5 pb-10 flex flex-col justify-between h-[93vh]'>
                <div className="flex flex-col space-y-6 text-xl font-semibold p-2">
                    <Link className=' text-black hover:text-brandPurple transition-all duration-50 ease-in-out' href="/home">Home</Link>
                    <Link className=' text-black hover:text-brandPurple transition-all duration-50 ease-in-out' href="/about">About</Link>
                    <Link className=' text-black hover:text-brandPurple transition-all duration-50 ease-in-out' href="/services">Services</Link>
                    <Link className=' text-black hover:text-brandPurple transition-all duration-50 ease-in-out' href="/house">House</Link>
                    <Link className=' text-black hover:text-brandPurple transition-all duration-50 ease-in-out' href="/academy">Academy</Link>
                </div>
                <div className="mt-4 flex justify-center">
                    <div className="text-center border-5 rounded-full border-r border-t border-black bg-brandYellow px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out">
                    <Link href="/contact" className='text-lg lg:text-xl font-bold text-center'>Contact Us</Link>
                </div>
                </div>
            </nav>

        </div>
    )
}

export default MobileNav
