import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';
import Calculator from './Calculator';

// Free tool (owned by Claude; see seo-audit-nov-2026/COORDINATION.md). Runs entirely in the browser; nothing is sent.
// Plan: later expose the same calculation as a tool in a Claude/ChatGPT connector (MCP), next to Growth Intelligence's MCP.

const title = 'Where Is My Money Stuck? Free Working Capital Calculator for Tally Users';
const description = 'Free calculator for business owners: enter five numbers from Tally to see debtor days, stock days, creditor days, your cash cycle, the money locked in your business and what collecting 15 days faster would free.';

export const metadata: Metadata = pageMeta({ title, description, path: '/tools/where-is-my-money-stuck' });

const content: ServiceContent = {
  path: '/tools/where-is-my-money-stuck',
  eyebrow: 'Free tool',
  schemaType: 'none',
  serviceType: 'Working capital calculator',
  contactHref: '/contact?intent=product&product=growth-intelligence#contact-form',
  secondaryCta: { label: 'Tally and finance guides', href: '/tally' },
  h1: 'Where is my money stuck? Find out in two minutes.',
  lead: 'Most money stuck in an owner-run business sits in three places: customers who have not paid, stock that has not sold, and the gap before you pay suppliers. Enter five numbers from your Tally below and see how many days each one holds your cash, how much is locked up, and what it costs you.',
  primaryCta: 'Get it every Monday from Tally',
  tool: <Calculator />,
  whatTitle: 'How to read your result.',
  whatIntro: 'Six numbers tell most of the story.',
  items: [
    { title: 'Debtor days', text: 'How many days of sales are sitting with customers. Compare it with the credit period you give: anything above it is money customers are holding beyond your terms.' },
    { title: 'Stock days', text: 'How many days of purchases are sitting as stock. A rising number usually means slow-moving items or buying ahead of sales.' },
    { title: 'Creditor days', text: 'How long you take to pay suppliers. It offsets the other two, but stretching it too far costs discounts and goodwill.' },
    { title: 'Cash cycle', text: 'Debtor days plus stock days minus creditor days: how long each rupee takes to come back as cash. Shorter means less borrowing for the same sales.' },
    { title: 'Money locked up', text: 'Debtors plus stock minus creditors at today’s balances. This is the working capital the business has to fund, usually from the owner or the bank.' },
    { title: 'What 15 days is worth', text: 'Cutting 15 days from collections or from stock frees cash equal to 15 days of sales or purchases, without selling anything more.' },
  ],
  processTitle: 'Where to find the five numbers in TallyPrime.',
  steps: [
    { title: 'Sales and purchases', text: 'Open Profit & Loss A/c for the last 12 months (Alt+F2 to change the period). Take the totals of Sales Accounts and Purchase Accounts.' },
    { title: 'Debtors and creditors', text: 'Open the Balance Sheet as of today. Take the closing balances of Sundry Debtors and Sundry Creditors.' },
    { title: 'Closing stock', text: 'Closing Stock on the same Balance Sheet. If stock is not maintained in Tally, use your latest physical stock value.' },
    { title: 'Go deeper', text: 'For who is paying late, use Display More Reports → Statements of Accounts → Outstandings → Receivables, with age-wise analysis. Growth Intelligence does this every week automatically.' },
  ],
  faqTitle: 'Questions about the calculator',
  faqs: [
    { q: 'Is my data saved or sent anywhere?', a: 'No. The calculation runs in your browser. Nothing you type leaves your device.' },
    { q: 'How are debtor days calculated?', a: 'Debtors divided by the last 12 months’ sales, multiplied by 365. Stock days and creditor days use the last 12 months’ purchases in the same way, as a simple stand-in for cost of goods sold.' },
    { q: 'What is a good cash cycle?', a: 'It depends on the industry and your terms. The useful comparison is with your own credit terms and with your own number last quarter: if the cycle is growing, more of your money is getting stuck.' },
    { q: 'Why is my money locked up higher than my bank borrowing?', a: 'Because the owner’s own capital and retained profit also fund working capital. Freeing it reduces borrowing first, then frees cash for growth.' },
    { q: 'Can I get this automatically from Tally?', a: 'Yes. Growth Intelligence, the AI Chief Value Officer from Bizgenix AI, reads TallyPrime read-only and shows these numbers by customer and item every week, with the entries behind each one.' },
  ],
  related: [
    { label: 'Growth Intelligence', href: '/products/growth-intelligence' },
    { label: '13-week cash flow forecast from Tally', href: '/guides/cash-flow-forecast-from-tally' },
    { label: 'Weekly Tally review: 10 numbers', href: '/guides/tally-weekly-owner-review' },
    { label: 'Tally and finance library', href: '/tally' },
  ],
  extraJsonLd: [
    {
      '@type': 'WebApplication',
      name: 'Where Is My Money Stuck? Working capital calculator',
      url: `${SITE_URL}/tools/where-is-my-money-stuck`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any (web browser)',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: 0, priceCurrency: 'INR' },
      description,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function MoneyStuckPage() {
  return <ServicePage content={content} />;
}
