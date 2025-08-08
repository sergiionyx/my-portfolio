"use client";

import { useEffect } from "react";

type AnimatedFaviconProps = {
  // Array of icon frame paths under /public, e.g. ["/icons/favicon-anim-1.png", "/icons/favicon-anim-2.png"]
  frames?: string[];
  // Interval in ms between frames
  intervalMs?: number;
};

export default function AnimatedFavicon({
  frames = ["/icons/favicon-32x32-1.png", "/icons/favicon-32x32-2.png"],
  intervalMs = 400,
}: AnimatedFaviconProps) {
  useEffect(() => {
    const link = document.getElementById("favicon") as HTMLLinkElement | null;
    if (!link || frames.length === 0) return;

    let i = 0;
    let timer: number | undefined;

    const setFrame = (idx: number) => {
      // Cache-bust to ensure the browser refreshes
      link.href = `${frames[idx]}?v=${Date.now()}`;
    };

    const start = () => {
      stop();
      setFrame(i);
      timer = window.setInterval(() => {
        i = (i + 1) % frames.length;
        setFrame(i);
      }, intervalMs);
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [frames, intervalMs]);

  return null;
}
