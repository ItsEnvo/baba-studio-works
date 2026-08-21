import React, { useEffect, useRef } from 'react';
import type { MusicItem } from '../content';

type Props = {
  track: MusicItem;
  playing: boolean;
  progress: number; // 0..1
  analyser: AnalyserNode | null;
  onToggle: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSeek: (fraction: number) => void;
  onClose: () => void;
};

/** Live frequency bars driven by the actual preview audio (Apple serves it CORS-open). */
const Waveform: React.FC<{ analyser: AnalyserNode | null; playing: boolean }> = ({ analyser, playing }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bins = analyser ? new Uint8Array(analyser.frequencyBinCount) : null;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const count = 28;
      const gap = 3;
      const barW = Math.max(1.5, (w - gap * (count - 1)) / count);

      if (analyser && bins) analyser.getByteFrequencyData(bins);

      for (let i = 0; i < count; i++) {
        // sample the low-mid range, where music actually lives
        const v = bins ? bins[Math.floor((i / count) * (bins.length * 0.62))] / 255 : 0;
        const amp = playing ? Math.max(0.06, v) : 0.06;
        const barH = Math.max(2, amp * h);
        ctx.fillStyle = `rgba(200, 177, 132, ${0.25 + amp * 0.6})`;
        ctx.fillRect(i * (barW + gap), (h - barH) / 2, barW, barH);
      }
      if (!reduced) rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [analyser, playing]);

  return <canvas ref={canvasRef} className="w-full h-8" aria-hidden="true" />;
};

const NowPlaying: React.FC<Props> = ({
  track, playing, progress, analyser, onToggle, onPrev, onNext, onSeek, onClose,
}) => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-noir-950/90 backdrop-blur-xl animate-fade-in">
    {/* progress rail doubles as the scrubber */}
    <button
      type="button"
      aria-label="Seek"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        onSeek((e.clientX - r.left) / r.width);
      }}
      className="group block w-full h-1 bg-white/10 cursor-pointer"
    >
      <span
        className="block h-full bg-champagne transition-[width] duration-150 ease-linear group-hover:bg-champagne-soft"
        style={{ width: `${Math.min(100, progress * 100)}%` }}
      />
    </button>

    <div className="container-custom px-6 lg:px-12 py-3 flex items-center gap-4 sm:gap-6">
      <img src={track.artwork} alt="" className="w-12 h-12 shrink-0 object-cover" />

      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold text-paper truncate">
          {track.previewTitle ?? track.title}
        </p>
        <p className="text-white/45 text-xs truncate">{track.artist}</p>
      </div>

      <div className="hidden md:block w-40 lg:w-56 shrink-0">
        <Waveform analyser={analyser} playing={playing} />
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button onClick={onPrev} aria-label="Previous track"
          className="p-2 text-white/45 hover:text-paper transition-colors duration-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
        </button>

        <button onClick={onToggle} aria-label={playing ? 'Pause' : 'Play'}
          className="w-10 h-10 rounded-full bg-paper text-noir-950 flex items-center justify-center
                     transition-transform duration-300 hover:scale-105">
          {playing
            ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
            : <svg className="w-4 h-4 translate-x-px" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
        </button>

        <button onClick={onNext} aria-label="Next track"
          className="p-2 text-white/45 hover:text-paper transition-colors duration-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z" /></svg>
        </button>
      </div>

      <a href={track.url} target="_blank" rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 shrink-0 text-[10px] tracking-widest2 uppercase
                   text-white/45 hover:text-champagne transition-colors duration-300">
        Full track
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M17.5 6.5L10 14M15 14v4H6V9h4" />
        </svg>
      </a>

      <button onClick={onClose} aria-label="Close player"
        className="p-2 shrink-0 text-white/35 hover:text-paper transition-colors duration-300">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  </div>
);

export default NowPlaying;
