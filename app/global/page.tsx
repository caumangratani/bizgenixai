import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

const title = 'AI Development Company in India for US, UK, UAE & Singapore | Bizgenix AI';
const description = 'Bizgenix AI builds custom AI solutions, AI automation and AI agents for businesses in the US, UK, UAE, Singapore, Australia and Canada, from an India-based team. Projects start from USD 500.';

export const metadata: Metadata = pageMeta({ title, description, path: '/global' });

const content: ServiceContent = {
  path: '/global',
  eyebrow: 'Clients outside India',
  serviceType: 'Custom AI development, AI automation and AI consulting',
  areaServedCountries: ['United States', 'United Kingdom', 'United Arab Emirates', 'Singapore', 'Australia', 'Canada', 'India'],
  h1: 'Custom AI solutions and AI automation for businesses in the US, UK, UAE and Singapore, built by an India-based team.',
  lead: 'Bizgenix AI is an AI consulting and AI development company based in Ahmedabad, India, with a team of 24. We build AI automations, AI agents, CRM and WhatsApp workflows, voice agents and business dashboards around how your business already works, and we train your team to use them. Engagements are remote, start with one workflow, and begin from USD 500 depending on scope.',
  primaryCta: 'Tell us about one workflow',
  whatTitle: 'What clients outside India ask us to build.',
  whatIntro: 'The same work we deliver for Indian businesses, scoped and run remotely.',
  items: [
    { title: 'AI automation', text: 'Lead follow-up, email triage, document checking, reminders and reporting connected to the tools you already use.' },
    { title: 'Custom AI solutions and agents', text: 'AI applications and agents built around one process, with a person approving any action that matters.' },
    { title: 'CRM and WhatsApp workflows', text: 'Sales follow-up on WhatsApp and email, with Bizgenix AI CRM and BizChat or with your existing CRM.' },
    { title: 'Voice AI agents', text: 'AI calling for enquiry follow-up and reminders, set up and tested on your own scripts before going live.' },
    { title: 'AI consulting', text: 'A use-case assessment and phased plan: what to automate first, what to buy, what to build, and what it needs.' },
    { title: 'Corporate AI training, online', text: 'Hands-on AI sessions for your team, delivered online across time zones, or on site with travel at actuals.' },
  ],
  extra: {
    title: 'How we work with each region.',
    intro: 'Working hours overlap differently in each region. We plan calls around yours.',
    items: [
      { title: 'United Arab Emirates and the Gulf', text: 'India is 1 hour 30 minutes ahead of the UAE, so almost the whole working day overlaps. WhatsApp-first workflows are common here, and many businesses keep their books in Tally.' },
      { title: 'Singapore and Australia', text: 'Singapore is 2 hours 30 minutes ahead of India and eastern Australia 4 hours 30 minutes or more, so our mornings meet your afternoons.' },
      { title: 'United Kingdom and Europe', text: 'India is 4 hours 30 minutes or 5 hours 30 minutes ahead of the UK depending on the season. UK mornings and our afternoons overlap every working day.' },
      { title: 'United States and Canada', text: 'India is 9 hours 30 minutes to 13 hours 30 minutes ahead. We hold calls in your morning or our evening, and work continues while you are offline.' },
      { title: 'Pricing and payment', text: 'Quoted in USD (or EUR) after scope is agreed; international projects start from USD 500. Typical terms are 50% to start and the rest on agreed milestones. Hosting, APIs and third-party usage are billed to your own accounts.' },
      { title: 'Data and ownership', text: 'Systems run on your accounts and your hosting, so your data stays under your control. We agree data access, who sees what, and handover before work starts.' },
    ],
  },
  proofTitle: 'Published work.',
  proofIntro: 'Implementations we have documented. Each case study states what was built and its status.',
  proof: [
    { label: 'Bhaskar Silk Mills', slug: 'bhaskar-silk-mills' },
    { label: 'Una Homes', slug: 'una-homes' },
    { label: 'Waffle Castle', slug: 'waffle-castle' },
    { label: 'All case studies', href: '/case-studies' },
  ],
  processTitle: 'From first call to a working system.',
  steps: [
    { title: 'One workflow', text: 'On a first call we pick one workflow and agree what “done” looks like, the data it needs and who checks the output.' },
    { title: 'Written scope and quote', text: 'You receive the scope, acceptance criteria, timeline and price in USD or EUR before any work starts.' },
    { title: 'Working prototype', text: 'We build a working first version on your own data and tools, and your team uses it in real work.' },
    { title: 'Refine and hand over', text: 'We adjust from real use, document the system, hand over access and train the people who will run it.' },
  ],
  faqs: [
    { q: 'Do you work with clients outside India?', a: 'Yes. We work remotely with businesses outside India on AI automation, custom AI solutions, AI agents and team training, planning calls around your time zone.' },
    { q: 'What does an AI project with Bizgenix AI cost?', a: 'International projects start from USD 500, or EUR 500, for a small, clearly scoped workflow. Larger systems are quoted after a written scope. Hosting, APIs and AI usage are billed to your own accounts.' },
    { q: 'How do you handle time zones?', a: 'The UAE overlaps almost fully with India, Singapore and the UK for half a day or more, and the US in your morning or our evening. We agree a fixed weekly call time at the start.' },
    { q: 'Who owns the system and the data?', a: 'You do. Systems run on your accounts and hosting, and access, data handling and handover are agreed in writing before work starts.' },
    { q: 'Can you train our team on AI remotely?', a: 'Yes. Corporate AI training can be delivered online across time zones, or on site with travel and stay at actuals.' },
    { q: 'Can Growth Intelligence be used outside India?', a: 'Growth Intelligence reads TallyPrime and is built and tested on Indian Tally data. If your business keeps its books in Tally outside India, ask in a demo what is supported for your setup.' },
  ],
  related: [
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'AI consulting', href: '/ai-consulting' },
    { label: 'Hire an AI development company in India: buyer guide', href: '/guides/hire-ai-development-company-india' },
    { label: 'Cost to build an AI automation or agent', href: '/guides/cost-to-build-ai-automation-or-agent' },
    { label: 'Corporate AI training', href: '/courses' },
  ],
};

export default function GlobalPage() {
  return <ServicePage content={content} />;
}
