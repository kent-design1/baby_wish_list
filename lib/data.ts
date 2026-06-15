export interface Product {
    id: string;
    cat: string;
    name: string;
    price: string | null;
    rating: string;
    img: string | null;
    link: string | null;
}

export interface Category {
    id: string;
    label: string;
    emoji: string;
}

export const CATEGORIES: Category[] = [
    { id: "essentials", label: "Daily Essentials", emoji: "🌸" },
    { id: "play",       label: "Play & Sleep",      emoji: "🎁" },
];

export const REGISTRY_URL =
    "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW";

export const PRODUCTS: Product[] = [
    // 🌸 Daily Essentials
    // {
    //     id: "p01",
    //     cat: "essentials",
    //     name: "Philips AVENT Soothie Pacifier – One-Piece BPA-Free Silicone, Pack of 2 with Sterilisation Container (SCF099/27)",
    //     price: "CHF 8.34",
    //     rating: "4.4",
    //     img: "https://m.media-amazon.com/images/I/41wN1iRlidL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p05",
    //     cat: "essentials",
    //     name: "Baby Muslin Washcloths & Burp Cloths – Pack of 10, 25×25 cm, Soft & Absorbent",
    //     price: "CHF 11.69",
    //     rating: "4.6",
    //     img: "https://m.media-amazon.com/images/I/41qO57D0hGS.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p10",
    //     cat: "essentials",
    //     name: "lulumoon Muslin Changing Mat Cover 75×85 cm – High-Absorbency, Waterproof Back, Washable",
    //     price: "CHF 14.20",
    //     rating: "4.0",
    //     img: "https://m.media-amazon.com/images/I/41fkSvLi1JL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p11",
    //     cat: "essentials",
    //     name: "Chicco Odour Off Nappy Bags – Telescopic Bin Liners, 3-Layer Odour Retention, 45 Bags",
    //     price: "CHF 13.36",
    //     rating: "4.5",
    //     img: "https://m.media-amazon.com/images/I/41HxgB2oXFL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p12",
    //     cat: "essentials",
    //     name: "Chicco Nappy Pail Odor OFF – Odour-Proof, Conventional Bags Compatible, Silver",
    //     price: "CHF 30.06",
    //     rating: "4.3",
    //     img: "https://m.media-amazon.com/images/I/21+PFjHXcjL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    {
        id: "p13",
        cat: "essentials",
        name: "Pampers Premium Protection Nappies Size 1 (2–5 kg) – Half Month Box, Pack of 180",
        price: "CHF 33.04",
        rating: "4.7",
        img: "https://m.media-amazon.com/images/I/51pIuf3qfFL.jpg",
        link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    },
    // {
    //     id: "p15",
    //     cat: "essentials",
    //     name: "Chicco Baby Nail Scissors with Protective Cap – Pink",
    //     price: "CHF 8.02",
    //     rating: "4.5",
    //     img: "https://m.media-amazon.com/images/I/31k9qiEQE0L.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p16",
    //     cat: "essentials",
    //     name: "Sterntaler Unisex Baby Socks – Pack of 3",
    //     price: "CHF 5.08",
    //     rating: "4.7",
    //     img: "https://m.media-amazon.com/images/I/41dxK5Yei5L.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },

    // 🛁 Bath & Health
    // {
    //     id: "p03",
    //     cat: "bath",
    //     name: "Philips Avent Digital Baby Thermometer (Model SCH480/00)",
    //     price: "CHF 12.52",
    //     rating: "4.7",
    //     img: "https://m.media-amazon.com/images/I/41ZWJd9MDGL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p04",
    //     cat: "bath",
    //     name: "Foldable Baby Bathtub with Support Cushion & Non-Slip Seat Mat – Portable, for Newborns & Toddlers",
    //     price: "CHF 25.05",
    //     rating: "4.4",
    //     img: "https://m.media-amazon.com/images/I/41kONUdscEL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p14",
    //     cat: "bath",
    //     name: "Berrcom Contactless Forehead & Ear Infrared Thermometer – Fever Alarm, Instant Reading",
    //     price: "CHF 16.32",
    //     rating: "4.4",
    //     img: "https://m.media-amazon.com/images/I/31gTODnj5oL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p17",
    //     cat: "bath",
    //     name: "Waterproof Washable Mattress Protector – Unicorn, Breathable, Cot/Single Bed with Side Tucks",
    //     price: "CHF 18.37",
    //     rating: "4.8",
    //     img: "https://m.media-amazon.com/images/I/51gZ5Ic0F1L.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p09",
    //     cat: "bath",
    //     name: "HelloBaby Baby Monitor – 29 hr Battery, 355°/120° Pan-Tilt Camera, 2× Zoom, Night Vision, Eco Mode, 305 m Range",
    //     price: "CHF 50.09",
    //     rating: "4.3",
    //     img: "https://m.media-amazon.com/images/I/41kaUU0MuuL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },

    // 🍼 Feeding
    // {
    //     id: "p07",
    //     cat: "feeding",
    //     name: "Philips Avent Natural Response Bottles 125 ml – Pack of 2, for Newborns (SCY900/02)",
    //     price: "CHF 12.42",
    //     rating: "4.7",
    //     img: "https://m.media-amazon.com/images/I/41dpHwXpSAL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p08",
    //     cat: "feeding",
    //     name: "Philips Avent Natural Response Bottles 260 ml – Pack of 3, from 1 Month (SCY903/03)",
    //     price: "CHF 17.28",
    //     rating: "4.7",
    //     img: "https://m.media-amazon.com/images/I/41iA3Bz-r6L.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p19",
    //     cat: "feeding",
    //     name: "Momcozy 7-in-1 Baby Bottle Cleaning Brush Set – Silicone Brush, Nipple Brush, Soap Dispenser & Drying Rack",
    //     price: "CHF 14.20",
    //     rating: "4.4",
    //     img: "https://m.media-amazon.com/images/I/41tIv4qTcKL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },

    // 🎁 Play & Sleep
    // {
    //     id: "p02",
    //     cat: "play",
    //     name: "Meyco Baby Swaddling Bag Pack of 2 – 0–3 Months, 100% Cotton Oeko-Tex, Branches Sand",
    //     price: "CHF 21.68",
    //     rating: "4.3",
    //     img: "https://m.media-amazon.com/images/I/31u+eDnNt-L.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    // {
    //     id: "p06",
    //     cat: "play",
    //     name: "All-In-One Stretchy Baby Sling Carrier – Hands-Free, One Size",
    //     price: "CHF 30.88",
    //     rating: "4.5",
    //     img: "https://m.media-amazon.com/images/I/41I7Xj51ebL.jpg",
    //     link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    // },
    {
        id: "p18",
        cat: "play",
        name: "Momcozy Portable Sound Machine with Night Light – 20 Soothing Sounds, Stroller Clip",
        price: "CHF 27.56",
        rating: "4.4",
        img: "https://m.media-amazon.com/images/I/51aVQAOf0lL.jpg",
        link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    },
    {
        id: "p20",
        cat: "play",
        name: "Fisher-Price Snooze Music Box Plush – Soothing Music & Rhythmic Movements, from Birth (FXC66)",
        price: "CHF 24.05",
        rating: "4.6",
        img: "https://m.media-amazon.com/images/I/411CcrovTDL.jpg",
        link: "https://www.amazon.de/baby-reg/latifa-qatrani-july-2026-nidau/1CDUDP4MXNUVW"
    },

    // 🌸 Daily Essentials
    {
        id: "p21",
        cat: "essentials",
        name: "Washpads – Reusable Baby Wash Pads",
        price: "CHF 20.93",
        rating: "4.5",
        img: "https://m.media-amazon.com/images/I/51AVaiTaAKL._SL1080_.jpg",
        link: "https://www.amazon.de/dp/B0BTP9RH71/",
    },
    {
        id: "p22",
        cat: "essentials",
        name: "Chicco Odour Off Nappy Bin – Diaper Pail",
        price: "CHF 15",
        rating: "4.3",
        img: "https://static01.galaxus.com/productimages/5/3/2/3/2/0/9/2/2/4/5/4/7/0/1/5/3/2/3/0d9528c4-12f9-4833-9eb9-56ec369ce74b_cropped.jpg_1000.avif",
        link: "https://www.galaxus.ch/fr/s10/product/chicco-odour-off-poubelle-a-couches-52536087",
    },
    {
        id: "p23",
        cat: "essentials",
        name: "Attache Tétine / Pacifier Chain Clip",
        price: "CHF 25.90",
        rating: "4.4",
        img: "https://i8.amplience.net/i/manor/mp-e74ab6b9-tProduct_image1?fmt=auto&h=920&w=920 ",
        link: "https://www.manor.ch/fr/p/mp-e74ab6b9-tproduct",
    },

