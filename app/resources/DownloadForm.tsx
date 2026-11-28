'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import styles from './resources.module.css';

const SAVED = 'bizgenix-downloader';

/** Short form in front of each download. Sends a "Resource Download" enquiry, then opens the file. */
type Labels = { heading?: string; intro?: string; button?: string; done?: string };

export default function DownloadForm({ title, file, labels = {} }: { title: string; file: string; labels?: Labels }) {
  const idRef = useRef('');
  const attribution = useRef<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    idRef.current = crypto.randomUUID();
    try {
      const saved = JSON.parse(localStorage.getItem(SAVED) || '{}') as Record<string, string>;
      for (const key of ['name', 'email', 'phone', 'company']) {
        const input = formRef.current?.elements.namedItem(key) as HTMLInputElement | null;
        if (input && saved[key] && !input.value) input.value = saved[key];
      }
    } catch { /* storage unavailable */ }
    const params = new URLSearchParams(window.location.search);
    let first: Record<string, string> = {};
    try { first = JSON.parse(sessionStorage.getItem('bizgenix-attribution') || '{}'); } catch { /* storage unavailable */ }
    const referrer = document.referrer ? new URL(document.referrer).hostname : 'direct';
    attribution.current = params.has('utm_source')
      ? { source: params.get('utm_source') || '', medium: params.get('utm_medium') || '', campaign: params.get('utm_campaign') || '' }
      : { source: first.source || referrer, medium: first.medium || '', campaign: first.campaign || '' };
  }, []);

  function openFile() {
    const a = document.createElement('a');
    a.href = file;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setError('');
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const message = `Downloaded: ${title}. Role: ${data.role || 'not given'}.`;
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, queryType: 'Resource Download', product: title, message, id: idRef.current, ...attribution.current }),
      });
      const result = await response.json();
      if (!response.ok || !result.accepted) throw new Error(result.error || 'Unable to send. Please try again.');
      try { localStorage.setItem(SAVED, JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company })); } catch { /* storage unavailable */ }
      setDone(true);
      openFile();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to send. Please try again.');
    } finally { setBusy(false); }
  }

  if (done) return <div className={styles.formCard} role="status">
    <h2>Your download has started.</h2>
    <p>If it did not open, use the button below. Our team may follow up on WhatsApp or email with related material; reply “stop” any time.</p>
    <a className={styles.button} href={file} download>{labels.done || 'Download the PDF'} <span aria-hidden="true">↓</span></a>
  </div>;

  return <form ref={formRef} className={styles.formCard} onSubmit={submit}>
    <h2>{labels.heading || 'Get the free PDF'}</h2>
    <p>{labels.intro || 'Tell us where to reach you. The download starts straight away.'}</p>
    <label><span className={styles.labelText}>Name<b>*</b></span><input name="name" autoComplete="name" required minLength={2} maxLength={200} /></label>
    <label><span className={styles.labelText}>Email<b>*</b></span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label><span className={styles.labelText}>Mobile / WhatsApp<b>*</b></span><input name="phone" type="tel" autoComplete="tel" required placeholder="98765 43210, or +971 50 123 4567" /></label>
    <label><span className={styles.labelText}>Company</span><input name="company" autoComplete="organization" maxLength={200} /></label>
    <label><span className={styles.labelText}>I am a</span>
      <select name="role" defaultValue="">
        <option value="">Choose one</option>
        <option>Business owner / founder</option>
        <option>CA / consultant / professional</option>
        <option>HR / L&amp;D / corporate manager</option>
        <option>Student / early career</option>
        <option>Other</option>
      </select>
    </label>
    <input className={styles.trap} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {error && <p className={styles.error} role="alert">{error}</p>}
    <button className={styles.button} type="submit" disabled={busy}>{busy ? 'Sending…' : labels.button || 'Download free PDF'} <span aria-hidden="true">↓</span></button>
    <p className={styles.small}>We use these details to send the file and related material from Bizgenix AI. See our <a href="/privacy-policy">privacy policy</a>.</p>
  </form>;
}
