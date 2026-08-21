import React from 'react';
import { site, stats, equipment, sectionNumber } from '../content';

const About: React.FC = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="section-padding border-t border-white/10">
      <div className="container-custom reveal">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6"><span className="w-8 h-px bg-champagne/60" />{sectionNumber('about')} — The Studio</p>
            <h2 className="section-title text-4xl md:text-6xl max-w-2xl">
              A production house built for the work.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-white/60 leading-relaxed max-w-xl">
              <p>
                The Baba is a recording studio and video production house in {site.city}. We bring
                the same standard of craft to a first single as we do to a label album or a brand campaign.
              </p>
              <p>
                Track it, mix it, master it, shoot it — handled in one place, by a team that treats
                every project like it matters. Because it does.
              </p>
            </div>

            {stats.show && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-12">
                {stats.items.map((s) => (
                  <div key={s.label} className="bg-noir-950 p-6">
                    <div className="font-display text-3xl md:text-4xl font-semibold text-paper">{s.number}</div>
                    <div className="text-white/45 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 grayscale">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&h=1100&fit=crop"
                alt="The Baba recording studio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-5">Equipment</p>
              <div className="border-t border-white/10">
                {equipment.items.map((e) => (
                  <div key={e} className="py-3 border-b border-white/10 text-white/65 text-sm">{e}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h3 className="section-title text-3xl md:text-5xl max-w-2xl">
            Have a project worth doing right?
          </h3>
          <div className="flex gap-4 shrink-0">
            <button onClick={() => go('contact')} className="btn-primary">Start a Project</button>
            <button onClick={() => go('pricing')} className="btn-secondary">Pricing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
