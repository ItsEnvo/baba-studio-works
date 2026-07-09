import React from 'react';

// Artists / clients we've put through the room. Add real names as they come.
const CREDITS = ['J-Desir', 'Vizo South', 'Lil Sumn', 'YG Bam', 'vizo.ss', 'Prodigious Q'];

const Marquee: React.FC = () => (
  <section className="border-b border-white/10 bg-noir-950 overflow-hidden">
    <div className="container-custom py-7 flex items-center gap-10">
      <span className="shrink-0 text-[11px] tracking-widest2 uppercase text-white/40">Selected credits</span>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {[...CREDITS, ...CREDITS, ...CREDITS].map((name, i) => (
            <span key={i} className="text-sm text-white/55 whitespace-nowrap tracking-wide">{name}</span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-noir-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-noir-950 to-transparent" />
      </div>
    </div>
  </section>
);

export default Marquee;
