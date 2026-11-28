// Owned by Claude (see seo-audit-nov-2026/COORDINATION.md). Playbooks: the guides people receive by DM after commenting
// on a reel, published as open pages. Data is generated into playbooks.json by seo-audit-nov-2026/scripts/build-playbooks.py.
// Rules: plain titles (never "secret codes"), no earnings claims, a "checked" date on every page.
import data from './playbooks.json';

export type Playbook = {
  slug: string; title: string; topic: string; question: string; answer: string; html: string; words: number; minutes: number;
  keyword: string; checked: string; file: string; faqs: [string, string][]; related: { label: string; href: string }[];
};
export const playbooks = data.playbooks as unknown as Playbook[];
export const playbookTopics = ['Working with AI assistants', 'Sales and follow-up', 'Content and marketing'] as const;
