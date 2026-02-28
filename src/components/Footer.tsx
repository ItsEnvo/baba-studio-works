import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Recording Sessions',
    'Mixing & Mastering',
    'Music Video Production',
    'Photography',
    'Commercial Production',
    'Event Coverage'
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-black text-gold-400 mb-4">
              THE BABA
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premier recording studio in Fort Lauderdale, Florida. Where sound becomes legend.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Fort Lauderdale, FL</p>
              <p>📧 info@thebabafl.com</p>
              <p>📞 (954) 555-BABA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Follow us on Instagram</p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.349 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.349-2.349 2.349zm7.718 0c-1.297 0-2.349-1.051-2.349-2.349 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.349-2.349 2.349z"/>
                  </svg>
                  <span>@thebabafl</span>
                </a>
              </div>

              <div>
                <h5 className="text-white font-medium mb-2">Business Hours</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Mon - Fri: 10am - 10pm</p>
                  <p>Saturday: 10am - 8pm</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full text-sm py-2 px-4"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} The Baba Recording Studio. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-gold-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm">Back to Top</span>
              </button>
              
              <div className="text-gray-400 text-sm">
                Made with ♥ for artists
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA for mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-40">
        <button
          onClick={() => scrollToSection('#contact')}
          className="btn-primary px-6 py-3 rounded-full shadow-lg animate-glow"
        >
          Book Now
        </button>
      </div>
    </footer>
  );
};

export default Footer;