import { Language } from "@/contexts/language-context";

export const translations = {
  DE: {
    nav: {
      collections: "Kollektionen",
      journal: "Journal",
      lookbook: "Lookbook",
      gifts: "Geschenke",
      menu: "Menü",
      search: "Was suchst du?",
      boutique: "Die Boutique",
      about: "Über uns",
      creator: "Creator Program",
      press: "Presse & Medien",
      service: "Service",
      contact: "Kontakt & FAQ",
      tracking: "Bestellstatus",
      shipping: "Versand",
      care: "Pflegehinweise",
      changeLanguage: "Sprache wechseln",
      reviews: "Reviews",
    },
    footer: {
      newsletterTitle: "Werde Teil der Talia Boutique",
      newsletterDesc: "Melde dich an für exklusive Updates zu neuen Kollektionen und Events.",
      emailPlaceholder: "Deine E-Mail Adresse",
      subscribe: "Anmelden",
      visitUs: "Besuche uns",
      openingHours: "Mittwochs ab 10:30 Uhr",
      rights: "Alle Rechte vorbehalten.",
      legal: {
        imprint: "Impressum",
        privacy: "Datenschutz",
        terms: "AGB",
        revocation: "Widerruf",
      },
      followUs: "Folge uns",
      discover: "Entdecken",
      legalHeader: "Rechtliches",
      welcome: "Willkommen in unserer Welt."
    },
    home: {
      heroTitleMask1: "Elitäre",
      heroTitleMask2: "Präsenz.",
      heroDescription: "Erlebe handverlesene Kollektionen und kompromisslose Qualität. Die exklusive Adresse für Premium-Fashion.",
      heroButton: "Kollektion Entdecken",
      storeSubtitle: "Die Boutique",
      storeTitle: "Lokale Identität in Vollendung.",
      storeDescription: "Bahnhofstraße 1, 35576 Wetzlar. Ein Ort der Ästhetik und des erlesenen Geschmacks. Wir beraten dich persönlich und exklusiv.",
      storeQuote: "\"Mode ist keine Kleidung. Mode ist Charakter.\"",
      testimonialsSubtitle: "Google Maps (4,3 Sterne)",
      testimonialsTitle: "Was unsere Kundschaft sagt",
    },
    journal: {
      title: "Journal",
      subtitle: "Geschichten, Inspiration und Einblicke hinter die Kulissen.",
      readMore: "Weiterlesen",
    },
    lookbook: {
      title: "Lookbook",
      subtitle: "Inspiration für deinen individuellen Style.",
      dragToExplore: "Drag to Explore",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Haben Sie Fragen? Wir helfen Ihnen gerne weiter.",
      successTitle: "Vielen Dank für Ihre Nachricht!",
      successDesc: "Wir werden uns in Kürze bei Ihnen melden.",
      newMsgBtn: "Neue Nachricht",
      namePlaceholder: "Name",
      emailPlaceholder: "E-Mail",
      msgPlaceholder: "Ihre Nachricht",
      submitBtn: "Nachricht senden",
      toastSuccess: "Nachricht wurde versendet!",
      errors: {
        nameReq: "Name ist erforderlich",
        emailReq: "E-Mail ist erforderlich",
        emailInv: "Ungültige E-Mail Adresse",
        msgReq: "Nachricht ist erforderlich"
      }
    },
    care: {
      guide: "Care Guide",
      title1: "Für die",
      title2: "Ewigkeit gemacht.",
      desc: "Klicke auf die Karten, um die spezifischen Pflegehinweise für unsere Materialien freizulegen. Ein minimaler Pflegeaufwand sichert die makellose Ästhetik über Generationen.",
      flip: "Flip",
      materials: {
        velvet: {
          title: "Premium Samt",
          subtitle: "Das Herzstück unserer Hüllen",
          description: "Unser Signature-Samt aus Istanbul zeichnet sich durch seinen weichen Griff und den subtilen Glanz aus. Damit dieses Gefühl lange bleibt, benötigt der Stoff sanfte Aufmerksamkeit.",
          rules: [
            "Flecken nur mit einem leicht feuchten, farblosen Baumwolltuch abtupfen. Niemals reiben.",
            "Halte Samtprodukte von starken Wärmequellen fern, um die Farbbrillanz zu schützen.",
            "Leichte Druckstellen im Samt können oft mit ein wenig Dampf (aus sicherer Entfernung) wieder revitalisiert werden."
          ]
        },
        florals: {
          title: "Trockenblumen",
          subtitle: "Natur für die Ewigkeit",
          description: "Unsere handverlesenen Blumenbouquets für die besonderen Momente. Sie sind für die Ewigkeit gedacht, sofern sie richtig gepflegt werden.",
          rules: [
            "Vermeide hohe Luftfeuchtigkeit und direktes Wasser. Dies macht die feinen Blüten brüchig.",
            "Staube die Blüten hin und wieder ganz sanft mit kalter Zugluft (z.B. Föhn auf Kaltstufe) ab.",
            "Direkte Sonneneinstrahlung kann die zarten Naturfarben mit der Zeit ausbleichen lassen."
          ]
        },
        paper: {
          title: "Papier & Prägung",
          subtitle: "Die Kunst der Kartonage",
          description: "Für unsere Grußkarten und Boxen nutzen wir schwere Papiersorten mit teils tiefer Heißfolienprägung. Naturmaterialien reagieren auf ihre Umgebung.",
          rules: [
            "Lagere Papierprodukte stets trocken und flach liegend, um ein Wellen zu verhindern.",
            "Fasse foliengeprägte Elemente (Gold, Silber) möglichst nicht direkt an, da natürliche Hautöle die Prägung matt machen können."
          ]
        },
        tasbih: {
          title: "Natursteine & Holz",
          subtitle: "Deine Gebetskette",
          description: "Unsere Tasbih werden aus natürlichen Halbedelsteinen oder edlen Hölzern geknotet. Jede Berührung hinterlässt über die Jahre eine eigene Patina.",
          rules: [
            "Vermeide den direkten Kontakt mit Parfüm oder aggressiven Reinigungsmitteln.",
            "Bewahre sie bei Nichtgebrauch in ihrem originalen Samtbeutel auf.",
            "Holzperlen dunklen auf natürliche Weise nach - das ist ein Qualitätsmerkmal, kein Fehler."
          ]
        }
      }
    },
    shipping: {
      title: "Versand & Lieferung",
      desc: "Wir versenden unsere Produkte mit größter Sorgfalt und in umweltfreundlicher Verpackung. Alle Bestellungen werden klimaneutral mit DHL GoGreen verschickt.",
      costs: "Versandkosten",
      area: "Liefergebiet",
      cost: "Versandkosten",
      freeShipping: "Kostenfreier Versand",
      de: "Deutschland",
      deFree: "Ab 100 € Bestellwert",
      at: "Österreich",
      atFree: "Ab 150 € Bestellwert",
      ch: "Schweiz",
      chFree: "Ab 200 € Bestellwert",
      time: "Lieferzeiten",
      timeDesc: "Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware im Inland (Deutschland) innerhalb von 3 - 5 Tagen, bei Auslandslieferungen innerhalb von 5 - 7 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).",
      preorder: "Pre-Order & Warteliste",
      preorderDesc: "Bitte beachten Sie, dass für Artikel aus der exklusiven Pre-Order spezielle Produktionszeiten gelten. Da diese Stücke in unserer Manufaktur in Istanbul nach Auftragseingang per Hand gefertigt werden, kann die Lieferzeit hier zwischen 4-6 Wochen betragen. Die genaue voraussichtliche Lieferzeit wird stets transparent auf der jeweiligen Produktseite kommuniziert.",
      tracking: "Sendungsverfolgung",
      trackingDesc: "Sobald Ihre Bestellung unser Lager verlässt, erhalten Sie eine Versandbestätigung per E-Mail mit einem Tracking-Link, über den Sie den Status Ihrer Sendung jederzeit verfolgen können."
    },
    payment: {
      title: "Zahlungsmethoden",
      desc: "Wir bieten Ihnen in unserem Shop vielfältige und sichere Zahlungsmöglichkeiten an, um Ihren Einkauf so angenehm wie möglich zu gestalten.",
      security: "Höchste Sicherheit für Ihre Daten",
      securityDesc: "Bei Nur nehmen wir den Schutz Ihrer Zahlungsdaten ernst. Die gesamte Zahlungsabwicklung findet verschlüsselt nach den modernsten Sicherheitsstandards (SSL) statt. Wir speichern keine sensiblen Kreditkartendaten auf unseren eigenen Servern.",
      methods: {
        apple: { name: "Apple Pay", desc: "Zahlen Sie schnell und sicher mit Ihrem Apple-Gerät." },
        paypal: { name: "PayPal", desc: "Die einfache und sichere Zahlungsart. Auch mit PayPal Ratenkauf möglich." },
        klarna: { name: "Klarna (Rechnung / Ratenkauf)", desc: "Erst die Ware erhalten, dann später bezahlen oder in bequemen Raten." },
        card: { name: "Kreditkarte (Visa, Mastercard, AMEX)", desc: "Sichere Abwicklung über unseren Zahlungsanbieter Stripe." }
      }
    },
    about: {
      title: "Entity | The Architecture of Nur",
      subtitle: "Die Struktur, Handwerkskunst und Philosophie hinter Nur.",
      label: "The Entity",
      hero1: "Von den Basaren",
      hero2: "Istanbuls bis zu",
      hero3: "dir nach Hause.",
      heroDesc: "Nur ist mehr als eine Marke. Es ist ein Netzwerk aus jahrhundertealter Handwerkstradition, familiären Ateliers und einer modernen Vision von islamischem Minimalismus.",
      mapLabel: "Die Routen",
      mapTitle: "Unsere Manufakturen",
      mapDesc: "Interagiere mit der Karte, um die geheimen Orte zu entdecken, an denen die Magie von Nur entsteht.",
      pillars: {
        p1Title: "Sabr & Ihsan",
        p1Desc: "Perfektion (Ihsan) braucht Geduld (Sabr). Wir drängen unsere Handwerker nicht. Jedes Stück darf so lange dauern, wie es braucht, um seinem spirituellen Zweck gerecht zu werden.",
        p2Title: "Familie",
        p2Desc: "Wir arbeiten ausschließlich mit familiär geführten Kleinbetrieben in der Türkei zusammen. Kein Massen-Sourcing, sondern Beziehungen auf Augenhöhe.",
        p3Title: "Ewigkeit",
        p3Desc: "Gegen die Wegwerfgesellschaft. Unsere Produkte sind Erbstücke. Gemacht aus Materialien, die mit der Zeit durch die Berührung beim Gebet eine eigene Patina entwickeln."
      }
    },
    creator: {
      successTitle: "Möge Nur mit dir sein.",
      successDesc: "Vielen Dank für dein Interesse am Ambassador-Programm. Unser Team in Istanbul und Deutschland schaut sich dein Profil an und meldet sich in Kürze bei dir.",
      label: "Ambassador Program",
      hero1: "Werde das Gesicht",
      hero2: "unserer Bewegung.",
      heroDesc: "Wir suchen nach leidenschaftlichen Creatorn auf TikTok und Instagram, die unsere Vision von 'Accessible Luxury' und modernem Islamic Lifestyle in die Welt hinaustragen – ästhetisch, authentisch und voller Herz.",
      benefitsTitle: "Was dich erwartet",
      b1: "Exklusive PR-Packages direkt aus Istanbul",
      b2: "Pre-Access vor jedem neuen Drop",
      b3: "Enge Zusammenarbeit mit unserem Design-Team",
      formTitle: "Deine Bewerbung",
      fname: "Vorname",
      lname: "Nachname",
      email: "E-Mail",
      social: "TikTok / Instagram (inkl. @)",
      reach: "Ungefähre Reichweite",
      reachOpt1: "1k - 5k Follower",
      reachOpt2: "5k - 20k Follower",
      reachOpt3: "20k - 100k Follower",
      reachOpt4: "100k+ Follower",
      why: "Warum Nur?",
      whyPlaceholder: "Erzähl uns, warum unsere Ästhetik und Werte zu dir passen...",
      submit: "Als Creator bewerben"
    },
    tracking: {
      title: "Wo bleibt mein Unikat?",
      desc: "Gib deine Bestellnummer und deine E-Mail Adresse ein, um den aktuellen Status deiner handgefertigten Bestellung zu überprüfen.",
      orderNum: "Bestellnummer",
      orderNumPlaceholder: "z.B. NUR-123456",
      email: "E-Mail Adresse",
      emailPlaceholder: "deine@email.com",
      btn: "Sendung verfolgen"
    },
    reviews: {
      title: "Kundenstimmen",
      desc: "Die Erfahrungen unserer Community. Entdecke, wie unsere handgefertigten Stücke aus Istanbul ihren Platz in EUREM Alltag finden."
    },
    presse: {
      label: "Media Center",
      hero1: "Die Geschichte",
      hero2: "hinter Nur.",
      desc1: "Gegründet aus der Sehnsucht heraus, Spiritualität mit modernem Minimalismus zu vereinen, bringt Nur hochwertigen Islamic Lifestyle in die europäischen Wohnzimmer.",
      desc2: "Unter dem Claim \"Accessible Luxury\" schließen wir die Lücke zwischen massenproduzierter Ware und unbezahlbaren Designerstücken. Jedes Produkt entsteht in enger Zusammenarbeit mit einer traditionsreichen Manufaktur in Istanbul.",
      kitTitle: "The Press Kit",
      colorPalette: "Color Palette",
      volume: "Volume 01",
      brandBook: "Brand Book"
    }
  },
  EN: {
    nav: {
      collections: "Collections",
      journal: "Journal",
      lookbook: "Lookbook",
      gifts: "Gifts",
      menu: "Menu",
      search: "What are you looking for?",
      boutique: "The Boutique",
      about: "About us",
      creator: "Creator Program",
      press: "Press & Media",
      service: "Service",
      contact: "Contact & FAQ",
      tracking: "Order Status",
      shipping: "Shipping",
      care: "Care Instructions",
      changeLanguage: "Change Language",
      reviews: "Reviews",
    },
    footer: {
      newsletterTitle: "Join Talia Boutique",
      newsletterDesc: "Sign up for exclusive updates on new collections and events.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      visitUs: "Visit us",
      openingHours: "Wednesdays from 10:30 AM",
      rights: "All rights reserved.",
      legal: {
        imprint: "Imprint",
        privacy: "Privacy",
        terms: "Terms",
        revocation: "Revocation",
      },
      followUs: "Follow us",
      discover: "Discover",
      legalHeader: "Legal",
      welcome: "Welcome to our world."
    },
    home: {
      heroTitleMask1: "Elite",
      heroTitleMask2: "Presence.",
      heroDescription: "Experience hand-picked collections and uncompromising quality. The exclusive address for premium fashion.",
      heroButton: "Discover Collection",
      storeSubtitle: "The Boutique",
      storeTitle: "Local identity perfected.",
      storeDescription: "Bahnhofstraße 1, 35576 Wetzlar. A place of aesthetics and exquisite taste. We advise you personally and exclusively.",
      storeQuote: "\"Fashion is not clothing. Fashion is character.\"",
      testimonialsSubtitle: "Google Maps (4.3 Stars)",
      testimonialsTitle: "What our customers say",
    },
    journal: {
      title: "Journal",
      subtitle: "Stories, inspiration and behind the scenes.",
      readMore: "Read More",
    },
    lookbook: {
      title: "Lookbook",
      subtitle: "Inspiration for your individual style.",
      dragToExplore: "Drag to Explore",
    },
    contact: {
      title: "Contact",
      subtitle: "Have questions? We are happy to help.",
      successTitle: "Thank you for your message!",
      successDesc: "We will get back to you shortly.",
      newMsgBtn: "New message",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      msgPlaceholder: "Your message",
      submitBtn: "Send message",
      toastSuccess: "Message sent!",
      errors: {
        nameReq: "Name is required",
        emailReq: "Email is required",
        emailInv: "Invalid email address",
        msgReq: "Message is required"
      }
    },
    care: {
      guide: "Care Guide",
      title1: "Made for",
      title2: "Eternity.",
      desc: "Click on the cards to reveal specific care instructions for our materials. Minimal care ensures flawless aesthetics for generations.",
      flip: "Flip",
      materials: {
        velvet: {
          title: "Premium Velvet",
          subtitle: "The heart of our covers",
          description: "Our signature velvet from Istanbul is characterized by its soft touch and subtle shine. To keep this feeling for a long time, the fabric needs gentle attention.",
          rules: [
            "Only dab stains with a slightly damp, colorless cotton cloth. Never rub.",
            "Keep velvet products away from strong heat sources to protect the color brilliance.",
            "Slight pressure marks in the velvet can often be revitalized with a little steam (from a safe distance)."
          ]
        },
        florals: {
          title: "Dried Flowers",
          subtitle: "Nature for eternity",
          description: "Our hand-picked flower bouquets for special moments. They are meant for eternity, provided they are cared for properly.",
          rules: [
            "Avoid high humidity and direct water. This makes the fine blossoms brittle.",
            "Dust the flowers gently from time to time with a cold draft (e.g. hairdryer on cold setting).",
            "Direct sunlight can fade the delicate natural colors over time."
          ]
        },
        paper: {
          title: "Paper & Embossing",
          subtitle: "The art of cartonnage",
          description: "For our greeting cards and boxes, we use heavy paper types with some deep hot foil stamping. Natural materials react to their environment.",
          rules: [
            "Always store paper products dry and lying flat to prevent curling.",
            "Do not touch foil-stamped elements (gold, silver) directly if possible, as natural skin oils can make the embossing dull."
          ]
        },
        tasbih: {
          title: "Natural Stones & Wood",
          subtitle: "Your prayer beads",
          description: "Our Tasbih are knotted from natural semi-precious stones or precious woods. Every touch leaves its own patina over the years.",
          rules: [
            "Avoid direct contact with perfume or aggressive cleaning agents.",
            "Keep them in their original velvet bag when not in use.",
            "Wooden beads darken naturally - this is a sign of quality, not a flaw."
          ]
        }
      }
    },
    shipping: {
      title: "Shipping & Delivery",
      desc: "We ship our products with the utmost care and in environmentally friendly packaging. All orders are shipped climate-neutrally with DHL GoGreen.",
      costs: "Shipping Costs",
      area: "Delivery Area",
      cost: "Shipping Cost",
      freeShipping: "Free Shipping",
      de: "Germany",
      deFree: "From 100 € order value",
      at: "Austria",
      atFree: "From 150 € order value",
      ch: "Switzerland",
      chFree: "From 200 € order value",
      time: "Delivery Times",
      timeDesc: "Unless otherwise specified in the respective offer, goods are delivered domestically (Germany) within 3 - 5 days, for international deliveries within 5 - 7 days after conclusion of the contract (in case of agreed advance payment after the time of your payment instruction).",
      preorder: "Pre-Order & Waitlist",
      preorderDesc: "Please note that special production times apply to items from the exclusive pre-order. Since these pieces are handcrafted in our manufactory in Istanbul after the order is received, the delivery time here can be between 4-6 weeks. The exact expected delivery time is always communicated transparently on the respective product page.",
      tracking: "Tracking",
      trackingDesc: "As soon as your order leaves our warehouse, you will receive a shipping confirmation by e-mail with a tracking link, which you can use to track the status of your shipment at any time."
    },
    payment: {
      title: "Payment Methods",
      desc: "We offer you a variety of secure payment options in our shop to make your purchase as pleasant as possible.",
      security: "Highest security for your data",
      securityDesc: "At Nur, we take the protection of your payment data seriously. The entire payment process is encrypted according to the latest security standards (SSL). We do not store sensitive credit card data on our own servers.",
      methods: {
        apple: { name: "Apple Pay", desc: "Pay quickly and securely with your Apple device." },
        paypal: { name: "PayPal", desc: "The simple and secure payment method. Also possible with PayPal installments." },
        klarna: { name: "Klarna (Invoice / Installments)", desc: "First receive the goods, then pay later or in comfortable installments." },
        card: { name: "Credit Card (Visa, Mastercard, AMEX)", desc: "Secure processing via our payment provider Stripe." }
      }
    },
    about: {
      title: "Entity | The Architecture of Nur",
      subtitle: "The structure, craftsmanship, and philosophy behind Nur.",
      label: "The Entity",
      hero1: "From the bazaars",
      hero2: "of Istanbul to",
      hero3: "your home.",
      heroDesc: "Nur is more than a brand. It is a network of centuries-old craftsmanship, family ateliers, and a modern vision of Islamic minimalism.",
      mapLabel: "The Routes",
      mapTitle: "Our Manufactories",
      mapDesc: "Interact with the map to discover the secret places where the magic of Nur is created.",
      pillars: {
        p1Title: "Sabr & Ihsan",
        p1Desc: "Perfection (Ihsan) requires patience (Sabr). We do not rush our craftsmen. Each piece may take as long as it needs to fulfill its spiritual purpose.",
        p2Title: "Family",
        p2Desc: "We work exclusively with family-run small businesses in Turkey. No mass sourcing, but relationships on equal footing.",
        p3Title: "Eternity",
        p3Desc: "Against the throwaway society. Our products are heirlooms. Made from materials that develop their own patina over time through touch during prayer."
      }
    },
    creator: {
      successTitle: "May Nur be with you.",
      successDesc: "Thank you for your interest in the Ambassador Program. Our team in Istanbul and Germany will review your profile and get back to you shortly.",
      label: "Ambassador Program",
      hero1: "Become the face",
      hero2: "of our movement.",
      heroDesc: "We are looking for passionate creators on TikTok and Instagram who carry our vision of 'Accessible Luxury' and modern Islamic Lifestyle into the world – aesthetically, authentically, and full of heart.",
      benefitsTitle: "What to expect",
      b1: "Exclusive PR packages straight from Istanbul",
      b2: "Pre-access before every new drop",
      b3: "Close collaboration with our design team",
      formTitle: "Your Application",
      fname: "First Name",
      lname: "Last Name",
      email: "Email",
      social: "TikTok / Instagram (incl. @)",
      reach: "Approximate Reach",
      reachOpt1: "1k - 5k Followers",
      reachOpt2: "5k - 20k Followers",
      reachOpt3: "20k - 100k Followers",
      reachOpt4: "100k+ Followers",
      why: "Why Nur?",
      whyPlaceholder: "Tell us why our aesthetics and values suit you...",
      submit: "Apply as Creator"
    },
    tracking: {
      title: "Where is my unique piece?",
      desc: "Enter your order number and email address to check the current status of your handcrafted order.",
      orderNum: "Order Number",
      orderNumPlaceholder: "e.g. NUR-123456",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      btn: "Track Shipment"
    },
    reviews: {
      title: "Customer Reviews",
      desc: "The experiences of our community. Discover how our handcrafted pieces from Istanbul find their place in YOUR everyday life."
    },
    presse: {
      label: "Media Center",
      hero1: "The Story",
      hero2: "behind Nur.",
      desc1: "Founded out of a longing to unite spirituality with modern minimalism, Nur brings high-quality Islamic Lifestyle into European living rooms.",
      desc2: "Under the claim \"Accessible Luxury\" we close the gap between mass-produced goods and priceless designer pieces. Each product is created in close cooperation with a traditional manufactory in Istanbul.",
      kitTitle: "The Press Kit",
      colorPalette: "Color Palette",
      volume: "Volume 01",
      brandBook: "Brand Book"
    }
  },
  TR: {
    nav: {
      collections: "Koleksiyonlar",
      journal: "Günlük",
      lookbook: "Katalog",
      gifts: "Hediyeler",
      menu: "Menü",
      search: "Ne arıyorsunuz?",
      boutique: "Butik",
      about: "Hakkımızda",
      creator: "İçerik Üreticisi Programı",
      press: "Basın ve Medya",
      service: "Hizmet",
      contact: "İletişim & SSS",
      tracking: "Sipariş Durumu",
      shipping: "Kargo",
      care: "Bakım Talimatları",
      changeLanguage: "Dili Değiştir",
      reviews: "Değerlendirmeler",
    },
    footer: {
      newsletterTitle: "Talia Boutique'e Katıl",
      newsletterDesc: "Yeni koleksiyonlar ve etkinlikler hakkında özel güncellemeler için kaydolun.",
      emailPlaceholder: "E-posta adresiniz",
      subscribe: "Abone Ol",
      visitUs: "Bizi ziyaret edin",
      openingHours: "Çarşamba günleri 10:30'dan itibaren",
      rights: "Tüm hakları saklıdır.",
      legal: {
        imprint: "Künye",
        privacy: "Gizlilik",
        terms: "Şartlar",
        revocation: "İptal",
      },
      followUs: "Bizi takip et",
      discover: "Keşfet",
      legalHeader: "Yasal",
      welcome: "Dünyamıza hoş geldiniz."
    },
    home: {
      heroTitleMask1: "Elit",
      heroTitleMask2: "Duruş.",
      heroDescription: "Özenle seçilmiş koleksiyonları ve tavizsiz kaliteyi deneyimleyin. Premium modanın seçkin adresi.",
      heroButton: "Koleksiyonu Keşfet",
      storeSubtitle: "Butik",
      storeTitle: "Yerel kimlik mükemmelleşti.",
      storeDescription: "Bahnhofstraße 1, 35576 Wetzlar. Estetik ve zarif zevklerin mekanı. Size özel ve kişisel danışmanlık veriyoruz.",
      storeQuote: "\"Moda giyim değildir. Moda karakterdir.\"",
      testimonialsSubtitle: "Google Haritalar (4.3 Yıldız)",
      testimonialsTitle: "Müşterilerimiz ne diyor",
    },
    journal: {
      title: "Günlük",
      subtitle: "Hikayeler, ilham ve sahne arkası.",
      readMore: "Devamını Oku",
    },
    lookbook: {
      title: "Katalog",
      subtitle: "Bireysel tarzınız için ilham.",
      dragToExplore: "Keşfetmek için sürükleyin",
    },
    contact: {
      title: "İletişim",
      subtitle: "Sorularınız mı var? Size yardımcı olmaktan memnuniyet duyarız.",
      successTitle: "Mesajınız için teşekkürler!",
      successDesc: "En kısa sürede size geri dönüş yapacağız.",
      newMsgBtn: "Yeni mesaj",
      namePlaceholder: "İsim",
      emailPlaceholder: "E-posta",
      msgPlaceholder: "Mesajınız",
      submitBtn: "Mesaj gönder",
      toastSuccess: "Mesaj gönderildi!",
      errors: {
        nameReq: "İsim gerekli",
        emailReq: "E-posta gerekli",
        emailInv: "Geçersiz e-posta adresi",
        msgReq: "Mesaj gerekli"
      }
    },
    care: {
      guide: "Bakım Kılavuzu",
      title1: "Sonsuzluk için",
      title2: "Üretildi.",
      desc: "Materyallerimiz için özel bakım talimatlarını görmek üzere kartlara tıklayın. Minimum bakım, nesiller boyu kusursuz bir estetik sağlar.",
      flip: "Çevir",
      materials: {
        velvet: {
          title: "Premium Kadife",
          subtitle: "Kılıflarımızın kalbi",
          description: "İstanbul'dan gelen imza kadifemiz yumuşak dokunuşu ve ince parlaklığı ile karakterizedir. Bu hissi uzun süre korumak için kumaşın nazik ilgiye ihtiyacı vardır.",
          rules: [
            "Lekeleri sadece hafif nemli, renksiz pamuklu bir bezle tamponlayın. Asla ovalamayın.",
            "Renk parlaklığını korumak için kadife ürünleri güçlü ısı kaynaklarından uzak tutun.",
            "Kadifedeki hafif baskı izleri genellikle biraz buharla (güvenli bir mesafeden) canlandırılabilir."
          ]
        },
        florals: {
          title: "Kuru Çiçekler",
          subtitle: "Sonsuzluk için doğa",
          description: "Özel anlar için özenle seçilmiş çiçek buketlerimiz. Doğru şekilde bakıldıkları takdirde sonsuza kadar kalıcıdırlar.",
          rules: [
            "Yüksek nemden ve doğrudan sudan kaçının. Bu, ince çiçekleri kırılgan hale getirir.",
            "Çiçeklerin tozunu ara sıra soğuk bir hava akımıyla (örneğin fön makinesinin soğuk ayarı) nazikçe alın.",
            "Doğrudan güneş ışığı, hassas doğal renkleri zamanla soldurabilir."
          ]
        },
        paper: {
          title: "Kağıt & Kabartma",
          subtitle: "Kartonaj sanatı",
          description: "Tebrik kartlarımız ve kutularımız için derin sıcak folyo baskılı ağır kağıt türleri kullanıyoruz. Doğal malzemeler çevrelerine tepki verir.",
          rules: [
            "Kıvrılmayı önlemek için kağıt ürünlerini daima kuru ve düz olarak saklayın.",
            "Doğal cilt yağları kabartmayı matlaştırabileceğinden folyo baskılı elemanlara (altın, gümüş) mümkünse doğrudan dokunmayın."
          ]
        },
        tasbih: {
          title: "Doğal Taşlar & Ahşap",
          subtitle: "Tespihiniz",
          description: "Tespihlerimiz doğal yarı değerli taşlardan veya değerli ahşaplardan düğümlenmiştir. Her dokunuş yıllar içinde kendi patinasını bırakır.",
          rules: [
            "Parfüm veya agresif temizlik maddeleri ile doğrudan temastan kaçının.",
            "Kullanılmadığında orijinal kadife kesesinde saklayın.",
            "Ahşap boncuklar doğal olarak koyulaşır - bu bir kusur değil kalite işaretidir."
          ]
        }
      }
    },
    shipping: {
      title: "Kargo ve Teslimat",
      desc: "Ürünlerimizi büyük bir özenle ve çevre dostu ambalajlarda gönderiyoruz. Tüm siparişler DHL GoGreen ile iklim nötr olarak gönderilir.",
      costs: "Kargo Ücretleri",
      area: "Teslimat Bölgesi",
      cost: "Kargo Ücreti",
      freeShipping: "Ücretsiz Kargo",
      de: "Almanya",
      deFree: "100 € üzeri siparişlerde",
      at: "Avusturya",
      atFree: "150 € üzeri siparişlerde",
      ch: "İsviçre",
      chFree: "200 € üzeri siparişlerde",
      time: "Teslimat Süreleri",
      timeDesc: "İlgili teklifte başka bir süre belirtilmedikçe, mallar sözleşmenin yapılmasından sonra (ön ödeme kararlaştırılmışsa ödeme talimatınızın ardından) yurt içinde (Almanya) 3 - 5 gün içinde, yurtdışı teslimatlarında 5 - 7 gün içinde teslim edilir.",
      preorder: "Ön Sipariş ve Bekleme Listesi",
      preorderDesc: "Özel ön sipariş ürünleri için özel üretim sürelerinin geçerli olduğunu lütfen unutmayın. Bu parçalar sipariş alındıktan sonra İstanbul'daki atölyemizde elde üretildiği için teslimat süresi 4-6 hafta arasında olabilir. Kesin tahmini teslimat süresi her zaman ilgili ürün sayfasında şeffaf bir şekilde iletilir.",
      tracking: "Sipariş Takibi",
      trackingDesc: "Siparişiniz depomuzdan çıkar çıkmaz, gönderinizin durumunu istediğiniz zaman takip edebileceğiniz bir takip bağlantısı içeren bir kargo onay e-postası alacaksınız."
    },
    payment: {
      title: "Ödeme Yöntemleri",
      desc: "Alışverişinizi mümkün olduğunca keyifli hale getirmek için mağazamızda çeşitli ve güvenli ödeme seçenekleri sunuyoruz.",
      security: "Verileriniz için en yüksek güvenlik",
      securityDesc: "Nur'da ödeme verilerinizin korunmasını ciddiye alıyoruz. Tüm ödeme süreci en son güvenlik standartlarına (SSL) göre şifrelenir. Hassas kredi kartı verilerini kendi sunucularımızda saklamıyoruz.",
      methods: {
        apple: { name: "Apple Pay", desc: "Apple cihazınızla hızlı ve güvenli ödeme yapın." },
        paypal: { name: "PayPal", desc: "Basit ve güvenli ödeme yöntemi. PayPal taksit seçenekleri de mevcuttur." },
        klarna: { name: "Klarna (Fatura / Taksit)", desc: "Önce malları alın, sonra veya uygun taksitlerle ödeyin." },
        card: { name: "Kredi Kartı (Visa, Mastercard, AMEX)", desc: "Ödeme sağlayıcımız Stripe aracılığıyla güvenli işlem." }
      }
    },
    about: {
      title: "Entity | Nur'un Mimarisi",
      subtitle: "Nur'un ardındaki yapı, zanaatkarlık ve felsefe.",
      label: "The Entity",
      hero1: "İstanbul'un",
      hero2: "çarşılarından",
      hero3: "evinize.",
      heroDesc: "Nur bir markadan daha fazlasıdır. Yüzyıllık zanaatkarlık geleneği, aile atölyeleri ve modern İslami minimalizmin bir ağıdır.",
      mapLabel: "Rotalar",
      mapTitle: "Atölyelerimiz",
      mapDesc: "Nur'un sihrinin yaratıldığı gizli yerleri keşfetmek için harita ile etkileşime geçin.",
      pillars: {
        p1Title: "Sabır ve İhsan",
        p1Desc: "Mükemmellik (İhsan) sabır (Sabr) gerektirir. Zanaatkarlarımızı acele ettirmeyiz. Her parça, manevi amacına ulaşması için gerektiği kadar zaman alabilir.",
        p2Title: "Aile",
        p2Desc: "Türkiye'de sadece aile tarafından işletilen küçük işletmelerle çalışıyoruz. Kitlesel tedarik yok, eşit şartlarda ilişkiler var.",
        p3Title: "Sonsuzluk",
        p3Desc: "Kullan-at toplumuna karşı. Ürünlerimiz birer yadigardır. Namaz sırasında dokunuldukça zamanla kendi patinasını geliştiren malzemelerden yapılmıştır."
      }
    },
    creator: {
      successTitle: "Nur seninle olsun.",
      successDesc: "Elçi Programına gösterdiğiniz ilgi için teşekkür ederiz. İstanbul ve Almanya'daki ekibimiz profilinizi inceleyecek ve kısa süre içinde size dönüş yapacaktır.",
      label: "Elçi Programı",
      hero1: "Hareketimizin",
      hero2: "yüzü ol.",
      heroDesc: "TikTok ve Instagram'da 'Erişilebilir Lüks' ve modern İslami Yaşam Tarzı vizyonumuzu estetik, özgün ve yürekten tüm dünyaya taşıyacak tutkulu içerik üreticileri arıyoruz.",
      benefitsTitle: "Seni ne bekliyor",
      b1: "Doğrudan İstanbul'dan özel PR paketleri",
      b2: "Her yeni lansmandan önce ön erişim",
      b3: "Tasarım ekibimizle yakın işbirliği",
      formTitle: "Başvurunuz",
      fname: "İsim",
      lname: "Soyisim",
      email: "E-posta",
      social: "TikTok / Instagram (@ dahil)",
      reach: "Yaklaşık Erişim",
      reachOpt1: "1k - 5k Takipçi",
      reachOpt2: "5k - 20k Takipçi",
      reachOpt3: "20k - 100k Takipçi",
      reachOpt4: "100k+ Takipçi",
      why: "Neden Nur?",
      whyPlaceholder: "Estetiğimizin ve değerlerimizin neden sana uyduğunu anlat...",
      submit: "İçerik Üreticisi Olarak Başvur"
    },
    tracking: {
      title: "Eşsiz parçam nerede?",
      desc: "El yapımı siparişinizin mevcut durumunu kontrol etmek için sipariş numaranızı ve e-posta adresinizi girin.",
      orderNum: "Sipariş Numarası",
      orderNumPlaceholder: "örn. NUR-123456",
      email: "E-posta Adresi",
      emailPlaceholder: "senin@email.com",
      btn: "Kargoyu Takip Et"
    },
    reviews: {
      title: "Müşteri Yorumları",
      desc: "Topluluğumuzun deneyimleri. İstanbul'dan el yapımı parçalarımızın GÜNLÜK hayatınızda nasıl yer bulduğunu keşfedin."
    },
    presse: {
      label: "Medya Merkezi",
      hero1: "Nur'un",
      hero2: "arkasındaki hikaye.",
      desc1: "Maneviyatı modern minimalizmle birleştirme özleminden kurulan Nur, yüksek kaliteli İslami Yaşam Tarzını Avrupa oturma odalarına taşıyor.",
      desc2: "\"Erişilebilir Lüks\" iddiası altında seri üretilen mallarla paha biçilmez tasarım parçaları arasındaki boşluğu kapatıyoruz. Her ürün, İstanbul'daki geleneksel bir imalathaneyle yakın işbirliği içinde yaratılmaktadır.",
      kitTitle: "Basın Kiti",
      colorPalette: "Renk Paleti",
      volume: "Cilt 01",
      brandBook: "Marka Kitabı"
    }
  },
  KU: {
    nav: {
      collections: "Koleksiyonan",
      journal: "Kovar",
      lookbook: "Katalog",
      gifts: "Diyarî",
      menu: "Menû",
      search: "Hûn li çi digerin?",
      boutique: "Bûtîk",
      about: "Derbarê me",
      creator: "Bernameya Afirîner",
      press: "Çapemenî û Medya",
      service: "Xizmet",
      contact: "Têkilî & Pirsên Pirtir",
      tracking: "Rewşa Siparîşê",
      shipping: "Barkirin",
      care: "Rêwerzên Lênêrînê",
      changeLanguage: "Ziman Biguhere",
      reviews: "Nirxandin",
    },
    footer: {
      newsletterTitle: "Tevlî Talia Boutique bibin",
      newsletterDesc: "Ji bo nûvekirinên taybetî yên li ser koleksiyonên nû nûçe bistînin.",
      emailPlaceholder: "Navnîşana e-nameya we",
      subscribe: "Abonetî",
      visitUs: "Serdana me bikin",
      openingHours: "Çarşemê ji 10:30",
      rights: "Hemû maf parastî ne.",
      legal: {
        imprint: "Nasname",
        privacy: "Nepenî",
        terms: "Mercan",
        revocation: "Betalkirin",
      },
      followUs: "Me bişopînin",
      discover: "Bikolin",
      legalHeader: "Zanistî",
      welcome: "Hûn bi xêr hatin cîhana me."
    },
    home: {
      heroTitleMask1: "Elît",
      heroTitleMask2: "Hebûn.",
      heroDescription: "Koleksiyonên bijartî û kalîteya bêdawî biceribînin. Navnîşana taybetî ji bo modaya premium.",
      heroButton: "Koleksiyonê Bigerin",
      storeSubtitle: "Bûtîk",
      storeTitle: "Nasnameya herêmî kamil bû.",
      storeDescription: "Bahnhofstraße 1, 35576 Wetzlar. Cihê estetîk û çêjên hêja. Em şêwirmendiya taybetî didin we.",
      storeQuote: "\"Moda ne kinc e. Moda karakter e.\"",
      testimonialsSubtitle: "Google Maps (4.3 Stêrk)",
      testimonialsTitle: "Mişteriyên me çi dibêjin",
    },
    journal: {
      title: "Kovar",
      subtitle: "Çîrok, îlhama û li pişt perdeyê.",
      readMore: "Zêdetir Bixwîne",
    },
    lookbook: {
      title: "Katalog",
      subtitle: "Ji bo şêwaza we îlhama.",
      dragToExplore: "Bikşînin da ku kifş bikin",
    },
    contact: {
      title: "Têkilî",
      subtitle: "Pirsên we hene? Em kêfxweş in ku alîkariya we bikin.",
      successTitle: "Spas ji bo peyama we!",
      successDesc: "Em ê di demek nêzîk de vegerin we.",
      newMsgBtn: "Peyama nû",
      namePlaceholder: "Nav",
      emailPlaceholder: "E-name",
      msgPlaceholder: "Peyama we",
      submitBtn: "Peyam bişîne",
      toastSuccess: "Peyam hat şandin!",
      errors: {
        nameReq: "Nav hewce ye",
        emailReq: "E-name hewce ye",
        emailInv: "E-nameya nederbasdar",
        msgReq: "Peyam hewce ye"
      }
    },
    care: {
      guide: "Rêbera Lênêrînê",
      title1: "Ji bo",
      title2: "Bêdawîbûnê hatiye çêkirin.",
      desc: "Ji bo rênîşandanên taybetî yên lênêrîna materyalên me, li ser qertan bitikînin. Lênêrîna herî kêm, bedewiya bêqisûr ji bo nifşan misoger dike.",
      flip: "Veguhêz",
      materials: {
        velvet: {
          title: "Qedîfeya Premium",
          subtitle: "Dilê berganên me",
          description: "Qedîfeya me ya navdar a ji Stenbolê bi nermbûn û biriqîna xwe ya taybet tê nasîn. Ji bo ku ev hest demeke dirêj bimîne, qumaş pêdivî bi lênêrîna nazik heye.",
          rules: [
            "Lekeyan tenê bi qumaşekî pembû yê hinek şil, bê reng paqij bikin. qet nefeqirînin.",
            "Berhemên qedîfeyê ji çavkaniyên germê yên xurt dûr bixin da ku biriqîna rengê biparêzin.",
            "Şopên zextê yên sivik di qedîfeyê de bi piranî bi piçek hilmê (ji dûriyeke ewle) dikarin werin vejandin."
          ]
        },
        florals: {
          title: "Kulîlkên Hişk",
          subtitle: "Xweza ji bo bêdawîbûnê",
          description: "Bûketên me yên kulîlkan ku bi destan ji bo kêliyên taybet hatine hilbijartin. Ew ji bo heta hetayê hatine çêkirin, eger bi rêkûpêk lê werin xwedîkirin.",
          rules: [
            "Ji nemiya zêde û ava rasterast dûr bikevin. Ev kulîlkên nazik dişkênîne.",
            "Car caran bi hewaya sar (mînak, fon bi mîhenga sar) tozê kulîlkan bi nermî bigirin.",
            "Tîrêjên rasterast ên rojê dikarin rengên xwezayî yên nazik bi demê re kêm bikin."
          ]
        },
        paper: {
          title: "Kaxez & Nexşkirin",
          subtitle: "Hunerê kartonê",
          description: "Ji bo kartpostal û qutiyên me, em celebên kaxezê giran bi nexşkirina fola germ bikar tînin. Materyalên xwezayî bertek nîşanî hawîrdora xwe didin.",
          rules: [
            "Berhemên kaxezê her dem ziwa û deşmî biparêzin da ku neqerisin.",
            "Elementên nexşandî yên folê (zêr, zîv) heta ku mimkun be rasterast dest nedin wan, ji ber ku rûnên çermê yên xwezayî dikarin nexşê mat bikin."
          ]
        },
        tasbih: {
          title: "Kevirên Xwezayî & Dar",
          subtitle: "Tizbîha te",
          description: "Tizbîhên me ji kevirên nîv-biha an darên hêja hatine girêdan. Her destlêdan bi salan de rengê xwe (patîna) li pey xwe dihêle.",
          rules: [
            "Ji têkiliya rasterast bi parfum an dermanên paqijiyê yên xurt re dûr bikevin.",
            "Dema ku nayên bikar anîn wan di tûrikê wan yê qedîfeyê de bihêlin.",
            "Dendikên darî bi xwezayî tarî dibin - ev nîşanek qelîteyê ye, ne kêmasiyek."
          ]
        }
      }
    },
    shipping: {
      title: "Barkirin & Radestkirin",
      desc: "Em berhemên xwe bi baldariyek mezin û di pakêtên hawîrdorparêz de dişînin. Hemî ferman bi DHL GoGreen re ji hêla avhewa ve bêalî têne şandin.",
      costs: "Lêçûnên Barkirinê",
      area: "Herêma Radestkirinê",
      cost: "Lêçûna Barkirinê",
      freeShipping: "Barkirina Belaş",
      de: "Almanya",
      deFree: "Ji nirxê fermana 100 €",
      at: "Avusturya",
      atFree: "Ji nirxê fermana 150 €",
      ch: "Swîsre",
      chFree: "Ji nirxê fermana 200 €",
      time: "Demên Radestkirinê",
      timeDesc: "Heya ku di pêşniyara têkildar de demjimêrek din neyê destnîşankirin, radestkirina tiştan di hundurê welêt (Almanya) de di nav 3 - 5 rojan de, ji bo radestkirinên navneteweyî di nav 5 - 7 rojan de piştî bidawîbûna peymanê (heke dravdana pêşwext hebe, piştî dema fermana dravdana we) pêk tê.",
      preorder: "Siparîşa Pêşwext û Lîsteya Bendê",
      preorderDesc: "Ji kerema xwe bala xwe bidinê ku demên hilberînê yên taybetî ji bo tiştên ji pêş-fermankirina taybetî derbas dibin. Ji ber ku ev perçe piştî wergirtina fermanê di kargeha meya li Stenbolê de bi destan têne çêkirin, li vir dema radestkirinê dikare di navbera 4-6 hefteyan de be. Dema radestkirinê ya texmînkirî ya rast her gav li ser rûpela hilberê bi zelalî tê ragihandin.",
      tracking: "Şopandina Fermanê",
      trackingDesc: "Gava ku fermana we ji depoya me derdikeve, hûn ê bi e-nameyê bi zencîreyek şopandinê verastkirinek barkirinê bistînin, ku bi wê hûn dikarin rewşa barkirina xwe di her kêliyê de bişopînin."
    },
    payment: {
      title: "Rêbazên Tezmînatê",
      desc: "Ji bo ku kirîna we bi qasî ku pêkan xweş bibe, em li dikana xwe cûrbecûr vebijarkên dravdana ewledar pêşkêşî we dikin.",
      security: "Ewlekariya herî bilind ji bo daneyên we",
      securityDesc: "Li Nur, em parastina daneyên dravdana we ciddî digirin. Tevahiya pêvajoya dravdanê li gorî standardên herî nû yên ewlehiyê (SSL) tê şîfrekirin. Em daneyên qerta krediyê yên hesas li ser serverên xwe hilnagirin.",
      methods: {
        apple: { name: "Apple Pay", desc: "Zû û bi ewlehî bi cîhaza xweya Apple bidin." },
        paypal: { name: "PayPal", desc: "Rêbaza dravdana hêsan û ewledar. Bi teqsîtên PayPal jî pêkan e." },
        klarna: { name: "Klarna (Fature / Teqsît)", desc: "Pêşî tiştan bistînin, dûv re an bi teqsîtên rehet bidin." },
        card: { name: "Karta Krediyê (Visa, Mastercard, AMEX)", desc: "Bi navgîniya pêşkêşvanê dravdana me Stripe pêvajoyek ewledar." }
      }
    },
    about: {
      title: "Entity | Mîmariya Nur",
      subtitle: "Avahî, hostatî û felsefeya li pişt Nur.",
      label: "The Entity",
      hero1: "Ji bazarên",
      hero2: "Stenbolê",
      hero3: "heta mala we.",
      heroDesc: "Nur ji marqeyekê wêdetir e. Ew toreyek hostatiya bi sedsalan, atolyeyên malbatî û vîzyonek nûjen a mînîmalîzma îslamî ye.",
      mapLabel: "Rêgeh",
      mapTitle: "Kargehên me",
      mapDesc: "Bi nexşeyê re têkilî daynin da ku cihên nehênî yên ku efsûna Nur lê tê afirandin kifş bikin.",
      pillars: {
        p1Title: "Sebr & Îhsan",
        p1Desc: "Bêqisûrî (Îhsan) sebir (Sabr) hewce dike. Em lezê nadin hostayên xwe. Her perçe dikare bi qasî ku pêwîst be bigire da ku bigihîje armanca xwe ya manewî.",
        p2Title: "Malbat",
        p2Desc: "Em tenê bi karsaziyên piçûk ên ku malbat li Tirkiyê birêve dibin re dixebitin. Pevgirtina girseyî tune, lê têkiliyên li ser astek wekhev.",
        p3Title: "Bêdawî",
        p3Desc: "Li dijî civaka avêtinê. Berhemên me mîrat in. Ji malzemeyên ku bi demê re di dema nimêjê de bi destdanînê patina xwe pêşdixin, hatine çêkirin."
      }
    },
    creator: {
      successTitle: "Bila Nur bi we re be.",
      successDesc: "Spas ji bo eleqeya we ya li ser Bernameya Balyoz. Tîmê me li Stenbol û Almanyayê wê profîla we binirxîne û di demeke kurt de vegere we.",
      label: "Bernameya Balyoz",
      hero1: "Bibin rûyê",
      hero2: "tevgera me.",
      heroDesc: "Em li TikTok û Instagram li afirînerên dilşewat digerin ku vîzyona me ya 'Lûksa Gihîştbar' û Şêwaza Jiyana Îslamî ya nûjen bînin cîhanê - estetîk, resen û ji dil.",
      benefitsTitle: "Çi li benda we ye",
      b1: "Pakêtên taybet ên PR rasterast ji Stenbolê",
      b2: "Berî her serbestberdanek nû gihîştina pêş",
      b3: "Bi tîmê meya sêwiranê re hevkariyek nêzîk",
      formTitle: "Serlêdana we",
      fname: "Nav",
      lname: "Paşnav",
      email: "E-name",
      social: "TikTok / Instagram (bi @)",
      reach: "Gihîştina nêzîkî",
      reachOpt1: "1k - 5k Şopîner",
      reachOpt2: "5k - 20k Şopîner",
      reachOpt3: "20k - 100k Şopîner",
      reachOpt4: "100k+ Şopîner",
      why: "Çima Nur?",
      whyPlaceholder: "Ji me re vebêjin ka çima estetîk û nirxên me li we têne...",
      submit: "Wekî Afirîner Serlêdan Bikin"
    },
    tracking: {
      title: "Parçeya min a yekta li ku ye?",
      desc: "Ji bo kontrolkirina rewşa heyî ya fermana xweya destçêkirî hejmara fermana xwe û navnîşana e-nameyê binivîse.",
      orderNum: "Hejmara fermanê",
      orderNumPlaceholder: "mînak. NUR-123456",
      email: "Navnîşana E-nameyê",
      emailPlaceholder: "te@email.com",
      btn: "Kargoyê Bişopînin"
    },
    reviews: {
      title: "Nirxandinên Xerîdar",
      desc: "Ezmûnên civaka me. Vedîtin ka perçeyên me yên destçêkirî ji Stenbolê çawa di jiyana WE ya rojane de cihê xwe dibînin."
    },
    presse: {
      label: "Navenda Medya",
      hero1: "Çîroka",
      hero2: "li pişt Nur.",
      desc1: "Nur ku ji bêrîkirina yekkirina giyanî bi mînîmalîzma nûjen re hatî damezrandin, Şêwaza Jiyana Îslamî ya bi kalîte tîne odeyên rûniştinê yên Ewropî.",
      desc2: "Di bin îdiaya \"Lûksa Gihîştbar\" de em valahiya di navbera tiştên ku bi girseyî têne hilberandin û perçeyên sêwiranerên bêmirad de digirin. Her hilber bi hevkariyek nêzîk bi kargehek kevneşopî ya li Stenbolê re tête afirandin.",
      kitTitle: "Kitêba Çapemeniyê",
      colorPalette: "Paleta Reng",
      volume: "Cild 01",
      brandBook: "Pirtûka Marqe"
    }
  },
  FA: {
    nav: {
      collections: "مجموعه‌ها",
      journal: "مجله",
      lookbook: "کاتالوگ",
      gifts: "هدایا",
      menu: "منو",
      search: "به دنبال چه هستید؟",
      boutique: "بوتیک",
      about: "درباره ما",
      creator: "برنامه سازندگان",
      press: "مطبوعات و رسانه",
      service: "خدمات",
      contact: "تماس و سوالات متداول",
      tracking: "وضعیت سفارش",
      shipping: "ارسال",
      care: "دستورالعمل‌های مراقبت",
      changeLanguage: "تغییر زبان",
      reviews: "نظرات",
    },
    footer: {
      newsletterTitle: "به بوتیک تالیا بپیوندید",
      newsletterDesc: "برای دریافت جدیدترین اخبار ثبت نام کنید.",
      emailPlaceholder: "آدرس ایمیل شما",
      subscribe: "اشتراک",
      visitUs: "به ما سر بزنید",
      openingHours: "چهارشنبه ها از ساعت 10:30",
      rights: "تمامی حقوق محفوظ است.",
      legal: {
        imprint: "حک شدن",
        privacy: "حریم خصوصی",
        terms: "شرایط",
        revocation: "لغو",
      },
      followUs: "ما را دنبال کنید",
      discover: "کشف کنید",
      legalHeader: "حقوقی",
      welcome: "به دنیای ما خوش آمدید."
    },
    home: {
      heroTitleMask1: "نخبه",
      heroTitleMask2: "حضور.",
      heroDescription: "مجموعه‌های دست‌چین شده و کیفیت بی‌نظیر را تجربه کنید. آدرس انحصاری برای مد پرمیوم.",
      heroButton: "کشف مجموعه",
      storeSubtitle: "بوتیک",
      storeTitle: "هویت محلی کامل شد.",
      storeDescription: "Bahnhofstraße 1, 35576 Wetzlar. مکانی برای زیبایی شناسی و طعم نفیس. ما به شما مشاوره شخصی می دهیم.",
      storeQuote: "\"مد لباس نیست. مد شخصیت است.\"",
      testimonialsSubtitle: "گوگل مپس (۴.۳ ستاره)",
      testimonialsTitle: "آنچه مشتریان ما می گویند",
    },
    journal: {
      title: "مجله",
      subtitle: "داستان ها، الهام بخش ها و پشت صحنه.",
      readMore: "بیشتر بخوانید",
    },
    lookbook: {
      title: "کاتالوگ",
      subtitle: "الهام برای سبک منحصر به فرد شما.",
      dragToExplore: "برای کاوش بکشید",
    },
    contact: {
      title: "تماس",
      subtitle: "سوالی دارید؟ ما خوشحال می‌شویم کمک کنیم.",
      successTitle: "از پیام شما سپاسگزاریم!",
      successDesc: "ما به زودی با شما تماس خواهیم گرفت.",
      newMsgBtn: "پیام جدید",
      namePlaceholder: "نام",
      emailPlaceholder: "ایمیل",
      msgPlaceholder: "پیام شما",
      submitBtn: "ارسال پیام",
      toastSuccess: "پیام ارسال شد!",
      errors: {
        nameReq: "نام الزامی است",
        emailReq: "ایمیل الزامی است",
        emailInv: "آدرس ایمیل نامعتبر",
        msgReq: "پیام الزامی است"
      }
    },
    care: {
      guide: "راهنمای مراقبت",
      title1: "ساخته شده برای",
      title2: "ابدیت.",
      desc: "روی کارت ها کلیک کنید تا دستورالعمل های مراقبت خاص مواد ما را ببینید. حداقل مراقبت زیبایی بی عیب و نقص را برای نسل ها تضمین می کند.",
      flip: "چرخش",
      materials: {
        velvet: {
          title: "مخمل ممتاز",
          subtitle: "قلب کاورهای ما",
          description: "مخمل امضای ما از استانبول با لمس نرم و درخشش ظریف آن مشخص می شود. برای حفظ این احساس برای مدت طولانی، پارچه نیاز به توجه ملایم دارد.",
          rules: [
            "لکه‌ها را فقط با یک پارچه نخی کمی مرطوب و بی‌رنگ پاک کنید. هرگز مالش ندهید.",
            "محصولات مخملی را از منابع گرمای شدید دور نگه دارید تا از درخشش رنگ محافظت کنید.",
            "علائم فشار خفیف در مخمل اغلب می تواند با کمی بخار (از فاصله ایمن) احیا شود."
          ]
        },
        florals: {
          title: "گل های خشک",
          subtitle: "طبیعت برای ابدیت",
          description: "دسته گل های ما برای لحظات خاص با دست چیده شده اند. در صورت مراقبت صحیح، برای همیشه دوام می آورند.",
          rules: [
            "از رطوبت بالا و آب مستقیم خودداری کنید. این باعث شکننده شدن شکوفه های ظریف می شود.",
            "هر از گاهی گل ها را با یک جریان هوای سرد (مثلاً سشوار روی حالت سرد) به آرامی گردگیری کنید.",
            "نور مستقیم خورشید می تواند رنگ های طبیعی ظریف را در طول زمان محو کند."
          ]
        },
        paper: {
          title: "کاغذ و برجسته کاری",
          subtitle: "هنر مقواسازی",
          description: "برای کارت تبریک و جعبه های خود، از انواع کاغذ سنگین با مقداری برجسته کاری فویل گرم استفاده می کنیم. مواد طبیعی به محیط اطراف خود واکنش نشان می دهند.",
          rules: [
            "محصولات کاغذی را همیشه خشک و صاف نگهداری کنید تا از پیچ خوردن جلوگیری شود.",
            "در صورت امکان به عناصر دارای روکش فویل (طلا، نقره) مستقیماً دست نزنید، زیرا روغن های طبیعی پوست می توانند برجستگی را کدر کنند."
          ]
        },
        tasbih: {
          title: "سنگ های طبیعی و چوب",
          subtitle: "تسبیح شما",
          description: "تسبیح های ما از سنگ های نیمه قیمتی طبیعی یا چوب های گرانبها گره خورده اند. هر لمس در طول سال ها پتینه خاص خود را به جا می گذارد.",
          rules: [
            "از تماس مستقیم با عطر یا مواد شوینده قوی خودداری کنید.",
            "در مواقعی که استفاده نمی کنید، آنها را در کیف مخملی اصلی خود نگهداری کنید.",
            "مهره های چوبی به طور طبیعی تیره می شوند - این نشانه کیفیت است، نه نقص."
          ]
        }
      }
    },
    shipping: {
      title: "ارسال و تحویل",
      desc: "ما محصولات خود را با نهایت دقت و در بسته بندی های سازگار با محیط زیست ارسال می کنیم. تمامی سفارشات به صورت خنثی از نظر آب و هوایی با DHL GoGreen ارسال می شوند.",
      costs: "هزینه های ارسال",
      area: "منطقه تحویل",
      cost: "هزینه ارسال",
      freeShipping: "ارسال رایگان",
      de: "آلمان",
      deFree: "از ارزش سفارش 100 یورو",
      at: "اتریش",
      atFree: "از ارزش سفارش 150 یورو",
      ch: "سوئیس",
      chFree: "از ارزش سفارش 200 یورو",
      time: "زمان تحویل",
      timeDesc: "مگر اینکه در پیشنهاد مربوطه زمان دیگری مشخص شده باشد، تحویل کالا در داخل کشور (آلمان) ظرف 3 - 5 روز، برای تحویل بین المللی ظرف 5 - 7 روز پس از انعقاد قرارداد (در صورت پیش پرداخت توافق شده پس از زمان دستور پرداخت شما) انجام می شود.",
      preorder: "پیش سفارش و لیست انتظار",
      preorderDesc: "لطفاً توجه داشته باشید که زمان‌های تولید ویژه‌ای برای موارد موجود در پیش‌سفارش انحصاری اعمال می‌شود. از آنجایی که این قطعات پس از دریافت سفارش در کارگاه ما در استانبول با دست ساخته می شوند، زمان تحویل در اینجا می تواند بین 4 تا 6 هفته باشد. زمان دقیق تحویل مورد انتظار همیشه به صورت شفاف در صفحه محصول مربوطه اطلاع رسانی می شود.",
      tracking: "پیگیری سفارش",
      trackingDesc: "به محض اینکه سفارش شما از انبار ما خارج شد، تاییدیه ارسال را از طریق ایمیل با پیوند ردیابی دریافت خواهید کرد که با استفاده از آن می توانید وضعیت ارسال خود را در هر زمان پیگیری کنید."
    },
    payment: {
      title: "روش های پرداخت",
      desc: "ما در فروشگاه خود انواع گزینه های پرداخت امن را به شما پیشنهاد می کنیم تا خرید شما را تا حد امکان لذت بخش کنیم.",
      security: "بالاترین امنیت برای داده های شما",
      securityDesc: "در نور، ما حفاظت از داده های پرداخت شما را جدی می گیریم. کل فرآیند پرداخت مطابق با آخرین استانداردهای امنیتی (SSL) رمزگذاری شده است. ما داده های حساس کارت اعتباری را در سرورهای خود ذخیره نمی کنیم.",
      methods: {
        apple: { name: "Apple Pay", desc: "با دستگاه اپل خود سریع و ایمن پرداخت کنید." },
        paypal: { name: "PayPal", desc: "روش پرداخت ساده و امن. با اقساط پی پال نیز امکان پذیر است." },
        klarna: { name: "Klarna (فاکتور / اقساط)", desc: "ابتدا کالا را دریافت کنید، سپس پرداخت کنید یا در اقساط راحت." },
        card: { name: "کارت اعتباری (Visa، Mastercard، AMEX)", desc: "پردازش امن از طریق ارائه دهنده پرداخت ما Stripe." }
      }
    },
    about: {
      title: "موجودیت | معماری نور",
      subtitle: "ساختار، مهارت و فلسفه پشت نور.",
      label: "موجودیت",
      hero1: "از بازارهای",
      hero2: "استانبول تا",
      hero3: "خانه شما.",
      heroDesc: "نور چیزی بیش از یک برند است. این شبکه ای از صنایع دستی چند صد ساله، آتلیه های خانوادگی و دیدگاهی مدرن از مینیمالیسم اسلامی است.",
      mapLabel: "مسیرها",
      mapTitle: "کارگاه های ما",
      mapDesc: "با نقشه تعامل کنید تا مکان های مخفی را که جادوی نور در آنها خلق می شود، کشف کنید.",
      pillars: {
        p1Title: "صبر و احسان",
        p1Desc: "کمال (احسان) نیازمند صبر (صبر) است. ما به صنعتگران خود عجله نمی کنیم. هر قطعه می تواند تا زمانی که نیاز دارد به هدف معنوی خود برسد.",
        p2Title: "خانواده",
        p2Desc: "ما منحصراً با مشاغل کوچک خانوادگی در ترکیه کار می کنیم. هیچ منبع انبوهی وجود ندارد، بلکه روابطی در شرایط برابر وجود دارد.",
        p3Title: "ابدیت",
        p3Desc: "علیه جامعه دور ریختنی محصولات ما میراث هستند. ساخته شده از موادی که به مرور زمان از طریق لمس در حین نماز، پتینه خاص خود را پیدا می کنند."
      }
    },
    creator: {
      successTitle: "نور با شما باشد.",
      successDesc: "از علاقه شما به برنامه سفیر سپاسگزاریم. تیم ما در استانبول و آلمان نمایه شما را بررسی کرده و به زودی با شما تماس خواهند گرفت.",
      label: "نامه سفیر",
      hero1: "چهره",
      hero2: "جنبش ما شوید.",
      heroDesc: "ما به دنبال سازندگان پرشور در TikTok و Instagram هستیم که دیدگاه ما از 'لوکس در دسترس' و سبک زندگی اسلامی مدرن را به جهان منتقل کنند - زیبا، اصیل و از صمیم قلب.",
      benefitsTitle: "چه چیزی در انتظار شماست",
      b1: "بسته های روابط عمومی اختصاصی مستقیماً از استانبول",
      b2: "دسترسی قبلی قبل از هر افت جدید",
      b3: "همکاری نزدیک با تیم طراحی ما",
      formTitle: "درخواست شما",
      fname: "نام",
      lname: "نام خانوادگی",
      email: "ایمیل",
      social: "TikTok / Instagram (شامل @)",
      reach: "دسترس تقریبی",
      reachOpt1: "1k - 5k دنبال کننده",
      reachOpt2: "5k - 20k دنبال کننده",
      reachOpt3: "20k - 100k دنبال کننده",
      reachOpt4: "100k+ دنبال کننده",
      why: "چرا نور؟",
      whyPlaceholder: "به ما بگویید چرا زیبایی شناسی و ارزش های ما به شما می آید...",
      submit: "به عنوان سازنده اعمال کنید"
    },
    tracking: {
      title: "قطعه منحصر به فرد من کجاست؟",
      desc: "شماره سفارش و آدرس ایمیل خود را برای بررسی وضعیت فعلی سفارش دست ساز خود وارد کنید.",
      orderNum: "شماره سفارش",
      orderNumPlaceholder: "به عنوان مثال NUR-123456",
      email: "آدرس ایمیل",
      emailPlaceholder: "ایمیل@شما.com",
      btn: "پیگیری محموله"
    },
    reviews: {
      title: "نظرات مشتریان",
      desc: "تجربیات جامعه ما. کشف کنید که چگونه قطعات دست ساز ما از استانبول جای خود را در زندگی روزمره شما پیدا می کنند."
    },
    presse: {
      label: "مرکز رسانه",
      hero1: "داستان",
      hero2: "پشت نور.",
      desc1: "نور که از روی دلتنگی برای پیوند معنویت با مینیمالیسم مدرن تأسیس شده است، سبک زندگی اسلامی با کیفیت بالا را به اتاق های نشیمن اروپا می آورد.",
      desc2: "تحت ادعای \"لوکس در دسترس\"، ما فاصله بین کالاهای تولید انبوه و قطعات طراح بی قیمت را پر می کنیم. هر محصول در همکاری نزدیک با یک کارخانه سنتی در استانبول ایجاد می شود.",
      kitTitle: "کیت مطبوعاتی",
      colorPalette: "پالت رنگ",
      volume: "جلد 01",
      brandBook: "کتاب برند"
    }
  },
  AR: {
    nav: {
      collections: "مجموعات",
      journal: "مجلة",
      lookbook: "كتالوج",
      gifts: "هدايا",
      menu: "قائمة",
      search: "عما تبحث؟",
      boutique: "البوتيك",
      about: "معلومات عنا",
      creator: "برنامج المبدعين",
      press: "الصحافة والإعلام",
      service: "الخدمات",
      contact: "اتصل بنا والأسئلة الشائعة",
      tracking: "حالة الطلب",
      shipping: "الشحن",
      care: "تعليمات العناية",
      changeLanguage: "تغيير اللغة",
      reviews: "التقييمات",
    },
    footer: {
      newsletterTitle: "انضم إلى بوتيك تاليا",
      newsletterDesc: "اشترك للحصول على تحديثات حصرية.",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      subscribe: "اشترك",
      visitUs: "زورنا",
      openingHours: "أيام الأربعاء من الساعة 10:30 صباحا",
      rights: "كل الحقوق محفوظة.",
      legal: {
        imprint: "بصمة",
        privacy: "الخصوصية",
        terms: "الشروط",
        revocation: "إلغاء",
      },
      followUs: "تابعنا",
      discover: "اكتشف",
      legalHeader: "قانوني",
      welcome: "مرحبا بكم في عالمنا."
    },
    home: {
      heroTitleMask1: "نخبة",
      heroTitleMask2: "حضور.",
      heroDescription: "جرب المجموعات المختارة بعناية والجودة التي لا تقبل المساومة. العنوان الحصري للأزياء الراقية.",
      heroButton: "اكتشف المجموعة",
      storeSubtitle: "البوتيك",
      storeTitle: "الهوية المحلية اكتملت.",
      storeDescription: "Bahnhofstraße 1, 35576 Wetzlar. مكان الجماليات والذوق الرفيع. ننصحك شخصيا وحصريا.",
      storeQuote: "\"الموضة ليست ملابس. الموضة هي شخصية.\"",
      testimonialsSubtitle: "خرائط جوجل (٤.٣ نجوم)",
      testimonialsTitle: "ماذا يقول عملاؤنا",
    },
    journal: {
      title: "مجلة",
      subtitle: "قصص وإلهام وكواليس.",
      readMore: "اقرأ المزيد",
    },
    lookbook: {
      title: "كتالوج",
      subtitle: "إلهام لأسلوبك الفردي.",
      dragToExplore: "اسحب للاستكشاف",
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "هل لديك أسئلة؟ يسعدنا مساعدتك.",
      successTitle: "شكرا لرسالتك!",
      successDesc: "سنعود إليك قريبًا.",
      newMsgBtn: "رسالة جديدة",
      namePlaceholder: "الاسم",
      emailPlaceholder: "البريد الإلكتروني",
      msgPlaceholder: "رسالتك",
      submitBtn: "إرسال رسالة",
      toastSuccess: "تم إرسال الرسالة!",
      errors: {
        nameReq: "الاسم مطلوب",
        emailReq: "البريد الإلكتروني مطلوب",
        emailInv: "عنوان بريد إلكتروني غير صالح",
        msgReq: "الرسالة مطلوبة"
      }
    },
    care: {
      guide: "دليل العناية",
      title1: "صنع من أجل",
      title2: "الخلود.",
      desc: "انقر على البطاقات للكشف عن تعليمات العناية الخاصة بموادنا. تضمن العناية البسيطة جماليات لا تشوبها شائبة لأجيال.",
      flip: "يقلب",
      materials: {
        velvet: {
          title: "مخمل فاخر",
          subtitle: "قلب أغلفتنا",
          description: "يتميز المخمل المميز لدينا من اسطنبول بلمسته الناعمة ولمعانه الرقيق. للحفاظ على هذا الشعور لفترة طويلة ، يحتاج النسيج إلى عناية لطيفة.",
          rules: [
            "ربت على البقع بقطعة قماش قطنية مبللة قليلاً وعديمة اللون فقط. لا تفرك أبدًا.",
            "احفظ المنتجات المخملية بعيدًا عن مصادر الحرارة القوية لحماية لمعان اللون.",
            "غالبًا ما يمكن تنشيط علامات الضغط الخفيف في المخمل بقليل من البخار (من مسافة آمنة)."
          ]
        },
        florals: {
          title: "زهور مجففة",
          subtitle: "الطبيعة للخلود",
          description: "باقات الزهور المختارة بعناية للحظات الخاصة. من المفترض أن تدوم إلى الأبد ، بشرط الاعتناء بها بشكل صحيح.",
          rules: [
            "تجنب الرطوبة العالية والماء المباشر. هذا يجعل الأزهار الرقيقة هشة.",
            "نفض الغبار عن الزهور برفق من وقت لآخر باستخدام تيار هواء بارد (مثل مجفف الشعر على الوضع البارد).",
            "أشعة الشمس المباشرة يمكن أن تتلاشى الألوان الطبيعية الحساسة بمرور الوقت."
          ]
        },
        paper: {
          title: "الورق والنقش",
          subtitle: "فن الكرتون",
          description: "بالنسبة لبطاقات المعايدة والصناديق الخاصة بنا ، نستخدم أنواعًا ثقيلة من الورق مع بعض النقش العميق بالرقائق الساخنة. المواد الطبيعية تتفاعل مع بيئتها.",
          rules: [
            "قم دائمًا بتخزين المنتجات الورقية جافة ومسطحة لمنع تجعدها.",
            "لا تلمس العناصر المختومة بالرقائق (الذهب ، الفضة) مباشرة إن أمكن ، لأن زيوت الجلد الطبيعية يمكن أن تجعل النقش باهتًا."
          ]
        },
        tasbih: {
          title: "الأحجار الطبيعية والخشب",
          subtitle: "مسبحتك",
          description: "المسابح الخاصة بنا معقودة من الأحجار الكريمة الطبيعية أو الأخشاب الثمينة. تترك كل لمسة الزنجار الخاص بها على مر السنين.",
          rules: [
            "تجنب التلامس المباشر مع العطور أو عوامل التنظيف القوية.",
            "احتفظ بها في حقيبتها المخملية الأصلية عند عدم الاستخدام.",
            "حبات الخشب داكنة بشكل طبيعي - هذه علامة على الجودة ، وليست عيبًا."
          ]
        }
      }
    },
    shipping: {
      title: "الشحن والتسليم",
      desc: "نقوم بشحن منتجاتنا بأقصى قدر من العناية وفي عبوات صديقة للبيئة. يتم شحن جميع الطلبات بشكل محايد للمناخ مع DHL GoGreen.",
      costs: "تكاليف الشحن",
      area: "منطقة التوصيل",
      cost: "تكلفة الشحن",
      freeShipping: "شحن مجاني",
      de: "ألمانيا",
      deFree: "من قيمة الطلب 100 يورو",
      at: "النمسا",
      atFree: "من قيمة الطلب 150 يورو",
      ch: "سويسرا",
      chFree: "من قيمة الطلب 200 يورو",
      time: "أوقات التسليم",
      timeDesc: "ما لم ينص على خلاف ذلك في العرض المعني، يتم تسليم البضائع محليًا (ألمانيا) في غضون 3 - 5 أيام، وللتسليم الدولي في غضون 5 - 7 أيام بعد إبرام العقد (في حالة الدفع المسبق المتفق عليه بعد وقت تعليمات الدفع الخاصة بك).",
      preorder: "الطلب المسبق وقائمة الانتظار",
      preorderDesc: "يرجى ملاحظة أن أوقات الإنتاج الخاصة تنطبق على العناصر من الطلب المسبق الحصري. نظرًا لأن هذه القطع مصنوعة يدويًا في مصنعنا في اسطنبول بعد استلام الطلب، فقد يتراوح وقت التسليم هنا بين 4-6 أسابيع. يتم دائمًا إرسال وقت التسليم المتوقع الدقيق بشفافية في صفحة المنتج المعنية.",
      tracking: "تتبع الطلب",
      trackingDesc: "بمجرد مغادرة طلبك لمستودعاتنا، ستتلقى تأكيدًا للشحن عبر البريد الإلكتروني مع رابط تتبع، والذي يمكنك استخدامه لتتبع حالة شحنتك في أي وقت."
    },
    payment: {
      title: "طرق الدفع",
      desc: "نحن نقدم لك مجموعة متنوعة من خيارات الدفع الآمنة في متجرنا لجعل عملية الشراء ممتعة قدر الإمكان.",
      security: "أعلى درجات الأمان لبياناتك",
      securityDesc: "في نور ، نأخذ حماية بيانات الدفع الخاصة بك على محمل الجد. يتم تشفير عملية الدفع بأكملها وفقًا لأحدث معايير الأمان (SSL). لا نقوم بتخزين بيانات بطاقة الائتمان الحساسة على خوادمنا الخاصة.",
      methods: {
        apple: { name: "Apple Pay", desc: "ادفع بسرعة وأمان باستخدام جهاز Apple الخاص بك." },
        paypal: { name: "PayPal", desc: "طريقة الدفع البسيطة والآمنة. ممكن أيضا مع أقساط باي بال." },
        klarna: { name: "Klarna (فاتورة / أقساط)", desc: "استلم البضائع أولاً، ثم ادفع لاحقًا أو على أقساط مريحة." },
        card: { name: "بطاقة الائتمان (Visa و Mastercard و AMEX)", desc: "معالجة آمنة عبر مزود الدفع Stripe الخاص بنا." }
      }
    },
    about: {
      title: "الكيان | هندسة نور",
      subtitle: "الهيكل والحرفية والفلسفة وراء نور.",
      label: "الكيان",
      hero1: "من أسواق",
      hero2: "اسطنبول إلى",
      hero3: "منزلك.",
      heroDesc: "نور أكثر من مجرد علامة تجارية. إنها شبكة من الحرفية التي تعود إلى قرون مضت، وورش عمل عائلية، ورؤية حديثة للبساطة الإسلامية.",
      mapLabel: "الطرق",
      mapTitle: "مصانعنا",
      mapDesc: "تفاعل مع الخريطة لاكتشاف الأماكن السرية التي يُصنع فيها سحر نور.",
      pillars: {
        p1Title: "الصبر والإحسان",
        p1Desc: "الكمال (الإحسان) يتطلب الصبر (الصبر). نحن لا نستعجل الحرفيين لدينا. قد تستغرق كل قطعة الوقت الذي تحتاجه لتحقيق غرضها الروحي.",
        p2Title: "عائلة",
        p2Desc: "نحن نعمل حصريًا مع الشركات الصغيرة التي تديرها عائلات في تركيا. لا يوجد مصادر ضخمة ، ولكن هناك علاقات على قدم المساواة.",
        p3Title: "الأبدية",
        p3Desc: "ضد المجتمع المتاح. منتجاتنا موروثات. مصنوعة من مواد تطور الزنجار الخاص بها بمرور الوقت من خلال اللمس أثناء الصلاة."
      }
    },
    creator: {
      successTitle: "نور معك.",
      successDesc: "شكرًا لاهتمامك ببرنامج السفراء. سيقوم فريقنا في اسطنبول وألمانيا بمراجعة ملفك الشخصي والرد عليك قريبًا.",
      label: "برنامج السفراء",
      hero1: "كن وجه",
      hero2: "حركتنا.",
      heroDesc: "نحن نبحث عن صانعي محتوى شغوفين على TikTok و Instagram يحملون رؤيتنا عن 'الرفاهية المتاحة' وأسلوب الحياة الإسلامي الحديث إلى العالم - من الناحية الجمالية والأصلية وبكل قلب.",
      benefitsTitle: "ماذا تتوقع",
      b1: "باقات علاقات عامة حصرية مباشرة من اسطنبول",
      b2: "الوصول المسبق قبل كل انخفاض جديد",
      b3: "تعاون وثيق مع فريق التصميم لدينا",
      formTitle: "تطبيقك",
      fname: "الاسم",
      lname: "الكنية",
      email: "البريد الإلكتروني",
      social: "TikTok / Instagram (بما في ذلك @)",
      reach: "الوصول التقريبي",
      reachOpt1: "1k - 5k متابع",
      reachOpt2: "5k - 20k متابع",
      reachOpt3: "20k - 100k متابع",
      reachOpt4: "100k+ متابع",
      why: "لماذا نور؟",
      whyPlaceholder: "أخبرنا لماذا تناسبك جمالياتنا وقيمنا ...",
      submit: "التقديم كصانع محتوى"
    },
    tracking: {
      title: "أين قطعتي الفريدة؟",
      desc: "أدخل رقم طلبك وعنوان بريدك الإلكتروني للتحقق من الحالة الحالية لطلبك المصنوع يدويًا.",
      orderNum: "رقم الطلب",
      orderNumPlaceholder: "على سبيل المثال NUR-123456",
      email: "عنوان البريد الإلكتروني",
      emailPlaceholder: "your@email.com",
      btn: "تتبع الشحنة"
    },
    reviews: {
      title: "تقييمات العملاء",
      desc: "تجارب مجتمعنا. اكتشف كيف تجد قطعنا المصنوعة يدويًا من اسطنبول مكانها في حياتك اليومية."
    },
    presse: {
      label: "المركز الإعلامي",
      hero1: "القصة",
      hero2: "وراء نور.",
      desc1: "تأسست نور بدافع الشوق إلى توحيد الروحانية مع الحد الأدنى الحديث ، وتجلب نمط الحياة الإسلامي عالي الجودة إلى غرف المعيشة الأوروبية.",
      desc2: "تحت شعار \"الرفاهية المتاحة\" ، نسد الفجوة بين السلع المنتجة بكميات كبيرة وقطع المصممين التي لا تقدر بثمن. يتم إنشاء كل منتج بالتعاون الوثيق مع مصنع تقليدي في اسطنبول.",
      kitTitle: "المجموعة الصحفية",
      colorPalette: "لوحة الألوان",
      volume: "المجلد 01",
      brandBook: "كتاب العلامة التجارية"
    }
  }
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations["DE"];
}
