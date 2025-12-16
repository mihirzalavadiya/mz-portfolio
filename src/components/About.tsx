import React from 'react';
import { ABOUT_CONTENT } from '@/utils/constants'; // 👈 Import kiya

const About = () => {
  const {
    sectionTitle,
    headline,
    description,
    techStackTitle,
    skills,
    devCard,
  } = ABOUT_CONTENT;

  return (
    <section
      id="about"
      className="min-h-[90vh] py-24 md:py-32 flex items-center bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE: Visual Element (Developer Card) */}
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              {/* Decorative Header */}
              <div className="flex gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>

              {/* Pseudo Code Content */}
              <div className="space-y-4 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  <span className="text-primary">const</span>{' '}
                  <span className="text-yellow-600 dark:text-yellow-400">
                    developer
                  </span>{' '}
                  = <span className="text-primary">{`{`}</span>
                </p>
                <div className="pl-4 space-y-2">
                  <p>
                    name:{' '}
                    <span className="text-green-600 dark:text-green-400">
                      "{devCard.name}"
                    </span>
                    ,
                  </p>
                  <p>
                    role:{' '}
                    <span className="text-green-600 dark:text-green-400">
                      "{devCard.role}"
                    </span>
                    ,
                  </p>
                  <p>
                    location:{' '}
                    <span className="text-green-600 dark:text-green-400">
                      "{devCard.location}"
                    </span>
                    ,
                  </p>
                  <p>
                    status:{' '}
                    <span className="text-green-600 dark:text-green-400">
                      "{devCard.status}"
                    </span>
                  </p>
                </div>
                <p>
                  <span className="text-primary">{`}`}</span>;
                </p>
              </div>

              {/* Decorative Background Blob */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-primary/20 rounded-2xl blur-2xl"></div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-sm font-bold font-sans uppercase tracking-wider text-primary">
              {sectionTitle}
            </h2>

            <h3 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-900 dark:text-zinc-100">
              {headline}
            </h3>

            {/* Description Paragraphs Loop */}
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-4">
              <h4 className="font-outfit font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                {techStackTitle}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 font-mono rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-primary dark:hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
