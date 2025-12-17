'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/utils/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="relative py-12 md:py-20 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-6 relative z-10 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="inline-block text-sm font-bold font-sans uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md mb-4">
              My Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-outfit font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
              Selected <span className="text-primary">Projects</span>
            </h3>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
              A showcase of my technical projects and experiments.
            </p>
          </motion.div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-zinc-600 dark:text-zinc-300 group"
              aria-label="Scroll Left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-zinc-600 dark:text-zinc-300 group"
              aria-label="Scroll Right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-[10vw] snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="snap-center shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
