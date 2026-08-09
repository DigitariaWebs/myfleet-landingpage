import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de MyFleet (Allure Limousine SA) : données traitées, finalités, sous-traitants, transferts, durées et vos droits selon la nLPD suisse et le RGPD.",
  alternates: { canonical: "/confidentialite" },
};

// Adresse de contact « données », identique à celle de l'Impressum.
const CONTACT_EMAIL = "info@allure-limousine.com";

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      intro="Allure Limousine SA (« MyFleet ») accorde une grande importance à la protection de vos données. Cette politique explique quelles données nous traitons, dans quel but, avec quels prestataires, et quels sont vos droits selon la loi fédérale suisse sur la protection des données (nLPD) et, lorsqu'il s'applique, le Règlement général sur la protection des données de l'UE (RGPD)."
      lastUpdated="6 juillet 2026"
    >
      <LegalSection title="Responsable du traitement">
        <p>
          Le responsable du traitement est&nbsp;:
          <br />
          <strong>Allure Limousine SA</strong> — chemin des Chalets 5, 1279
          Chavannes-de-Bogis (VD), Suisse — IDE&nbsp;CHE-399.675.906.
        </p>
        <p>
          Pour toute question relative à vos données ou pour exercer vos droits&nbsp;:
          e-mail {CONTACT_EMAIL}.
        </p>
      </LegalSection>

      <LegalSection title="Données que nous traitons">
        <p>Selon votre rôle, nous traitons les catégories de données suivantes&nbsp;:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Personnel de l&apos;agence</strong>&nbsp;: nom, prénom, adresse
            e-mail, numéro de téléphone, rôle et identifiants de connexion.
          </li>
          <li>
            <strong>Locataires (clients)</strong>&nbsp;: nom, prénom, date de naissance,
            adresse e-mail, numéro de téléphone, et <strong>documents
            d&apos;identité</strong> fournis pour la vérification (passeport ou carte
            d&apos;identité et permis de conduire).
          </li>
          <li>
            <strong>Location et véhicule</strong>&nbsp;: réservations, contrats signés,
            kilométrage, lieux de prise en charge et de restitution, et{" "}
            <strong>photos d&apos;inspection du véhicule</strong> (avant/après location),
            analysées le cas échéant par un outil de détection de dommages.
          </li>
          <li>
            <strong>Paiements</strong>&nbsp;: montants, statut et références de
            transaction. Les données de carte bancaire sont traitées directement par
            notre prestataire de paiement et ne transitent pas par nos serveurs.
          </li>
          <li>
            <strong>Données techniques et de localisation</strong>&nbsp;: données
            d&apos;usage, journaux techniques, et — avec votre autorisation via
            l&apos;application — l&apos;accès à l&apos;appareil photo, à la localisation
            et à la photothèque, aux fins de la location et des inspections.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Finalités et bases légales">
        <p>Nous traitons ces données pour&nbsp;:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            fournir le service, gérer les réservations, contrats, inspections et
            paiements (<em>exécution du contrat</em>)&nbsp;;
          </li>
          <li>
            vérifier l&apos;identité des locataires et prévenir la fraude
            (<em>obligation légale / intérêt légitime</em>)&nbsp;;
          </li>
          <li>
            assurer la sécurité, la maintenance et l&apos;amélioration du service
            (<em>intérêt légitime</em>)&nbsp;;
          </li>
          <li>
            répondre à vos demandes et respecter nos obligations légales
            (<em>consentement / obligation légale</em>).
          </li>
        </ul>
        <p>
          Le traitement repose sur les motifs justificatifs de la nLPD et, lorsque le
          RGPD s&apos;applique, sur les bases de son article&nbsp;6.
        </p>
      </LegalSection>

      <LegalSection title="Sous-traitants et destinataires">
        <p>
          Vos données sont accessibles au personnel habilité d&apos;Allure Limousine SA
          et à des sous-traitants techniques agissant pour notre compte, tenus à la
          confidentialité&nbsp;:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Supabase, Inc.</strong> — hébergement de la base de données, authentification et stockage des fichiers.</li>
          <li><strong>Stripe, Inc.</strong> — traitement des paiements et des abonnements.</li>
          <li><strong>OpenAI</strong> — analyse des photos d&apos;inspection pour la détection de dommages.</li>
          <li><strong>Resend</strong> — envoi des e-mails transactionnels.</li>
          <li><strong>Sentry</strong> — surveillance technique et rapports d&apos;erreurs.</li>
          <li><strong>Expo</strong> — envoi des notifications push mobiles.</li>
          <li><strong>Vercel, Inc.</strong> et <strong>Railway Corp.</strong> — hébergement du site et du backend.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Transferts à l'étranger">
        <p>
          Certains de ces prestataires sont situés en dehors de la Suisse et de
          l&apos;Union européenne, notamment aux États-Unis. Ces transferts sont
          encadrés par des garanties appropriées (clauses contractuelles types et/ou
          mécanismes reconnus), conformément à la nLPD et au RGPD.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Nous conservons vos données pour la durée nécessaire aux finalités
          ci-dessus, puis les supprimons ou les anonymisons. Les données de location,
          de contrat et de facturation sont conservées pendant la durée requise par les
          obligations légales suisses (notamment la conservation comptable de dix ans).
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément à la nLPD et, le cas échéant, au RGPD, vous disposez des droits
          d&apos;<strong>accès</strong>, de <strong>rectification</strong>, d&apos;
          <strong>effacement</strong>, de <strong>limitation</strong>, d&apos;
          <strong>opposition</strong> et de <strong>portabilité</strong> de vos données,
          ainsi que du droit de retirer votre consentement à tout moment.
        </p>
        <p>
          Pour exercer ces droits, écrivez-nous à {CONTACT_EMAIL}. Vous pouvez également
          saisir une autorité de contrôle&nbsp;: en Suisse, le{" "}
          <strong>Préposé fédéral à la protection des données et à la transparence
          (PFPDT)</strong>&nbsp;; dans l&apos;UE, l&apos;autorité de protection des
          données de votre pays de résidence.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées (chiffrement en transit, contrôle des accès, cloisonnement par
          agence) afin de protéger vos données contre la perte, l&apos;altération ou
          l&apos;accès non autorisé.
        </p>
      </LegalSection>

      <LegalSection title="Contact et mises à jour">
        <p>
          Cette politique peut être mise à jour&nbsp;; la date de dernière révision
          figure en tête de page. Pour toute question, consultez aussi nos{" "}
          <Link className="text-primary underline underline-offset-4" href="/mentions-legales">
            mentions légales
          </Link>{" "}
          et notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/cookies">
            politique de cookies
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
