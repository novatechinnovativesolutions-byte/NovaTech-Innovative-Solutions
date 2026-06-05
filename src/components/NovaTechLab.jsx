import { useState, useEffect, useRef, useMemo } from "react";

/* ═══════════════════════════════════════════════════════════════
   NovaTech Innovative Solutions — R&D Lab Page
   SEO Architecture:
   • JSON-LD: WebPage + Organization + ItemList (projects) + 
     ItemList (publications) + Person (team) schemas
   • Single <h1> in hero, h2 per section, h3 per card
   • All sections use <section> with aria-labelledby
   • All nav anchors are <a> not <button> for crawlability
   • Publication DOI/links = follow-able external citations
   • Team uses Person schema microdata
   • Canonical, OG, Twitter meta injected via Helmet pattern
   • All images have keyword-rich descriptive alt text
   • Smooth scroll anchors = internal linking SEO
═══════════════════════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Vision",       href: "#vision" },
  { label: "Research",     href: "#research" },
  { label: "Projects",     href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Team",         href: "#team" },
  { label: "Services",     href: "#services" },
];

const RESEARCH_DOMAINS = [
  { icon: "🌐", title: "IoT & Smart Systems",        desc: "Sensor fusion, embedded intelligence, and connected smart infrastructure for real-world environments." },
  { icon: "🤖", title: "Robotics & Automation",      desc: "Autonomous navigation, manipulation, and human-robot interaction research for healthcare and industry." },
  { icon: "⚡", title: "TinyML & Edge AI",           desc: "Model optimization and on-device ML inference for resource-constrained embedded hardware." },
  { icon: "🧠", title: "Artificial Intelligence",    desc: "Deep learning, NLP, reinforcement learning, and applied AI systems for real-world problems." },
  { icon: "👁️", title: "Computer Vision",            desc: "Object detection, pose estimation, and image segmentation using OpenCV and MediaPipe." },
  { icon: "🏥", title: "Healthcare Technology",      desc: "AI-driven diagnostics, wearable health monitoring, and clinical decision support systems." },
  { icon: "📡", title: "Wireless & UAV Networks",    desc: "LoRa mesh, disaster resilience communication, and UAV-based data relay systems." },
  { icon: "🔋", title: "Sustainable Computing",      desc: "Energy-harvesting systems, solar-powered AI, and green embedded design for eco-friendly tech." },
];

const PROJECTS = [
  { tag: "Wearable AI",         color: "#2563EB", title: "Smart AI T-Shirt",                               desc: "A solar-powered intelligent wearable integrating biometric sensing and TinyML for real-time health monitoring, geo-fencing, and emergency response — targeting next-generation healthcare and safety systems.",                                  tech: ["TinyML","ESP32","Sensors","GPS","Solar"],          status: "Research"  },
  { tag: "UAV Systems",         color: "#0891B2", title: "Hybrid UAV Communication System",                 desc: "A hybrid UAV-based communication framework combining LoRa and short-range protocols for resilient, long-range connectivity in disaster management and remote sensing applications.",                                                         tech: ["LoRa","UAV","Hybrid Network","STM32"],             status: "Research"  },
  { tag: "Healthcare Robotics", color: "#DC2626", title: "RoboDoc: Autonomous Medical Robot",               desc: "An intelligent robotic system for rural healthcare capable of performing primary health diagnostics using integrated sensors and embedded AI for early-stage medical assessment.",                                                            tech: ["Robotics","Sensors","Embedded AI","IoT"],          status: "Research"  },
  { tag: "Sustainable Tech",    color: "#16A34A", title: "Smart Solar Charging Bag",                        desc: "A portable renewable energy solution embedded in a backpack, charging electronic devices efficiently using solar panels with an optimized MPPT power management circuit.",                                                                    tech: ["Solar Panel","Battery Mgmt","Power Electronics"],  status: "Deployed"  },
  { tag: "Computer Vision",     color: "#059669", title: "Yoga Posture Detection System",                   desc: "A real-time AI system using MediaPipe and LSTM sequence models to detect and classify human poses, providing live feedback for fitness training and posture correction.",                                                                    tech: ["MediaPipe","OpenCV","Python","LSTM"],              status: "Deployed"  },
  { tag: "EdTech / Fitness",    color: "#D97706", title: "Smart Online Gym Platform",                       desc: "An interactive fitness platform combining AI posture detection, personalized workout plans, trainer integration, and gamified progress tracking for enhanced user engagement.",                                                              tech: ["React","Node.js","MongoDB","AI"],                  status: "Deployed"  },
  { tag: "IoT Systems",         color: "#EA580C", title: "Smart Home Automation System",                    desc: "An IoT-based home automation system enabling remote control and monitoring of appliances, integrating sensors, mobile interfaces, and automation logic for smart living.",                                                                   tech: ["IoT","ESP32","Sensors","Mobile App"],              status: "Prototype" },
  { tag: "IoT Communication",   color: "#7C3AED", title: "ESP32 Morse Code via Telegram Bot",               desc: "An IoT-based Morse code communication system where encoded signals are transmitted via ESP32 and decoded messages are delivered through a Telegram bot interface — published as a research paper.",                                        tech: ["ESP32","Telegram API","IoT","Python"],             status: "Prototype" },
  { tag: "UAV",                 color: "#6D28D9", title: "UAV for Tele-Medicine and Aid-Delivery",          desc: "A confidential UAV project focused on autonomous medicine delivery and remote tele-health services using IoT-enabled drone platforms in underserved regions.",                                                                             tech: ["UAV","IoT"],                                       status: "Active"    },
];

const PUBLICATIONS = [
  { year:"2026", type:"Conference", title:"Prospects and Challenges in UAV-Based Communication for Disaster Management",                                         venue:"IEEE AICARE 2026",                                       authors:"NovaTech R&D Lab",              doi:"10.1109/AICARE66005.2025.11402816" },
  { year:"2025", type:"Conference", title:"Emergence of Transfer Learning towards Specific Identification of Alzheimer's Disease – A Prospective Approach",     venue:"IEEE Conference",                                         authors:"NovaTech R&D Lab",              doi:"10.1109/IEEECONF64992.2025.10962879" },
  { year:"2025", type:"Conference", title:"RoboDoc: An Autonomous Medical Robot for Primary Health Assessment in Villages",                                     venue:"International Conference on Healthcare Robotics",          authors:"NovaTech R&D Lab + GNIT, Kolkata", link:"https://zenodo.org/records/18439287" },
  { year:"2025", type:"Conference", title:"A Deep Neural Network Model for The Detection of Breast Cancer",                                                     venue:"International Conference on AI in Healthcare",            authors:"NovaTech R&D Lab + GNIT, Kolkata", link:"https://www.researchgate.net/publication/396176179_A_Deep_Neural_Network_Model_for_The_Detection_of_Breast_Cancer" },
  { year:"2025", type:"Journal",    title:"Design and Development of a Multi-Functional Interactive Robot with Handshake, AI Voice Assistance, Projection, and Mobility", venue:"International Journal of Sciences and Innovation Engineering", authors:"NovaTech R&D Lab", link:"https://ijsci.com/index.php/home/article/view/314" },
  { year:"2026", type:"Preprint",   title:"An ESP32-Based Morse Code Transmission System Using Telegram Bot",                                                   venue:"Preprints.org",                                           authors:"NovaTech R&D Lab",              doi:"10.20944/preprints202602.1999.v1" },
  { year:"2025", type:"Book",       title:"Use of Artificial Intelligence in Engineering",                                                                       venue:"Reference Book",                                          authors:"NovaTech R&D Lab",              link:"https://www.amazon.com/dp/B0FQ6HY8SX" },
  { year:"2025", type:"Patent",     title:"IoT-based Heat Stress Adaptive Crop Recommendation System",                                                          venue:"Patent Published",                                        authors:"NovaTech R&D Lab + GNIT, Kolkata", link:"https://www.researchgate.net/publication/398996536_AN_IOT_AND_AI-ENABLED_HEAT_STRESS_ADAPTIVE_CROP_RECOMMENDATION_AND_MICROCLIMATE_CONTROL_SYSTEM_FOR_HIGH_TEMPERATURE_AGRICULTURAL_ZONE" },
  { year:"2025", type:"Patent",     title:"Smart T-Shirt with Medical Monitoring",                                                                               venue:"Patent Published",                                        authors:"NovaTech R&D Lab + GNIT, Kolkata", link:"https://www.researchgate.net/publication/398996097_SMART_SOLAR_CHARGING_T-SHIRT_WITH_MEDICAL_MONITORIN" },
];

const TEAM = [
  { name:"Chandramouli Haldar", role:"Founder & CEO",              focus:"TinyML, Robotics, IoT",                       initials:"CH" },
  { name:"Shrijoy Biswas",      role:"Senior Hardware Engineer",   focus:"Analog & Digital Electronics, PCB Design",    initials:"SB" },
  { name:"Anshuman Shaw",       role:"IoT & Electrical Systems Lead", focus:"ESP32, Arduino, Electrical Systems",       initials:"AS" },
];

const SERVICES = [
  { icon:"🔬", title:"R&D Consulting",           desc:"Expert guidance on AI, IoT, and embedded systems projects — from ideation to functional prototype." },
  { icon:"🛠️", title:"Custom Project Development", desc:"End-to-end hardware-software development tailored to industrial, academic, and startup needs." },
  { icon:"📄", title:"Research Collaboration",   desc:"Joint research with universities, startups, and enterprises on funded and grant-backed projects." },
];

const TECH_STACK = [
  { cat:"Computing Systems",   items:["2× Laptops","1× Desktop PC"] },
  { cat:"Development Boards",  items:["Arduino (Uno/Nano)","ESP32","ESP8266","ESP32-CAM","Raspberry Pi Pico"] },
  { cat:"Sensors",             items:["Ultrasonic","DHT11/22","LDR","RFID","Analog & Digital Sensors"] },
  { cat:"Actuators",           items:["Relays","DC Motors","LEDs","Servo Motors","Fans"] },
  { cat:"Electronic Components",items:["Resistors","Capacitors","Transistors","MOSFETs","Transformers","ICs"] },
  { cat:"Measurement Tools",   items:["Multimeter","Voltmeter","Ammeter","Oscilloscope"] },
];

const STATS = [
  { value:"20+", label:"Research Projects" },
  { value:"12+", label:"Publications & Patents" },
  { value:"8",   label:"Research Domains" },
  { value:"5+",  label:"Industry Partners" },
];

const TYPE_COLORS = {
  Journal:    { bg:"rgba(245,158,11,0.15)",  color:"#F59E0B" },
  Conference: { bg:"rgba(37,99,235,0.15)",   color:"#60A5FA" },
  Preprint:   { bg:"rgba(139,92,246,0.15)",  color:"#A78BFA" },
  Book:       { bg:"rgba(16,185,129,0.15)",  color:"#34D399" },
  Patent:     { bg:"rgba(251,191,36,0.15)",  color:"#FBBF24" },
};

const STATUS_COLORS = {
  Deployed:  { bg:"rgba(16,185,129,0.15)", color:"#34D399" },
  Active:    { bg:"rgba(37,99,235,0.15)",  color:"#60A5FA" },
  Research:  { bg:"rgba(251,191,36,0.15)", color:"#FBBF24" },
  Prototype: { bg:"rgba(245,158,11,0.15)", color:"#F59E0B" },
};

/* ── Schema.org JSON-LD ── */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "NovaTech Innovative Solutions R&D Lab — AI, IoT & Embedded Systems Research",
      description: "Explore NovaTech's R&D lab: AI, IoT, TinyML, robotics, and embedded systems research with 12+ publications, patents, and deployed projects.",
      url: "https://novatech-is.in/lab",
      inLanguage: "en",
    },
    {
      "@type": "ResearchOrganization",
      name: "NovaTech Innovative Solutions R&D Lab",
      url: "https://novatech-is.in",
      description: "Multidisciplinary R&D lab focused on AI, IoT, robotics, TinyML, and edge computing.",
      foundingLocation: { "@type": "Place", name: "West Bengal, India" },
      knowsAbout: ["IoT", "Artificial Intelligence", "Embedded Systems", "TinyML", "UAV Systems", "Computer Vision", "Robotics"],
      member: TEAM.map(m => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
    },
    {
      "@type": "ItemList",
      name: "NovaTech R&D Projects",
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        description: p.desc,
      })),
    },
  ],
};

