'use client';
import Lenis from 'lenis';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MobileNav from './MobileNav';

const Header = () => {
  const lastYRef = useRef(0);
  const menuOpenRef = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

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
        className={`${hidden ? '-translate-y-[150%] opacity-0' : 'translate-y-0'} fixed lg:w-full w-full z-50 top-0 md:top-4 left-1/2 -translate-x-1/2 flex justify-between lg:justify-between items-center h-[9vh] max-w-360  bg-brandLightGray  ${menuOpen ? '' : 'shadow-sm'} text-black my-0 px-6 rounded-0 lg:rounded-2xl transition-all duration-500 ease-in-out`}
      >
        <h1 className="text-xl lg:text-3xl italic font-bold">Khrien</h1>
        <nav className=" hidden lg:flex space-x-12 text-xl font-semibold">
          <Link
            className="hover:text-brandPurple transition-all duration-50 ease-in-out"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="hover:text-brandPurple transition-all duration-50 ease-in-out"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-brandPurple transition-all duration-50 ease-in-out"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:text-brandPurple transition-all duration-50 ease-in-out"
            href="/house"
          >
            House
          </Link>
          <Link
            className="hover:text-brandPurple transition-all duration-50 ease-in-out"
            href="/academy"
          >
            Academy
          </Link>
        </nav>
        <div className="px-4 flex items-center space-x-6">
          <div
            className={` ${menuOpen ? 'hidden' : ''} border-5 rounded-full border-r border-t border-black bg-brandYellow px-5 lg:px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out`}
          >
            <Link href="/contact" className="text-lg lg:text-xl font-bold">
              Contact Us
            </Link>
          </div>
          <div
            className="lg:hidden h-10 w-10 flex flex-col items-start justify-center gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-black transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </div>
      </header>
      <MobileNav menuOpen={menuOpen} />
    </div>
  );
};

export default Header;
