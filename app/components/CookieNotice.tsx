"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "myfleet-cookie-notice-ack";

// A cookie NOTICE (not a consent CMP): the site sets only strictly-necessary
// cookies and no trackers, so there is nothing to gate — we simply inform the
// visitor once and remember the acknowledgement. If non-essential trackers are
// ever added, upgrade this to a real accept/refuse consent banner.
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (private mode etc.) — stay hidden.
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore — we still hide the notice for this session.
    }
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
      role="dialog"
      aria-label="Information sur les cookies"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/80">
          Ce site utilise uniquement des cookies strictement nécessaires à son
          fonctionnement — aucun traceur publicitaire ni de mesure d&apos;audience.{" "}
          <Link
            href="/cookies"
            className="text-primary underline underline-offset-4"
          >
            En savoir plus
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="hover:bg-primary-deep shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition"
        >
          J&apos;ai compris
        </button>
      </div>
    </div>
  );
}
