# 22 November 2026 (late night, Claude) — AI education pillar and free downloads

- New `/corporate-ai-training` (ServicePage; old 301 to /courses removed; `/corporate-training` now points here) and `/scale-with-ai` (EventSeries + Course schema). Three guides in `app/guides/training.ts`.
- New `/resources` + `/resources/[slug]`: gated free PDFs (`public/downloads/`, served with `X-Robots-Tag: noindex`). Form posts enquiry type `Resource Download` (added in `lib/enquiries.mjs`, test added).
- `ServicePage`: optional `contactHref`, `photo`, `extraJsonLd`, `faqTitle`. Person schema description/knowsAbout. llms.txt, footer, sitemap (89 URLs).
- Numbers follow Team-Brochure-Kit `03-Facts-Numbers-and-Rules.md`. PDFs with unruled prices are held back (list at the top of `app/resources/content.ts`).

# 22 November 2026

Added corporate AI training evaluation guide and links from courses. Replaced unsubstantiated training totals with delivery formats. Preserved original training photography.

# SEO change log — bizgenix.ai

Every SEO / AI-search change to this site, newest first. Add an entry whenever you change titles, redirects, structured data, the sitemap, `llms.txt`, or add a page.

Rules that apply to every entry:

- Say only what the team's own copy (`app/products/content.ts`), the published case studies (`app/case-studies/content.ts`) or Umang has confirmed. No invented numbers, clients or claims.
- New landing pages use the shared `app/services/ServicePage.tsx` component; metadata goes through `pageMeta()` in `app/seo.ts`.
- Deploy by staging a copy of the live folder, building there, testing on a spare port, then swapping folders. Keep the previous folder for rollback. Do not touch the Growth Intelligence apps on the same server.

---

## 22 Nov 2026 (night) — Clients outside India (Claude)

- New page `/global`: custom AI solutions, automation, agents, CRM/WhatsApp, voice AI and online training for the US, UK, UAE, Singapore, Australia and Canada; region-by-region time overlap; pricing from USD/EUR 500 (owner-confirmed); data and ownership; FAQ. Service schema `areaServed` lists the countries.
- Two guides in `app/guides/global.ts`: hire-ai-development-company-india, ai-agents-for-small-business.
- Organisation schema `areaServed` now lists India plus the six target countries. `ServicePage` gains optional `areaServedCountries`.
- Footer "Clients Outside India"; sitemap; llms.txt section.

## 22 Nov 2026 — Tally, finance and Growth Intelligence cluster (Claude)

- **Growth Intelligence page aligned to the 20 Nov GI brochure.** Removed the unverified customer quote ("Recovered ₹84 Lakhs… Rajesh Shah, Vardhman Tex-Fab"), "Live in 15 minutes", "Encrypted AES-256", "Recover funds 14 days faster", "₹80L+ cash unlocked", DSO before/after figures, iOS/Android and real-time claims. "Virtual CFO" replaced by "Chief Value Officer" (owner rule; facts sheet line 85). Title now "Growth Intelligence | AI Chief Value Officer for Tally Businesses". Hero states that screens show a fictional demonstration company.
- **Five new guides** in `app/guides/tally-finance.ts` (separate file to avoid edit collisions; appended to `guides` in `content.ts`): connect-tally-to-ai-mcp, chief-value-officer, cash-flow-forecast-from-tally, ai-in-accounting-for-tally-businesses, tally-weekly-owner-review.
- **New hub `/tally`** ("Tally, finance and AI: the owner's library") grouping all Tally/finance guides with a GI call to action; linked from /guides, the footer, the GI page and llms.txt.
- Organization `sameAs` adds Crunchbase and Clutch; GI `SoftwareApplication.sameAs` adds the G2 listing.
- Old virtual-cfo guide links to the CVO guide; its GI call to action uses CVO wording.

## 15 Nov 2026 — Guides section, IndexNow and a friendlier phone rule (Claude)

Built on Codex's `e788f84` (required phone field).

- **Guides** (`app/guides/`): new answer-first section by "the Bizgenix AI team", separate from the founder's articles in `/blog`. Each guide opens with a quoted short answer, ends with visible FAQs, and carries Article + FAQPage + BreadcrumbList JSON-LD with the organisation as author. Content rules are at the top of `app/guides/content.ts`.

| URL | Target searches (India, monthly, Serpstat) |
|---|---|
| `/guides/mis-report-in-tally` | mis report 246,000 (difficulty 11); tally mis report 170; tally reports 390 |
| `/guides/virtual-cfo` | virtual cfo 1,000; virtual cfo services 1,000; cfo services 3,600 |
| `/guides/whatsapp-automation-for-business` | whatsapp automation 3,600 (difficulty 13); whatsapp business api 18,100 |

- `/guides` index; footer link "Business Guides"; link from `/blog`; sitemap (53 URLs); `public/llms.txt` Guides section.
- **IndexNow**: key file `public/968123604ee7506344a131d50fd74277.txt` and `scripts/indexnow.mjs`. Run `node scripts/indexnow.mjs` after any deploy that adds or changes pages. It notifies Bing (the index behind ChatGPT search and Copilot), Yandex, Naver and Seznam.
- **Phone rule** (`lib/enquiries.mjs` `phoneNumber()`): a plain 10-digit Indian mobile, or one typed with a leading 0 or 91, is now accepted and saved as `+91…`. Other countries still need `+` and the country code. Letters and repeated-digit numbers are rejected. Before this, `9876543210` was refused with "enter a phone number with country code".
- **Team email**: subject now reads `Bizgenix website enquiry: <type> / <product> from <name> [reference]`; body adds an "Open WhatsApp chat" link built from the number.

