import { Language } from "@/contexts/language-context";

export interface JournalArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  imageAlt: string;
  publishedAt: string;
  author: string;
}

type JournalContent = Record<Language, JournalArticle[]>;

export const JOURNAL_DATA: JournalContent = {
  DE: [
    {
      id: "philosophie",
      title: "Die Philosophie der Talia Boutique",
      excerpt: "Wie wir in Wetzlar einen neuen Standard für islamischen Minimalismus und Accessible Luxury setzen.",
      content: `
## Der Ursprung unserer Vision

Inmitten der historischen Kulisse von Wetzlar entstand die Idee für die **Talia Boutique**. Wir wollten nicht einfach nur ein weiteres Modegeschäft eröffnen. Unser Ziel war es, eine Lücke zu schließen: Die perfekte Symbiose aus **modernem Minimalismus** und **islamischen Werten** – das, was wir als *Accessible Luxury* definieren.

### Mehr als nur Kleidung

Jedes Stück in unserer Boutique wird mit einer klaren Intention ausgewählt. Es geht um Bescheidenheit (Modesty), die keine Kompromisse bei Qualität und Eleganz macht. Unsere Kundinnen suchen nach Kleidung, die ihre Identität widerspiegelt und gleichzeitig in den modernen europäischen Alltag passt.

- **Ausgewählte Materialien:** Wir setzen auf schwere Seide, reines Cashmere und atmungsaktive Baumwolle.
- **Ethische Produktion:** Wir arbeiten ausschließlich mit Ateliers zusammen, die unsere Werte von Fairness und Nachhaltigkeit teilen.
- **Zeitlose Silhouetten:** Weg von Fast Fashion, hin zu Stücken, die über Jahre hinweg im Kleiderschrank bleiben.

### Die Wetzlar-Experience

Warum Wetzlar? Weil wir glauben, dass Premium-Erlebnisse nicht nur in Metropolen wie Frankfurt oder München stattfinden sollten. Wetzlar bietet uns die Ruhe und den Raum, um unsere Kundinnen in entspannter Atmosphäre zu beraten. Wer die **Talia Boutique** betritt, spürt sofort die Entschleunigung. Es duftet nach Oud, der Raum ist lichtdurchflutet und minimalistisch eingerichtet.

Wir laden dich ein, Teil dieser Bewegung zu werden. Trage Mode, die deine Seele ehrt.
      `,
      category: "Philosophie",
      imageUrl: "/images/journal/boutique_wetzlar.png",
      imageAlt: "Talia Boutique Philosophie",
      publishedAt: "2026-06-01",
      author: "Talia Editorial"
    },
    {
      id: "ethische-mode",
      title: "Ethische Mode & Handwerk aus Istanbul",
      excerpt: "Warum unsere Stoffwahl und die Zusammenarbeit mit Meistern am Bosporus kompromisslos ist.",
      content: `
## Die Suche nach der perfekten Textur

Als wir die **Talia Boutique** gründeten, verbrachten wir Monate auf den traditionellen Basaren und in den modernen Ateliers von Istanbul. Wir suchten nach der perfekten Balance: Stoffe, die schwer genug sind, um blickdicht zu sein, aber fließend genug, um Eleganz auszustrahlen.

### Das Geheimnis des Cashmere

Unser Cashmere stammt aus ethisch korrekten Quellen und wird von Hand gekämmt. Das bedeutet:
1. Keine Tierquälerei.
2. Keine chemischen Bleichmittel, die die Fasern zerstören.
3. Unglaubliche Langlebigkeit bei richtiger Pflege.

### Istanbul: Die Brücke zwischen Ost und West

Es gibt keinen besseren Ort als Istanbul, um unsere Kollektionen fertigen zu lassen. Hier trifft jahrhundertealtes Handwerkswissen auf modernste Textiltechnologie. Unsere Meister in den Ateliers von İkitelli nähen jede Naht mit einer Präzision, die in der Massenproduktion unmöglich ist.

Wenn du ein Teil von Talia trägst, trägst du die Geschichte und das handwerkliche Erbe Istanbuls.
      `,
      category: "Material & Handwerk",
      imageUrl: "/images/journal/premium_cashmere.png",
      imageAlt: "Ethische Mode Istanbul",
      publishedAt: "2026-05-15",
      author: "Talia Editorial"
    },
    {
      id: "signature-look",
      title: "Der Talia Signature Look",
      excerpt: "Ein Style-Guide für zeitlose Eleganz, Layering und die Kunst des Modest Fashion.",
      content: `
## Die Kunst des Weglassens

Der *Talia Signature Look* basiert auf einer einfachen Prämisse: Wahrer Luxus flüstert, er schreit nicht. In der Modest Fashion wird oft der Fehler gemacht, durch übermäßige Muster und Schichten von der eigentlichen Form abzulenken. Wir gehen den gegenteiligen Weg.

### Die 3 Säulen unseres Styles

1. **Monochromatik:** Wir lieben Ton-in-Ton-Outfits. Ein komplett in Creme (unserem #E8DCC4) gehaltenes Outfit streckt die Silhouette und wirkt sofort hochwertig.
2. **Textur-Kontraste:** Da wir farblich reduziert bleiben, spielen wir mit Texturen. Ein glatter Seiden-Hijab zu einem grob gestrickten Cashmere-Pullover ist die Definition von müheloser Eleganz.
3. **Fließende Silhouetten:** Kleidung sollte den Körper umspielen, nicht einengen. Unsere Schnitte sind so konzipiert, dass sie Bewegung erlauben und gleichzeitig Haltung bewahren.

### Layering für jede Jahreszeit

Layering ist das Herzstück der Modest Fashion. Im Herbst kombinieren wir leichte Turtlenecks unter unseren weiten Blusen. Wichtig hierbei: Bleibe in einer Farbfamilie, um den Look harmonisch zu halten.
      `,
      category: "Style Guide",
      imageUrl: "/images/journal/signature_talia.png",
      imageAlt: "Talia Signature Look",
      publishedAt: "2026-04-20",
      author: "Talia Editorial"
    },
    {
      id: "ramadan-essentials",
      title: "Ramadan & Eid Essentials",
      excerpt: "Wie du den spirituellsten Monat des Jahres mit Stil und Bewusstsein empfängst.",
      content: `
## Vorbereitung auf den gesegneten Monat

Der Ramadan ist eine Zeit der Reflexion, der inneren Ruhe und der Gemeinschaft. Für uns bei der **Talia Boutique** bedeutet das auch, unsere Garderobe so anzupassen, dass sie uns in diesem spirituellen Monat unterstützt. Bequemlichkeit beim Tarawih-Gebet trifft auf feierliche Eleganz für Iftar-Einladungen.

### Das Tarawih-Set

Für die abendlichen Gebete in der Moschee empfehlen wir unsere leichten, fließenden Abayas. Sie lassen sich mühelos über die Alltagskleidung werfen und bieten maximale Bewegungsfreiheit. Dazu unsere charakteristische Samt-Koranhülle, die nicht nur schützt, sondern das tägliche Lesen zu einem noch bewussteren Ritual macht.

### Eid-ul-Fitr: Feiere in Premium-Qualität

Wenn der Fastenmonat endet, ist es Sunnah, sich von seiner besten Seite zu zeigen. Unsere exklusiven Eid-Kollektionen zeichnen sich durch dezente, aber wirkungsvolle Details aus: Feine Stickereien, perlmuttfarbene Knöpfe und edle Seidenmischungen.

Sichere dir deine Eid-Outfits frühzeitig, da unsere limitierten Editionen erfahrungsgemäß schnell vergriffen sind.
      `,
      category: "Lifestyle & Religion",
      imageUrl: "/images/journal/fall_collection.png",
      imageAlt: "Ramadan Essentials",
      publishedAt: "2026-03-01",
      author: "Talia Editorial"
    }
  ],
  EN: [
    {
      id: "philosophie",
      title: "The Philosophy of Talia Boutique",
      excerpt: "How we are setting a new standard for Islamic minimalism and Accessible Luxury in Wetzlar.",
      content: `
## The Origin of Our Vision

Amidst the historical backdrop of Wetzlar, the idea for **Talia Boutique** was born. We didn't just want to open another fashion store. Our goal was to bridge a gap: the perfect synthesis of **modern minimalism** and **Islamic values** – what we define as *Accessible Luxury*.

### More Than Just Clothing

Every piece in our boutique is chosen with clear intention. It's about modesty that makes no compromises on quality and elegance. Our clients look for clothing that reflects their identity while fitting seamlessly into a modern European lifestyle.

- **Selected Materials:** We rely on heavy silk, pure cashmere, and breathable cotton.
- **Ethical Production:** We work exclusively with ateliers that share our values of fairness and sustainability.
- **Timeless Silhouettes:** Moving away from fast fashion towards pieces that will stay in your wardrobe for years.

### The Wetzlar Experience

Why Wetzlar? Because we believe premium experiences shouldn't be limited to metropolises like Frankfurt or Munich. Wetzlar offers us the tranquility and space to advise our clients in a relaxed atmosphere. Anyone stepping into **Talia Boutique** immediately feels the deceleration. It smells of Oud, the space is flooded with light and minimally furnished.
      `,
      category: "Philosophy",
      imageUrl: "/images/journal/boutique_wetzlar.png",
      imageAlt: "Talia Boutique Philosophy",
      publishedAt: "2026-06-01",
      author: "Talia Editorial"
    },
    {
      id: "ethische-mode",
      title: "Ethical Fashion & Craftsmanship from Istanbul",
      excerpt: "Why our choice of fabrics and collaboration with masters on the Bosphorus is uncompromising.",
      content: `
## The Search for the Perfect Texture

When we founded **Talia Boutique**, we spent months in the traditional bazaars and modern ateliers of Istanbul. We were looking for the perfect balance: fabrics heavy enough to be opaque, yet fluid enough to exude elegance.

### The Secret of Cashmere

Our cashmere is ethically sourced and hand-combed. This means:
1. No animal cruelty.
2. No chemical bleaches that destroy the fibers.
3. Incredible longevity with proper care.

### Istanbul: The Bridge Between East and West

There is no better place than Istanbul to have our collections crafted. Here, centuries-old craftsmanship meets state-of-the-art textile technology. Our masters in the ateliers of İkitelli sew every seam with a precision impossible in mass production.
      `,
      category: "Material & Craft",
      imageUrl: "/images/journal/premium_cashmere.png",
      imageAlt: "Ethical Fashion Istanbul",
      publishedAt: "2026-05-15",
      author: "Talia Editorial"
    },
    {
      id: "signature-look",
      title: "The Talia Signature Look",
      excerpt: "A style guide for timeless elegance, layering, and the art of modest fashion.",
      content: `
## The Art of Omission

The *Talia Signature Look* is based on a simple premise: True luxury whispers, it doesn't shout. In modest fashion, the mistake is often made of distracting from the actual form through excessive patterns and layers. We take the opposite approach.

### The 3 Pillars of Our Style

1. **Monochromatics:** We love tone-on-tone outfits. A completely cream-colored outfit elongates the silhouette and instantly looks premium.
2. **Texture Contrasts:** Since we remain color-reduced, we play with textures. A smooth silk hijab over a chunky knit cashmere sweater is the definition of effortless elegance.
3. **Flowing Silhouettes:** Clothing should drape around the body, not restrict it. Our cuts are designed to allow movement while maintaining posture.
      `,
      category: "Style Guide",
      imageUrl: "/images/journal/signature_talia.png",
      imageAlt: "Talia Signature Look",
      publishedAt: "2026-04-20",
      author: "Talia Editorial"
    },
    {
      id: "ramadan-essentials",
      title: "Ramadan & Eid Essentials",
      excerpt: "How to welcome the most spiritual month of the year with style and consciousness.",
      content: `
## Preparation for the Blessed Month

Ramadan is a time of reflection, inner peace, and community. For us at **Talia Boutique**, this also means adapting our wardrobe to support us during this spiritual month. Comfort during Tarawih prayers meets festive elegance for Iftar invitations.

### The Tarawih Set

For evening prayers at the mosque, we recommend our light, flowing abayas. They can be effortlessly thrown over everyday clothing and offer maximum freedom of movement. Paired with our signature velvet Quran cover, it makes daily reading an even more conscious ritual.

### Eid-ul-Fitr: Celebrate in Premium Quality

When the fasting month ends, it is Sunnah to look your best. Our exclusive Eid collections are characterized by subtle yet effective details: fine embroidery, mother-of-pearl buttons, and luxurious silk blends.
      `,
      category: "Lifestyle & Religion",
      imageUrl: "/images/journal/fall_collection.png",
      imageAlt: "Ramadan Essentials",
      publishedAt: "2026-03-01",
      author: "Talia Editorial"
    }
  ],
  TR: [
    {
      id: "philosophie",
      title: "Talia Boutique Felsefesi",
      excerpt: "Wetzlar'da İslami minimalizm ve Ulaşılabilir Lüks için nasıl yeni bir standart belirliyoruz.",
      content: "## Vizyonumuzun Kökeni\n\nWetzlar'ın tarihi atmosferinde Talia Boutique fikri doğdu. Amacımız sadece sıradan bir moda mağazası açmak değildi. Modern minimalizm ile İslami değerlerin kusursuz sentezini yaratmak istedik.\n\n### Sadece Kıyafetten Öte\n\nKoleksiyonumuzdaki her parça özenle seçilir. Zarafetten ve kaliteden ödün vermeyen bir tesettür anlayışını benimsiyoruz.",
      category: "Felsefe",
      imageUrl: "/images/journal/boutique_wetzlar.png",
      imageAlt: "Talia Boutique Felsefesi",
      publishedAt: "2026-06-01",
      author: "Talia Editöryal"
    },
    {
      id: "ethische-mode",
      title: "İstanbul'dan Etik Moda ve Zanaat",
      excerpt: "Kumaş seçimimiz ve Boğaziçi'ndeki ustalarla olan işbirliğimiz neden tavizsiz.",
      content: "## Mükemmel Dokunun Peşinde\n\nTalia Boutique'i kurarken aylarımızı İstanbul'un geleneksel çarşılarında ve modern atölyelerinde geçirdik. İç göstermeyecek kadar ağır, ancak zarafet yayacak kadar dökümlü kumaşlar aradık.\n\n### Kaşmirin Sırrı\n\nKaşmirimiz etik kaynaklardan elde edilir ve elle taranır. Bu da hayvanlara zarar verilmediği ve kimyasal ağartıcı kullanılmadığı anlamına gelir.",
      category: "Materyal & Zanaat",
      imageUrl: "/images/journal/premium_cashmere.png",
      imageAlt: "Etik Moda İstanbul",
      publishedAt: "2026-05-15",
      author: "Talia Editöryal"
    },
    {
      id: "signature-look",
      title: "Talia İmza Görünümü",
      excerpt: "Zamansız zarafet, katmanlama ve modest moda sanatı için bir stil rehberi.",
      content: "## Eksiltme Sanatı\n\nTalia imza görünümü basit bir temele dayanır: Gerçek lüks fısıldar, bağırmaz. Sadelikten yanayız.\n\n### Stilimizin 3 Temel Taşı\n\n1. **Monokromatik:** Ton sür ton kombinleri seviyoruz.\n2. **Doku Kontrastları:** Renkleri azalttığımız için dokularla oynuyoruz.\n3. **Dökümlü Silüetler:** Kıyafet bedeni sarmalı, sıkmamalıdır.",
      category: "Stil Rehberi",
      imageUrl: "/images/journal/signature_talia.png",
      imageAlt: "Talia İmza Görünümü",
      publishedAt: "2026-04-20",
      author: "Talia Editöryal"
    },
    {
      id: "ramadan-essentials",
      title: "Ramazan ve Bayram Temel Parçaları",
      excerpt: "Yılın en manevi ayını stil ve bilinçle nasıl karşılarız.",
      content: "## Mübarek Aya Hazırlık\n\nRamazan bir tefekkür, iç huzur ve topluluk zamanıdır. Teravih namazlarında rahatlık, İftar davetlerinde zarafet.\n\n### Teravih Seti\n\nAkşam namazları için hafif, dökümlü feracelerimizi öneriyoruz.\n\n### Ramazan Bayramı\n\nOruç ayı bittiğinde en iyi şekilde görünmek sünnettir. Özel bayram koleksiyonlarımız zarif nakışlar ve lüks ipek karışımlarıyla öne çıkar.",
      category: "Yaşam Tarzı",
      imageUrl: "/images/journal/fall_collection.png",
      imageAlt: "Ramazan Temel Parçaları",
      publishedAt: "2026-03-01",
      author: "Talia Editöryal"
    }
  ],
  KU: [
    {
      id: "philosophie",
      title: "Felsefeya Talia Boutique",
      excerpt: "Em çawa li Wetzlar ji bo mînîmalîzma îslamî û luks a bigihîje standardek nû ava dikin.",
      content: "## Koka Vîzyona Me\n\nDi nav dîroka Wetzlar de, ramana Talia Boutique çêbû. Em tenê dikanek din a modayê naxwazin. Armanca me yekkirina mînîmalîzma nûjen û nirxên îslamî ye.\n\n### Zêdetir ji Cilûbergan\n\nHer perçeyek di dikana me de bi mebestek zelal tê hilbijartin. Ew li ser sernermiyê ye ku tu tawîzê nade ser kalîte û xweşikbûnê.",
      category: "Felsefe",
      imageUrl: "/images/journal/boutique_wetzlar.png",
      imageAlt: "Felsefeya Talia Boutique",
      publishedAt: "2026-06-01",
      author: "Edîtoryal Talia"
    },
    {
      id: "ethische-mode",
      title: "Moda Exlaqî û Pîşesazî ji Stenbolê",
      excerpt: "Çima hilbijartina me ya qumaş û hevkariya bi hosteyên li ser Bosporus re bê tawîz e.",
      content: "## Lêgerîna li Têksta Bêkêmasî\n\nDema ku me Talia Boutique ava kir, me bi mehan li bazarên kevneşopî û atolyeyên nûjen ên Stenbolê derbas kir.\n\n### Sira Cashmere\n\nCashmere ya me ji çavkaniyên exlaqî tê û bi destan tê şeh kirin.",
      category: "Materyal",
      imageUrl: "/images/journal/premium_cashmere.png",
      imageAlt: "Moda Exlaqî Stenbol",
      publishedAt: "2026-05-15",
      author: "Edîtoryal Talia"
    },
    {
      id: "signature-look",
      title: "Dîmena Îmzeya Talia",
      excerpt: "Rêberek şêwazê ji bo zerafeta bêdem, qatbûn û hunera modaya mutewazî.",
      content: "## Hunera Kêmbûnê\n\nDîmena Îmzeya Talia li ser pêşgotinek hêsan e: Luksê rastîn pistepist dike, qîr nake.\n\n### 3 Stûnên Şêwaza Me\n\n1. **Monokromatîk:** Em ji kincên tone-on-tone hez dikin.\n2. **Cûdahiyên Têkistî:** Ji ber ku em di reng de kêm dimînin, em bi destanan dilîzin.\n3. **Sîluetên Herikbar:** Divê cil û bergên li dora laş birije.",
      category: "Rêberê Şêwazê",
      imageUrl: "/images/journal/signature_talia.png",
      imageAlt: "Dîmena Îmzeya Talia",
      publishedAt: "2026-04-20",
      author: "Edîtoryal Talia"
    },
    {
      id: "ramadan-essentials",
      title: "Pêdiviyên Remezan û Cejnê",
      excerpt: "Meriv çawa bi şêwaz û hişmendî pêşwaziya meha herî giyanî ya salê dike.",
      content: "## Amadekariya ji bo Meha Pîroz\n\nRemezan dema raman, aramiya hundurîn û civakê ye. \n\n### Setê Terawîhê\n\nJi bo nimêjên êvarê li mizgeftê, em abayên xwe yên sivik û diherikin pêşniyar dikin.\n\n### Cejna Remezanê\n\nKoleksiyonên me yên Cejnê yên taybet bi hûrguliyên nazik lê bandorker têne diyar kirin.",
      category: "Jiyan",
      imageUrl: "/images/journal/fall_collection.png",
      imageAlt: "Pêdiviyên Remezanê",
      publishedAt: "2026-03-01",
      author: "Edîtoryal Talia"
    }
  ],
  FA: [
    {
      id: "philosophie",
      title: "فلسفه بوتیک تالیا",
      excerpt: "چگونه استاندارد جدیدی برای مینیمالیسم اسلامی و لوکس مقرون به صرفه در وتسلار ایجاد می کنیم.",
      content: "## منشاء چشم انداز ما\n\nدر میان پس زمینه تاریخی وتسلار، ایده بوتیک تالیا متولد شد. هدف ما ایجاد یک شکاف بود: سنتز کامل مینیمالیسم مدرن و ارزش‌های اسلامی.\n\n### فراتر از لباس\n\nهر قطعه در بوتیک ما با هدف روشنی انتخاب می شود. ما به دنبال کیفیتی هستیم که هم زیبایی داشته باشد و هم پوشش مناسب.",
      category: "فلسفه",
      imageUrl: "/images/journal/boutique_wetzlar.png",
      imageAlt: "فلسفه بوتیک تالیا",
      publishedAt: "2026-06-01",
      author: "تحریریه تالیا"
    },
    {
      id: "ethische-mode",
      title: "مد اخلاقی و صنایع دستی از استانبول",
      excerpt: "چرا انتخاب پارچه ها و همکاری ما با اساتید در بسفر بدون سازش است.",
      content: "## جستجو برای بافت کامل\n\nهنگامی که بوتیک تالیا را تأسیس کردیم، ماه ها در بازارهای سنتی و کارگاه های مدرن استانبول سپری کردیم.\n\n### راز ترمه\n\nترمه ما به صورت اخلاقی تهیه شده و با دست شانه می شود.",
      category: "مواد",
      imageUrl: "/images/journal/premium_cashmere.png",
      imageAlt: "مد اخلاقی استانبول",
      publishedAt: "2026-05-15",
      author: "تحریریه تالیا"
    },
    {
      id: "signature-look",
      title: "ظاهر امضای تالیا",
      excerpt: "راهنمای سبک برای ظرافت جاودانه، لایه بندی و هنر مد متواضعانه.",
      content: "## هنر حذف\n\nظاهر امضای تالیا بر یک فرض ساده استوار است: لوکس واقعی زمزمه می کند، فریاد نمی زند.\n\n### 3 ستون سبک ما\n\n1. **تک رنگی:** ما عاشق لباس های تن در تن هستیم.\n2. **تضادهای بافتی:** ما با بافت ها بازی می کنیم.\n3. **شبح های روان:** لباس باید در اطراف بدن بپوشد، نه آن را محدود کند.",
      category: "راهنمای سبک",
      imageUrl: "/images/journal/signature_talia.png",
      imageAlt: "ظاهر امضای تالیا",
      publishedAt: "2026-04-20",
      author: "تحریریه تالیا"
    },
    {
      id: "ramadan-essentials",
      title: "ملزومات رمضان و عید",
      excerpt: "چگونه با سبک و آگاهی از روحانی ترین ماه سال استقبال کنیم.",
      content: "## آمادگی برای ماه مبارک\n\nرمضان زمان تفکر، آرامش درونی و اجتماع است.\n\n### مجموعه تراویح\n\nبرای نمازهای عصر در مسجد، ما عباهای سبک و روان خود را توصیه می کنیم.\n\n### عید فطر\n\nمجموعه های منحصر به فرد عید ما با جزئیات ظریف و در عین حال موثر مشخص می شوند.",
      category: "سبک زندگی",
      imageUrl: "/images/journal/fall_collection.png",
      imageAlt: "ملزومات رمضان",
      publishedAt: "2026-03-01",
      author: "تحریریه تالیا"
    }
  ],
  AR: [
    {
      id: "philosophie",
      title: "فلسفة بوتيك تاليا",
      excerpt: "كيف نضع معيارًا جديدًا للحد الأدنى الإسلامي والرفاهية التي يمكن الوصول إليها في فيتسلار.",
      content: "## أصل رؤيتنا\n\nوسط الخلفية التاريخية لمدينة فيتسلار، ولدت فكرة بوتيك تاليا. كان هدفنا سد فجوة: التوليف المثالي للحد الأدنى الحديث والقيم الإسلامية.\n\n### أكثر من مجرد ملابس\n\nيتم اختيار كل قطعة في البوتيك الخاص بنا بنية واضحة. الأمر يتعلق بالتواضع الذي لا يقدم أي تنازلات بشأن الجودة والأناقة.",
      category: "فلسفة",
      imageUrl: "/images/journal/boutique_wetzlar.png",
      imageAlt: "فلسفة بوتيك تاليا",
      publishedAt: "2026-06-01",
      author: "افتتاحية تاليا"
    },
    {
      id: "ethische-mode",
      title: "الأزياء الأخلاقية والحرفية من اسطنبول",
      excerpt: "لماذا لا تهاون في اختيارنا للأقمشة والتعاون مع الأساتذة على مضيق البوسفور.",
      content: "## البحث عن النسيج المثالي\n\nعندما أسسنا بوتيك تاليا، أمضينا شهورًا في الأسواق التقليدية وورش العمل الحديثة في إسطنبول.\n\n### سر الكشمير\n\nالكشمير لدينا من مصادر أخلاقية ويتم تمشيطه يدويًا.",
      category: "المواد والحرف",
      imageUrl: "/images/journal/premium_cashmere.png",
      imageAlt: "الأزياء الأخلاقية اسطنبول",
      publishedAt: "2026-05-15",
      author: "افتتاحية تاليا"
    },
    {
      id: "signature-look",
      title: "مظهر توقيع تاليا",
      excerpt: "دليل أسلوب للأناقة الخالدة والطبقات وفن الأزياء المحتشمة.",
      content: "## فن الحذف\n\nيعتمد مظهر توقيع تاليا على فرضية بسيطة: الفخامة الحقيقية تهمس، ولا تصرخ.\n\n### الركائز الثلاث لأسلوبنا\n\n1. **أحادي اللون:** نحن نحب الملابس ذات اللون على اللون.\n2. **تباين الملمس:** نلعب بالأنسجة.\n3. **الصور الظلية المتدفقة:** يجب أن تتدلى الملابس حول الجسم.",
      category: "دليل الأسلوب",
      imageUrl: "/images/journal/signature_talia.png",
      imageAlt: "مظهر توقيع تاليا",
      publishedAt: "2026-04-20",
      author: "افتتاحية تاليا"
    },
    {
      id: "ramadan-essentials",
      title: "أساسيات رمضان والعيد",
      excerpt: "كيف نستقبل الشهر الأكثر روحانية في العام بأناقة ووعي.",
      content: "## التحضير للشهر الفضيل\n\nرمضان هو وقت للتأمل والسلام الداخلي والمجتمع.\n\n### مجموعة التراويح\n\nلصلاة العشاء في المسجد، نوصي بالعبايات الخفيفة والمتدفقة.\n\n### عيد الفطر\n\nتتميز مجموعات العيد الحصرية لدينا بتفاصيل دقيقة وفعالة.",
      category: "أسلوب الحياة",
      imageUrl: "/images/journal/fall_collection.png",
      imageAlt: "أساسيات رمضان",
      publishedAt: "2026-03-01",
      author: "افتتاحية تاليا"
    }
  ]
};
