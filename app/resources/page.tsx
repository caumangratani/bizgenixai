import type { Metadata } from 'next';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { pageMeta, SITE_URL } from '../seo';
import styles from './resources.module.css';
import { resources, type Resource } from './content';

const title = 'Free AI Guides, Prompt Library & Brochures | Bizgenix AI';
const description = 'Free PDFs from Bizgenix AI and Scale With AI: the AI Dictionary for business owners, a 109-prompt AI library, Claude and Claude Cowork guides, and brochures for our custom AI solutions and products.';
export const metadata: Metadata = pageMeta({ title, description, path: '/resources' });

const groups: { kind: Resource['kind']; heading: string }[] = [
  { kind: 'Free AI guide', heading: 'Free AI guides from Scale With AI' },
  { kind: 'Brochure', heading: 'Solution and product brochures' },
  { kind: 'Profile', heading: 'Company and founder profiles' },
];

export default function ResourcesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: 'Bizgenix AI free resources', url: `${SITE_URL}/resources`, description, publisher: { '@id': `${SITE_URL}/#organization` },
        hasPart: resources.map(r => ({ '@type': 'DigitalDocument', name: r.h1, url: `${SITE_URL}/resources/${r.slug}`, encodingFormat: 'application/pdf', author: { '@id': `${SITE_URL}/#organization` } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` }] },
    ],
  };
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/resources" theme="light" />
    <main id="main-content">
      <header className={styles.hero}><div className={styles.container}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Resources</span></nav>
        <p className={styles.eyebrow}>Free resources</p>
        <h1>Free AI guides, prompt libraries and brochures.</h1>
        <p className={styles.lead}>The material we use in Scale With AI classrooms and client work, as free PDFs. Pick one, tell us where to reach you, and the download starts straight away.</p>
      </div></header>
      {groups.map(group => <section className={styles.section} key={group.kind} aria-label={group.heading}><div className={styles.container}>
        <h2 className={styles.groupTitle}>{group.heading}</h2>
        <div className={styles.grid}>{resources.filter(r => r.kind === group.kind).map(r => <article className={styles.card} key={r.slug}>
          <span className={styles.meta}>{r.kind} · {r.pages} pages · PDF</span>
          <h3><Link href={`/resources/${r.slug}`}>{r.h1}</Link></h3>
          <p>{r.summary}</p>
          <Link className={styles.cardLink} href={`/resources/${r.slug}`}>Get the PDF ↓</Link>
        </article>)}</div>
      </div></section>)}
      <ContactSection homeHref="/" />
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
