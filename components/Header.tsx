'use client';
import Lenis from 'lenis';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MobileNav from './MobileNav';
import BrandButton from './ui/BrandButton';
import Image from 'next/image';
import logo from '@/public/sample-logo.png';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const lastYRef = useRef(0);
  const menuOpenRef = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);
  // ... (rest of search/replace below)

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const onScroll = ({ scroll }: { scroll: number }) => {
      if (menuOpenRef.current) return;

      setScrolledTop(scroll < 10); // At top, make it transparent
      if (scroll > lastYRef.current && scroll > 100) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastYRef.current = scroll;
    };

    lenis.on('scroll', onScroll);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (menuOpen) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <header
        className={`${hidden ? '-translate-y-[150%] opacity-0' : 'translate-y-0'} fixed w-full z-50 top-0 md:top-4 left-1/2 -translate-x-1/2 flex justify-center lg:justify-between items-center h-[10vh] max-w-360 bg-brandLightGray  ${menuOpen ? '' : 'shadow-sm'} text-black my-0 px-0 lg:px-6 rounded-0 lg:rounded-2xl transition-all duration-500 ease-in-out`}
      >
        <Image src={logo} width={100} loading="eager" height={100} alt="" />
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className=" hidden lg:flex space-x-12 text-xl font-semibold"
        >
          <motion.div variants={linkVariants}>
            <Link
              className="hover:text-brandPurple transition-all duration-50 ease-in-out"
              href="/"
            >
              Home
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} className="relative transition-all duration-50 ease-in-out group">
            <button className="group-hover:text-brandPurple">About</button>
            <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-brandGray shadow-2xl py-10 rounded-2xl transition-all duration-150 ease-in-out">
              <div className="flex flex-col space-y-4">
                <Link
                  className="px-10 hover:text-brandPurple transition-all duration-50 ease-in-out"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="px-10 hover:text-brandPurple transition-all duration-50 ease-in-out"
                  href="/solutions"
                >
                  Solutions
                </Link>
                <Link
                  className="px-10 hover:text-brandPurple transition-all duration-50 ease-in-out"
                  href="/products"
                >
                  Products
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link
              className="hover:text-brandPurple transition-all duration-50 ease-in-out"
              href="/services"
            >
              Services
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link
              className="hover:text-brandPurple transition-all duration-50 ease-in-out"
              href="/house"
            >
              House
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link
              className="hover:text-brandPurple transition-all duration-50 ease-in-out"
              href="/academy"
            >
              Academy
            </Link>
          </motion.div>
        </motion.nav>
        <div className="px-4 flex items-center space-x-6">
          <BrandButton
            buttonPosition="center"
            button="Contact Us"
            naviagateTo="contact"
            backgroundColor="brandYellow"
            menuOpen={menuOpen}
          />
          <div
            className="lg:hidden h-10 w-10 flex flex-col items-start justify-center gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
            />
            <span
              className={`h-0.5 w-4 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
            />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && <MobileNav key="mobile-nav" menuOpen={menuOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
