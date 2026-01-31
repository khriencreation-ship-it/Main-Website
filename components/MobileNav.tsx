import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

type MobileNavProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

const MobileNav = ({ menuOpen, setMenuOpen }: MobileNavProps) => {
  const containerVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-brandLightGray top-[9vh] fixed z-50 w-full lg:hidden border-b border-black/10 shadow-2xl"
    >
      <nav className="px-5 pb-10 flex flex-col justify-between h-[91vh]">
        <div className="flex flex-col space-y-6 text-xl font-semibold p-2 pt-10">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Solutions', href: '/solutions' },
            { name: 'Products', href: '/products' },
            { name: 'Services', href: '/services' },
            { name: 'House', href: '/house' },
            { name: 'Academy', href: '/academy' },
          ].map((link, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                className=" text-black hover:text-brandPurple transition-all duration-50 ease-in-out block py-2"
                href={link.href}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div variants={itemVariants} className="mt-4 flex justify-center pb-10">
          <div className="text-center border-5 rounded-full border-r border-t border-black bg-brandYellow px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out">
            <Link
              href="/contact"
              className="text-lg lg:text-xl font-bold text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default MobileNav;
