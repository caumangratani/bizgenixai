"use client"
import React from 'react';
import Link from 'next/link';
import { HeroSection } from './HeroSection';
import { ProblemSolution } from './ProblemSolution';
import { ValuePillars } from './ValuePillars';
import { AskGIDemo } from './AskGIDemo';
import { SetupFlow } from './SetupFlow';
import { MetricsAndTestimonials } from './MetricsAndTestimonials';
import { SecuritySection } from './SecuritySection';
import { RoiCalculator } from './RoiCalculator';
import { DemoFormSection } from './DemoFormSection';
import { ArrowRight, ArrowUpRight, Kanban } from 'lucide-react';
import Navigation from '@/app/custom-solutions/Navigation';

const GIProductPage = () => {
  const onOpenDemo = () => { window.location.href='/contact?intent=product&product=growth-intelligence#contact-form'; };
  const onOpenWhatsApp = () => { window.location.href='/contact?intent=product&product=growth-intelligence#contact-form'; };
  const onNavigateToCRM = () => { window.location.href='/products/ai-crm'; };
  return (
    <div>
      {/* Product Sub-Header & In-Page Navigation Bar */}
      {/* <div className="bg-slate-50 border-b border-slate-200/80 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-semibold text-slate-900">Bizgenix Platform</span>
            <span>/</span>
            <span className="text-[#25663F] font-bold">Growth Intelligence</span>
            <span className="hidden sm:inline-block text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono ml-2 border border-emerald-300">
              Tally &amp; Virtual CFO
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium text-slate-600">
            <a href="#overview" className="hover:text-[#25663F] transition-colors">Overview</a>
            <a href="#features" className="hover:text-[#25663F] transition-colors">Capabilities</a>
            <a href="#ask-gi" className="hover:text-[#25663F] transition-colors font-semibold text-slate-900">Ask GI (AI Demo)</a>
            <a href="#how-it-works" className="hover:text-[#25663F] transition-colors">Architecture</a>
            <a href="#security" className="hover:text-[#25663F] transition-colors">Security</a>
            <a href="#pricing" className="hover:text-[#25663F] transition-colors">ROI &amp; Pricing</a>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-3 py-1 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-lg font-semibold transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div> */}
      <Navigation activePath="/" heroBlend />

      {/* Hero Section with Interactive Mini-Dashboard */}
      <HeroSection 
        onOpenDemo={onOpenDemo}
        onOpenWhatsApp={onOpenWhatsApp}
      />

      {/* Problem vs. Solution (Before & After) */}
      <ProblemSolution />

      {/* Four Core Value Pillars */}
      <ValuePillars onOpenWhatsApp={onOpenWhatsApp} />

      {/* Interactive "Ask GI" Generative AI Showcase */}
      <p className="px-6 pt-8 text-center text-sm text-slate-600">Interactive illustration using fictional sample data. This is not connected to a live customer account and does not send messages.</p>
      <AskGIDemo onOpenWhatsApp={onOpenWhatsApp} />

      {/* 3-Step Setup Progress Flow & Architecture */}
      <SetupFlow />

      {/* Social Proof & Quantifiable Metrics */}
      <MetricsAndTestimonials />

      {/* Bank-Grade Security Architecture */}
      <SecuritySection />

      {/* Working Capital ROI & Transparent Pricing */}
      <RoiCalculator onOpenDemo={onOpenDemo} />

      {/* Cross-Product Bridge to Bizgenix CRM */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800">
                <Kanban className="w-5 h-5 text-[#2E7D4E]" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">Need to accelerate sales and stop lead leakage?</span>
                <span className="text-xs text-slate-500">Explore Bizgenix CRM for sales follow-up; confirm required integrations during your demo.</span>
              </div>
            </div>
            <button
              onClick={onNavigateToCRM}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Explore Bizgenix CRM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      <section id="tally-learning-centre" className="border-t border-slate-200 bg-white py-16"><div className="mx-auto max-w-6xl px-6"><h2 className="text-3xl font-bold text-slate-900">Tally, finance and AI: the Growth Intelligence learning centre</h2><p className="mt-4 max-w-3xl text-slate-600">Growth Intelligence by Bizgenix AI supports owner and finance-team decisions around Tally data. Explore the connector, reporting checks, MCP and our Chief Value Officer (CVO) approach. Umang Ratani and the team can help you evaluate the supported setup for your business.</p><div className="mt-8 grid gap-4 md:grid-cols-2"><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/tally-connector-business-dashboard">From Tally connector to business dashboard: what should you verify?</Link><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/tally-mcp-ai-assistant">Tally with MCP: how an AI assistant can work with accounting context</Link><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/chief-value-officer-ai-finance">What is an AI Chief Value Officer, and how does it support a CFO?</Link><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/finance-dashboard-owner-review">What should a business owner review in a finance dashboard?</Link><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/tally-receivables-dashboard-checklist">Receivables and collection review</Link><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/mis-report-in-tally">MIS reporting with Tally</Link><Link className="rounded-xl border border-emerald-100 p-5 font-semibold text-emerald-900 hover:bg-emerald-50" href="/guides/virtual-cfo">Working with a virtual CFO</Link></div><p className="mt-6 text-sm text-slate-600">GI is decision-support software, not a human CFO or a replacement for your CA or auditor. Confirm current capabilities and access requirements in a demonstration.</p></div></section>

      {/* Bottom CTA & Contact Form + FAQ Accordion */}
      <DemoFormSection />
    </div>
  );
};

export default GIProductPage;
