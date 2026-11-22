import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

const title = 'Voice AI for Business | AI Voice Bot for Sales and Support Calls';
const description = 'Bizgenix Voice AI answers and makes customer calls in Hindi, Gujarati and English, qualifies leads, books visits and updates your CRM. Schedule a live demo.';

export const metadata: Metadata = pageMeta({ title, description, path: '/products/voice-ai' });

const content: ServiceContent = {
  path: '/products/voice-ai',
  eyebrow: 'Voice AI',
  serviceType: 'Bizgenix Voice AI',
  schemaType: 'SoftwareApplication',
  parent: {
    name: 'Products',
    href: '/products',
  },
  h1: 'Voice AI that talks to your customers and records what happens next.',
  lead: 'Voice AI helps a business handle large volumes of inbound and outbound calls without depending entirely on a manual calling team. It speaks with customers, understands the response, captures the information you need and triggers the next business action.',
  primaryCta: 'Schedule a live demo',
  secondaryCta: {
    label: 'Open Voice AI',
    href: 'https://voice.bizgenix.ai/',
  },
  whatTitle: 'What Voice AI does.',
  whatIntro: 'An AI voice bot for the calls that get delayed or skipped when the team is busy: first response, qualification, reminders and follow-up.',
  items: [
    { title: 'Inbound and outbound AI calling', text: 'Answers incoming enquiries and places outbound calls to new leads, existing customers and pending follow-ups.' },
    { title: 'Hindi, Gujarati and English', text: 'The current offering covers Hindi, Gujarati and English. Ask about other languages and validate pronunciation, understanding and hand-off using your own sample conversations.' },
    { title: 'Lead qualification', text: 'Asks the questions your sales team would ask and captures the answers as structured data, not a recording nobody hears.' },
    { title: 'Booking', text: 'Books appointments, demos and site visits during the call.' },
    { title: 'Reminders and follow-up calls', text: 'Follow-up calls and payment reminders go out on schedule, with the outcome of each call logged.' },
    { title: 'Connected to your systems', text: 'Call summaries, outcomes and lead status are written to your CRM, ERP or calendar, with your own scripts, rules and escalation to a person.' },
  ],
  extra: {
    title: 'Where businesses use it.',
    intro: 'Use cases Voice AI is designed for. The script, rules and hand-off to your team are set up for your process.',
    items: [
      { title: 'Real estate', text: 'Lead qualification and site-visit scheduling.' },
      { title: 'Software and ERP sales', text: 'Demo booking from inbound enquiries.' },
      { title: 'Customer support', text: 'Answering routine requests and classifying the rest for the right person.' },
      { title: 'Collections', text: 'Payment and cheque reminder calls.' },
      { title: 'Healthcare', text: 'Appointment confirmations.' },
      { title: 'Education', text: 'Enquiry follow-ups for admissions.' },
    ],
  },
  processTitle: 'From enquiry to a recorded outcome.',
  steps: [
    { title: 'Enquiry received', text: 'A call comes in, or a new lead triggers an outbound call.' },
    { title: 'Conversation and qualification', text: 'The AI speaks with the customer, understands the reply and captures the details that matter.' },
    { title: 'Booking, CRM update and follow-up', text: 'The visit or demo is booked, the record is updated and a follow-up goes out on WhatsApp or email.' },
  ],
  faqs: [
    { q: 'How much does the AI Voice Agent cost?', a: 'The annual software subscription is ₹1,20,000 + GST. AI talk time is charged separately at ₹4.50 per minute + GST under the current running-cost guide; business phone-number rental is additional. Confirm billing increments, included services, integrations and support in your written quote.' },
    { q: 'How do we evaluate a voice AI pilot?', a: 'Use representative calls and check captured details, language understanding, correct next actions and escalation to a person. Include unclear answers and out-of-scope questions. Review failed calls and CRM updates as well as completed calls; call volume alone is not a qualified-lead result.' },
    { q: 'Can the AI make promises outside our script?', a: 'Agree the approved answers, escalation rules and limits before launch. The agent should identify itself as an AI assistant and hand over when a question requires human judgement. Test these boundaries in the pilot rather than assuming a demonstration covers every situation.' },
    { q: 'What is a voice AI agent?', a: 'A voice AI agent is software that holds a spoken conversation with a caller: it understands what the person says, replies in natural speech, captures information and triggers an action such as a booking or a CRM update.' },
    { q: 'Can Voice AI work in Indian languages?', a: 'The current offering covers Hindi, Gujarati and English. Other languages are reviewed on request. Test representative phrases, names and hand-offs in a demo before confirming a language-specific deployment.' },
    { q: 'Does it replace our calling team?', a: 'It takes the repetitive calls: first response, qualification, reminders and confirmations. Your team handles the conversations that need judgement, and calls can be escalated to a person by rule.' },
    { q: 'Does it connect to our CRM?', a: 'Yes. Call summaries, outcomes and lead status can be written to your CRM, ERP, calendar or other business system. Integration depends on the software, available APIs and workflow requirements.' },
    { q: 'How long does implementation take?', a: 'It depends on the scripts, integrations and amount of customisation. A scoped implementation plan is prepared after discovery.' },
    { q: 'Can we hear it before deciding?', a: 'Yes. Schedule a live demo and we will show a conversation for a use case close to yours.' },
  ],
  related: [
    { label: 'Compare CRM, WhatsApp and voice automation costs', href: '/guides/compare-ai-sales-automation-costs' },
    { label: 'All products', href: '/products' },
    { label: 'Bizgenix AI CRM', href: '/products/ai-crm' },
    { label: 'BizChat: WhatsApp automation', href: '/products/bizchat' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'Case study: AI sales call analysis', href: '/case-studies/sales-call-analysis' },
  ],
};

export default function VoiceAiPage() {
  return <ServicePage content={content} />;
}
