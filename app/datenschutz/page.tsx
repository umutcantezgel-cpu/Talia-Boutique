import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Nur Manufaktur.",
});

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>

      <h2>2. Hosting und Server-Log-Files</h2>
      <p>
        Unsere Website wird bei einem externen Dienstleister gehostet. Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind u.a. Browsertyp/-version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und die Uhrzeit der Serveranfrage.
      </p>

      <h2>3. Cookies und Local Storage</h2>
      <p>
        Diese Website verwendet teilweise so genannte Cookies oder den Local Storage Ihres Browsers. Diese dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Über unseren Cookie-Banner können Sie detailliert einstellen, welchen Verarbeitungen Sie zustimmen. Essenzielle (technisch notwendige) Daten werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
      </p>

      <h2>4. Erfassung der E-Mail für die Warteliste</h2>
      <p>
        Wenn Sie sich für unsere Pre-Order-Warteliste eintragen, nutzen wir Ihre E-Mail-Adresse ausschließlich, um Sie über Neuigkeiten und exklusive Vorabzugänge zur Talia Kollektion zu informieren (Rechtsgrundlage: Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>
    </LegalLayout>
  );
}
