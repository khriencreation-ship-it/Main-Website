"use client"
import React from 'react'
import { motion } from 'motion/react'
import BrandButton from '@/components/ui/BrandButton'
import Footer from '@/components/Footer'

const page = () => {
  const deliverables = [
    "Campaign graphics",
    "Marketing and presentation assets",
    "Digital and print-ready designs"
  ]

  return (
    <main className="px-4 lg:px-9 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden max-w-360 mx-auto my-6 mt-[13vh] md:mt-[16vh] shadow-sm rounded-3xl flex flex-col justify-center items-center py-16 md:py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <p className="text-sm md:text-base font-black text-white/50 uppercase tracking-[0.2em] mb-4">
            Service Sub-Pages
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase mb-8 leading-tight">
            Graphics Design
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
            Visual design for digital and print materials that support campaigns, products, and brand communication.
          </p>
        </motion.div>
      </section>

      {/* Why It Matters / What You Get Section */}
      <section className="max-w-360 mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brandPurple rounded-3xl p-8 md:p-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
              Why It Matters
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Consistent visuals improve recognition, clarity, and engagement across all touchpoints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brandGreen rounded-3xl p-8 md:p-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-6">
              What You Get
            </h2>
            <ul className="space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-black shrink-0" />
                  <span className="text-lg md:text-xl font-bold text-black/80 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-360 mx-auto bg-brandGray my-12 rounded-3xl p-8 md:p-16 lg:p-20"
      >
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h3 className="text-sm md:text-base font-black text-brandPurple uppercase tracking-[0.2em] mb-6">
            Case Study / Example
          </h3>
          <p className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-tight border-l-0 md:border-l-8 border-brandPurple md:pl-10">
            Delivered cohesive campaign visuals that increased engagement and brand recall across platforms.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-360 mx-auto bg-brandYellow my-12 mb-24 rounded-3xl p-12 md:p-24 text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-black uppercase mb-10 leading-none">
          Ready to build a brand that stands out?
        </h2>
        <div className="flex flex-col items-center">
          <BrandButton
            buttonPosition="center"
            button="Start a Design Project"
            navigateTo="#"
            backgroundColor="brandPurple"
          />
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}

export default page