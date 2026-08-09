import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de MyFleet, service exploité par Allure Limousine SA (Chavannes-de-Bogis, Suisse) : éditeur, hébergeur, propriété intellectuelle et contact.",
  alternates: { canonical: "/mentions-legales" },
};

// Le droit suisse (LCD art. 3 al. 1 let. s) exige, pour une offre commerciale
// en ligne, l'identité de l'exploitant et une adresse de contact incluant un
// e-mail — tout cela figure ci-dessous.
//
// Volontairement omis :
//   - Capital-actions : non exigé sur un site web. Le droit suisse impose que,
//     s'il est mentionné, il le soit intégralement (souscrit ET libéré) ; une
//     mention partielle serait pire qu'une absence de mention.
//   - Numéro de TVA : obligatoire sur les factures, pas sur un site web.
//     À ajouter ici uniquement si la société est assujettie et souhaite
//     l'afficher (format « CHE-399.675.906 TVA »).
const CONTACT_EMAIL = "info@allure-limousine.com";

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Les présentes mentions légales encadrent l'utilisation du site myfleetagency.com et de l'application MyFleet, exploités par Allure Limousine SA. Nous vous invitons à les lire attentivement."
      lastUpdated="6 juillet 2026"
    >
      <LegalSection title="Éditeur">
        <p>
          Le site myfleetagency.com et l&apos;application MyFleet sont exploités
          par&nbsp;:
        </p>
        <p>
          <strong>Allure Limousine SA</strong>
          <br />
          Forme juridique&nbsp;: société anonyme (SA)
          <br />
          Siège social&nbsp;: chemin des Chalets 5, 1279 Chavannes-de-Bogis (VD), Suisse
          <br />
          N° IDE&nbsp;: CHE-399.675.906
          <br />
          Registre du commerce&nbsp;: inscrite au Registre du commerce du canton de Vaud (n°&nbsp;CH-621.3.008.895-7)
          <br />
          Administrateur / responsable de la publication&nbsp;: Ahmed Dardari
        </p>
        <p>
          «&nbsp;MyFleet&nbsp;» est un service de gestion et de location de flotte
          automobile exploité par Allure Limousine SA.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question relative au site, à l&apos;application ou à nos
          services&nbsp;:
        </p>
        <p>
          E-mail&nbsp;:{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site et l&apos;application sont hébergés par des prestataires
          d&apos;infrastructure&nbsp;:
        </p>
        <p>
          Site web&nbsp;: <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          <br />
          Backend&nbsp;: <strong>Railway Corp.</strong>, États-Unis.
          <br />
          Base de données et stockage&nbsp;: <strong>Supabase, Inc.</strong>, États-Unis.
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des éléments composant le site et l&apos;application MyFleet
          (marque, logo, textes, visuels, interfaces, code et bases de données) est la
          propriété exclusive d&apos;Allure Limousine SA ou de ses partenaires, et est
          protégé par les lois en vigueur relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation, totale ou
          partielle, de ces éléments sans l&apos;autorisation écrite préalable
          d&apos;Allure Limousine SA est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Allure Limousine SA met tout en œuvre pour fournir des informations exactes et
          à jour. Pour autant, elle ne saurait garantir l&apos;exactitude,
          l&apos;exhaustivité ou l&apos;actualité des informations diffusées. Votre
          utilisation du site et de l&apos;application se fait sous votre responsabilité.
        </p>
      </LegalSection>

      <LegalSection title="Protection des données et cookies">
        <p>
          Le traitement de vos données personnelles est détaillé dans notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/confidentialite">
            politique de confidentialité
          </Link>
          . La gestion des traceurs est décrite dans notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/cookies">
            politique de cookies
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable et for">
        <p>
          Les présentes mentions légales sont régies par le <strong>droit suisse</strong>.
          Dans la mesure permise par la loi, le for exclusif est au siège d&apos;Allure
          Limousine SA, à Chavannes-de-Bogis (canton de Vaud), sous réserve d&apos;un for
          impératif prévu par la loi.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
