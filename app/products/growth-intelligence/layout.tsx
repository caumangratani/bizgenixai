import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../seo';

const title = 'Growth Intelligence | Business Analytics & AI CVO for Tally';
const description = "Growth Intelligence by Bizgenix AI is an AI Chief Value Officer for businesses on Tally: 14 financial measures, cash runway, receivables follow-up and a read-only MCP for Claude and ChatGPT.";

export const metadata: Metadata = pageMeta({ title, description, path: '/products/growth-intelligence' });

const faqs = [
  ['Does Growth Intelligence replace Tally?', 'No. Growth Intelligence by Bizgenix AI is a Tally-connected decision and action layer for business owners. Your accounting records remain the source; confirm the supported connector, company and reporting period before onboarding.'],
  ['What does it mean that Growth Intelligence is an AI Chief Value Officer (CVO)?', 'A Chief Value Officer finds where cash, margin and stock value are stuck or leaking every week and prepares decisions with the rupees attached. Growth Intelligence acts as AI decision support on your books—it is not a human executive and does not replace your CA or auditor.'],
  ['Can I connect Growth Intelligence to ChatGPT or Claude via MCP?', 'Yes. Growth Intelligence offers a read-only MCP connection for Claude and ChatGPT, scoped to the companies you grant, with expiry and revocation. Answers come from the latest synced snapshot and drafts never post to Tally.'],
  ['How do I evaluate the accuracy of the dashboard?', 'Ask to reconcile a selected balance to source records, confirm the last successful data refresh and review partial receipts, disputed items and unavailable data. A fresh screen does not necessarily mean fresh accounting data.'],
  ['Does the demo automatically send reminders or collect payments?', 'Do not assume automatic action from a dashboard demonstration. Confirm the available integrations, human approvals and messaging costs in your scope. Track proposed actions, sent reminders and actual receipts separately.'],
  ['What should I bring to a demo?', 'Tell us your business, current Tally setup and one management question you want to answer. You do not need to upload accounting data through this enquiry form.'],
  ['Will the demo use my business data?', 'We can first explain the workflow with illustrative data. Any access to your own data, its location and the people permitted to use it should be agreed before onboarding.'],
  ['How are integrations and pricing confirmed?', 'The team will confirm the supported setup, data refresh process, scope and applicable commercial terms before you proceed.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Growth Intelligence',
      alternateName: 'GI by Bizgenix AI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description,
      url: `${SITE_URL}/products/growth-intelligence`,
      sameAs: ['https://gi.bizgenix.ai/', 'https://www.g2.com/products/bizgenix-ai-growth-intelligence/reviews'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};

export default function GrowthIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