// 🍼 Feeding
    {
        id: "p24",
        cat: "essentials",
        name: "Philips Avent Drying Rack – Bottle & Accessories Drying Stand",
        price: "CHF 13.35",
        rating: "4.8",
        img: "https://m.media-amazon.com/images/I/61+KIXy9vLL._SL1000_.jpg",
        link: "https://www.amazon.de/dp/B00GN0S81Y/",
    },

// 🎁 Play & Sleep
    {
        id: "p25",
        cat: "play",
        name: "Baby Einstein Aquarium – Musical Crib Toy with Lights & Sounds",
        price: "CHF 25.94",
        rating: "4.6",
        img: "https://m.media-amazon.com/images/I/71RxzjTdYcL._SL1500_.jpg",
        link: "https://www.amazon.de/dp/B07DM86Z43/",
    },
    // {
    //     id: "p26",
    //     cat: "play",
    //     name: "White Noise Machine – Baby Sleep Sound Machine",
    //     price: null,
    //     rating: "4.5",
    //     img: null,
    //     link: "https://www.amazon.de/dp/B0F1Y6V1JV/",
    // },
    {
        id: "p27",
        cat: "play",
        name: "Lionelo Anika Play Mat & Activity Arch",
        price: "CHF 35.90",
        rating: "4.4",
        img: "https://static01.galaxus.com/productimages/1/6/8/5/4/3/1/9/0/9/0/9/0/9/3/3/0/1/4/dcf08ab8-d036-4d4b-9114-5187e2be364f_cropped.jpg_2880.avif",
        link: "https://www.galaxus.ch/fr/s10/product/lionelo-anika-tapis-deveil-arche-dactivite-13408411",
    },
    // {
    //     id: "p28",
    //     cat: "play",
    //     name: "Baby Books – Black & White Contrast Books / Picture Books / Stories",
    //     price: null,
    //     rating: "4.7",
    //     img: null,
    //     link: null,
    // },
    // {
    //     id: "p29",
    //     cat: "play",
    //     name: "Baby Rattle / Hochet – Sensory Rattle Toy",
    //     price: null,
    //     rating: "4.5",
    //     img: null,
    //     link: "https://www.galaxus.ch/fr/s10/producttype/hochet-803",
    // },

