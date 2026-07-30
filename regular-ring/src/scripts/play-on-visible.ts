export function playOnVisible() {
  const videos = document.querySelectorAll<HTMLVideoElement>(
    'video[data-play-on-visible]:not([data-play-bound])',
  );
  if (!videos.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  videos.forEach((video) => {
    video.dataset.playBound = '';
    video.loop = video.hasAttribute('loop');
    video.muted = true;
    video.playsInline = true;

    const rateAttr = video.dataset.playbackRate;
    const playbackRate = rateAttr ? Number.parseFloat(rateAttr) : 1;
    if (Number.isFinite(playbackRate) && playbackRate > 0) {
      video.playbackRate = playbackRate;
    }

    if (reducedMotion) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      const play = () => {
        if (Number.isFinite(playbackRate) && playbackRate > 0) {
          video.playbackRate = playbackRate;
        }
        video.play().catch(() => {});
      };
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        play();
      } else {
        video.addEventListener('canplay', play, { once: true });
        video.load();
      }
    };

    const target =
      video.closest<HTMLElement>('[data-component="case-video-banner"]') ??
      video.closest<HTMLElement>('[data-component="workflow-video"]') ??
      video.closest<HTMLElement>('.cases-preview__cell') ??
      video;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (video.loop) video.pause();
            return;
          }
          tryPlay();
          if (!video.loop) observer.unobserve(entry.target);
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
