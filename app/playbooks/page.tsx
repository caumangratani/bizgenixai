import type { Metadata } from 'next';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { pageMeta, SITE_URL } from '../seo';
import styles from '../blog/page.module.css';
import p from './playbooks.module.css';
import { playbooks, playbookTopics } from './content';

const title = 'AI Playbooks: Free Prompts, Templates and Step-by-Step Guides | Bizgenix AI';
const description = 'Free AI playbooks from Dr. CA Umang Ratani and the Bizgenix AI team: ready-to-paste prompts, templates and step-by-step guides for ChatGPT, Claude and Gemini. Open to read, no sign-up needed.';
export const metadata: Metadata = pageMeta({ title, description, path: '/playbooks' });

export default function PlaybooksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: 'Bizgenix AI playbooks', url: `${SITE_URL}/playbooks`, description, hasPart: playbooks.map(item => ({ '@type': 'Article', headline: item.title, url: `${SITE_URL}/playbooks/${item.slug}` })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Playbooks', item: `${SITE_URL}/playbooks` }] },
    ],
  };
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Playbooks</span></nav>
        <div className={styles.previewArticle}>
          <p className={styles.eyebrow}>AI PLAYBOOKS</p>
          <h1>The guides behind the reels, free to read</h1>
          <p className={styles.byline}>When Umang says “comment and I will send you the guide”, this is the guide. Each playbook is a set of prompts, a template or a step-by-step method you can use today in ChatGPT, Claude or Gemini. No sign-up is needed to read them, and every page shows the date it was last checked.</p>
          <p className={styles.byline}><Link href="/videos">Watch the videos ↗</Link> · <Link href="/resources">Free PDFs and brochures ↗</Link> · <a href="https://www.instagram.com/umangratani.ai/" rel="noopener">Instagram ↗</a></p>
        </div>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-label="All playbooks">
        {playbookTopics.filter(topic => playbooks.some(item => item.topic === topic)).map(topic => <div key={topic}>
          <h2 className={p.topic}>{topic}</h2>
          <div className={styles.articleGrid}>{playbooks.filter(item => item.topic === topic).map(item => <article className={styles.articleCard} key={item.slug}>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}><span>Playbook</span><span>{item.minutes} min read</span></div>
              <h3 style={{ fontSize: 22, lineHeight: 1.3, margin: '0 0 12px', fontWeight: 500 }}><Link href={`/playbooks/${item.slug}`}>{item.title}</Link></h3>
              <p>{item.answer}</p>
              <Link className={styles.textLink} href={`/playbooks/${item.slug}`}>Open playbook ↗</Link>
            </div>
          </article>)}</div>
        </div>)}
        <p className={p.note} style={{ marginTop: 40 }}>More playbooks are added as they are checked and edited. They are shortcuts and starting points, not guarantees: check any fact, number or name an AI tool gives you before you rely on it.</p>
        <div className={styles.contextLinks} style={{ marginTop: 40 }}><Link href="/guides">Business guides ↗</Link><Link href="/corporate-ai-training">Corporate AI training ↗</Link><Link href="/scale-with-ai">Scale With AI workshops ↗</Link><Link href="/ai-automation">AI automation ↗</Link></div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
