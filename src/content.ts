import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "Akash";
export const HOURS: Hours = "unknown";
export const FLAP_IDLE = "PALAM VIHAR";
export const SCENE: Scene = "leak";
export const VISIT_IMG = "/img/p1.jpg";
export const VISIT_ALT = "Valve manifold from Akash Plumber Service's Google listing";
export const FALLBACK_IMG = "/img/p1.jpg";
/** No work grid: his listing has too few photos of his own jobs, so the feature asks for them instead. */
export const ORDER: SectionKey[] = ["reviews", "map", "feature", "visit"];

export const PHONE = "+917065502807";
export const PHONE_DISPLAY = "70655 02807";
export const WA = "917065502807";
export const SHOP = { lat: 28.5034806, lon: 77.0145096 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["npv", "pv", "dwarka", "s23", "s9", "dlf3", "dlf2", "s14", "cyber"]);
export const DEFAULT_AREA = "pv";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "Came to work on one call and quickly finished the job with perfection",
  "Nice work with reasonable rate give more advice as well",
  "Genuine price",
  "Timely resolution with affordable rates.",
  "Good service trust worthy",
  "great service, did it nicely and within minutes",
];

export const RATINGS = [
  { stars: 5, count: 53 },
  { stars: 4, count: 3 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

export const STATUSES = ["ONE CALL", "ON THE WAY", "ADVICE GIVEN", "JOB DONE"];

export const FEATURE: Feature = {
  kind: "slots",
  title: { en: "This space is for your work, Akash ji.", hi: "यह जगह आपके काम के लिए है, आकाश जी।" },
  body: {
    en: "56 customers have rated you, and not one gave less than four stars. Send us photos from your next few jobs and they go here, so the next customer sees the work before they call.",
    hi: "56 ग्राहकों ने रेटिंग दी, और किसी ने चार स्टार से कम नहीं दिए। अगले कुछ कामों की फ़ोटो भेजें, वो यहाँ लगेंगी, ताकि अगला ग्राहक कॉल से पहले काम देख सके।",
  },
  slots: [
    { en: "A finished bathroom, front on", hi: "पूरा बना बाथरूम, सामने से" },
    { en: "A leak, before and after", hi: "लीकेज, पहले और बाद में" },
    { en: "Pipes inside the wall", hi: "दीवार के अंदर पाइप" },
    { en: "A pump or motor job", hi: "पंप या मोटर का काम" },
    { en: "You and your team on site", hi: "आप और आपकी टीम साइट पर" },
  ],
};

const en = {
  banner: "Concept preview made for Akash Plumber Service by LocalLift. Not live yet.",
  brandSub: "Plumber, New Palam Vihar",
  live: "Akash, Palam Vihar plumber",
  shopLabel: "Akash, Q Block",
  call: "Call Akash",
  callShort: "Call Akash",
  whatsapp: "WhatsApp",
  waHello: "Hi Akash ji, I need a plumber in Palam Vihar.",
  heroTitle: ["Palam Vihar's", "one-call plumber."],
  heroProof: "4.9 stars from 56 Google reviews, every one of them four or five stars. New Palam Vihar, Phase 2.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "One call is enough.", body: "From Q Block, near Royal Oak International School.", quote: REVIEWS[0] },
    { title: "Advice, not just a fix.", body: "Customers say he tells them how to avoid the next one.", quote: REVIEWS[1] },
    { title: "A price you can trust.", body: "'Genuine' and 'affordable' come up again and again.", quote: REVIEWS[3] },
  ],
  googleReview: "Google review",
  distTitle: "How close is Akash?",
  distBody: "Pick your area. Straight-line distance from Q Block, New Palam Vihar.",
  distUnit: "km from Q Block",
  distAsk: "Ask on WhatsApp",
  distWa: (area: string) => `Hi Akash ji, I'm in ${area}. Can you come?`,
  workTitle: "",
  workBody: "",
  services: [{ img: "/img/p1.jpg", title: "Plumbing", body: "" }],
  revTitle: "56 reviews. Not one below four stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Work", n: 4 },
    { label: "Timely resolution", n: 3 },
    { label: "Hardworking staff", n: 3 },
    { label: "Affordable rates", n: 2 },
  ],
  stars: "stars",
  visitTitle: "In New Palam Vihar.",
  address: "Q Block, near Royal Oak International School, New Palam Vihar Phase 2, Gurugram",
  hours: "Call for timings",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for Akash Plumber Service, Palam Vihar. Reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा आकाश प्लंबर सर्विस के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबर, न्यू पालम विहार",
  live: "आकाश, पालम विहार के प्लंबर",
  shopLabel: "आकाश, Q ब्लॉक",
  call: "आकाश जी को कॉल करें",
  callShort: "कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते आकाश जी, मुझे पालम विहार में प्लंबर चाहिए।",
  heroTitle: ["पालम विहार के", "एक कॉल वाले प्लंबर।"],
  heroProof: "56 गूगल रिव्यू में 4.9 स्टार, हर एक चार या पाँच स्टार। न्यू पालम विहार, फ़ेज़ 2।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "एक कॉल काफ़ी है।", body: "Q ब्लॉक से, रॉयल ओक इंटरनेशनल स्कूल के पास।", quote: REVIEWS[0] },
    { title: "सिर्फ़ मरम्मत नहीं, सलाह भी।", body: "ग्राहक कहते हैं कि वो अगली ख़राबी से बचने का तरीका भी बताते हैं।", quote: REVIEWS[1] },
    { title: "भरोसे वाला दाम।", body: "'जायज़' और 'किफ़ायती' बार बार लिखा गया है।", quote: REVIEWS[3] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "आकाश जी कितनी दूर हैं?",
  distBody: "अपना इलाका चुनें। Q ब्लॉक, न्यू पालम विहार से सीधी दूरी।",
  distUnit: "किमी Q ब्लॉक से",
  distAsk: "व्हाट्सऐप पर पूछें",
  distWa: (area: string) => `नमस्ते आकाश जी, मैं ${area} में हूँ। क्या आप आ सकते हैं?`,
  workTitle: "",
  workBody: "",
  services: [{ img: "/img/p1.jpg", title: "प्लंबिंग", body: "" }],
  revTitle: "56 रिव्यू। एक भी चार स्टार से कम नहीं।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "काम", n: 4 },
    { label: "समय पर हल", n: 3 },
    { label: "मेहनती स्टाफ़", n: 3 },
    { label: "किफ़ायती रेट", n: 2 },
  ],
  stars: "स्टार",
  visitTitle: "न्यू पालम विहार में।",
  address: "Q ब्लॉक, रॉयल ओक इंटरनेशनल स्कूल के पास, न्यू पालम विहार फ़ेज़ 2, गुरुग्राम",
  hours: "समय के लिए कॉल करें",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा आकाश प्लंबर सर्विस, पालम विहार के लिए कॉन्सेप्ट। रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
