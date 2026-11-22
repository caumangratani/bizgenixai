'use client';
import { useState } from 'react';
import styles from './tool.module.css';

type Field = 'sales' | 'debtors' | 'stock' | 'creditors' | 'purchases' | 'credit' | 'rate';
const FIELDS: { key: Field; label: string; hint: string; unit: string; initial: string }[] = [
  { key: 'sales', label: 'Sales in the last 12 months', hint: 'Tally: Profit & Loss → Sales Accounts', unit: '₹', initial: '' },
  { key: 'debtors', label: 'Money customers owe you today', hint: 'Tally: Balance Sheet → Sundry Debtors (closing)', unit: '₹', initial: '' },
  { key: 'stock', label: 'Closing stock', hint: 'Tally: Balance Sheet → Closing Stock', unit: '₹', initial: '' },
  { key: 'creditors', label: 'Money you owe suppliers today', hint: 'Tally: Balance Sheet → Sundry Creditors (closing)', unit: '₹', initial: '' },
  { key: 'purchases', label: 'Purchases in the last 12 months', hint: 'Tally: Profit & Loss → Purchase Accounts', unit: '₹', initial: '' },
  { key: 'credit', label: 'Credit period you give customers', hint: 'Your usual terms', unit: 'days', initial: '30' },
  { key: 'rate', label: 'Interest rate on your borrowing', hint: 'Bank CC/OD rate, or what money costs you', unit: '% a year', initial: '12' },
];

const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');
const days = (n: number) => `${Math.round(n)} days`;

export default function Calculator() {
  const [v, setV] = useState<Record<Field, string>>(() => Object.fromEntries(FIELDS.map(f => [f.key, f.initial])) as Record<Field, string>);
  const num = (k: Field) => Math.max(0, Number(String(v[k]).replace(/[^0-9.]/g, '')) || 0);

  const r = (() => {
    const sales = num('sales'), debtors = num('debtors'), stock = num('stock'), creditors = num('creditors'), purchases = num('purchases');
    const credit = num('credit'), rate = num('rate') / 100;
    if (!sales || !purchases) return null;
    const debtorDays = (debtors / sales) * 365;
    const stockDays = (stock / purchases) * 365;
    const creditorDays = (creditors / purchases) * 365;
    const cycle = debtorDays + stockDays - creditorDays;
    const stuck = debtors + stock - creditors;
    const lateDays = Math.max(0, debtorDays - credit);
    const lateMoney = (sales / 365) * lateDays;
    return {
      debtorDays, stockDays, creditorDays, cycle, stuck,
      yearlyCost: Math.max(0, stuck) * rate,
      lateDays, lateMoney,
      free15Debtors: (sales / 365) * Math.min(15, debtorDays),
      free15Stock: (purchases / 365) * Math.min(15, stockDays),
    };
  })();

  return <div className={styles.tool}>
    <form className={styles.inputs} onSubmit={e => e.preventDefault()} aria-label="Your numbers">
      {FIELDS.map(f => <label key={f.key}>
        <span className={styles.label}>{f.label} <em>({f.unit})</em></span>
        <input aria-label={f.label} inputMode="decimal" value={v[f.key]} placeholder={f.unit === '₹' ? 'e.g. 5,00,00,000' : ''}
          onChange={e => setV(prev => ({ ...prev, [f.key]: e.target.value }))} />
        <span className={styles.hint}>{f.hint}</span>
      </label>)}
      <p className={styles.small}>Everything is calculated in your browser. Nothing you type is sent or saved.</p>
    </form>

    <section className={styles.results} aria-live="polite" aria-label="Where your money is stuck">
      {!r ? <p className={styles.empty}>Enter at least your sales and purchases for the last 12 months to see the result.</p> : <>
        <h2>Your result</h2>
        <div className={styles.big}><span>Money locked in your business today</span><strong>{inr(r.stuck)}</strong><small>debtors + stock − creditors</small></div>
        <div className={styles.grid}>
          <div><span>Customers pay you in</span><strong>{days(r.debtorDays)}</strong></div>
          <div><span>Stock sits for</span><strong>{days(r.stockDays)}</strong></div>
          <div><span>You pay suppliers in</span><strong>{days(r.creditorDays)}</strong></div>
          <div><span>Cash cycle</span><strong>{days(r.cycle)}</strong></div>
        </div>
        <ul className={styles.read}>
          <li>Every rupee of sales takes about <strong>{days(r.cycle)}</strong> to come back as cash after you pay for it.</li>
          {r.lateDays > 0
            ? <li>Customers are taking about <strong>{days(r.lateDays)}</strong> longer than your {Math.round(num('credit'))}-day terms. That is roughly <strong>{inr(r.lateMoney)}</strong> sitting with customers beyond your terms.</li>
            : <li>On average, customers are paying within your {Math.round(num('credit'))}-day terms. Check the oldest bills anyway: averages hide a few very late payers.</li>}
          <li>At {num('rate')}% a year, the money locked up costs about <strong>{inr(r.yearlyCost)}</strong> a year in interest, or interest you could have saved.</li>
          <li>Collecting <strong>15 days faster</strong> would free about <strong>{inr(r.free15Debtors)}</strong>. Holding <strong>15 days less stock</strong> would free about <strong>{inr(r.free15Stock)}</strong>.</li>
        </ul>
        <div className={styles.cta}>
          <p><strong>Want this every Monday, by customer and by item?</strong> Growth Intelligence reads your Tally read-only and shows who is paying late, what has stopped selling and the week cash may run short.</p>
          <a className={styles.button} href="/contact?intent=product&product=growth-intelligence#contact-form">See it on your own Tally data →</a>
        </div>
      </>}
    </section>
  </div>;
}
