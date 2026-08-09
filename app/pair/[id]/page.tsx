import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PairActions } from "./PairActions";

/**
 * Landing for an agency pairing QR opened in a browser.
 *
 * The QR encodes `https://myfleetagency.com/pair/<agency-uuid>`. Scanned from
 * inside the renter app it never reaches this page — the app parses the string
 * locally. This route serves the likelier first contact: someone pointing their
 * phone's ordinary camera at a QR on an agency counter.
 *
 * Deliberately not personalised. There is no unauthenticated endpoint that
 * resolves an agency id to a name, and inventing one is out of scope here, so
 * the page stays generic rather than guessing at the agency.
 */

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const metadata: Metadata = {
  title: "Associer votre agence",
  description:
    "Associez votre compte MyFleet à votre agence de location pour réserver un véhicule depuis l'application.",
  // Per-agency URLs: no SEO value, and indexing them would publish agency
  // identifiers. Also excluded from the sitemap and disallowed in robots.txt.
  robots: { index: false, follow: false },
};

export default async function PairPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Anything that is not an agency id is a mistyped or corrupted scan.
  if (!UUID_RE.test(id)) notFound();

  return (
    <main className="min-h-screen bg-background text-on-background flex items-center justify-center px-6 py-24">
      <section className="w-full max-w-2xl glass-panel rounded-super p-10 md:p-16 border border-black/10">
        <Link className="inline-flex items-center justify-center gap-3 mb-10" href="/">
          <Image
            alt="MyFleet"
            className="h-12 w-auto object-contain"
            height={96}
            src="/logo.png"
            width={120}
          />
          <span className="text-2xl font-bold tracking-tighter uppercase">MyFleet</span>
        </Link>

        <p className="text-xs uppercase tracking-[0.35em] text-primary mb-6">
          Association d&apos;agence
        </p>
        <h1 className="text-4xl md:text-5xl ultra-bold letter-spacing-extra mb-6">
          Vous y êtes presque
        </h1>
        <p className="text-tertiary text-lg leading-relaxed mb-10">
          Ce QR code associe votre compte à votre agence de location. L&apos;association
          se fait depuis l&apos;application MyFleet&nbsp;: ouvrez-la, puis scannez à
          nouveau ce code depuis l&apos;écran de scan.
        </p>

        <PairActions agencyId={id} />

        <div className="mt-12 pt-8 border-t border-black/10">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-3">
            Qu&apos;est-ce que MyFleet&nbsp;?
          </h2>
          <p className="text-tertiary text-sm leading-relaxed">
            MyFleet est l&apos;application qui vous permet de réserver un véhicule
            auprès de votre agence de location, de suivre vos réservations, de signer
            votre contrat et d&apos;échanger avec l&apos;agence, depuis votre téléphone.
          </p>
        </div>
      </section>
    </main>
  );
}
