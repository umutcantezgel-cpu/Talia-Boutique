import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'lib/i18n/translations.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const newTranslations = {
  DE: `
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
    }
`,
  EN: `
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
    }
`,
  TR: `
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
    }
`,
  KU: `
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
    }
`,
  FA: `
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
      label: "برنامه سفیر",
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
    }
`,
  AR: `
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
    }
`
};

for (const lang of Object.keys(newTranslations)) {
  const langObjMatch = content.match(new RegExp(\`\${lang}: \\\{[\\\\s\\\\S]*?(?=\\\n  \\\},\\\n|\\\n  \\\}$)\`));
  if (langObjMatch) {
    content = content.replace(langObjMatch[0], langObjMatch[0] + ',\n' + newTranslations[lang as keyof typeof newTranslations]);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Patched translations.ts with about and creator');
