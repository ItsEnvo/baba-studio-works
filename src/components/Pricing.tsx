import React from 'react';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const TIERS: PricingTier[] = [
  {
    title: 'Recording Session',
    price: '$100',
    description: 'Per hour, with engineer',
    features: ['All studio gear', 'Engineer included', 'Real-time monitoring', 'Basic editing', 'Raw files provided'],
  },
  {
    title: 'Mix & Master',
    price: '$500',
    description: 'Per song, release-ready',
    features: ['Pro mixing', 'Platform-ready master', 'Reference matching', 'Revisions included', '2-week turnaround'],
    featured: true,
  },
  {
    title: 'Music Video',
    price: '$800+',
    description: 'Concept to final cut',
    features: ['4K capture', 'Pro lighting', 'Multi-cam', 'Color grade', 'Edit included'],
  },
];

const ADDONS = [
  { service: 'Additional Musicians', price: '$50–200' },
  { service: 'Instrument Rental', price: '$25–100 / day' },
  { service: 'Extended Studio Time', price: '$75 / hr' },
  { service: 'Rush Delivery', price: '+50%' },
  { service: 'Audiobook / Voiceover', price: 'Custom' },
  { service: 'Reels / Short-form Video', price: 'Custom' },
  { service: 'Photography Session', price: '$200–500' },
  { service: 'Event Coverage / Recap', price: 'Custom' },
  { service: 'Commercial Production', price: 'Custom' },
  { service: 'Album Package (10+ songs)', price: 'On request' },
];

const go = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

const Pricing: React.FC = () => (
  <section id="pricing" className="section-padding border-t border-white/10">
    <div className="container-custom reveal">
      <div className="grid lg:grid-cols-12 gap-y-8 items-end mb-16">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-6"><span className="w-8 h-px bg-champagne/60" />05 — Rates</p>
          <h2 className="section-title text-4xl md:text-6xl max-w-2xl">Clear rates. No surprises.</h2>
        </div>
        <p className="lg:col-span-4 text-white/55 lg:text-right">
          Studio rates below. Commercials, campaigns, and label projects are scoped custom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-16">
        {TIERS.map((t) => (
          <div key={t.title} className={`p-8 flex flex-col ${t.featured ? 'bg-noir-800' : 'bg-noir-950'}`}>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display text-xl font-semibold text-paper">{t.title}</h3>
              {t.featured && <span className="text-[10px] tracking-widest2 uppercase text-white/40">Most booked</span>}
            </div>
            <p className="text-white/45 text-sm mb-6">{t.description}</p>
            <div className="font-display text-5xl font-semibold text-paper mb-8">{t.price}</div>
            <ul className="space-y-3 mb-8 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 text-white/60 text-sm border-b border-white/5 pb-3 last:border-0">
                  <span className="text-white/30">—</span> {f}
                </li>
              ))}
            </ul>
            <button onClick={go} className={t.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>Book</button>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Add-ons</p>
          <div className="border-t border-white/10">
            {ADDONS.map((a) => (
              <div key={a.service} className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-white/65 text-sm">{a.service}</span>
                <span className="text-paper text-sm">{a.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 h-fit">
          <div className="bg-noir-950 p-8">
            <h4 className="font-display text-lg font-semibold text-paper mb-3">Artist Development</h4>
            <p className="text-white/55 text-sm mb-5">
              Recording, mixing, and a music video to launch an emerging artist's sound.
            </p>
            <div className="font-display text-2xl font-semibold text-paper mb-5">From $2,500</div>
            <button onClick={go} className="btn-secondary w-full">Enquire</button>
          </div>
          <div className="bg-noir-950 p-8">
            <h4 className="font-display text-lg font-semibold text-paper mb-3">Commercial / Brand</h4>
            <p className="text-white/55 text-sm mb-5">
              Audio and video content for brands — campaigns, ads, and spots, fully produced.
            </p>
            <div className="font-display text-2xl font-semibold text-paper mb-5">Custom</div>
            <button onClick={go} className="btn-secondary w-full">Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
