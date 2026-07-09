import React, { useState, useEffect } from 'react';
import { gallery } from '../content';

const Gallery: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (active === null) return;
      if (e.key === 'ArrowRight') setActive((i) => (i! + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActive((i) => (i! - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom reveal">
        <div className="mb-14">
          <p className="eyebrow mb-6"><span className="w-8 h-px bg-champagne/60" />03 — The Studio</p>
          <h2 className="section-title text-4xl md:text-6xl max-w-3xl">
            Inside the room.
          </h2>
          <p className="mt-6 text-lg text-white/55 max-w-xl">
            Sessions, artists, and behind-the-board moments at The Baba.
          </p>
        </div>

        {gallery.length === 0 ? (
          <div className="panel border-dashed p-14 text-center">
            <div className="w-12 h-12 border border-white/20 grid place-items-center mx-auto mb-5">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-paper mb-2">Gallery coming soon</h3>
            <p className="text-white/45 max-w-md mx-auto">
              Studio photos with our artists are on the way.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [&>*]:mb-3">
            {gallery.map((g, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="group block w-full overflow-hidden border border-white/10 hover:border-white/30 transition-all">
                <img src={g.src} alt={g.caption ?? 'The Baba studio'} loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                {g.caption && (
                  <span className="block text-left px-4 py-3 text-sm text-white/60 bg-noir-900">{g.caption}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {active !== null && gallery[active] && (
        <div className="fixed inset-0 z-[60] bg-noir-950/96 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-white/70 hover:text-white" aria-label="Close">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <figure className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].caption ?? ''} className="max-h-[80vh] w-auto mx-auto rounded-xl" />
            {gallery[active].caption && (
              <figcaption className="text-center text-white/60 mt-4">{gallery[active].caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;
