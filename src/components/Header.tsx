'use client'; // 👈 Ye line sabse zaruri hai kyunki hum hooks use kar rahe hain

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'; // useState import kiya
import { NAV_LINKS } from '@/utils/constants';
import StaggeredText from './StaggeredText';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-zinc-200 bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="Logo"
            width={70}
            height={20}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-sans text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="group relative px-5 py-2 cursor-pointer rounded-full bg-primary font-outfit text-sm font-medium hover:opacity-90 text-white shadow-lg transition-all hover:bg-opacity-90">
            <StaggeredText text="Hire Me" />
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative h-6 w-6 text-zinc-600 dark:text-zinc-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute left-0 top-0 transition-all duration-300 ${
                isOpen
                  ? 'rotate-90 opacity-0 scale-0'
                  : 'rotate-0 opacity-100 scale-100'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>

            <span
              className={`absolute left-0 top-0 transition-all duration-300 ${
                isOpen
                  ? 'rotate-0 opacity-100 scale-100'
                  : '-rotate-90 opacity-0 scale-0'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 dark:bg-black/95 dark:border-zinc-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-lg font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <button className="group relative px-5 py-2 cursor-pointer rounded-full bg-primary font-outfit text-sm font-medium hover:opacity-90 text-white shadow-lg transition-all hover:bg-opacity-90">
            <StaggeredText text="Hire Me" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
