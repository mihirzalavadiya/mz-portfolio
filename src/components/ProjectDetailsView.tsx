'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ProjectItem } from '@/utils/constants';

interface Props {
  project: ProjectItem;
}

const ProjectDetailsView = ({ project }: Props) => {
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Gallery Animation (Stagger Effect)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black overflow-hidden relative pt-24 pb-20">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Floating Tech Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {project.techStack.map((tech, index) => {
          const positionZone = index % 4;
          let topPos = '0%';
          let leftPos = '0%';
          const randomOffset = (index * 7) % 15;

          switch (positionZone) {
            case 0:
              topPos = `${10 + randomOffset}%`;
              leftPos = `${2 + (index % 5)}%`;
              break;
            case 1:
              topPos = `${15 + randomOffset}%`;
              leftPos = `${85 + (index % 5)}%`;
              break;
            case 2:
              topPos = `${60 + randomOffset}%`;
              leftPos = `${3 + (index % 5)}%`;
              break;
            case 3:
              topPos = `${65 + randomOffset}%`;
              leftPos = `${80 + (index % 5)}%`;
              break;
          }

          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 7 + (index % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5,
              }}
              className="absolute font-black font-outfit text-primary/30 select-none z-0 whitespace-nowrap hidden md:block"
              style={{
                top: topPos,
                left: leftPos,
                fontSize: `${3 + (index % 3)}rem`,
              }}
            >
              {tech}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800"
          >
            <div className="p-1 rounded-full group-hover:-translate-x-1 transition-transform">
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </div>
            <span className="font-medium">Back</span>
          </button>
          <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            {project.category}
          </span>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 blur-[120px] -z-10 rounded-full opacity-50"></div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-outfit font-bold text-zinc-900 dark:text-white mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl relative z-20"
            >
              <div className="h-8 bg-zinc-100 dark:bg-zinc-800/90 flex items-center px-4 gap-2 border-b border-zinc-200 dark:border-zinc-700 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="relative aspect-video w-full bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Overview Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="prose dark:prose-invert max-w-none relative z-20 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold font-outfit text-zinc-900 dark:text-white mb-4">
                Project Overview
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-7 text-lg whitespace-pre-line">
                {project.overview}
              </p>
              <h3 className="text-2xl font-bold font-outfit text-zinc-900 dark:text-white mt-8 mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {project.keyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-primary/20 transition-colors shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 relative z-20">
            <div className="sticky top-24 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-6">
                  Project Links
                </h4>
                <div className="flex flex-col gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
                  >
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Visit Live Site
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="w-full py-4 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
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
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Source Code
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-6">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 👇 NEW: GALLERY SECTION (Only if images exist) 👇 */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="border-t border-zinc-200 dark:border-zinc-800 pt-20 relative z-20"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-outfit font-bold text-center mb-12 text-zinc-900 dark:text-white"
            >
              Project Gallery
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* 👆 GALLERY ENDS 👆 */}
      </div>
    </main>
  );
};

export default ProjectDetailsView;
