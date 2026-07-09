// =============================================================================
// THE BABA — central site content
// Swap the PLACEHOLDER values below for real info. Everything the site shows
// reads from here, so you never have to dig through components.
// Anything tagged `placeholder: true` is fake and should be replaced.
// =============================================================================

export const site = {
  name: 'THE BABA',
  tagline: 'Recording & Video Production',
  city: 'Fort Lauderdale, FL',
  // ---- CONTACT (replace placeholders) ----
  phone: { display: '(561) 810-7844', href: 'tel:+15618107844', placeholder: false },
  email: { display: 'thebabarecordings@gmail.com', href: 'mailto:thebabarecordings@gmail.com', placeholder: false },
  instagram: { handle: '@thebabaproductionstudios', href: 'https://instagram.com/thebabaproductionstudios', placeholder: false },
  address: { display: 'Fort Lauderdale, FL — by appointment', placeholder: true },
  hours: [
    { day: 'Mon – Fri', time: '10am – 10pm' },
    { day: 'Saturday', time: '10am – 8pm' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  // ---- CONTACT FORM ----
  // Web3Forms access key. Get a free key at https://web3forms.com (enter
  // thebabarecordings@gmail.com, they email the key). Safe to expose publicly —
  // it only routes submissions to that email. Until set, the form falls back to
  // opening the visitor's email client.
  web3formsKey: '',
};

// ---- STATS (replace with real numbers or set show:false to hide) ----
export const stats = {
  show: true,
  placeholder: true,
  items: [
    { number: '500+', label: 'Songs Recorded' },
    { number: '100+', label: 'Music Videos' },
    { number: '50+', label: 'Artists' },
    { number: '5+', label: 'Years' },
  ],
};

// ---- EQUIPMENT (replace with your real gear) ----
export const equipment = {
  placeholder: true,
  items: [
    'Neumann U87 Microphones',
    'SSL Mixing Console',
    'Pro Tools HDX System',
    'Genelec Monitoring',
    'Vintage Analog Gear',
    'Acoustic Treatment',
  ],
};

// ---- PORTFOLIO ----
// kind: 'youtube' | 'spotify' | 'image'
// For youtube use the video ID, for spotify use the embed URL, for image a /public path or URL.
export type PortfolioItem = {
  title: string;
  category: 'recording' | 'mixing' | 'video' | 'photography';
  kind: 'youtube' | 'spotify' | 'image';
  src: string;
  description: string;
  placeholder?: boolean;
};

// Real music videos shot/produced with The Baba artists (pulled from itsenvo portfolio).
// `src` = YouTube video ID. Remove any you don't want shown.
export const portfolio: PortfolioItem[] = [
  { title: 'YG Bam (Directed)', category: 'video', kind: 'youtube', src: '9m591tqDJUs', description: 'YG Bam' },
  { title: 'Stay (feat. Prodigious Q)', category: 'video', kind: 'youtube', src: 'nZ-zynNy67M', description: 'J-Desir' },
  { title: 'Pa Di Sa', category: 'video', kind: 'youtube', src: 'CA-E2mtsniI', description: 'J-Desir' },
  { title: 'Call Me Up', category: 'video', kind: 'youtube', src: '7ZuuRnoC__s', description: 'J-Desir' },
  { title: 'DIS N DAT', category: 'video', kind: 'youtube', src: 'z6aDdC_QSY8', description: 'Vizo South' },
  { title: 'LUCKED UP', category: 'video', kind: 'youtube', src: 'dRzKdheSC-0', description: 'Vizo South' },
  { title: 'SEE TMRW', category: 'video', kind: 'youtube', src: 'L1or5otlGEM', description: 'vizo.ss' },
  { title: 'SPLIT A PILL', category: 'video', kind: 'youtube', src: 'n4mG6jAZPmQ', description: 'Lil Sumn' },
  { title: 'DIRTY MONEY', category: 'video', kind: 'youtube', src: 'MQ3EwqCVD0c', description: 'Lil Sumn' },
];

// =============================================================================
// STUDIO GALLERY — photos of sessions / artists in the room.
// Drop image files into  public/gallery/  then add their filenames here, e.g.
//   { src: '/gallery/session-jdesir.jpg', caption: 'J-Desir in the booth' }
// Leave empty and the gallery shows an "add photos" state until you send them.
// =============================================================================
export type GalleryItem = { src: string; caption?: string };

export const gallery: GalleryItem[] = [
  // Add your studio photos here once they're in public/gallery/
];

// ---- SERVICES ----
export const services = [
  {
    title: 'Recording',
    price: '$100/hr',
    description: 'Studio recording with an engineer — music, audiobooks, voiceover, and podcasts.',
    features: ['High-end mics & preamps', 'Music, VO & audiobooks', 'Engineer included', 'Raw files provided'],
  },
  {
    title: 'Mixing & Mastering',
    price: '$500/song',
    description: 'Turn your tracks radio-ready. Mixed and mastered for every platform.',
    features: ['Pro mixing', 'Platform-ready masters', 'Reference matching', 'Revisions included'],
  },
  {
    title: 'Video Production',
    price: '$800+',
    description: 'Music videos, commercials, reels, and event recaps — concept to final cut.',
    features: ['4K multi-cam capture', 'Reels & short-form', 'Commercials & recaps', 'Color grade & edit'],
  },
  {
    title: 'Photography',
    price: 'Custom',
    description: 'Photo shoots for artists, brands, events, and product.',
    features: ['Artist & brand portraits', 'Event coverage', 'Commercial & product', 'Pro retouching'],
  },
];
