import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Impressum",
  description: "Impressum der Talia Boutique.",
});

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p className="font-body-md text-[#222222]/70 mb-8">
        Angaben gemäß § 5 TMG:<br />
        Talia Boutique<br />
        Inhaberin: Müge Yüceel<br />
        Bahnhofstraße 1<br />
        35576 Wetzlar<br />
        Deutschland
      </p>
      
      <h2>Kontakt</h2>
      <p className="font-body-md text-[#222222]/70 mb-8">
        Telefon: 06441 9637730<br />
        E-Mail: mugecivelek17@gmail.com
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p className="font-body-md text-[#222222]/70 mb-8">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        (wird nachgereicht / falls zutreffend)
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
