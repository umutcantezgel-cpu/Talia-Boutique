import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'lib/i18n/translations.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const newTranslations = {
  DE: \`
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
    }
  \`,
  EN: \`
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
    }
  \`,
  TR: \`
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
    }
  \`,
  KU: \`
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
    }
  \`,
  FA: \`
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
    }
  \`,
  AR: \`
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
    }
  \`
};

for (const lang of Object.keys(newTranslations)) {
  const langObjMatch = content.match(new RegExp(\`\${lang}: \\\{[\\\\s\\\\S]*?(?=\\\n  \\\},\\\n|\\\n  \\\}$)\`));
  if (langObjMatch) {
    content = content.replace(langObjMatch[0], langObjMatch[0] + ',\n' + newTranslations[lang as keyof typeof newTranslations]);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Patched translations.ts with shipping and payment');
