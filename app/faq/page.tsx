import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

// Company FAQ (owned by Claude; see seo-audit-nov-2026/COORDINATION.md). Answers use only approved facts
// (Team-Brochure-Kit 03-Facts-Numbers-and-Rules, 20 Nov 2026) and ruled prices. GI and ScaleOS prices are not published.

const title = 'Bizgenix AI FAQ | AI Consulting, Products, Pricing & Training Questions';
const description = 'Answers to common questions about Bizgenix AI: who we are, what we build, how long AI projects take, pricing, data and ownership, Growth Intelligence, corporate AI training and working with clients outside India.';

export const metadata: Metadata = pageMeta({ title, description, path: '/faq' });

const content: ServiceContent = {
  path: '/faq',
  eyebrow: 'FAQ',
  schemaType: 'none',
  serviceType: 'Frequently asked questions',
  secondaryCta: { label: 'See pricing', href: '/pricing' },
  h1: 'Questions about Bizgenix AI, answered plainly.',
  lead: 'Bizgenix AI Solutions Pvt. Ltd. is an AI consulting and AI solutions company in Ahmedabad, founded in 2025 by Dr. CA Umang Ratani. We build custom AI systems and agents, run our own products, train teams on AI and advise owners through the Virtual CEO model. These are the questions owners ask us most.',
  primaryCta: 'Ask us something else',
  whatTitle: 'Four ways we work with a business.',
  whatIntro: 'Most clients start with one and add others as results come in.',
  items: [
    { title: 'Custom AI solutions and agents', text: 'Software and AI agents built around how one company works: CRM, ERP, task systems, document checking, WhatsApp and voice agents.' },
    { title: 'Our own products', text: 'Growth Intelligence for Tally users, Bizgenix AI CRM, Biz Chat on WhatsApp, AI Voice Agent and ScaleOS.' },
    { title: 'AI training', text: 'Scale With AI workshops and a recorded programme for owners and professionals, and corporate AI training for teams.' },
    { title: 'Business consulting', text: 'The Virtual CEO model: a CEO’s thinking and monthly reviews for companies that cannot yet hire one.' },
  ],
  processTitle: 'How a first project usually runs.',
  steps: [
    { title: 'Study the business', text: 'A call or visit to understand one workflow, the data it uses and who checks the output.' },
    { title: 'Working prototype', text: 'A working first version on your real data, typically in 7–10 working days.' },
    { title: 'Build with your team', text: 'We refine from real use and finish the system with your team’s feedback.' },
    { title: 'Adoption before sign-off', text: 'We train the people who will run it and hand over documentation and access.' },
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { q: 'What is Bizgenix AI?', a: 'Bizgenix AI Solutions Pvt. Ltd. is an agentic AI company in Ahmedabad, India. It builds the system a business runs on and puts AI agents inside it to do routine work, runs five products of its own, trains teams on AI, and advises owners as Virtual CEO. It has built 110+ AI solutions and automations for 60+ organisations across 20+ industries.' },
    { q: 'Who founded Bizgenix AI, and when?', a: 'Dr. CA Umang Ratani founded the company in Ahmedabad in 2025 and is its CEO. His co-founders are Hitesh Mehra, a finance leader and investor with 28+ years of experience, and CA Archit Shah, Managing Partner of M A A K & Associates. Umang’s consulting work goes back 13+ years, and he began building automations for clients in 2023.' },
    { q: 'How long does an AI project or AI transformation take?', a: 'A working prototype on real data typically takes 7–10 working days. A simple automation usually takes days to two weeks, an AI agent two to six weeks, and a full department system six to twelve weeks or more. Company-wide change is done one workflow at a time, so the first results come within weeks, not after a long programme.' },
    { q: 'How much does a custom AI solution cost?', a: 'Custom work is quoted per client after the scope is written, because it depends on the workflow, integrations and data. For clients outside India, small, clearly scoped projects start from USD 500. Hosting, AI and API usage run on your own accounts and are billed at actuals.' },
    { q: 'What do your products cost?', a: 'Bizgenix AI CRM starts at ₹1,700 a user a month (₹1,300 on a yearly plan), Biz Chat (WhatsApp) is ₹50,000 a year, and the AI Voice Agent is ₹1,20,000 a year with call minutes at actuals, all + 18% GST. See the pricing page for details. Growth Intelligence and ScaleOS are priced on request.' },
    { q: 'Who owns the system and the data?', a: 'You do. Systems run on your own accounts and hosting where possible, and access, data handling and handover are agreed in writing before work starts.' },
    { q: 'What is Growth Intelligence?', a: 'Growth Intelligence is the company’s flagship product: an AI Chief Value Officer for businesses that keep their books in TallyPrime. It reads the accounts read-only and shows who is paying late, what has stopped selling, which costs are running ahead and the week cash may run short, then prepares the decisions for the owner.' },
    { q: 'Can I connect Tally to ChatGPT or Claude?', a: 'Yes, through Growth Intelligence’s read-only MCP connection, which lets an AI assistant answer questions from your latest synced Tally data, scoped to one company and revocable at any time. See our guide on connecting Tally to AI.' },
    { q: 'Do you offer corporate AI training?', a: 'Yes. A customised full-day on-site workshop for 20 to 150 people is ₹1,40,000 + GST for the group, delivered in English, Hindi or Gujarati. Online and hybrid formats are quoted after a scoping call.' },
    { q: 'Do you have an AI course for business owners?', a: 'Yes. Scale With AI runs one-day in-person workshops (Ahmedabad, Surat, Mumbai and Vadodara so far) and a 12-module recorded programme at course.bizgenix.ai for ₹15,000 + GST with 12 months of access.' },
    { q: 'Do you work with clients outside India?', a: 'Yes. We work remotely with businesses in the US, UK, UAE, Singapore, Australia and Canada on AI automation, custom AI solutions, AI agents and online training, with calls planned around your time zone.' },
    { q: 'Which industries do you work with?', a: 'Twenty-plus, including textiles and apparel, manufacturing, real estate and construction, trading and distribution, retail and F&B franchises, healthcare, education and professional firms. Our case studies show what we built in each.' },
    { q: 'What is the payment structure?', a: 'For custom builds, 50% in advance and the balance on agreed milestones; hosting and API costs are on the client. For training, 50% confirms the date and the balance is due on the day.' },
    { q: 'How do I contact Bizgenix AI?', a: 'Email info@bizgenix.ai, call or WhatsApp +91 87806 71906, or visit G-13, Silver Radiance-2, Science City Road, Sola, Ahmedabad 380060, Monday to Friday 10:30 to 18:00.' },
  ],
  related: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Founder: Dr. CA Umang Ratani', href: '/about/umang-ratani' },
    { label: 'AI agent development', href: '/ai-agent-development' },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Free resources', href: '/resources' },
  ],
};

export default function FAQPage() {
  return <ServicePage content={content} />;
}
