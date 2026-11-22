// Personal profile PDF temporarily withdrawn: unresolved client starting figure; preserve original Team-Brochure-Kit source.
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
  /** Chapters or sections, copied from the PDF. */
  toc?: string[];
  /** A few real entries from inside the PDF. */
  sample?: { title: string; text: string }[];
  faqs?: [string, string][];
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
    toc: ["Module 1 · Foundations: what AI really is (concepts 01–07)", "Module 2 · Talking to AI: the input layer (08–14)", "Module 3 · Giving AI knowledge: memory (15–21)", "Module 4 · Giving AI hands: tools and building (22–29)", "Module 5 · Agents: AI that acts (30–36)", "Module 6 · Teams of agents: orchestration and scale (37–41)", "Module 7 · Trust, safety and control (42–46)", "Module 8 · Strategy and money (47–50)"],
    sample: [{"title": "Large Language Model (LLM)", "text": "In one line: a genius autocomplete that has read most of the internet."}, {"title": "Hallucination", "text": "In one line: when AI says something wrong with a totally straight face."}, {"title": "Context engineering", "text": "In one line: putting the right papers on the AI’s desk before it works."}, {"title": "RAG (retrieval-augmented generation)", "text": "In one line: AI that checks your files before it speaks."}, {"title": "Connectors / MCP", "text": "In one line: one universal plug that fits all your tools."}, {"title": "AI agent", "text": "In one line: a worker, not just an advisor."}],
    faqs: [["Is the AI Dictionary free?", "Yes. Fill in the short form on this page and the 32-page PDF downloads straight away."], ["Who is it written for?", "Business owners and managers who are not technical. Each concept is explained with an analogy first and a business use second."], ["What is new in the second edition?", "Sixteen 2026 concepts, including open and local models, deep research, vibe coding, webhooks and scheduled tasks, voice agents, shadow AI and AEO/GEO, plus “the trap” for all 50 concepts."]],
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
    toc: ["01 Sales & Business Development (9 prompts)", "02 Marketing & Content (9)", "03 Finance & Accounting (10)", "04 HR & People Operations (9)", "05 Operations & Execution (9)", "06 Customer Success & Support (9)", "07 Leadership & Strategy (9)", "08 Personal Productivity (9)", "09 AI Deployment & Agent Design (9)", "10 Compliance & Legal, Indian (9)", "11 Vibe Coding & App Building (9)", "12 WhatsApp Playbooks (9)"],
    sample: [{"title": "#001 Lead Qualifier Agent", "text": "When a new enquiry arrives on WhatsApp, a form or email and you want it scored in 60 seconds on budget, timing, authority and problem fit."}, {"title": "#003 Weekly Pipeline Review", "text": "Every Monday morning: prioritise the week in 20 minutes, with one next action per deal and a WhatsApp opener to break the ice."}, {"title": "#004 Objection Handler", "text": "When a prospect pushes back on price, timing or trust: the real objection underneath, three response styles and the next message in under 80 words."}, {"title": "#008 Lost-Deal Autopsy", "text": "A deal just died and you want the truth, not comfort."}],
    faqs: [["How many prompts are in the library?", "109 prompts across 12 departments, each with when to use it, the best model, the prompt and a tweak tip."], ["Do I need coding knowledge?", "No. Every prompt is copy-paste ready; you fill in the parts in [BRACKETS]."], ["Which AI tools does it work with?", "Claude, ChatGPT, Gemini and Perplexity. Each prompt is tagged with the model it works best in."]],
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
    toc: ["What is Claude, and why it matters", "Claude products: chat, desktop, mobile, API", "Claude models: Opus, Sonnet, Haiku", "Pricing plans: free to enterprise", "Claude chat: the starting point", "Extended thinking", "Projects: organised workspaces", "Artifacts: live, interactive outputs", "Memory", "Web search and deep research", "Connectors: link your tools", "Custom styles", "Skills: reusable instruction packs", "Prompting mastery: the complete framework", "Claude for Indian MSMEs and consultants", "30 unusual things you can do with Claude", "Claude vs ChatGPT vs Gemini", "Pro tips and power-user shortcuts", "Anthropic Academy: free courses", "Your 7-day Claude mastery plan"],
    faqs: [["Is the Claude guide free?", "Yes. It is a free 25-page PDF; the download starts after the short form."], ["Is it for beginners?", "Yes. It starts from your first chat and ends with Projects, connectors, skills and a 7-day plan."], ["Does it compare Claude with ChatGPT and Gemini?", "Yes, chapter 17 compares the three for everyday business work."]],
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
    toc: ["What is Claude Cowork?", "Chat vs Cowork vs Code", "Getting started: requirements and installation", "The folder structure that changes everything", "The three context files", "Global instructions", "Stop Claude from guessing", "Connectors", "Plugins", "Scheduled tasks", "Cowork projects", "Dispatch: control from your phone", "Computer use", "Real-world use cases and workflows", "Use cases for Indian MSMEs and consultants", "Limitations and what to watch out for", "Pricing and plans", "Security and privacy", "Tips, tricks and power-user moves", "Quick-start checklist"],
    faqs: [["What is Claude Cowork?", "An agentic mode of the Claude desktop app that carries out multi-step work on files in a folder on your computer and saves the results back to it."], ["How is it different from Claude Projects?", "Projects are chat workspaces for drafting and answering; Cowork produces finished files. See our guide on Claude Projects vs Cowork."], ["Is the guide free?", "Yes, a free 26-page PDF after the short form."]],
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
    toc: ["Ready-made software asks you to change; ours changes to fit you", "Sheets beside the software, modules nobody opens, tools that do not talk", "Nine kinds of system, each running at a client today: LMS, business operating system, task management, CRM and sales, ERP and inventory and more", "How AI agents work inside the system", "The method: study the business, prototype in 7–10 working days, build with your team"],
    faqs: [["What does the custom solutions brochure cover?", "The nine kinds of system Bizgenix AI builds, how AI agents run inside them, and the prototype-first method."], ["How much does a custom AI solution cost?", "Custom work is quoted after a written scope; see our pricing page for how quotes work."]],
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
    toc: ["An enquiry is worth the most in its first hour", "Why leads go cold: scattered, slow, forgotten, invisible", "From first contact to closed deal: capture, AI calls first, qualify, route, follow up", "Plans and prices (CRM only and complete system)", "Add-ons: Biz Chat on WhatsApp and the AI Voice Agent"],
    faqs: [["How much does Bizgenix AI CRM cost?", "CRM only is ₹1,700 a user a month (₹1,300 on a yearly plan); the complete system is ₹2,500 a user a month (₹1,900 yearly), before 18% GST."], ["Does it work with WhatsApp?", "Yes, with Biz Chat as an add-on at ₹50,000 a year."]],
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
    toc: ["The phone still brings the serious buyers, and it is where they are lost", "A phone call handled from hello to CRM entry: call, listen, understand, reply, act", "Unlimited agents, one for each job", "Inbound: every call answered, even after hours", "Outbound: upload a list and the agent calls every number", "One price for the agent; call usage at cost"],
    faqs: [["Which languages does the AI Voice Agent speak?", "Hindi, Gujarati and English; other languages on request."], ["How much does it cost?", "₹1,20,000 a year for the agent, with call minutes and number rental at actuals, before 18% GST."]],
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
    toc: ["A growing business runs on sheets, group chats and the owner’s memory", "One record from first enquiry to money in the bank: prospect, commit, deliver, retain, collect", "Who is doing what, by when, and how well", "What is billed, what is due, and what needs you today", "Ask your business a question", "Subscribe to it, or own it"],
    faqs: [["What is ScaleOS?", "A business operating system that puts sales, tasks, delivery, payments and people on one record and one screen."], ["How is ScaleOS priced?", "As a subscription or as a system you own; pricing is shared after a walkthrough."]],
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
    toc: ["The most expensive work in a business is the work between its systems", "One partner to advise, build and train", "Eight things we build, again and again", "Growth Intelligence and four more platforms built and owned by us", "Proof first: systems in production, with numbers", "Business, finance and technology at one table", "Start small, scale on results"],
    faqs: [["What is in the company profile?", "Bizgenix AI’s four practices, five products, method, production systems with numbers, and leadership."], ["Who should download it?", "Procurement teams, partners and anyone evaluating Bizgenix AI as a vendor."]],
    related: [{ label: 'About Bizgenix AI', href: '/about' }, { label: 'Case studies', href: '/case-studies' }],
  },
];

export const resourceBySlug = (slug: string) => resources.find(r => r.slug === slug);
