"use client";

import { useCallback, useEffect, useRef } from "react";

export default function CollapsibleSticky({
  title,
  children,
  topOffsetPx = 64,
  containerClassName = "",
}: {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly topOffsetPx?: number;
  readonly containerClassName?: string;
}) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const summaryRef = useRef<HTMLElement | null>(null);

  const handleToggle = useCallback(() => {
    const detailsElement = detailsRef.current;
    const summaryElement = summaryRef.current;
    if (!detailsElement || !summaryElement) return;

    if (!detailsElement.open) {
      const rect = summaryElement.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY - topOffsetPx - 8;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  }, [topOffsetPx]);

  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;
    el.addEventListener("toggle", handleToggle);
    return () => {
      el.removeEventListener("toggle", handleToggle);
    };
  }, [handleToggle]);

  return (
    <details
      ref={detailsRef}
      className={`group rounded-lg ${containerClassName}`}
    >
      <summary
        ref={summaryRef as unknown as React.RefObject<HTMLDetailsElement>}
        className="cursor-pointer flex items-center justify-between p-4 text-2xl font-bold text-gray-900 dark:text-white group-open:sticky group-open:top-16 group-open:z-40 group-open:bg-white/90 group-open:dark:bg-gray-900/90 group-open:backdrop-blur-sm group-open:shadow-sm"
      >
        <span>{title}</span>
        <span className="ml-3 inline-block transition-transform group-open:rotate-180 text-gray-500">
          ⌄
        </span>
      </summary>
      <div className="pt-2">{children}</div>
    </details>
  );
}
