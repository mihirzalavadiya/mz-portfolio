import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';

const PortfolioContainer = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      <Header />
      <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default PortfolioContainer;
