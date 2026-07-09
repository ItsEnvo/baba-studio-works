import React, { useState } from 'react';
import { portfolio, type PortfolioItem } from '../content';

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All',
  recording: 'Recording',
  mixing: 'Mixing',
  video: 'Video',
  photography: 'Photography',
};

// Only show filters for categories that actually have work.
const CATEGORIES = [
  { key: 'all', label: CATEGORY_LABELS.all },
  ...['recording', 'mixing', 'video', 'photography']
    .filter((c) => portfolio.some((i) => i.category === c))
    .map((c) => ({ key: c, label: CATEGORY_LABELS[c] })),
];

const Media: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  if (item.kind === 'youtube') {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${item.src}`}
        title={item.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  if (item.kind === 'spotify') {
    return <iframe className="w-full h-full" src={item.src} title={item.title} loading="lazy" allow="encrypted-media" />;
  }
  return (
    <img src={item.src} alt={item.title} loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const items = filter === 'all' ? portfolio : portfolio.filter((i) => i.category === filter);
  const showFilters = CATEGORIES.length > 2;

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom reveal">
        <div className="grid lg:grid-cols-12 gap-y-8 items-end mb-14">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6"><span className="w-8 h-px bg-champagne/60" />02 — Selected Work</p>
            <h2 className="section-title text-4xl md:text-6xl max-w-3xl">
              The reel speaks for itself.
            </h2>
          </div>
          {showFilters && (
            <div className="lg:col-span-4 flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
              {CATEGORIES.map((c) => (
                <button key={c.key} onClick={() => setFilter(c.key)}
                  className={`text-sm tracking-wide transition-colors ${filter === c.key ? 'text-paper' : 'text-white/40 hover:text-white/70'}`}>
                  {c.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {items.map((item, idx) => (
            <div key={idx} className="group relative bg-noir-950">
              <div className="aspect-video overflow-hidden bg-black">
                <Media item={item} />
              </div>
              <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                <div>
                  <h3 className="font-display text-base font-semibold text-paper">{item.title}</h3>
                  <p className="text-white/45 text-sm">{item.description}</p>
                </div>
                <span className="shrink-0 text-[10px] tracking-widest2 uppercase text-white/35">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary">Start Your Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
