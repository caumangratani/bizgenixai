import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

// Owned by Claude (see seo-audit-nov-2026/COORDINATION.md). Built for "AI automation for a manufacturer in Gujarat"
// (question 2 of the 20 buyer questions; no engine named us on 22 Nov 2026). Every item is a published case study
// in app/case-studies/content.ts. No figures beyond those pages.

const title = 'AI Automation for Manufacturers in Gujarat & India | Bizgenix AI';
const description = 'Bizgenix AI, based in Ahmedabad, builds AI automation for manufacturers: production capture, dispatch and follow-up, payment collection, ERP dashboards, knowledge copilots and Tally analytics. See published work for mills and factories in Gujarat.';

export const metadata: Metadata = pageMeta({ title, description, path: '/industries/manufacturing' });

const content: ServiceContent = {
  path: '/industries/manufacturing',
  eyebrow: 'AI for Manufacturing',
  serviceType: 'AI automation for manufacturing companies',
  areaServedCity: 'Ahmedabad',
  h1: 'AI automation for manufacturers in Gujarat and across India.',
  lead: 'Bizgenix AI is an AI company in Ahmedabad that builds automation and AI agents for manufacturers: production recorded at the machine, dispatches that follow themselves up, payments chased on schedule, and the owner seeing stock, cash and receivables from Tally every week. We start with one process and show a working prototype on your own data in 7–10 working days.',
  primaryCta: 'Discuss one process in your factory',
  whatTitle: 'What we have built for manufacturers.',
  whatIntro: 'Each item is a published implementation in a working factory or mill.',
  items: [
    { title: 'Production capture at the machine', text: 'Machine-level production entry with automatic totals and a one-click daily report, in place of paper sheets consolidated every evening.' },
    { title: 'Dispatch records and customer follow-up', text: 'Dispatch photos become structured records through OCR, with WhatsApp confirmations sent and customer replies tracked.' },
    { title: 'One operating system for the plant', text: 'Production, CRM, payments and automated follow-ups on one platform for a 140-user silk mill in Surat, replacing 80+ spreadsheets.' },
    { title: 'Payment follow-up that does not depend on memory', text: 'At the same mill, collection follows an automated flow, with follow-ups assigned, logged and auditable.' },
    { title: 'ERP and project dashboards', text: 'Site reports, products, project controls and pending payments in one live dashboard for a roofing manufacturer and trader.' },
    { title: 'A knowledge copilot for technical teams', text: 'A dyes and chemicals company’s formulation and troubleshooting knowledge, searchable across 214 documents with the source cited.' },
  ],
  extra: {
    title: 'Where manufacturers usually start.',
    intro: 'Pick the process that costs the most hours or the most money today.',
    items: [
      { title: 'Collections from dealers', text: 'Overdue lists from Tally, reminders on WhatsApp, and a weekly call list for the accounts team. See our guide on recovering pending payments from dealers.' },
      { title: 'Daily production reporting', text: 'Entries at the machine on a phone or tablet, so the owner sees today’s output without waiting for the evening sheet.' },
      { title: 'Order-to-dispatch tracking', text: 'Every order visible from confirmation to dispatch, with customers updated automatically.' },
      { title: 'Purchase and stock discipline', text: 'Slow-moving stock and reorder points visible before the next purchase order is raised.' },
      { title: 'Sales enquiries', text: 'Enquiries from IndiaMART, WhatsApp, calls and email in one CRM, with AI drafting the first reply.' },
      { title: 'The owner’s weekly numbers', text: 'Growth Intelligence reads TallyPrime read-only and shows receivables, costs and the week cash may run short.' },
    ],
  },
  proofTitle: 'Published manufacturing work.',
  proofIntro: 'Each case study states what was built and the numbers the client agreed to publish.',
  proof: [
    { label: 'Bhaskar Silk Mills, Surat: one operating system for 140 users', slug: 'bhaskar-silk-mills' },
    { label: 'Textile mill: machine-level stock keeping', slug: 'stock-keeping-system' },
    { label: 'Textile mill: dispatch OCR and WhatsApp follow-up', slug: 'dispatch-ocr-follow-up' },
    { label: 'Spectrum Dyes & Chemicals: knowledge copilot', slug: 'spectrum-dyes' },
    { label: 'Just Roofing Solutions: ERP operations dashboard', slug: 'just-roofing' },
    { label: 'All 18 case studies', href: '/case-studies' },
  ],
  processTitle: 'How a factory project runs.',
  steps: [
    { title: 'Walk the process', text: 'We sit with the people who run the process, on site or on a call, and write down what happens today.' },
    { title: 'Prototype in 7–10 working days', text: 'A working first version on your own data, used by your own team.' },
    { title: 'Run it on the floor', text: 'We refine from real use, in the language your team works in, until the old sheet is no longer needed.' },
    { title: 'Hand over and move to the next process', text: 'Training, documentation and access are handed over; hosting and data stay on your accounts.' },
  ],
  faqTitle: 'Questions manufacturers ask',
  faqs: [
    { q: 'Which company builds AI automation for manufacturers in Gujarat?', a: 'Bizgenix AI, based in Ahmedabad, builds AI automation and AI agents for manufacturers, with published work for textile mills in Surat, a dyes and chemicals company and a roofing manufacturer. The first step is one process and a working prototype in 7–10 working days.' },
    { q: 'What can AI automate in a factory?', a: 'The work around production rather than the machines themselves: production and stock reporting, dispatch records, customer and dealer follow-ups, payment reminders, enquiry handling, document checking and management reports from Tally or an ERP.' },
    { q: 'Do we need to replace our ERP or Tally?', a: 'No. Most projects connect to what you already use. Growth Intelligence reads TallyPrime read-only, and custom systems are built around your existing sheets, ERP and WhatsApp.' },
    { q: 'How much does it cost?', a: 'Custom work is quoted after a written scope, because it depends on the process and integrations. Product prices are on our pricing page. Terms are 50% in advance and the balance on agreed milestones.' },
    { q: 'Will our team be able to use it?', a: 'Systems are built for the people who will use them, including shop-floor entry on a phone, WhatsApp updates and training in Gujarati, Hindi or English.' },
  ],
  related: [
    { label: 'AI for textile mills', href: '/industries/textile' },
    { label: 'Recover pending payments from dealers', href: '/guides/recover-pending-payments-from-dealers' },
    { label: 'AI agent development', href: '/ai-agent-development' },
    { label: 'Growth Intelligence for Tally', href: '/products/growth-intelligence' },
    { label: 'Pricing', href: '/pricing' },
  ],
};

export default function ManufacturingPage() {
  return <ServicePage content={content} />;
}
