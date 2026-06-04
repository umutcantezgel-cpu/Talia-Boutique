import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Impressum",
  description: "Impressum der Nur Manufaktur.",
});

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p className="font-body-md text-[#222222]/70 mb-8">
        Angaben gemäß § 5 TMG:<br />
        Rabia Azize Tezgel<br />
        Talia Boutique<br />
        Lessingstraße 4<br />
        35578 Wetzlar<br />
        Deutschland
      </p>
      
      <h2>Kontakt</h2>
      <p className="font-body-md text-[#222222]/70 mb-8">
        Telefon: +49 172 1751792<br />
        E-Mail: salam@ay-nur.de
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p className="font-body-md text-[#222222]/70 mb-8">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE [HIER DEINE UST-ID EINTRAGEN]
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p className="font-body-md text-[#222222]/70 mb-8">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#D9A5B3] hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p className="font-body-md text-[#222222]/70 mb-8">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  );
}
