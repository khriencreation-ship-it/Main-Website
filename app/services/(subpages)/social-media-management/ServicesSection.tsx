import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const ServicesSection = () => {
    const servicesItems = [
        "/services/services-branding.jpg",
        "/services/services-branding-two.jpg",
        "/services/services-branding-three.jpg",
        "/services/services-branding-four.jpg",
        "/services/services-branding-five.jpg",
        "/services/services-branding-six.png"
    ]
    return (
        <section className='max-w-360 mx-auto my-10 px-4 '>
            <h1 className='text-4xl capitalize my-3 font-bold'>Our portfolio</h1>
            <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {servicesItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Image src={item} alt="Services" width={300} height={300} className="w-full h-64 md:h-80 lg:h-96 object-cover" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection