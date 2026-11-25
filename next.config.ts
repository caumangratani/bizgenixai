import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  typescript: {
   ignoreBuildErrors: true,
 },
  async redirects() {
    return [
      // One hostname: www goes to the apex domain.
      { source: '/:path*', has: [{ type: 'host', value: 'www.bizgenix.ai' }], destination: 'https://bizgenix.ai/:path*', permanent: true },
      // Old URLs that Google still shows under the brand result.
      { source: '/solutions', destination: '/custom-solutions', permanent: true },
      { source: '/services', destination: '/custom-solutions', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },
      { source: '/ai-course-india', destination: '/courses', permanent: true },
      { source: '/ai-training', destination: '/courses', permanent: true },
      { source: '/corporate-training', destination: '/corporate-ai-training', permanent: true },
      { source: '/learning', destination: '/courses', permanent: true },
      { source: '/learning/:path*', destination: '/courses', permanent: true },
      // URLs from the pre-2026 static site and old blog that Google still reports as 404 (Search Console, 25 Nov 2026).
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/solutions.html', destination: '/custom-solutions', permanent: true },
      { source: '/careers.html', destination: '/about', permanent: true },
      { source: '/case-studies.html', destination: '/case-studies', permanent: true },
      { source: '/scale-business-with-ai.html', destination: '/scale-with-ai', permanent: true },
      { source: '/digital-transformation-ai.html', destination: '/ai-consulting', permanent: true },
      { source: '/ai-transformation.html', destination: '/ai-consulting', permanent: true },
      { source: '/ai-for-small-businesses.html', destination: '/ai-automation', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:path*', destination: '/blog', permanent: true },
      { source: '/blog/post/:path*', destination: '/blog', permanent: true },
      // Short names people type for products and local pages.
      { source: '/products/crm', destination: '/products/ai-crm', permanent: true },
      { source: '/products/whatsapp-automation', destination: '/products/bizchat', permanent: true },
      { source: '/ai-consulting-ahmedabad', destination: '/ai-consultant-ahmedabad', permanent: true },
      { source: '/industries', destination: '/#industries', permanent: false },
    ];
  },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      // PDFs are reached through /resources/<slug> forms; keep the raw files out of search results.
      { source: '/downloads/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ];
  },
};

export default nextConfig;
