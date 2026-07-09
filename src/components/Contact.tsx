import React, { useState } from 'react';
import { site } from '../content';

const EMPTY = { name: '', email: '', phone: '', service: '', budget: '', message: '', projectDate: '' };

const field = 'w-full px-4 py-3 bg-noir-900 border border-white/10 rounded-none text-paper placeholder-white/25 text-sm focus:outline-none focus:border-white/40 transition-colors';
const label = 'block text-[11px] tracking-widest2 uppercase text-white/40 mb-2';

const SERVICE_LABELS: Record<string, string> = {
  recording: 'Recording Session',
  mixing: 'Mixing & Mastering',
  video: 'Music Video',
  photography: 'Photography',
  commercial: 'Commercial / Brand',
  package: 'Artist Package',
  other: 'Other / Custom',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [botField, setBotField] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mailtoFallback = () => {
    const subject = `Project Inquiry — ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || '—'}`,
      `Service: ${SERVICE_LABELS[formData.service] || formData.service}`,
      `Budget: ${formData.budget || '—'}`,
      `Preferred Date: ${formData.projectDate || '—'}`,
      '',
      formData.message,
    ].join('\n');
    window.location.href = `${site.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData(EMPTY);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return; // honeypot tripped — silently drop
    setError('');

    // No key configured yet — open the visitor's email client instead.
    if (!site.web3formsKey) {
      mailtoFallback();
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `New Project Inquiry — ${formData.name}`,
          from_name: 'The Baba Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: SERVICE_LABELS[formData.service] || formData.service,
          budget: formData.budget,
          preferred_date: formData.projectDate,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setFormData(EMPTY);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      setError('Something went wrong sending your inquiry. Please email us directly at ' + site.email.display + '.');
    } finally {
      setSending(false);
    }
  };

  const info = [
    { label: 'Studio', value: site.address.display, href: undefined as string | undefined },
    { label: 'Email', value: site.email.display, href: site.email.href },
    { label: 'Phone', value: site.phone.display, href: site.phone.href },
    { label: 'Instagram', value: site.instagram.handle, href: site.instagram.href },
  ];

  return (
    <section id="contact" className="section-padding border-t border-white/10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6"><span className="w-8 h-px bg-white/40" />06 — Contact</p>
            <h2 className="section-title text-4xl md:text-6xl max-w-md">
              Let's make something worth keeping.
            </h2>
            <p className="mt-6 text-white/55 max-w-sm">
              Tell us about the project and we'll come back with a plan, usually within 24 hours.
            </p>

            <div className="mt-12 border-t border-white/10">
              {info.map((c) => (
                <div key={c.label} className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-[11px] tracking-widest2 uppercase text-white/40">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} target={c.label === 'Instagram' ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-paper text-sm hover:text-white/60 transition-colors">{c.value}</a>
                  ) : (
                    <span className="text-paper text-sm">{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="panel p-14 text-center h-full grid place-items-center">
                <div>
                  <div className="w-12 h-12 border border-white/20 grid place-items-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-paper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-paper mb-2">Received.</h3>
                  <p className="text-white/50">Thanks for reaching out — we'll be in touch within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-secondary mt-8">Send another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="panel p-8 md:p-10">
                <input
                  type="text" name="botcheck" tabIndex={-1} autoComplete="off"
                  value={botField} onChange={(e) => setBotField(e.target.value)}
                  className="hidden" aria-hidden="true"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className={label}>Full Name *</label>
                    <input id="name" name="name" value={formData.name} onChange={onChange} required className={field} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required className={field} placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="phone" className={label}>Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={onChange} className={field} placeholder="(561) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="service" className={label}>Service *</label>
                    <select id="service" name="service" value={formData.service} onChange={onChange} required className={field}>
                      <option value="" className="bg-noir-900">Select a service</option>
                      <option value="recording" className="bg-noir-900">Recording Session</option>
                      <option value="mixing" className="bg-noir-900">Mixing &amp; Mastering</option>
                      <option value="video" className="bg-noir-900">Music Video</option>
                      <option value="photography" className="bg-noir-900">Photography</option>
                      <option value="commercial" className="bg-noir-900">Commercial / Brand</option>
                      <option value="package" className="bg-noir-900">Artist Package</option>
                      <option value="other" className="bg-noir-900">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="budget" className={label}>Budget</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={onChange} className={field}>
                      <option value="" className="bg-noir-900">Select range</option>
                      <option value="under-500" className="bg-noir-900">Under $500</option>
                      <option value="500-1000" className="bg-noir-900">$500 – $1,000</option>
                      <option value="1000-2500" className="bg-noir-900">$1,000 – $2,500</option>
                      <option value="2500-5000" className="bg-noir-900">$2,500 – $5,000</option>
                      <option value="5000-plus" className="bg-noir-900">$5,000+</option>
                      <option value="discuss" className="bg-noir-900">Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectDate" className={label}>Preferred Date</label>
                    <input type="date" id="projectDate" name="projectDate" value={formData.projectDate} onChange={onChange} className={`${field} [color-scheme:dark]`} />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className={label}>Project Description *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={onChange} required rows={5} className={`${field} resize-vertical`}
                    placeholder="What are you making? The vision, scope, timeline..." />
                </div>

                {error && (
                  <p className="mb-4 text-sm text-red-300/80 border border-red-400/20 bg-red-500/5 px-4 py-3">{error}</p>
                )}

                <button type="submit" disabled={sending} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {sending ? 'Sending…' : 'Send Project Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
