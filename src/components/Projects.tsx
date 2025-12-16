'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/utils/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Width calculation automatically adjusts based on content
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-[80vh] py-20 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10 mb-10">
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

        <div className="hidden md:flex justify-end gap-2 mt-[-40px]">
          <div className="flex items-center gap-2 text-zinc-400 text-sm font-mono uppercase tracking-widest">
            <span>Swipe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* --- CAROUSEL CONTAINER --- */}
      <div className="relative w-full">
        <motion.div
          ref={carouselRef}
          className="flex gap-5 md:gap-6 cursor-grab active:cursor-grabbing px-6 md:px-[10vw] pb-8"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* View All Card Removed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
