// Scale With AI editions (owned by Claude; see seo-audit-nov-2026/COORDINATION.md).
// Facts: dates and cities from the workshop booklets and event.bizgenix.ai; attendance from the facts sheet
// (Ahmedabad 100+, Surat 200+, Mumbai 300+; no paid-seat counts). Venues only where confirmed. Pass prices only
// where confirmed (Vadodara, Ahmedabad 5th); Event schema is emitted only for editions with complete data.
// The first Ahmedabad edition has no confirmed date here, so it has no page of its own.

export type Edition = {
  slug: string;
  city: string;
  name: string;
  dateISO: string;
  dateText: string;
  venue?: string;
  hours?: { start: string; end: string };
  attendance?: string;
  lead: string;
  covered: { title: string; text: string }[];
  materials: { title: string; text: string }[];
  photo?: { src: string; alt: string; caption: string; width: number; height: number };
  offers?: { low: number; high: number; url: string };
  faqs: { q: string; a: string }[];
};

const leader = 'Dr. CA Umang Ratani, founder and CEO of Bizgenix AI';
const next = { q: 'When is the next Scale With AI event?', a: 'The next city and date are announced on event.bizgenix.ai. The full classroom is also available as a recorded programme at course.bizgenix.ai, and companies can book the same method as corporate AI training.' };

