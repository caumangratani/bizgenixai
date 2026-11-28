import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from '../../InternalLink';
import Navigation from '../../custom-solutions/Navigation';
import ContactSection from '../../ContactSection';
import { pageMeta, SITE_URL } from '../../seo';
import { formatPublishDate } from '../../blog/newsletter';
import styles from '../../blog/page.module.css';
import body from '../../blog/article.module.css';
import p from '../playbooks.module.css';
import DownloadForm from '../../resources/DownloadForm';
import { playbooks } from '../content';

// Only the playbooks in playbooks.json exist; anything else is a real 404.
export const dynamicParams = false;
export function generateStaticParams() { return playbooks.map(({ slug }) => ({ slug })); }

const describe = (answer: string) => (answer.length > 158 ? `${answer.slice(0, 155).replace(/\s+\S*$/, '')}…` : answer);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const playbook = playbooks.find(item => item.slug === slug);
  if (!playbook) return {};
  return pageMeta({ title: `${playbook.title} | Bizgenix AI`, description: describe(playbook.answer), path: `/playbooks/${playbook.slug}`, type: 'article', publishedTime: `${playbook.checked}T09:00:00+05:30` });
}

export default async function PlaybookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const playbook = playbooks.find(item => item.slug === slug);
  if (!playbook) notFound();
  const url = `${SITE_URL}/playbooks/${playbook.slug}`;
  const others = [...playbooks.filter(item => item.slug !== playbook.slug && item.topic === playbook.topic), ...playbooks.filter(item => item.topic !== playbook.topic)].slice(0, 6);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: playbook.title,
        description: playbook.answer,
        abstract: playbook.answer,
        image: `${SITE_URL}/custom-solutions-hero.webp`,
        datePublished: `${playbook.checked}T09:00:00+05:30`,
        dateModified: `${playbook.checked}T09:00:00+05:30`,
        author: { '@id': `${SITE_URL}/#founder` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        inLanguage: 'en-IN',
        wordCount: playbook.words,
      },
      { '@type': 'FAQPage', mainEntity: playbook.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Playbooks', item: `${SITE_URL}/playbooks` },
          { '@type': 'ListItem', position: 3, name: playbook.title, item: url },
        ],
      },
    ],
  };

  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/playbooks">Playbooks</Link><span aria-hidden="true">/</span><span aria-current="page">{playbook.topic}</span></nav>
        <article className={styles.previewArticle}>
          <p className={styles.eyebrow}>PLAYBOOK · {playbook.topic}</p>
          <h1>{playbook.title}</h1>
          <p className={styles.byline}>By Dr. CA Umang Ratani and the Bizgenix AI team <span>•</span> Checked <time dateTime={playbook.checked}>{formatPublishDate(playbook.checked)}</time> <span>•</span> {playbook.minutes} min read</p>
          <div className={`${body.body} ${p.guide}`}>
            <blockquote><strong>{playbook.question}</strong> {playbook.answer}</blockquote>
            <div dangerouslySetInnerHTML={{ __html: playbook.html }} />
            <h2 id="questions">Common questions</h2>
            {playbook.faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
            <p className={p.from}>This playbook was first shared with people who asked for it on Umang’s Instagram reels{playbook.keyword ? ` (comment keyword “${playbook.keyword}”)` : ''}. It is free to read and use. AI tools change often: the steps were checked on the date above.</p>
          </div>
          <div className={p.formWrap} id="copy">
            <DownloadForm title={`Playbook: ${playbook.title}`} file={playbook.file} labels={{ heading: 'Get the copy-ready file', intro: 'A plain text file with every prompt on this page, ready to paste. Tell us where to reach you and it downloads straight away. We will also send new playbooks as they come out.', button: 'Download the file', done: 'Download the file' }} />
          </div>
          <aside className={body.cta} aria-labelledby="playbook-cta-title">
            <p className={styles.eyebrow}>WANT IT BUILT FOR YOUR BUSINESS?</p>
            <h2 id="playbook-cta-title">We turn playbooks like this into working systems.</h2>
            <p>Bizgenix AI builds AI automation and AI agents for Indian businesses, and trains teams to use AI on their own work.</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/contact">Talk to us <span aria-hidden="true">→</span></Link>
              <Link className={styles.secondary} href="/corporate-ai-training">Corporate AI training</Link>
            </div>
            {playbook.related.length > 0 && <p style={{ marginTop: 18 }}>Related: {playbook.related.map((item, index) => <span key={item.href}>{index > 0 && ' · '}<Link href={item.href}>{item.label}</Link></span>)}</p>}
          </aside>
        </article>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="more-playbooks-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>KEEP GOING</p><h2 id="more-playbooks-title">More <em>playbooks.</em></h2></div><Link className={styles.textLink} href="/playbooks">All playbooks ↗</Link></div>
        <div className={styles.articleGrid}>{others.map(item => <article className={styles.articleCard} key={item.slug}>
          <div className={styles.cardContent}>
            <div className={styles.cardMeta}><span>{item.topic}</span><span>{item.minutes} min read</span></div>
            <h3><Link href={`/playbooks/${item.slug}`}>{item.title}</Link></h3>
            <p>{item.answer}</p>
            <Link className={styles.textLink} href={`/playbooks/${item.slug}`}>Open playbook ↗</Link>
          </div>
        </article>)}</div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
