import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../seo';

const title = 'Growth Intelligence | AI Chief Value Officer for Tally Businesses';
const description = "Growth Intelligence reads your Tally like a Chief Value Officer: business analytics on cash, receivables, payables and stock, three prepared decisions a week, and follow-ups you approve.";

export const metadata: Metadata = pageMeta({ title, description, path: '/products/growth-intelligence' });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Growth Intelligence',
  alternateName: 'GI by Bizgenix AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description,
  url: `${SITE_URL}/products/growth-intelligence`,
  sameAs: ['https://gi.bizgenix.ai/', 'https://www.g2.com/products/bizgenix-ai-growth-intelligence/reviews'],
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function GrowthIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