export const editions: Edition[] = [
  {
    slug: 'surat-february-2026',
    city: 'Surat',
    name: 'Scale With AI, Surat',
    dateISO: '2026-02-28',
    dateText: '28 February 2026',
    attendance: 'more than 200 participants',
    lead: `Scale With AI came to Surat on 28 February 2026, its second city after Ahmedabad, with more than 200 business owners and professionals in the room. Led by ${leader}, the day covered how AI works, prompt and context engineering, and how to build AI systems for sales, operations and finance in an owner-run business.`,
    covered: [
      { title: 'The intelligence shift', text: 'Why AI is an infrastructure layer for a business, not just another tool.' },
      { title: 'How AI actually works', text: 'Large language models and what happens when you type a prompt, without jargon.' },
      { title: 'Prompt engineering', text: 'Zero-shot, few-shot and step-by-step prompting, explained with business examples.' },
      { title: 'Context engineering', text: 'How to make AI understand your business specifically, so answers stop being generic.' },
      { title: 'AI for revenue and operations', text: 'Using AI to multiply output, personalise selling, compress costs and automate workflows.' },
      { title: 'Building AI systems, safely', text: 'Custom assistants, retrieval from your own documents, agents, and the guardrails for data privacy and responsible use.' },
    ],
    materials: [
      { title: 'Pre-read booklet', text: 'AI Foundations and Prompt Engineering: a non-technical guide sent before the workshop, with exercises to complete in advance.' },
      { title: 'Prompt templates', text: 'Copy-paste prompts for marketing, sales, finance, HR and operations.' },
      { title: 'A 90-day AI roadmap', text: 'A week-by-week plan to put AI to work after the event.' },
    ],
    faqs: [
      { q: 'When was Scale With AI held in Surat?', a: 'On 28 February 2026. It was the second Scale With AI city after Ahmedabad, and more than 200 business owners and professionals attended.' },
      { q: 'Who led the Surat workshop?', a: `${leader}, a chartered accountant who has guided 1,000+ businesses over 13+ years.` },
      next,
    ],
  },
  {
    slug: 'mumbai-may-2026',
    city: 'Mumbai',
    name: 'Scale With AI, Mumbai',
    dateISO: '2026-05-02',
    dateText: '2 May 2026',
    attendance: 'more than 300 participants',
    lead: `Scale With AI Mumbai took place on 2 May 2026 with more than 300 business owners and decision-makers. Led by ${leader}, the day was built around one skill: briefing AI like a CEO briefs a new hire, through prompt engineering and context engineering, then putting it to work across sales, operations and finance.`,
    covered: [
      { title: 'Prompt engineering', text: 'A structured way to brief AI, the RTCCF method, so results are right the first time.' },
      { title: 'Context engineering', text: 'Giving AI the documents, rules and examples of your business before it works.' },
      { title: 'Eight principles of working with AI', text: 'The habits that separate average results from excellent ones, with worked examples.' },
      { title: 'A 21-prompt business library', text: 'Prompts for the moments owners face every week, practised live.' },
      { title: 'AI in action', text: 'Live demonstrations of AI answering calls, following up leads and generating proposals.' },
      { title: 'A 30-day practice path', text: 'What to do each week after the event so the skill becomes a habit.' },
    ],
    materials: [
      { title: 'The AI Communication Playbook', text: 'The pre-read booklet on prompt and context engineering, with seven worked examples.' },
      { title: 'The AI Prompt Library', text: '109 prompts across 12 departments, shared as post-read material. It is now a free download in our resources.' },
      { title: 'The participant workbook', text: 'Exercises completed during the day on each participant’s own business.' },
    ],
    photo: { src: '/training/hall-crowd-mumbai.jpg', alt: 'A packed hall at Scale With AI Mumbai', caption: 'Scale With AI, Mumbai, May 2026.', width: 1600, height: 1066 },
    faqs: [
      { q: 'When was Scale With AI held in Mumbai?', a: 'On 2 May 2026, with more than 300 business owners and decision-makers attending.' },
      { q: 'Can I get the material from the Mumbai event?', a: 'The AI Prompt Library shared with Mumbai participants (109 prompts across 12 departments) is a free download at bizgenix.ai/resources.' },
      next,
    ],
  },
  {
    slug: 'vadodara-august-2026',
    city: 'Vadodara',
    name: 'Scale With AI: 1-Day AI Accelerator, Vadodara',
    dateISO: '2026-08-22',
    dateText: '22 August 2026',
    venue: 'Hyatt Place Vadodara',
    hours: { start: '09:30', end: '18:30' },
    attendance: 'a full house',
    lead: `The Vadodara edition of Scale With AI was a one-day AI accelerator at Hyatt Place Vadodara on Saturday, 22 August 2026, run to a full house with Scale Guild. Led by ${leader}, it was a build day: participants worked table by table on their own laptops, in English and Hindi, and left with tools they had built.`,
    covered: [
      { title: 'The AI tools that matter', text: 'A guided tour of 70+ AI tools across 14 business categories, and how to choose between them.' },
      { title: 'Prompting and context', text: 'Building a master prompt for your own business, so every tool starts with your context.' },
      { title: 'Building live', text: 'Apps and pages built on the big screen by describing them to AI, then built again by participants.' },
      { title: 'AI agents', text: 'An agent blueprint for one job in each participant’s business.' },
      { title: 'Agent ideas across the business', text: 'A grid of agents an owner-run business can put to work, department by department.' },
      { title: 'A plan to take home', text: 'What to automate first, and the next steps for the following weeks.' },
    ],
    materials: [
      { title: 'The AI Tools Landscape', text: 'A pre-read book of 70+ tools with what each does, pricing snapshots and a first task to try.' },
      { title: 'The Build Book', text: 'The participant workbook for the day: exercises, the master-prompt builder and the agent blueprint.' },
      { title: 'A workbook in every seat', text: 'Every participant worked through the same book on their own business.' },
    ],
    photo: { src: '/training/scale-with-ai-vadodara.jpg', alt: 'Dr. CA Umang Ratani at Scale With AI Vadodara, Hyatt Place', caption: 'Scale With AI, Hyatt Place Vadodara, 22 August 2026.', width: 1066, height: 1600 },
    offers: { low: 4999, high: 9999, url: '/scale-with-ai/vadodara-august-2026' },
    faqs: [
      { q: 'When and where was Scale With AI held in Vadodara?', a: 'On Saturday, 22 August 2026, at Hyatt Place Vadodara, from 9:30 am to 6:30 pm.' },
      { q: 'What did the passes cost?', a: 'Passes were ₹4,999, ₹7,999 and ₹9,999, before GST.' },
      next,
    ],
  },
  {
    slug: 'ahmedabad-october-2026',
    city: 'Ahmedabad',
    name: 'Scale With AI, 5th edition: 1-Day AI Workshop, Ahmedabad',
    dateISO: '2026-10-31',
    dateText: '31 October 2026',
    venue: 'Hyatt Ahmedabad',
    hours: { start: '09:30', end: '17:30' },
    lead: `The fifth Scale With AI edition returned to Ahmedabad on Saturday, 31 October 2026, at Hyatt Ahmedabad. Led by ${leader}, it went deeper than the first four: less theory and more building, with AI agents and AI employees, workflow automation, vibe coding and a 90-day AI execution blueprint for each business.`,
    covered: [
      { title: 'AI agents and AI employees', text: 'What an agent is, and building one that handles a real job in the business.' },
      { title: 'Automating real workflows', text: 'Connecting tasks and systems so routine work happens without reminders.' },
      { title: 'AI across the business', text: 'Use cases in sales, marketing, customer service, operations, HR and management reporting.' },
      { title: 'Vibe coding', text: 'Building practical tools by describing them, with no coding background.' },
      { title: 'Prompting', text: 'The foundation: getting reliable output from ChatGPT, Claude and Gemini.' },
      { title: 'The 90-day AI execution blueprint', text: 'A written plan each participant completed for their own business.' },
    ],
    materials: [
      { title: 'The participant workbook', text: 'A problem-led workbook with real cases, practice boxes and the 90-day plan.' },
      { title: 'The AI Solutions Map', text: 'For Elite members: how AI solves common problems in each department, with an automation, an agent or a full system.' },
      { title: 'Templates, recordings and support', text: 'Templates with the VIP pass; recordings and 30 days of post-event support with the Elite pass.' },
    ],
    photo: { src: '/training/scale-with-ai-ahmedabad-hall.jpg', alt: 'A packed hall at the fifth Scale With AI edition, Hyatt Ahmedabad', caption: 'Scale With AI, 5th edition, Hyatt Ahmedabad, 31 October 2026.', width: 1800, height: 1200 },
    offers: { low: 999, high: 3499, url: 'https://event.bizgenix.ai/' },
    faqs: [
      { q: 'When and where was the fifth Scale With AI edition?', a: 'On Saturday, 31 October 2026, at Hyatt Ahmedabad, from 9:30 am to 5:30 pm.' },
      { q: 'What did the passes cost?', a: 'Early Bird ₹999, VIP ₹2,499 and Elite ₹3,499, before GST.' },
      next,
    ],
  },
];

export const editionBySlug = (slug: string) => editions.find(e => e.slug === slug);
