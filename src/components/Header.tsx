'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NAV_LINKS } from '@/utils/constants';
import StaggeredText from './StaggeredText';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const [isClickScrolling, setIsClickScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    NAV_LINKS.forEach((link) => {
      const sectionId = link.href.replace('/#', '').replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isClickScrolling]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    setActiveSection(sectionId);
    setIsClickScrolling(true);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsClickScrolling(false);
    }, 1000);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white/80 backdrop-blur-lg border-b border-zinc-200 dark:bg-black/80 dark:border-zinc-800'
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 z-50">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                className=""
                src="/logo.png"
                alt="Logo"
                width={isScrolled ? 60 : 70}
                height={20}
                priority
              />
            </motion.div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('/#', '').replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(sectionId)}
                      className={`relative font-sans text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-primary'
                          : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white'
                      }`}
                    >
                      {link.label}

                      {isActive && (
                        <motion.span
                          layoutId="activeSection"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"
                        />
                      )}

                      {!isActive && (
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-zinc-300 dark:bg-zinc-700 transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link href="#contact">
              <button className="group relative px-6 py-2.5 cursor-pointer rounded-full bg-primary font-outfit text-sm font-medium text-white shadow-lg transition-all hover:bg-opacity-90 hover:scale-105 active:scale-95">
                <StaggeredText text="Hire Me" />
              </button>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="relative z-50 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 md:hidden focus:outline-none shadow-sm"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-zinc-900 dark:bg-white rounded-full origin-center transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-full bg-zinc-900 dark:bg-white rounded-full transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-zinc-900 dark:bg-white rounded-full origin-center transition-all duration-300"
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white dark:bg-black md:hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

            <nav className="flex flex-col items-center gap-8 z-10">
              {NAV_LINKS.map((link, i) => {
                const sectionId = link.href.replace('/#', '').replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(sectionId)}
                      className={`font-outfit text-3xl font-bold transition-colors ${
                        isActive
                          ? 'text-primary'
                          : 'text-zinc-900 dark:text-white hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div custom={4} variants={linkVariants}>
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  <button className="mt-4 rounded-full bg-primary px-10 py-4 font-outfit text-xl font-medium text-white shadow-xl shadow-primary/30 transition-transform active:scale-95">
                    Hire Me
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
