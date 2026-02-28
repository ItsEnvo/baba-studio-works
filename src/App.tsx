import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-studio-gradient">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;