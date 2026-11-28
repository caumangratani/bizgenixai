import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

// Owned by Claude (see seo-audit-nov-2026/COORDINATION.md). Facts from event.bizgenix.ai, course.bizgenix.ai and the
// canonical numbers sheet, checked 22 Nov 2026: editions Ahmedabad (100+), Surat (200+), Mumbai (300+), Vadodara
// (22 Aug 2026, Hyatt Place), Ahmedabad 5th edition (31 Oct 2026, Hyatt); 600+ in the first three cities (approved figure); Surat 28 Feb 2026 and Mumbai 2 May 2026 from the workshop booklets;
// Cohort 1 June–September 2026, 35 members; recorded programme ₹15,000 + GST, 12 months' access.

const title = 'Scale With AI by Dr. CA Umang Ratani | AI Workshops & AI Course for Business';
const description = 'Scale With AI is the AI education programme of Bizgenix AI, led by Dr. CA Umang Ratani: one-day AI workshops held in Ahmedabad, Surat, Mumbai and Vadodara, a 12-module recorded AI course and corporate AI training.';

export const metadata: Metadata = pageMeta({ title, description, path: '/scale-with-ai' });

const organizer = { '@id': `${SITE_URL}/#organization` };
const performer = { '@id': `${SITE_URL}/#founder` };

