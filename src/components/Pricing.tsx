import React from 'react';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingTier> = ({ title, price, description, features, popular }) => (
  <div className={`studio-card relative ${popular ? 'border-gold-400 shadow-gold-500/20' : ''}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gold-400 text-black px-6 py-2 rounded-full text-sm font-bold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="service-price mb-4">{price}</div>
      <p className="text-gray-300">{description}</p>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>

    <button 
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className={popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
    >
      Book Now
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      title: "Recording Session",
      price: "$100/hour",
      description: "Professional recording with engineer",
      features: [
        "Access to all studio equipment",
        "Professional engineer included",
        "High-quality microphones & preamps",
        "Real-time monitoring",
        "Basic editing included",
        "Raw files provided"
      ]
    },
    {
      title: "Mix & Master Package",
      price: "$500/song",
      description: "Complete mixing and mastering service",
      features: [
        "Professional mixing",
        "Radio-ready mastering",
        "Unlimited revisions",
        "Multiple format delivery",
        "Reference track comparison",
        "2-week turnaround"
      ],
      popular: true
    },
    {
      title: "Music Video Production",
      price: "$800+",
      description: "Complete video production service",
      features: [
        "4K video recording",
        "Professional lighting setup",
        "Multiple camera angles",
        "Color grading included",
        "Basic editing package",
        "Custom pricing for larger projects"
      ]
    }
  ];

  const additionalServices = [
    { service: "Additional Musicians", price: "$50-200/session" },
    { service: "Instrument Rental", price: "$25-100/day" },
    { service: "Extended Studio Time", price: "$75/hour" },
    { service: "Rush Delivery", price: "+50% standard rate" },
    { service: "Photography Session", price: "$200-500" },
    { service: "Event Coverage", price: "Custom Quote" },
    { service: "Commercial Production", price: "Custom Quote" },
    { service: "Album Package (10+ songs)", price: "Contact for Discount" }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 text-white">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No hidden fees, no surprises. Quality production at rates that work for 
            artists at every level.
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="studio-card max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">{item.service}</span>
                <span className="text-gold-400 font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Package Deals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="studio-card">
            <h4 className="text-2xl font-bold text-white mb-4">Artist Development Package</h4>
            <p className="text-gray-300 mb-6">
              Perfect for emerging artists looking to establish their sound. Includes recording, 
              mixing, and basic video content.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3 song recording package
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Professional mixing & mastering
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic music video for 1 song
              </li>
            </ul>
            <div className="text-gold-400 text-xl font-bold mb-4">Starting at $2,500</div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary w-full"
            >
              Learn More
            </button>
          </div>

          <div className="studio-card">
            <h4 className="text-2xl font-bold text-white mb-4">Commercial Package</h4>
            <p className="text-gray-300 mb-6">
              Comprehensive solution for businesses needing audio and video content for 
              marketing and advertising.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Video production & editing
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Audio recording & mixing
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Multiple format delivery
              </li>
            </ul>
            <div className="text-gold-400 text-xl font-bold mb-4">Custom Quote</div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary w-full"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8">
            Questions about pricing? Need a custom package? Let's talk about your project.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-12 py-4"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;