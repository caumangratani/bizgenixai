'use client';
import { useEffect, useRef } from 'react';
import v from './videos.module.css';

// YouTube embed. A link to this page with ?t=<seconds> starts the video at that moment (used by the chapter list and by
// the Clip entries in the page's structured data).
export default function Player({ youtubeId, title }: { youtubeId: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const start = Number(new URLSearchParams(window.location.search).get('t'));
    if (frame.current && Number.isFinite(start) && start > 0) frame.current.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?start=${Math.floor(start)}`;
  }, [youtubeId]);
  return <div className={v.player} id="player">
    <iframe ref={frame} src={`https://www.youtube-nocookie.com/embed/${youtubeId}`} title={title} loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
  </div>;
}