// 🔒 Security
    {
        id: "p30",
        cat: "essentials",
        name: "Arenti i300 Baby Camera – HD Baby Monitor 300m Range",
        price: "CHF 59.90",
        rating: "4.3",
        img: "https://static01.galaxus.com/productimages/6/8/3/7/4/3/2/6/1/7/8/4/2/2/3/0/4/6/1/ed8026a1-8930-402c-9d47-52e296aac7b9_cropped.jpg_1000.avif",
        link: "https://www.galaxus.ch/fr/s10/product/arenti-i-300-m-babyphone-45378640",
    },

    // 🎁 Rattles
    {
        id: "p31",
        cat: "play",
        name: "Oball Rattle – Soft Flexible Baby Rattle",
        price: "CHF 9.50",
        rating: "4.6",
        img: "https://static01.galaxus.com/productimages/4/2/6/9/0/6/0/1/8/0/4/7/6/8/8/6/4/1/6/0dc67b0b-2af9-4c3d-8209-36e67daaca58_cropped.jpg_1000.avif",
        link: "https://www.galaxus.ch/en/s10/product/oball-rattle-baby-rattles-16255611",
    },
    {
        id: "p32",
        cat: "play",
        name: "Playgro Click and Twist Rattle – Baby Sensory Rattle",
        price: "CHF 6.90",
        rating: "4.4",
        img: "https://static01.galaxus.com/productimages/4/1/8/8/2/3/5/1/9/8/6/4/7/3/0/8/2/9/9/019df7da-6474-7541-bf83-1a12d9e00c37_2880.avif",
        link: "https://www.galaxus.ch/en/s10/product/playgro-click-and-twist-rattle-baby-rattles-7187276",
    },
    {
        id: "p33",
        cat: "play",
        name: "Playgro Roundabout Rattle – Baby Activity Rattle",
        price: "CHF 5.70",
        rating: "4.3",
        img: "https://static01.galaxus.com/productimages/2/1/7/3/8/4/8/1/3/7/8/1/1/3/9/6/1/1/5/019a6cd0-0397-7bde-a7f3-dfc9ff5cbe1d_1440.avif",
        link: "https://www.galaxus.ch/en/s10/product/playgro-roundabout-rattle-baby-rattles-15718267",
    },
    {
        id: "p34",
        cat: "play",
        name: "Oball Rattle & Roll – Baby Rattle Rolling Toy",
        price: "7.50",
        rating: "4.5",
        img: "https://static01.galaxus.com/productimages/3/8/9/7/7/8/4/7/8/7/7/3/9/5/3/8/3/0/0/019a2cfc-a29d-7267-a238-99978599082c_1000.avif",
        link: "https://www.galaxus.ch/en/s10/product/oball-rattle-roll-baby-rattles-5835627",
    },

