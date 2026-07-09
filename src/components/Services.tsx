import React from 'react';
import { services } from '../content';

const Services: React.FC = () => {
  const go = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-y-10 mb-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6"><span className="w-8 h-px bg-white/40" />01 — Services</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-4xl md:text-6xl max-w-3xl">
              Audio and video, end to end.
            </h2>
            <p className="mt-6 text-lg text-white/55 max-w-xl">
              Track it, mix it, shoot it, finish it — a full production house under one roof,
              built to deliver work that holds up at any budget.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {services.map((s, i) => (
            <div key={s.title}
              className="group grid md:grid-cols-12 gap-y-3 items-baseline py-8 border-b border-white/10 transition-colors hover:bg-white/[0.02]">
              <div className="md:col-span-1 text-sm text-white/35 tabular-nums">0{i + 1}</div>
              <h3 className="md:col-span-4 font-display text-2xl md:text-3xl font-semibold text-paper group-hover:translate-x-1 transition-transform">
                {s.title}
              </h3>
              <p className="md:col-span-5 text-white/55">{s.description}</p>
              <div className="md:col-span-2 md:text-right text-white/70 font-medium">{s.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-white/55 max-w-lg">
            Bigger production? We scope commercials, campaigns, and label projects custom.
          </p>
          <button onClick={go} className="btn-secondary shrink-0">Request a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
