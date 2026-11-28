import Attribution from './Attribution';
import Clarity from './Clarity';
import type { Metadata } from 'next';
import './globals.css';
import { organizationJsonLd } from './seo';
export const metadata: Metadata = {
  metadataBase: new URL('https://bizgenix.ai'),
  title: { default: 'Bizgenix AI | AI Automation & Custom AI Solutions in India', template: '%s' },
  description: 'AI automation company in Ahmedabad. Bizgenix AI builds AI agents, workflow and WhatsApp automation, CRM, voice AI and custom AI solutions for Indian businesses.',
  applicationName: 'Bizgenix AI',
  icons: {
    // 192px PNG (22 KB). The old /favicon.svg was 700 KB because it embeds a full-size bitmap; every page paid for it.
    icon: [{ url: '/favicon-192.png', type: 'image/png', sizes: '192x192' }],
    shortcut: ['/favicon-192.png'],
    apple: [{ url: '/favicon-192.png', type: 'image/png', sizes: '192x192' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Bizgenix AI',
    locale: 'en_IN',
    url: '/',
    title: 'Bizgenix AI — AI Products, Automation & Custom Solutions',
    description: 'Practical AI products, automation, and custom solutions built to help businesses scale.',
    images: [{
      url: '/custom-solutions-hero.webp',
      width: 1450,
      height: 1088,
      alt: 'Bizgenix AI business transformation platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizgenix AI — AI Products, Automation & Custom Solutions',
    description: 'Practical AI products, automation, and custom solutions built to help businesses scale.',
    images: ['/custom-solutions-hero.webp'],
  },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-IN"><body><Attribution /><Clarity />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /></body></html>}
