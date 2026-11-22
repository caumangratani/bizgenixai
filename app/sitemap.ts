import type { MetadataRoute } from 'next';
import { caseStudies } from './case-studies/content';
import { articles } from './blog/articles';
import { guides } from './guides/content';
import { resources } from './resources/content';

const BASE = 'https://bizgenix.ai';
// Last substantive update of the page group. Change it when those pages change.
const SITE_UPDATED = new Date('2026-11-22');
const CASE_STUDIES_UPDATED = new Date('2026-11-14');

const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/ai-automation', priority: 0.9 },
  { path: '/ai-consulting', priority: 0.9 },
  { path: '/custom-solutions', priority: 0.9 },
  { path: '/courses', priority: 0.9 },
  { path: '/products', priority: 0.8 },
  { path: '/products/growth-intelligence', priority: 0.9 },
  { path: '/products/ai-crm', priority: 0.9 },
  { path: '/products/voice-ai', priority: 0.8 },
  { path: '/products/bizchat', priority: 0.8 },
  { path: '/products/scaleos', priority: 0.8 },
  { path: '/ai-consultant-ahmedabad', priority: 0.8 },
  { path: '/industries/textile', priority: 0.8 },
  { path: '/industries/real-estate-construction', priority: 0.8 },
  { path: '/case-studies', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  { path: '/guides', priority: 0.7 },
  { path: '/tally', priority: 0.8 },
  { path: '/global', priority: 0.8 },
  { path: '/corporate-ai-training', priority: 0.9 },
  { path: '/scale-with-ai', priority: 0.9 },
  { path: '/resources', priority: 0.8 },
  { path: '/about/umang-ratani', priority: 0.8 },
  { path: '/faq', priority: 0.8 },
  { path: '/pricing', priority: 0.8 },
  { path: '/ai-agent-development', priority: 0.9 },
  { path: '/tools/where-is-my-money-stuck', priority: 0.9 },
  ...resources.map(r => ({ path: `/resources/${r.slug}`, priority: 0.6 })),
  { path: '/about', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
  { path: '/privacy-policy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
  { path: '/data-deletion', priority: 0.2 },
];

// Never publish a lastmod in the future: search engines distrust the whole sitemap when they see one.
const notFuture = (d: Date) => (d.getTime() > Date.now() ? new Date() : d);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, priority }) => ({ url: `${BASE}${path}`, lastModified: SITE_UPDATED, priority }));
  const studies = caseStudies.map(study => ({ url: `${BASE}/case-studies/${study.slug}`, lastModified: CASE_STUDIES_UPDATED, priority: 0.6 }));
  const posts = articles.map(article => ({ url: `${BASE}/blog/${article.slug}`, lastModified: new Date(article.modified || article.date), priority: 0.7 }));
  const guidePages = guides.map(guide => ({ url: `${BASE}/guides/${guide.slug}`, lastModified: new Date(guide.updated), priority: 0.8 }));
  return [...pages, ...guidePages, ...posts, ...studies].map(entry => (entry.lastModified ? { ...entry, lastModified: notFuture(new Date(entry.lastModified)) } : entry));
}
