import styles from './HeroAnimation.module.css';

// Each <source> carries the same breakpoint as the CSS (760px), so a phone downloads only the mobile
// video and a desktop only the desktop one. Before 28 Nov 2026 both were fetched and decoded on every device.
export default function HeroAnimation() {
  return (
    <div
      className={styles.visual}
      data-hero-animation
      role="img"
      aria-label="Business signals flowing into the Bizgenix intelligence core"
    >
      <video
        className={styles.desktopVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-animation/desktop-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-animation/desktop.webm" type="video/webm" media="(min-width: 761px)" />
        <source src="/hero-animation/desktop.mp4" type="video/mp4" media="(min-width: 761px)" />
      </video>
      <video
        className={styles.mobileVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-animation/mobile-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-animation/mobile.webm" type="video/webm" media="(max-width: 760px)" />
        <source src="/hero-animation/mobile.mp4" type="video/mp4" media="(max-width: 760px)" />
      </video>
    </div>
  );
}
