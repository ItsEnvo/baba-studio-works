// Prepares vertical reels for the web and prints the content.ts entries to paste.
//
//   1. drop the original exports (any size) in  public/reels/_src/
//   2. node scripts/prep-reels.mjs
//   3. paste the printed block into `reels` in src/content.ts
//
// Each clip is re-encoded to a web-friendly 1080x1920 H.264 MP4 with the moov atom
// up front (so it starts playing before the whole file arrives) and stripped of audio
// — the rail plays muted, and dropping the track saves a third of the bytes.
// A poster frame is pulled from 0.5s in, past any fade-from-black on frame 0.
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const SRC = 'public/reels/_src';
const OUT = 'public/reels';

if (!existsSync(SRC)) {
  mkdirSync(SRC, { recursive: true });
  console.log(`Created ${SRC} — drop your original .mp4/.mov exports in there and re-run.`);
  process.exit(0);
}

const files = readdirSync(SRC).filter((f) => /\.(mp4|mov|m4v)$/i.test(f));
if (!files.length) {
  console.log(`No video files in ${SRC}. Drop the originals in and re-run.`);
  process.exit(0);
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const mb = (p) => (statSync(p).size / 1024 / 1024).toFixed(1);
const rows = [];

for (const file of files) {
  const name = slug(parse(file).name);
  const input = join(SRC, file);
  const mp4 = join(OUT, `${name}.mp4`);
  const jpg = join(OUT, `${name}.jpg`);

  execFileSync('ffmpeg', [
    '-y', '-i', input,
    '-vf', 'scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920',
    '-c:v', 'libx264', '-profile:v', 'high', '-crf', '25', '-preset', 'slow',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
    mp4,
  ], { stdio: 'pipe' });

  execFileSync('ffmpeg', [
    '-y', '-ss', '0.5', '-i', input,
    '-vf', 'scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920',
    '-frames:v', '1', '-q:v', '4', jpg,
  ], { stdio: 'pipe' });

  console.log(`${file}  ${mb(input)}MB -> ${mb(mp4)}MB`);
  rows.push(`  { title: '${parse(file).name}', client: 'TODO', src: '/reels/${name}.mp4', poster: '/reels/${name}.jpg' },`);
}

console.log('\nPaste into `reels` in src/content.ts, then set each client:\n');
console.log(rows.join('\n'));
