import React, { useState } from 'react';
import { portfolio, music, type PortfolioItem } from '../content';

type View = 'video' | 'music';

const VideoCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="group relative bg-noir-950">
    <div className="aspect-video overflow-hidden bg-black">
      {item.kind === 'youtube' ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${item.src}`}
          title={item.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : item.kind === 'spotify' ? (
        <iframe className="w-full h-full" src={item.src} title={item.title} loading="lazy" allow="encrypted-media" />
      ) : (
        <img src={item.src} alt={item.title} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      )}
    </div>
    <div className="flex items-baseline justify-between gap-4 px-5 py-4">
      <div>
        <h3 className="font-display text-base font-semibold text-paper">{item.title}</h3>
        <p className="text-white/45 text-sm">{item.description}</p>
      </div>
      <span className="shrink-0 text-[10px] tracking-widest2 uppercase text-white/35">{item.category}</span>
    </div>
  </div>
);

const MusicCard: React.FC<{ item: typeof music[number] }> = ({ item }) => (
  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group relative block bg-noir-950">
    <div className="aspect-square overflow-hidden bg-black">
      <img src={item.artwork} alt={`${item.title} — ${item.artist}`} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      {/* hover veil + listen cue */}
      <div className="absolute inset-0 bg-noir-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-champagne">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          Listen
        </span>
      </div>
    </div>
    <div className="px-4 py-4">
      <h3 className="font-display text-sm font-semibold text-paper truncate">{item.title}</h3>
      <p className="text-white/45 text-sm truncate">{item.artist}</p>
    </div>
  </a>
);

const Portfolio: React.FC = () => {
  const hasVideo = portfolio.length > 0;
  const hasMusic = music.length > 0;
  const [view, setView] = useState<View>(hasVideo ? 'video' : 'music');
  const showToggle = hasVideo && hasMusic;

  const heading = view === 'video' ? 'The reel speaks for itself.' : 'The catalog speaks for itself.';

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom reveal">
        <div className="grid lg:grid-cols-12 gap-y-8 items-end mb-14">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6"><span className="w-8 h-px bg-champagne/60" />02 — Selected Work</p>
            <h2 className="section-title text-4xl md:text-6xl max-w-3xl">{heading}</h2>
          </div>
          {showToggle && (
            <div className="lg:col-span-4 flex gap-2 lg:justify-end">
              {(['video', 'music'] as View[]).map((v) => (
                <button key={v} onClick={() => setView(v)}
                  className={`px-5 py-2 rounded-full text-sm tracking-wide border transition-all duration-300 ${
                    view === v
                      ? 'border-champagne/60 text-paper bg-white/[0.04]'
                      : 'border-white/15 text-white/45 hover:text-white/80 hover:border-white/30'
                  }`}>
                  {v === 'video' ? 'Video' : 'Music'}
                </button>
              ))}
            </div>
          )}
        </div>

        {view === 'video' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {portfolio.map((item, idx) => <VideoCard key={idx} item={item} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {music.map((item, idx) => <MusicCard key={idx} item={item} />)}
          </div>
        )}

        <div className="mt-14">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary">Start Your Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
