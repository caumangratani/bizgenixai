// AI education and training guides (owned by Claude; see seo-audit-nov-2026/COORDINATION.md).
// Facts: Scale With AI editions Ahmedabad, Surat, Mumbai, Vadodara (22 Aug 2026), Ahmedabad 5th edition (31 Oct 2026);
// recorded programme ₹15,000 + GST, 12 months' access, 12 modules, Cohort 1 June–September 2026 with 35 members;
// numbers per Team-Brochure-Kit 03-Facts-Numbers-and-Rules (20 Nov 2026). No training prices for corporate programmes. No invented statistics or client results.
import type { Guide } from './content';

const trainingNext = (title: string, text: string): Guide['next'] => ({
  eyebrow: 'TRAIN YOUR TEAM WITH BIZGENIX AI',
  title,
  text,
  primary: { label: 'Plan training for your team', href: '/contact?intent=training#contact-form' },
  secondary: { label: 'Corporate AI training', href: '/corporate-ai-training' },
});

export const trainingGuides: Guide[] = [
  {
    slug: 'corporate-ai-training-plan',
    title: 'Corporate AI Training: How to Plan a Programme That Sticks',
    h1: 'Corporate AI training: how to plan a programme that changes how your teams work',
    description: 'A practical plan for corporate AI training in India: set the outcome, choose who attends, pick formats, write the AI policy first, design role-based sessions and measure what changed afterwards.',
    answer: 'Plan corporate AI training backwards from the work you want done differently. Agree one or two outcomes per department, write a short AI-use policy before the first session, train leaders and departments separately on their own tasks, and finish every session with something participants built and will keep using. Measure what moved to AI 30 days later, not attendance.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['Corporate AI Training', 'AI Workshops', 'Learning and Development'],
    minutes: 8,
    photo: { src: '/training/corporate-room-orange-wall.jpg', alt: 'Dr. CA Umang Ratani leading a corporate AI training session', caption: 'A corporate AI training session led by Dr. CA Umang Ratani.' },
    html: `
<h2>Why most AI training changes nothing</h2>
<p>The common pattern: a company books a two-hour “AI awareness” talk, people enjoy the demos, and a month later nobody works differently. The talk was not wrong. It simply ended at awareness. People went back to the same tasks, the same templates and the same deadlines, with no prompt they trusted, no permission to use the tools and nothing built on their own work.</p>
<p>Training that sticks is designed around three questions: what should people do differently afterwards, what are they allowed to do, and what will they leave the room with.</p>

<h2>Step 1: write the outcome for each team</h2>
<p>Before choosing a trainer or a date, write one or two outcomes per department in plain words. For example:</p>
<ul>
<li><strong>Sales:</strong> every enquiry gets a same-day, personalised reply drafted with AI and checked by the salesperson.</li>
<li><strong>Finance:</strong> the monthly management summary is drafted from the reports, not typed from scratch.</li>
<li><strong>HR:</strong> job descriptions, interview question sets and onboarding checklists come from one tested prompt library.</li>
<li><strong>Operations:</strong> the three most repetitive reports are identified and scoped for automation.</li>
</ul>
<p>If an outcome cannot be written down, the session will drift into a tool tour.</p>

<h2>Step 2: write the AI-use policy first</h2>
<p>People will not use AI at work if they are unsure what they are allowed to paste into it. A one-page policy, agreed before the training, answers that:</p>
<ul>
<li>Which tools are approved, and on which accounts (company or personal)</li>
<li>Which data must never go into a cloud AI tool: client data, salary data, unreleased financials, and so on</li>
<li>When a person must check or approve AI output before it goes out</li>
<li>Who to ask when unsure</li>
</ul>
<p>Good training then teaches inside that policy, including private or local AI options for confidential files where cloud tools are not allowed.</p>

<h2>Step 3: train leaders and departments separately</h2>
<p>Leaders and staff need different sessions.</p>
<ul>
<li><strong>Leadership session:</strong> what AI can do in your business now, where it pays back first, the policy decisions, and how to sponsor adoption. Short and decision-focused.</li>
<li><strong>Role-based workshops:</strong> one per department or function, hands-on, on that team’s real tasks and documents. This is where habits change.</li>
<li><strong>AI champions:</strong> one or two people per team who go deeper, keep the prompt library current and help colleagues. They are the reason adoption survives after the trainer leaves.</li>
</ul>

<h2>Step 4: choose the format</h2>
<p>Online sessions work well for distributed teams and for short follow-ups. In-person or hybrid sessions work better for the first hands-on workshop, because the trainer can see screens and unblock people at their desks. Many organisations combine both: one in-person workshop per department, then shorter online follow-ups.</p>

<h2>Step 5: make every session end with something built</h2>
<p>Each participant should leave with at least one thing they made on their own work: a tested prompt for a weekly task, a Claude or ChatGPT project set up with their department’s context, a draft automation, or a small tool. Ask any trainer to show you what participants built in a previous session.</p>

<p>A shared starting point helps: our free <a href="/resources/ai-prompt-library-for-business">AI prompt library for business</a> has 109 prompts across 12 departments.</p>

<h2>Step 6: measure what changed</h2>
<p>Attendance and feedback scores measure the session, not the result. Thirty days later, ask each team:</p>
<ul>
<li>Which tasks are now done with AI, and how much time does that save each week?</li>
<li>Is the prompt library being used and updated?</li>
<li>Which automation opportunities were shortlisted, and which are worth building?</li>
</ul>

<h2>Choosing a trainer</h2>
<p>Ask whether the trainer implements AI in real businesses, whether sessions will use your own workflows, whether policy and privacy are covered, and what participants leave with. Our <a href="/guides/evaluate-corporate-ai-training">corporate AI training buyer checklist</a> goes through these questions in detail, and CA and accounting firms can start with <a href="/guides/ai-training-for-ca-accounting-firms">AI training for CA firms</a>.</p>

<h2>What drives the cost</h2>
<p>Corporate AI training is priced on the number of participants and sessions, the amount of customisation to your workflows, and whether it is online or on site (on-site training outside the trainer’s city usually adds travel and stay at actuals). Ask for a written agenda and quote after a scoping call rather than a per-head rate on a generic syllabus.</p>

<h2>How Bizgenix AI runs it</h2>
<p>Bizgenix AI’s <a href="/corporate-ai-training">corporate AI training</a> is led by Dr. CA Umang Ratani and follows the steps above: a scoping call, a leadership session, role-based hands-on workshops, department prompt libraries, and a ranked list of automation opportunities. It uses the same build-along method as the public <a href="/scale-with-ai">Scale With AI</a> workshops.</p>
`,
    faqs: [
      ['How long should corporate AI training be?', 'Long enough for each participant to build something on their own work. In practice that means a short leadership session plus a hands-on workshop per department, followed by shorter follow-ups, rather than one long lecture for everyone.'],
      ['Should we train everyone at once?', 'No. Train leaders and departments separately. Mixed groups end up with generic examples that do not fit anyone’s work.'],
      ['Do employees need technical knowledge for AI training?', 'No. Most corporate AI training is for non-technical staff. Teams that want to build can go further into agents and automation later.'],
      ['What should we do before the training?', 'Agree the outcome for each team and write a one-page AI-use policy: approved tools, data that must not be shared, and when a person must check the output.'],
      ['How do we know if AI training worked?', 'Check 30 days later which tasks are now done with AI, whether the prompt library is used, and which automation opportunities are worth building.'],
    ],
    next: trainingNext('Plan AI training around your teams’ real work.', 'Tell us which teams will attend and what they work on. We will propose an agenda, formats and a quote.'),
  },
  {
    slug: 'one-day-ai-workshop-for-business-owners',
    title: 'One-Day AI Workshop for Business Owners: What to Expect',
    h1: 'A one-day AI workshop for business owners: what a good day covers and what you should walk out with',
    description: 'What a useful one-day AI workshop for business owners and professionals looks like: the agenda, what to bring, what you should build during the day, red flags, and your first 30 days afterwards.',
    answer: 'A good one-day AI workshop for business owners is mostly building, not listening. By the end of the day you should have a prompt system for your own work, a working AI agent or automation, a small tool built with AI, and a written plan for the next 90 days. Bring a laptop, a real business problem and the documents you use for it.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['AI Workshop', 'AI Training', 'Business Owners'],
    minutes: 7,
    photo: { src: '/training/scale-with-ai-ahmedabad-laptops.jpg', alt: 'Participants building on laptops during the Scale With AI workshop in Ahmedabad', caption: 'Participants building on their own laptops at Scale With AI, Ahmedabad, October 2026.' },
    html: `
<h2>Who a one-day AI workshop is for</h2>
<p>Business owners, founders, chartered accountants, consultants and managers who already know AI matters but still start every task with a blank chat window. One day will not make you an engineer. It should move you from collecting prompts to running a few AI systems in your own work.</p>

<h2>What a good day covers</h2>
<p>Here is the shape of the agenda we use at <a href="/scale-with-ai">Scale With AI</a>, our one-day workshop for business owners. Whoever you learn from, look for something similar.</p>
<ol>
<li><strong>Prompting that works the same way every time.</strong> A simple structure (role, context, task, format), and how to give AI the context of your business so answers stop being generic.</li>
<li><strong>Choosing the right AI.</strong> When to use ChatGPT, Claude or Gemini, and why one tool is rarely best for everything.</li>
<li><strong>AI for sales and marketing.</strong> Content, follow-up messages and lead qualification drafted with AI and checked by you.</li>
<li><strong>Vibe coding.</strong> Building a small working tool or page by describing it to an AI coding tool, with no coding background.</li>
<li><strong>AI agents and “AI employees”.</strong> What an agent is (a trigger, a brain, tools, memory and rules), and building a first one that drafts, classifies or reminds while you approve.</li>
<li><strong>Your 90-day plan.</strong> Which workflows in your business to automate first, what to buy, what to build, and what to learn next.</li>
</ol>

<h2>What to bring</h2>
<ul>
<li>A laptop with a charger. A phone is not enough for building.</li>
<li>Free accounts on ChatGPT, Claude and Gemini, created before the day. Our free <a href="/resources/ai-dictionary-for-business-owners">AI Dictionary for business owners</a> is a good pre-read.</li>
<li>One real business problem: a report you type every week, enquiries that go cold, a process that depends on one person.</li>
<li>Sample documents for that problem, with anything confidential removed.</li>
</ul>

<h2>What you should walk out with</h2>
<ul>
<li>A reusable prompt system for at least one weekly task</li>
<li>An AI project or assistant set up with your business context</li>
<li>A first agent or automation, even a simple one</li>
<li>A small tool or page you built with AI</li>
<li>A written 90-day plan</li>
</ul>
<p>If you leave with notes and nothing built, the day was a seminar, not a workshop.</p>

<h2>Red flags when choosing a workshop</h2>
<ul>
<li>The agenda is a list of tool names with no build time.</li>
<li>No laptops are required.</li>
<li>The trainer has no examples from real businesses they have worked with.</li>
<li>The main promise is a certificate rather than what you will build.</li>
<li>Everything after the day is an upsell, with no notes, prompts or plan included.</li>
</ul>

<h2>Your first 30 days afterwards</h2>
<ol>
<li><strong>Week 1:</strong> use the prompt system every day on the task you chose. Fix it when it fails.</li>
<li><strong>Week 2:</strong> set up one more AI project for a second task, and share the prompts with one team member.</li>
<li><strong>Week 3:</strong> put your first agent or automation into real use with you approving each output.</li>
<li><strong>Week 4:</strong> review the 90-day plan. Decide what to build next yourself and what to hand to a team or partner.</li>
</ol>

<h2>Where to find one</h2>
<p>Scale With AI, led by Dr. CA Umang Ratani, has run in Ahmedabad, Surat, Mumbai and Vadodara, with a fifth edition at Hyatt Ahmedabad on 31 October 2026. The next date is announced on <a href="https://event.bizgenix.ai/">event.bizgenix.ai</a>. If you cannot attend in person, the full classroom is available as a <a href="https://course.bizgenix.ai/">recorded programme</a>. Companies can book the same method for their teams as <a href="/corporate-ai-training">corporate AI training</a>.</p>
`,
    faqs: [
      ['Can I learn AI in one day?', 'You can learn enough to change how you work: a prompt system, a first agent or automation and a small tool built with AI. Going further takes practice over the following weeks.'],
      ['Do I need coding knowledge for an AI workshop?', 'No. A good business AI workshop assumes no coding. Vibe coding sessions show you how to build by describing what you want.'],
      ['Should I bring my team to an AI workshop?', 'Bring the person who will run the systems day to day. For a whole team, a corporate session built on your own workflows works better.'],
      ['What should I do right after an AI workshop?', 'Use what you built every day for a week, fix what fails, then add one new task or automation per week against your 90-day plan.'],
    ],
    next: trainingNext('Want this day for your own team?', 'Scale With AI runs as public workshops and as private corporate training built on your departments’ real work.'),
  },
  {
    slug: 'how-to-choose-an-ai-course-india',
    title: 'How to Choose an AI Course in India: A Buyer’s Checklist',
    h1: 'How to choose an AI course in India: a checklist for business owners and professionals',
    description: 'A practical checklist for choosing an AI course in India as a business owner, CA, manager or student: who teaches it, live vs recorded, language, what you build, tools covered, access, support and price.',
    answer: 'Choose an AI course by what you will be able to do at the end, not by the number of hours or the certificate. Check that the teacher implements AI in real businesses, that you build working things on your own work, that the language and pace suit you, that the tools are current, and that notes, prompts and support continue after the videos end.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['AI Course', 'AI Education', 'Learning'],
    minutes: 7,
    photo: { src: '/training/group-cohort-demo-day.jpg', alt: 'A Scale With AI cohort group photo after demo day', caption: 'A Scale With AI cohort after its demo day, where members presented what they built.' },
    html: `
<h2>Start with what you want to be able to do</h2>
<p>“Learn AI” is too vague to choose a course. Write one sentence instead: “I want to automate my follow-ups”, “I want to build an internal tool for my team”, “I want to offer AI services to my clients”, “I want a portfolio for interviews.” Then judge every course by whether it gets you there.</p>

<h2>The checklist</h2>
<h3>1. Who teaches it?</h3>
<p>Prefer teachers who implement AI in real businesses over people who only create courses. Ask what they have built for clients recently. Implementation experience shows in the examples: real constraints, real data, real mistakes.</p>

<h3>2. Do you build, or only watch?</h3>
<p>Look at the outcome of each module. “Understand agents” is a watching module. “Build an agent that drafts replies to enquiries” is a building module. A good course for business people is mostly building.</p>

<h3>3. Live, recorded, or both?</h3>
<ul>
<li><strong>Live cohorts</strong> give you accountability, questions answered on the spot and a peer group. They cost more and run on fixed dates.</li>
<li><strong>Recorded programmes</strong> let you start today and go at your own pace. Check whether they are scripted studio videos or a real classroom recorded, and whether notes and support come with them.</li>
</ul>

<h3>4. Language and examples</h3>
<p>Many people in India learn faster in simple Hinglish with Indian business examples (GST, Tally, WhatsApp-first customers, family businesses) than in global examples that do not match their work.</p>

<h3>5. Which tools, and how current?</h3>
<p>AI tools change monthly. A course should explain why to use which tool, not just tour one. Look for coverage of the main assistants (ChatGPT, Claude, Gemini), working with your own files and context, AI coding tools, agents and automation, and private or local models for confidential data.</p>

<h3>6. What comes with each lesson?</h3>
<p>Notes, ready-to-copy prompts, transcripts you can search and workbooks make a course useful months later. Videos alone are hard to revise from.</p>

<h3>7. Access and support</h3>
<p>Check how long access lasts, whether updates are included, and how you get help when stuck.</p>

<h3>8. Price, judged against the outcome</h3>
<p>Compare price with what you will build and the time it saves, not with hours of video. Ask for a GST invoice if the course is a business expense.</p>

<h3>9. Certificate or portfolio?</h3>
<p>A certificate says you attended. A live app, a working agent or a lead engine shows you can deliver. For students and early-career builders especially, a portfolio on a live link speaks louder.</p>

<h2>Questions to ask before you pay</h2>
<ul>
<li>Can I see what previous participants built?</li>
<li>Can I see one full lesson or the detailed curriculum?</li>
<li>Do I need paid AI tools, and which ones?</li>
<li>What happens if I get stuck?</li>
</ul>

<h2>Where Scale With AI fits</h2>
<p><a href="/scale-with-ai">Scale With AI</a> is Bizgenix AI’s programme, led by Dr. CA Umang Ratani. Its Cohort 1 ran live from June to September 2026 with 35 business owners, CAs, managers and students, who built apps, agents and dashboards. That classroom is now a 12-module <a href="https://course.bizgenix.ai/">recorded programme</a> in simple Hinglish, with notes, prompts, quizzes, transcripts and workbooks, at ₹15,000 + GST with 12 months of access. One-day in-person workshops are announced on <a href="https://event.bizgenix.ai/">event.bizgenix.ai</a>, and companies can book <a href="/corporate-ai-training">corporate AI training</a>. Use the checklist above on it as you would on any other course.</p>
`,
    faqs: [
      ['Which AI course is best for business owners in India?', 'One taught by someone who implements AI in Indian businesses, where you build working tools on your own work, in a language and pace that suit you, with notes and support after the videos.'],
      ['Should I choose a live or recorded AI course?', 'Live cohorts give accountability and a peer group; recorded programmes let you start now and go at your pace. Choose recorded only if lessons come with notes, prompts and a way to get help.'],
      ['Do I need a coding background for an AI course?', 'Not for a course designed for business people. Look for one that teaches AI coding tools and agents without assuming programming knowledge.'],
      ['Is an AI certificate worth it?', 'Less than what you build. Working tools, agents and a portfolio on a live link show ability; a certificate shows attendance.'],
    ],
    next: trainingNext('Training a team rather than yourself?', 'We adapt the Scale With AI method to your organisation: leadership sessions and hands-on workshops for each department.'),
  },
  {
    slug: 'ai-training-in-gujarati-for-small-businesses',
    title: 'AI Training in Gujarati for Small Businesses: How to Choose',
    h1: 'AI training in Gujarati for small businesses: how to choose it and what your team should learn',
    description: 'How to find practical AI training in Gujarati for a small business or team in Gujarat: what to check, what to learn first, how ChatGPT, Claude and Gemini handle Gujarati, and where Bizgenix AI trains in Gujarati.',
    answer: 'Choose Gujarati AI training by what your team will build, not by the language alone. Look for a trainer who runs hands-on sessions on your own work, can teach in Gujarati, Hindi or English as the room prefers, and covers prompting, AI for sales and follow-up, safe use of company data and a 30-day plan. Bizgenix AI delivers corporate AI training in English, Hindi or Gujarati.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['AI Training', 'Gujarati', 'Small Business'],
    minutes: 6,
    html: `
<h2>Why the language of the training matters</h2>
<p>Many owners and teams in Gujarat think, sell and keep accounts in Gujarati. Training in English alone loses part of the room: people nod along, then go back to work without trying anything. When the explanations, examples and practice happen in the language people use with customers, they try the tools on their own tasks during the session, and that is when habits change.</p>

<h2>What to check before you book</h2>
<ul>
<li><strong>Can the trainer switch language with the room?</strong> Most teams in Gujarat mix Gujarati, Hindi and English. The best sessions explain in Gujarati and keep tool names and prompts in the form people will actually type.</li>
<li><strong>Is it hands-on?</strong> Participants should work on their own laptop or phone for at least half the time, on their own tasks.</li>
<li><strong>Are the examples local?</strong> GST, Tally, WhatsApp-first customers, dealers and family businesses, not generic global examples.</li>
<li><strong>Does it cover safe use?</strong> What must never be pasted into an AI tool, and when a person must check the output.</li>
<li><strong>What do people leave with?</strong> Tested prompts for their own role and a short plan for the next 30 days.</li>
</ul>

<h2>What a small-business team should learn first</h2>
<ol>
<li><strong>Prompting with context:</strong> telling the AI who you are, who the customer is and what format you want, so answers stop being generic.</li>
<li><strong>Customer communication:</strong> replies, follow-ups, quotations and reminders drafted with AI and checked by the salesperson, in Gujarati or English as the customer prefers.</li>
<li><strong>Reports and data:</strong> turning Excel or Tally exports into summaries the owner can read in two minutes.</li>
<li><strong>Content:</strong> posts, product descriptions and short video scripts for local customers.</li>
<li><strong>Safe use:</strong> which tool and account to use for company data, and what stays out of AI altogether.</li>
</ol>

<h2>How the main AI tools handle Gujarati</h2>
<p>ChatGPT, Claude and Gemini all read and write Gujarati, and accept Gujarati typed in Gujarati script or in English letters. Voice input in Gujarati works on phones for most everyday requests. Two cautions from our sessions: always check numbers, names and legal or tax terms in a Gujarati answer, and for anything that goes to a customer, ask the AI to produce both the Gujarati text and an English version so a second person can check it.</p>

<h2>Where Bizgenix AI trains in Gujarati</h2>
<p>Bizgenix AI is based in Ahmedabad. Our <a href="/corporate-ai-training">corporate AI training</a> is delivered in English, Hindi or Gujarati, whichever the team is most comfortable in, at your office, online or hybrid. Our public <a href="/scale-with-ai">Scale With AI</a> workshops have run in Ahmedabad, Surat and Vadodara as well as Mumbai. The recorded Scale With AI programme is taught in simple Hinglish.</p>
<p>A good first read for your team is our free <a href="/resources/ai-dictionary-for-business-owners">AI Dictionary for Business Owners</a>.</p>
`,
    faqs: [
      ['Is AI training available in Gujarati?', 'Yes. Bizgenix AI in Ahmedabad delivers corporate AI training in English, Hindi or Gujarati, at your office, online or hybrid, built around your team’s own work.'],
      ['Can ChatGPT and Claude understand Gujarati?', 'Yes. ChatGPT, Claude and Gemini read and write Gujarati, in Gujarati script or typed in English letters. Check numbers, names and legal or tax terms before sending anything to a customer.'],
      ['What should a small business learn first about AI?', 'Prompting with business context, AI-drafted customer replies and follow-ups, turning Excel or Tally data into short summaries, and the rules for using company data safely.'],
      ['Where are AI workshops held in Gujarat?', 'Scale With AI by Bizgenix AI has held one-day workshops in Ahmedabad, Surat and Vadodara. Upcoming dates are announced on event.bizgenix.ai.'],
    ],
    next: trainingNext('Want your team trained in Gujarati?', 'Tell us who will attend and what they work on. We will propose an agenda in the language your team prefers.'),
  },
  {
    slug: 'claude-projects-vs-cowork',
    title: 'Claude Projects vs Cowork: Which One to Use for What',
    h1: 'Claude Projects vs Claude Cowork: which one should you use, and for what?',
    description: 'The difference between Claude Projects and Claude Cowork for business users: where each works, what each can touch, examples for owners and teams, and how to use both together.',
    answer: 'Use a Claude Project when you want a conversation that already knows your context: instructions and reference files for one area of work, used in chat. Use Claude Cowork when you want Claude to do a multi-step job on files on your own computer, such as building a spreadsheet from a folder of PDFs or preparing a report. Many teams use Projects for thinking and drafting, and Cowork for finished work on files.',
    date: '2026-11-22',
    updated: '2026-11-22',
    tags: ['Claude', 'AI Tools', 'Productivity'],
    minutes: 6,
    html: `
<h2>The short answer</h2>
<table>
<thead><tr><th></th><th>Claude Projects</th><th>Claude Cowork</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>A workspace in Claude chat with your own instructions and reference files</td><td>An agentic mode in the Claude desktop app that carries out multi-step tasks on your files</td></tr>
<tr><td>Where the work happens</td><td>In the conversation</td><td>In a folder on your computer, plus connected tools</td></tr>
<tr><td>Best for</td><td>Drafting, thinking, answering from a fixed knowledge base</td><td>Finished outputs: spreadsheets, documents, organised files, recurring reports</td></tr>
<tr><td>You get back</td><td>Answers and drafts to copy</td><td>Files saved to your folder</td></tr>
</tbody>
</table>

<h2>When a Project is the right tool</h2>
<p>A Project is a conversation with memory of a job. Put in the instructions once (who you are, your tone, your rules) and the reference files the job needs (price list, SOPs, past proposals), and every chat in that Project starts from them.</p>
<ul>
<li>A sales Project with your price list and proposal template, for drafting quotations and replies</li>
<li>An HR Project with your policies, for answering staff questions and drafting letters</li>
<li>A finance Project with your chart of accounts and MIS format, for explaining variances</li>
</ul>

<h2>When Cowork is the right tool</h2>
<p>Cowork does the work rather than describing it. Point it at a folder and describe the outcome; it reads the files, makes a plan, and saves the result back to the folder.</p>
<ul>
<li>Turn a folder of supplier invoices into one reconciled spreadsheet</li>
<li>Read a month of sales exports and produce the owner’s summary in your format</li>
<li>Rename, sort and file a folder of documents by client and date</li>
<li>Run the same report every Monday as a scheduled task</li>
</ul>

<h2>Cautions</h2>
<ul>
<li>Cowork works on real files: start on copies, in a dedicated folder, until you trust the result.</li>
<li>Keep confidential client or salary data out of any AI tool unless your company account and policy allow it.</li>
<li>Check numbers in any finished file before it leaves the business.</li>
</ul>

<h2>Using both together</h2>
<p>A pattern we teach in <a href="/scale-with-ai">Scale With AI</a>: build the thinking in a Project (the format, the rules, the examples), then hand the repetitive production to Cowork with the same instructions saved in a context file in its folder.</p>
<p>Both are covered in depth in our free guides: the <a href="/resources/complete-claude-ai-guide">Complete Claude AI Guide</a> and the <a href="/resources/claude-cowork-guide">Complete Claude Cowork Guide</a>.</p>
`,
    faqs: [
      ['What is the difference between Claude Projects and Cowork?', 'Projects are chat workspaces with your instructions and reference files, for drafting and answering. Cowork carries out multi-step tasks on files on your computer and saves finished outputs to a folder.'],
      ['Do I need Cowork if I already use Projects?', 'Only if you want finished files produced from your documents, such as spreadsheets or reports, or recurring jobs run on a schedule. For drafting and questions, Projects are enough.'],
      ['Is Claude Cowork safe for business files?', 'Start with copies in a dedicated folder, keep confidential data out unless your company policy allows it, and check outputs before they leave the business.'],
    ],
    next: trainingNext('Want your team using Claude properly?', 'Our corporate AI training covers Projects, Cowork and safe use on your own workflows.'),
  },
];
