import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Hip-Hop Album Recording",
      category: "recording",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Full album production for emerging hip-hop artist"
    },
    {
      id: 2,
      title: "Music Video - R&B Single",
      category: "video",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Cinematic music video production with multiple locations"
    },
    {
      id: 3,
      title: "Commercial Mix & Master",
      category: "mixing",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      description: "Radio-ready mix and master for commercial release"
    },
    {
      id: 4,
      title: "Artist Portrait Session",
      category: "photography",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Professional headshots and promotional photography"
    },
    {
      id: 5,
      title: "Pop Recording Session",
      category: "recording",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
      description: "Multi-track recording with live instruments"
    },
    {
      id: 6,
      title: "Brand Commercial",
      category: "video",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "High-end commercial production for local business"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'recording', label: 'Recording' },
    { key: 'mixing', label: 'Mixing' },
    { key: 'video', label: 'Video' },
    { key: 'photography', label: 'Photography' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 text-white">
            Our Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From chart-topping singles to cinematic music videos, see how we bring artistic visions to life.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-gold-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-gold-400 text-black text-xs font-medium rounded-full">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8">
            Ready to create something amazing together?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-3"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;