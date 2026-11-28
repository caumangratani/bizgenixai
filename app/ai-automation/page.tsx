import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

const title = 'AI Automation Agency in India | AI Workflows | Bizgenix AI';
const description = 'AI automation agency in India, based in Ahmedabad. Bizgenix AI has built 110+ AI solutions across 60+ organisations: working prototypes in 7–10 working days on Tally, WhatsApp and email.';

export const metadata: Metadata = pageMeta({ title, description, path: '/ai-automation' });

const content: ServiceContent = {
  path: '/ai-automation',
  eyebrow: 'AI Automation Agency',
  serviceType: 'AI automation agency and workflow automation services',
  h1: 'An AI automation agency in India that takes repeat work off your team.',
  lead: 'Most businesses do not need a new system. They need the work between their existing systems to stop depending on someone remembering. Bizgenix AI has built 110+ AI solutions and automations across 60+ organisations and 20+ industries—sitting on top of Tally, Excel, email and WhatsApp, with a working prototype on your real data in 7–10 working days.',
  primaryCta: 'Tell us the task you want automated',
  whatTitle: 'What we automate.',
  whatIntro: 'Workflow automation, WhatsApp automation and AI agents for the jobs that repeat every day and slip when people are busy.',
  items: [
    { title: 'Payment and cheque reminders', text: 'A central tracker sends WhatsApp reminders before the due date, so collections stop depending on who remembered to call.' },
    { title: 'Task ownership and follow-up', text: 'Every task has a named owner and a deadline. The team and the owner get a WhatsApp summary instead of chasing updates.' },
    { title: 'Document reading and checking', text: 'AI reads bills, dispatch photos and bank requests, turns them into structured records and flags what does not match your rules.' },
    { title: 'Email triage and reports', text: 'Priority enquiries and quotations are pulled out of the inbox into a daily and weekly report you can search.' },
    { title: 'Sales call analysis', text: 'Each call is transcribed, scored against your script and added to a performance history for every agent.' },
    { title: 'Support request handling', text: 'Requests are logged, acknowledged and followed through to a resolution email without anyone copying details by hand.' },
  ],
  proofTitle: 'Automations already running.',
  proofIntro: 'These are published implementations for Indian businesses. Each link opens the full case study.',
  proof: [
    { label: 'Automated cheque reminder system', slug: 'cheque-reminder-system' },
    { label: 'Dispatch OCR and customer follow-up', slug: 'dispatch-ocr-follow-up' },
    { label: 'Property valuation workflow automation', slug: 'aavkar-valuation-workflow' },
    { label: 'AI-powered support email automation', slug: 'arihant-support-automation' },
    { label: 'AI sales call analysis system', slug: 'sales-call-analysis' },
    { label: 'Task visibility with WhatsApp automation', slug: 'kishor-pawar-task-visibility' },
    { label: 'Daily and weekly email intelligence', slug: 'email-intelligence' },
    { label: 'Task management for an interior design firm', slug: 'kbp-interior' },
  ],
  processTitle: 'How an automation project runs.',
  steps: [
    { title: 'Pick one repeat task', text: 'We find the single task that costs your team time every week and has a clear rule for when it is done.' },
    { title: 'Prototype on your real data', text: 'You see a working version on your own records in 7–10 working days before you commit to the full build.' },
    { title: 'Run it beside your team, then hand over', text: 'The automation runs alongside the manual process until it is trusted. Then your team owns it.' },
  ],
  extra: {
    title: 'How our AI automation agency works in India.',
    intro: 'Why growing businesses choose a dedicated implementation team over disconnected scripts.',
    items: [
      { title: 'Built on Indian business tools', text: 'Connects directly to TallyPrime, WhatsApp Business Platform, IndiaMART, Justdial, Gmail, Outlook and Google Sheets without replacing your core software.' },
      { title: 'Human approval before external action', text: 'Payment reminders, quotations and customer messages pause for a named person’s review until the workflow earns trust.' },
      { title: 'Code and accounts stay yours', text: 'Systems run on your cloud hosting and API accounts with written documentation and handover, not locked inside a black box.' },
      { title: 'India and global delivery', text: 'Based in Ahmedabad with a team of 24 serving Indian MSMEs and remote clients in the US, UK, UAE and Singapore from USD 500.' },
    ],
  },
  faqs: [
    { q: 'What is AI automation?', a: 'AI automation uses software and AI models to carry out repeat business tasks, such as reminders, data entry from documents, follow-ups and reports, so they happen on time without a person starting each one.' },
    { q: 'What does an AI automation agency in India deliver that a DIY tool cannot?', a: 'An agency maps the exceptions in your real process, connects Indian tools such as Tally and official WhatsApp APIs reliably, adds approval gates and logs, and supports the system when formats or volumes change.' },
    { q: 'How fast can Bizgenix AI build a first working automation?', a: 'A working prototype on your own records typically takes 7–10 working days once the workflow, inputs and definition of done are agreed.' },
    { q: 'Do we need to change the software we use?', a: 'No. We connect to what you already use, including Tally, Excel, Google Sheets, email and WhatsApp, and build on top of it.' },
    { q: 'Which tasks should we automate first?', a: 'Start with a boring task that happens every day, follows a clear rule and has an owner. Reminders, follow-ups and document checks are the usual first choices.' },
    { q: 'Can you automate WhatsApp for our business?', a: 'Yes. Reminders, confirmations, task summaries and customer follow-ups on WhatsApp are part of most of our automation projects.' },
    { q: 'How do you price an automation project?', a: 'Scope decides the cost. The first conversation is to find the one task worth automating; we quote after that, and the prototype comes before the full build. International single-workflow builds start from USD 500.' },
    { q: 'Who maintains the automation after it goes live?', a: 'Either we do, under a support plan, or your team after a handover. Both are agreed before the build starts.' },
  ],
  related: [
    { label: 'AI agent development', href: '/ai-agent-development' },
    { label: 'AI consulting', href: '/ai-consulting' },
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'Clients outside India', href: '/global' },
    { label: 'Cost to build an AI automation or agent', href: '/guides/cost-to-build-ai-automation-or-agent' },
    { label: 'AI training for teams', href: '/corporate-ai-training' },
    { label: 'Read: Hire or automate? The 5-V test', href: '/blog/hire-or-automate-5v-test' },
  ],
};

export default function AiAutomationPage() {
  return <ServicePage content={content} />;
}
