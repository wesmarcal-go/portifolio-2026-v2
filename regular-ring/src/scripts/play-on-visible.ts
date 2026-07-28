export function playOnVisible() {
  const videos = document.querySelectorAll<HTMLVideoElement>(
    'video[data-play-on-visible]:not([data-play-bound])',
  );
  if (!videos.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  videos.forEach((video) => {
    video.dataset.playBound = '';
    video.loop = false;
    video.muted = true;
    video.playsInline = true;

    if (reducedMotion) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      const play = () => video.play().catch(() => {});
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        play();
      } else {
        video.addEventListener('canplay', play, { once: true });
        video.load();
      }
    };

    const target =
      video.closest<HTMLElement>('[data-component="workflow-video"]') ?? video;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tryPlay();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(target);
  });
}

// Run on module evaluate (covers late script load) and on every Astro navigation.
playOnVisible();
document.addEventListener('astro:page-load', playOnVisible);
