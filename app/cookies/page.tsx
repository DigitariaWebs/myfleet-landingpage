import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Politique de cookies de MyFleet (Allure Limousine SA) : le site n'utilise que des cookies strictement nécessaires, sans traceurs publicitaires ni de mesure d'audience.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Gestion des traceurs"
      title="Politique de cookies"
      intro="Cette politique explique ce que sont les cookies et lesquels sont utilisés sur myfleetagency.com. En résumé : le site n'utilise que des cookies strictement nécessaires, et aucun traceur publicitaire ou de mesure d'audience."
      lastUpdated="6 juillet 2026"
    >
      <LegalSection title="Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier déposé sur votre terminal (ordinateur,
          tablette, smartphone) lors de la consultation d&apos;un site. Il permet
          notamment de faire fonctionner le site et de mémoriser certaines informations
          techniques.
        </p>
      </LegalSection>

      <LegalSection title="Les cookies que nous utilisons">
        <p>
          À ce jour, myfleetagency.com n&apos;utilise que des{" "}
          <strong>cookies strictement nécessaires</strong> au bon fonctionnement et à la
          sécurité du site (par exemple, la mémorisation de préférences techniques). Ces
          cookies sont indispensables&nbsp;; conformément à la loi, ils ne requièrent pas
          votre consentement.
        </p>
        <p>
          Nous n&apos;utilisons <strong>aucun cookie de mesure d&apos;audience,
          publicitaire ou de suivi</strong> à des fins marketing sur ce site.
        </p>
      </LegalSection>

      <LegalSection title="Si cela évolue">
        <p>
          Si nous introduisions à l&apos;avenir des traceurs non essentiels (mesure
          d&apos;audience, par exemple), ils ne seraient déposés qu&apos;
          <strong>après recueil de votre consentement</strong>, via une bannière vous
          permettant d&apos;accepter, de refuser ou de personnaliser votre choix, et de
          le modifier à tout moment. Cette page serait alors mise à jour avec la liste
          précise des cookies concernés (nom, émetteur, finalité, durée).
        </p>
      </LegalSection>

      <LegalSection title="Gérer les cookies depuis votre navigateur">
        <p>
          Vous pouvez à tout moment configurer votre navigateur pour accepter, refuser
          ou être averti du dépôt de cookies. Chaque navigateur propose ses propres
          réglages, généralement accessibles depuis le menu «&nbsp;Options&nbsp;» ou
          «&nbsp;Préférences&nbsp;». Le refus de certains cookies strictement nécessaires
          peut limiter le fonctionnement du site.
        </p>
      </LegalSection>

      <LegalSection title="En savoir plus">
        <p>
          Le traitement de vos données personnelles est détaillé dans notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
