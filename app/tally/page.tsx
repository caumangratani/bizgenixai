import type { Metadata } from 'next';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { pageMeta, SITE_URL } from '../seo';
import styles from '../blog/page.module.css';
import { guides } from '../guides/content';

const title = 'Tally, Finance and AI Guides for Owners and CAs | Bizgenix AI';
const description = 'Everything an owner or CA needs on Tally and AI: MIS reports, weekly dashboards, 13-week cash forecasts, receivables, connecting Tally to AI and MCP, and the Chief Value Officer.';
export const metadata: Metadata = pageMeta({ title, description, path: '/tally' });

const groups: { heading: string; intro: string; slugs: string[] }[] = [
  { heading: 'Start here', intro: 'The weekly habit and the monthly pack every owner on Tally should have.', slugs: ['tally-weekly-owner-review', 'mis-report-in-tally', 'chief-value-officer'] },
  { heading: 'Cash and working capital', intro: 'See shortfalls weeks ahead and get paid sooner.', slugs: ['cash-flow-forecast-from-tally', 'tally-receivables-dashboard-checklist'] },
  { heading: 'AI, connectors and MCP', intro: 'How Tally data reaches AI safely, and what AI should and should not do in accounting.', slugs: ['connect-tally-to-ai-mcp', 'ai-in-accounting-for-tally-businesses', 'ai-training-for-ca-accounting-firms'] },
  { heading: 'Finance leadership', intro: 'From virtual CFO to Chief Value Officer: who reads the books and decides.', slugs: ['virtual-cfo', 'chief-value-officer'] },
];

export default function TallyHubPage() {
  const bySlug = new Map(guides.map(guide => [guide.slug, guide]));
  const listed = [...new Set(groups.flatMap(group => group.slugs))].filter(slug => bySlug.has(slug));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: 'Tally, finance and AI guides', url: `${SITE_URL}/tally`, description, about: ['Tally', 'TallyPrime', 'MIS reporting', 'Cash flow forecasting', 'AI in accounting', 'Model Context Protocol', 'Chief Value Officer'], hasPart: listed.map(slug => ({ '@type': 'Article', headline: bySlug.get(slug)!.h1, url: `${SITE_URL}/guides/${slug}` })), publisher: { '@id': `${SITE_URL}/#organization` } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Tally, finance and AI', item: `${SITE_URL}/tally` }] },
    ],
  };
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">Tally, finance and AI</span></nav>
        <div className={styles.previewArticle}>
          <p className={styles.eyebrow}>TALLY · FINANCE · AI</p>
          <h1>Tally, finance and AI: the owner’s library</h1>
          <p className={styles.byline}>Practical guides by the Bizgenix AI team for owners, accounts heads and CAs whose books are in Tally.</p>
          <p style={{ fontSize: 17, lineHeight: 1.8, maxWidth: 760 }}>Your Tally already knows where cash is stuck, which costs are creeping up and which customers have gone quiet. These guides show how to read it every week, how to forecast cash from it, how to connect it to AI safely, and how the finance seat is changing from counting value to moving it.</p>
        </div>
      </div>
      {groups.map(group => {
        const items = group.slugs.map(slug => bySlug.get(slug)).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));
        if (!items.length) return null;
        return <section key={group.heading} className={`${styles.container} ${styles.section}`} style={{ paddingBlock: 40 }} aria-label={group.heading}>
          <div className={styles.sectionHeading}><div><h2>{group.heading}</h2></div><p>{group.intro}</p></div>
          <div className={styles.articleGrid}>{items.map(guide => <article className={styles.articleCard} key={guide.slug}>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}><span>{guide.tags[0]}</span><span>{guide.minutes} min read</span></div>
              <h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3>
              <p>{guide.answer}</p>
              <Link className={styles.textLink} href={`/guides/${guide.slug}`}>Read guide ↗</Link>
            </div>
          </article>)}</div>
        </section>;
      })}
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="gi-title">
        <div className={styles.previewArticle} style={{ border: '1px solid #5AAA6C', borderRadius: 15, padding: 34 }}>
          <p className={styles.eyebrow}>GROWTH INTELLIGENCE</p>
          <h2 id="gi-title" style={{ fontSize: 30, fontWeight: 500, margin: '0 0 12px' }}>Your AI Chief Value Officer, for businesses on Tally</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8 }}>Growth Intelligence reads your Tally through a read-only connector, checks the data before it advises, recomputes fourteen measures across cash, margin, stock, growth and risk, and brings you three prepared decisions a week. Follow-ups wait for your approval, and a result counts only when a later Tally sync shows it.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/contact?intent=product&product=growth-intelligence#contact-form">Book a 30-minute walkthrough <span aria-hidden="true">→</span></Link><Link className={styles.secondary} href="/products/growth-intelligence">See Growth Intelligence</Link></div>
        </div>
        <div className={styles.contextLinks} style={{ marginTop: 40 }}><Link href="/guides">All guides ↗</Link><Link href="/custom-solutions">Custom AI solutions ↗</Link><Link href="/courses">Corporate AI training ↗</Link></div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
