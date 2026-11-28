import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

// Owned by Claude (see seo-audit-nov-2026/COORDINATION.md). Built 28 Nov 2026 for trainer-intent searches
// ("AI trainer in Ahmedabad", "AI trainer for business owners in Gujarat"), where two outside audits found
// other trainers' pages and none of ours. Facts from the approved facts sheet only. No "best" or "number 1" claims.

const title = 'AI Trainer in Ahmedabad for Business Owners & Teams | Dr. CA Umang Ratani';
const description = 'Dr. CA Umang Ratani, founder of Bizgenix AI, trains business owners and company teams in practical AI in Ahmedabad and across India: one-day workshops, corporate training and a 12-week course, in Hindi, Gujarati and English.';

export const metadata: Metadata = pageMeta({ title, description, path: '/ai-trainer-ahmedabad' });

const content: ServiceContent = {
  path: '/ai-trainer-ahmedabad',
  eyebrow: 'AI Trainer in Ahmedabad',
  serviceType: 'AI training for business owners and company teams',
  areaServedCity: 'Ahmedabad',
  h1: 'An AI trainer in Ahmedabad who teaches business owners on their own work.',
  lead: 'Dr. CA Umang Ratani is a Chartered Accountant and the founder of Bizgenix AI in Ahmedabad. He has trained 2,000+ business owners to use AI, through the Scale With AI workshops in Ahmedabad, Surat, Mumbai and Vadodara and through in-house training for companies and associations. Sessions are hands-on, with laptops open, in Hindi, Gujarati or English.',
  primaryCta: 'Ask about training for your team',
  photo: { src: '/people/umang-ratani-teaching-ahmedabad-2026.jpg', alt: 'Dr. CA Umang Ratani teaching at the Scale With AI workshop in Ahmedabad, 31 October 2026', caption: 'Scale With AI, Hyatt Ahmedabad, 31 October 2026.', width: 1600, height: 1066 },
  whatTitle: 'Three ways to learn with him.',
  whatIntro: 'Pick the format that fits who is learning.',
  items: [
    { title: 'Corporate AI training at your office', text: 'A full day or several sessions for leadership and departments, built on the work your team does every day. A full-day session is ₹1,40,000 plus GST.' },
    { title: 'Scale With AI one-day workshops', text: 'Open workshops for business owners. The fifth edition was held at Hyatt Ahmedabad on 31 October 2026; earlier editions ran in Surat, Mumbai and Vadodara.' },
    { title: 'The 12-week recorded course', text: 'The same teaching in recorded lessons you can follow at your own pace, with twelve months of access.' },
    { title: 'Sessions for associations and chapters', text: 'Talks and workshops for trade bodies and business communities, including sessions for 800+ people at CMAI and 300 at JITO.' },
    { title: 'Training in Gujarati and Hindi', text: 'Most owners and their staff learn faster in their own language. Sessions switch between Gujarati, Hindi and English as the room needs.' },
    { title: 'Free lessons before you decide', text: 'Watch the teaching first. The video library has his lessons on prompting, ChatGPT, Claude and Gemini, each with a written summary.' },
  ],
  extra: {
    title: 'What a session covers.',
    intro: 'The syllabus changes with the audience. These parts stay.',
    items: [
      { title: 'How to brief an AI assistant', text: 'Role, task, context and the output you want, practised on a real task from each participant’s own work.' },
      { title: 'Where AI fits in each department', text: 'Sales follow-ups, marketing content, operations reporting, finance and collections, and HR documents.' },
      { title: 'Data safety', text: 'What not to paste into a public AI tool, which settings to change, and how to keep client data out.' },
      { title: 'From prompts to automation', text: 'What an AI agent does, when a simple automation is enough, and which process to automate first.' },
      { title: 'A plan to take back', text: 'Each participant leaves with their own prompts and a 90-day plan for one problem in their business.' },
      { title: 'Follow-through', text: 'For companies, a review session can be added after the training, to see what the team is using and what is stuck.' },
    ],
  },
  proofTitle: 'See the teaching before you book.',
  proofIntro: 'Recorded lessons, a workshop page with photos, and the corporate training details.',
  proof: [
    { label: 'Video library: lessons on prompting, ChatGPT, Claude and Gemini', href: '/videos' },
    { label: 'Scale With AI, Ahmedabad, 31 October 2026', href: '/scale-with-ai/ahmedabad-october-2026' },
    { label: 'Corporate AI training: formats and fee', href: '/corporate-ai-training' },
    { label: 'About Dr. CA Umang Ratani', href: '/about/umang-ratani' },
    { label: 'Free AI playbooks and prompts', href: '/playbooks' },
  ],
  processTitle: 'How a company training is arranged.',
  steps: [
    { title: 'A short call', text: 'Who is attending, what they do, which AI tools the company allows, and what you want to be different afterwards.' },
    { title: 'Agenda on your own work', text: 'We prepare exercises from your team’s real tasks, using safe sample data.' },
    { title: 'The training day', text: 'Hands-on from the first hour. Everyone works on a laptop or phone.' },
    { title: 'Review', text: 'If agreed, a follow-up to check what is being used, and what needs a system rather than a prompt.' },
  ],
  faqTitle: 'Questions people ask about AI training in Ahmedabad',
  faqs: [
    { q: 'Who trains business owners in AI in Ahmedabad?', a: 'Dr. CA Umang Ratani, founder of Bizgenix AI on Science City Road, Ahmedabad, trains business owners and company teams in practical AI. He runs the Scale With AI workshops and in-house corporate training, and has trained 2,000+ business owners on AI.' },
    { q: 'Is the training available in Gujarati?', a: 'Yes. Sessions are run in Gujarati, Hindi and English, and usually move between them as the audience needs.' },
    { q: 'What does corporate AI training cost?', a: 'A full-day in-house session is ₹1,40,000 plus 18% GST. Travel and stay outside Ahmedabad are charged at actuals. Half the fee confirms the date and the balance is due on the day.' },
    { q: 'Do participants need a technical background?', a: 'No. The training is for owners, managers and staff who use a phone and a laptop. Nobody needs to know coding.' },
    { q: 'Do you train chartered accountants and CA firms?', a: 'Yes. Umang is a Chartered Accountant, and there is a separate guide on AI training for CA and accounting firms on this site.' },
    { q: 'Can I watch a session before booking?', a: 'Yes. The video library on this site has recorded lessons from live sessions, each with a written summary and chapters.' },
  ],
  related: [
    { label: 'Corporate AI training', href: '/corporate-ai-training' },
    { label: 'Scale With AI workshops and course', href: '/scale-with-ai' },
    { label: 'AI training for CA and accounting firms', href: '/guides/ai-training-for-ca-accounting-firms' },
    { label: 'AI training in Gujarati for small businesses', href: '/guides/ai-training-in-gujarati-for-small-businesses' },
    { label: 'AI consultant in Ahmedabad', href: '/ai-consultant-ahmedabad' },
  ],
};

export default function AiTrainerAhmedabadPage() {
  return <ServicePage content={content} />;
}
