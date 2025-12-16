import Link from 'next/link';
import React from 'react';
import StaggeredText from './StaggeredText';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      // 👇 pt-28 md:pt-32 bahut zaruri hai taaki content header ke niche se shuru ho
      className="relative flex min-h-[90vh] items-center justify-center pt-28 md:pt-32 overflow-hidden bg-white dark:bg-black"
    >
      {/* Background Gradient Blob (Optional Decorative Element) */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] opacity-50 dark:opacity-30"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            {/* Greeting */}
            <span className="font-outfit text-lg font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              Hi, I am 👋
            </span>

            {/* Main Headline (Name & Role) */}
            <h1 className="font-outfit text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
              Mihir Zalavadiya
              {/* <span className="block text-zinc-500 dark:text-zinc-400 text-3xl sm:text-4xl mt-2 font-semibold">
                Frontend Developer.
              </span> */}
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-1 block -skew-y-3 rounded-lg bg-primary opacity-20"></span>
                <span className="relative text-primary">Frontend Dev.</span>
              </span>
            </h1>

            {/* Short Description */}
            <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              I build pixel-perfect, engaging, and accessible
              digitalexperiences. Let's turn your ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:justify-start pt-4">
              <Link href="#projects" className="">
                <button className="group relative px-8 py-3 cursor-pointer rounded-full bg-primary font-outfit text-sm font-medium hover:opacity-90 text-white shadow-lg transition-all hover:bg-opacity-90">
                  <StaggeredText text="View My Work" />
                </button>
              </Link>
              <Link href="#contact" className="">
                <button className="group relative px-8 py-3 border-2 border-primary cursor-pointer rounded-full font-outfit text-sm font-medium hover:opacity-90 text-primary shadow-lg transition-all hover:bg-opacity-90">
                  <StaggeredText text="Contact Me" />
                </button>
              </Link>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE PLACEHOLDER --- */}
          {/* Baad me yahan <Image /> component laga lena apni photo ke sath */}
          <div className="flex justify-center md:justify-end relative">
            {/* Placeholder Shape - Isko hata kar apni photo lagana */}
            <div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] shrink-0 overflow-hidden rounded-[40px] rotate-3 bg-gradient-to-br from-primary/80 to-purple-600/80 shadow-2xl shadow-primary/30 border-4 border-white dark:border-zinc-900 flex items-end justify-center">
              <Image
                className="dark:invert"
                src="/person2.png"
                alt="Logo"
                width={470}
                height={420}
                priority
              />
            </div>
            {/* Decorative dot pattern behind image */}
            <div
              className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 opacity-50"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #5f2ff8 2px, transparent 2px)',
                backgroundSize: '16px 16px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