/* ── Intersection Observer hook ── 
   deps: re-observe whenever the watched list changes (filter/tab switch) */
const useReveal = (deps = []) => {
  const refs = useRef([]);
  // Clear stale refs whenever deps change so we get a fresh array
  refs.current = [];
  useEffect(() => {
    const els = refs.current.filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("ntl-show");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return refs;
};

export default function NovaTechLab() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [pubTab, setPubTab] = useState("research");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const filters = ["All", "Active", "Research", "Deployed", "Prototype"];

  // ── Memoised filtered lists (recalculate only when filter/tab changes) ──
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.status === activeFilter),
    [activeFilter]
  );

  const filteredPubs = useMemo(() => {
    if (pubTab === "books")   return PUBLICATIONS.filter(p => p.type === "Book");
    if (pubTab === "patents") return PUBLICATIONS.filter(p => p.type === "Patent");
    return PUBLICATIONS.filter(p => p.type !== "Book" && p.type !== "Patent");
  }, [pubTab]);

  // ── Reveal hooks — pass filter/tab as deps so observer re-attaches ──
  const domainRefs   = useReveal([]);
  const projectRefs  = useReveal([activeFilter]);   // re-observe when filter changes
  const pubRefs      = useReveal([pubTab]);          // re-observe when tab changes
  const teamRefs     = useReveal([]);
  const serviceRefs  = useReveal([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --navy:   #0B1F4A;
          --navy2:  #071530;
          --blue:   #1E3A8A;
          --sky:    #2563EB;
          --yellow: #FFD700;
          --gold:   #F59E0B;
          --white:  #FFFFFF;
          --muted:  rgba(255,255,255,0.55);
          --border: rgba(255,255,255,0.09);
          --glass:  rgba(255,255,255,0.04);
          --fd: 'Syne', sans-serif;
          --fb: 'DM Sans', sans-serif;
        }

        /* ── Base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #071530; color: var(--white); font-family: var(--fb); }

        /* ── Page wrapper ── */
        .ntl-page {
          background: linear-gradient(180deg, #071530 0%, #0B1F4A 50%, #0e2454 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── NAVBAR ── */
        .ntl-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          background: rgba(7,21,48,0.0);
          border-bottom: 1px solid transparent;
          transition: background .3s, border-color .3s, box-shadow .3s;
        }
        .ntl-nav.scrolled {
          background: rgba(7,21,48,0.97);
          border-color: var(--border);
          box-shadow: 0 4px 32px rgba(0,0,0,0.5);
          backdrop-filter: blur(18px);
        }
        .ntl-nav-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--sky), var(--yellow), var(--gold));
        }
        .ntl-logo { display:flex; align-items:center; gap:.6rem; text-decoration:none; }
        .ntl-logo img { height:44px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 8px rgba(255,215,0,.2)); }
        .ntl-logo-text { display:flex; flex-direction:column; line-height:1.15; }
        .ntl-logo-text strong { font-family:var(--fd); font-size:.95rem; font-weight:800; color:var(--white); }
        .ntl-logo-text span { font-size:.58rem; font-weight:600; color:var(--yellow); letter-spacing:.12em; text-transform:uppercase; }

        /* Desktop links */
        .ntl-nav-links { display:flex; gap:.25rem; list-style:none; }
        .ntl-nav-links a {
          display:inline-block;
          padding:.4rem .7rem;
          font-size:.84rem;
          font-weight:500;
          color:var(--muted);
          text-decoration:none;
          border-radius:6px;
          transition:color .2s, background .2s;
          white-space:nowrap;
          position:relative;
        }
        .ntl-nav-links a::after {
          content:'';
          position:absolute;
          bottom:3px; left:50%;
          transform:translateX(-50%) scaleX(0);
          width:55%; height:2px;
          background:var(--yellow);
          border-radius:2px;
          transition:transform .25s;
        }
        .ntl-nav-links a:hover { color:var(--white); background:var(--glass); }
        .ntl-nav-links a:hover::after { transform:translateX(-50%) scaleX(1); }
        .ntl-nav-cta {
          display:inline-flex; align-items:center; gap:.4rem;
          padding:.5rem 1.2rem;
          background:var(--yellow); color:var(--navy);
          font-family:var(--fd); font-size:.82rem; font-weight:800;
          border-radius:8px; text-decoration:none; white-space:nowrap;
          transition:transform .2s, box-shadow .2s;
          flex-shrink:0;
        }
        .ntl-nav-cta:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(255,215,0,.35); }

        /* Burger */
        .ntl-burger {
          display:none; flex-direction:column; justify-content:center; align-items:center;
          width:40px; height:40px; gap:5px;
          background:var(--glass); border:1px solid var(--border); border-radius:8px;
          cursor:pointer;
        }
        .ntl-burger span { display:block; width:20px; height:2px; background:var(--white); border-radius:2px; transition:transform .3s, opacity .3s; }
        .ntl-burger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .ntl-burger.open span:nth-child(2) { opacity:0; }
        .ntl-burger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .ntl-drawer {
          display:none;
          position:fixed;
          top:0; right:0;
          width:min(88vw,320px); height:100dvh;
          background:var(--navy2);
          border-left:1px solid var(--border);
          box-shadow:-8px 0 40px rgba(0,0,0,.5);
          z-index:999;
          flex-direction:column;
          transform:translateX(100%);
          transition:transform .35s cubic-bezier(.4,0,.2,1);
          overflow-y:auto;
        }
        .ntl-drawer.open { transform:translateX(0); }
        .ntl-drawer-top { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--border); }
        .ntl-drawer-close { background:none; border:1px solid var(--border); color:var(--white); width:34px; height:34px; border-radius:6px; cursor:pointer; font-size:1rem; display:flex; align-items:center; justify-content:center; }
        .ntl-drawer-links { list-style:none; padding:.75rem .75rem; display:flex; flex-direction:column; gap:.25rem; }
        .ntl-drawer-links a { display:block; padding:.8rem 1rem; border-radius:8px; color:rgba(255,255,255,.8); font-size:.95rem; font-weight:500; text-decoration:none; transition:background .2s, color .2s; }
        .ntl-drawer-links a:hover { background:var(--glass); color:var(--white); }
        .ntl-drawer-cta-wrap { padding:1rem 1.5rem 2rem; }
        .ntl-drawer-cta { display:flex; align-items:center; justify-content:center; gap:.5rem; width:100%; padding:.85rem; background:var(--yellow); color:var(--navy); font-family:var(--fd); font-size:.9rem; font-weight:800; text-decoration:none; border-radius:8px; }
        .ntl-overlay { display:none; position:fixed; inset:0; background:rgba(7,21,48,0); z-index:998; pointer-events:none; }
        .ntl-overlay.open { background:rgba(7,21,48,.75); pointer-events:all; display:block; }

        /* ── Sections ── */
        .ntl-sec { padding:90px 2rem; position:relative; z-index:1; }
        .ntl-sec + .ntl-sec { border-top:1px solid var(--border); }
        .ntl-wrap { max-width:1280px; margin:0 auto; }
        .ntl-wrap-md { max-width:1000px; margin:0 auto; }

        /* ── Section heading pattern ── */
        .ntl-eyebrow {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.3rem 1rem; margin-bottom:1rem;
          background:rgba(255,215,0,.1); border:1px solid rgba(255,215,0,.25);
          border-radius:999px; font-size:.7rem; font-weight:700; letter-spacing:.12em;
          text-transform:uppercase; color:var(--yellow);
        }
        .ntl-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:var(--yellow); }
        .ntl-h1 { font-family:var(--fd); font-size:clamp(2rem,5vw,3.5rem); font-weight:800; line-height:1.12; margin-bottom:.85rem; }
        .ntl-h2 { font-family:var(--fd); font-size:clamp(1.6rem,3vw,2.4rem); font-weight:800; line-height:1.2; margin-bottom:.75rem; }
        .ntl-h3 { font-family:var(--fd); font-size:1rem; font-weight:700; color:var(--white); margin-bottom:.5rem; line-height:1.3; }
        .ntl-grad {
          background:linear-gradient(90deg,var(--yellow),var(--gold));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .ntl-lead { font-size:1rem; color:var(--muted); line-height:1.8; max-width:680px; }
        .ntl-center { text-align:center; }
        .ntl-center .ntl-lead { margin:0 auto; }
        .ntl-sec-hdr { margin-bottom:3rem; }

        /* ── Scroll reveal ── */
        .ntl-reveal { opacity:0; transform:translateY(28px); }
        .ntl-reveal.ntl-show { animation:ntl-up .55s ease forwards; }
        @keyframes ntl-up { to { opacity:1; transform:translateY(0); } }

        /* When filter/tab changes the grid remounts; items visible in viewport
           need a tiny delay so the observer has time to fire — this ensures
           items never stay invisible if observer fires before paint */
        .ntl-proj-grid .ntl-reveal,
        .ntl-pub-list .ntl-reveal {
          animation: ntl-up .5s ease forwards;
          animation-play-state: paused;
        }
        .ntl-proj-grid .ntl-reveal.ntl-show,
        .ntl-pub-list .ntl-reveal.ntl-show {
          animation-play-state: running;
        }

        /* ── HERO ── */
        .ntl-hero {
          min-height:100vh; display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          text-align:center; padding:120px 2rem 80px;
          position:relative; overflow:hidden;
        }
        .ntl-hero-inner { position:relative; z-index:2; max-width:820px; }
        .ntl-hero-pill {
          display:inline-flex; align-items:center; gap:.6rem;
          padding:.4rem 1.2rem; margin-bottom:1.75rem;
          background:rgba(37,99,235,.15); border:1px solid rgba(37,99,235,.35);
          border-radius:999px; font-size:.78rem; font-weight:600; color:rgba(255,255,255,.8);
        }
        .ntl-hero-pill-dot { width:8px; height:8px; border-radius:50%; background:var(--yellow); animation:ntl-pulse 2s infinite; }
        @keyframes ntl-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .ntl-hero-btns { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; margin-top:2.5rem; }
        .ntl-btn-pri {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.8rem 2rem; background:var(--yellow); color:var(--navy);
          font-family:var(--fd); font-size:.9rem; font-weight:800;
          border-radius:40px; text-decoration:none;
          transition:transform .2s, box-shadow .2s;
          box-shadow:0 4px 20px rgba(255,215,0,.3);
        }
        .ntl-btn-pri:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(255,215,0,.45); }
        .ntl-btn-out {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.8rem 2rem;
          background:transparent; color:var(--white);
          font-family:var(--fd); font-size:.9rem; font-weight:700;
          border:1px solid rgba(255,255,255,.25); border-radius:40px;
          text-decoration:none; transition:background .2s, border-color .2s;
        }
        .ntl-btn-out:hover { background:var(--glass); border-color:var(--yellow); }
        /* Hero blobs */
        .ntl-blob {
          position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); opacity:.6;
        }

        /* ── STATS BAR ── */
        .ntl-statsbar {
          padding:2.5rem 2rem;
          background:rgba(255,255,255,.03);
          border-top:1px solid var(--border);
          border-bottom:1px solid var(--border);
        }
        .ntl-stats-row {
          max-width:900px; margin:0 auto;
          display:flex; justify-content:center; gap:4rem; flex-wrap:wrap;
        }
        .ntl-stat { text-align:center; }
        .ntl-stat-n {
          font-family:var(--fd); font-size:2.6rem; font-weight:800;
          background:linear-gradient(135deg,var(--yellow),var(--sky));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .ntl-stat-l { font-size:.8rem; color:var(--muted); margin-top:.3rem; font-weight:500; }

        /* ── ABOUT ── */
        .ntl-about-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
        .ntl-about-cards { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }

        /* ── Generic glass card ── */
        .ntl-card {
          background:var(--glass);
          border:1px solid var(--border);
          border-radius:16px;
          padding:1.5rem;
          transition:transform .3s, border-color .3s, box-shadow .3s;
        }
        .ntl-card:hover { transform:translateY(-5px); border-color:rgba(255,215,0,.3); box-shadow:0 16px 40px rgba(0,0,0,.3); }
        .ntl-card-icon { font-size:1.6rem; margin-bottom:.75rem; }
        .ntl-card-title { font-size:.85rem; font-weight:700; color:var(--yellow); margin-bottom:.4rem; }
        .ntl-card-desc { font-size:.78rem; color:var(--muted); line-height:1.6; }

        /* ── RESEARCH DOMAIN GRID ── */
        .ntl-domain-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1.25rem; }

        /* ── PROJECT GRID ── */
        .ntl-proj-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(340px,1fr)); gap:1.75rem; }
        .ntl-proj-card {
          background:var(--glass);
          border:1px solid var(--border);
          border-radius:18px;
          overflow:hidden;
          transition:transform .3s, box-shadow .3s;
        }
        .ntl-proj-card:hover { transform:translateY(-6px); box-shadow:0 24px 56px rgba(0,0,0,.4); }
        .ntl-proj-stripe { height:5px; }
        .ntl-proj-body { padding:1.5rem; }
        .ntl-proj-meta { display:flex; justify-content:space-between; align-items:flex-start; gap:.5rem; margin-bottom:1rem; }
        .ntl-tag {
          font-size:.68rem; font-weight:700; letter-spacing:.05em;
          padding:.25rem .7rem; border-radius:999px;
        }
        .ntl-status { font-size:.68rem; font-weight:700; padding:.25rem .7rem; border-radius:999px; white-space:nowrap; }
        .ntl-proj-desc { font-size:.83rem; color:var(--muted); line-height:1.7; margin-bottom:1.1rem; }
        .ntl-chips { display:flex; flex-wrap:wrap; gap:.4rem; }
        .ntl-chip {
          padding:.22rem .65rem;
          background:rgba(37,99,235,.15); border:1px solid rgba(37,99,235,.3);
          border-radius:999px; font-size:.67rem; font-weight:600;
          color:rgba(255,255,255,.65);
        }

        /* ── FILTER PILLS ── */
        .ntl-filters { display:flex; gap:.75rem; justify-content:center; flex-wrap:wrap; margin-bottom:2.5rem; }
        .ntl-filter-btn {
          padding:.45rem 1.25rem;
          border-radius:999px; border:1px solid var(--border);
          background:transparent; color:var(--muted);
          font-family:var(--fb); font-size:.82rem; font-weight:600;
          cursor:pointer; transition:all .2s;
        }
        .ntl-filter-btn.active, .ntl-filter-btn:hover {
          border-color:var(--yellow); background:rgba(255,215,0,.12); color:var(--yellow);
        }

        /* ── PUBLICATIONS ── */
        .ntl-pub-tabs { display:flex; gap:.75rem; justify-content:center; flex-wrap:wrap; margin-bottom:2.5rem; }
        .ntl-pub-tab {
          padding:.5rem 1.5rem; border-radius:40px;
          border:1px solid var(--border);
          background:transparent; color:var(--muted);
          font-family:var(--fb); font-size:.85rem; font-weight:600;
          cursor:pointer; transition:all .2s;
        }
        .ntl-pub-tab.active { border-color:var(--yellow); background:rgba(255,215,0,.12); color:var(--yellow); }
        .ntl-pub-list { display:flex; flex-direction:column; gap:1.25rem; }
        .ntl-pub-item {
          background:var(--glass); border:1px solid var(--border);
          border-radius:14px; padding:1.4rem 1.75rem;
          display:flex; gap:1.75rem; align-items:flex-start;
          transition:transform .2s, border-color .2s;
        }
        .ntl-pub-item:hover { transform:translateX(6px); border-color:rgba(255,215,0,.22); }
        .ntl-pub-year-col { text-align:center; min-width:64px; flex-shrink:0; }
        .ntl-pub-year { font-family:var(--fd); font-size:1.1rem; font-weight:800; color:var(--yellow); }
        .ntl-pub-type { display:inline-block; font-size:.65rem; font-weight:700; padding:.2rem .6rem; border-radius:30px; margin-top:.35rem; }
        .ntl-pub-title { font-family:var(--fd); font-size:.93rem; font-weight:700; color:var(--white); margin-bottom:.5rem; line-height:1.45; }
        .ntl-pub-venue { font-size:.78rem; color:var(--yellow); font-weight:600; margin-bottom:.25rem; }
        .ntl-pub-authors { font-size:.75rem; color:var(--muted); margin-bottom:.6rem; }
        .ntl-pub-links { display:flex; gap:1rem; flex-wrap:wrap; }
        .ntl-pub-link {
          font-size:.74rem; color:var(--sky); text-decoration:none;
          border-bottom:1px dashed rgba(96,165,250,.5);
          transition:color .2s;
        }
        .ntl-pub-link:hover { color:var(--yellow); border-color:var(--yellow); }

        /* ── BOOK HIGHLIGHT ── */
        .ntl-book-card {
          margin-top:3rem;
          background:linear-gradient(135deg,rgba(37,99,235,.18),rgba(255,215,0,.06));
          border:1px solid rgba(37,99,235,.3);
          border-radius:18px;
          padding:2.25rem;
          display:flex; gap:2rem; align-items:center; flex-wrap:wrap;
        }
        .ntl-book-icon { font-size:3.5rem; flex-shrink:0; }

        /* ── TEAM ── */
        .ntl-team-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.75rem; }
        .ntl-team-card {
          background:var(--glass); border:1px solid var(--border);
          border-radius:18px; padding:2rem 1.5rem;
          text-align:center;
          transition:transform .3s, border-color .3s;
        }
        .ntl-team-card:hover { transform:translateY(-6px); border-color:rgba(255,215,0,.3); }
        .ntl-avatar {
          width:68px; height:68px; border-radius:50%; margin:0 auto 1.25rem;
          display:flex; align-items:center; justify-content:center;
          font-family:var(--fd); font-size:1.3rem; font-weight:800; color:var(--navy);
          background:linear-gradient(135deg,var(--yellow),var(--gold));
          box-shadow:0 4px 20px rgba(255,215,0,.3);
        }
        .ntl-team-name { font-family:var(--fd); font-size:1rem; font-weight:800; color:var(--white); margin-bottom:.3rem; }
        .ntl-team-role { font-size:.8rem; font-weight:600; color:var(--yellow); margin-bottom:.4rem; }
        .ntl-team-focus { font-size:.75rem; color:var(--muted); line-height:1.5; }

        /* ── SERVICES ── */
        .ntl-serv-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:1.75rem; }

        /* ── TECH STACK ── */
        .ntl-stack-row {
          display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;
          padding:1rem 0; border-bottom:1px solid var(--border);
        }
        .ntl-stack-row:last-child { border-bottom:none; }
        .ntl-stack-cat { min-width:160px; font-size:.75rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:var(--yellow); flex-shrink:0; }
        .ntl-stack-items { display:flex; gap:.5rem; flex-wrap:wrap; }
        .ntl-stack-item {
          padding:.35rem .85rem;
          background:var(--glass); border:1px solid var(--border);
          border-radius:999px; font-size:.75rem; color:var(--muted); font-weight:500;
        }

        /* ── CTA BAND ── */
        .ntl-cta-band {
          padding:80px 2rem;
          background:linear-gradient(135deg,rgba(37,99,235,.22),rgba(255,215,0,.08));
          border-top:1px solid rgba(37,99,235,.3);
          text-align:center;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ntl-about-grid { grid-template-columns:1fr; gap:2.5rem; }
        }
        @media (max-width: 860px) {
          .ntl-nav-links, .ntl-nav-cta { display:none !important; }
          .ntl-burger { display:flex; }
          .ntl-drawer { display:flex; }
        }
        @media (max-width: 640px) {
          .ntl-proj-grid { grid-template-columns:1fr; }
          .ntl-about-cards { grid-template-columns:1fr; }
          .ntl-stats-row { gap:2rem; }
          .ntl-pub-item { flex-direction:column; gap:1rem; }
          .ntl-pub-year-col { text-align:left; }
          .ntl-sec { padding:60px 1.25rem; }
          .ntl-hero { padding:100px 1.25rem 60px; }
        }
      `}</style>

      <div className="ntl-page">

        {/* ══════════════════════════════════
            NAVBAR
        ══════════════════════════════════ */}
        <nav
          className={`ntl-nav${scrolled ? " scrolled" : ""}`}
          role="navigation"
          aria-label="NovaTech R&D Lab main navigation"
        >
          <div className="ntl-nav-accent" aria-hidden="true" />

          {/* Logo */}
          <a href="/"
            className="ntl-logo"
          >
            <a href="/"> 
                <img
              src="banner-logo.png"
              alt="NovaTech Innovative Solutions R&D Lab — AI, IoT and Embedded Systems Research"
              loading="eager"
              fetchpriority="high"
            />
            </a>
          <a href="/lab">
<img
              src="banner-logo2.png"
              alt="NovaTech Innovative Solutions R&D Lab — AI, IoT and Embedded Systems Research"
              loading="eager"
              fetchpriority="high"
            />
          </a>
             
          </a>

          {/* Desktop nav */}
          <ul className="ntl-nav-links" >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/918336001208?text=Hello, I want to collaborate with NovaTech R%26D Lab!"
            target="_blank"
            rel="noopener noreferrer"
            className="ntl-nav-cta"
            aria-label="Contact NovaTech R&D Lab on WhatsApp"
          >
            💬 Get in Touch
          </a>

          {/* Burger */}
          <button
            className={`ntl-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="ntl-drawer"
          >
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </nav>

        {/* Mobile overlay */}
        <div className={`ntl-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

        {/* Mobile drawer */}
        <nav
          id="ntl-drawer"
          className={`ntl-drawer${menuOpen ? " open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          <div className="ntl-drawer-top">
            <a href="/" className="ntl-logo" onClick={() => setMenuOpen(false)}>
            </a>
            <br />
          </div>
          <ul className="ntl-drawer-links" >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
            ))}
          </ul>
          <div className="ntl-drawer-cta-wrap">
            <a href="https://wa.me/918336001208" target="_blank" rel="noopener noreferrer" className="ntl-drawer-cta" onClick={() => setMenuOpen(false)}>
              💬 Get in Touch
            </a>
          </div>
        </nav>

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section className="ntl-hero" aria-labelledby="hero-heading">
          {/* Blobs */}
          <div className="ntl-blob" style={{ width:600,height:600,background:"radial-gradient(circle,rgba(37,99,235,.18),transparent)",top:-100,left:-200 }} aria-hidden="true" />
          <div className="ntl-blob" style={{ width:500,height:500,background:"radial-gradient(circle,rgba(255,215,0,.1),transparent)",bottom:-120,right:-150 }} aria-hidden="true" />

          <div className="ntl-hero-inner">
            <div className="ntl-hero-pill">
              <span className="ntl-hero-pill-dot" aria-hidden="true" />
              ⚡ Turning Ideas into Intelligent Systems
            </div>

            {/* Single h1 — primary SEO keyword target */}
            <h1 className="ntl-h1" id="hero-heading">
              NovaTech Innovative Solutions<br />
              <span className="ntl-grad">Research &amp; Development Lab</span>
            </h1>

            <p className="ntl-lead" style={{ margin: "0 auto", textAlign: "center" }}>
              Bridging academic research and industrial deployment through AI, IoT, Robotics &amp;
              Edge Intelligence — building intelligent systems that solve real-world problems across
              healthcare, agriculture, disaster management, and smart environments.
            </p>

            <div className="ntl-hero-btns">
              <a href="#projects" className="ntl-btn-pri" aria-label="Explore NovaTech R&D projects">
                Explore Projects →
              </a>
              <a href="#publications" className="ntl-btn-out" aria-label="View NovaTech research publications">
                View Publications
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            STATS BAR
        ══════════════════════════════════ */}
        <div className="ntl-statsbar" role="region" aria-label="NovaTech R&D Lab key statistics">
          <div className="ntl-stats-row">
            {STATS.map(({ value, label }) => (
              <div className="ntl-stat" key={label}
                itemScope itemType="https://schema.org/QuantitativeValue"
              >
                <div className="ntl-stat-n" itemProp="value">{value}</div>
                <div className="ntl-stat-l" itemProp="name">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            ABOUT
        ══════════════════════════════════ */}
        <section
          id="about"
          className="ntl-sec"
          aria-labelledby="about-heading"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="ntl-wrap">
            <div className="ntl-about-grid">
              {/* Text */}
              <div>
                <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" aria-hidden="true" />About the Lab</div>
                <h2 className="ntl-h2" id="about-heading">
                  Engineering Intelligent Systems for <span className="ntl-grad">Real-World Impact</span>
                </h2>
                <p className="ntl-lead" style={{ marginBottom:"1.1rem" }} itemProp="description">
                  NovaTech Innovative Solutions R&D Lab is a multidisciplinary research and engineering unit
                  focused on developing intelligent, scalable, and practical technology solutions. Our work spans
                  artificial intelligence, embedded systems, IoT, robotics, and edge computing — with a strong
                  emphasis on solving real-world problems in healthcare, disaster management, smart environments,
                  and sustainable systems.
                </p>
                <p className="ntl-lead" style={{ marginBottom:"1.1rem" }}>
                  Unlike purely academic labs, our approach is <strong style={{ color:var_yellow }}>application-driven</strong>.
                  We design systems end-to-end — from conceptual research and algorithm development to hardware
                  prototyping and deployment. Projects like AI-powered wearables, UAV communication networks,
                  healthcare robotics, and TinyML platforms reflect our focus on bridging theory and practice.
                </p>
                <p className="ntl-lead">
                  The lab actively contributes through IEEE publications, preprints, patents, and books —
                  while building deployable systems and collaborative solutions with academic institutions
                  and industry partners across India.
                </p>
              </div>
              {/* Cards */}
              <div className="ntl-about-cards">
                {[
                  ["🔬", "Applied Research Focus",   "From AI models to hardware prototypes with real-world deployment goals"],
                  ["📡", "Multi-Domain Expertise",   "AI, IoT, UAV systems, robotics, TinyML, and smart infrastructure"],
                  ["⚙️", "End-to-End Development",  "Research → Design → Prototyping → Testing → Deployment"],
                  ["📄", "Active Research Output",   "IEEE publications, preprints, patents, and reference books"],
                ].map(([icon, title, desc]) => (
                  <div className="ntl-card" key={title}>
                    <div className="ntl-card-icon">{icon}</div>
                    <div className="ntl-card-title">{title}</div>
                    <div className="ntl-card-desc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            VISION
        ══════════════════════════════════ */}
        <section id="vision" className="ntl-sec" aria-labelledby="vision-heading" style={{ background:"rgba(255,255,255,.02)" }}>
          <div className="ntl-wrap">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Vision &amp; Mission</div>
              <h2 className="ntl-h2" id="vision-heading">Built to Innovate. <span className="ntl-grad">Designed to Empower.</span></h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem" }}>
              {[
                ["🎯","Vision","To become a globally recognised R&D lab creating impactful intelligent systems that solve complex problems across healthcare, agriculture, environment, and industry."],
                ["🚀","Mission","To innovate relentlessly, publish rigorously, and deploy responsibly — empowering researchers, engineers, and organisations through cutting-edge technology and open collaboration."],
                ["💡","Values","Scientific Integrity · Open Collaboration · Sustainable Innovation · Inclusive Technology · Research Excellence"],
              ].map(([icon, title, desc]) => (
                <div className="ntl-card" key={title} style={{ padding:"2rem" }}>
                  <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{icon}</div>
                  <h3 className="ntl-h3" style={{ color:"var(--yellow)", fontSize:"1.1rem" }}>{title}</h3>
                  <p className="ntl-card-desc" style={{ fontSize:".86rem", marginTop:".5rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            RESEARCH DOMAINS
        ══════════════════════════════════ */}
        <section id="research" className="ntl-sec" aria-labelledby="research-heading">
          <div className="ntl-wrap">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Research Domains</div>
              <h2 className="ntl-h2" id="research-heading">Core Areas of <span className="ntl-grad">Investigation</span></h2>
              <p className="ntl-lead">Our lab pursues research across eight interconnected domains, with projects often spanning multiple areas simultaneously.</p>
            </div>
            <div className="ntl-domain-grid">
              {RESEARCH_DOMAINS.map((d, i) => (
                <div
                  className="ntl-card ntl-reveal"
                  key={d.title}
                  ref={(el) => (domainRefs.current[i] = el)}
                  style={{ animationDelay:`${(i % 4) * 80}ms` }}
                  itemScope itemType="https://schema.org/DefinedTerm"
                >
                  <div className="ntl-card-icon">{d.icon}</div>
                  <h3 className="ntl-h3" style={{ color:"var(--yellow)", fontSize:".92rem" }} itemProp="name">{d.title}</h3>
                  <p className="ntl-card-desc" itemProp="description">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            PROJECTS
        ══════════════════════════════════ */}
        <section
          id="projects"
          className="ntl-sec"
          aria-labelledby="projects-heading"
          style={{ background:"rgba(255,255,255,.02)" }}
          itemScope itemType="https://schema.org/ItemList"
        >
          <div className="ntl-wrap">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Projects</div>
              <h2 className="ntl-h2" id="projects-heading" itemProp="name">What We're <span className="ntl-grad">Building</span></h2>
              <p className="ntl-lead">From early-stage research to fully deployed systems — our portfolio of intelligent technology projects across AI, IoT, robotics, and more.</p>
            </div>

            {/* Filter pills */}
            <div className="ntl-filters" role="group" aria-label="Filter projects by status">
              {filters.map(f => (
                <button
                  key={f}
                  className={`ntl-filter-btn${activeFilter === f ? " active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={activeFilter === f}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* key={activeFilter} forces full remount when filter changes,
                so ntl-reveal starts fresh and the observer re-attaches */}
            <div className="ntl-proj-grid" key={activeFilter}>
              {filteredProjects.map((p, i) => {
                const sc = STATUS_COLORS[p.status] || STATUS_COLORS.Prototype;
                return (
                  <article
                    key={`${activeFilter}-${p.title}`}
                    className="ntl-proj-card ntl-reveal"
                    role="listitem"
                    ref={(el) => { if (el) projectRefs.current[i] = el; }}
                    style={{ animationDelay:`${(i % 3) * 90}ms` }}
                    itemScope itemType="https://schema.org/CreativeWork"
                  >
                    <div className="ntl-proj-stripe" style={{ background:`linear-gradient(90deg,${p.color},var(--yellow))` }} aria-hidden="true" />
                    <div className="ntl-proj-body">
                      <div className="ntl-proj-meta">
                        <span className="ntl-tag" style={{ background:`${p.color}22`, color:p.color }}>{p.tag}</span>
                        <span className="ntl-status" style={{ background:sc.bg, color:sc.color }}>{p.status}</span>
                      </div>
                      <h3 className="ntl-h3" style={{ fontSize:"1.05rem", marginBottom:".75rem" }} itemProp="name">{p.title}</h3>
                      <p className="ntl-proj-desc" itemProp="description">{p.desc}</p>
                      <div className="ntl-chips" aria-label="Technologies used">
                        {p.tech.map(t => <span key={t} className="ntl-chip">{t}</span>)}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            PUBLICATIONS
        ══════════════════════════════════ */}
        <section id="publications" className="ntl-sec" aria-labelledby="pubs-heading">
          <div className="ntl-wrap-md">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Publications</div>
              <h2 className="ntl-h2" id="pubs-heading">Research <span className="ntl-grad">Output</span></h2>
              <p className="ntl-lead">Peer-reviewed papers, conference proceedings, preprints, books, and patents from NovaTech R&D Lab.</p>
            </div>

            {/* Tabs */}
            <div className="ntl-pub-tabs" role="tablist" aria-label="Publication categories">
              {[{id:"research",label:"📄 Research Papers"},{id:"books",label:"📚 Books"},{id:"patents",label:"⚖️ Patents"}].map(t => (
                <button
                  key={t.id}
                  role="tab"
                  className={`ntl-pub-tab${pubTab === t.id ? " active" : ""}`}
                  aria-selected={pubTab === t.id}
                  onClick={() => setPubTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* key={pubTab} forces full remount when tab changes */}
            <div className="ntl-pub-list" role="tabpanel" key={pubTab}>
              {filteredPubs.map((pub, i) => {
                const tc = TYPE_COLORS[pub.type] || TYPE_COLORS.Preprint;
                return (
                  <article
                    key={`${pubTab}-${pub.title}`}
                    className="ntl-pub-item ntl-reveal"
                    ref={(el) => { if (el) pubRefs.current[i] = el; }}
                    style={{ animationDelay:`${i * 60}ms` }}
                    itemScope itemType="https://schema.org/ScholarlyArticle"
                  >
                    <div className="ntl-pub-year-col">
                      <div className="ntl-pub-year" itemProp="datePublished">{pub.year}</div>
                      <span className="ntl-pub-type" style={{ background:tc.bg, color:tc.color }}>{pub.type}</span>
                    </div>
                    <div>
                      <div className="ntl-pub-title" itemProp="headline">{pub.title}</div>
                      <div className="ntl-pub-venue" itemProp="publisher">{pub.venue}</div>
                      <div className="ntl-pub-authors" itemProp="author">{pub.authors}</div>
                      <div className="ntl-pub-links">
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ntl-pub-link"
                            aria-label={`DOI link for: ${pub.title}`}
                            itemProp="url"
                          >
                            DOI: {pub.doi}
                          </a>
                        )}
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ntl-pub-link"
                            aria-label={`Read full paper: ${pub.title}`}
                            itemProp="url"
                          >
                            View Publication →
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
              {filteredPubs.length === 0 && (
                <p style={{ textAlign:"center", color:"var(--muted)", padding:"2.5rem" }}>No publications in this category yet.</p>
              )}
            </div>

            {/* Upcoming book */}
            <div className="ntl-book-card">
              <div className="ntl-book-icon">📘</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:".72rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"var(--yellow)", marginBottom:".75rem" }}>
                  Upcoming Book
                </div>
                <h3 className="ntl-h3" style={{ fontSize:"1.2rem", marginBottom:".6rem" }}>
                  TinyML: Edge Intelligence for Smart Systems
                </h3>
                <p className="ntl-card-desc" style={{ fontSize:".86rem", marginBottom:"1rem" }}>
                  A comprehensive guide covering TinyML fundamentals, edge AI deployment pipelines, neural network
                  optimisation for microcontrollers, hardware acceleration, and real-world case studies across
                  healthcare, agriculture, and industrial IoT.
                </p>
                <div className="ntl-chips">
                  {["TinyML","Edge AI","Embedded ML","MCU Deployment"].map(t => (
                    <span key={t} className="ntl-chip" style={{ background:"rgba(255,215,0,.1)", borderColor:"rgba(255,215,0,.25)", color:"var(--yellow)" }}>{t}</span>
                  ))}
                  <span className="ntl-chip" style={{ background:"rgba(245,158,11,.15)", borderColor:"rgba(245,158,11,.3)", color:"#F59E0B" }}>In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            TEAM
        ══════════════════════════════════ */}
        <section
          id="team"
          className="ntl-sec"
          aria-labelledby="team-heading"
          style={{ background:"rgba(255,255,255,.02)" }}
        >
          <div className="ntl-wrap">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Team</div>
              <h2 className="ntl-h2" id="team-heading">The Minds Behind <span className="ntl-grad">the Research</span></h2>
              <p className="ntl-lead">An interdisciplinary team of engineers, scientists, and innovators working at the intersection of hardware, software, and AI.</p>
            </div>
            <div className="ntl-team-grid">
              {TEAM.map((m, i) => (
                <div
                  className="ntl-team-card ntl-reveal"
                  key={m.name}
                  ref={(el) => (teamRefs.current[i] = el)}
                  style={{ animationDelay:`${i * 100}ms` }}
                  itemScope itemType="https://schema.org/Person"
                >
                  <div className="ntl-avatar" aria-hidden="true">{m.initials}</div>
                  <div className="ntl-team-name" itemProp="name">{m.name}</div>
                  <div className="ntl-team-role" itemProp="jobTitle">{m.role}</div>
                  <div className="ntl-team-focus" itemProp="knowsAbout">{m.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SERVICES
        ══════════════════════════════════ */}
        <section id="services" className="ntl-sec" aria-labelledby="services-heading">
          <div className="ntl-wrap">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Services</div>
              <h2 className="ntl-h2" id="services-heading">How We Can <span className="ntl-grad">Work Together</span></h2>
              <p className="ntl-lead">From consulting to full-scale development — we partner with organisations at every stage of their innovation journey.</p>
            </div>
            <div className="ntl-serv-grid">
              {SERVICES.map((s, i) => (
                <div
                  className="ntl-card ntl-reveal"
                  key={s.title}
                  ref={(el) => (serviceRefs.current[i] = el)}
                  style={{ animationDelay:`${i * 100}ms`, padding:"2rem" }}
                  itemScope itemType="https://schema.org/Service"
                >
                  <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{s.icon}</div>
                  <h3 className="ntl-h3" style={{ color:"var(--yellow)", fontSize:"1rem", marginBottom:".6rem" }} itemProp="name">{s.title}</h3>
                  <p className="ntl-card-desc" style={{ fontSize:".86rem" }} itemProp="description">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            TECH STACK
        ══════════════════════════════════ */}
        <section
          className="ntl-sec"
          aria-labelledby="stack-heading"
          style={{ background:"rgba(255,255,255,.02)" }}
        >
          <div className="ntl-wrap-md">
            <div className="ntl-center ntl-sec-hdr">
              <div className="ntl-eyebrow"><span className="ntl-eyebrow-dot" />Lab Infrastructure</div>
              <h2 className="ntl-h2" id="stack-heading">Technology Stack &amp; <span className="ntl-grad">Lab Resources</span></h2>
            </div>
            <div>
              {TECH_STACK.map((cat) => (
                <div className="ntl-stack-row" key={cat.cat}>
                  <div className="ntl-stack-cat">{cat.cat}</div>
                  <div className="ntl-stack-items">
                    {cat.items.map(item => (
                      <span key={item} className="ntl-stack-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            CTA BAND
        ══════════════════════════════════ */}
        <section className="ntl-cta-band" aria-labelledby="cta-heading">
          <div className="ntl-eyebrow" style={{ margin:"0 auto 1.25rem" }}>
            <span className="ntl-eyebrow-dot" />Start a Collaboration
          </div>
          <h2 className="ntl-h2" id="cta-heading">
            Ready to Collaborate? <span className="ntl-grad">Let's Build</span>
          </h2>
          <p className="ntl-lead" style={{ margin:".75rem auto 2rem", textAlign:"center" }}>
            Whether you're a researcher, university, startup, or enterprise —
            let's build something extraordinary together with NovaTech R&D Lab.
          </p>
          <a
            href="https://wa.me/918336001208?text=Hello, I want to collaborate with NovaTech R%26D Lab!"
            target="_blank"
            rel="noopener noreferrer"
            className="ntl-btn-pri"
            aria-label="Start a conversation with NovaTech R&D Lab on WhatsApp"
          >
            💬 Start a Conversation →
          </a>
        </section>

      </div>
    </>
  );
}

/* inline CSS var helper to avoid template literal issues inside JSX attributes */
const var_yellow = "var(--yellow)";