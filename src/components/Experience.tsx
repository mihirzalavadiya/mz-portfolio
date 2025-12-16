'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/utils/constants';

const Experience = () => {
  const containerRef = useRef(null);

  // Scroll progress hook for the central line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Line height grow according to scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* NEW: Floating Symbol 1 - '++' (Increment/Growth) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -40, 0], // Upar niche float
          rotate: [0, 10, 0], // Halka sa rotate
          opacity: [0.03, 0.08, 0.03], // Blink effect
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 right-10 md:top-80 md:right-20 text-[8rem] md:text-[15rem] font-black font-mono text-primary select-none pointer-events-none z-0"
      >
        ++
      </motion.div>

      {/* NEW: Floating Symbol 2 - ';' (Semicolon - Continuity) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.0,
        }}
        className="absolute bottom-40 -left-10 md:bottom-60 md:left-20 text-[10rem] md:text-[18rem] font-black font-mono text-zinc-500 dark:text-zinc-700 select-none pointer-events-none z-0"
      >
        ;
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="inline-block text-sm font-bold font-sans uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md mb-4">
            Career Path
          </h2>
          <h3 className="text-3xl md:text-5xl font-outfit font-bold text-zinc-900 dark:text-zinc-100">
            Professional Experience
          </h3>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] h-full bg-zinc-200 dark:bg-zinc-800 hidden md:block transform -translate-x-1/2">
            {/* Animated Fill Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-purple-400 to-primary origin-top"
            />
          </div>

          {/* Experience Cards Loop */}
          <div className="space-y-12 md:space-y-0">
            {EXPERIENCE_DATA.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* 1. Spacer for the other side (50% width) */}
                  <div className="hidden md:block w-1/2" />

                  {/* 2. Central Dot (Timeline Marker) */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-black bg-primary shadow-[0_0_20px_rgba(95,47,248,0.5)] z-20 transform -translate-x-1/2 flex items-center justify-center hidden md:flex"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>

                  {/* 3. The Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`w-full md:w-1/2 ${
                      isLeft ? 'md:pr-10' : 'md:pl-10'
                    } pl-8 md:pl-0 border-l-2 border-zinc-200 dark:border-zinc-800 md:border-l-0`}
                  >
                    <div className="relative p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                      {/* Decorative Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Header Info */}
                      <div className="relative z-10">
                        <span className="inline-block font-mono px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-primary border border-primary/20 rounded-full bg-primary/5">
                          {item.period}
                        </span>

                        <h4 className="text-2xl font-outfit font-bold text-zinc-900 dark:text-zinc-100">
                          {item.role}
                        </h4>

                        <div className="flex items-center gap-2 mt-1 mb-6 text-zinc-500 dark:text-zinc-400 font-medium font-sans">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-primary"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.25a3 3 0 013 3v1.5a3 3 0 01-3 3v.25a3 3 0 01-3 3h-3a3 3 0 01-3-3V6.75a3 3 0 01-3-3V2.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.company}
                          <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
                          <span>{item.location}</span>
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-3">
                          {item.description.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
                            >
                              <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary/60"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
