import React, { useEffect, useRef, useState } from 'react';
import type { ReelItem } from '../content';

/** One 9:16 card. Plays muted while it's in view, pauses the moment it leaves —
 *  the whole point of showing vertical work is that it moves. */
const ReelCard: React.FC<{ item: ReelItem; onOpen: () => void }> = ({ item, onOpen }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative shrink-0 w-[260px] md:w-[300px] snap-start text-left bg-noir-950"
      aria-label={`Play ${item.title}`}
    >
      <div className="aspect-[9/16] overflow-hidden bg-black relative">
        <video
          ref={ref}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-base font-semibold text-paper truncate">{item.title}</h3>
          <p className="text-white/55 text-sm truncate">{item.client}</p>
        </div>
        {/* sound cue — the rail is muted, the lightbox isn't */}
        <span
          className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/25 bg-noir-950/40 backdrop-blur-sm
                     grid place-items-center text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5zM15.5 9.5a4 4 0 010 5M18 7a7.5 7.5 0 010 10" />
          </svg>
        </span>
      </div>
    </button>
  );
};

const ReelLightbox: React.FC<{ item: ReelItem; onClose: () => void }> = ({ item, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/95 backdrop-blur-xl p-4 animate-fade-in"
    >
      <button onClick={onClose} aria-label="Close"
        className="absolute top-5 right-5 p-3 text-white/50 hover:text-paper transition-colors duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-4">
        <video
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          loop
          playsInline
          className="max-h-[82vh] w-auto border border-white/10 bg-black"
        />
        <div className="text-center">
          <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
          <p className="text-white/45 text-sm">{item.client}</p>
        </div>
      </div>
    </div>
  );
};

const Reels: React.FC<{ items: ReelItem[] }> = ({ items }) => {
  const [open, setOpen] = useState<ReelItem | null>(null);

  return (
    <>
      <div className="-mx-6 lg:-mx-12 px-6 lg:px-12 overflow-x-auto snap-x snap-mandatory scrollbar-none">
        <div className="flex gap-px bg-white/10 border border-white/10 w-max">
          {items.map((item) => (
            <ReelCard key={item.src} item={item} onOpen={() => setOpen(item)} />
          ))}
        </div>
      </div>
      {open && <ReelLightbox item={open} onClose={() => setOpen(null)} />}
    </>
  );
};

export default Reels;
