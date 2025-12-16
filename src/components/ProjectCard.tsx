'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectItem } from '@/utils/constants';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    // 1. 👇 Wrap whole card in Link (Mobile friendly approach)
    <Link href={`/projects/${project.id}`} className="block shrink-0">
      <motion.div className="group relative h-[280px] w-[300px] md:h-[320px] md:w-[420px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
        {/* Background Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-black/30 backdrop-blur-md border border-white/10 rounded-full">
            {project.category}
          </span>
        </div>

        {/* 2. 👇 HOVER BUTTON (Only visible on Desktop 'md:flex') */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
          <div className="px-6 py-3 bg-white text-black font-outfit font-bold text-sm rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* 3. 👇 Content at Bottom (With Mobile Arrow) */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit text-white mb-1 drop-shadow-md">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-xs md:text-sm line-clamp-1 opacity-90">
                {project.description}
              </p>
            </div>

            {/* 4. 👇 Mobile Only Arrow Icon (Visible always on small screens) */}
            <div className="md:hidden p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
