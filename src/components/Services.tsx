import React from 'react';

interface ServiceProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, price, description, features, icon }) => (
  <div className="studio-card group">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-lg bg-gold-400/20 flex items-center justify-center mr-4 group-hover:bg-gold-400/30 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="service-price">{price}</p>
      </div>
    </div>
    <p className="text-gray-300 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-400">
          <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Recording",
      price: "$100/hour",
      description: "Professional recording services with industry-standard equipment and acoustically treated rooms.",
      features: [
        "High-end microphones & preamps",
        "Acoustically treated recording rooms",
        "Real-time monitoring",
        "Professional mixing console",
        "Instrument rentals available"
      ],
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Mixing & Mastering",
      price: "$500/song",
      description: "Transform your recordings into radio-ready tracks with our professional mixing and mastering services.",
      features: [
        "Professional mixing techniques",
        "Audio restoration & cleanup",
        "Stereo & surround sound mixing",
        "Mastering for all platforms",
        "Unlimited revisions included"
      ],
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: "Video Production",
      price: "$800+",
      description: "Complete video production services from concept to final delivery, including music videos and commercials.",
      features: [
        "4K video recording",
        "Professional lighting setup",
        "Multiple camera angles",
        "Color grading & post-production",
        "Creative direction included"
      ],
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Photography",
      price: "Custom",
      description: "Professional photography services for events, portraits, and commercial projects.",
      features: [
        "Event photography",
        "Portrait sessions",
        "Commercial photography",
        "High-resolution RAW files",
        "Professional editing included"
      ],
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional audio and video production services designed for artists, labels, and businesses 
            who demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-8">
            Need something custom? We work with local artists, signed artists, labels, and businesses.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-3"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;