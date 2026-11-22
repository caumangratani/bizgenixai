import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../seo';

const title = 'Growth Intelligence | Tally Analytics and AI Decision Support';
const description = "Growth Intelligence by Bizgenix AI connects Tally data with business dashboards and AI decision support. Explore receivables, cash, stock and the CVO approach.";

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
  sameAs: ['https://gi.bizgenix.ai/'],
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function GrowthIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
