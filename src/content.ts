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
  // portfolio[0] is the full-bleed FEATURED tile in the Work section — newest work leads.
  { title: 'CREDIT', category: 'video', kind: 'youtube', src: '7g9p1Agajyo', description: 'Vizo South' },
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
// MUSIC WORK — songs recorded / mixed / mastered at the studio.
// Shown as album-art cards that link out to the release. `url` = Apple Music,
// Spotify, or any streaming link. Add/remove freely.
// =============================================================================
export type MusicItem = {
  title: string;
  artist: string;
  artwork: string;
  url: string;
  /** 30s Apple preview, baked in by scripts/fetch-previews.mjs — re-run it after editing this list. */
  preview?: string;
  /** Real track name, present only when `title` names an album rather than the previewed track. */
  previewTitle?: string;
};

export const music: MusicItem[] = [
  { title: "Think I'm Crazy", artist: 'Robb Bank$', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/73/97/78/7397782d-1aaa-4a5e-5a61-8c7522864037/61923.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/think-im-crazy/1872097458?i=1872097472', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b3/b1/99/b3b19904-f1fb-6b5e-0972-1830f11d7e02/mzaf_2212897149642259530.plus.aac.p.m4a' },
  { title: 'Okay Cupid', artist: 'Kyra Baskin', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/73/63/ad/7363adf7-7f05-eb0d-83c4-63e0e9137ec9/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/okay-cupid/1795285751?i=1795285752', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b3/2a/6e/b32a6ef5-1e55-356f-7fc7-43cea4972694/mzaf_8404696307897316766.plus.aac.p.m4a' },
  { title: 'CIRCLES', artist: 'ENVO', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c3/5c/87/c35c875e-92c2-83ff-466c-a6ea7779a862/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/circles-single/1895055381', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/b3/57/7db35743-1241-2eb7-7306-762c0701f762/mzaf_13797372103226067312.plus.aac.p.m4a' },
  { title: 'LANGUAGE', artist: 'ENVO', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/50/97/575097f6-a313-34c4-6520-eedce19f1c31/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/language/1894549442?i=1894549443', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/38/f1/9e/38f19ed9-77b5-b9d4-3271-3c3783f7b8e9/mzaf_3459601407407805283.plus.aac.p.m4a' },
  { title: 'Pa Di Sa', artist: 'J Desir', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4d/a4/e3/4da4e388-351f-dfd1-c228-ad42b3735f9a/198542846542-copy-712f96e8.png/600x600bb.jpg', url: 'https://music.apple.com/us/album/pa-di-sa/1760357360?i=1760357362', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/54/0a/18/540a187d-ba04-66b2-abc0-b80e4851f808/mzaf_4668382013127824248.plus.aac.p.m4a' },
  { title: 'Stay (feat. Prodigious Q)', artist: 'J Desir', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/2b/75/6e2b75da-e375-c103-6550-71e461099ce6/199479199138-copy-452ff0e6.png/600x600bb.jpg', url: 'https://music.apple.com/us/album/stay-feat-prodigious-q-single/1823106787', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b5/b7/c3/b5b7c367-82ce-e24c-ef44-b1d11ad83722/mzaf_17732430382194525656.plus.aac.p.m4a' },
  { title: 'Costs Of Staying', artist: 'Soch', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2f/80/e4/2f80e425-f22b-ffe8-322d-14e41f81a14d/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/costs-of-staying/1870586998', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/04/31/98043126-a22e-fa3f-e040-6027e3ea7338/mzaf_1580537411829616714.plus.aac.p.m4a', previewTitle: 'King Aura' },
  { title: 'DIS N DAT', artist: 'Vizo South', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f6/cd/e5/f6cde555-29b2-0d0c-dadd-bb99dff2e850/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/dis-n-dat/1812092107?i=1812092108', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ea/66/86/ea668680-06eb-e3ab-6ee2-a9ba54f09fd2/mzaf_4874096971114387189.plus.aac.p.m4a' },
  { title: 'SAME MONEY x NWFKMoney', artist: 'Bani', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/d7/8e/59d78e5a-a98c-4942-867b-e8e8d5555146/196873523217.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/same-money-x-nwfkmoney/1840951566?i=1840951567', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0c/f6/b3/0cf6b335-327c-bf3a-63bf-156015ed7453/mzaf_3909949363828175074.plus.aac.p.m4a' },
  { title: 'Black Truck', artist: 'K3hree & Bani', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/02/36/bc/0236bca9-8072-24e8-b7bc-49242babd1e0/cover_199087133487.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/black-truck/1866539607?i=1866539608', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/ec/84/e3ec84d9-2c16-d270-7645-25b9c6f1089c/mzaf_9229582337974177082.plus.aac.p.m4a' },
  { title: 'Clocked It', artist: 'Angelina Lucii', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/24/8e/fa248e6c-754a-787e-1da9-9f520133f0ad/764656145910_cover.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/clocked-it/1793827284?i=1793827288', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ed/ca/e3/edcae338-98a2-ba1f-aec1-e2c0e54db8f5/mzaf_1749111100262158895.plus.aac.p.m4a' },
  { title: 'You Lived Life', artist: 'Craig Wittus', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6b/84/bc/6b84bc29-9a07-9f6a-cd1c-1f9bd9ffedc0/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/you-lived-life/1722416529', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5f/70/ee/5f70ee10-80b2-9f8a-6309-f1fcaa03ca81/mzaf_11031899406087188503.plus.aac.p.m4a' },
  { title: 'Lights Go Down', artist: 'GABE GREYSON', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/a4/dd/d9a4ddb2-4484-5e60-3108-a0145aa3f543/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/lights-go-down/1809482822?i=1809482823', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9b/ce/1f/9bce1f45-2cb0-3819-17e7-cc97df239376/mzaf_15003133645961608673.plus.aac.p.m4a' },
  { title: 'Trust Issues', artist: 'Local loverboi', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5b/93/0a/5b930a68-861d-6edc-e280-070743f8ea65/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/trust-issues/1743447740?i=1743447741', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/fa/f8/19faf876-52e7-7429-3834-0ea50c03ce6b/mzaf_18242338444907099592.plus.aac.p.m4a' },
  { title: 'Ladybug (Virgos)', artist: '734Jake', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/07/78/10/077810c4-cb22-32ba-0921-dbd92d88657f/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/ladybug-virgos/1648808175?i=1648808446', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6b/f5/27/6bf52705-a8da-89ec-17b1-b2c194fe2d75/mzaf_9503034905096445307.plus.aac.p.m4a' },
  { title: 'Gothic Mansion', artist: '734Jake', artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/05/77/74/057774b4-503d-dc29-b755-89dae9bf926e/artwork.jpg/600x600bb.jpg', url: 'https://music.apple.com/us/album/gothic-mansion/1642572951?i=1642572952', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7a/f5/d3/7af5d3e9-82e7-7b55-7aa1-e0460d72ab49/mzaf_17497000087952533156.plus.aac.p.m4a' },
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

// ---- SECTION NUMBERING ----
// The numbered eyebrows (01 — Services, 02 — Selected Work ...) must stay in sequence
// even when a section hides itself, so derive them from one ordered list.
export const sectionNumber = (id: string): string => {
  const order = ['services', 'portfolio', ...(gallery.length ? ['gallery'] : []), 'about', 'pricing', 'contact'];
  return String(order.indexOf(id) + 1).padStart(2, '0');
};
