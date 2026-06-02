import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'lib/i18n/translations.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const careTranslations = {
  DE: `
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
            "Holzperlen dunklen auf natürliche Weise nach – das ist ein Qualitätsmerkmal, kein Fehler."
          ]
        }
      }
    }
  `,
  EN: `
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
    }
  `,
  TR: `
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
    }
  `,
  KU: `
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
    }
  `,
  FA: `
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
    }
  `,
  AR: `
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
    }
  `
};

for (const lang of Object.keys(careTranslations)) {
  const marker = \`contact: {\`;
  const insertIndex = content.indexOf(marker, content.indexOf(\`\${lang}: {\`));
  if (insertIndex !== -1) {
    const endContactIndex = content.indexOf('}', content.indexOf('errors:', insertIndex)) + 2; // finding end of contact obj
    // it's easier to regex replace
    const regex = new RegExp(\`(\\\s+contact: \\\{[\\\\s\\\\S]*?\\\n\\\s+\\\})\\\n\\\s+\\\}\`, 'g');
    
    // Instead of regex, I'll just append it right before the closing brace of the language object
    const langObjMatch = content.match(new RegExp(\`\${lang}: \\\{[\\\\s\\\\S]*?(?=\\\n  \\\},\\\n|\\\n  \\\}$)\`));
    if (langObjMatch) {
      content = content.replace(langObjMatch[0], langObjMatch[0] + ',\n' + careTranslations[lang as keyof typeof careTranslations]);
    }
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Patched translations.ts');
