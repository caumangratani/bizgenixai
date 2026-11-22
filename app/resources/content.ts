// Free downloads: Scale With AI guides and the Team-Brochure-Kit PDFs (owned by Claude; see
// seo-audit-nov-2026/COORDINATION.md). Each file is behind a short form so the team gets the lead.
// Held back on purpose (22 Nov 2026), do not add until Umang rules on them:
//   - Corporate AI Training brochure and Biz Chat brochure: they print prices that are proposed, not ruled
//   - AI and consulting case-study booklets: open naming and figure questions in 03-Facts-Numbers-and-Rules
//   - Running Cost Guide: AMC scope and usage estimates pending confirmation
//   - Growth Intelligence brochure: prints ₹2,499/₹3,499/₹4,999 plans; GI prices are not ruled for publication
//   - Workshop pre-read booklets marked "Confidential – For Workshop Participants Only", and the n8n guide (third party)

export type Resource = {
  slug: string;
  kind: 'Free AI guide' | 'Brochure' | 'Profile';
  title: string;
  h1: string;
  description: string;
  summary: string;
  inside: string[];
  forWho: string;
  file: string;
  pages: number;
  sizeMb: number;
  related: { label: string; href: string }[];
};

export const resources: Resource[] = [
  {
    slug: 'ai-dictionary-for-business-owners',
    kind: 'Free AI guide',
    title: 'The AI Dictionary for Business Owners: 50 Concepts (Free PDF)',
    h1: 'The AI Dictionary for Business Owners: 50 concepts, explained simply',
    description: 'Free 32-page PDF: 50 AI concepts every business owner should know, from LLMs and prompting to agents, vibe coding, shadow AI and AEO, each with a business use case and the trap to avoid.',
    summary: 'From “what is an LLM?” to running a team of AI agents. Every one of the 50 concepts is written to be understood by a busy owner in under two minutes: an analogy first, then the precise meaning, where it makes or saves money, and the mistake owners actually make with it.',
    inside: [
      'Eight modules: foundations, talking to AI, memory, tools and building, agents, teams of agents, trust and safety, strategy and money',
      'Each concept in one line, what it is, a plain explanation, business use cases and related ideas',
      '“The trap” on all 50: the expensive mistake to skip',
      'The 2026 layer: open and local models, deep research, vibe coding, webhooks, voice agents, shadow AI and AEO/GEO',
    ],
    forWho: 'Business owners, managers and professionals who want to follow AI conversations and make better decisions.',
    file: '/downloads/ai-dictionary-50-concepts-bizgenix.pdf',
    pages: 32,
    sizeMb: 1,
    related: [
      { label: 'Scale With AI programme', href: '/scale-with-ai' },
      { label: 'AI agents for small business', href: '/guides/ai-agents-for-small-business' },
    ],
  },
  {
    slug: 'ai-prompt-library-for-business',
    kind: 'Free AI guide',
    title: 'AI Prompt Library for Business: 109 Prompts for Indian MSMEs (Free PDF)',
    h1: 'The AI Prompt Library: 109 business prompts for Indian MSMEs',
    description: 'Free 77-page PDF: 109 copy-paste AI prompts across 12 departments, each with when to use it, the best model and a tweak tip. Tested on real Indian MSME work. No coding needed.',
    summary: 'A working reference, not a coffee-table book. 109 prompts across 12 departments, each written for a real business moment, tagged with the AI model it works best in, and with one tweak that makes it fit your business.',
    inside: [
      '109 copy-paste prompts across 12 departments, from sales and marketing to finance, HR, legal and operations',
      'For each prompt: when to use it, the best model, the prompt itself and a tweak tip',
      'A model cheat-sheet: which of Claude, ChatGPT, Gemini and Perplexity to use for what',
      'Curated by Dr. CA Umang Ratani from Bizgenix AI client work',
    ],
    forWho: 'Owners and teams who want results from ChatGPT, Claude or Gemini on the first try.',
    file: '/downloads/ai-prompt-library-for-business-bizgenix.pdf',
    pages: 77,
    sizeMb: 0.9,
    related: [
      { label: 'Corporate AI training', href: '/corporate-ai-training' },
      { label: 'Business processes to automate with AI', href: '/blog/business-processes-to-automate-with-ai' },
    ],
  },
  {
    slug: 'complete-claude-ai-guide',
    kind: 'Free AI guide',
    title: 'The Complete Claude AI Guide for Business (Free PDF)',
    h1: 'The Complete Claude AI Guide: every feature, for business users',
    description: 'Free 25-page PDF on Claude AI for business: models, Projects, Artifacts, memory, connectors, skills, prompting, Claude vs ChatGPT vs Gemini, and a 7-day mastery plan. Written for Indian MSMEs and consultants.',
    summary: 'Twenty short chapters that take you from your first Claude chat to Projects, Artifacts, connectors and skills, with uses for Indian businesses and consultants and a 7-day plan to make it a habit.',
    inside: [
      'Claude products, models and plans, explained',
      'Extended thinking, Projects, Artifacts, memory, web search and deep research',
      'Connectors, custom styles and skills',
      'Prompting framework, 30 unusual uses, Claude vs ChatGPT vs Gemini, and a 7-day mastery plan',
    ],
    forWho: 'Anyone starting with Claude, or using it only as a chat window.',
    file: '/downloads/complete-claude-ai-guide-bizgenix.pdf',
    pages: 25,
    sizeMb: 0.4,
    related: [
      { label: 'Claude Cowork guide', href: '/resources/claude-cowork-guide' },
      { label: 'Connect Tally to AI', href: '/guides/connect-tally-to-ai-mcp' },
    ],
  },
  {
    slug: 'claude-cowork-guide',
    kind: 'Free AI guide',
    title: 'The Complete Claude Cowork Guide (Free PDF)',
    h1: 'The Complete Claude Cowork Guide: from zero to AI doing real work on your files',
    description: 'Free 26-page PDF on Claude Cowork: setup, folder structure, context files, connectors, plugins, scheduled tasks, use cases for Indian MSMEs, limits, security and a quick-start checklist.',
    summary: 'Regular Claude answers questions; Cowork does the work on your own files. This guide covers setup, the folder structure and context files that make it reliable, scheduled tasks, connectors and plugins, and where it should not be used yet.',
    inside: [
      'Chat vs Cowork vs Code, and requirements and installation',
      'The folder structure and three context files that fix the cold start',
      'Connectors, plugins, scheduled tasks, projects and computer use',
      'Use cases for Indian MSMEs and consultants, limitations, security and a quick-start checklist',
    ],
    forWho: 'Owners, CAs, consultants and managers who handle a lot of documents and reports.',
    file: '/downloads/claude-cowork-guide-bizgenix.pdf',
    pages: 26,
    sizeMb: 0.4,
    related: [
      { label: 'Complete Claude AI guide', href: '/resources/complete-claude-ai-guide' },
      { label: 'Scale With AI programme', href: '/scale-with-ai' },
    ],
  },
  {
    slug: 'custom-ai-solutions-brochure',
    kind: 'Brochure',
    title: 'Custom AI Solutions & AI Agents Brochure | Bizgenix AI (PDF)',
    h1: 'Custom software and AI agents, built around how your business works',
    description: 'Download the Bizgenix AI custom solutions brochure: nine kinds of system we build (CRM, ERP, LMS, task management and more), with AI agents inside, and a working prototype on real data in 7–10 working days.',
    summary: 'Ready-made software asks you to change. Custom software changes to fit you. The brochure shows the nine kinds of system Bizgenix AI builds, how AI agents work inside them, and the prototype-first method.',
    inside: ['Where ready-made software fails growing businesses', 'Nine kinds of system, each running at a client today', 'The method: study the business, a working prototype in 7–10 working days, then build with your team'],
    forWho: 'Owners and operations heads whose business has outgrown sheets and off-the-shelf tools.',
    file: '/downloads/custom-ai-solutions-brochure.pdf',
    pages: 13,
    sizeMb: 2.5,
    related: [
      { label: 'Custom AI solutions', href: '/custom-solutions' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    slug: 'bizgenix-ai-crm-brochure',
    kind: 'Brochure',
    title: 'Bizgenix AI CRM Brochure: AI Sales Operating System (PDF)',
    h1: 'Bizgenix AI CRM brochure: from first enquiry to closed deal, in one system',
    description: 'Download the Bizgenix AI CRM brochure: capture leads from every channel, AI calls first, qualify, route and follow up on WhatsApp, with plans and prices.',
    summary: 'Most businesses do not lose customers; they lose track of them. The brochure covers lead capture from every channel, AI-first calling, qualification, routing and follow-up, with the CRM plans and prices.',
    inside: ['Why enquiries go cold in the first hour', 'Capture, AI calls, qualify, route and follow up', 'Plans and prices'],
    forWho: 'Sales heads and owners of businesses with enquiries across WhatsApp, calls, ads and marketplaces.',
    file: '/downloads/bizgenix-ai-crm-brochure.pdf',
    pages: 11,
    sizeMb: 2.2,
    related: [{ label: 'Bizgenix AI CRM', href: '/products/ai-crm' }, { label: 'WhatsApp AI lead follow-up', href: '/blog/whatsapp-ai-lead-follow-up' }],
  },
  {
    slug: 'ai-voice-agent-brochure',
    kind: 'Brochure',
    title: 'AI Voice Agent Brochure: Inbound & Outbound AI Calling (PDF)',
    h1: 'AI Voice Agent brochure: every call answered, every lead called back',
    description: 'Download the Bizgenix AI Voice Agent brochure: inbound and outbound AI calling in Hindi, Gujarati and English, from hello to CRM entry.',
    summary: 'The phone still brings the serious buyers, and it is where they are lost. The brochure shows how the AI Voice Agent answers, calls back and follows up in your customer’s language, and records every call in the CRM.',
    inside: ['Where calls and leads are lost today', 'How a call is handled: call, listen, understand, reply, act', 'Languages, set-up and pricing'],
    forWho: 'Businesses that run on phone enquiries, reminders and follow-up calls.',
    file: '/downloads/ai-voice-agent-brochure.pdf',
    pages: 11,
    sizeMb: 1.8,
    related: [{ label: 'Voice AI', href: '/products/voice-ai' }, { label: 'AI voice agents for Indian businesses', href: '/blog/ai-voice-agents-indian-businesses' }],
  },
  {
    slug: 'scaleos-brochure',
    kind: 'Brochure',
    title: 'ScaleOS Brochure: Business Operating System (PDF)',
    h1: 'ScaleOS brochure: the whole company on one screen',
    description: 'Download the ScaleOS brochure: one record from first enquiry to money in the bank, so tasks, delivery and collections stop running on memory and group chats.',
    summary: 'A growing business runs on sheets, group chats and the owner’s memory. ScaleOS puts prospects, commitments, delivery, retention and collections on one record and one screen.',
    inside: ['The cost of running on sheets and memory', 'One record: prospect, commit, deliver, retain, collect', 'How teams and owners use it'],
    forWho: 'Owner-run companies with growing teams and work that slips between people.',
    file: '/downloads/scaleos-brochure.pdf',
    pages: 10,
    sizeMb: 1.2,
    related: [{ label: 'ScaleOS', href: '/products/scaleos' }, { label: 'All products', href: '/products' }],
  },
  {
    slug: 'bizgenix-ai-company-profile',
    kind: 'Profile',
    title: 'Bizgenix AI Company Profile (PDF)',
    h1: 'Bizgenix AI company profile: advise, build and train',
    description: 'Download the Bizgenix AI company profile: an agentic AI company in Ahmedabad offering custom AI solutions, AI products, AI training and business consulting, with 110+ AI systems built for 60+ organisations.',
    summary: 'Bizgenix AI is an agentic AI company in Ahmedabad that builds the system a business runs on and puts AI agents inside it to do the routine work. The profile covers the four practices, the products, the method and the leadership team.',
    inside: ['The four practices: custom AI, products, training and consulting', 'Products: Growth Intelligence, CRM, Biz Chat, AI Voice Agent and ScaleOS', 'The method and the leadership team'],
    forWho: 'Procurement, partners and anyone evaluating Bizgenix AI as a vendor.',
    file: '/downloads/bizgenix-ai-company-profile.pdf',
    pages: 12,
    sizeMb: 6.2,
    related: [{ label: 'About Bizgenix AI', href: '/about' }, { label: 'Case studies', href: '/case-studies' }],
  },
  {
    slug: 'dr-ca-umang-ratani-profile',
    kind: 'Profile',
    title: 'Dr. CA Umang Ratani: Speaker & Consultant Profile (PDF)',
    h1: 'Dr. CA Umang Ratani: business consultant, AI Business Architect and speaker',
    description: 'Download the profile of Dr. CA Umang Ratani, Founder and CEO of Bizgenix AI: chartered accountant, Virtual CEO to 350+ companies, TEDx speaker and lead trainer of Scale With AI.',
    summary: 'A business consultant who ships working AI. The profile covers his journey, 13+ years inside owner-run businesses, the Virtual CEO model, speaking and training, and today’s work across Bizgenix AI, Scale With AI and Growth Intelligence.',
    inside: ['Qualifications and journey', 'Virtual CEO work and client growth', 'Speaking, training and Scale With AI'],
    forWho: 'Event organisers, associations, HR and L&D teams, and media.',
    file: '/downloads/dr-ca-umang-ratani-profile.pdf',
    pages: 13,
    sizeMb: 10.2,
    related: [{ label: 'Scale With AI', href: '/scale-with-ai' }, { label: 'Corporate AI training', href: '/corporate-ai-training' }],
  },
];

export const resourceBySlug = (slug: string) => resources.find(r => r.slug === slug);
