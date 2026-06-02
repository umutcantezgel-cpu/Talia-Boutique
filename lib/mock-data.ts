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
        name: "Kateryna O.",
        role: "Kundin",
        content: "Gute Qualität und schöne Beratung 🥰 Die Auswahl ist unglaublich hochwertig und stilvoll."
    },
    {
        id: "t2",
        name: "Abdurrahman A.",
        role: "Kunde",
        content: "Sehr nette Inhaber und beste Qualität. Ein echter Geheimtipp in Wetzlar für alle, die Premium-Mode schätzen."
    },
    {
        id: "t3",
        name: "Jeewan S.",
        role: "Kunde",
        content: "Gut.. Exzellenter Service und wunderschöne Stücke. Komme immer wieder gerne."
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
    { id: "ig1", image: "https://picsum.photos/seed/talia1/600/600", link: "#" },
    { id: "ig2", image: "https://picsum.photos/seed/talia2/600/600", link: "#" },
    { id: "ig3", image: "https://picsum.photos/seed/talia3/600/600", link: "#" },
    { id: "ig4", image: "https://picsum.photos/seed/talia4/600/600", link: "#" },
];

export const MOCK_JOURNAL: JournalArticle[] = [
    {
        id: "fall-collection",
        title: "Die Essenz der Herbstkollektion",
        excerpt: "Wie gedeckte Farben und Cashmere unsere Garderobe transformieren.",
        content: "Detailed content would go here...",
        category: "Kollektion",
        imageUrl: "https://picsum.photos/seed/fall/1200/800",
        videoUrl: "/assets/instagram/1.mp4",
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
        imageUrl: "https://picsum.photos/seed/wetzlar/1200/800",
        videoUrl: "/assets/instagram/2.mp4",
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
        imageUrl: "https://picsum.photos/seed/signature/1200/800",
        videoUrl: "/assets/instagram/3.mp4",
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
        imageUrl: "https://picsum.photos/seed/cashmere/1200/800",
        videoUrl: "/assets/instagram/4.mp4",
        imageAlt: "Premium Cashmere",
        publishedAt: "2026-07-05",
        author: "Talia Editorial"
    }
];
