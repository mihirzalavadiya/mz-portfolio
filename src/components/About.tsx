'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion'; // 👈 1. Variants Import kiya
import { ABOUT_CONTENT } from '@/utils/constants';

const About = () => {
  const {
    sectionTitle,
    headline,
    description,
    techStackTitle,
    skills,
    devCard,
  } = ABOUT_CONTENT;

  // --- Animation Variants ---
  // 👇 2. Type ': Variants' add kiya taaki TypeScript error na de
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // 👇 3. Isme bhi type add kar diya safety ke liye
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-[90vh] py-24 md:py-32 flex items-center bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden"
    >
      {/* Background Pattern (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* NEW: Animated Floating Code Symbol </> (Top Right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-10 -right-10 md:top-20 md:right-20 text-[10rem] md:text-[18rem] font-black font-mono text-primary select-none pointer-events-none z-0"
      >
        &lt;/&gt;
      </motion.div>

      {/* NEW: Animated Floating Braces { } (Bottom Left - For Balance) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, -10, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-20 -left-10 md:bottom-20 md:left-20 text-[8rem] md:text-[15rem] font-black font-mono text-zinc-500 dark:text-zinc-600 select-none pointer-events-none z-0"
      >
        {`{ }`}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE: Developer Card (Interactive) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative flex justify-center order-2 md:order-1"
          >
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              initial={{ rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative w-full max-w-sm aspect-square shrink-0"
            >
              {/* Gradient Border/Frame */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-primary to-purple-400 p-1 shadow-2xl rotate-3 opacity-60"></div>

              {/* Main Card Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-zinc-100 dark:bg-zinc-900 border border-white/20 shadow-inner p-8 flex flex-col justify-center">
                {/* Dot Pattern */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(#5f2ff8 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex gap-2 mb-8">
                    <div className="h-3 w-3 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500 shadow-sm"></div>
                  </div>

                  <div className="space-y-4 font-mono text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <p>
                      <span className="text-primary font-bold">const</span>{' '}
                      <span className="text-yellow-600 dark:text-yellow-400">
                        developer
                      </span>{' '}
                      = <span className="text-zinc-400">{`{`}</span>
                    </p>
                    <div className="pl-6 space-y-3 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">
                      <p>
                        name:{' '}
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          "{devCard.name}"
                        </span>
                        ,
                      </p>
                      <p>
                        role:{' '}
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          "{devCard.role}"
                        </span>
                        ,
                      </p>
                      <p>
                        location:{' '}
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          "{devCard.location}"
                        </span>
                        ,
                      </p>
                      <p>
                        status:{' '}
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          "{devCard.status}"
                        </span>
                      </p>
                    </div>
                    <p>
                      <span className="text-zinc-400">{`}`}</span>;
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Circle behind */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-primary/20 rounded-3xl blur-3xl"></div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: Text Content --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="order-1 md:order-2 space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <h2 className="inline-block text-sm font-bold font-sans uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md">
                {sectionTitle}
              </h2>
            </motion.div>

            {/* Headline */}
            <motion.h3
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-outfit font-bold text-zinc-900 dark:text-zinc-100 leading-tight"
            >
              {headline}
            </motion.h3>

            {/* Paragraphs */}
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  className="text-lg text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <motion.div variants={fadeInUp} className="pt-4">
              <h4 className="font-outfit font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary"></span>
                {techStackTitle}
              </h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    viewport={{ once: true }}
                    className="px-5 py-2.5 font-mono text-xs md:text-sm font-medium rounded-lg border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:border-primary hover:text-primary hover:bg-primary/5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-primary dark:hover:text-primary cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
