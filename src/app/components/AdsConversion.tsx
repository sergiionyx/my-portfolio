"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AdsConversionProps = {
  sendTo: string;
  value?: number;
  currency?: string;
};

export default function AdsConversion({
  sendTo,
  value = 1.0,
  currency = "USD",
}: AdsConversionProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: sendTo,
        value,
        currency,
      });
    }
  }, [sendTo, value, currency]);

  return null;
}
