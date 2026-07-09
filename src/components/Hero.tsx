import React from 'react';
import { site } from '../content';

const Hero: React.FC = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Subtle cinematic vignette */}
      <div className="absolute inset-0 -z-10 bg-noir-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="container-custom w-full pb-16 pt-40">
        <p className="eyebrow animate-fade-in mb-8">
          <span className="w-8 h-px bg-champagne/60" />
          {site.city} · Est.
        </p>

        <h1 className="section-title text-[clamp(2.75rem,8vw,7rem)] max-w-5xl animate-fade-up">
          A recording &amp; video studio
          <span className="serif-accent text-white/50"> for artists, brands &amp; creators</span>
          <span className="text-white/45"> who want it done right.</span>
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <button onClick={() => go('portfolio')} className="btn-primary">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            View the Reel
          </button>
          <button onClick={() => go('contact')} className="btn-secondary">Start a Project</button>
        </div>
      </div>

      {/* Bottom capability rail */}
      <div className="hairline">
        <div className="container-custom w-full py-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-[11px] tracking-widest2 uppercase text-white/40">
          <span className="text-white/60">Capabilities</span>
          <span>Recording</span>
          <span>Mixing &amp; Mastering</span>
          <span>Audiobooks</span>
          <span>Music Videos</span>
          <span>Commercials</span>
          <span>Reels</span>
          <span>Event Recaps</span>
          <span>Photography</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
