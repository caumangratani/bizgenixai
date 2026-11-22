import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  HelpCircle,
  Zap
} from 'lucide-react';


interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [turnoverCrores, setTurnoverCrores] = useState<number>(30); // ₹30 Cr default
  const [currentDso, setCurrentDso] = useState<number>(65); // 65 days
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5%


  // Calculations
  const dailyTurnover = (turnoverCrores * 10000000) / 365;
  const currentReceivables = dailyTurnover * currentDso;
  
  // Illustrative scenario assumption only; not a measured or promised Bizgenix result.
  const dsoReduction = Math.min(14, Math.max(7, Math.round(currentDso * 0.22)));
  const freedWorkingCapital = dailyTurnover * dsoReduction;
  const annualInterestSaved = freedWorkingCapital * (interestRate / 100);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#F2F9F4]/40 via-white to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#2E7D4E] uppercase tracking-wider mb-2">
            Illustrative Working Capital Scenario
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Explore the Effect of Collection Timing <br className="hidden sm:inline" />
            Using Your Own Assumptions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            This simplified scenario assumes an improvement in collection timing. It is not a forecast of Bizgenix results. Interest savings require an actual reduction in interest-bearing borrowing.
          </p>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="bg-white rounded-2xl border-2 border-[#2E7D4E]/30 p-6 sm:p-9 shadow-xl shadow-[#2E7D4E]/10 mb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Annual Turnover */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>1. Annual Turnover (Revenue)</span>
                  </label>
                  <span className="text-base font-extrabold text-[#25663F] tabular-nums">
                    ₹{turnoverCrores} Crores
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={turnoverCrores}
                  onChange={(e) => setTurnoverCrores(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹5 Cr</span>
                  <span>₹75 Cr</span>
                  <span>₹150 Cr+</span>
                </div>
              </div>

              {/* Slider 2: Current DSO */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>2. Current Debtors Aging / DSO</span>
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    {currentDso} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="120"
                  step="5"
                  value={currentDso}
                  onChange={(e) => setCurrentDso(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>30 Days (Fast)</span>
                  <span>65 Days (Indian Mfg Avg)</span>
                  <span>120 Days (Stressed)</span>
                </div>
              </div>

              {/* Slider 3: Bank CC / OD Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>3. Bank CC / Overdraft Interest Rate</span>
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    {interestRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min="8.0"
                  max="14.0"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>8.5%</span>
                  <span>10.5%</span>
                  <span>14.0%</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <Coins className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                <span>Illustrative formula: annual turnover ÷ 365 × assumed days improved. Days improved = 22% of the entered collection period, rounded and bounded to 7–14 days. Turnover is used as a simplified proxy for credit sales. No audited benchmark or delivery promise is implied.</span>
              </div>
            </div>

            {/* Projected Result Callout Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  Illustrative Scenario Output
                </span>

                <div className="mt-4 pt-4 border-t border-slate-800 space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Potential Receivables Reduction:</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums mt-0.5">
                      ₹{(freedWorkingCapital / 100000).toFixed(2)} Lakhs
                    </div>
                    <span className="text-[11px] text-emerald-400">
                      assuming a {dsoReduction}-day collection improvement
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-xs text-slate-400 block">Potential Annual Interest Difference:</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#2E7D4E] tabular-nums mt-0.5">
                      ₹{(annualInterestSaved / 100000).toFixed(2)} Lakhs / Yr
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Only if the released funds reduce borrowing at the entered rate
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Discuss Your Collection Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-white p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Choose the scope before the plan.</h3>
          <p className="mt-4 text-slate-600">Discuss your Tally companies, reporting needs, users and required workflows. We will confirm current plan availability, implementation, support and any provider usage charges in a written proposal.</p>
          <p className="mt-3 text-sm text-slate-600">The scenario above is illustrative. It does not promise a collection, saving or sales increase.</p>
          <button onClick={onOpenDemo} className="mt-6 rounded-lg bg-emerald-800 px-6 py-3 font-semibold text-white">Discuss Growth Intelligence</button>
        </div>

      </div>
    </section>
  );
};