## 3 — 14 Nov 2026 — Product, industry and local pages (after the Gemini review)

Source: two Gemini research documents reviewed against the live site. Adopted points only; the full adopted / rejected list is in `seo-audit-nov-2026/GEMINI-REVIEW.md`.

New pages

| URL | Target searches (India, monthly) | Content source |
|---|---|---|
| `/products/voice-ai` | voice bot 480; "voice ai" 33,100 is too broad to win yet | `app/products/content.ts` |
| `/products/bizchat` | whatsapp automation 3,600; whatsapp chatbot 4,400; whatsapp marketing software 1,900 | `app/products/content.ts` |
| `/products/scaleos` | task management software 1,300; workflow management software 1,000 | `app/products/content.ts` + ScaleOS case study |
| `/ai-consultant-ahmedabad` | software company in ahmedabad 2,900; local "AI consultant" searches have no recorded volume but drive the map result | existing consulting copy + office address |
| `/industries/textile` | erp for textile industry 170; textile erp software 140 | five published textile case studies |
| `/industries/real-estate-construction` | construction management software 1,900 | five published real-estate case studies |

Other changes

- Redirects: `/learning`, `/learning/*`, `/corporate-ai-training` → `/courses`; `/products/crm` → `/products/ai-crm`; `/products/whatsapp-automation` → `/products/bizchat`; `/ai-consulting-ahmedabad` → `/ai-consultant-ahmedabad`; `/industries` → `/#industries` (temporary).
- Organization JSON-LD (`app/seo.ts`): added `legalName`, `taxID` (GSTIN), `geo`, `hasMap`, second `alternateName`.
- `ServicePage`: optional `parent` (three-level breadcrumb) and `areaServedCity`.
- `/products`: "Full details" links from Voice AI, BizChat and ScaleOS sections. Home page: Textile and Real Estate industry cards link to the new industry pages.
- Footer, sitemap (49 URLs) and `public/llms.txt` updated.

Deliberately not done (see the review for reasons): `Disallow: /_next/` in robots; external subdomains and invented slugs in the sitemap; `sameAs` links to company-registry sites; a second phone number; CIN and founding date in schema (not yet confirmed); home-page FAQ schema without a visible FAQ.

## 2 — 14 Nov 2026 — commit `a1e5fb6` — Product pages

- New page `/products/ai-crm` (SoftwareApplication + FAQPage JSON-LD). Features from the CRM landing copy and demo narration; AI calling and WhatsApp stated as "where enabled".
- Growth Intelligence: title "Growth Intelligence | Business Analytics Software for Tally" and SoftwareApplication JSON-LD in its route layout.
- `/products`: text links from the CRM and GI sections to their full pages. Footer, sitemap (43 URLs), `llms.txt`.
- `ServicePage`: optional proof list, second card grid, secondary CTA, schema type.

## 1 — 14 Nov 2026 — commit `a397e14` — SEO foundation

- Redirects: `www` → apex; `/solutions`, `/services` → `/custom-solutions`; `/careers` → `/about`; `/ai-course-india`, `/ai-training`, `/corporate-training` → `/courses`.
- `app/seo.ts`: `pageMeta()` gives every page a canonical URL, `og:url`, `og:image` and Twitter card; Organization / ProfessionalService / Person / WebSite JSON-LD in the root layout. Default title and `lang="en-IN"`.
- `robots.ts` and `sitemap.ts` on the apex domain (42 URLs).
- Blog: 10 full articles at `/blog/[slug]` with Article JSON-LD; unknown slugs return 404.
- New pages `/ai-automation` and `/ai-consulting`.
- `info@bizgenix.com` → `info@bizgenix.ai` on contact and legal pages.
- `public/llms.txt`.

## Open items

- These commits are on the server but not yet in `praneshvaibhav/bizgenixai` (`origin/main` is `ddaa319`). Push from the server or apply the patch file in `seo-audit-nov-2026/bizgenix-ai-pack/` before the next deploy, or a `git reset --hard origin/main` will remove this work.
- No GA4 tag on bizgenix.ai yet.
- Growth Intelligence page: the "Rajesh Shah, Vardhman Tex-Fab" quote and the security claims need Umang's confirmation.
- `typescript.ignoreBuildErrors` is still on because of existing type errors in the Growth Intelligence page files.


## 14 November 2026 — enquiry conversion repair (Codex)
- Existing deployed build lacked NEXT_PUBLIC_FORMSPREE_FORM_ID. Added explicit email-draft fallback, preserving the existing configured Formspree path. No false sent confirmation.
- Separate custom, product demo, corporate training and individual learning categories; allowlisted URL intent/product preselection, contextual brief and product selector.
- Updated home, product, service and training CTAs to carry intent.
- Direct business WhatsApp/call alternatives; next steps no longer promise development before scope and commercials are agreed.
- Does not install analytics or claim enquiry delivery; mail drafts require the visitor to send them.

## 14 November 2026 — automatic enquiries, measurement and claim corrections
- Replaced mailto-only fallback with durable private enquiry queue, server validation, idempotent record creation and fixed-recipient SES delivery worker with retry/backoff.
- Added first-party conversion events and session campaign attribution; excludes labelled delivery tests from genuine leads.
- Rewrote two unsupported-result articles and synchronized newsletter metadata/covers; removed unsubstantiated product metrics/testimonials/guarantees and labelled calculator assumptions.
- Updated factual privacy wording for enquiry storage/email and first-party measurement.
- Added operations runbook, worker systemd units and queue tests. Upgraded Next.js to address the production dependency audit finding.
- Found and removed the GI demo form's simulated success flow (a timeout, with no delivery). Replaced it with the real GI enquiry route and wired previously undefined demo/CRM handlers. Sample-data preview is explicitly labelled.
