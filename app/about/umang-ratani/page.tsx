import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

// Founder page (owned by Claude; see seo-audit-nov-2026/COORDINATION.md). Ties the person to the company for search
// engines and AI answers. Facts only from Team-Brochure-Kit 02-Founder and 03-Facts-Numbers-and-Rules (20 Nov 2026).
// Rules: no family details; no Thermochem figure (open point); "ICAI AICA Level 1 Faculty" wording only; honorary PhD.

const title = 'Dr. CA Umang Ratani | Founder & CEO, Bizgenix AI | AI Business Architect';
const description = 'Dr. CA Umang Ratani is the founder and CEO of Bizgenix AI, an AI consulting and AI solutions company in Ahmedabad. Chartered accountant, Virtual CEO to 350+ companies, TEDx speaker and lead trainer of Scale With AI.';

export const metadata: Metadata = pageMeta({ title, description, path: '/about/umang-ratani' });

const content: ServiceContent = {
  path: '/about/umang-ratani',
  eyebrow: 'Founder',
  parent: { name: 'About', href: '/about' },
  schemaType: 'none',
  serviceType: 'Founder profile',
  contactHref: '/contact?intent=custom#contact-form',
  secondaryCta: { label: 'Book him for a training or talk', href: '/corporate-ai-training' },
  h1: 'Dr. CA Umang Ratani, founder and CEO of Bizgenix AI.',
  lead: 'A chartered accountant and business consultant who builds AI inside Indian businesses. Umang spent 13+ years inside owner-run companies as a consultant and Virtual CEO before founding Bizgenix AI Solutions Pvt. Ltd. in Ahmedabad in 2025, to turn what he found in those companies into working AI systems.',
  primaryCta: 'Talk to Umang’s team',
  photo: {
    src: '/people/dr-ca-umang-ratani.jpg',
    alt: 'Dr. CA Umang Ratani, founder and CEO of Bizgenix AI',
    caption: 'Dr. CA Umang Ratani, Ahmedabad, 2026.',
    width: 932,
    height: 1400,
  },
  whatTitle: 'What he does today.',
  whatIntro: 'One company, three engines, and the consulting seat that feeds all of them.',
  items: [
    { title: 'Founder & CEO, Bizgenix AI Solutions', text: 'An agentic AI company in Ahmedabad that builds custom AI systems and runs its own products: Growth Intelligence, Bizgenix AI CRM, Biz Chat, AI Voice Agent and ScaleOS. 110+ AI solutions and automations built for 60+ organisations.' },
    { title: 'Creator of Scale With AI', text: 'Full-day AI workshops and a 12-module programme where owners and professionals build with AI on their own business. Held in Ahmedabad, Surat, Mumbai and Vadodara; 2,000+ business owners trained on AI.' },
    { title: 'Growth Intelligence', text: 'The company’s flagship product: a Chief Value Officer for businesses on Tally that reads the books and tells the owner what needs attention this week.' },
    { title: 'Virtual CEO', text: 'The model he introduced: a CEO’s thinking for a company that cannot yet hire one. Used in 350+ companies since 2019, with 1,000+ businesses guided.' },
    { title: 'Corporate trainer and speaker', text: 'TEDx speaker, ICAI AICA Level 1 Faculty, and trainer to 20,000+ professionals across his career, including 800+ at CMAI in Mumbai (June 2026) and the AI Summit in Gurugram (September 2026).' },
    { title: 'Author and mentor', text: 'Author of “Choose Success Today”, founder of Biz Bridge Consulting Group, startup mentor, and creator of BCAP, a programme that trains other consultants in his method.' },
  ],
  extra: {
    title: 'The journey.',
    intro: 'No business family and no capital. Each stage paid for the next one.',
    items: [
      { title: 'Origins', text: 'Born in Harij, a small town in Gujarat, and schooled in Gujarati medium.' },
      { title: '2008–2013: qualifications', text: 'Moved to Ahmedabad and qualified as a Chartered Accountant (now FCA), Company Secretary, MBA, M.Com, LLB and NET, paying for it by teaching across the city.' },
      { title: '2013–2018: inside consulting', text: 'Audit showed where businesses bled but gave no way to fix it, so he joined consulting firms to learn sales, systems, management and team building from the inside.' },
      { title: '2019–2024: the Virtual CEO years', text: 'Founded Biz Bridge Consulting Group and sat inside client companies as their fractional CEO: 350+ companies, a client portfolio of ₹1,000+ Cr. Awarded an honorary PhD in 2022.' },
      { title: '2023–2025: clients ask for automation', text: 'Clients asked him to automate what he had fixed by hand. He built WhatsApp agents, voice agents and dashboards, and in 2025 founded Bizgenix AI Solutions Pvt. Ltd.' },
      { title: '2026: four cities and a product', text: 'Scale With AI filled rooms in Ahmedabad, Surat, Mumbai and Vadodara; CMAI felicitated him in Mumbai; Growth Intelligence went live.' },
    ],
  },
  proofTitle: 'Read more.',
  proofIntro: 'His work, in documents and on the record.',
  proof: [
    { label: 'Download his speaker and consultant profile (PDF)', href: '/resources/dr-ca-umang-ratani-profile' },
    { label: 'Scale With AI events', href: '/scale-with-ai' },
    { label: 'Bizgenix AI case studies', href: '/case-studies' },
    { label: 'umangratani.com', href: 'https://www.umangratani.com/' },
  ],
  processTitle: 'How he works with a business.',
  steps: [
    { title: 'Find the leak', text: 'As consultant or Virtual CEO, he finds where money and time leak: sales that depend on the owner, work that runs on memory, cash that slips.' },
    { title: 'Build the fix', text: 'The Bizgenix AI team turns the fix into software, with a working prototype on real data in 7–10 working days.' },
    { title: 'Train the people', text: 'Owners and teams are trained to run the system, so it is used after the handover.' },
    { title: 'Review the numbers', text: 'Monthly reviews keep the system and the owner honest about what moved.' },
  ],
  faqTitle: 'Questions about Umang Ratani',
  faqs: [
    { q: 'Who is Umang Ratani?', a: 'Dr. CA Umang Ratani is an Ahmedabad-based chartered accountant, business consultant and AI Business Architect. He is the founder and CEO of Bizgenix AI, an AI consulting and AI solutions company, and the creator of the Scale With AI training programme.' },
    { q: 'Is Umang Ratani the founder of Bizgenix AI?', a: 'Yes. He founded Bizgenix AI Solutions Pvt. Ltd. in Ahmedabad in 2025 and leads it as CEO. His co-founders are Hitesh Mehra, a finance leader and investor, and CA Archit Shah, Managing Partner of M A A K & Associates.' },
    { q: 'What are his qualifications?', a: 'FCA (Fellow Chartered Accountant), CS, MBA, M.Com, LLB and NET. He was awarded an honorary PhD in 2022, which is why he uses the title Dr.' },
    { q: 'What is the Virtual CEO model?', a: 'A part-time CEO role for owner-run companies that cannot yet hire one: twice-monthly sessions, monthly reviews and hands-on execution. He has used it in 350+ companies since 2019.' },
    { q: 'Does he speak at events or train corporate teams?', a: 'Yes. He leads Scale With AI workshops and corporate AI training in English, Hindi or Gujarati, and has spoken at TEDx, CMAI and the AI Summit in Gurugram. Enquiries go through the corporate AI training page.' },
    { q: 'Where is he based?', a: 'Ahmedabad, Gujarat, at the Bizgenix AI office: G-13, Silver Radiance-2, Science City Road, Sola, Ahmedabad 380060.' },
  ],
  related: [
    { label: 'About Bizgenix AI', href: '/about' },
    { label: 'Corporate AI training', href: '/corporate-ai-training' },
    { label: 'Scale With AI', href: '/scale-with-ai' },
    { label: 'Growth Intelligence', href: '/products/growth-intelligence' },
    { label: 'FAQ', href: '/faq' },
  ],
  extraJsonLd: [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/about/umang-ratani#page`,
      url: `${SITE_URL}/about/umang-ratani`,
      name: title,
      mainEntity: { '@id': `${SITE_URL}/#founder` },
      about: { '@id': `${SITE_URL}/#founder` },
    },
  ],
};

export default function UmangRataniPage() {
  return <ServicePage content={content} />;
}
