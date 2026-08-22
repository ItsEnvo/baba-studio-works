import React, { useCallback, useEffect, useRef, useState } from 'react';
import { portfolio, music, reels, type PortfolioItem, type MusicItem, sectionNumber } from '../content';
import Reels from './Reels';
import NowPlaying from './NowPlaying';

type View = 'video' | 'reels' | 'music';

/* ------------------------------------------------------------------ video */

/** YouTube poster frame. maxres isn't uploaded for every video — fall back to hq. */
const Poster: React.FC<{ id: string; alt: string }> = ({ id, alt }) => {
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
    />
  );
};

const PlayMark: React.FC<{ large?: boolean }> = ({ large }) => (
  <span
    className={`flex items-center justify-center rounded-full border border-white/30 bg-noir-950/40 backdrop-blur-sm
                text-paper transition-all duration-500 group-hover:border-champagne group-hover:bg-noir-950/60
                ${large ? 'w-20 h-20' : 'w-14 h-14'}`}
  >
    <svg className={large ? 'w-6 h-6 translate-x-0.5' : 'w-4 h-4 translate-x-px'} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
);

const VideoTile: React.FC<{ item: PortfolioItem; onOpen: () => void; featured?: boolean }> = ({
  item, onOpen, featured,
}) => (
  <button
    type="button"
    onClick={onOpen}
    className="group relative block w-full text-left bg-noir-950 overflow-hidden"
  >
    <div className={`overflow-hidden bg-black ${featured ? 'aspect-[16/7]' : 'aspect-video'}`}>
      {item.kind === 'youtube'
        ? <Poster id={item.src} alt={item.title} />
        : <img src={item.poster ?? item.src} alt={item.title} loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />}
    </div>

    {/* cinematic scrim — always on for the featured tile, on hover for the grid */}
    <div
      className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/25 to-transparent
                  transition-opacity duration-700 ${featured ? 'opacity-90' : 'opacity-0 group-hover:opacity-90'}`}
    />

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span className={`transition-all duration-700 ${featured ? 'opacity-100' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
        <PlayMark large={featured} />
      </span>
    </div>

    {featured ? (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 lg:p-10">
        <p className="eyebrow mb-3"><span className="w-8 h-px bg-champagne/60" />Featured</p>
        <h3 className="section-title text-3xl md:text-5xl max-w-2xl">{item.title}</h3>
        <p className="text-white/55 mt-2">{item.description}</p>
      </div>
    ) : (
      <div className="flex items-baseline justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold text-paper truncate">{item.title}</h3>
          <p className="text-white/45 text-sm truncate">{item.description}</p>
        </div>
        <span className="shrink-0 text-[10px] tracking-widest2 uppercase text-white/35">{item.tag ?? item.category}</span>
      </div>
    )}
  </button>
);

const Lightbox: React.FC<{ item: PortfolioItem; onClose: () => void }> = ({ item, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-noir-950/95 backdrop-blur-xl p-4 sm:p-8 animate-fade-in"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 p-3 text-white/50 hover:text-paper transition-colors duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-6xl">
        <div className="aspect-video bg-black border border-white/10">
          {item.kind === 'youtube' ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${item.src}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video className="w-full h-full" src={item.src} poster={item.poster}
              controls autoPlay playsInline />
          )}
        </div>
        <div className="flex items-baseline justify-between gap-6 pt-5">
          <div>
            <h3 className="font-display text-xl font-semibold text-paper">{item.title}</h3>
            <p className="text-white/45 text-sm">{item.description}</p>
          </div>
          <span className="shrink-0 text-[10px] tracking-widest2 uppercase text-white/35">{item.category}</span>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ music */

const Bars: React.FC = () => (
  <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
    {[0, 1, 2, 3].map((i) => (
      <span
        key={i}
        className="w-[3px] bg-champagne origin-bottom"
        style={{ height: '100%', animation: `eq 900ms ease-in-out ${i * 130}ms infinite alternate` }}
      />
    ))}
  </span>
);

const MusicTile: React.FC<{
  item: MusicItem; active: boolean; playing: boolean; onSelect: () => void;
}> = ({ item, active, playing, onSelect }) => (
  <div className="group relative bg-noir-950">
    <button type="button" onClick={onSelect} className="block w-full text-left" aria-label={`Play ${item.title}`}>
      <div className="aspect-square overflow-hidden bg-black relative">
        <img
          src={item.artwork}
          alt={`${item.title} — ${item.artist}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-[1.04] ${active ? 'scale-[1.04]' : ''}`}
        />
        <div
          className={`absolute inset-0 bg-noir-950/55 flex items-center justify-center transition-opacity duration-500
                      ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        >
          {active && playing ? <Bars /> : <PlayMark />}
        </div>
        {active && <span className="absolute inset-0 border border-champagne/70 pointer-events-none" />}
      </div>
    </button>

    <div className="px-4 py-4 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h3 className={`font-display text-sm font-semibold truncate ${active ? 'text-champagne' : 'text-paper'}`}>
          {item.title}
        </h3>
        <p className="text-white/45 text-sm truncate">{item.artist}</p>
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.title} on Apple Music`}
        className="shrink-0 mt-0.5 text-white/25 hover:text-champagne transition-colors duration-300"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M17.5 6.5L10 14M15 14v4H6V9h4" />
        </svg>
      </a>
    </div>
  </div>
);

/* -------------------------------------------------------------- section */

const Portfolio: React.FC = () => {
  const hasVideo = portfolio.length > 0;
  const playable = music.filter((m) => m.preview);
  const hasMusic = music.length > 0;

  const [view, setView] = useState<View>(hasVideo ? 'video' : 'music');
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  // ---- preview playback -------------------------------------------------
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  /** Build the Web Audio graph once, on the first user gesture. Playback still
   *  works if this throws — we simply never get a visualizer. */
  const ensureGraph = useCallback((el: HTMLAudioElement) => {
    if (ctxRef.current) return;
    try {
      const AC: typeof AudioContext =
        window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AC();
      const node = ctx.createAnalyser();
      node.fftSize = 128;
      node.smoothingTimeConstant = 0.8;
      ctx.createMediaElementSource(el).connect(node);
      node.connect(ctx.destination);
      ctxRef.current = ctx;
      analyserRef.current = node;
      setAnalyser(node);
    } catch {
      /* visualizer unavailable — audio still plays through the element */
    }
  }, []);

  const play = useCallback((idx: number) => {
    const el = audioRef.current;
    const track = playable[idx];
    if (!el || !track?.preview) return;
    ensureGraph(el);
    void ctxRef.current?.resume();
    if (el.src !== track.preview) {
      el.src = track.preview;
      setProgress(0);
    }
    void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    setCurrent(idx);
  }, [ensureGraph, playable]);

  const select = useCallback((idx: number) => {
    if (idx === current) {
      const el = audioRef.current;
      if (!el) return;
      if (el.paused) { void el.play(); setPlaying(true); } else { el.pause(); setPlaying(false); }
      return;
    }
    play(idx);
  }, [current, play]);

  const step = useCallback((delta: number) => {
    if (current === null || !playable.length) return;
    play((current + delta + playable.length) % playable.length);
  }, [current, play, playable.length]);

  const close = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
    setCurrent(null);
  }, []);

  // pause the preview if a video lightbox opens — never two sources at once
  useEffect(() => {
    if (lightbox && audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [lightbox]);

  const track = current === null ? null : playable[current];

  // Tabs are by FORMAT. Work types (commercials, event recaps) filter INSIDE the Video tab
  // rather than adding tabs — five tabs across the top is a menu, not a portfolio.
  const TABS: { id: View; label: string; show: boolean }[] = [
    { id: 'video', label: 'Video', show: hasVideo },
    { id: 'reels', label: 'Reels', show: reels.length > 0 },
    { id: 'music', label: 'Music', show: hasMusic },
  ].filter((t) => t.show) as { id: View; label: string; show: boolean }[];

  const tags = [...new Set(portfolio.map((p) => p.tag).filter(Boolean))] as string[];
  const [tag, setTag] = useState<string | null>(null);
  const films = tag ? portfolio.filter((p) => p.tag === tag) : portfolio;

  const HEADINGS: Record<View, string> = {
    video: 'The reel speaks for itself.',
    reels: 'Short-form, built to stop the scroll.',
    music: 'The catalog speaks for itself.',
  };
  const COUNTS: Record<View, string> = {
    video: `${films.length} ${films.length === 1 ? 'film' : 'films'}`,
    reels: `${reels.length} reels`,
    music: 'Tap a cover to listen',
  };

  const featured = films[0];
  const rest = films.slice(1);

  return (
    <section id="portfolio" className={`section-padding ${track ? 'pb-40' : ''}`}>
      <div className="container-custom reveal">
        <div className="mb-12">
          <p className="eyebrow mb-6"><span className="w-8 h-px bg-champagne/60" />{sectionNumber('portfolio')} — Selected Work</p>
          <h2 className="section-title text-4xl md:text-6xl max-w-3xl">{HEADINGS[view]}</h2>
        </div>

        {TABS.length > 1 && (
          <div className="flex items-center gap-8 border-b border-white/10 mb-12">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setView(t.id)}
                className={`relative -mb-px pb-4 font-display text-lg md:text-xl font-semibold tracking-tight
                            transition-colors duration-500 ${view === t.id ? 'text-paper' : 'text-white/35 hover:text-white/70'}`}
              >
                {t.label}
                <span
                  className={`absolute left-0 bottom-0 h-px bg-champagne transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                              ${view === t.id ? 'w-full' : 'w-0'}`}
                />
              </button>
            ))}
            <span className="ml-auto pb-4 text-[10px] tracking-widest2 uppercase text-white/30 hidden sm:block">
              {COUNTS[view]}
            </span>
          </div>
        )}

        {/* work-type filter — only earns its place once there is more than one type */}
        {view === 'video' && tags.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {[null, ...tags].map((t) => (
              <button
                key={t ?? 'all'}
                onClick={() => setTag(t)}
                className={`px-4 py-1.5 rounded-full text-[11px] tracking-widest2 uppercase border transition-all duration-300
                            ${tag === t
                              ? 'border-champagne/60 text-paper bg-white/[0.04]'
                              : 'border-white/15 text-white/45 hover:text-white/80 hover:border-white/30'}`}
              >
                {t ?? 'All'}
              </button>
            ))}
          </div>
        )}

        {view === 'video' ? (
          <div className="space-y-px bg-white/10 border border-white/10">
            {featured && <VideoTile item={featured} featured onOpen={() => setLightbox(featured)} />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {rest.map((item, idx) => (
                <VideoTile key={idx} item={item} onOpen={() => setLightbox(item)} />
              ))}
            </div>
          </div>
        ) : view === 'reels' ? (
          <Reels items={reels} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {playable.map((item, idx) => (
              <MusicTile
                key={idx}
                item={item}
                active={current === idx}
                playing={playing}
                onSelect={() => select(idx)}
              />
            ))}
          </div>
        )}

        <div className="mt-14">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Start Your Project
          </button>
        </div>
      </div>

      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        preload="none"
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          if (el.duration) setProgress(el.currentTime / el.duration);
        }}
        onEnded={() => step(1)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}

      {track && (
        <NowPlaying
          track={track}
          playing={playing}
          progress={progress}
          analyser={analyser}
          onToggle={() => current !== null && select(current)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          onSeek={(f) => {
            const el = audioRef.current;
            if (el?.duration) { el.currentTime = f * el.duration; setProgress(f); }
          }}
          onClose={close}
        />
      )}
    </section>
  );
};

export default Portfolio;
