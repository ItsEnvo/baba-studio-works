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
  return (
    <div className="min-h-screen overflow-x-hidden">
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
    </div>
  );
}

export default App;
