import Footer from '@/components/Footer'
import React from 'react'
import HeroSection from './HeroSection'

const page = () => {
    return (
        <>
            <main className="px-4 lg:px-9 mt-[12vh] md:mt-[14vh]">
                <HeroSection />
            </main>
            <Footer />
        </>
    )
}

export default page