"use client"
import React, { useState } from 'react';
import { motion } from 'motion/react';
import BrandButton from '@/components/ui/BrandButton';
type productType = {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
  buttonColor: string;
  navigateTo: string;
}
const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: 'Productivity',
      category: 'productivity',
      subtitle: 'Quest',
      description: 'Streamline your workflow and boost team productivity with intelligent task management and collaboration tools.',
      backgroundColor: 'bg-brandYellow',
      buttonColor: 'brandPurple',
      navigateTo: 'productivity'
    },
    {
      id: 2,
      title: 'Legal Technology',
      category: 'legal-technology',
      subtitle: 'Firm Desk',
      description: 'Comprehensive legal practice management software designed to help law firms manage cases, clients, and documents efficiently.',
      backgroundColor: 'bg-brandGreen',
      buttonColor: 'brandYellow',
      navigateTo: 'legal-technology',
    },
    {
      id: 3,
      title: 'AI & Creative Technology',
      category: 'ai-creative-technology',
      subtitle: 'Khrien Flow',
      description: 'Harness the power of AI to enhance your creative workflow with intelligent automation and smart design tools.',
      backgroundColor: 'bg-brandPurple',
      buttonColor: 'brandYellow',
      navigateTo: '#'
    },
  ];
  const [filterItems, setFilterItems] = useState<productType[]>(products)

  const [selectedItemCategory, setSelectedItemCategory] = useState<string>("all");

  const handleSelectItem = (category: string)=>{
    setSelectedItemCategory(category)
    setFilterItems(products.filter((item) => item.category === category))
  }
  return (
    <section className="max-w-360 mx-auto my-10 px-4 md:px-6 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
          Our Products
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discover our suite of innovative products designed to transform the way you work
        </p>
      </motion.div>
      <div className="mt-6 mb-8 border border-brandGray/50 rounded-full  px-5 py-3 flex w-fit mx-auto">
        <p className="text-white/50">filter by :</p>
        <div className="flex gap-5 ml-2">
          <button className={`${selectedItemCategory === "all" ? "text-white" : "text-white/50"} `} onClick={() => {
            setFilterItems(products)
            setSelectedItemCategory("all")
          }}>All</button>
          <button className={`${selectedItemCategory === "productivity" ? "text-white" : "text-white/50"} `} onClick={() => handleSelectItem("productivity")}>Productivity</button>
          <button className={`${selectedItemCategory === "legal-technology" ? "text-white" : "text-white/50"} `} onClick={() => handleSelectItem("legal-technology")}>Legal <span className='hidden md:inline'>Technology</span></button>
          <button className={`${selectedItemCategory === "ai-creative-technology" ? "text-white" : "text-white/50"} `} onClick={() => handleSelectItem("ai-creative-technology")}>AI & Creative <span className='hidden md:inline'>Technology</span></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filterItems.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors`}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase">
                  {product.subtitle}
                </h3>
                <h5 className="text-lg font-bold text-white/80 mt-2">
                  {product.title}
                </h5>
              </div>
              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <BrandButton
                buttonPosition="start"
                button="Learn More"
                navigateTo={`products/${product.navigateTo}`}
                backgroundColor={product.buttonColor}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
