import type { Metadata } from 'next';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { pageMeta, SITE_URL } from '../seo';
import styles from '../blog/page.module.css';
import v from './videos.module.css';
import { videos, shorts, channel, topics, minutes, thumb, isoDuration } from './content';

const title = 'AI for Business Videos by Dr. CA Umang Ratani | Bizgenix AI';
const description = 'Watch Dr. CA Umang Ratani teach AI for business in Hindi and Hinglish: prompting, ChatGPT, Claude and Gemini in daily work, AI agents, and talks to business owners. Each video has a written summary and chapters.';
export const metadata: Metadata = pageMeta({ title, description, path: '/videos' });

export default function VideosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'AI for business videos by Dr. CA Umang Ratani',
        url: `${SITE_URL}/videos`,
        description,
        about: { '@id': `${SITE_URL}/#founder` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: videos.map((video, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: { '@type': 'VideoObject', name: video.title, description: video.answer, thumbnailUrl: [thumb(video.youtubeId)], uploadDate: video.published, duration: isoDuration(video.durationSec), embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`, url: `${SITE_URL}/videos/${video.slug}` },
          })),
        },
      },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Videos', item: `${SITE_URL}/videos` }] },
    ],
  };
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Videos</span></nav>
        <div className={styles.previewArticle}>
          <p className={styles.eyebrow}>VIDEO LIBRARY</p>
          <h1>AI for business, taught on video by Dr. CA Umang Ratani</h1>
          <p className={styles.byline}>Practical lessons for business owners in Hindi and Hinglish: how to prompt, how to use ChatGPT, Claude and Gemini in daily work, what AI agents do, and full talks from business events. Every video here has a written summary and chapters, so you can read first and watch the part you need.</p>
          <p className={styles.byline}><Link href="/about/umang-ratani">About Dr. CA Umang Ratani ↗</Link> · <a href={channel.url} rel="noopener">YouTube channel ↗</a></p>
        </div>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-label="All videos">
        {topics.filter(topic => videos.some(video => video.topic === topic)).map(topic => <div key={topic}>
          <h2 className={v.topic}>{topic}</h2>
          <div className={styles.articleGrid}>{videos.filter(video => video.topic === topic).map(video => <article className={styles.articleCard} key={video.slug}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href={`/videos/${video.slug}`} aria-hidden="true" tabIndex={-1}><img className={v.thumb} src={thumb(video.youtubeId)} alt="" width={480} height={360} loading="lazy" /></Link>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}><span>{video.language || 'Talk'}</span><span>{minutes(video.durationSec)} min</span></div>
              <h3 style={{ fontSize: 22, lineHeight: 1.3, margin: '0 0 12px', fontWeight: 500 }}><Link href={`/videos/${video.slug}`}>{video.title}</Link></h3>
              <p>{video.answer}</p>
              <Link className={styles.textLink} href={`/videos/${video.slug}`}>Watch and read ↗</Link>
            </div>
          </article>)}</div>
        </div>)}
        {shorts.length > 0 && <div>
          <h2 className={v.topic}>Short videos</h2>
          <p className={v.note}>One idea in under a minute. These open on YouTube.</p>
          <ul className={v.shorts}>{shorts.map(short => <li key={short.youtubeId}><a href={`https://www.youtube.com/shorts/${short.youtubeId}`} rel="noopener">{short.label} ↗</a></li>)}</ul>
        </div>}
        <p className={v.note} style={{ marginTop: 40 }}>The channel carries {channel.longVideos + channel.shorts + channel.live} public videos (counted {channel.counted}): {channel.longVideos} full-length, {channel.shorts} short and {channel.live} live sessions. This library lists the ones about AI for business and adds new ones as they are published.</p>
        <div className={styles.contextLinks} style={{ marginTop: 40 }}><Link href="/guides">Written guides ↗</Link><Link href="/corporate-ai-training">Corporate AI training ↗</Link><Link href="/scale-with-ai">Scale With AI workshops ↗</Link><Link href="/resources">Free resources ↗</Link></div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
