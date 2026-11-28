// Answer-first guides written by the Bizgenix AI team.
// Rules: general, verifiable guidance only. No prices that change, no client names or
// results that are not in app/case-studies/content.ts, no claims about Bizgenix products
// beyond app/products/content.ts. Keep `answer` to two or three sentences: it is the
// passage search engines and AI assistants are most likely to quote.

import { tallyFinanceGuides } from './tally-finance';
import { globalGuides } from './global';
import { trainingGuides } from './training';

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  answer: string;
  date: string;
  updated: string;
  tags: string[];
  minutes: number;
  html: string;
  photo?: { src: string; alt: string; caption: string };
  faqs: [string, string][];
  next: { eyebrow: string; title: string; text: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
};

export const guides: Guide[] = [
{
  "slug": "how-to-choose-an-ai-consultant-india",
  "title": "How to Choose an AI Consultant in India | Bizgenix AI",
  "h1": "How to choose an AI consultant in India",
  "description": "Compare AI consulting scope, trial evidence, data access, ownership and running costs. Eight questions to ask before committing to a business AI project.",
  "answer": "Choose an AI consultant by the business problem they can define, the evidence they can demonstrate and the delivery responsibilities they put in writing. Agree a scoped trial, acceptance criteria, data access and recurring costs before committing to a wider implementation.",
  "date": "2026-11-25",
  "updated": "2026-11-25",
  "tags": [
    "AI consulting",
    "Custom AI solutions",
    "Buyer guide"
  ],
  "minutes": 6,
  "html": "<h2>Choose the engagement before choosing the tool</h2><p>An AI trainer, an adviser and a development partner solve different problems. Training helps a team practise tasks with approved tools. Consulting identifies the business problem and tests possible approaches. Development implements an agreed workflow, integrates systems and hands over a supported solution. Your engagement may combine these, but the deliverables should name each part.</p><p>If the problem is unclear, start with a short discovery. If a repeated workflow and its acceptance criteria are already documented, you may be ready for a development partner. If employees have the tools but cannot use them confidently, consider <a href=\"/corporate-ai-training\">corporate AI training</a> first.</p><h2>What should the first phase deliver?</h2><ol><li><strong>A process map:</strong> who receives the input, who checks it, who approves an action and who handles exceptions.</li><li><strong>A baseline:</strong> sample volume, time spent, error types and the reporting period. Record how these were measured.</li><li><strong>A scoped trial:</strong> one workflow, approved sample data and named users. Agree whether the output is a recommendation, a draft or an approved action.</li><li><strong>An acceptance record:</strong> which examples passed, which failed and what remains unresolved.</li><li><strong>A decision:</strong> proceed, revise or stop. A prototype is not proof of production readiness.</li></ol><h2>Eight questions for an AI consulting proposal</h2><ol><li>Which business problem are we solving, and what would count as improvement?</li><li>Can you demonstrate a relevant workflow, including an example that fails?</li><li>Who owns custom deliverables, accounts and data, and what is licensed rather than transferred?</li><li>What are the separate costs of discovery, implementation, hosting, usage and support?</li><li>Which providers process our information, who can access it and how is it retained?</li><li>Which actions require approval, and how do we recover from an incorrect output?</li><li>Who builds, tests and supports the system, and who is accountable on our side?</li><li>What documentation, exports and access do we receive if the engagement ends?</li></ol><h2>A worked evaluation example</h2><p><strong>Illustrative scenario, not a client result:</strong> a distributor wants to reduce the effort needed to prepare quotations. The pilot reads a sample enquiry and drafts a quotation using an approved product list. A salesperson checks every price before sending it.</p><p>Test a normal enquiry, an unknown item, a missing quantity, an outdated price list and a duplicate enquiry. Record whether the system identifies the missing information, uses the approved source and keeps the draft unsent until review. Count accepted drafts and review time separately. A fast but incorrect quotation has not passed.</p><p>Keep the original enquiry, source version, draft, reviewer decision and final action together. This gives the buyer evidence to decide whether the workflow is ready for a wider trial. It does not require a promise of a particular percentage saving.</p><h2>Compare costs over the same scope</h2><p>A low build quote can exclude work that another quote includes. Compare discovery, setup, integrations, testing, migration, training and handover line by line. Then compare recurring software, hosting, model usage, messaging, phone rental and support. Specify the usage assumptions and what happens when those assumptions change.</p><p>Ask for the support boundary in writing: defect correction, new requirements and third-party changes are different work. Agree payment milestones and acceptance evidence in the contract. Do not assume that a standard software subscription transfers ownership of the software.</p><h2>Warning signs worth investigating</h2><ul><li>A saving or revenue increase is guaranteed before anyone has checked a baseline.</li><li>The proposal lists tools but no business owner, acceptance criteria or exception handling.</li><li>The demonstration shows only successful examples and excludes human review.</li><li>Data access, recurring charges or exit arrangements remain unclear.</li><li>A small prototype is described as a fully deployed, reliable system without operational testing.</li></ul><h2>Where Bizgenix AI fits</h2><p>Umang Ratani and the Bizgenix AI team work across consulting, custom solutions, products and corporate training. Start with the decision or workflow your business needs to improve. The team can discuss the appropriate scope before recommending a product or a build.</p><p>Review our <a href=\"/ai-consulting\">AI consulting approach</a> and <a href=\"/custom-solutions\">custom AI solutions</a>. For a defined implementation, use the separate <a href=\"/guides/hire-ai-development-company-india\">development-partner checklist</a>. For delivery acceptance, use the <a href=\"/guides/evaluate-ai-automation-pilot\">AI pilot checklist</a>. These guides address different stages of the buying decision.</p>",
  "faqs": [
    [
      "Do we need training, consulting or development?",
      "Training builds team skills; consulting clarifies the problem and approach; development implements an agreed solution. Name the deliverables needed before comparing suppliers."
    ],
    [
      "Should a consultant guarantee savings?",
      "Require a measured baseline and a trial before accepting a savings claim. Define the measurement period and include review, maintenance and usage costs."
    ],
    [
      "Who should own the software and accounts?",
      "Specify custom-deliverable ownership, third-party licences, account access and exit arrangements in the agreement. Subscription software and custom code can have different ownership terms."
    ],
    [
      "What should we bring to the first discussion?",
      "Bring one workflow, its business owner, anonymised examples, known failure cases and the systems involved. Describe the desired decision or action rather than only naming an AI tool."
    ]
  ],
  "next": {
    "eyebrow": "AI consulting by Bizgenix AI",
    "title": "Start with one workflow worth improving.",
    "text": "Share the current process, the people involved and the outcome you want. We will discuss an appropriate assessment scope.",
    "primary": {
      "label": "Discuss your AI project",
      "href": "/contact?intent=custom#contact-form"
    },
    "secondary": {
      "label": "Explore custom solutions",
      "href": "/custom-solutions"
    }
  }
},
{
  "slug": "tally-connector-business-dashboard",
  "title": "Tally Connector to Business Dashboard: Setup Checklist | Bizgenix AI",
  "h1": "From Tally connector to business dashboard: what should you verify?",
  "description": "Understand how a Tally connector supports a business dashboard. Check company scope, sync freshness, source reconciliation and read-only access before rollout.",
  "answer": "A Tally connector moves selected accounting data into another application; a useful business dashboard must also preserve company, reporting period and refresh context. Before relying on it, compare key balances with Tally and check how it handles incomplete or stale data.",
  "date": "2026-11-22",
  "updated": "2026-11-22",
  "tags": [
    "Tally connector",
    "Business dashboard",
    "Growth Intelligence"
  ],
  "minutes": 5,
  "html": "<h2>A connection is the beginning, not the finished dashboard</h2><p>An owner asking “who owes us money?” needs more than a successful connection message. The answer depends on the selected company, the reporting date, receipt allocation and which invoices were included. A dashboard can look current even when the last successful data transfer is old. Start the evaluation with those questions rather than with the chart design.</p><h2>What a Tally connector actually does</h2><p>TallyPrime supports data exchange with external applications, including XML over HTTP. That interface can support different operations; it does not make every third-party connector read-only. The integration must limit the operations it performs. See <a href=\"https://help.tallysolutions.com/xml-integration/\">Tally’s XML integration documentation</a> for the underlying mechanism.</p><p>Growth Intelligence by Bizgenix AI is designed to sit beside Tally as a decision-support layer. Its documented connector reads accounting data into GI; it does not post, alter or delete entries in Tally. Confirm the supported version, deployment and company setup with the team before connecting your own records.</p><h2>A practical acceptance checklist</h2><ol><li><strong>Company and period:</strong> select the intended company and agree whether a figure is a period movement or a closing balance.</li><li><strong>Refresh:</strong> show the last successful sync and what happens when Tally is unavailable.</li><li><strong>Reconciliation:</strong> compare an agreed set of balances and underlying entries with the same period in Tally.</li><li><strong>Exceptions:</strong> include a partial receipt, a credit adjustment and missing bill-wise information in the review.</li><li><strong>Access:</strong> test the intended roles and make sure another company is not visible.</li><li><strong>Failure handling:</strong> identify partial imports, failed transfers and records requiring review before using the dashboard.</li></ol><h2>What happens when Tally is closed?</h2><p>The GI product documentation describes working from the last successful sync. Treat that as a dated snapshot, not a live view of the books. A later receipt cannot appear until the relevant data has been transferred successfully. The implementation team should demonstrate the visible timestamp and the recovery process when the source becomes available again.</p><h2>Choose the first business question</h2><p>For collections, begin with outstanding invoices and the next follow-up owner. For stock, begin with the period, valuation basis and missing item data. For a management review, agree the reports and definitions with your finance team. Start with a small authorised sample and a written acceptance result before expanding access.</p><p>A reminder sent from a workflow is not proof that a payment arrived. A dashboard estimate is not an accounting adjustment. Keep the source fact, proposed action, approval and later observed result separate.</p><h2>Build on the connection</h2><p>Use the <a href=\"/guides/tally-receivables-dashboard-checklist\">receivables dashboard checklist</a>, the <a href=\"/guides/mis-report-in-tally\">Tally MIS guide</a> and the <a href=\"/guides/tally-mcp-ai-assistant\">Tally and MCP explanation</a> to evaluate the next layer. Umang Ratani and the Bizgenix AI team can review the management question and the scope for <a href=\"/products/growth-intelligence\">Growth Intelligence</a>.</p>",
  "faqs": [
    [
      "Does connecting a dashboard change our Tally books?",
      "GI is designed for read-only Tally access. Verify the deployed connector and permitted operations; the underlying Tally integration interface is not inherently limited to reading."
    ],
    [
      "Is the dashboard live when Tally is closed?",
      "GI works from the last successful sync. Check its timestamp and do not assume that later entries are already included."
    ],
    [
      "What should we verify first?",
      "The company, reporting period, last successful sync and reconciliation of selected balances to source entries."
    ]
  ],
  "next": {
    "eyebrow": "Growth Intelligence by Bizgenix AI",
    "title": "Start with one question from your business.",
    "text": "Share your Tally setup and the decision you want to improve. We will confirm the supported configuration and demonstrate the workflow.",
    "primary": {
      "label": "Discuss a Growth Intelligence demo",
      "href": "/contact?intent=product&product=growth-intelligence#contact-form"
    },
    "secondary": {
      "label": "Explore Growth Intelligence",
      "href": "/products/growth-intelligence"
    }
  }
},
{
  "slug": "tally-mcp-ai-assistant",
  "title": "Tally with MCP: AI Assistant Access Explained | Bizgenix AI",
  "h1": "Tally with MCP: how an AI assistant can work with accounting context",
  "description": "Understand Tally connectors versus MCP, company-scoped AI access, synced snapshots and the questions to ask before using an assistant with accounting data.",
  "answer": "MCP is a standard way for an AI application to access tools and context supplied by a server. In a Tally-to-GI workflow, the Tally connector supplies accounting data to GI and a separately authorised MCP connection can expose supported GI tools to an assistant; these are two different connections.",
  "date": "2026-11-22",
  "updated": "2026-11-22",
  "tags": [
    "Tally",
    "MCP",
    "AI accounting"
  ],
  "minutes": 5,
  "html": "<h2>There are two connections to understand</h2><p>The first moves selected data from Tally into Growth Intelligence. The second lets an AI application request supported information from GI. Calling both a “Tally connector” hides important differences: one concerns accounting data transfer, while the other concerns which questions or actions an assistant can request.</p><p>The <a href=\"https://modelcontextprotocol.io/docs/learn/architecture\">official MCP architecture</a> describes servers that expose tools and context to AI applications. MCP does not itself decide whether accounting records can be edited. Actual capabilities and access controls depend on the server implementation and the authorised connection.</p><h2>The GI workflow in plain language</h2><ol><li>The selected Tally company is connected to GI using the supported data setup.</li><li>GI receives a snapshot and retains the company and reporting context.</li><li>An authorised AI application connects to the supported GI MCP service.</li><li>The assistant requests an available tool and uses its result to answer the user.</li><li>The user checks the company, source period, freshness and any missing-data limitations.</li></ol><p>GI’s implementation documentation describes MCP access to synced GI data, not direct live queries against the Tally application. Availability depends on the deployed GI release, your permissions and the AI application’s connection support. Ask for a demonstration in your intended setup before purchasing on the assumption that a particular assistant is already connected.</p><h2>Questions worth testing in a demonstration</h2><ul><li>Which company am I authorised to access?</li><li>What reporting period and successful sync does this answer use?</li><li>Can you show the source entries behind this balance?</li><li>Which information is missing or needs review?</li><li>Does the result describe an accounting fact, a draft or a planning scenario?</li></ul><p>These are evaluation prompts, not a guarantee that every deployed tool supports every question. Ask the team to show the actual tools available to your account. If the assistant cannot obtain a source result, it should state that limitation rather than invent a company, balance or explanation.</p><h2>Reading, drafting and posting are different</h2><p>A read-only connection can still help a user inspect records and prepare analysis. A proposed entry or a document prepared from source data is not proof that a transaction was posted. GI’s documented MCP design does not post transactions to Tally. Do not infer write permission from an assistant producing a convincing-looking answer or draft.</p><h2>Keep access narrow and reviewable</h2><p>Agree the company scope, user permissions, expiry and revocation process. Use an authorised sample when demonstrating access. Confirm how the AI provider handles data and what the implementation logs. For actions involving other people or external systems, confirm the available approval controls separately from access to accounting information.</p><h2>Where this helps a business owner</h2><p>An assistant can make a supported report easier to explore through follow-up questions. It does not remove the need for reconciled data, clear definitions or finance review. Start with the <a href=\"/guides/tally-connector-business-dashboard\">connector acceptance checklist</a> and <a href=\"/guides/finance-dashboard-owner-review\">owner’s finance dashboard checklist</a>. For the relevant GI configuration, <a href=\"/products/growth-intelligence\">discuss Growth Intelligence with Bizgenix AI</a>.</p>",
  "faqs": [
    [
      "Is MCP the same as a Tally connector?",
      "No. The Tally connector transfers accounting data. MCP provides a standard interface through which an AI application can request tools and context from a server."
    ],
    [
      "Does GI MCP query live Tally data?",
      "The implementation documentation describes answers from the latest synced GI snapshot. Confirm its timestamp and your deployed version."
    ],
    [
      "Can an assistant post vouchers through this connection?",
      "GI’s documented MCP design does not post transactions to Tally. A draft or source copy must not be mistaken for a posted transaction."
    ]
  ],
  "next": {
    "eyebrow": "Growth Intelligence by Bizgenix AI",
    "title": "Start with one question from your business.",
    "text": "Share your Tally setup and the decision you want to improve. We will confirm the supported configuration and demonstrate the workflow.",
    "primary": {
      "label": "Discuss a Growth Intelligence demo",
      "href": "/contact?intent=product&product=growth-intelligence#contact-form"
    },
    "secondary": {
      "label": "Explore Growth Intelligence",
      "href": "/products/growth-intelligence"
    }
  }
},
{
  "slug": "chief-value-officer-ai-finance",
  "title": "Chief Value Officer vs CFO: AI Decision Support | Bizgenix AI",
  "h1": "What is an AI Chief Value Officer, and how does it support a CFO?",
  "description": "Explore the Chief Value Officer concept behind Growth Intelligence: evidence, prioritised business decisions, human approvals and measured follow-through.",
  "answer": "Bizgenix uses Chief Value Officer, or CVO, to describe Growth Intelligence’s owner-focused decision-support role. The aim is to connect business signals with decisions and follow-through; it is software support for owners and finance teams, not a replacement for a human CFO, CA or auditor.",
  "date": "2026-11-22",
  "updated": "2026-11-22",
  "tags": [
    "Chief Value Officer",
    "CFO",
    "Growth Intelligence"
  ],
  "minutes": 5,
  "html": "<h2>Why another dashboard may not solve the problem</h2><p>A monthly pack may show outstanding invoices, stock and expenses without answering the owner’s next question: what should we review first, who owns it and how will we know something changed? The CVO concept starts with that decision process. It should help connect an observed issue to an accountable next step.</p><h2>CFO, virtual CFO and CVO are not interchangeable</h2><p>A human CFO or finance adviser can take responsibility for judgement, planning and coordination within an agreed professional engagement. A virtual CFO is a service-delivery model for that human expertise. In GI’s product language, CVO means Chief Value Officer: AI-assisted decision support around the business records and priorities. It does not create a statutory office or transfer professional responsibility to software.</p><p>Read the separate <a href=\"/guides/virtual-cfo\">virtual CFO guide</a> when evaluating an advisory engagement. A business can use software and an adviser together, with clear ownership of the decisions each supports.</p><h2>Use an evidence-to-action cycle</h2><ol><li><strong>Observe:</strong> identify a movement or exception from a named source and reporting period.</li><li><strong>Explain:</strong> distinguish what the records demonstrate from possible causes that still need investigation.</li><li><strong>Prioritise:</strong> compare urgency, value at stake and confidence in the underlying information.</li><li><strong>Decide:</strong> assign an owner and obtain the required approval.</li><li><strong>Follow through:</strong> track the action and review later evidence of the result.</li></ol><p>This is the operating approach described in the Growth Intelligence brochure. Confirm which workflows are enabled in your release and plan; some product capabilities are labelled as rolling out.</p><h2>Keep different kinds of value separate</h2><p>Cash released from outstanding invoices, a recurring expense reduction and a new sales opportunity are different measures. Adding them into one “value created” figure can mislead the review. For each item, record the definition, period, baseline and evidence required to confirm an outcome. An expected receipt is not money in the bank, and a reminder sent is not a collection.</p><h2>What AI can contribute</h2><p>AI can help organise a review, explain a supported result in plain language and prepare questions for the responsible team. It can also produce a plausible explanation that the records do not support. Require source references, visible limitations and human review for consequential decisions. If a required balance or data field is missing, the right next step may be to fix the records rather than issue advice.</p><h2>A useful weekly review</h2><p>Choose a small number of issues, state the evidence and decide the next action. For each, record an owner, a due date and a measure of completion. At the next review, ask what was done and what the records now show. Keep rejected proposals and unresolved data questions visible instead of silently treating them as completed work.</p><p><a href=\"/products/growth-intelligence\">Growth Intelligence by Bizgenix AI</a>, founded by Umang Ratani, brings this positioning to Tally-connected business analysis. Start with the <a href=\"/guides/finance-dashboard-owner-review\">finance dashboard review checklist</a> and use your own business question in a scoped demonstration.</p>",
  "faqs": [
    [
      "What does CVO mean in Growth Intelligence?",
      "Chief Value Officer: Bizgenix’s term for owner-focused AI decision support that connects evidence, priorities and follow-through."
    ],
    [
      "Does GI replace a CFO or accountant?",
      "No. Software supports analysis and workflows. Human professionals remain responsible for the judgement and work covered by their engagement."
    ],
    [
      "Can every recommendation be counted as a saving?",
      "No. Proposed value, approved actions and verified outcomes are different states. Record the baseline, time period and evidence before claiming a result."
    ]
  ],
  "next": {
    "eyebrow": "Growth Intelligence by Bizgenix AI",
    "title": "Start with one question from your business.",
    "text": "Share your Tally setup and the decision you want to improve. We will confirm the supported configuration and demonstrate the workflow.",
    "primary": {
      "label": "Discuss a Growth Intelligence demo",
      "href": "/contact?intent=product&product=growth-intelligence#contact-form"
    },
    "secondary": {
      "label": "Explore Growth Intelligence",
      "href": "/products/growth-intelligence"
    }
  }
},
{
  "slug": "finance-dashboard-owner-review",
  "title": "Finance Dashboard for Tally Businesses: Owner Checklist | Bizgenix AI",
  "h1": "What should a business owner review in a finance dashboard?",
  "description": "A practical finance-dashboard review covering cash, receivables, payables, stock, margins and source evidence for Tally-based businesses.",
  "answer": "A useful finance dashboard shows the company, period and data refresh alongside the numbers. Review cash, receivables, payables, stock and operating performance with clear definitions, then record the questions, owners and actions that follow; charts alone do not establish financial health.",
  "date": "2026-11-22",
  "updated": "2026-11-22",
  "tags": [
    "Finance dashboard",
    "Tally",
    "Business analysis"
  ],
  "minutes": 5,
  "html": "<h2>Begin with the basis of the report</h2><p>Before discussing a movement, confirm the company, date range and last successful refresh. Check whether the report shows transactions during a period or balances at a point in time. Comparisons should use consistent definitions and comparable periods. Ask the finance team to identify adjustments or missing records that could change the interpretation.</p><h2>Six review areas and the questions they raise</h2><ul><li><strong>Cash and bank:</strong> which balances are available, and which payments are already committed?</li><li><strong>Receivables:</strong> what is outstanding, what is overdue and what is disputed or awaiting allocation?</li><li><strong>Payables:</strong> which obligations fall due, and who will confirm the payment plan?</li><li><strong>Stock:</strong> what quantities and values are recorded, and which items need an operational review?</li><li><strong>Sales and margins:</strong> what changed in the period, and are the underlying classifications comparable?</li><li><strong>Expenses:</strong> which movements need an explanation from the responsible owner?</li></ul><p>These questions are a management-review checklist, not a prescribed financial conclusion. Whether an increase is helpful or problematic depends on the business and the supporting records.</p><h2>Separate profit from cash</h2><p>A sale and its later collection can occur in different periods. A useful review therefore considers both operating results and the timing of receipts and payments. Do not label an expected receipt as available cash. When planning ahead, label assumptions explicitly and keep the scenario separate from recorded balances.</p><h2>Trace a sample before trusting the summary</h2><p>Select a material balance and inspect the records behind it. Ask what happens with a partial payment, credit adjustment, cancelled transaction or unavailable field. If the dashboard cannot support an explanation, record the limitation. A confident AI summary should not override an unreconciled number.</p><h2>Turn the review into an action list</h2><p>For each issue, record the question, responsible person, next action and review date. For collections, this might mean confirming a disputed invoice before preparing a reminder. For stock, it might mean checking the physical or operational reason for a slow-moving item. Keep a planned action separate from completion, and completion separate from an independently verified financial result.</p><h2>Evaluate AI help on the same standard</h2><p>Ask the assistant to name the source period, explain the calculation basis and show missing information. Use the output to prepare the management conversation, then have the responsible person review it. If an assistant is connected through <a href=\"/guides/tally-mcp-ai-assistant\">MCP</a>, a successful connection still does not establish the accuracy or freshness of the accounting data.</p><h2>Where to start with Growth Intelligence</h2><p>Choose one recurring management question and demonstrate it using an authorised sample. <a href=\"/products/growth-intelligence\">Growth Intelligence by Bizgenix AI</a> is positioned as a Tally-connected decision-support layer, with a <a href=\"/guides/chief-value-officer-ai-finance\">Chief Value Officer approach</a> to priorities and follow-through. Confirm current capabilities and the data required for your workflow.</p><p>Continue with the <a href=\"/guides/mis-report-in-tally\">MIS reporting guide</a>, <a href=\"/guides/tally-receivables-dashboard-checklist\">receivables checklist</a> and <a href=\"/guides/tally-connector-business-dashboard\">connector acceptance checklist</a>. Keep a dated review note so later discussions compare evidence rather than recollections.</p>",
  "faqs": [
    [
      "What is the first thing to check in a finance dashboard?",
      "The company, reporting period, last successful refresh and whether the figures reconcile to source records."
    ],
    [
      "Can AI explain every movement correctly?",
      "Do not assume so. Ask for the source, calculation basis and missing information, and have the responsible finance or business owner review the explanation."
    ],
    [
      "Is a cash forecast the same as a recorded bank balance?",
      "No. A forecast contains assumptions about future receipts and payments. Keep it separate from recorded balances and confirmed receipts."
    ]
  ],
  "next": {
    "eyebrow": "Growth Intelligence by Bizgenix AI",
    "title": "Start with one question from your business.",
    "text": "Share your Tally setup and the decision you want to improve. We will confirm the supported configuration and demonstrate the workflow.",
    "primary": {
      "label": "Discuss a Growth Intelligence demo",
      "href": "/contact?intent=product&product=growth-intelligence#contact-form"
    },
    "secondary": {
      "label": "Explore Growth Intelligence",
      "href": "/products/growth-intelligence"
    }
  }
},
{
  "slug": "compare-ai-sales-automation-costs",
  "title": "CRM, WhatsApp and Voice AI Costs: Buyer Checklist | Bizgenix AI",
  "h1": "How do you compare the full cost of AI sales automation?",
  "description": "Compare CRM subscriptions, WhatsApp messaging, voice AI usage, integrations and support. Build a realistic sales-automation pilot budget.",
  "answer": "Compare AI sales automation using the same team size, workflow and expected usage. Separate the software subscription from setup, integration, support, calling and messaging charges, then test whether the workflow produces correctly recorded and human-qualified opportunities.",
  "date": "2026-11-22",
  "updated": "2026-11-22",
  "tags": [
    "AI CRM",
    "WhatsApp automation",
    "Voice AI"
  ],
  "minutes": 4,
  "html": "<h2>Start with one sales workflow</h2><p>Write down where an enquiry arrives, who owns it, how it is followed up and where its outcome is recorded. A shared inbox, an AI calling workflow and a CRM may solve different parts of that process. Compare the configuration you need rather than the longest feature list.</p><h2>Ask for six separate cost lines</h2><ol><li>Software: users, subscription term and package.</li><li>Setup: migration, number setup, scripts and team onboarding.</li><li>Integrations: which sources and systems are included.</li><li>Usage: calling minutes, message categories and any other metered services.</li><li>Support: included period, ongoing support scope and renewal terms.</li><li>Other charges: number rental, applicable taxes and optional services.</li></ol><p>Ask what changes if the team grows or usage exceeds the pilot estimate. Get the billing unit and exclusions in writing.</p><h2>Build a usage estimate you can inspect</h2><p>For calling, estimate connected calls multiplied by average billable minutes and the confirmed minute rate. Check how partial minutes, retries and unsuccessful calls are treated. For messaging, list the expected message types and destinations, then use the applicable provider rates. Keep subscription and rental separate from variable usage.</p><h2>Compare the pilot with a baseline</h2><p>Record unassigned enquiries, missed next actions and time spent reviewing records before the pilot. During the pilot, inspect a sample from each source and confirm that duplicates, failed messages and hand-offs are visible. A successful demonstration is not proof that every integration is ready for production.</p><h2>Measure qualified opportunities separately</h2><p>Use a consistent sales-review definition: a business that fits your offering, a specific requirement and an agreed next step. Track enquiry, human qualification, meeting, proposal and won customer as different stages. Keep test submissions and spam out of the sales totals. Calculate cost per qualified lead only when the relevant spend and qualification records are available for the same scope.</p><h2>Choose the right starting point</h2><p>Explore <a href=\"/products/ai-crm\">Bizgenix AI CRM</a> for lead ownership and sales stages, <a href=\"/products/bizchat\">BizChat</a> for shared WhatsApp workflows, and <a href=\"/products/voice-ai\">Voice AI</a> for calling workflows. Bizgenix AI, founded by Umang Ratani, can review whether a standard configuration or <a href=\"/custom-solutions\">custom solution</a> fits the process. Confirm current pricing and included scope in a written quote.</p><p>Use the <a href=\"/guides/evaluate-ai-automation-pilot\">AI pilot acceptance checklist</a> to define the evidence you need before expanding.</p>",
  "faqs": [
    [
      "Does an annual subscription include unlimited usage?",
      "Do not assume it does. Confirm calling, messaging, rental, integrations and support separately in the written quote."
    ],
    [
      "Is an AI lead score the same as a qualified lead?",
      "No. A score is a prioritisation signal. A salesperson should confirm fit, a real requirement and the next step before marking an enquiry qualified."
    ],
    [
      "Which numbers should we review after a pilot?",
      "Review data capture, assignment, failed actions, human-qualified opportunities and actual usage charges. Keep meetings, proposals and wins as separate outcomes."
    ]
  ],
  "next": {
    "eyebrow": "Plan your pilot",
    "title": "Bring one sales workflow.",
    "text": "Share team size, lead sources and the follow-up problem you want to solve.",
    "primary": {
      "label": "Discuss the right configuration",
      "href": "/contact"
    },
    "secondary": {
      "label": "Explore products",
      "href": "/products"
    }
  }
},
{
  "slug": "evaluate-corporate-ai-training",
  "title": "Corporate AI Training: A Buyer Checklist | Bizgenix AI",
  "h1": "How should you evaluate corporate AI training?",
  "description": "Choose corporate AI training by role, workflow, safe practice and assessment. A practical checklist for business owners and learning teams.",
  "answer": "Choose corporate AI training around a specific work task and the people responsible for it. Agree the practice exercise, safe data rules, output-quality checks and post-training assessment before comparing providers or booking a programme.",
  "date": "2026-11-22",
  "updated": "2026-11-22",
  "tags": [
    "Corporate AI training",
    "AI adoption",
    "Buyer guide"
  ],
  "minutes": 4,
  "html": "<h2>Start with the task, not the tool list</h2><p>A sales team preparing meeting notes, a finance team explaining a variance and an operations team drafting a standard procedure need different exercises. Write down the task, its current inputs, who reviews the result and what a useful output looks like. A long list of tools does not establish that participants will be able to complete that work.</p><h2>Prepare a short training brief</h2><ul><li>Roles attending and their current level of familiarity with AI.</li><li>One representative workflow and an anonymised example.</li><li>Approved tools, account access and any restrictions on business data.</li><li>Expected output and the person who will check it.</li><li>Delivery format, time available and accessibility needs.</li></ul><p>Provide sample material without confidential client details. Agree a secure process before any sensitive information is used.</p><h2>Ask the provider to demonstrate the exercise</h2><p>Request a sample agenda showing time for instruction, practice and review. Ask how an instructor handles an incorrect answer, missing source or unsuitable recommendation. Participants should learn how to verify outputs and decide when not to use AI, as well as how to write a prompt.</p><h2>Use an assessment that reflects the work</h2><p>Give participants a comparable task before and after the programme. Review accuracy, completeness, appropriate source use and required corrections. Record time only when the start and end conditions are comparable. Faster completion is not a useful improvement if it introduces errors or creates more review work.</p><h2>Separate training from implementation</h2><p>A workshop can teach a process, but a production integration may also need software development, access controls, data preparation and testing. Ask which deliverables belong to the training engagement and which require a separate implementation scope. Avoid treating a classroom demonstration as a deployed system.</p><h2>Plan adoption before the session</h2><p>Choose an internal owner, maintain approved examples and schedule a review of actual work samples. Record questions and failure cases so the team can improve its instructions. Agree any follow-up support with the provider explicitly rather than assuming it is included.</p><h2>Seven questions to ask before booking</h2><ol><li>Which roles and tasks does this programme address?</li><li>What will each participant produce during practice?</li><li>Which accounts or licences must we arrange?</li><li>How will confidential data be handled?</li><li>How will output quality be checked?</li><li>What is included in follow-up support?</li><li>What would require a separate implementation project?</li></ol><h2>Discuss your requirements with Bizgenix AI</h2><p>Bizgenix AI offers corporate AI training and practical workshops alongside AI consulting and custom solutions. Umang Ratani is the founder of Bizgenix AI. Use the <a href=\"/courses#corporate-training\">training page</a> to explore formats and real session photographs, or read the <a href=\"/guides/ai-training-for-ca-accounting-firms\">guide for CA and accounting firms</a>. Scope, timing and commercial terms are agreed after reviewing your requirements.</p>",
  "faqs": [
    [
      "How do we measure whether AI training worked?",
      "Compare representative work samples before and after training using agreed checks for accuracy, completeness, review effort and appropriate data handling. Attendance alone does not demonstrate adoption."
    ],
    [
      "Does a workshop include production automation?",
      "Not necessarily. Confirm the training deliverables and separately scope any integration, software development or production deployment."
    ],
    [
      "Can teams practise without client data?",
      "Yes. Use fictional or anonymised examples and approved tools. Agree a secure process before sharing confidential information."
    ]
  ],
  "next": {
    "eyebrow": "PLAN YOUR TEAM PROGRAMME",
    "title": "Discuss corporate AI training",
    "text": "Tell us the roles attending, your current tools and one workflow you want to improve.",
    "primary": {
      "label": "Discuss team training",
      "href": "/contact?intent=training#contact-form"
    },
    "secondary": {
      "label": "Explore training formats",
      "href": "/courses"
    }
  }
},
{
  "slug": "whatsapp-crm-for-indian-sales-teams",
  "title": "WhatsApp CRM for Indian Sales Teams: A Practical Guide",
  "h1": "How should an Indian sales team choose a WhatsApp CRM?",
  "description": "A practical WhatsApp CRM checklist: lead ownership, supported integrations, rollout, messaging controls and qualified-opportunity measurement.",
  "answer": "A WhatsApp-connected CRM should help a sales team keep customer conversations, lead ownership and next actions together. Before buying, confirm the capabilities supported for your business number and lead sources, then test the complete workflow with a small pilot.",
  "date": "2026-11-18",
  "updated": "2026-11-18",
  "tags": [
    "CRM",
    "WhatsApp",
    "Sales operations"
  ],
  "minutes": 6,
  "html": "<h2>The problem: a conversation without an owner</h2><p>When customer conversations sit across individual phones and spreadsheets, a sales manager can struggle to see who should reply next. A quotation may have been sent, but its follow-up date and responsible person may be missing. The goal is a shared record of the work, not simply more messages.</p><h2>What a WhatsApp CRM should help you manage</h2><p>A WhatsApp-connected CRM combines customer records and sales stages with supported messaging workflows. Features differ between products and configurations. Ask which conversations can be shared, what history is retained and which channels require a separate integration.</p><ol><li><strong>Capture:</strong> record the enquiry and its source. List website, advertising, marketplace, referral and offline sources separately; do not assume every source connects automatically.</li><li><strong>Assign:</strong> give each active lead a named owner and a handover route when that person is unavailable.</li><li><strong>Track:</strong> keep the stage, last meaningful interaction and next action together.</li><li><strong>Follow up:</strong> distinguish a suggested reply, an approved message, a sent message and a customer response.</li><li><strong>Review:</strong> report useful business outcomes from agreed definitions rather than counting messages as sales.</li></ol><h2>Prepare three things before choosing software</h2><h3>1. Write the stages on one page</h3><p>A B2B services example is enquiry → discovery call → proposal → decision. A manufacturing example is dealer enquiry → quotation → follow-up → order. These are illustrative workflows, not required stages. Agree what evidence moves a lead between stages and who maintains the record.</p><h3>2. Map your lead sources</h3><p>For each source, record where the enquiry arrives today, who sees it, which fields are available and how duplicate enquiries are handled. Test the route from source to assigned owner. A connector shown in a presentation is not proof that your particular account is connected.</p><h3>3. Agree number ownership and team access</h3><p>Choose the business number and confirm who controls it. If customers currently contact personal numbers, plan the transition and check what conversation history can actually be retained. Define who may view, export or change records and what happens when a team member leaves.</p><h2>A phased rollout checklist</h2><p>Use this sequence as planning guidance, not a promised onboarding duration. Timing depends on your data, number setup, integrations and team readiness.</p><ol><li>Agree stages, lead sources, number ownership and acceptance criteria.</li><li>Connect only the supported sources in the agreed scope. Send a test enquiry from each and verify the saved source and owner.</li><li>Configure assignment and escalation rules. Include an exception for enquiries that cannot be assigned automatically.</li><li>Give the pilot team appropriate access and prepare reviewed reply templates.</li><li>Import a small, authorised set of active enquiries, checking duplicates and data quality.</li><li>Run a limited pilot and inspect missed messages, wrong assignments and failed integrations.</li><li>Review the evidence with the sales owner before expanding to more users or sources.</li></ol><p>Keep a fallback process during the pilot. Do not remove a working customer-contact route before confirming that the replacement works.</p><h2>Seven questions to ask in a demo</h2><ol><li>Which of our lead sources are supported now, and which need additional work?</li><li>What happens when the same person enquires twice or uses a different phone number?</li><li>Can we see the owner, stage and overdue next action on a representative record?</li><li>Which WhatsApp capabilities are available for our number, and what activation, consent or template requirements apply?</li><li>What history can the business retain, and what happens when someone leaves?</li><li>What are the implementation, user, messaging, calling and support charges? Ask for current scope and terms in writing.</li><li>What happens when a message fails or a connection is unavailable? Ask to see the failure and recovery process.</li></ol><h2>Keep automation boundaries clear</h2><p>A shared inbox, campaign sender, chatbot and sales CRM serve different needs. Some setups combine them; others require separate tools. The WhatsApp Business app and a connected CRM are not interchangeable categories, and neither should be described as universally limited to one person or capable of every integration.</p><p>Confirm applicable messaging permissions and provider requirements before automating outbound contact. A requested internal reminder is not permission to send a customer message. Voice calling, where available, needs its own agreed setup and review.</p><h2>Measure qualified opportunities, not activity alone</h2><p>Start with a baseline: unassigned enquiries, enquiries without a next action, response time and opportunities that reach a meaningful next step. Then measure the same definitions during the pilot. Separate tests, duplicates and irrelevant submissions from sales opportunities.</p><p>A submitted form is not automatically a qualified lead. Record the business need and sales review, then track booked calls, proposals and confirmed wins separately. If outcome data is unavailable, mark it unknown rather than reporting zero or estimating revenue.</p><h2>Where Bizgenix fits</h2><p>Bizgenix AI, founded by Umang Ratani, offers AI consulting, custom solutions, products and team training. For a sales workflow, explore <a href=\"/products/ai-crm\">Bizgenix AI CRM</a> and ask the team to demonstrate the capabilities supported in your proposed configuration. For customer-conversation workflows, discuss <a href=\"/products/bizchat\">BizChat</a>. Confirm integrations and commercials before committing.</p><p>Compare the <a href=\"/blog/custom-ai-vs-ready-made-software\">product-versus-custom approach</a> and use our <a href=\"/guides/evaluate-ai-automation-pilot\">AI pilot evaluation checklist</a>. This guide is practical buyer guidance adapted from the team's draft; it does not claim a measured CRM customer result.</p>",
  "faqs": [
    [
      "Does every WhatsApp CRM connect every lead source?",
      "No. Confirm supported sources, account access, integration steps and charges for your specific configuration. Verify a test enquiry from each source."
    ],
    [
      "How long does setup take?",
      "Agree timing after reviewing number setup, data readiness, integrations and team access. The phased checklist is planning guidance, not an onboarding promise."
    ],
    [
      "Does a CRM guarantee more sales?",
      "No. Measure lead handling and qualified opportunities against your baseline. Sales also depend on fit, offer, follow-up and the buyer decision."
    ],
    [
      "Should we use CRM or a WhatsApp chatbot?",
      "Use the workflow to decide: sales ownership and pipeline management differ from automated replies. Ask whether a combination is needed and confirm the scope."
    ]
  ],
  "next": {
    "eyebrow": "REVIEW YOUR SALES WORKFLOW",
    "title": "Discuss a Bizgenix AI CRM demo",
    "text": "Share your team size, lead sources and one follow-up problem so we can discuss the relevant configuration.",
    "primary": {
      "label": "Request a CRM demo",
      "href": "/contact?intent=product&product=ai-crm#contact-form"
    },
    "secondary": {
      "label": "Explore Bizgenix AI CRM",
      "href": "/products/ai-crm"
    }
  }
},
{
  "slug": "evaluate-ai-automation-pilot",
  "title": "How to Evaluate an AI Automation Pilot",
  "h1": "How do you know an AI automation pilot is ready for everyday work?",
  "description": "A practical acceptance checklist for business owners evaluating AI automation: scope, errors, human review, recovery and measurable outcomes.",
  "answer": "An AI automation pilot is ready for wider use when it completes an agreed workflow on representative examples, handles exceptions visibly and has a named owner. Compare useful completed work, review effort and errors against your starting process before expanding access or scope.",
  "date": "2026-11-15",
  "updated": "2026-11-15",
  "tags": [
    "AI consulting",
    "Automation",
    "Buyer guide"
  ],
  "minutes": 5,
  "html": "<h2>Define one workflow and its boundary</h2><p>Write down the trigger, required inputs, expected output and person responsible for accepting the work. For example, a pilot might prepare an internal follow-up task after a sales enquiry. Sending a customer message, changing an account or committing a payment is a separate action to agree explicitly.</p><p>Start with representative, authorised sample data. Record which business, period and source each example belongs to. Remove confidential information that is unnecessary for the test.</p><h2>Test five failure cases</h2><ol><li><strong>Duplicate input:</strong> submit the same request twice and check that it does not create duplicate records or actions.</li><li><strong>Missing information:</strong> omit a required field. The workflow should request review instead of inventing a value.</li><li><strong>Unavailable connection:</strong> agree how failed work is retained, reported and safely retried.</li><li><strong>Wrong access:</strong> confirm that an unauthorised role cannot view or change restricted records.</li><li><strong>Incorrect output:</strong> show how a reviewer finds the source, corrects the result and prevents an unchecked action.</li></ol><h2>Count the whole effort</h2><p>Measure useful tasks completed, preparation time, review time, corrections and unresolved exceptions. Faster generation can still leave a team with more checking. Compare equivalent work and record changes in volume or complexity so the comparison remains meaningful.</p><p>A proposed reminder is not a sent message. A reply is not a booked meeting, and a promise to pay is not money received. Define the outcome before calculating any return.</p><h2>Agree acceptance before expansion</h2><p>Write a short acceptance record: test set, observed result, unresolved issue, responsible person and next review date. The business owner and implementation team should agree acceptable error levels for the particular task; there is no universal pass percentage suitable for every workflow.</p><p>Keep a manual fallback and a way to stop external actions. Start with a limited group and review failures before adding users, data sources or automation permissions.</p><h2>Choose a product or a custom build</h2><p>If an existing product handles the workflow adequately, evaluate its configuration and integration options first. A custom build may fit distinctive approval rules or processes that the available tools cannot support. Compare implementation, recurring usage, maintenance and ownership requirements.</p><p>Read our <a href=\"/blog/custom-ai-vs-ready-made-software\">product-versus-custom guide</a>, explore <a href=\"/custom-solutions\">custom solutions</a>, or use the <a href=\"/guides/tally-receivables-dashboard-checklist\">receivables checklist</a> for a finance workflow.</p><h2>A proposed checklist, not a customer result</h2><p>This guide provides evaluation questions from the Bizgenix AI team. The examples are illustrative and do not represent measured client savings, guaranteed returns or a certification of any product.</p>",
  "faqs": [
    [
      "How long should a pilot take?",
      "Agree timing around data readiness, integrations and the examples needed to test the workflow. A calendar deadline alone does not demonstrate readiness."
    ],
    [
      "Can we evaluate a pilot without connecting live accounting data?",
      "Start with authorised sample or anonymised data. Confirm permissions and handling requirements before enabling a production connection."
    ],
    [
      "Who should approve the result?",
      "Name the business process owner and the implementation owner. The people responsible for the work should review exceptions and agree acceptance before expanding use."
    ]
  ],
  "next": {
    "eyebrow": "PLAN A SCOPED PILOT",
    "title": "Discuss your first workflow",
    "text": "Share the task, current tools and desired outcome. We can discuss whether a product, integration or custom build fits.",
    "primary": {
      "label": "Discuss AI consulting",
      "href": "/contact?intent=custom#contact-form"
    },
    "secondary": {
      "label": "Explore custom solutions",
      "href": "/custom-solutions"
    }
  }
},
{
  "slug": "tally-receivables-dashboard-checklist",
  "title": "Tally Receivables Dashboard: A Buyer Checklist",
  "h1": "What should a Tally receivables dashboard show?",
  "description": "Evaluate receivables dashboards using company, period, freshness, invoice reconciliation, ownership and collection follow-up checks.",
  "answer": "A useful receivables dashboard shows what is outstanding, what is overdue, which balances need review and who owns the next action. It should identify the source company, reporting date and last successful refresh so an owner can judge whether the numbers are usable.",
  "tags": [
    "Tally",
    "Receivables",
    "Growth Intelligence"
  ],
  "html": "<h2>Start with trustworthy balances</h2><p>Ask the supplier to demonstrate how a selected customer balance reconciles to the source accounting records. Check whether receipts, credit notes, disputed amounts and allocations are reflected. A total alone cannot explain why an invoice remains unpaid.</p><p>Keep each company and reporting period separate. Agree whether ageing is calculated from invoice date or due date; these answer different questions. A recent screen refresh is not necessarily a recent accounting-data refresh.</p><h2>Use a review checklist</h2><ul><li>Company and period are visible.</li><li>Last successful source refresh is visible, including failed or partial updates.</li><li>Outstanding and overdue are distinguished using an agreed basis.</li><li>A reviewer can trace a balance to supporting records.</li><li>Disputes and promised-payment dates are separate from actual receipts.</li><li>Each follow-up has an owner and a next-action date.</li></ul><h2>Move from a list to a controlled workflow</h2><p>Review the largest or oldest unresolved balances with the responsible team. Confirm that the invoice and customer contact are correct before drafting a reminder. A draft message is not a sent message, and a sent message is not a collection.</p><p>If WhatsApp, email or calling is part of a proposed solution, confirm the integration, access, approvals, usage charges and failure handling in the agreed scope. Do not assume every dashboard includes automatic messaging.</p><h2>What to test in a demo</h2><p>Use a small authorised sample with a normal invoice, a partial receipt and a disputed item. Ask what happens when source data is unavailable. The demo should show limitations explicitly rather than presenting stale records as current.</p><p>Growth Intelligence by Bizgenix AI is positioned as a Tally-connected decision and action layer, not accounting software. Discuss your current setup and the decisions you want to support before agreeing implementation scope.</p><h2>Measure useful outcomes</h2><p>Track reconciled balances, unresolved exceptions, review time and completed follow-ups. Report money received separately from expected receipts. Do not attribute a collection to software without a defensible attribution method.</p><p>Related: <a href=\"/guides/mis-report-in-tally\">MIS reporting in Tally</a> and <a href=\"/products/growth-intelligence\">Growth Intelligence</a>.</p>",
  "faqs": [
    [
      "Does a dashboard replace Tally?",
      "No. A connected decision layer depends on the source accounting records; confirm supported versions, access and integration requirements before implementation."
    ],
    [
      "Does a WhatsApp reminder mean payment has been collected?",
      "No. Track draft, sent, replied, promised and received states separately. Confirm receipt in the source records."
    ]
  ],
  "date": "2026-11-15",
  "updated": "2026-11-15",
  "minutes": 4,
  "next": {
    "eyebrow": "NEXT STEP",
    "title": "Discuss a Growth Intelligence demo",
    "text": "Share the workflow, current tools and team involved so we can discuss fit and scope.",
    "primary": {
      "label": "Discuss a Growth Intelligence demo",
      "href": "/contact?intent=product&product=growth-intelligence"
    },
    "secondary": {
      "label": "Explore all guides",
      "href": "/guides"
    }
  }
},
{
  "slug": "ai-training-for-ca-accounting-firms",
  "photo": { "src": "/corporate-training/ai-for-cas-jamnagar.png", "alt": "Group photo of participants seated in a training room", "caption": "AI for Chartered Accountants session, Jamnagar — from the Bizgenix training gallery." },
  "title": "AI Training for CA and Accounting Firms: Planning Guide",
  "h1": "How should CA and accounting firms plan practical AI training?",
  "description": "Plan role-based AI training for CA and accounting teams with approved data, review exercises, human responsibility and adoption measures.",
  "answer": "Start AI training with a few recurring tasks that staff can practise safely, such as summarising approved material, drafting client questions and explaining a checked management report. Define who reviews each output and how confidential information may be used before selecting tools.",
  "tags": [
    "Corporate AI Training",
    "Accounting Firms",
    "AI Adoption"
  ],
  "html": "<h2>Choose tasks by role</h2><p>A partner, reviewer and junior team member need different exercises. A partner might practise turning a verified management report into questions for a business owner. A reviewer might compare a draft summary with its sources. A junior might organise an approved checklist and flag missing information.</p><p>These are suggested learning exercises, not claims of measured client outcomes. Training does not transfer professional responsibility to an AI tool.</p><h2>Agree the data rules first</h2><p>Use fictional or appropriately anonymised examples initially. Confirm the firm's approved tools and permitted uses of client material. Remove unnecessary personal identifiers. Do not assume that a paid account alone makes every upload appropriate.</p><h2>Ask for a practical programme</h2><ol><li>Define the participants, their current experience and one task for each role.</li><li>Demonstrate the task using a controlled source pack.</li><li>Have participants attempt it themselves.</li><li>Introduce missing data or a plausible incorrect answer and practise review.</li><li>Agree an internal owner, a permitted workflow and a follow-up review date.</li></ol><h2>Evaluate the output, not the confidence</h2><p>Check whether a participant can identify the source, distinguish fact from inference and explain what still needs verification. A fluent answer can contain a mistaken amount, date or assumption. For consequential client work, use the firm's normal review and approval controls.</p><h2>Measure adoption after the workshop</h2><p>Choose a small baseline task and record time, corrections and accepted outputs before and after training. Include checking time. A certificate, attendance photograph or completed prompt is not proof of sustained adoption.</p><p>Bizgenix AI offers corporate AI training and workshops with founder Umang Ratani. Discuss departments, participant count, experience, delivery format and intended workflows so the programme can be scoped. No accreditation, CPE credit or guaranteed productivity improvement is implied.</p><p>Related: <a href=\"/courses\">AI training and workshops</a> and <a href=\"/ai-consulting\">AI consulting</a>.</p>",
  "faqs": [
    [
      "Can training use our real client files?",
      "Begin with fictional or anonymised examples. Use real files only under your firm’s approved access, confidentiality and tool-use process."
    ],
    [
      "How do we choose the right programme?",
      "Share participant roles, current AI experience, intended tasks, delivery preferences and dates. Agree learning outcomes and review exercises before booking."
    ]
  ],
  "date": "2026-11-15",
  "updated": "2026-11-15",
  "minutes": 4,
  "next": {
    "eyebrow": "NEXT STEP",
    "title": "Discuss training for your firm",
    "text": "Share the workflow, current tools and team involved so we can discuss fit and scope.",
    "primary": {
      "label": "Discuss training for your firm",
      "href": "/contact?intent=training"
    },
    "secondary": {
      "label": "Explore all guides",
      "href": "/guides"
    }
  }
},
  {
    slug: 'mis-report-in-tally',
    title: 'MIS Report in Tally: Format, Reports to Use and What to Read',
    h1: 'MIS report in Tally: the format, the reports to use and what an owner should read',
    description: 'What an MIS report is, which TallyPrime reports go into it, a simple monthly format and illustrative sample report for business owners, and the settings needed first.',
    answer: 'An MIS report turns 8 core TallyPrime reports (Profit & Loss, Balance Sheet, Cash Flow, Funds Flow, Ratio Analysis, Bills Receivable, Bills Payable and Stock Summary) into one monthly decision summary for the owner. Tally has no single built-in report called “MIS”, so you assemble these views side by side against last month and last year before acting.',
    date: '2026-11-15',
    updated: '2026-11-28',
    tags: ['Tally', 'MIS Reporting', 'Business Intelligence'],
    minutes: 6,
    html: `
<h2>What an MIS report is</h2>
<p>MIS stands for Management Information System. An MIS report is prepared for the people who run the business, not for a tax office or an auditor. There is no legal format. A good one answers a few questions quickly: are we making money, where is the cash, who owes us, whom do we owe, what is lying in stock, and what changed since last month.</p>
<p>Statutory accounts look back at a full year. An MIS report looks at a month or a week, so that a problem is seen while there is still time to act on it.</p>

<h2>Which Tally reports go into an MIS report</h2>
<p>TallyPrime already holds most of what an owner needs. These are the reports to pull, and where to find them from the Gateway of Tally.</p>
<div class="tableWrap"><table>
<thead><tr><th>Question</th><th>Tally report</th><th>Where it is</th></tr></thead>
<tbody>
<tr><td>Did we make a profit?</td><td>Profit &amp; Loss A/c</td><td>Gateway of Tally → Profit &amp; Loss A/c</td></tr>
<tr><td>What do we own and owe?</td><td>Balance Sheet</td><td>Gateway of Tally → Balance Sheet</td></tr>
<tr><td>Where did the cash go?</td><td>Cash Flow and Funds Flow</td><td>Display More Reports → Cash Flow / Funds Flow</td></tr>
<tr><td>Who owes us, and for how long?</td><td>Bills Receivable with ageing</td><td>Display More Reports → Statements of Accounts → Outstandings → Receivables</td></tr>
<tr><td>Whom do we owe?</td><td>Bills Payable with ageing</td><td>Display More Reports → Statements of Accounts → Outstandings → Payables</td></tr>
<tr><td>What is in stock?</td><td>Stock Summary</td><td>Gateway of Tally → Stock Summary</td></tr>
<tr><td>Are the basics healthy?</td><td>Ratio Analysis</td><td>Gateway of Tally → Ratio Analysis</td></tr>
<tr><td>Which branch or department earns?</td><td>Cost Centre reports</td><td>Display More Reports → Statements of Accounts → Cost Centres</td></tr>
</tbody></table></div>
<p>Three keys do most of the work inside these reports. <strong>Alt+C</strong> adds a column so you can place another period next to the current one. <strong>Alt+N</strong> adds columns automatically, for example month by month. <strong>F6</strong> inside the outstanding reports switches to the age-wise view. <strong>Alt+E</strong> exports the report to Excel or PDF.</p>

<h2>A simple monthly MIS format for an owner</h2>
<p>Keep the pack to what will be read. One page per item is enough.</p>
<ol>
<li><strong>Profit summary.</strong> Sales, gross profit and net profit for the month, next to last month and the same month last year.</li>
<li><strong>Cash position.</strong> Opening balance, money in, money out, closing balance, and the bank and cash balances today.</li>
<li><strong>Receivables ageing.</strong> Total outstanding split into 0–30, 31–60, 61–90 and over 90 days, with the ten largest overdue customers.</li>
<li><strong>Payables ageing.</strong> The same split for suppliers, with what falls due in the next 30 days.</li>
<li><strong>Stock.</strong> Closing stock value, and items that have not moved in 90 days.</li>
<li><strong>Sales detail.</strong> Top customers and top products for the month.</li>
<li><strong>Expenses.</strong> Each main expense head against last month, and against budget if you keep one in Tally.</li>
<li><strong>Dues to the government.</strong> GST and TDS payable, and the due dates.</li>
<li><strong>Five ratios.</strong> Gross profit %, net profit %, current ratio, receivable days and stock turnover, all of which Ratio Analysis shows.</li>
</ol>

<h2>Settings that must be on first</h2>
<p>An MIS report is only as good as the entries behind it. Check these before trusting the numbers.</p>
<ul>
<li><strong>Bill-wise details</strong> must be enabled for customer and supplier ledgers. Without it, Tally cannot show which invoice is unpaid or how old it is.</li>
<li><strong>Credit periods</strong> should be entered on invoices, so that “overdue” means something.</li>
<li><strong>Cost centres</strong> must be enabled and used on entries if you want profit by branch, department or project.</li>
<li><strong>Stock items and godowns</strong> must be maintained in Tally if you want a stock page.</li>
<li><strong>Books must be up to date.</strong> A report run on the 5th from books entered till the 20th of last month misleads more than it helps.</li>
</ul>

<h2>Where the manual method strains</h2>
<p>Tally shows each report correctly on screen. The effort is in the assembly: someone opens eight reports, exports each one, pastes them into a workbook, formats it and sends it. That takes time every month, it depends on one person, and it usually arrives after the decisions it was meant to inform. It also shows numbers without saying what to do about them.</p>
<p>That is the point at which businesses move from an exported workbook to a dashboard that reads the Tally data directly.</p>

<h2>What to read first</h2>
<p>If you read only three things each month, read these: the receivables over 90 days, the cash closing balance against next month’s payables, and gross profit % against last month. Most unpleasant surprises show up in one of the three.</p>

<h2>Step-by-step: how to prepare a monthly MIS in Tally</h2>
<ol>
<li><strong>Confirm book completeness first:</strong> verify bank reconciliation, purchase bills, sales invoices and stock entries up to month-end.</li>
<li><strong>Set the period and comparison columns:</strong> open Profit &amp; Loss A/c and use <code>Alt+C</code> or <code>Alt+N</code> to place this month beside last month and the same month last year.</li>
<li><strong>Check key ratios:</strong> open Ratio Analysis from the Gateway of Tally and note gross profit %, net profit %, current ratio and receivable turnover.</li>
<li><strong>Capture liquidity:</strong> record bank and cash balances plus Cash Flow / Funds Flow movements for the month.</li>
<li><strong>Export age-wise receivables:</strong> open Outstandings → Receivables, press <code>F6</code> for age-wise buckets (0–30, 31–60, 61–90, 90+ days) and list the top overdue parties.</li>
<li><strong>Export payables due next 30 days:</strong> open Outstandings → Payables with <code>F6</code> so supplier commitments sit next to available cash.</li>
<li><strong>Flag slow stock:</strong> check Stock Summary and Ageing Analysis for items with no movement in 90 days.</li>
<li><strong>Summarise on one page:</strong> put the headline table first, attach three named owner actions with dates, and review it in a fixed monthly meeting.</li>
</ol>

<h2>Illustrative monthly MIS summary (fictional example, ₹ lakh)</h2>
<p>The figures below are fictional, shown only to illustrate how a one-page owner summary reads:</p>
<div class="tableWrap"><table>
<thead><tr><th>Metric</th><th>This month</th><th>Last month</th><th>Same month last year</th><th>Owner question to ask</th></tr></thead>
<tbody>
<tr><td>Net sales</td><td>120.0</td><td>108.0</td><td>98.0</td><td>Which products or dealers drove the ₹12.0L jump?</td></tr>
<tr><td>Gross profit (and %)</td><td>30.0 (25.0%)</td><td>28.1 (26.0%)</td><td>23.5 (24.0%)</td><td>Why did gross margin slip 1.0 point despite higher sales?</td></tr>
<tr><td>Net profit (and %)</td><td>10.8 (9.0%)</td><td>10.2 (9.4%)</td><td>7.8 (8.0%)</td><td>Which operating expenses grew faster than sales?</td></tr>
<tr><td>Closing cash &amp; bank</td><td>14.5</td><td>18.2</td><td>11.0</td><td>Does ₹14.5L cover next month’s salaries and supplier dues?</td></tr>
<tr><td>Receivables &gt; 60 days</td><td>22.4</td><td>15.6</td><td>14.0</td><td>Which 5 dealers account for the ₹6.8L jump in overdue bills?</td></tr>
<tr><td>Slow stock &gt; 90 days</td><td>18.0</td><td>16.5</td><td>12.5</td><td>Which items should be paused from the next purchase order?</td></tr>
</tbody></table></div>
`,
    faqs: [
      ['Does Tally have a built-in MIS report?', 'No single report in TallyPrime is called MIS. Profit & Loss, Balance Sheet, Cash Flow, Funds Flow, Ratio Analysis, Outstandings, Stock Summary and Cost Centre reports together make up an MIS report. You compare periods with Alt+C or Alt+N and export with Alt+E.'],
      ['How do I get a receivables ageing report in Tally?', 'Open Display More Reports → Statements of Accounts → Outstandings → Receivables, then press F6 for the age-wise view and set the ageing periods, for example 0–30, 31–60, 61–90 and over 90 days. Bill-wise details must be enabled on the customer ledgers.'],
      ['How often should an MIS report be prepared?', 'Monthly is the usual minimum. Cash, receivables and overdue payables are worth checking weekly, because those are the items where a delay of a few weeks costs money.'],
      ['Can an MIS report be exported from Tally to Excel?', 'Yes. Open the report and press Alt+E, choose Export, and select Excel or PDF as the format. Each report is exported separately, so a full pack means several exports.'],
    ],
    next: { eyebrow: 'GROWTH INTELLIGENCE', title: 'Want this view without the monthly exports?', text: 'Growth Intelligence is our business analytics software for Tally. It turns Tally data into answers on cash, receivables, payables and stock, with the next action for each.', primary: { label: 'Request a demo', href: '/contact?intent=product&product=growth-intelligence#contact-form' }, secondary: { label: 'See Growth Intelligence', href: '/products/growth-intelligence' } },
  },
  {
    slug: 'virtual-cfo',
    title: 'Virtual CFO: What It Is, What It Does and When Software Helps',
    h1: 'Virtual CFO: what it is, what it does, and when software does part of the job',
    description: 'A plain guide to virtual CFO services for Indian businesses: what the role covers, how it differs from an accountant, who needs one, and which parts software can take over.',
    answer: 'A virtual CFO is an experienced finance professional or firm that does the work of a chief financial officer for a business on a part-time, outsourced basis. The work is management-facing: reporting, cash-flow planning, budgets, margins, funding and financial controls. It suits businesses that have outgrown bookkeeping-only support but do not need, or cannot justify, a full-time CFO.',
    date: '2026-11-15',
    updated: '2026-11-15',
    tags: ['Virtual CFO', 'Finance', 'Business Intelligence'],
    minutes: 5,
    html: `
<h2>What a virtual CFO does</h2>
<p>The word “virtual” describes how the person works, not what they do. A virtual CFO is not on your payroll and is not in the office every day, but the responsibilities are those of a finance head.</p>
<ul>
<li><strong>Management reporting.</strong> A monthly MIS pack: profit, cash, receivables, payables and stock, with what changed and why.</li>
<li><strong>Cash-flow planning.</strong> A forecast of money in and out over the next weeks and months, so that a shortfall is seen before it arrives.</li>
<li><strong>Budgets and targets.</strong> An annual budget, and a monthly comparison of actual figures against it.</li>
<li><strong>Working capital.</strong> Credit terms, collection discipline, supplier terms and stock levels.</li>
<li><strong>Margins and pricing.</strong> Which products, customers or branches make money after all costs.</li>
<li><strong>Funding.</strong> Preparing numbers for a bank or investor and managing those relationships.</li>
<li><strong>Controls and systems.</strong> Who can approve what, how entries are checked, and which software the finance team uses.</li>
<li><strong>Compliance oversight.</strong> Making sure GST, TDS, audit and filings are handled on time, usually by coordinating with the accountant or auditor rather than doing the filings.</li>
</ul>

<h2>Virtual CFO, accountant and full-time CFO compared</h2>
<div class="tableWrap"><table>
<thead><tr><th></th><th>Accountant or tax consultant</th><th>Virtual CFO</th><th>Full-time CFO</th></tr></thead>
<tbody>
<tr><td>Main question</td><td>Are the books and filings correct?</td><td>What should we do with these numbers?</td><td>The same, with full ownership of the finance function</td></tr>
<tr><td>Looks at</td><td>The past</td><td>The past and the next few quarters</td><td>The past, the future and the team</td></tr>
<tr><td>Time given</td><td>As filings require</td><td>A few days a month</td><td>Full time</td></tr>
<tr><td>Typical output</td><td>Returns, audit, financial statements</td><td>MIS, forecasts, reviews with the owner</td><td>All of it, plus leading the finance team</td></tr>
</tbody></table></div>
<p>The roles work together. A virtual CFO depends on clean books, and clean books are still the accountant’s work.</p>

<h2>Who needs one</h2>
<p>A virtual CFO is worth considering when several of these are true.</p>
<ul>
<li>Sales are growing but cash feels tight.</li>
<li>The owner sees final numbers weeks after the month ends, or only at year end.</li>
<li>A bank loan, investor or large expansion is coming up.</li>
<li>There are several branches, products or companies, and nobody is sure which ones earn.</li>
<li>The accounts team records entries well but nobody reviews what the entries mean.</li>
</ul>

<h2>How engagements usually work</h2>
<p>Most virtual CFO work is a monthly retainer with a fixed scope: a set number of review meetings, the MIS pack and agreed projects. Some firms also work per project, for example a funding round or a costing exercise. Fees depend on the size of the business, the number of entities, the state of the books and how much time is needed, so ask for the scope in writing and compare proposals on scope, not on the monthly figure alone.</p>
<p>Before you sign, ask who will actually attend the reviews, what you will receive each month and by which date, and what the accountant must provide for that to happen.</p>

<h2>What software can do, and what it cannot</h2>
<p>Part of a finance head’s month is repetitive: pulling data from Tally, preparing the same reports, chasing the same overdue customers and noticing the same warning signs. Software does this part well, every day instead of once a month.</p>
<div class="tableWrap"><table>
<thead><tr><th>Software handles well</th><th>Still needs a person</th></tr></thead>
<tbody>
<tr><td>Daily view of cash, receivables, payables and stock</td><td>Deciding between two uses of limited cash</td></tr>
<tr><td>Ageing, overdue lists and reminders</td><td>Negotiating with a bank, investor or large customer</td></tr>
<tr><td>Comparing this month with earlier periods</td><td>Judging whether a change is a problem or a plan</td></tr>
<tr><td>Flagging unusual movements</td><td>Tax structuring and legal decisions</td></tr>
</tbody></table></div>
<p>The role is also changing. Finance leaders are moving from counting value to finding and moving it, which is why the term <a href="/guides/chief-value-officer">Chief Value Officer</a> is now used for the job.</p>
<p>Many businesses use both: software for the daily view, and a finance professional for the review and the decisions. If the main gap is that you cannot see your numbers in time, start with the software. If you can see them but do not know what to do, you need the person.</p>
`,
    faqs: [
      ['What is the difference between a virtual CFO and a CA?', 'A chartered accountant in practice usually handles accounts, audit and tax filings. A virtual CFO uses those accounts to help run the business: monthly reporting, cash-flow forecasts, budgets, margins and funding. Many virtual CFOs are chartered accountants, but the work is management-facing rather than compliance-facing.'],
      ['Does a small business need a virtual CFO?', 'Not always. A business with simple operations and steady cash may only need good bookkeeping and a monthly MIS report. A virtual CFO becomes useful when growth, borrowing, several branches or tight cash make financial decisions harder than the owner can handle alone.'],
      ['How much do virtual CFO services cost in India?', 'There is no standard rate. Fees depend on the size of the business, the number of companies, the condition of the books and the hours agreed. Ask each firm for a written scope and compare what you receive each month, not only the fee.'],
      ['Can software replace a virtual CFO?', 'Software can replace the repetitive part: collecting data, preparing reports, tracking overdue payments and flagging changes. It does not replace judgement on funding, negotiations, tax structure or strategy. The two are commonly used together.'],
    ],
    next: { eyebrow: 'GROWTH INTELLIGENCE', title: 'See your Tally numbers every day, not once a month', text: 'Growth Intelligence is software, not a virtual CFO service: an AI Chief Value Officer that reads your Tally, prepares the week’s decisions on cash, receivables, payables and stock, and waits for your approval.', primary: { label: 'Request a demo', href: '/contact?intent=product&product=growth-intelligence#contact-form' }, secondary: { label: 'See Growth Intelligence', href: '/products/growth-intelligence' } },
  },
  {
    slug: 'whatsapp-automation-for-business',
    title: 'WhatsApp Automation for Business: What You Can Automate',
    h1: 'WhatsApp automation for business: what you can automate and what it takes',
    description: 'What WhatsApp automation means for an Indian business, the difference between the WhatsApp Business app and the API, the rules on templates and consent, and how to start.',
    answer: 'WhatsApp automation means sending and answering routine business messages on WhatsApp without someone typing each one: enquiry replies, order and dispatch updates, payment reminders, appointment reminders and follow-ups. Small volumes can be handled with the free WhatsApp Business app. Anything connected to your CRM, billing or Tally data needs the WhatsApp Business Platform, also called the API, where Meta approves message templates and customers must have agreed to receive messages.',
    date: '2026-11-15',
    updated: '2026-11-15',
    tags: ['WhatsApp Automation', 'AI Automation', 'Customer Communication'],
    minutes: 6,
    html: `
<h2>What businesses automate on WhatsApp</h2>
<ul>
<li><strong>Enquiry replies.</strong> An instant first answer, a few qualifying questions, and a handover to the right salesperson.</li>
<li><strong>Order and dispatch updates.</strong> Order confirmed, goods dispatched, transport details, delivery done.</li>
<li><strong>Payment reminders.</strong> Invoice shared on the due date, a reminder when it is overdue, a thank-you when it is paid.</li>
<li><strong>Appointments.</strong> Booking confirmation, a reminder the day before, and rescheduling.</li>
<li><strong>Follow-ups.</strong> Quotation follow-up, feedback after delivery, renewal and service reminders.</li>
<li><strong>Internal alerts.</strong> A daily summary or a task reminder sent to your own team.</li>
<li><strong>Campaigns.</strong> Offers and announcements to customers who have agreed to receive them.</li>
</ul>

<h2>Two ways to do it: the app and the API</h2>
<div class="tableWrap"><table>
<thead><tr><th></th><th>WhatsApp Business app</th><th>WhatsApp Business Platform (API)</th></tr></thead>
<tbody>
<tr><td>Best for</td><td>An owner or a small team answering by hand</td><td>Messages triggered by your software, at volume</td></tr>
<tr><td>Automation</td><td>Greeting message, away message, quick replies, labels, catalogue</td><td>Chatbots, workflows and messages sent by your CRM, ERP or billing system</td></tr>
<tr><td>Starting a conversation</td><td>You type and send</td><td>Only with a template that Meta has approved</td></tr>
<tr><td>Team use</td><td>One phone and a few linked devices</td><td>Many agents through a shared inbox</td></tr>
<tr><td>Cost</td><td>Free</td><td>Meta charges for template messages, and the provider you use adds its own fee</td></tr>
</tbody></table></div>
<p>The API has no app of its own. You use it through software: Meta’s own Cloud API if you have developers, or a solution provider that gives you an inbox, a chatbot builder and integrations.</p>

<h2>The rules that shape what you can send</h2>
<ul>
<li><strong>Consent.</strong> A customer must have opted in to receive messages from your business on WhatsApp. Buying a list and messaging it is against WhatsApp’s policy.</li>
<li><strong>Templates.</strong> To message a customer first, you must use a template approved by Meta. Templates fall into categories such as marketing, utility and authentication.</li>
<li><strong>The 24-hour window.</strong> When a customer messages you, you can reply freely for 24 hours. After that you need a template again.</li>
<li><strong>Charges.</strong> Meta charges per delivered template message. The rate depends on the category and the customer’s country, and Meta revises it, so check the current rate card before you budget.</li>
<li><strong>Quality.</strong> If many people block or report your number, your quality rating falls and your daily sending limit is reduced.</li>
</ul>
<p>Unofficial bulk-sending tools that work by controlling the ordinary WhatsApp app break these rules. The usual result is a banned number, which for many businesses is the number every customer has saved.</p>

<h2>What you need before you start</h2>
<ol>
<li>A Meta business account, and business verification if you want higher sending limits.</li>
<li>A phone number for the API. A number already used on the WhatsApp app has to be moved, so decide this early.</li>
<li>A display name that matches your business.</li>
<li>A record of customer consent: where and when each customer agreed.</li>
<li>The source of the data. A dispatch update needs dispatch data; a payment reminder needs the invoice and due date from your accounting system.</li>
</ol>

<h2>How to start without wasting money</h2>
<p>Choose one message that is sent many times a week and always looks the same. Payment reminders and dispatch updates are common first choices because the data already exists and the customer wants the message. Write the template, get it approved, connect the data, and run it for a month. Measure one thing: replies, payments received or calls avoided. Add the second workflow only after the first one runs without supervision.</p>
<p>Keep a person in the loop. Every automated flow needs a clear way for the customer to reach a human, and someone who reads the replies.</p>
`,
    faqs: [
      ['Is WhatsApp automation legal in India?', 'Yes, when it is done through WhatsApp’s official products and with customer consent. Businesses must use the WhatsApp Business app or the WhatsApp Business Platform, send business-initiated messages through approved templates, and message only people who have opted in.'],
      ['What is the difference between WhatsApp Business and the WhatsApp Business API?', 'WhatsApp Business is a free phone app for small teams, with greeting messages, quick replies and labels. The WhatsApp Business Platform, or API, has no app. It connects WhatsApp to your software so that messages can be sent automatically and handled by many agents, and Meta charges for template messages.'],
      ['Can I send bulk messages on WhatsApp?', 'Only to customers who have opted in, through the WhatsApp Business Platform, using approved templates. Sending bulk messages to purchased lists or through unofficial tools breaks WhatsApp’s policies and can get the number banned.'],
      ['Which business message should I automate first?', 'Start with a high-volume message that always follows the same pattern and that customers want to receive, such as a payment reminder, an order confirmation or a dispatch update. Run one workflow for a month before adding another.'],
    ],
    next: { eyebrow: 'BIZCHAT', title: 'Want WhatsApp connected to your own data?', text: 'BizChat is our WhatsApp automation product for customer communication, lead follow-ups, reminders, support conversations and internal notifications, connected to your business workflows.', primary: { label: 'Discuss your workflow', href: '/contact?intent=product&product=bizchat#contact-form' }, secondary: { label: 'See BizChat', href: '/products/bizchat' } },
  },
];

// Tally, finance and Growth Intelligence cluster (Claude). Kept in its own file to avoid edit collisions.
guides.push(...tallyFinanceGuides);
// Guides for clients outside India (Claude).
guides.push(...globalGuides);
guides.push(...trainingGuides);
