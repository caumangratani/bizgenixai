import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMeta, SITE_URL } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';
import { editions, editionBySlug } from '../editions';

export function generateStaticParams() {
  return editions.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const e = editionBySlug((await params).slug);
  if (!e) return {};
  return pageMeta({
    title: `${e.name}, ${e.dateText} | AI Workshop by Dr. CA Umang Ratani`,
    description: e.lead.slice(0, 300),
    path: `/scale-with-ai/${e.slug}`,
  });
}

export default async function EditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const e = editionBySlug((await params).slug);
  if (!e) notFound();
  const url = `${SITE_URL}/scale-with-ai/${e.slug}`;
  const others = editions.filter(o => o.slug !== e.slug);
  const content: ServiceContent = {
    path: `/scale-with-ai/${e.slug}`,
    eyebrow: `${e.city} · ${e.dateText}`,
    parent: { name: 'Scale With AI', href: '/scale-with-ai' },
    schemaType: 'none',
    serviceType: 'AI workshop',
    contactHref: '/contact?intent=learning#contact-form',
    secondaryCta: { label: 'All Scale With AI editions', href: '/scale-with-ai' },
    h1: `${e.name}, ${e.dateText}.`,
    lead: e.lead,
    primaryCta: 'Ask about the next edition',
    photo: e.photo,
    whatTitle: 'What the day covered.',
    whatIntro: e.venue ? `${e.venue}${e.hours ? `, ${e.hours.start} to ${e.hours.end}` : ''}. Hands-on, on each participant’s own business.` : 'Hands-on, on each participant’s own business.',
    items: e.covered,
    extra: { title: 'What participants took home.', intro: 'Material written for this edition.', items: e.materials },
    proofTitle: 'Other editions and ways to learn.',
    proofIntro: 'Scale With AI has run in Ahmedabad, Surat, Mumbai and Vadodara.',
    proof: [
      ...others.map(o => ({ label: `${o.name}, ${o.dateText}`, href: `/scale-with-ai/${o.slug}` })),
      { label: 'Recorded programme (course.bizgenix.ai)', href: 'https://course.bizgenix.ai/' },
      { label: 'Corporate AI training for your team', href: '/corporate-ai-training' },
      { label: 'Free AI guides and prompt library', href: '/resources' },
    ],
    processTitle: 'How a Scale With AI day runs.',
    steps: [
      { title: 'See it', text: 'Each capability is shown once on the big screen, on a real business case.' },
      { title: 'Build it', text: 'Participants build the same thing on their own laptop, with the team helping at the tables.' },
      { title: 'Keep it', text: 'Prompts, tools and the workbook go home with every participant.' },
      { title: 'Plan it', text: 'The day ends with a written plan for the weeks that follow.' },
    ],
    faqTitle: `Questions about Scale With AI ${e.city}`,
    faqs: e.faqs,
    related: [
      { label: 'Scale With AI', href: '/scale-with-ai' },
      { label: 'One-day AI workshop: what to expect', href: '/guides/one-day-ai-workshop-for-business-owners' },
      { label: 'Founder: Dr. CA Umang Ratani', href: '/about/umang-ratani' },
      { label: 'Corporate AI training', href: '/corporate-ai-training' },
    ],
    extraJsonLd: e.offers && e.venue && e.photo && e.hours ? [{
      '@type': 'Event',
      name: e.name,
      description: e.lead,
      image: [`${SITE_URL}${e.photo.src}`],
      startDate: `${e.dateISO}T${e.hours.start}:00+05:30`,
      endDate: `${e.dateISO}T${e.hours.end}:00+05:30`,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@type': 'Place', name: e.venue, address: { '@type': 'PostalAddress', addressLocality: e.city, addressRegion: 'Gujarat', addressCountry: 'IN' } },
      offers: { '@type': 'AggregateOffer', lowPrice: e.offers.low, highPrice: e.offers.high, offerCount: 3, priceCurrency: 'INR', url: e.offers.url.startsWith('http') ? e.offers.url : `${SITE_URL}${e.offers.url}` },
      organizer: { '@id': `${SITE_URL}/#organization` },
      performer: { '@id': `${SITE_URL}/#founder` },
      superEvent: { '@id': `${SITE_URL}/scale-with-ai#series` },
      url,
    }] : undefined,
  };
  return <ServicePage content={content} />;
}
