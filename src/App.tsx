import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Global scroll-reveal: fade/rise elements tagged `.reveal` as they enter view.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Gallery />
      <About />
      <Pricing />
      <Contact />
      <Footer />

      {/* Cinematic film-grain overlay — sits above everything, ignores pointer events */}
      <div
        aria-hidden
        className="grain-overlay animate-grain pointer-events-none fixed inset-[-50%] z-[100] opacity-[0.035] mix-blend-overlay"
      />
    </div>
  );
}

export default App;
