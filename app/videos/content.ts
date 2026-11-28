// Owned by Claude (see seo-audit-nov-2026/COORDINATION.md). Video library: one page per on-topic YouTube video by
// Dr. CA Umang Ratani, so the spoken content is readable by search engines and AI assistants.
// Data is generated into videos.json by seo-audit-nov-2026/scripts/build-videos.py from the channel's own
// descriptions and captions. Rule: no number, price, saving or client name on these pages unless it is on the facts sheet.
import data from './videos.json';

export type VideoChapter = { start: number; title: string };
export type Video = {
  slug: string;
  youtubeId: string;
  title: string;
  question: string;
  answer: string;
  summary: string;
  keyPoints: string[];
  chapters: VideoChapter[];
  tools: string[];
  published: string; // ISO date-time with offset, from YouTube
  durationSec: number;
  language: string;
  topic: string;
  setting: string;
  originalTitle: string;
  related: { label: string; href: string }[];
};
export type Short = { youtubeId: string; label: string };

export const videos = data.videos as Video[];
export const shorts = data.shorts as Short[];
export const channel = data.channel as { url: string; counted: string; longVideos: number; shorts: number; live: number };

export const topics = ['AI basics and prompting', 'AI tools in practice', 'Talks and interviews', 'Running and growing a business'] as const;

export function isoDuration(sec: number) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}${s || (!h && !m) ? `${s}S` : ''}`;
}
export function clock(sec: number) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
}
export function minutes(sec: number) { return Math.max(1, Math.round(sec / 60)); }
export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const watchUrl = (id: string, t?: number) => `https://www.youtube.com/watch?v=${id}${t ? `&t=${t}s` : ''}`;
