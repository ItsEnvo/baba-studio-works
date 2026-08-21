// Resolves each music[] entry to a 30s Apple preview URL and bakes it into content.ts.
// Idempotent — safe to re-run after editing music[]:  node scripts/fetch-previews.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/content.ts';
const lines = readFileSync(path, 'utf8').split('\n');
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let touched = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!/^\s*\{ title: /.test(line) || !line.includes('music.apple.com')) continue;

  const title = line.match(/\{ title: '([^']+)'/)?.[1] ?? line.match(/\{ title: "([^"]+)"/)?.[1];
  const url = line.match(/url: '([^']+)'/)?.[1];
  if (!title || !url) continue;

  const id = url.match(/[?&]i=(\d+)/)?.[1] ?? url.match(/\/(\d{6,})/g)?.pop()?.slice(1);
  const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song&limit=25`).then((r) => r.json());
  const songs = (res.results || []).filter((r) => r.wrapperType === 'track' && r.previewUrl);
  const hit = songs.find((s) => norm(s.trackName) === norm(title)) || songs[0];
  if (!hit) { console.warn('NO PREVIEW', title); continue; }

  // strip any previously baked keys, then append fresh ones
  const base = line.replace(/, preview: '[^']*'/g, '').replace(/, previewTitle: '[^']*'/g, '');
  // card title may name an ALBUM — keep the real track name so the player never mislabels
  const extra = norm(hit.trackName) === norm(title) ? '' : `, previewTitle: '${hit.trackName.replace(/'/g, "\\'")}'`;
  const tail = `, preview: '${hit.previewUrl}'${extra} },`;
  lines[i] = base.replace(/ \},\s*$/, () => tail);
  touched++;
  console.log('ok  ', title, '->', hit.trackName);
  await sleep(300);
}
writeFileSync(path, lines.join('\n'));
console.log(`content.ts updated (${touched} tracks)`);
