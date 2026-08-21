import React from 'react';
import { site, gallery } from '../content';

const QUICK = [
  { name: 'Services', id: 'services' },
  { name: 'Work', id: 'portfolio' },
  ...(gallery.length ? [{ name: 'Gallery', id: 'gallery' }] : []),
  { name: 'Studio', id: 'about' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Contact', id: 'contact' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-noir-950">
      <div className="container-custom py-20">
        {/* Big closing line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-paper">THE BABA</h2>
          <button onClick={() => go('contact')} className="btn-primary self-start md:self-auto">Start a Project</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          <div className="col-span-2 md:col-span-1">
            <p className="eyebrow mb-5">Studio</p>
            <p className="text-white/55 text-sm leading-relaxed">
              Recording &amp; video production.<br />{site.city}.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Index</p>
            <ul className="space-y-3">
              {QUICK.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-white/55 hover:text-paper transition-colors text-sm">{l.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li><a href={site.email.href} className="text-white/55 hover:text-paper transition-colors break-all">{site.email.display}</a></li>
              <li><a href={site.phone.href} className="text-white/55 hover:text-paper transition-colors">{site.phone.display}</a></li>
              <li><a href={site.instagram.href} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-paper transition-colors">{site.instagram.handle}</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Hours</p>
            <ul className="space-y-3 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-white/55">
                  <span>{h.day}</span><span className="text-white/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/35 text-xs tracking-wide">© {year} The Baba. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white/35 hover:text-paper transition-colors text-xs tracking-widest2 uppercase flex items-center gap-2">
            Back to top
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
