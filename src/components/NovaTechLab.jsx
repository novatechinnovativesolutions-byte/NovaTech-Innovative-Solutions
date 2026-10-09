import React, { useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   NovaTech R&D Lab — Research & Development (route: /research-development)
   Lab-style page: research projects, publications, lab infrastructure, then R&D services.
   Head tags use React 19 hoisting (same as Home.jsx); on React 18 wrap <Seo/> in react-helmet-async's <Helmet>.
   Everything on the page and in the JSON-LD is generated from the data arrays below.
═══════════════════════════════════════════════════════════════ */

const SITE = "https://www.novatechinnovative.com";
const PAGE = SITE + "/research-development";
const WA = "918336001208";
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

const TITLE = "NovaTech R&D Lab: AI & IoT Research, Projects, Papers";
const DESC = "NovaTech R&D Lab in Kolkata builds and publishes research in TinyML, IoT, UAV communication and healthcare robotics. See projects, papers and lab resources.";
const OG_IMAGE = SITE + "/og-image.png";

const T = { navy: "#07091c", blue: "#1346e8", blueLight: "#e8effe", yellow: "#f5c518", off: "#f7f8fc", border: "#e4e8f0", text: "#111827", muted: "#5b6472", head: "'Syne', sans-serif", body: "'DM Sans', sans-serif" };

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ICONS = {
  lab: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8 15h8",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  book: "M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 21h15M9 7h6",
};
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

/* ── Research projects: [area, status, title, description, tech[], optional internal link] ── */
const PROJECTS = [
  ["Wearable AI", "Research", "Smart AI T-Shirt", "A solar-powered intelligent wearable integrating biometric sensing and TinyML for real-time health monitoring, geo-fencing and emergency response, targeting next-generation healthcare and safety systems.", []],
  ["UAV Systems", "Research", "Hybrid UAV Communication System", "A hybrid UAV-based communication framework combining LoRa and short-range protocols for resilient, long-range connectivity in disaster management and remote sensing applications.", []],
  ["Healthcare Robotics", "Research", "RoboDoc: Autonomous Medical Robot", "An intelligent robotic system for rural healthcare capable of performing primary health diagnostics using integrated sensors and embedded AI for early-stage medical assessment.", []],
  ["Sustainable Tech", "Deployed", "Smart Solar Charging Bag", "A portable renewable energy solution embedded in a backpack, charging electronic devices efficiently using solar panels with an optimized MPPT power management circuit.", [], "/solutions#solar-powered-smart-backpack"],
  ["Computer Vision", "Deployed", "Yoga Posture Detection System", "A real-time AI system using MediaPipe and LSTM sequence models to detect and classify human poses, providing live feedback for fitness training and posture correction.", []],
  ["EdTech / Fitness", "Deployed", "Smart Online Gym Platform", "An interactive fitness platform combining AI posture detection, personalized workout plans, trainer integration and gamified progress tracking for enhanced user engagement.", []],
  ["IoT Systems", "Prototype", "Smart Home Automation System", "An IoT-based home automation system enabling remote control and monitoring of appliances, integrating sensors, mobile interfaces and automation logic for smart living.", [], "#"],
  ["IoT Communication", "Prototype", "ESP32 Morse Code via Telegram Bot", "An IoT-based Morse code communication system where encoded signals are transmitted via ESP32 and decoded messages are delivered through a Telegram bot interface. Published as a research paper.", []],
  ["UAV", "Active", "UAV for Tele-Medicine and Aid-Delivery", "A confidential UAV project focused on autonomous medicine delivery and remote tele-health services using IoT-enabled drone platforms in underserved regions.", []],
];

/* ── Publications: [year, type, title, venue, authors, link label, link] ── */
const PUBS = [
  ["2026", "Conference", "Prospects and Challenges in UAV-Based Communication for Disaster Management", "IEEE AICARE 2026", "NovaTech R&D Lab", "DOI: 10.1109/AICARE66005.2025.11402816", "https://doi.org/10.1109/AICARE66005.2025.11402816"],
  ["2026", "Preprint", "An ESP32-Based Morse Code Transmission System Using Telegram Bot", "Preprints.org", "NovaTech R&D Lab", "DOI: 10.20944/preprints202602.1999.v1", "https://doi.org/10.20944/preprints202602.1999.v1"],
  ["2025", "Conference", "Emergence of Transfer Learning towards Specific Identification of Alzheimer's Disease: A Prospective Approach", "IEEE Conference", "NovaTech R&D Lab", "DOI: 10.1109/IEEECONF64992.2025.10962879", "https://doi.org/10.1109/IEEECONF64992.2025.10962879"],
  ["2025", "Conference", "RoboDoc: An Autonomous Medical Robot for Primary Health Assessment in Villages", "International Conference on Healthcare Robotics", "NovaTech R&D Lab + GNIT, Kolkata", "View publication", "https://zenodo.org/records/18439287"],
  ["2025", "Conference", "A Deep Neural Network Model for The Detection of Breast Cancer", "International Conference on AI in Healthcare", "NovaTech R&D Lab + GNIT, Kolkata", "View publication", "https://www.researchgate.net/publication/396176179_A_Deep_Neural_Network_Model_for_The_Detection_of_Breast_Cancer"],
  ["2025", "Journal", "Design and Development of a Multi-Functional Interactive Robot with Handshake, AI Voice Assistance, Projection, and Mobility", "International Journal of Sciences and Innovation Engineering", "NovaTech R&D Lab", "View publication", "https://ijsci.com/index.php/home/article/view/314"],
];

const BOOK = { title: "TinyML: Edge Intelligence for Smart Systems", status: "In progress", text: "A comprehensive guide covering TinyML fundamentals, edge AI deployment pipelines, neural network optimisation for microcontrollers, hardware acceleration, and real-world case studies across healthcare, agriculture and industrial IoT.", chips: ["TinyML", "Edge AI", "Embedded ML", "MCU Deployment"] };

/* ── Lab infrastructure ── */
const INFRA = [
  ["Computing Systems", ["2× Laptops", "1× Desktop PC"]],
  ["Development Boards", ["Arduino Uno / Nano", "ESP32", "ESP8266", "ESP32-CAM", "Raspberry Pi Pico"]],
  ["Sensors", ["Ultrasonic", "DHT11 / DHT22", "LDR", "RFID", "Analog and digital sensors"]],
  ["Actuators", ["Relays", "DC motors", "LEDs", "Servo motors", "Fans"]],
  ["Electronic Components", ["Resistors", "Capacitors", "Transistors", "MOSFETs", "Transformers", "ICs"]],
  ["Measurement Tools", ["Multimeter", "Voltmeter", "Ammeter"]],
];

const AREAS = ["TinyML & Edge AI", "UAV communication", "Healthcare robotics", "Computer vision", "IoT & embedded systems", "Sustainable power electronics"];

/* ── R&D services (work with the lab) ── */
const GROUPS = [
  { id: "prototyping", icon: "lab", title: "Prototype Development & Applied Research",
    intro: "For start-ups, companies and research teams that need an idea proven with real hardware, software and data before committing to full development.",
    items: [
      { h: "Proof-of-Concept & Prototype Development", p: "Turn an idea into a working, testable prototype.", pts: ["Requirement analysis and system architecture", "Hardware, firmware and software integration", "Test results and demo documentation"], who: "Start-ups" },
      { h: "AI, IoT & Embedded Systems Research", p: "Research-grade investigation of sensing, edge AI and connected devices.", pts: ["Literature review and problem framing", "Model design, sensor data and edge deployment", "Experiments, analysis and reporting"], who: "Researchers" },
      { h: "Industry-Sponsored Research Projects", p: "Scoped R&D collaborations for organisations that need answers, not just code.", pts: ["Defined scope, milestones and deliverables", "Regular progress reporting", "Prototype and documentation handover"], who: "Industry" },
      { h: "Feasibility Studies", p: "Find out if a technology idea is viable before you invest in building it.", pts: ["Technical and component feasibility", "Risk and constraint assessment", "Clear go / no-go recommendation"], who: "Businesses" },
    ] },
  { id: "academic", icon: "doc", title: "Project, Thesis, Paper & Patent Support",
    intro: "Guided support for students and academics turning technical work into well-structured projects, manuscripts and filings. You stay the author; we help you do it properly.",
    items: [
      { h: "Final-Year Project Mentoring", p: "Practical guidance from topic selection to working implementation.", pts: ["Topic selection and scope definition", "Implementation support and troubleshooting", "Thesis structuring and formatting"], who: "Students" },
      { h: "Research Paper Preparation", p: "Help shaping results into a clear, submission-ready manuscript.", pts: ["Manuscript structure and flow", "Data analysis and results presentation", "Guidance on suitable journals and conferences"], who: "Researchers" },
      { h: "Patent Documentation Support", p: "Technical write-ups that make your invention easier to file.", pts: ["Invention disclosure and novelty checklist", "Figures and technical description drafts", "Prepared to hand to your patent agent"], who: "Inventors" },
      { h: "Technical Editing & Presentation Guidance", p: "Polish for documents and the slides that go with them.", pts: ["Language, structure and reference style", "Figures, tables and formatting", "Slides and defence or viva preparation"], who: "Scholars" },
    ] },
  { id: "publishing", icon: "book", title: "Technical Publishing & Academic Materials",
    intro: "Editorial and technical production for institutions and authors who need books, manuals and event materials that are accurate and consistent.",
    items: [
      { h: "Edited Books & Book Chapters", p: "Coordination and editing for multi-author volumes.", pts: ["Chapter planning and author coordination", "Technical and language editing", "Consistent formatting and referencing"], who: "Editors" },
      { h: "Technical Books & Lab Manuals", p: "Clear, practical content for teaching and reference.", pts: ["Experiment design and step-by-step procedures", "Diagrams, circuits and code listings", "Institution-ready layouts"], who: "Colleges" },
      { h: "Conference Proceedings & Workshop Materials", p: "Organised, professional materials for academic events.", pts: ["Proceedings compilation and formatting", "Workshop handouts and hands-on guides", "Institutional and bulk orders"], who: "Organisers" },
    ] },
];

const STEPS = [
  ["Tell us the goal", "Share your idea, project or manuscript and who it is for. A short WhatsApp message is enough to start."],
  ["Scope & quote", "We define deliverables, timeline and cost so you know what you are getting before work begins."],
  ["Build or write", "Our engineers and editors work with you, with regular updates and your feedback built in."],
  ["Review & deliver", "You receive tested work, clean documentation and guidance on the next step."],
];

const FAQ = [
  ["What is the NovaTech R&D Lab?", "It is the research arm of NovaTech Innovative Solutions in Kolkata. The lab builds research prototypes in TinyML, IoT, UAV communication and healthcare robotics, publishes papers, and supports students and companies with their own R&D."],
  ["What research and development services does NovaTech IS offer?", "We build proof-of-concept prototypes, run AI, IoT and embedded systems research, take on industry-sponsored projects and feasibility studies, support final-year projects, papers and patent documentation, and produce technical books, lab manuals and conference materials."],
  ["Where can I read your publications?", "The Publications section lists our conference papers, journal article and preprint with DOI or publication links."],
  ["Do you help with final-year projects and thesis writing?", "Yes. We mentor students through topic selection, implementation, thesis structure and formatting. The project and the writing remain the student's own work; we guide, review and help you understand what you build."],
  ["Can you guarantee my paper will be published or my patent granted?", "No. We help with preparation, technical editing and documentation, but acceptance is decided by journals, conferences and patent offices. For patents we prepare technical material to hand to your patent attorney or agent."],
  ["Do you build prototypes for start-ups and companies?", "Yes. We develop proof-of-concept and prototype systems across hardware, firmware, software and AI, and can run a feasibility study first if you are not sure the idea is viable."],
  ["How do I get a quote or start a collaboration?", "Message us on WhatsApp with a short description of your goal. We will confirm scope, timeline and cost before starting."],
];

const GROUP_LINKS = [
  ["/solutions", "IoT, web & app solutions"],
  ["/training", "Student training & internships"],
  ["/about", "About NovaTech"],
];

const STATS = [[String(PROJECTS.length), "Research & product projects"], [String(PUBS.length), "Publications"], ["1", "Book in progress"], [String(INFRA.length), "Lab resource categories"]];

const Seo = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": SITE + "/#org", name: "NovaTech Innovative Solutions", alternateName: "NovaTech IS", url: SITE, slogan: "From Ideas to Innovation", areaServed: { "@type": "Country", name: "India" }, address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" } },
      { "@type": "WebSite", "@id": SITE + "/#website", url: SITE, name: "NovaTech Innovative Solutions", publisher: { "@id": SITE + "/#org" }, inLanguage: "en-IN" },
      { "@type": "ResearchOrganization", "@id": PAGE + "#lab", name: "NovaTech R&D Lab", url: PAGE, parentOrganization: { "@id": SITE + "/#org" }, description: DESC,
        knowsAbout: ["TinyML", "Edge AI", "IoT", "Embedded systems", "UAV communication", "Healthcare robotics", "Computer vision"], address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" } },
      { "@type": "WebPage", "@id": PAGE + "#page", url: PAGE, name: TITLE, description: DESC, inLanguage: "en-IN", isPartOf: { "@id": SITE + "/#website" }, about: { "@id": PAGE + "#lab" }, breadcrumb: { "@id": PAGE + "#crumbs" } },
      { "@type": "BreadcrumbList", "@id": PAGE + "#crumbs", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: "R&D Lab", item: PAGE }] },
      { "@type": "ItemList", "@id": PAGE + "#projects", name: "NovaTech R&D Lab projects",
        itemListElement: PROJECTS.map(([area, status, title, desc, tech], i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "ResearchProject", name: title, description: desc, keywords: [area, ...tech].join(", "), parentOrganization: { "@id": PAGE + "#lab" } } })) },
      ...PUBS.map(([year, type, title, venue, who, , href]) => ({ "@type": "ScholarlyArticle", name: title, headline: title, datePublished: year, genre: type, url: href, author: { "@id": PAGE + "#lab" }, publisher: { "@type": "Organization", name: venue },
        ...(href.includes("doi.org/") ? { identifier: { "@type": "PropertyValue", propertyID: "DOI", value: href.split("doi.org/")[1] } } : {}) })),
      { "@type": "OfferCatalog", name: "NovaTech IS Research & Development Services",
        itemListElement: GROUPS.flatMap((g) => g.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.h, description: s.p, provider: { "@id": SITE + "/#org" }, areaServed: { "@type": "Country", name: "India" }, audience: { "@type": "Audience", audienceType: s.who } } }))) },
      { "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
  return (<>
    <title>{TITLE}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={DESC} />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#07091c" />
    <link rel="canonical" href={PAGE} />
    <meta property="og:type" content="website" /><meta property="og:title" content={TITLE} /><meta property="og:description" content={DESC} /><meta property="og:url" content={PAGE} />
    <meta property="og:site_name" content="NovaTech Innovative Solutions" /><meta property="og:locale" content="en_IN" /><meta property="og:image" content={OG_IMAGE} />
    <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="NovaTech R&D Lab: AI, IoT and embedded systems research" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={TITLE} /><meta name="twitter:description" content={DESC} /><meta name="twitter:image" content={OG_IMAGE} />
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;700&display=swap" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  </>);
};

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{font-family:${T.body};color:${T.text};line-height:1.65;background:#fff}a{color:inherit}
main{overflow-x:clip}
:focus-visible{outline:3px solid ${T.blue};outline-offset:3px}
.dark :focus-visible{outline-color:${T.yellow}}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.skip{position:absolute;left:-9999px;top:0;background:${T.navy};color:#fff;padding:10px 16px;z-index:30}.skip:focus{left:8px;top:8px;outline-color:${T.yellow}}
.sec{padding:80px 5%;scroll-margin-top:64px}.in{max-width:1200px;margin:auto}.light{background:${T.off}}.dark{background:${T.navy}}
.h2{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.5rem,3vw,2.3rem);line-height:1.18;letter-spacing:-.025em;margin-bottom:12px;overflow-wrap:break-word}
.sub{color:${T.muted};max-width:700px;font-weight:300}
.btn{display:inline-block;padding:12px 26px;border-radius:8px;font-weight:700;font-size:.95rem;text-decoration:none;font-family:${T.head};transition:transform .15s}
.btn:hover{transform:translateY(-2px)}.btn-y{background:${T.yellow};color:${T.navy}}.btn-n{background:${T.navy};color:#fff}.btn-o{border:2px solid ${T.navy};color:${T.navy};margin-left:10px}
.hero{background:linear-gradient(135deg,#eef3ff,#fff 62%);border-bottom:1px solid ${T.border};padding:56px 5% 72px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0 auto 0 0;width:8px;background:linear-gradient(${T.blue},${T.yellow})}
.crumbs{max-width:1200px;margin:0 auto 34px;font-size:.85rem;color:${T.muted}}.crumbs ol{list-style:none;display:flex;flex-wrap:wrap;gap:8px}.crumbs li+li::before{content:"/";margin-right:8px}.crumbs a{text-decoration:none;display:inline-block;padding:8px 0}.crumbs a:hover{text-decoration:underline}
.hero-in{max-width:1200px;margin:auto;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.badge{display:inline-block;background:${T.blueLight};border:1px solid #c2d0f8;border-radius:100px;padding:5px 14px;font-size:.8rem;font-weight:700;color:${T.blue};margin-bottom:18px}
.h1{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.9rem,3.8vw,3.1rem);line-height:1.1;letter-spacing:-.035em;margin-bottom:18px;overflow-wrap:break-word}
.h1 em{font-style:normal;background:linear-gradient(90deg,${T.blue},#6a8cff);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:${T.muted};font-weight:300;font-size:1.05rem;max-width:580px;margin-bottom:20px}
.areas{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin-bottom:26px}.areas li{background:#fff;border:1px solid ${T.border};color:${T.blue};border-radius:100px;padding:4px 13px;font-size:.8rem;font-weight:700}
.hero-art{display:block;width:100%;max-width:420px;margin:auto;min-width:0;filter:drop-shadow(0 20px 40px rgba(19,70,232,.15))}.hero-art img{display:block;width:100%;height:auto}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(180px,100%),1fr));gap:18px;max-width:1200px;margin:auto}
.stats div{border-left:3px solid ${T.yellow};padding:4px 0 4px 18px}.stats b{display:block;font-family:${T.head};font-size:2.2rem;color:#fff}.stats span{color:rgba(255,255,255,.78);font-size:.88rem}
.tabs{position:sticky;top:0;z-index:5;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid ${T.border};padding:10px 5%}
.tabs ul{max-width:1200px;margin:auto;list-style:none;display:flex;gap:10px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:thin}
.tabs a{display:flex;align-items:center;min-height:44px;white-space:nowrap;padding:8px 18px;border-radius:100px;border:1px solid ${T.border};font-weight:700;font-size:.85rem;text-decoration:none;color:${T.navy};font-family:${T.head}}
.tabs a:hover{background:${T.blueLight};border-color:#c2d0f8}
.filters{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.filters button{min-height:44px;padding:8px 18px;border-radius:100px;border:1px solid ${T.border};background:#fff;color:${T.navy};font:700 .85rem ${T.head};cursor:pointer}
.filters button:hover{border-color:${T.blue}}.filters button[aria-pressed="true"]{background:${T.navy};color:#fff;border-color:${T.navy}}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:22px;margin-top:30px}
.card{background:#fff;border:1px solid ${T.border};border-top:4px solid ${T.blue};border-radius:18px;padding:26px;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s}
.card:nth-child(even){border-top-color:${T.yellow}}.card:hover{transform:translateY(-5px);box-shadow:0 16px 44px rgba(19,70,232,.13)}
.card h3,.card h4{font-family:${T.head};font-size:1.12rem;color:${T.navy};margin-bottom:6px;overflow-wrap:break-word}.card>p{color:${T.muted};font-size:.9rem;margin-bottom:14px}
.card ul{list-style:none;margin-bottom:18px;flex:1}.card ul.ck li{font-size:.88rem;padding-left:22px;position:relative;margin-bottom:4px}.card ul.ck li::before{content:"✓";position:absolute;left:0;color:${T.blue};font-weight:700}
.meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:10px}
.area{font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:${T.blue}}
.st{font-size:.72rem;font-weight:700;border-radius:100px;padding:2px 10px}
.st-Research{background:${T.blueLight};color:${T.blue}}.st-Deployed{background:#e3f5ea;color:#0b6b3a}.st-Prototype{background:#fff3cc;color:#7a5a00}.st-Active{background:${T.navy};color:#fff}
.chips{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin-top:auto}.chips li{background:${T.blueLight};color:${T.blue};border-radius:100px;padding:3px 11px;font-size:.75rem;font-weight:700}
.more{display:inline-flex;align-items:center;min-height:44px;margin-top:8px;font-weight:700;font-size:.9rem;color:${T.blue};text-decoration:none}.more:hover{text-decoration:underline}
.pubs{list-style:none;display:flex;flex-direction:column;gap:14px;margin-top:30px}
.pub{display:grid;grid-template-columns:96px minmax(0,1fr);gap:22px;background:#fff;border:1px solid ${T.border};border-left:5px solid ${T.blue};border-radius:16px;padding:22px 24px}
.pub:nth-child(even){border-left-color:${T.yellow}}
.py{font-family:${T.head};font-weight:800;font-size:1.5rem;color:${T.navy};line-height:1}.pt{display:inline-block;margin-top:8px;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${T.blue}}
.pub h3{font-family:${T.head};font-size:1.05rem;color:${T.navy};line-height:1.35;margin-bottom:6px;overflow-wrap:break-word}.pub p{color:${T.muted};font-size:.9rem}.pub .pv{color:${T.text};font-weight:700;font-size:.9rem}
.pl{display:inline-flex;align-items:center;min-height:44px;font-weight:700;font-size:.88rem;color:${T.blue};text-decoration:none;overflow-wrap:anywhere}.pl:hover{text-decoration:underline}
.book{display:grid;grid-template-columns:72px minmax(0,1fr);gap:22px;margin-top:22px;background:${T.navy};border-radius:20px;padding:30px;color:#fff}
.book .bi{width:64px;height:64px;border-radius:18px;background:rgba(255,255,255,.1);color:${T.yellow};display:flex;align-items:center;justify-content:center}.book .bi svg{width:34px;height:34px}
.book .bt{font-size:.74rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${T.yellow}}
.book h3{font-family:${T.head};font-size:1.3rem;margin:4px 0 8px;overflow-wrap:break-word}.book p{color:rgba(255,255,255,.8);font-size:.93rem;margin-bottom:14px}
.book .chips li{background:rgba(255,255,255,.12);color:#fff}
.infra{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:20px;margin-top:34px}
.ic{background:#fff;border:1px solid ${T.border};border-top:4px solid ${T.blue};border-radius:16px;padding:22px}.ic:nth-child(3n+2){border-top-color:${T.yellow}}.ic:nth-child(3n){border-top-color:${T.navy}}
.ic h3{font-family:${T.head};font-size:1.02rem;color:${T.navy};margin-bottom:12px}
.ic .chips{margin-top:0}
.ghead{display:flex;align-items:center;gap:16px;margin:46px 0 4px}.ghead h3{font-family:${T.head};font-size:clamp(1.15rem,2.2vw,1.5rem);color:${T.navy};overflow-wrap:break-word}
.ico{flex:none;width:52px;height:52px;border-radius:16px;background:${T.blueLight};color:${T.blue};display:flex;align-items:center;justify-content:center}.ico svg{width:28px;height:28px}
.price{border-top:1px dashed ${T.border};padding-top:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.price small{color:${T.muted};font-size:.8rem;display:block}.price b{font-family:${T.head};font-size:1.1rem;color:${T.navy}}
.quote{display:inline-flex;align-items:center;min-height:44px;font-weight:700;color:${T.blue};text-decoration:none;font-size:.9rem}.quote:hover{text-decoration:underline}
.note{margin-top:30px;background:${T.blueLight};border-left:4px solid ${T.blue};border-radius:10px;padding:16px 20px;font-size:.9rem;color:${T.navy}}
.steps{list-style:none;counter-reset:s;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:20px;margin-top:36px}
.steps li{counter-increment:s;background:#fff;border:1px solid ${T.border};border-radius:16px;padding:24px}
.steps li::before{content:counter(s);display:flex;width:34px;height:34px;border-radius:50%;background:${T.blue};color:#fff;font-weight:700;align-items:center;justify-content:center;margin-bottom:12px}
.steps h3{font-family:${T.head};font-size:1.05rem;color:${T.navy};margin-bottom:6px}.steps p{font-size:.9rem;color:${T.muted}}
.faq{max-width:860px;margin-top:30px}.faq details{background:#fff;border:1px solid ${T.border};border-radius:12px;padding:6px 20px;margin-bottom:12px}
.faq summary{display:flex;align-items:center;min-height:48px;font-family:${T.head};font-weight:700;color:${T.navy};cursor:pointer}.faq p{color:${T.muted};margin:0 0 14px;font-size:.93rem}
.links{margin-top:28px;display:flex;gap:6px 22px;flex-wrap:wrap}.links a{display:inline-block;padding:10px 0;font-weight:700;color:${T.blue};text-decoration:none}.links a:hover{text-decoration:underline}
.cta{background:${T.yellow};padding:50px 5%}.cta-in{max-width:1200px;margin:auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:22px}
.cta h2{font-family:${T.head};font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${T.navy}}.cta p{color:rgba(10,15,46,.8)}
@media(max-width:860px){
.hero-in{grid-template-columns:minmax(0,1fr);gap:28px}
.hero-art{display:none}
.btn-o{margin:12px 0 0}
.pub{grid-template-columns:minmax(0,1fr);gap:10px}.py{display:inline}.pt{margin:0 0 0 12px}
}
@media(max-width:600px){
.sec{padding:56px 5%}
.hero{padding:28px 5% 48px}.hero::before{width:5px}
.crumbs{margin-bottom:20px}
.btn{display:block;text-align:center}
.card{padding:22px 20px}
.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.stats b{font-size:1.8rem}
.pub{padding:18px 18px}.book{grid-template-columns:minmax(0,1fr);padding:24px 20px;gap:14px}
.ico{width:44px;height:44px;border-radius:14px}.ico svg{width:24px;height:24px}
.cta{padding:40px 5%}.cta .btn{width:100%}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
`;

/* Hero graphic: desktop only. On screens <= 860px a 1x1 transparent GIF replaces the SVG source so it is never downloaded,
   and CSS (.hero-art) hides the element as well. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const Art = () => (
  <picture className="hero-art">
    <source media="(max-width: 860px)" srcSet={BLANK} />
    <img src="/novatech-rnd.svg" alt="NovaTech R&D Lab: research, prototypes and publications in AI, IoT and embedded systems" width="600" height="500" fetchPriority="high" decoding="async" />
  </picture>
);

const Filter = ({ label, options, value, onChange }) => (
  <div className="filters" role="group" aria-label={label}>
    {options.map((o) => (<button key={o} type="button" aria-pressed={value === o} onClick={() => onChange(o)}>{o}</button>))}
  </div>
);

const Projects = () => {
  const [f, setF] = useState("All");
  const statuses = ["All", ...Array.from(new Set(PROJECTS.map((p) => p[1])))];
  const list = PROJECTS.filter((p) => f === "All" || p[1] === f);
  return (<>
    <Filter label="Filter projects by status" options={statuses} value={f} onChange={setF} />
    <div className="grid" aria-live="polite">
      {list.map(([area, status, title, desc, tech, href]) => (
        <article className="card" key={title}>
          <div className="meta"><span className="area">{area}</span><span className={"st st-" + status}>{status}</span></div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <ul className="chips" aria-label={"Technologies used in " + title}>{tech.map((t) => <li key={t}>{t}</li>)}</ul>
        </article>
      ))}
    </div>
  </>);
};

const Publications = () => {
  const [f, setF] = useState("All");
  const types = ["All", ...Array.from(new Set(PUBS.map((p) => p[1])))];
  const list = PUBS.filter((p) => f === "All" || p[1] === f);
  return (<>
    <Filter label="Filter publications by type" options={types} value={f} onChange={setF} />
    <ul className="pubs" aria-live="polite">
      {list.map(([year, type, title, venue, who, label, href]) => (
        <li className="pub" key={title}>
          <div><span className="py">{year}</span><span className="pt">{type}</span></div>
          <div>
            <h3>{title}</h3>
            <p className="pv">{venue}</p>
            <p>{who}</p>
            <a className="pl" href={href} target="_blank" rel="noopener noreferrer">{label}<span className="sr"> for {title} (opens in a new tab)</span></a>
          </div>
        </li>
      ))}
    </ul>
  </>);
};

export default function ResearchDevelopment() {
  return (
    <>
      <style>{CSS}</style>
      <Seo />
      <a className="skip" href="#main">Skip to content</a>

      <header>
        <section className="hero" aria-labelledby="rd-h">
                   <div className="hero-in">
            <div>
              <p className="badge">NovaTech R&amp;D Lab · Kolkata, India</p>
              <h1 className="h1" id="rd-h">NovaTech R&amp;D Lab: <em>AI, IoT &amp; Embedded Systems Research</em></h1>
              <p className="lead">We build research prototypes, publish papers and help students, start-ups and companies turn ideas into working systems. Browse our projects, publications and lab resources, or work with the lab on your own R&amp;D.</p>
              <ul className="areas" aria-label="Research areas">{AREAS.map((a) => <li key={a}>{a}</li>)}</ul>
              <a className="btn btn-y" href={wa("Hello NovaTech R&D Lab, I would like to discuss a research or prototype project.")} target="_blank" rel="noopener noreferrer">Collaborate with the lab</a>
              <a className="btn btn-o" href="#projects">See our research</a>
            </div>
            <Art />
          </div>
        </section>
        <nav className="tabs" aria-label="R&D lab sections">
          <ul>
            <li><a href="#services">R&amp;D services</a></li>
            <li><a href="#process">How we work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#infrastructure">Lab infrastructure</a></li>
            
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">

          <section id="services" className="sec light" aria-labelledby="svc-h">
          <div className="in">
            <h2 className="h2" id="svc-h">Work with the Lab: R&amp;D Services</h2>
            <p className="sub">Prototype development, applied research, project, thesis, paper and patent support, and technical publishing for students, researchers, start-ups and institutions.</p>
            {GROUPS.map((g) => (
              <div key={g.id} id={g.id} style={{ scrollMarginTop: 64 }}>
                <div className="ghead"><span className="ico"><Icon d={ICONS[g.icon]} /></span><h3>{g.title}</h3></div>
                <p className="sub">{g.intro}</p>
                <div className="grid">
                  {g.items.map((s) => (
                    <article className="card" key={s.h} id={slug(s.h)}>
                      <h4>{s.h}</h4>
                      <p>{s.p}</p>
                      <ul className="ck">{s.pts.map((t) => <li key={t}>{t}</li>)}</ul>
                      <div className="price">
                        <div><small>Ideal for</small><b>{s.who}</b></div>
                        <a className="quote" href={wa(`Hello NovaTech IS, I would like a quote for: ${s.h}`)} target="_blank" rel="noopener noreferrer">Request a quote<span className="sr"> for {s.h}</span> →</a>
                      </div>
                    </article>
                  ))}
                </div>
                {g.id === "academic" && (
                  <p className="note">We provide guidance, editing and technical support. Authorship, originality and final decisions stay with you, and acceptance by journals, conferences or patent offices is decided by them.</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="sec" aria-labelledby="process-h">
          <div className="in">
            <h2 className="h2" id="process-h">How Our R&amp;D Engagements Work</h2>
            <p className="sub">A simple, transparent process so you know the scope, timeline and cost before we start.</p>
            <ol className="steps">{STEPS.map(([h, p]) => <li key={h}><h3>{h}</h3><p>{p}</p></li>)}</ol>
          </div>
        </section>

        <section className="sec dark" style={{ padding: "44px 5%" }} aria-label="Lab at a glance">
          <div className="stats">{STATS.map(([n, l]) => (<div key={l}><b>{n}</b><span>{l}</span></div>))}</div>
        </section>


        <section id="projects" className="sec" aria-labelledby="projects-h">
          <div className="in">
            <h2 className="h2" id="projects-h">Research Projects</h2>
            <p className="sub">Wearable AI, UAV communication, healthcare robotics, computer vision and IoT systems, from early research to deployed products.</p>
            <Projects />
          </div>
        </section>

        <section id="publications" className="sec light" aria-labelledby="pubs-h">
          <div className="in">
            <h2 className="h2" id="pubs-h">Publications &amp; Research Output</h2>
            <p className="sub">Peer-reviewed conference papers, a journal article and a preprint from the NovaTech R&amp;D Lab, with DOI or publication links.</p>
            <Publications />
            <article className="book" aria-labelledby="book-h">
              <div className="bi"><Icon d={ICONS.book} /></div>
              <div>
                <p className="bt">Upcoming book · {BOOK.status}</p>
                <h3 id="book-h">{BOOK.title}</h3>
                <p>{BOOK.text}</p>
                <ul className="chips" aria-label="Book topics">{BOOK.chips.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            </article>
          </div>
        </section>

        <section id="infrastructure" className="sec" aria-labelledby="infra-h">
          <div className="in">
            <h2 className="h2" id="infra-h">Lab Infrastructure &amp; Resources</h2>
            <p className="sub">The computing systems, development boards, sensors and measurement tools behind our prototypes, training batches and research projects.</p>
            <div className="infra">
              {INFRA.map(([name, items]) => (
                <article className="ic" key={name}>
                  <h3>{name}</h3>
                  <ul className="chips">{items.map((i) => <li key={i}>{i}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

      

        <section id="faq" className="sec light" aria-labelledby="faq-h">
          <div className="in">
            <h2 className="h2" id="faq-h">R&amp;D Lab: Frequently Asked Questions</h2>
            <div className="faq">{FAQ.map(([q, a]) => (<details key={q}><summary>{q}</summary><p>{a}</p></details>))}</div>
            <nav className="links" aria-label="Related NovaTech pages">
              {GROUP_LINKS.map(([href, label]) => <a key={href} href={href}>{label} →</a>)}
            </nav>
          </div>
        </section>
      </main>

      <section className="cta" aria-labelledby="cta-h">
        <div className="cta-in">
          <div>
            <h2 id="cta-h">Have a project, paper or prototype in mind?</h2>
            <p>Tell us your goal and we will reply with scope, timeline and cost.</p>
          </div>
          <a className="btn btn-n" href={wa("Hello NovaTech IS, I would like to discuss an R&D project.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </section>
    </>
  );
}