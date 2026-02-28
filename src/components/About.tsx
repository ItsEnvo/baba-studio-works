import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Songs Recorded' },
    { number: '100+', label: 'Music Videos' },
    { number: '50+', label: 'Artists Worked With' },
    { number: '5+', label: 'Years Experience' }
  ];

  const equipment = [
    'Neumann U87 Microphones',
    'SSL Mixing Console',
    'Pro Tools HDX System',
    'Genelec Monitoring',
    'Vintage Analog Gear',
    'Acoustic Treatment'
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black mb-8 text-white">
              About The Baba
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Located in the heart of Fort Lauderdale, The Baba is more than just a recording studio—
                it's where musical dreams become reality. Our state-of-the-art facility combines 
                cutting-edge technology with an atmosphere designed to inspire creativity.
              </p>
              <p>
                We specialize in working with both emerging local artists and established acts, 
                providing the same level of professional service that major labels expect. From 
                intimate acoustic sessions to full band productions, we have the equipment and 
                expertise to bring your vision to life.
              </p>
              <p>
                Our team doesn't just record music—we create complete artistic experiences. 
                Whether you need a single tracked and mixed, a full album produced, or a 
                cinematic music video that tells your story, we're your creative partners 
                every step of the way.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Studio Image Placeholder */}
            <div className="relative mb-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop"
                  alt="The Baba Recording Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Equipment List */}
            <div className="studio-card">
              <h3 className="text-2xl font-bold text-white mb-6">Premium Equipment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-gold-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="studio-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience The Baba Difference?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a local artist starting your journey or an established act looking for 
              that next-level sound, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-3"
              >
                Book a Session
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-3"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;