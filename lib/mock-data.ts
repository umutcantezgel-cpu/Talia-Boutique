import { JournalArticle } from "@/types";

export type SneakPeek = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
};

export const MOCK_SNEAK_PEEKS: SneakPeek[] = [
    {
        id: "sp1",
        title: "Kollektion Herbst/Winter",
        subtitle: "Minimalistische Silhouetten & edle Stoffe",
        date: "Drop 01: Exklusiv In-Store"
    },
    {
        id: "sp2",
        title: "Cashmere Essentials",
        subtitle: "Kompromissloser Komfort",
        date: "Drop 02: Limitiert verfügbar"
    },
    {
        id: "sp3",
        title: "Talia Signature",
        subtitle: "Zeitlose Eleganz für den Abend",
        date: "Drop 03: Bald erhältlich"
    }
];

export const MOCK_TESTIMONIALS = [
    {
        id: "t1",
        name: "Kateryna Osypova",
        role: "Google Rezension",
        content: "Gute Qualität und schöne Beratung 🥰"
    },
    {
        id: "t2",
        name: "Abdurrahman Altuner",
        role: "Google Rezension",
        content: "Sehr nette Inhaber und beste Qualität"
    },
    {
        id: "t3",
        name: "Jeewan Sharma",
        role: "Google Rezension",
        content: "Gut.."
    }
];

export const MOCK_FAQS = [
    {
        question: "Wo befindet sich die Talia Boutique?",
        answer: "Unsere physische Boutique findest du in der Bahnhofstraße 1, 35576 Wetzlar. Komm vorbei und erlebe unsere Kollektionen hautnah."
    },
    {
        question: "Bietet ihr Personal Shopping an?",
        answer: "Ja, wir legen großen Wert auf eine ehrliche und individuelle Beratung. Vereinbare gerne vorab einen Termin oder besuche uns zu den regulären Öffnungszeiten."
    },
    {
        question: "Woher bezieht ihr eure Kollektionen?",
        answer: "Wir kuratieren unsere Mode von exklusiven internationalen Brands und ausgewählten Ateliers, die unseren hohen Anspruch an Qualität und Ethik teilen."
    },
    {
        question: "Kann ich auch online einkaufen?",
        answer: "Unser Fokus liegt aktuell auf der exklusiven In-Store Experience in Wetzlar, da wir glauben, dass Premium-Mode gefühlt und anprobiert werden muss. Ausgewählte Stücke sind im Online-Katalog sichtbar."
    }
];

export const MOCK_INSTAGRAM = [
    { id: "ig1", video: "/videos/video1.mp4", link: "#" },
    { id: "ig2", video: "/videos/video2.mp4", link: "#" },
    { id: "ig3", video: "/videos/video3.mp4", link: "#" },
    { id: "ig4", video: "/videos/video4.mp4", link: "#" },
    { id: "ig5", video: "/videos/video5.mp4", link: "#" },
    { id: "ig6", video: "/videos/video6.mp4", link: "#" },
    { id: "ig7", video: "/videos/video7.mp4", link: "#" },
    { id: "ig8", video: "/videos/video8.mp4", link: "#" },
    { id: "ig9", video: "/videos/video9.mp4", link: "#" },
    { id: "ig10", video: "/videos/video10.mp4", link: "#" },
    { id: "ig11", video: "/videos/video11.mp4", link: "#" },
    { id: "ig12", video: "/videos/video12.mp4", link: "#" },
    { id: "ig13", image: "/images/ig1.jpeg", link: "#" },
    { id: "ig14", image: "/images/ig2.jpeg", link: "#" },
    { id: "ig15", image: "/images/ig3.jpeg", link: "#" },
    { id: "ig16", image: "/images/ig4.jpeg", link: "#" },
    { id: "ig17", image: "/images/ig5.jpeg", link: "#" },
    { id: "ig18", image: "/images/ig6.jpeg", link: "#" },
    { id: "ig19", image: "/images/ig7.jpeg", link: "#" },
];

export const MOCK_JOURNAL: JournalArticle[] = [
    {
        id: "fall-collection",
        title: "Die Essenz der Herbstkollektion",
        excerpt: "Wie gedeckte Farben und Cashmere unsere Garderobe transformieren.",
        content: "Detailed content would go here...",
        category: "Kollektion",
        imageUrl: "/images/journal/fall_collection.png",
        videoUrl: "",
        imageAlt: "Herbstkollektion Talia",
        publishedAt: "2026-09-10",
        author: "Talia Editorial"
    },
    {
        id: "boutique-wetzlar",
        title: "Ein Blick hinter die Kulissen",
        excerpt: "Warum Wetzlar der perfekte Ort für exklusive Fashion ist.",
        content: "Detailed content would go here...",
        category: "Behind the Scenes",
        imageUrl: "/images/journal/boutique_wetzlar.png",
        videoUrl: "",
        imageAlt: "Wetzlar Boutique",
        publishedAt: "2026-08-18",
        author: "Talia Editorial"
    },
    {
        id: "signature-talia",
        title: "Talia Signature Style",
        excerpt: "Zeitlose Eleganz für jeden Anlass.",
        content: "Detailed content would go here...",
        category: "Style Guide",
        imageUrl: "/images/journal/signature_talia.png",
        videoUrl: "",
        imageAlt: "Signature Style",
        publishedAt: "2026-07-22",
        author: "Talia Editorial"
    },
    {
        id: "premium-cashmere",
        title: "Cashmere: Kompromisslose Qualität",
        excerpt: "Warum wir bei unseren Stoffen keine Abstriche machen.",
        content: "Detailed content would go here...",
        category: "Material",
        imageUrl: "/images/journal/premium_cashmere.png",
        videoUrl: "",
        imageAlt: "Premium Cashmere",
        publishedAt: "2026-07-05",
        author: "Talia Editorial"
    },
    {
        id: "hochzeitsmode-wetzlar",
        title: "Exklusive Hochzeitsmode in Wetzlar",
        excerpt: "Entdecke Traumkleider für den schönsten Tag in der Talia Boutique.",
        content: "Detailed content would go here...",
        category: "Bridal",
        imageUrl: "/images/journal/wedding_dress.png",
        videoUrl: "",
        imageAlt: "Hochzeitsmode Wetzlar",
        publishedAt: "2026-06-03",
        author: "Talia Editorial"
    },
    {
        id: "abendkleider-eleganz",
        title: "Abendkleider für unvergessliche Nächte",
        excerpt: "Finde das perfekte Abendkleid für deinen besonderen Anlass.",
        content: "Detailed content would go here...",
        category: "Evening",
        imageUrl: "/images/journal/evening_gown.png",
        videoUrl: "",
        imageAlt: "Abendkleider Wetzlar",
        publishedAt: "2026-06-02",
        author: "Talia Editorial"
    },
    {
        id: "bridal-details-perfektion",
        title: "Bridal Details: Perfektion bis ins Detail",
        excerpt: "Accessoires und Feinheiten, die deinen Bridal-Look vervollständigen.",
        content: "Detailed content would go here...",
        category: "Accessories",
        imageUrl: "/images/journal/bridal_details.png",
        videoUrl: "",
        imageAlt: "Bridal Details",
        publishedAt: "2026-06-01",
        author: "Talia Editorial"
    }
];