// 📚 Books
    {
        id: "p35",
        cat: "play",
        name: "Miffy – Le Monde de Miffy (Dargaud)",
        price: "19.10",
        rating: "4.7",
        img: "https://www.orchestra.ch/uploads/styles/thehub_higher/catalogues_price_image/9782732497594-475x500-1.jpg",
        link: "https://www.orchestra.ch/fr/produit-eveil-et-jeux-livre-dargaud-livre-miffy-monde-de-miffy-c54-p347876.php",
    },
    {
        id: "p36",
        cat: "play",
        name: "Chicco Livre de la Ferme – Farm Book 6–36 Months",
        price: "16.00",
        rating: "4.5",
        img: "https://www.orchestra.ch/uploads/styles/thehub_higher/catalogues_price_image/cq5dam.web.1280.1280_3_52.jpeg",
        link: "https://www.orchestra.ch/fr/produit-eveil-et-jeux-livre-chicco-livre-de-la-ferme-6-36m-c54-p287368.php",
    },
    {
        id: "p37",
        cat: "play",
        name: "L'Imagerie des Tout-Petits – Les Premiers Mots (Dargaud)",
        price: "14.15",
        rating: "4.8",
        img: "https://www.orchestra.ch/uploads/styles/thehub_higher/catalogues_price_image/9782215177951_2.jpg",
        link: "https://www.orchestra.ch/fr/produit-eveil-et-jeux-livre-dargaud-livre-l-imagerie-des-tout-petits-les-premiers-mots-c54-p347797.php",
    },
    {
        id: "p38",
        cat: "play",
        name: "L'Imagerie des Tout-Petits – Le Corps (Dargaud)",
        price: "14.15",
        rating: "4.8",
        img: "https://www.orchestra.ch/uploads/styles/thehub_higher/catalogues_price_image/9782215162971.jpg",
        link: "https://www.orchestra.ch/fr/produit-eveil-et-jeux-livre-dargaud-livre-l-imagerie-des-tout-petits-le-corps-c54-p347744.php",
    },

];

