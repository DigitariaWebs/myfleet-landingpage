import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site et des services MyFleet : accès, obligations, propriété intellectuelle, responsabilité et droit applicable.",
  alternates: { canonical: "/cgu" },
};

export default function CguPage() {
  return (
    <LegalPage
      eyebrow="Conditions d'utilisation"
      title="Conditions générales d'utilisation"
      intro="Les présentes conditions générales d'utilisation (CGU) définissent les modalités d'accès et d'utilisation du site myfleetagency.com et des services MyFleet, exploités par Allure Limousine SA. En accédant au site, vous reconnaissez en avoir pris connaissance et les accepter."
      lastUpdated="6 juillet 2026"
    >
      <LegalSection title="Objet">
        <p>
          «&nbsp;MyFleet&nbsp;» désigne le service exploité par Allure Limousine SA. Les
          présentes CGU ont pour objet de définir les conditions dans lesquelles MyFleet
          met à disposition son site et présente ses services destinés aux agences de
          location automobile, ainsi que les engagements réciproques de MyFleet et de
          l&apos;utilisateur.
        </p>
      </LegalSection>

      <LegalSection title="Accès au site et aux services">
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d&apos;un
          accès à Internet. Les frais liés à cet accès (matériel, logiciels,
          connexion) restent à la charge de l&apos;utilisateur.
        </p>
        <p>
          MyFleet s&apos;efforce d&apos;assurer la disponibilité du site mais ne peut
          être tenue responsable des interruptions liées à la maintenance, aux mises
          à jour ou à des événements indépendants de sa volonté.
        </p>
      </LegalSection>

      <LegalSection title="Description des services">
        <p>
          MyFleet est une plateforme SaaS destinée aux agences de location
          automobile, comprenant notamment un CRM et une application client en marque
          blanche. La souscription aux services et l&apos;accès à l&apos;espace agence
          peuvent faire l&apos;objet de conditions contractuelles distinctes.
        </p>
        {/* TODO: Renvoyer vers les conditions générales de vente / de service si elles existent */}
      </LegalSection>

      <LegalSection title="Obligations de l'utilisateur">
        <p>L&apos;utilisateur s&apos;engage à&nbsp;:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>utiliser le site et les services de manière loyale et conforme à leur destination&nbsp;;</li>
          <li>fournir des informations exactes lors de ses demandes&nbsp;;</li>
          <li>
            ne pas porter atteinte au bon fonctionnement du site, ni tenter d&apos;y
            accéder de manière frauduleuse&nbsp;;
          </li>
          <li>respecter les droits de propriété intellectuelle de MyFleet et des tiers.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus et éléments du site demeure la propriété
          exclusive de MyFleet. Aucune disposition des présentes CGU ne saurait être
          interprétée comme conférant à l&apos;utilisateur un quelconque droit de
          propriété sur ces éléments.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          MyFleet ne saurait être tenue responsable des dommages indirects résultant
          de l&apos;utilisation du site. L&apos;utilisateur est seul responsable de
          l&apos;usage qu&apos;il fait des informations et services mis à disposition.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Le traitement des données personnelles dans le cadre de l&apos;utilisation
          du site est décrit dans notre{" "}
          <Link className="text-primary underline underline-offset-4" href="/confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Modification des CGU">
        <p>
          MyFleet se réserve le droit de modifier les présentes CGU à tout moment.
          Les conditions applicables sont celles en vigueur au moment de votre
          utilisation du site. Nous vous invitons à les consulter régulièrement.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable et litiges">
        <p>
          Les présentes CGU sont soumises au <strong>droit suisse</strong>. En cas de
          litige, et à défaut de résolution amiable, le for exclusif est au siège
          d&apos;Allure Limousine SA, à Chavannes-de-Bogis (canton de Vaud), sous réserve
          d&apos;un for impératif prévu par la loi.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
