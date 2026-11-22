// Guides for clients outside India (owned by Claude; see seo-audit-nov-2026/COORDINATION.md).
// Facts: team of 24 in Ahmedabad; international projects start from USD/EUR 500 (owner-confirmed 15 Nov 2026);
// 50% advance and milestones; hosting/APIs on the client's accounts; prototype-first delivery. No client names abroad.
import type { Guide } from './content';

const globalNext = (title: string, text: string): Guide['next'] => ({
  eyebrow: 'WORK WITH BIZGENIX AI',
  title,
  text,
  primary: { label: 'Tell us about one workflow', href: '/contact?intent=custom#contact-form' },
  secondary: { label: 'How we work with clients outside India', href: '/global' },
});

export const globalGuides: Guide[] = [
  {
    slug: 'hire-ai-development-company-india',
    title: 'Hiring an AI Development Company in India: Buyer Guide',
    h1: 'How to hire an AI development company in India: a buyer’s guide for US, UK, UAE and Singapore businesses',
    description: 'What to check before you hire an Indian AI development or automation partner: scope, pricing models, time zones, data protection, ownership, and the questions that separate a working system from a demo.',
    answer: 'Hire an Indian AI development company the way you would hire any supplier for a critical system: start with one workflow and a written definition of done, ask to see a working prototype on your own data before committing to the full build, and agree in writing who owns the code, where your data lives and how changes are handled. Price follows scope; the cheapest quote is often the one that has not understood the work.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['AI Development', 'Outsourcing', 'Custom AI Solutions'],
    minutes: 7,
    html: `
<h2>Why businesses abroad hire AI teams in India</h2>
<p>India has a deep pool of software engineers and a long track record of building systems for clients in other countries. For AI work the attraction is not only cost. A good Indian team can combine engineering with an understanding of how real operations run, build quickly, and keep working while your office is closed.</p>
<p>The risk is also familiar: a project quoted on a two-paragraph brief, built to a guess, and delivered as something your team cannot use. Everything below is about avoiding that.</p>

<h2>Start with one workflow, not “an AI project”</h2>
<p>Write one page before the first call:</p>
<ul>
<li>What starts the workflow, for example a new enquiry or an invoice arriving</li>
<li>Which systems and data it touches</li>
<li>Who checks the output, and what they do with it</li>
<li>What “done” looks like, in a sentence you could test</li>
</ul>
<p>A supplier who cannot restate this page back to you accurately is not ready to quote.</p>

<h2>Pricing models you will see</h2>
<div class="tableWrap"><table>
<thead><tr><th>Model</th><th>How it works</th><th>Suits</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Fixed price</td><td>Agreed scope, agreed price, milestone payments</td><td>One clearly defined workflow</td><td>Scope written too loosely; every change becomes a dispute</td></tr>
<tr><td>Time and materials</td><td>You pay for hours or days used</td><td>Exploratory work, changing requirements</td><td>No upper limit unless you set one</td></tr>
<tr><td>Monthly retainer</td><td>A team or capacity each month</td><td>Ongoing improvements after launch</td><td>Paying for capacity you do not use</td></tr>
<tr><td>Product subscription</td><td>Ready software, configured for you</td><td>Common needs such as CRM or WhatsApp follow-up</td><td>Paying to customise a product that does not fit</td></tr>
</tbody></table></div>
<p>Separate the build price from running costs: hosting, AI model usage, WhatsApp messaging and telephony are billed by those providers. Ask that they run on your accounts, so you see and control them.</p>

<h2>Time zones, honestly</h2>
<ul>
<li><strong>UAE and the Gulf:</strong> India is 1 hour 30 minutes ahead. Almost the whole working day overlaps.</li>
<li><strong>Singapore:</strong> 2 hours 30 minutes ahead of India. Most of the day overlaps.</li>
<li><strong>United Kingdom:</strong> India is 4 hours 30 minutes or 5 hours 30 minutes ahead, depending on the season. Your mornings meet their afternoons.</li>
<li><strong>United States:</strong> India is 9 hours 30 minutes to 13 hours 30 minutes ahead. Agree one fixed weekly call in your morning, and expect progress overnight.</li>
</ul>

<h2>Data protection and ownership</h2>
<ol>
<li><strong>Where data lives.</strong> Prefer systems hosted on your own cloud accounts. Then your data stays under your contracts and your jurisdiction’s rules.</li>
<li><strong>What the supplier can see.</strong> Agree which data they need, for how long, and how access is removed at the end.</li>
<li><strong>Applicable law.</strong> UK and EU businesses work under the GDPR, India has its own Digital Personal Data Protection Act, 2023, and other countries have their own rules. Put the obligations in the contract rather than assuming them.</li>
<li><strong>Code and IP.</strong> State in the contract that the code, configuration and documentation built for you are yours on payment.</li>
<li><strong>AI providers.</strong> Know which AI model provider processes your data and on what terms.</li>
</ol>

<h2>Twelve questions to ask before you sign</h2>
<ol>
<li>Can you restate our workflow and definition of done in your own words?</li>
<li>Will we see a working prototype on our data before the full build?</li>
<li>What exactly is in scope, and what is not?</li>
<li>How are changes priced and approved?</li>
<li>Which of our systems will you connect to, and what access do you need?</li>
<li>Where will it be hosted, and on whose account?</li>
<li>Which AI provider will process our data?</li>
<li>Where does a person approve an action before it reaches a customer?</li>
<li>Who owns the code and documentation?</li>
<li>What support do we get after launch, and at what cost?</li>
<li>Who will be on our weekly call, and in which time zone?</li>
<li>Can we see systems you have built, with their status stated honestly?</li>
</ol>

<h2>Red flags</h2>
<ul>
<li>A fixed quote before anyone has asked how your process works.</li>
<li>Demos only on sample data, never on yours.</li>
<li>“Fully autonomous” claims for actions that touch customers or money.</li>
<li>Hosting and accounts that stay in the supplier’s name.</li>
<li>Case studies with impressive numbers and no way to tell what was actually built.</li>
</ul>

<h2>How Bizgenix AI works with clients outside India</h2>
<p>We are an AI consulting and AI development company in Ahmedabad with a team of 24. We start with one workflow, put a working first version in front of your team, and refine it from real use. International projects start from USD 500 or EUR 500 for a small, clearly scoped workflow; larger systems are quoted after a written scope. Systems run on your accounts, and data access and handover are agreed before work starts.</p>
`,
    faqs: [
      ['How much does it cost to hire an AI development company in India?', 'It depends on scope. A single, clearly defined workflow can start in the hundreds of US dollars; larger systems are priced after a written scope. Running costs such as hosting, AI usage and messaging are billed separately by those providers.'],
      ['Is it safe to share business data with an Indian AI developer?', 'It can be, with a written agreement on which data is shared, for how long, where it is processed, and how access is removed. Hosting the system on your own accounts keeps the data under your control.'],
      ['How do I manage time-zone differences with an Indian team?', 'Agree a fixed weekly call in the overlap: most of the day for the UAE and Singapore, afternoons in India for the UK, and your morning for the US. Use written updates between calls.'],
      ['Who owns the code when an Indian company builds my AI system?', 'Whoever the contract says. Make it explicit that the code, configuration and documentation built for you transfer to you on payment.'],
      ['Should I choose a fixed price or time and materials?', 'Fixed price for one well-defined workflow; time and materials for exploratory work, with a cap. Many projects start fixed and move to a monthly retainer after launch.'],
    ],
    next: globalNext('Start with one workflow', 'Tell us what starts it, which systems it touches and what done looks like. You get a written scope and a price in USD or EUR before any work begins.'),
  },
  {
    slug: 'ai-agents-for-small-business',
    title: 'AI Agents for Small Business: What They Can Do Today',
    h1: 'AI agents for small business: what they can do today, what they cannot, and how to start',
    description: 'A plain guide for small and mid-size business owners anywhere: what an AI agent is, five jobs agents do well today, where they fail, the controls to insist on, and a 30-day way to start.',
    answer: 'An AI agent is software that is given a goal and a set of tools, decides the steps, and carries them out, for example reading new enquiries, looking up the customer and drafting a reply. In a small business today agents work best on narrow, repetitive jobs with a person approving anything that reaches a customer or moves money. Start with one job, measure it for a month, then add the next.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['AI Agents', 'AI Automation', 'Custom AI Solutions'],
    minutes: 6,
    html: `
<h2>Agent, automation or chatbot?</h2>
<div class="tableWrap"><table>
<thead><tr><th></th><th>Automation</th><th>Chatbot</th><th>AI agent</th></tr></thead>
<tbody>
<tr><td>What it does</td><td>Runs fixed steps when something happens</td><td>Answers questions in a conversation</td><td>Works out the steps toward a goal and uses tools to do them</td></tr>
<tr><td>Handles variety</td><td>Poorly: new cases break it</td><td>In conversation only</td><td>Better, within the tools and rules it is given</td></tr>
<tr><td>Best for</td><td>Predictable, high-volume tasks</td><td>First-line questions</td><td>Tasks that need reading, judging and acting across systems</td></tr>
</tbody></table></div>
<p>Many good systems combine them: automation for the fixed parts, an agent for the parts that need reading and judgement, and a person for approval.</p>

<h2>Five jobs agents do well in a small business today</h2>
<ol>
<li><strong>Enquiry handling.</strong> Read a new enquiry, check the CRM, draft a reply and a next step for a salesperson to approve.</li>
<li><strong>Follow-up.</strong> Find quotations and leads with no response and prepare the follow-up message.</li>
<li><strong>Document checking.</strong> Read invoices, orders or forms, compare them with rules, and flag what does not match.</li>
<li><strong>Inbox triage.</strong> Sort incoming email, log tickets, draft standard acknowledgements and route the rest.</li>
<li><strong>Reporting.</strong> Pull figures from several systems each week and write a short summary of what changed.</li>
</ol>

<h2>Where agents still fail</h2>
<ul>
<li>When the data they rely on is incomplete or out of date.</li>
<li>When the task needs judgement about people, money or reputation.</li>
<li>When nobody defined what “done” looks like, so nobody notices mistakes.</li>
<li>When they are given broad access “to be safe” and do something unexpected with it.</li>
</ul>

<h2>Controls to insist on</h2>
<ul>
<li><strong>Narrow tools.</strong> Give the agent only the actions the job needs.</li>
<li><strong>Approval steps.</strong> A person approves anything that reaches a customer, a supplier or the accounts.</li>
<li><strong>A log.</strong> Every action recorded: what was done, when, and on whose approval.</li>
<li><strong>A stop switch.</strong> One place to pause the agent immediately.</li>
<li><strong>Measured outcome.</strong> Track the business result, not the number of messages sent.</li>
</ul>

<h2>A 30-day way to start</h2>
<ol>
<li><strong>Week 1:</strong> pick one job that happens many times a week. Write what starts it, what data it uses and what done looks like.</li>
<li><strong>Week 2:</strong> build a first version that prepares the work but does not send anything.</li>
<li><strong>Week 3:</strong> run it beside the person who does the job today. Compare and correct.</li>
<li><strong>Week 4:</strong> switch on approved sending, measure time saved and outcomes, and decide on the next job.</li>
</ol>

<h2>How Bizgenix AI builds agents</h2>
<p>We build AI agents and automations around one workflow at a time, for businesses in India and abroad, with narrow tools, approval steps and a log from the first version. We start with a working prototype on your own data and tools, then refine it from real use.</p>
`,
    faqs: [
      ['What is an AI agent in simple terms?', 'Software that is given a goal and a set of tools, works out the steps, and carries them out, such as reading an enquiry, checking the CRM and drafting a reply for approval.'],
      ['Are AI agents safe for a small business?', 'They can be when they have narrow tools, a person approves customer-facing or financial actions, every action is logged, and there is a way to stop them at once.'],
      ['What should a small business automate with an AI agent first?', 'A repetitive job that happens many times a week, uses data you already have, and has a clear definition of done, such as enquiry follow-up or document checking.'],
      ['How long does it take to set up an AI agent?', 'A first working version of a single, narrow job can often be built in a couple of weeks; most of the effort is in defining the job, connecting data and testing beside the person who does it today.'],
    ],
    next: globalNext('Start your first AI agent with one job', 'We build agents with narrow tools, approval steps and a log, starting from a working prototype on your own data.'),
  },
];
