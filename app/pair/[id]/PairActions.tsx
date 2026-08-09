"use client";

import { useState } from "react";

import {
  CLIENT_APP_ANDROID_URL,
  CLIENT_APP_DEEPLINK_READY,
  CLIENT_APP_IOS_URL,
  CLIENT_APP_SCHEME,
} from "../../lib/site";

/**
 * What a renter can do from the pairing page.
 *
 * Three states, in order of how much we can actually offer:
 *
 * 1. The renter app handles `myfleet://pair/<id>` — offer to open it directly.
 *    Gated on CLIENT_APP_DEEPLINK_READY, false until that screen ships; a
 *    button that drops users onto an unmatched route is worse than none.
 * 2. The app is published — offer the store listings.
 * 3. Neither yet — say so plainly and give the instruction that does work
 *    today, which is to scan from inside the app.
 *
 * The deep link is a click, never an automatic redirect: browsers block
 * scheme navigation without a gesture, and a silent failure would read as a
 * broken page.
 */
export function PairActions({ agencyId }: { agencyId: string }) {
  const [copied, setCopied] = useState(false);

  const stores = [
    { label: "App Store", href: CLIENT_APP_IOS_URL },
    { label: "Google Play", href: CLIENT_APP_ANDROID_URL },
  ].filter((s): s is { label: string; href: string } => s.href !== null);

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(agencyId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard access can be denied; the id stays visible below regardless.
      setCopied(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {CLIENT_APP_DEEPLINK_READY && (
          <a
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-deep text-white text-sm font-bold uppercase tracking-widest"
            href={`${CLIENT_APP_SCHEME}://pair/${agencyId}`}
          >
            Ouvrir dans l&apos;application
          </a>
        )}

        {stores.map((store) => (
          <a
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/20 bg-black/5 text-sm font-bold uppercase tracking-widest"
            href={store.href}
            key={store.label}
            rel="noreferrer"
            target="_blank"
          >
            {store.label}
          </a>
        ))}
      </div>

      {stores.length === 0 && (
        <p className="text-tertiary text-sm leading-relaxed mt-2">
          L&apos;application MyFleet n&apos;est pas encore publiée sur les stores.
          Votre agence vous indiquera comment y accéder.
        </p>
      )}

      <div className="mt-10 rounded-2xl border border-black/10 bg-black/[0.03] p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
          Code de votre agence
        </p>
        <p className="font-mono text-sm break-all mb-4">{agencyId}</p>
        <p className="text-tertiary text-sm leading-relaxed mb-4">
          Si le scan depuis l&apos;application ne fonctionne pas, communiquez ce code
          à votre agence.
        </p>
        <button
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/20 bg-white text-xs font-bold uppercase tracking-widest"
          onClick={copyId}
          type="button"
        >
          {copied ? "Copié" : "Copier le code"}
        </button>
      </div>
    </div>
  );
}
