export interface Product {
    id: string;
    cat: string;
    name: string;
    price: string | null;
    rating: string;
    img: string | null;
}

export interface Category {
    id: string;
    label: string;
    emoji: string;
}

export const CATEGORIES: Category[] = [
    { id: "essentials", label: "Daily Essentials", emoji: "🌸" },
    { id: "bath",       label: "Bath & Health",    emoji: "🛁" },
    { id: "feeding",    label: "Feeding",           emoji: "🍼" },
    { id: "play",       label: "Play & Sleep",      emoji: "🎁" },
];

export const REGISTRY_URL =
    "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW";

export const PRODUCTS: Product[] = [
    // 🌸 Daily Essentials
    {
        id: "p01",
        cat: "essentials",
        name: "Philips AVENT Soothie Pacifier – One-Piece BPA-Free Silicone, Pack of 2 with Sterilisation Container (SCF099/27)",
        price: "CHF 8.34",
        rating: "4.4",
        img: "https://m.media-amazon.com/images/I/41wN1iRlidL.jpg",
    },
    {
        id: "p05",
        cat: "essentials",
        name: "Baby Muslin Washcloths & Burp Cloths – Pack of 10, 25×25 cm, Soft & Absorbent",
        price: "CHF 11.69",
        rating: "4.6",
        img: "https://m.media-amazon.com/images/I/41qO57D0hGS.jpg",
    },
    {
        id: "p10",
        cat: "essentials",
        name: "lulumoon Muslin Changing Mat Cover 75×85 cm – High-Absorbency, Waterproof Back, Washable",
        price: "CHF 14.20",
        rating: "4.0",
        img: "https://m.media-amazon.com/images/I/41fkSvLi1JL.jpg",
    },
    {
        id: "p11",
        cat: "essentials",
        name: "Chicco Odour Off Nappy Bags – Telescopic Bin Liners, 3-Layer Odour Retention, 45 Bags",
        price: "CHF 13.36",
        rating: "4.5",
        img: "https://m.media-amazon.com/images/I/41HxgB2oXFL.jpg",
    },
    {
        id: "p12",
        cat: "essentials",
        name: "Chicco Nappy Pail Odor OFF – Odour-Proof, Conventional Bags Compatible, Silver",
        price: "CHF 30.06",
        rating: "4.3",
        img: "https://m.media-amazon.com/images/I/21+PFjHXcjL.jpg",
    },
    {
        id: "p13",
        cat: "essentials",
        name: "Pampers Premium Protection Nappies Size 1 (2–5 kg) – Half Month Box, Pack of 180",
        price: "CHF 33.04",
        rating: "4.7",
        img: "https://m.media-amazon.com/images/I/51pIuf3qfFL.jpg",
    },
    {
        id: "p15",
        cat: "essentials",
        name: "Chicco Baby Nail Scissors with Protective Cap – Pink",
        price: "CHF 8.02",
        rating: "4.5",
        img: "https://m.media-amazon.com/images/I/31k9qiEQE0L.jpg",
    },
    {
        id: "p16",
        cat: "essentials",
        name: "Sterntaler Unisex Baby Socks – Pack of 3",
        price: "CHF 5.08",
        rating: "4.7",
        img: "https://m.media-amazon.com/images/I/41dxK5Yei5L.jpg",
    },

    // 🛁 Bath & Health
    {
        id: "p03",
        cat: "bath",
        name: "Philips Avent Digital Baby Thermometer (Model SCH480/00)",
        price: "CHF 12.52",
        rating: "4.7",
        img: "https://m.media-amazon.com/images/I/41ZWJd9MDGL.jpg",
    },
    {
        id: "p04",
        cat: "bath",
        name: "Foldable Baby Bathtub with Support Cushion & Non-Slip Seat Mat – Portable, for Newborns & Toddlers",
        price: "CHF 25.05",
        rating: "4.4",
        img: "https://m.media-amazon.com/images/I/41kONUdscEL.jpg",
    },
    {
        id: "p14",
        cat: "bath",
        name: "Berrcom Contactless Forehead & Ear Infrared Thermometer – Fever Alarm, Instant Reading",
        price: "CHF 16.32",
        rating: "4.4",
        img: "https://m.media-amazon.com/images/I/31gTODnj5oL.jpg",
    },
    {
        id: "p17",
        cat: "bath",
        name: "Waterproof Washable Mattress Protector – Unicorn, Breathable, Cot/Single Bed with Side Tucks",
        price: "CHF 18.37",
        rating: "4.8",
        img: "https://m.media-amazon.com/images/I/51gZ5Ic0F1L.jpg",
    },
    {
        id: "p09",
        cat: "bath",
        name: "HelloBaby Baby Monitor – 29 hr Battery, 355°/120° Pan-Tilt Camera, 2× Zoom, Night Vision, Eco Mode, 305 m Range",
        price: "CHF 50.09",
        rating: "4.3",
        img: "https://m.media-amazon.com/images/I/41kaUU0MuuL.jpg",
    },

    // 🍼 Feeding
    {
        id: "p07",
        cat: "feeding",
        name: "Philips Avent Natural Response Bottles 125 ml – Pack of 2, for Newborns (SCY900/02)",
        price: "CHF 12.42",
        rating: "4.7",
        img: "https://m.media-amazon.com/images/I/41dpHwXpSAL.jpg",
    },
    {
        id: "p08",
        cat: "feeding",
        name: "Philips Avent Natural Response Bottles 260 ml – Pack of 3, from 1 Month (SCY903/03)",
        price: "CHF 17.28",
        rating: "4.7",
        img: "https://m.media-amazon.com/images/I/41iA3Bz-r6L.jpg",
    },
    {
        id: "p19",
        cat: "feeding",
        name: "Momcozy 7-in-1 Baby Bottle Cleaning Brush Set – Silicone Brush, Nipple Brush, Soap Dispenser & Drying Rack",
        price: "CHF 14.20",
        rating: "4.4",
        img: null,
    },

    // 🎁 Play & Sleep
    {
        id: "p02",
        cat: "play",
        name: "Meyco Baby Swaddling Bag Pack of 2 – 0–3 Months, 100% Cotton Oeko-Tex, Branches Sand",
        price: "CHF 21.68",
        rating: "4.3",
        img: "https://m.media-amazon.com/images/I/31u+eDnNt-L.jpg",
    },
    {
        id: "p06",
        cat: "play",
        name: "All-In-One Stretchy Baby Sling Carrier – Hands-Free, One Size",
        price: "CHF 30.88",
        rating: "4.5",
        img: "https://m.media-amazon.com/images/I/41I7Xj51ebL.jpg",
    },
    {
        id: "p18",
        cat: "play",
        name: "Momcozy Portable Sound Machine with Night Light – 20 Soothing Sounds, Stroller Clip",
        price: "CHF 27.56",
        rating: "4.4",
        img: "https://m.media-amazon.com/images/I/51aVQAOf0lL.jpg",
    },
    {
        id: "p20",
        cat: "play",
        name: "Fisher-Price Snooze Music Box Plush – Soothing Music & Rhythmic Movements, from Birth (FXC66)",
        price: "CHF 24.05",
        rating: "4.6",
        img: null,
    },
];