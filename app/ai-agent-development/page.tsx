import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

// AI agent development service page (owned by Claude; see seo-audit-nov-2026/COORDINATION.md). Built for the query
// "AI agent development company India", which Search Console shows we appear for (position ~40) with no matching page.
// Proof only from published case studies in app/case-studies/content.ts.

const title = 'AI Agent Development Company in India | Custom AI Agents | Bizgenix AI';
const description = 'Bizgenix AI builds custom AI agents for Indian businesses: WhatsApp and voice agents, sales and enquiry agents, document-checking agents and knowledge copilots, with a working prototype on your data in 7–10 working days.';

export const metadata: Metadata = pageMeta({ title, description, path: '/ai-agent-development' });

const content: ServiceContent = {
  path: '/ai-agent-development',
  eyebrow: 'AI agent development',
  serviceType: 'AI agent development',
  areaServedCountries: ['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Singapore', 'Australia', 'Canada'],
  h1: 'AI agent development for businesses that want the routine work done, not just discussed.',
  lead: 'Bizgenix AI is an agentic AI company in Ahmedabad that designs and builds custom AI agents: software that reads, decides the next step within limits you set, uses your tools and asks a person when it is unsure. We build agents inside the systems your team already uses, and show a working prototype on your own data in 7–10 working days.',
  primaryCta: 'Describe the work you want an agent to do',
  whatTitle: 'AI agents we build.',
  whatIntro: 'Each one handles a defined job, with a person approving anything that matters.',
  items: [
    { title: 'Enquiry and sales agents', text: 'Read every new enquiry, check whether the customer bought before, draft the right reply, book the call and flag high-value leads to the owner.' },
    { title: 'WhatsApp agents', text: 'Answer common questions, send reminders and payment links, collect documents and hand the conversation to a person when needed.' },
    { title: 'Voice agents', text: 'Answer inbound calls and call back leads in Hindi, Gujarati or English, then write what was agreed into your CRM.' },
    { title: 'Document-checking agents', text: 'Extract data from bills, invoices and dispatch photos and check them against your rules before anyone approves them.' },
    { title: 'Knowledge copilots', text: 'Answer staff questions from your own documents, with the source cited, so expertise does not live in one person’s head.' },
    { title: 'Review and reporting agents', text: 'Score sales calls against your script, summarise priority emails and prepare the weekly numbers before the meeting.' },
  ],
  extra: {
    title: 'How we build an agent you can trust.',
    intro: 'Every agent has the same five parts, and earns its freedom step by step.',
    items: [
      { title: 'Trigger', text: 'What starts it: a new enquiry, an email, a call, a document arriving, or a time of day.' },
      { title: 'Brain', text: 'The AI model and the written instructions that decide the next step within the limits you set.' },
      { title: 'Tools', text: 'The systems it may use: CRM, WhatsApp, email, sheets, ERP or Tally data, each with the least access it needs.' },
      { title: 'Memory', text: 'What it remembers about customers, past actions and your rules, stored in your own systems.' },
      { title: 'Rules and approvals', text: 'What it may do alone and what needs a person. Agents start by drafting for approval and act on their own only where results have earned it.' },
      { title: 'Logs and handover', text: 'Every action is logged so you can see what the agent did and why, and your team is trained to run and adjust it.' },
    ],
  },
  proofTitle: 'Agents and automations in production.',
  proofIntro: 'Published case studies, each stating what was built.',
  proof: [
    { label: 'Una Homes: AI bill verification with a 36-rule engine', slug: 'una-homes' },
    { label: 'Spectrum Dyes: knowledge copilot across 214 documents', slug: 'spectrum-dyes' },
    { label: 'AI sales call analysis and scoring', slug: 'sales-call-analysis' },
    { label: 'Dispatch OCR and WhatsApp follow-up', slug: 'dispatch-ocr-follow-up' },
    { label: 'AI support email automation', slug: 'arihant-support-automation' },
    { label: 'All 18 case studies', href: '/case-studies' },
  ],
  processTitle: 'From the first call to an agent in production.',
  steps: [
    { title: 'Pick one job', text: 'We choose one repetitive job, agree what “done” looks like, the data it needs and who approves the output.' },
    { title: 'Prototype on your data', text: 'A working agent on your real data and tools, typically within 7–10 working days.' },
    { title: 'Supervised running', text: 'The agent drafts and a person approves, while we measure accuracy and adjust the instructions and rules.' },
    { title: 'Hand over and scale', text: 'Once results hold, the agent takes on more of the job, your team is trained, and we move to the next agent.' },
  ],
  faqTitle: 'Questions about AI agent development',
  faqs: [
    { q: 'What is the difference between an automation, an AI agent and a system?', a: 'An automation follows a fixed rule every time. An AI agent reads, understands, decides the next step within limits you set and asks a person when unsure. A system is the full software for a department, with automations and agents running inside it. Most businesses need a mix.' },
    { q: 'How long does it take to build an AI agent?', a: 'A working prototype usually takes 7–10 working days. A production agent typically takes two to six weeks, depending on the systems it connects to and how much supervised running it needs.' },
    { q: 'How much does AI agent development cost?', a: 'It is quoted after a written scope, because it depends on the job, the integrations and the volume. For clients outside India, small scoped projects start from USD 500. AI model and API usage runs on your own accounts at actual cost.' },
    { q: 'Can an AI agent make mistakes?', a: 'Yes, which is why agents start by drafting for a person to approve, every action is logged, and the agent only acts alone where its results have been checked over time.' },
    { q: 'Which tools and models do you use?', a: 'We choose per job: the major AI models from OpenAI, Anthropic and Google, open models where data must stay private, and your existing CRM, WhatsApp Business, email, sheets, ERP or Tally data.' },
    { q: 'Do you build AI agents for clients outside India?', a: 'Yes. We work remotely with businesses in the US, UK, UAE, Singapore, Australia and Canada, planning calls around your time zone.' },
  ],
  related: [
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'AI agents for small business (guide)', href: '/guides/ai-agents-for-small-business' },
    { label: 'Voice AI', href: '/products/voice-ai' },
    { label: 'Biz Chat on WhatsApp', href: '/products/bizchat' },
    { label: 'Clients outside India', href: '/global' },
  ],
};

export default function AIAgentDevelopmentPage() {
  return <ServicePage content={content} />;
}
