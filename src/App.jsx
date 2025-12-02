import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AboutUs from './components/AboutUs';
import SkincareInfo from './components/SkincareInfo';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollTheme from './hooks/useScrollTheme';

function App() {
  const scrollRef = useRef(null);

  // Initialize Theme Switcher
  useScrollTheme(scrollRef);

  useEffect(() => {
    // Enable native smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={scrollRef} className="bg-cream min-h-screen transition-colors duration-1000">
        <main>
          <Hero />
          <TrustBar />
          <AboutUs />
          <SkincareInfo />
          <Products />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
