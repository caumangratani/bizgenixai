import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from '../../InternalLink';
import Navigation from '../../custom-solutions/Navigation';
import ContactSection from '../../ContactSection';
import { pageMeta, SITE_URL } from '../../seo';
import { formatPublishDate } from '../../blog/newsletter';
import styles from '../../blog/page.module.css';
import body from '../../blog/article.module.css';
import v from '../videos.module.css';
import Player from '../Player';
import { videos, clock, isoDuration, minutes, thumb, watchUrl } from '../content';

// Only the videos in videos.json exist; anything else is a real 404.
export const dynamicParams = false;
export function generateStaticParams() { return videos.map(({ slug }) => ({ slug })); }

const describe = (answer: string) => (answer.length > 158 ? `${answer.slice(0, 155).replace(/\s+\S*$/, '')}…` : answer);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const video = videos.find(item => item.slug === slug);
  if (!video) return {};
  return pageMeta({
    title: `${video.title} (Video) | Bizgenix AI`,
    description: describe(video.answer),
    path: `/videos/${video.slug}`,
    type: 'article',
    publishedTime: video.published,
    image: { url: thumb(video.youtubeId), width: 480, height: 360, alt: video.title },
  });
}

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = videos.find(item => item.slug === slug);
  if (!video) notFound();
  const url = `${SITE_URL}/videos/${video.slug}`;
  const day = video.published.slice(0, 10);
  const others = [...videos.filter(item => item.slug !== video.slug && item.topic === video.topic), ...videos.filter(item => item.topic !== video.topic)].slice(0, 6);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        '@id': `${url}#video`,
        name: video.title,
        description: video.summary,
        thumbnailUrl: [thumb(video.youtubeId)],
        uploadDate: video.published,
        duration: isoDuration(video.durationSec),
        embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
        url,
        ...(video.language ? { inLanguage: video.language === 'English' ? 'en' : 'hi' } : {}),
        creator: { '@id': `${SITE_URL}/#founder` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        sameAs: watchUrl(video.youtubeId),
        hasPart: video.chapters.map((chapter, index) => ({
          '@type': 'Clip',
          name: chapter.title,
          startOffset: chapter.start,
          endOffset: video.chapters[index + 1]?.start ?? video.durationSec,
          url: `${url}?t=${chapter.start}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Videos', item: `${SITE_URL}/videos` },
          { '@type': 'ListItem', position: 3, name: video.title, item: url },
        ],
      },
    ],
  };

  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/videos">Videos</Link><span aria-hidden="true">/</span><span aria-current="page">{video.topic}</span></nav>
        <article className={styles.previewArticle}>
          <p className={styles.eyebrow}>{video.topic} · VIDEO</p>
          <h1>{video.title}</h1>
          <p className={styles.byline}>Dr. CA Umang Ratani <span>•</span> <time dateTime={day}>{formatPublishDate(day)}</time> <span>•</span> {minutes(video.durationSec)} min {video.language && <><span>•</span> {video.language}</>}</p>
          <Player youtubeId={video.youtubeId} title={video.title} />
          <p className={v.source}>{video.setting} <a href={watchUrl(video.youtubeId)} rel="noopener">Watch on YouTube ↗</a></p>
          <div className={body.body}>
            <blockquote><strong>{video.question}</strong> {video.answer}</blockquote>
            <h2 id="about">What this video covers</h2>
            <p>{video.summary}</p>
            <h2 id="takeaways">What you will take away</h2>
            <ul>{video.keyPoints.map(point => <li key={point}>{point}</li>)}</ul>
            {video.chapters.length > 1 && <>
              <h2 id="chapters">Chapters</h2>
              <ul className={v.chapters}>{video.chapters.map(chapter => <li key={chapter.start}><a href={chapter.start ? `/videos/${video.slug}?t=${chapter.start}#player` : `/videos/${video.slug}#player`}>{clock(chapter.start)}</a><span>{chapter.title}</span></li>)}</ul>
            </>}
            {video.tools.length > 0 && <p><strong>Tools shown or discussed:</strong> {video.tools.join(', ')}.</p>}
            {video.published < '2026-01-01' && <p>Recorded in {formatPublishDate(day).replace(/^\d+\s/, '')}. Tool names, plans and prices may have changed since then.</p>}
            <p>Published on YouTube as “{video.originalTitle}”. This page is a written summary of the video; the wording is ours, the teaching is Umang’s.</p>
          </div>
          <aside className={body.cta} aria-labelledby="video-cta-title">
            <p className={styles.eyebrow}>LEARN THIS WITH YOUR TEAM</p>
            <h2 id="video-cta-title">Want this taught in your company, on your own work?</h2>
            <p>Bizgenix AI runs hands-on corporate AI training for leadership and departments, and the Scale With AI workshops and recorded course for business owners.</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/corporate-ai-training">Corporate AI training <span aria-hidden="true">→</span></Link>
              <Link className={styles.secondary} href="/scale-with-ai">Scale With AI</Link>
            </div>
            {video.related.length > 0 && <p style={{ marginTop: 18 }}>Related: {video.related.map((item, index) => <span key={item.href}>{index > 0 && ' · '}<Link href={item.href}>{item.label}</Link></span>)}</p>}
          </aside>
        </article>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="more-videos-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>KEEP WATCHING</p><h2 id="more-videos-title">More <em>videos.</em></h2></div><Link className={styles.textLink} href="/videos">All videos ↗</Link></div>
        <div className={styles.articleGrid}>{others.map(item => <article className={styles.articleCard} key={item.slug}>
          <div className={styles.cardContent}>
            <div className={styles.cardMeta}><span>{item.topic}</span><span>{minutes(item.durationSec)} min</span></div>
            <h3><Link href={`/videos/${item.slug}`}>{item.title}</Link></h3>
            <p>{item.answer}</p>
            <Link className={styles.textLink} href={`/videos/${item.slug}`}>Watch ↗</Link>
          </div>
        </article>)}</div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
