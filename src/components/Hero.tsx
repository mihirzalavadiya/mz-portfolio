'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1.2 },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden bg-white dark:bg-black"
    >
      {/* 1. Background Grid Pattern (Texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Floating Background Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[120px] opacity-20 dark:opacity-30"
      ></motion.div>

      {/* 3. Floating Geometric Shapes (Decorative) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-12 h-12 rounded-full border-4 border-primary/10 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[10%] w-16 h-16 rounded-full bg-primary/5 hidden md:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 items-center md:grid-cols-2"
        >
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8">
            {/* Greeting Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-outfit text-sm font-semibold tracking-wide shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Work
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-outfit text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl dark:text-zinc-100 leading-[1.1]"
            >
              Hi, I'm <br className="md:hidden" /> Mihir.
              <br />
              <span className="relative inline-block mt-2">
                {/* Marker SVG Container */}
                <div className="absolute inset-0 -top-1 -bottom-2 -left-2 -right-2 -z-10">
                  <svg
                    viewBox="0 0 245 45"
                    preserveAspectRatio="none"
                    className="h-full w-full text-primary opacity-20"
                    fill="currentColor"
                  >
                    <path d="M242.066 12.8719C243.626 14.8219 240.896 17.5219 238.356 19.3219C193.046 51.5719 23.2157 52.6219 7.61571 43.6219C3.11571 41.0719 3.26571 36.4219 6.26571 33.1219C15.7157 22.6219 77.5157 5.27188 126.416 1.97188C162.266 -0.478125 237.986 7.62188 242.066 12.8719Z" />
                  </svg>
                </div>

                {/* Animation Overlay (White div that slides away to reveal marker) */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'circOut' }}
                  style={{ originX: 0 }}
                  className="absolute inset-0 bg-white dark:bg-black -z-10"
                />

                <span className="relative text-5xl z-10 text-primary px-2">
                  Frontend Dev.
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="max-w-lg text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed"
            >
              Building{' '}
              <span className="text-zinc-900 dark:text-white font-medium">
                pixel-perfect
              </span>
              , engaging, and accessible digital experiences. Let's create
              something extraordinary.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#projects"
                  className="flex items-center gap-2 font-outfit rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
                >
                  View My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="font-outfit rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-transparent px-8 py-3.5 text-base font-semibold text-zinc-900 dark:text-white transition-colors hover:border-primary hover:text-primary dark:hover:border-primary"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.4, type: 'spring' }}
            className="flex justify-center md:justify-end relative"
          >
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] shrink-0"
            >
              {/* Image Border/Frame */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-primary to-purple-400 p-1 shadow-2xl rotate-3 opacity-60"></div>

              {/* Main Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-zinc-100 dark:bg-zinc-900 border border-white/20 shadow-inner flex items-end justify-center">
                {/* Dot Pattern for Placeholder */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(#5f2ff8 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>

                {/* Text Placeholder */}
                <span className="text-zinc-400 font-outfit text-xl font-bold relative z-10 flex flex-col items-center gap-2">
                  <Image
                    className="dark:invert"
                    src="/person2.png"
                    alt="Logo"
                    width={470}
                    height={420}
                    priority
                  />
                </span>
              </div>

              {/* Decorative Circle behind */}
              <div className="absolute -bottom-10 -left-10 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