const content: ServiceContent = {
  path: '/scale-with-ai',
  eyebrow: 'Scale With AI',
  serviceType: 'AI education: workshops, AI course and corporate AI training',
  contactHref: '/contact?intent=learning#contact-form',
  secondaryCta: { label: 'Event page: event.bizgenix.ai', href: 'https://event.bizgenix.ai/' },
  h1: 'Scale With AI: practical AI education for business owners, professionals and teams.',
  lead: 'Scale With AI is the education programme of Bizgenix AI, led by Dr. CA Umang Ratani. It started as a one-day AI workshop in Ahmedabad and has filled halls in Surat, Mumbai and Vadodara. Participants do not just hear about AI: they prompt, build agents and ship working tools during the session, using their own business.',
  primaryCta: 'Ask about the next batch',
  photo: {
    src: '/training/scale-with-ai-ahmedabad-hall.jpg',
    alt: 'A packed hall at the fifth Scale With AI edition at Hyatt Ahmedabad, facing the screen during Dr. CA Umang Ratani’s session',
    caption: 'Scale With AI, 5th edition, Hyatt Ahmedabad, 31 October 2026.',
    width: 1800,
    height: 1200,
  },
  whatTitle: 'Three ways to learn with Scale With AI.',
  whatIntro: 'The same method in every format: learn one capability, build it on your own work, keep what you built.',
  items: [
    { title: 'One-day AI workshops', text: 'In-person, full-day events: prompting, vibe coding, AI agents and AI employees, and a 90-day AI execution plan for your business. Upcoming dates are on event.bizgenix.ai.' },
    { title: 'The 12-module recorded programme', text: 'The complete Scale With AI Cohort 1 classroom (June to September 2026, 35 members), recorded as members built live, in simple Hinglish. ₹15,000 + GST with 12 months of access at course.bizgenix.ai.' },
    { title: 'Corporate AI training', text: 'The method adapted for one organisation: leadership sessions and role-based workshops for each department, online, at your office or hybrid.' },
    { title: 'What the course covers', text: 'Prompting and context engineering, Claude Projects and Cowork, AI for marketing and WhatsApp follow-up, Claude Code and vibe coding, AI agents, and private local AI models.' },
    { title: 'What members built', text: 'A CA practice task manager, a dealer-ordering portal, Excel-to-KPI dashboards, a visitor management system with QR check-in and a WhatsApp broker-order tracker, among others.' },
    { title: 'The member portal', text: 'Every module comes with the session recording, notes, ready-to-copy prompts, a quiz, the transcript and a workbook, on the Bizgenix Academy portal.' },
  ],
  extra: {
    title: 'Five editions so far.',
    intro: 'More than 600 business owners, founders and professionals attended the first three editions alone.',
    items: [
      { title: 'Ahmedabad: the first edition', text: 'Where Scale With AI began, with more than 100 participants.' },
      { title: 'Surat, 28 February 2026', text: 'The second city, with more than 200 participants.' },
      { title: 'Mumbai, 2 May 2026', text: 'More than 300 participants. Separately, Dr. CA Umang Ratani addressed more than 800 professionals at CMAI in Mumbai on 3 June 2026.' },
      { title: 'Vadodara, 22 August 2026', text: 'A one-day AI accelerator at Hyatt Place Vadodara, run to a full house.' },
      { title: 'Ahmedabad, 5th edition, 31 October 2026', text: 'A full day at Hyatt Ahmedabad focused on implementation: AI agents and AI employees, workflow automation, vibe coding and a 90-day AI execution blueprint.' },
      { title: 'Next edition', text: 'The next city and date are announced on event.bizgenix.ai. Companies can also book the programme for their own teams.' },
    ],
  },
  proofTitle: 'Go deeper.',
  proofIntro: 'Event pages, the recorded programme, and guides written from the classroom.',
  proof: [
    { label: 'Surat, 28 February 2026', href: '/scale-with-ai/surat-february-2026' },
    { label: 'Mumbai, 2 May 2026', href: '/scale-with-ai/mumbai-may-2026' },
    { label: 'Vadodara, 22 August 2026', href: '/scale-with-ai/vadodara-august-2026' },
    { label: 'Ahmedabad, 5th edition, 31 October 2026', href: '/scale-with-ai/ahmedabad-october-2026' },
    { label: 'Scale With AI event page (event.bizgenix.ai)', href: 'https://event.bizgenix.ai/' },
    { label: 'Recorded programme (course.bizgenix.ai)', href: 'https://course.bizgenix.ai/' },
    { label: 'Corporate AI training', href: '/corporate-ai-training' },
    { label: 'One-day AI workshop: what you should walk out with', href: '/guides/one-day-ai-workshop-for-business-owners' },
    { label: 'Free Scale With AI guides: AI Dictionary, prompt library, Claude guides', href: '/resources' },
  ],
  processTitle: 'How every Scale With AI session works.',
  steps: [
    { title: 'Learn one capability', text: 'A short demonstration on a real business case: a prompt system, a Claude Project, an agent or an app.' },
    { title: 'Build it on your own work', text: 'Participants build the same thing on their own laptop with their own business context, with the team helping at the tables.' },
    { title: 'Keep what you built', text: 'Prompts, skills, agents and apps stay with you, with the notes and workbook to rebuild them later.' },
    { title: 'Plan what comes next', text: 'Each event ends with a written plan for the next 90 days: what to automate, what to build and what to learn next.' },
  ],
  faqTitle: 'Questions people ask about Scale With AI',
  faqs: [
    { q: 'What is Scale With AI?', a: 'Scale With AI is the AI education and implementation programme of Bizgenix AI, led by Dr. CA Umang Ratani. It runs as one-day in-person AI workshops in Indian cities, a 12-module recorded AI course, and corporate AI training for companies.' },
    { q: 'Who is Dr. CA Umang Ratani?', a: 'He is the Founder and CEO of Bizgenix AI, a chartered accountant and TEDx speaker who has advised more than 1,000 businesses over 13+ years. He has trained more than 2,000 business owners on AI, and more than 20,000 professionals across his career.' },
    { q: 'Where have Scale With AI events been held?', a: 'Ahmedabad, Surat, Mumbai and Vadodara, with a fifth edition at Hyatt Ahmedabad on 31 October 2026. The next city and date are published on event.bizgenix.ai.' },
    { q: 'Is there an online or recorded version?', a: 'Yes. The full Cohort 1 classroom is available as a 12-module recorded programme at course.bizgenix.ai for ₹15,000 + 18% GST (₹17,700 in total), with 12 months of access, notes, prompts, quizzes, transcripts and workbooks.' },
    { q: 'Do I need to know coding?', a: 'No. Scale With AI was taught to business owners, chartered accountants, managers and students with no coding assumed. You need a laptop and the willingness to build alongside the session.' },
    { q: 'Can a company book Scale With AI for its team?', a: 'Yes. Corporate AI training uses the same build-along method with examples from your own departments. See the corporate AI training page or send an enquiry.' },
  ],
  related: [
    { label: 'Watch Umang teach: video library', href: '/videos' },
    { label: 'Corporate AI training', href: '/corporate-ai-training' },
    { label: 'All courses', href: '/courses' },
    { label: 'Choosing an AI course in India', href: '/guides/how-to-choose-an-ai-course-india' },
    { label: 'How to plan corporate AI training', href: '/guides/corporate-ai-training-plan' },
    { label: 'About Bizgenix AI', href: '/about' },
  ],
  extraJsonLd: [
    {
      '@type': 'EventSeries',
      '@id': `${SITE_URL}/scale-with-ai#series`,
      name: 'Scale With AI',
      description: 'One-day, hands-on AI workshops for business owners and professionals, led by Dr. CA Umang Ratani of Bizgenix AI.',
      url: `${SITE_URL}/scale-with-ai`,
      organizer,
      performer,
      subEvent: [
        {
          '@type': 'Event',
          name: 'Scale With AI: 1-Day AI Accelerator, Vadodara',
          description: 'A one-day, hands-on AI workshop for business owners and professionals led by Dr. CA Umang Ratani: prompting, AI agents, vibe coding and a 90-day AI plan, built on participants’ own businesses.',
          image: [`${SITE_URL}/training/scale-with-ai-vadodara.jpg`],
          offers: { '@type': 'AggregateOffer', lowPrice: 4999, highPrice: 9999, offerCount: 3, priceCurrency: 'INR', url: `${SITE_URL}/scale-with-ai` },
          startDate: '2026-08-22T09:30:00+05:30',
          endDate: '2026-08-22T18:30:00+05:30',
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: { '@type': 'Place', name: 'Hyatt Place Vadodara', address: { '@type': 'PostalAddress', addressLocality: 'Vadodara', addressRegion: 'Gujarat', addressCountry: 'IN' } },
          organizer,
          performer,
        },
        {
          '@type': 'Event',
          name: 'Scale With AI, 5th edition: 1-Day AI Workshop, Ahmedabad',
          description: 'The fifth Scale With AI edition: a full-day, hands-on AI implementation workshop at Hyatt Ahmedabad on AI agents and AI employees, workflow automation, vibe coding and a 90-day AI execution blueprint.',
          image: [`${SITE_URL}/training/scale-with-ai-ahmedabad-hall.jpg`],
          offers: { '@type': 'AggregateOffer', lowPrice: 999, highPrice: 3499, offerCount: 3, priceCurrency: 'INR', url: 'https://event.bizgenix.ai/' },
          startDate: '2026-10-31T09:30:00+05:30',
          endDate: '2026-10-31T17:30:00+05:30',
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: { '@type': 'Place', name: 'Hyatt Ahmedabad', address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' } },
          url: 'https://event.bizgenix.ai/',
          organizer,
          performer,
        },
      ],
    },
    {
      '@type': 'Course',
      name: 'Scale With AI: The Complete Recorded AI Program',
      description: 'Twelve recorded modules from the Scale With AI Cohort 1 classroom: prompting and context engineering, Claude Projects and Cowork, AI marketing and WhatsApp follow-up, Claude Code and vibe coding, AI agents and local AI. Taught in simple Hinglish.',
      url: 'https://course.bizgenix.ai/',
      provider: organizer,
      instructor: performer,
      inLanguage: ['hi', 'en'],
      offers: { '@type': 'Offer', category: 'Paid', price: 17700, priceCurrency: 'INR', description: '₹15,000 + 18% GST, 12 months of access', url: 'https://course.bizgenix.ai/' },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', instructor: performer },
    },
  ],
};

export default function ScaleWithAIPage() {
  return <ServicePage content={content} />;
}
