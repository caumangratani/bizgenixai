import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

// Owned by Claude (see seo-audit-nov-2026/COORDINATION.md). Facts only from: bizgenix.ai/courses (corporate topics,
// formats, sessions gallery), course.bizgenix.ai and event.bizgenix.ai (22 Nov 2026), and the canonical numbers sheet
// and Team-Brochure-Kit 03-Facts-Numbers-and-Rules (20 Nov 2026): 2,000+ business owners trained on AI, 20,000+ professionals
// across his career, CMAI 800+ (June 2026), JITO 300, Kalamandir 150; full day ₹1,40,000 + GST (ruled). Half-day and
// workshop-plus-review fees are NOT ruled: do not publish them.
// No training prices are published. No client results are claimed.

const title = 'Corporate AI Training in India | AI Workshops for Teams | Bizgenix AI';
const description = 'Hands-on corporate AI training for leadership teams and departments, led by Dr. CA Umang Ratani. Role-based AI workshops on your own workflows: online, at your office or hybrid, in India and abroad.';

export const metadata: Metadata = pageMeta({ title, description, path: '/corporate-ai-training' });

const content: ServiceContent = {
  path: '/corporate-ai-training',
  eyebrow: 'Corporate AI training',
  serviceType: 'Corporate AI training and AI workshops for teams',
  contactHref: '/contact?intent=training#contact-form',
  secondaryCta: { label: 'See the Scale With AI events', href: '/scale-with-ai' },
  h1: 'Corporate AI training that ends with your team using AI on its own work.',
  lead: 'Bizgenix AI runs hands-on AI training for leadership teams and departments, led by Dr. CA Umang Ratani, a chartered accountant who builds AI systems inside Indian businesses. Sessions are built around your workflows, not generic demos, and run online, at your office or hybrid, in India and for teams abroad.',
  primaryCta: 'Plan training for your team',
  photo: {
    src: '/training/corporate-room-orange-wall.jpg',
    alt: 'Dr. CA Umang Ratani leading a corporate AI training session in a company training room',
    caption: 'A corporate AI training session led by Dr. CA Umang Ratani.',
    width: 1600,
    height: 1066,
  },
  whatTitle: 'What a Bizgenix AI training programme covers.',
  whatIntro: 'Each programme is put together for one organisation, from the parts below.',
  items: [
    { title: 'AI awareness for leadership', text: 'What AI can and cannot do in your business today, where it pays back first, and the decisions leaders need to make on tools, data and policy.' },
    { title: 'Role-based workshops', text: 'Separate hands-on sessions for sales, marketing, HR, finance, operations and support, each using that team’s own tasks and documents.' },
    { title: 'Prompt libraries by department', text: 'Tested prompts and reusable instructions your people keep using after the session, organised by department and task.' },
    { title: 'Automation opportunities', text: 'Each team leaves with a short list of repetitive work that can be automated, ranked by time saved and effort to build.' },
    { title: 'Responsible AI, privacy and governance', text: 'What staff may put into which AI tool, how to handle client and employee data, and when a person must approve the output.' },
    { title: 'A 30-day plan for every participant', text: 'Each person leaves with ready-to-use prompts for their own role and a 30-day plan with three quick wins; each department head commits to theirs.' },
  ],
  extra: {
    title: 'Rooms we have trained in.',
    intro: 'From company training rooms to industry forums. Dr. CA Umang Ratani has trained 2,000+ business owners on AI and 20,000+ professionals across his career.',
    items: [
      { title: 'CMAI, Mumbai', text: 'An AI leadership session for more than 800 professionals from the Clothing Manufacturers Association of India, 3 June 2026.' },
      { title: 'AI Summit, Gurugram', text: 'A business-leadership session on AI at the AI Summit with RAI and CMAI in September 2026, covered by Dainik Jagran.' },
      { title: 'Corporate AI enablement, GIFT City', text: 'A team workshop on putting AI to work inside the company’s own processes.' },
      { title: 'Applied AI at work, Lilac Insights', text: 'Team training on using AI in day-to-day work across functions.' },
      { title: 'AI for chartered accountants', text: 'Professional training for CA firms in Gujarat, including Jamnagar and Surat, on using AI in practice work.' },
      { title: 'JITO and corporate days', text: 'An AI session for 300 business leaders at JITO, and a corporate AI day for 150 participants at Kalamandir Jewellers, Surat.' },
    ],
  },
  proofTitle: 'See the training in practice.',
  proofIntro: 'Our public programme and what members built in it.',
  proof: [
    { label: 'Scale With AI events and programme', href: '/scale-with-ai' },
    { label: 'All courses and learning paths', href: '/courses' },
    { label: 'Scale With AI recorded programme (course.bizgenix.ai)', href: 'https://course.bizgenix.ai/' },
    { label: 'Free AI prompt library (109 prompts)', href: '/resources/ai-prompt-library-for-business' },
    { label: 'Implementation case studies', href: '/case-studies' },
  ],
  processTitle: 'How a corporate programme is planned.',
  steps: [
    { title: 'Scoping call', text: 'We learn which teams will attend, what they work on, the AI tools your IT policy allows, and what you want people doing differently afterwards.' },
    { title: 'Programme design', text: 'You receive the agenda, formats (online, at your office or hybrid), session lengths and the examples we will use from your own work, with a quote.' },
    { title: 'Hands-on sessions', text: 'Participants work on laptops on their own tasks during the session. Every session ends with something they built and will keep using.' },
    { title: 'Roadmap and follow-up', text: 'We hand over the prompt libraries and a ranked list of automation opportunities, and agree what support, if any, you want next.' },
  ],
  faqTitle: 'Questions HR and L&D teams ask',
  faqs: [
    { q: 'Who leads the training?', a: 'Dr. CA Umang Ratani, Founder and CEO of Bizgenix AI. He is a chartered accountant and TEDx speaker with more than 13 years of advising Indian businesses, and his team builds AI systems for clients every week, so the training comes from implementation, not theory.' },
    { q: 'Do participants need technical knowledge?', a: 'No. Programmes are designed for non-technical staff and leaders. Teams that want to build can go further into AI agents, automation and building apps with AI coding tools.' },
    { q: 'Can the training be delivered online or outside India?', a: 'Yes. Sessions can be online, at your office or hybrid, in English, Hindi or Gujarati. Teams outside India are trained online across time zones, or on site with travel and stay at actuals.' },
    { q: 'Which AI tools do you train on?', a: 'The tools your organisation allows. Typically ChatGPT, Claude and Gemini, plus automation and AI-agent tools where relevant. Where company policy restricts cloud tools, we cover private and local AI options.' },
    { q: 'How much does corporate AI training cost?', a: 'A customised full-day on-site workshop is ₹1,40,000 + GST for the group, not per seat, for 20 to 150 people. 50% confirms the date and the balance is due on the day; travel and stay outside Ahmedabad are at actuals. Other formats are quoted after a scoping call.' },
    { q: 'What happens after the training?', a: 'Each team keeps its prompt library and a ranked list of automation opportunities. If you want those built, Bizgenix AI can scope and build them as a separate project.' },
  ],
  related: [
    { label: 'Scale With AI events and programme', href: '/scale-with-ai' },
    { label: 'How to plan corporate AI training', href: '/guides/corporate-ai-training-plan' },
    { label: 'One-day AI workshop for business owners', href: '/guides/one-day-ai-workshop-for-business-owners' },
    { label: 'Choosing an AI course in India', href: '/guides/how-to-choose-an-ai-course-india' },
    { label: 'Corporate AI training buyer checklist', href: '/guides/evaluate-corporate-ai-training' },
    { label: 'AI training for CA firms', href: '/guides/ai-training-for-ca-accounting-firms' },
    { label: 'AI consulting', href: '/ai-consulting' },
    { label: 'Courses', href: '/courses' },
  ],
  extraJsonLd: [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Corporate AI training by Bizgenix AI',
      description,
      url: `${SITE_URL}/corporate-ai-training`,
      provider: { '@id': `${SITE_URL}/#organization` },
      instructor: { '@id': `${SITE_URL}/#founder` },
      educationalProgramMode: ['online', 'onsite', 'blended'],
      inLanguage: ['en', 'hi', 'gu'],
      audience: { '@type': 'BusinessAudience', name: 'Leadership teams, managers and departments' },
    },
  ],
};

export default function CorporateAITrainingPage() {
  return <ServicePage content={content} />;
}
