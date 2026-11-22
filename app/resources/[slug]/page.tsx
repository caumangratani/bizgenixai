import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from '../../InternalLink';
import Navigation from '../../custom-solutions/Navigation';
import ContactSection from '../../ContactSection';
import { pageMeta, SITE_URL } from '../../seo';
import styles from '../resources.module.css';
import DownloadForm from '../DownloadForm';
import { resources, resourceBySlug } from '../content';

export function generateStaticParams() {
  return resources.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = resourceBySlug((await params).slug);
  if (!r) return {};
  return pageMeta({ title: `${r.title} | Bizgenix AI`, description: r.description, path: `/resources/${r.slug}` });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const r = resourceBySlug((await params).slug);
  if (!r) notFound();
  const url = `${SITE_URL}/resources/${r.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'DigitalDocument', name: r.h1, description: r.description, url, encodingFormat: 'application/pdf', numberOfPages: r.pages, inLanguage: 'en-IN',
        isAccessibleForFree: true, author: { '@id': `${SITE_URL}/#organization` }, publisher: { '@id': `${SITE_URL}/#organization` } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
        { '@type': 'ListItem', position: 3, name: r.h1, item: url },
      ] },
    ],
  };
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/resources" theme="light" />
    <main id="main-content">
      <header className={styles.hero}><div className={styles.container}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/resources">Resources</Link><span aria-hidden="true">/</span><span aria-current="page">{r.kind}</span></nav>
        <p className={styles.eyebrow}>{r.kind} · {r.pages} pages · PDF, {r.sizeMb < 1 ? 'under 1' : `about ${Math.round(r.sizeMb)}`} MB</p>
        <h1>{r.h1}</h1>
        <p className={styles.lead}>{r.summary}</p>
      </div></header>
      <section className={styles.section}><div className={`${styles.container} ${styles.detail}`}>
        <div>
          <h2>What is inside</h2>
          <ul>{r.inside.map(item => <li key={item}>{item}</li>)}</ul>
          <h2>Who it is for</h2>
          <p>{r.forWho}</p>
          <h2>Related</h2>
          <div className={styles.related}>{r.related.map(l => <Link key={l.href} href={l.href}>{l.label} ↗</Link>)}<Link href="/resources">All free resources ↗</Link></div>
        </div>
        <DownloadForm title={r.h1} file={r.file} />
      </div></section>
      <ContactSection homeHref="/" />
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
