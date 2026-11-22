import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

// Pricing (owned by Claude; see seo-audit-nov-2026/COORDINATION.md). ONLY ruled prices from Team-Brochure-Kit
// 03-Facts-Numbers-and-Rules (ruled 19–20 Nov 2026). Not ruled, never publish: Biz Chat monthly/six-month,
// half-day and workshop-plus-review training fees, Growth Intelligence and ScaleOS prices. All amounts before 18% GST.

const title = 'Bizgenix AI Pricing | AI CRM, WhatsApp, Voice AI & Corporate AI Training Prices';
const description = 'Bizgenix AI prices: AI CRM from ₹1,300 a user a month, Biz Chat (WhatsApp) ₹50,000 a year, AI Voice Agent ₹1,20,000 a year, corporate AI training ₹1,40,000 a day, all + GST. Custom AI solutions are quoted after scope.';

export const metadata: Metadata = pageMeta({ title, description, path: '/pricing' });

const offer = (name: string, price: number, unit: string, description: string) => ({
  '@type': 'Offer',
  name,
  description,
  priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'INR', unitText: unit, valueAddedTaxIncluded: false },
  seller: { '@id': `${SITE_URL}/#organization` },
});

const content: ServiceContent = {
  path: '/pricing',
  eyebrow: 'Pricing',
  schemaType: 'none',
  serviceType: 'Pricing',
  secondaryCta: { label: 'Download the CRM brochure', href: '/resources/bizgenix-ai-crm-brochure' },
  h1: 'Pricing for our products, training and custom AI work.',
  lead: 'Products have published prices. Custom AI solutions are quoted after we have written the scope with you, because every workflow is different. All amounts are before 18% GST.',
  primaryCta: 'Ask for a quote',
  whatTitle: 'Products and training.',
  whatIntro: 'Prices ruled in November 2026, before 18% GST.',
  items: [
    { title: 'Bizgenix AI CRM: CRM only', text: '₹1,700 a user a month, ₹1,450 on a six-month plan, ₹1,300 on a yearly plan. Lead capture, pipeline, follow-ups and team assignment.' },
    { title: 'Bizgenix AI CRM: complete system', text: '₹2,500 a user a month, ₹2,150 on a six-month plan, ₹1,900 on a yearly plan. The full sales operating system.' },
    { title: 'Biz Chat (WhatsApp)', text: '₹50,000 a year. Meta charges WhatsApp conversation fees separately, including service replies beyond 1,000 a month.' },
    { title: 'AI Voice Agent', text: '₹1,20,000 a year for the agent. Call minutes and number rental are at actuals. Hindi, Gujarati and English; other languages on request.' },
    { title: 'Corporate AI training', text: '₹1,40,000 for a customised full-day on-site workshop for 20 to 150 people (not per seat). Travel and stay outside Ahmedabad at actuals.' },
    { title: 'Scale With AI recorded programme', text: '₹15,000 a person for all 12 recorded modules with 12 months of access, at course.bizgenix.ai.' },
  ],
  extra: {
    title: 'Priced on request.',
    intro: 'These depend on your scope, data or number of companies.',
    items: [
      { title: 'Custom AI solutions and agents', text: 'Quoted per client after a written scope. Typical terms: 50% in advance, the rest on agreed milestones. Hosting, AI and API usage run on your accounts.' },
      { title: 'Clients outside India', text: 'Small, clearly scoped projects start from USD 500 (or EUR 500), quoted in your currency after scoping.' },
      { title: 'Growth Intelligence', text: 'The Chief Value Officer for Tally users. Book a demo on your own books for current plans.' },
      { title: 'ScaleOS', text: 'Business operating system, offered as a subscription or as a system you own. Priced after a walkthrough.' },
      { title: 'Virtual CEO consulting', text: 'Monthly engagement for owner-run companies, priced after a diagnostic conversation.' },
      { title: 'Combined offers', text: 'CRM with Biz Chat and the AI Voice Agent can be combined; add-on prices are in the CRM brochure.' },
    ],
  },
  processTitle: 'How we price custom work.',
  steps: [
    { title: 'Scope in writing', text: 'One workflow, the systems it touches, acceptance criteria and who checks the output.' },
    { title: 'Fixed quote', text: 'A written quote and timeline before any work starts.' },
    { title: 'Prototype first', text: 'A working prototype on your data in 7–10 working days, so you see it before the full build.' },
    { title: 'Milestone payments', text: '50% to start and the balance on agreed milestones.' },
  ],
  faqTitle: 'Pricing questions',
  faqs: [
    { q: 'Are prices inclusive of GST?', a: 'No. All prices are before 18% GST, which is added on the invoice. Exports of services to clients outside India are zero-rated.' },
    { q: 'Are there hidden costs?', a: 'Usage-based costs are passed through at actuals and stated upfront: WhatsApp conversation fees charged by Meta, call minutes and number rental for voice, and AI or API usage for custom builds.' },
    { q: 'Is corporate AI training priced per participant?', a: 'No. The full-day workshop is priced for the group of 20 to 150 people, with 50% to confirm the date and the balance on the day.' },
    { q: 'Why is Growth Intelligence not priced here?', a: 'Plans depend on the number of companies and the depth of analysis you need. Book a demo on your own books and we will share the current plans.' },
  ],
  related: [
    { label: 'Bizgenix AI CRM', href: '/products/ai-crm' },
    { label: 'Biz Chat', href: '/products/bizchat' },
    { label: 'Voice AI', href: '/products/voice-ai' },
    { label: 'Corporate AI training', href: '/corporate-ai-training' },
    { label: 'FAQ', href: '/faq' },
  ],
  extraJsonLd: [
    {
      '@type': 'OfferCatalog',
      name: 'Bizgenix AI price list',
      url: `${SITE_URL}/pricing`,
      itemListElement: [
        offer('Bizgenix AI CRM (CRM only), monthly', 1700, 'per user per month', 'Before 18% GST. ₹1,450 on six months, ₹1,300 yearly.'),
        offer('Bizgenix AI CRM (complete system), monthly', 2500, 'per user per month', 'Before 18% GST. ₹2,150 on six months, ₹1,900 yearly.'),
        offer('Biz Chat (WhatsApp)', 50000, 'per year', 'Before 18% GST. Meta conversation fees extra.'),
        offer('AI Voice Agent', 120000, 'per year', 'Before 18% GST. Call minutes and number rental at actuals.'),
        offer('Corporate AI training, full day', 140000, 'per workshop', 'Before 18% GST. 20 to 150 participants; travel outside Ahmedabad at actuals.'),
        offer('Scale With AI recorded programme', 15000, 'per person', 'Before 18% GST. 12 months of access.'),
      ],
    },
  ],
};

export default function PricingPage() {
  return <ServicePage content={content} />;
}
