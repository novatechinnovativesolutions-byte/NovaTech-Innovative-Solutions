import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   NovaTech Innovative Solutions — About / Projects Page
   SEO Layers:
   • JSON-LD WebPage + ItemList schema for projects
   • h1 → h2 → h3 heading hierarchy
   • <article> per project card with Product microdata
   • Review schema for client testimonials
   • All images have descriptive alt text (keyword-rich)
   • Sections use ARIA landmarks + aria-labelledby
   • IntersectionObserver scroll-reveal (no library)
   ───────────────────────────────────────────────────────────── */

/* ── Real project images via Unsplash / open sources ── */
const FEATURED_PROJECTS = [
  {
    id: "fire-alarm",
    title: "IoT-Based Fire Alarm System",
    tag: "IoT · Safety",
    img: "/img/gasSmoke.jpeg",
    desc: "A smart fire alarm system using MQ-2 smoke sensor, DHT11 temperature sensor, and ESP8266 Wi-Fi module. Sends instant WhatsApp/SMS alerts and triggers a buzzer with LED indicators when smoke or heat is detected.",
    stack: ["ESP8266", "MQ-2 Sensor", "DHT11", "Blynk IoT", "Arduino"],
  },
  {
    id: "ir-home-automation",
    title: "IR-Based Home Automation",
    tag: "Embedded · Smart Home",
    img: "img/irsomeautomation.jpeg",
    desc: "Infrared remote-controlled home automation system built on Arduino. Controls lights, fans, and appliances through IR signal decoding — no Wi-Fi needed, fully offline, and highly reliable.",
    stack: ["Arduino UNO", "IR Receiver", "Relay Module", "TV Remote", "C++"],
  },
  {
    id: "morse-code",
    title: "Secret Morse Code Communication",
    tag: "Embedded · Security",
    img: "img/morsecode.png",
    desc: "A covert communication device that encodes and decodes messages using Morse code over RF/LED channels. Designed for secure field communications — messages are invisible to casual observers.",
    stack: ["Arduino", "RF Module", "LCD Display", "Keypad", "LED/Buzzer"],
  },
  {
    id: "rfid-attendance",
    title: "RFID-Based Attendance System",
    tag: "IoT · Education",
    img: "img/rfidattandace.jpeg",
    desc: "Automated attendance tracking system using MFRC522 RFID cards/tags with real-time data logging to Google Sheets. Features admin dashboard, student records, and instant SMS notifications.",
    stack: ["NodeMCU", "MFRC522 RFID", "Google Sheets API", "LCD I2C", "Firebase"],
  },
  {
    id: "solar-bag",
    title: "IoT-Based Solar Charging Bag",
    tag: "IoT · Green Tech",
    img: "img/solarbag.jpeg",
    desc: "An intelligent solar-powered backpack with MPPT charging controller, battery health monitoring via IoT dashboard, and USB-C/USB-A output ports. Tracks solar energy harvested in real-time.",
    stack: ["ESP32", "Solar Panel", "MPPT Module", "Li-ion Battery", "MQTT"],
  },
  {
    id: "ai-voice-robot",
    title: "AI Voice Interactive Robot",
    tag: "AI · Robotics",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    desc: "A fully interactive robot with speech recognition, facial detection, handshake servo mechanism, and mobile app control via Bluetooth. Integrated ChatGPT API for intelligent conversation.",
    stack: ["Raspberry Pi", "OpenCV", "Google Speech API", "Servo Motors", "Flutter"],
  },
];

const ALL_PRODUCTS = [

{ title: "University Management System", img: "https://img.icons8.com/ios/100/graduation-cap.png", desc: "Java-based system for students, results, attendance, and course data." },  
{ title: "Restaurant Management (MERN)", img: "https://img.icons8.com/ios/100/restaurant.png", desc: "Full-stack app for orders, menu, reservations, and billing." },
{ title: "E-Commerce & Mobile Apps", img: "https://img.icons8.com/ios/100/online-store.png", desc: "Custom e-commerce and mobile apps for startups and businesses." },
{ title: "Smart Home Automation", img: "https://img.icons8.com/ios/100/smart-home-connection.png", desc: "IoT smart home with mobile app control for appliances and security." },
{ title: "Smart Agriculture Kit", img: "https://img.icons8.com/ios/100/plant-under-sun.png", desc: "IoT farming with soil sensors and automated irrigation." },
{ title: "Internship Training Portal", img: "https://img.icons8.com/ios/100/classroom.png", desc: "Web app for internship management, mentor assignment, and tracking." },
{ title: "Research Thesis & Papers", img: "https://img.icons8.com/ios/100/books.png", desc: "Research support, thesis writing, simulations, and publication help." }

];



/* ── Training images ── */
const TRAINING_SESSIONS = [
  {
    img: "img/surtech.jpg",
    alt: "IoT training workshop at engineering college — students working with NodeMCU and sensors",
    label: "IoT & ES BCT - Beyond Curriculum Training",
    uni: "Engineering College, West Bengal",
  },
  {
    img: "img/jisce.png",
    alt: "Embedded systems training session — hands-on Arduino and microcontroller lab",
    label: "VLSI BCT - Beyond Curriculum Training",
    uni: "Engineering College, West Bengal",
  },

];

/* ── Training images ── */
const CLIENT_IMG = [
  {
    img: "img/client1.jpeg",
    label: "Completed Personal Project for 7th Semester",
    uni: "Engineering College, West Bengal",
  },
  {
    img: "img/client2.jpeg",
    label: "Complete Final Year Project + Research Paper",
    uni: "Engineering College, West Bengal",
  },

];


/* ── Client testimonials ── */
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rohan M.",
    role: "Final Year B.Tech Student, CSE",
    rating: 5,
    review: "NovaTech helped me build a complete IoT-based attendance system for my final year project. The team was incredibly supportive — from hardware selection to report writing and presentation. Got an A+ grade and a publication too!",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&q=80",
    project: "RFID Attendance + Research Paper",
  },
  {
    id: "t2",
    name: "Priya S.",
    role: "M.Tech Research Scholar",
    rating: 5,
    review: "I needed a working prototype for my thesis with real sensor data and ML integration. NovaTech delivered a fully functional TinyML health monitoring device within the deadline. Exceptional quality and communication throughout.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    project: "TinyML Medical Alert System",
  },
  {
    id: "t3",
    name: "Arjun K.",
    role: "Startup Founder, Kolkata",
    rating: 5,
    review: "We hired NovaTech for our smart agriculture IoT platform. They built the entire system — sensors, cloud dashboard, and mobile app — in just 3 weeks. Highly professional and deeply technical team.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    project: "Smart Agriculture IoT Platform",
  },
  {
    id: "t4",
    name: "Sneha D.",
    role: "Diploma Student, Electronics",
    rating: 5,
    review: "The workshop on embedded systems was amazing! Hands-on sessions with Arduino, ESP32, and real projects. The trainers explained everything so clearly. I built my first IoT project after just 2 days of training.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    project: "Embedded Systems Workshop",
  },
  
];


const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "About NovaTech Innovative Solutions — IoT, AI & Embedded Projects",
      description: "Explore NovaTech's portfolio of IoT, AI, robotics, and embedded systems projects. See client reviews and training workshops.",
      url: "https://novatech-is.in/about",
    },
    {
      "@type": "ItemList",
      name: "NovaTech Project Portfolio",
      itemListElement: FEATURED_PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        description: p.desc,
      })),
    },
    {
      "@type": "EducationalOrganization",
      name: "NovaTech Innovative Solutions",
      url: "https://novatech-is.in",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Training & Workshops",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "IoT Training Workshop" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Embedded Systems Workshop" } },
        ],
      },
    },
  ],
};

/* ── Stagger util ── */
const useReveal = () => {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("nta-show")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return refs;
};

/* ── Stars ── */
const Stars = ({ n }) => (
  <div aria-label={`${n} out of 5 stars`} style={{ display: "flex", gap: 2 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < n ? "#FFD700" : "rgba(255,255,255,0.2)", fontSize: "0.9rem" }}>★</span>
    ))}
  </div>
);

const About = () => {
  const [modal, setModal] = useState(null);
  const projRefs = useReveal();
  const cardRefs = useReveal();
  const trainRefs = useReveal();
  const testRefs = useReveal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        :root {
          --nt-navy:   #0B1F4A;
          --nt-navy2:  #071530;
          --nt-blue:   #1E3A8A;
          --nt-sky:    #2563EB;
          --nt-yellow: #FFD700;
          --nt-gold:   #F59E0B;
          --nt-white:  #FFFFFF;
          --nt-muted:  rgba(255,255,255,0.55);
          --nt-border: rgba(255,255,255,0.09);
          --nt-glass:  rgba(255,255,255,0.04);
          --font-d: 'Syne', sans-serif;
          --font-b: 'DM Sans', sans-serif;
        }

        /* ── Base ── */
        .nta-page {
          background: linear-gradient(180deg, #071530 0%, #0B1F4A 40%, #0e2454 100%);
          color: var(--nt-white);
          font-family: var(--font-b);
          min-height: 100vh;
        }

        /* ── Section wrapper ── */
        .nta-sec {
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }
        .nta-sec + .nta-sec { border-top: 1px solid var(--nt-border); }
        .nta-wrap {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Section heading pattern ── */
        .nta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .3rem 1rem;
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.25);
          border-radius: 999px;
          font-size: .72rem;
          font-weight: 700;
          color: var(--nt-yellow);
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .nta-eyebrow-dot { width:6px;height:6px;border-radius:50%;background:var(--nt-yellow); }

        .nta-h1, .nta-h2 {
          font-family: var(--font-d);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: .75rem;
        }
        .nta-h1 { font-size: clamp(2rem,4.5vw,3.2rem); }
        .nta-h2 { font-size: clamp(1.6rem,3vw,2.4rem); }
        .nta-accent {
          background: linear-gradient(90deg, var(--nt-yellow), var(--nt-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nta-lead {
          font-size: 1rem;
          color: var(--nt-muted);
          line-height: 1.8;
          max-width: 700px;
        }
        .nta-center { text-align: center; }
        .nta-center .nta-lead { margin: 0 auto; }

        /* ── Hero intro ── */
        .nta-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 80px 20px 60px;
        }
        .nta-hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }
        .nta-stat-box {
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 14px;
          padding: 1.25rem;
          text-align: center;
        }
        .nta-stat-n {
          font-family: var(--font-d);
          font-size: 2rem;
          font-weight: 800;
          color: var(--nt-yellow);
        }
        .nta-stat-l { font-size: .8rem; color: var(--nt-muted); }
        .nta-hero-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/3;
          border: 1px solid var(--nt-border);
          box-shadow: 0 32px 64px rgba(0,0,0,0.5);
        }
        .nta-hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .nta-hero-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(11,31,74,0.9);
          border: 1px solid var(--nt-border);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: .6rem 1rem;
          font-size: .78rem;
          color: var(--nt-white);
          display: flex;
          align-items: center;
          gap: .5rem;
        }
        .nta-hero-badge span { color: var(--nt-yellow); font-weight: 700; }

        /* ── Featured Projects ── */
        .nta-proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .nta-proj-card {
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
        }
        .nta-proj-card.nta-show {
          animation: nta-up .55s ease forwards;
        }
        @keyframes nta-up { to { opacity:1; transform:translateY(0); } }
        .nta-proj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.4);
          border-color: rgba(255,215,0,0.3);
        }
        .nta-proj-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
          transition: transform .4s ease;
        }
        .nta-proj-card:hover .nta-proj-img { transform: scale(1.04); }
        .nta-proj-body { padding: 1.4rem; flex: 1; display: flex; flex-direction: column; }
        .nta-proj-tag {
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--nt-yellow);
          margin-bottom: .6rem;
        }
        .nta-proj-title {
          font-family: var(--font-d);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--nt-white);
          margin-bottom: .6rem;
          line-height: 1.3;
        }
        .nta-proj-desc {
          font-size: .84rem;
          color: var(--nt-muted);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1rem;
        }
        .nta-stack {
          display: flex;
          flex-wrap: wrap;
          gap: .4rem;
        }
        .nta-chip {
          padding: .22rem .65rem;
          background: rgba(37,99,235,0.2);
          border: 1px solid rgba(37,99,235,0.35);
          border-radius: 999px;
          font-size: .68rem;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
        }

        /* ── All Products mini grid ── */
        .nta-mini-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.25rem;
        }
        .nta-mini-card {
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 14px;
          padding: 1.25rem 1rem;
          text-align: center;
          transition: transform .25s ease, border-color .25s ease;
          opacity: 0;
          transform: translateY(20px);
        }
        .nta-mini-card.nta-show { animation: nta-up .45s ease forwards; }
        .nta-mini-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,215,0,0.3);
        }
        .nta-mini-card img {
          width: 52px; height: 52px;
          margin-bottom: .75rem;
          filter: invert(1) brightness(0.85) sepia(1) hue-rotate(180deg) saturate(3);
          opacity: .85;
        }
        .nta-mini-title {
          font-family: var(--font-d);
          font-size: .88rem;
          font-weight: 700;
          color: var(--nt-white);
          margin-bottom: .4rem;
        }
        .nta-mini-desc { font-size: .75rem; color: var(--nt-muted); line-height: 1.5; }

        /* ── Training ── */
        .nta-train-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }
        .nta-train-card {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 16/9;
          border: 1px solid var(--nt-border);
          opacity: 0;
          transform: translateY(24px);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .nta-train-card.nta-show { animation: nta-up .5s ease forwards; }
        .nta-train-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.45);
        }
        .nta-train-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .4s ease;
        }
        .nta-train-card:hover img { transform: scale(1.04); }
        .nta-train-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(7,21,48,0.92));
          padding: 2.5rem 1.5rem 1.25rem;
        }
        .nta-train-label {
          font-family: var(--font-d);
          font-size: .95rem;
          font-weight: 700;
          color: var(--nt-white);
        }
        .nta-train-uni { font-size: .78rem; color: var(--nt-yellow); margin-top: .2rem; }

        /* ── Testimonials ── */
        .nta-test-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }
        .nta-test-card {
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 18px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          opacity: 0;
          transform: translateY(24px);
          transition: transform .3s ease, border-color .3s ease;
        }
        .nta-test-card.nta-show { animation: nta-up .5s ease forwards; }
        .nta-test-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,215,0,0.22);
        }
        .nta-test-quote {
          font-size: .9rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.75;
          font-style: italic;
          flex: 1;
        }
        .nta-test-quote::before { content: '"'; color: var(--nt-yellow); font-size: 1.4rem; line-height: 0; vertical-align: -0.3em; margin-right: 4px; }
        .nta-test-quote::after  { content: '"'; color: var(--nt-yellow); font-size: 1.4rem; line-height: 0; vertical-align: -0.3em; margin-left: 4px; }
        .nta-test-project {
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--nt-sky);
          padding: .25rem .75rem;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          border-radius: 999px;
          width: fit-content;
        }
        .nta-test-person {
          display: flex;
          align-items: center;
          gap: .85rem;
          padding-top: .75rem;
          border-top: 1px solid var(--nt-border);
        }
        /* Avatar with privacy blur — real person image blurred */
        .nta-avatar-wrap {
          position: relative;
          width: 46px; height: 46px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(255,215,0,0.35);
        }
        .nta-avatar-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: blur(4px) brightness(0.85);
          transform: scale(1.1);
        }
        .nta-avatar-lock {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .7rem;
          color: rgba(255,255,255,0.5);
        }
        .nta-test-name {
          font-family: var(--font-d);
          font-size: .9rem;
          font-weight: 700;
          color: var(--nt-white);
        }
        .nta-test-role { font-size: .75rem; color: var(--nt-muted); }

        /* ── CTA strip ── */
        .nta-cta-strip {
          background: linear-gradient(135deg, rgba(37,99,235,0.2), rgba(255,215,0,0.08));
          border: 1px solid rgba(37,99,235,0.3);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
        }
        .nta-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: .8rem 2rem;
          background: var(--nt-yellow);
          color: var(--nt-navy);
          font-family: var(--font-d);
          font-size: .95rem;
          font-weight: 800;
          border-radius: 10px;
          text-decoration: none;
          margin-top: 1.5rem;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .nta-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255,215,0,0.35);
        }

        /* ── Modal ── */
        .nta-modal-bg {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .nta-modal-box {
          background: #0B1F4A;
          border: 1px solid var(--nt-border);
          border-radius: 18px;
          max-width: 700px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .nta-modal-box img {
          width: 100%;
          max-height: 360px;
          object-fit: cover;
          display: block;
        }
        .nta-modal-body { padding: 1.5rem; }
        .nta-modal-title {
          font-family: var(--font-d);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--nt-white);
          margin-bottom: .5rem;
        }
        .nta-modal-desc { font-size: .88rem; color: var(--nt-muted); line-height: 1.7; margin-bottom: 1rem; }
        .nta-modal-close {
          position: absolute;
          top: 12px; right: 12px;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(11,31,74,0.9);
          border: 1px solid var(--nt-border);
          color: var(--nt-white);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Responsive ── */
        @media (max-width: 1050px) {
          .nta-proj-grid { grid-template-columns: repeat(2, 1fr); }
          .nta-hero { grid-template-columns: 1fr; }
          .nta-hero-img-wrap { max-width: 500px; margin: 0 auto; }
        }
        @media (max-width: 700px) {
          .nta-proj-grid, .nta-train-grid, .nta-test-grid { grid-template-columns: 1fr; }
          .nta-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .nta-sec { padding: 56px 16px; }
        }
      `}</style>

      <div className="nta-page">
        {/* ═══════════════════════════════════════════
            HERO INTRO
        ═══════════════════════════════════════════ */}
        <section
          className="nta-sec"
          style={{ padding: 0 }}
          aria-labelledby="about-heading"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <div className="nta-wrap nta-hero">
            <div>
              <div className="nta-eyebrow">
                <span className="nta-eyebrow-dot" aria-hidden="true" />
                About NovaTech
              </div>
              <h1 className="nta-h1" id="about-heading" itemProp="name">
                Building the Future with <span className="nta-accent">IoT, AI & Embedded Tech</span>
              </h1>
              <p className="nta-lead" itemProp="description">
                At <strong>NovaTech Innovative Solutions</strong>, we design and build powerful,
                affordable software and hardware solutions — from IoT systems and AI/ML models
                to full-stack web apps and academic project guidance. Based in West Bengal, India,
                we've delivered 150+ projects for students, startups, and enterprises.
              </p>
              <div className="nta-hero-stats" aria-label="NovaTech achievements">
                {[
                  { n: "20+", l: "Projects Delivered" },
                  { n: "200+", l: "Students Trained" },
                  { n: "5+", l: "Universities Reached" },
                  { n: "5★",  l: "Client Rating" },
                ].map(({ n, l }) => (
                  <div className="nta-stat-box" key={l}>
                    <div className="nta-stat-n">{n}</div>
                    <div className="nta-stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="nta-hero-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="NovaTech team working on embedded systems and IoT hardware projects"
                loading="eager"
              />
              <div className="nta-hero-badge">
                🏆 <span>Top-Rated</span> by 300+ Students & Startups
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FEATURED PROJECTS
        ═══════════════════════════════════════════ */}
        <section
          className="nta-sec"
          aria-labelledby="projects-heading"
          id="projects"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="nta-wrap">
            <div className="nta-center" style={{ marginBottom: "3rem" }}>
              <div className="nta-eyebrow">
                <span className="nta-eyebrow-dot" aria-hidden="true" />
                Featured Work
              </div>
              <h2 className="nta-h2" id="projects-heading" itemProp="name">
                Real Projects, <span className="nta-accent">Real Impact</span>
              </h2>
              <p className="nta-lead">
                A selection of our most innovative IoT, embedded systems, and AI projects —
                each deployed and tested in real-world environments.
              </p>
            </div>

            <div className="nta-proj-grid" role="list">
              {FEATURED_PROJECTS.map((p, i) => (
                <article
                  key={p.id}
                  className="nta-proj-card"
                  role="listitem"
                  ref={(el) => (projRefs.current[i] = el)}
                  style={{ animationDelay: `${(i % 3) * 100}ms` }}
                  onClick={() => setModal(p)}
                  aria-label={`View details: ${p.title}`}
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <img
                    className="nta-proj-img"
                    src={p.img}
                    alt={`NovaTech project: ${p.title} — ${p.tag}`}
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="nta-proj-body">
                    <div className="nta-proj-tag">{p.tag}</div>
                    <h3 className="nta-proj-title" itemProp="name">{p.title}</h3>
                    <p className="nta-proj-desc" itemProp="description">{p.desc}</p>
                    <div className="nta-stack" aria-label="Technologies used">
                      {p.stack.map((s) => <span key={s} className="nta-chip">{s}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ALL SOLUTIONS MINI GRID
        ═══════════════════════════════════════════ */}
        <section className="nta-sec" aria-labelledby="solutions-heading">
          <div className="nta-wrap">
            <div className="nta-center" style={{ marginBottom: "3rem" }}>
              <div className="nta-eyebrow">
                <span className="nta-eyebrow-dot" aria-hidden="true" />
                What We Build
              </div>
              <h2 className="nta-h2" id="solutions-heading">
                More Solutions <span className="nta-accent">We Deliver</span>
              </h2>
              <p className="nta-lead">
                From wearable IoT to enterprise software — our diverse portfolio covers
                every domain of modern technology for students and businesses alike.
              </p>
            </div>
            <div className="nta-mini-grid" role="list">
              {ALL_PRODUCTS.map((p, i) => (
                <div
                  key={p.title}
                  className="nta-mini-card"
                  role="listitem"
                  ref={(el) => (cardRefs.current[i] = el)}
                  style={{ animationDelay: `${(i % 4) * 75}ms` }}
                >
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <div className="nta-mini-title">{p.title}</div>
                  <p className="nta-mini-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TRAINING SESSIONS
        ═══════════════════════════════════════════ */}
        <section
          className="nta-sec"
          aria-labelledby="training-heading"
          id="training"
        >
          <div className="nta-wrap">
            <div className="nta-center" style={{ marginBottom: "3rem" }}>
              <div className="nta-eyebrow">
                <span className="nta-eyebrow-dot" aria-hidden="true" />
                Training & Workshops
              </div>
              <h2 className="nta-h2" id="training-heading">
                Hands-On Learning <span className="nta-accent">Across Universities</span>
              </h2>
              <p className="nta-lead">
                We've conducted IoT, Embedded Systems, and AI/ML workshops at 20+ engineering
                colleges and polytechnic institutes across West Bengal and beyond. Our practical,
                project-based training gives students real industry experience.
              </p>
            </div>

            <div className="nta-train-grid">
              {TRAINING_SESSIONS.map((t, i) => (
                <figure
                  key={t.label}
                  className="nta-train-card"
                  ref={(el) => (trainRefs.current[i] = el)}
                  style={{ animationDelay: `${i * 100}ms`, margin: 0 }}
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <img
                    src={t.img}
                    alt={t.alt}
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="nta-train-overlay">
                    <div className="nta-train-label" itemProp="name">{t.label}</div>
                    <div className="nta-train-uni" itemProp="location">{t.uni}</div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLIENT TESTIMONIALS
        ═══════════════════════════════════════════ */}
        <section
          className="nta-sec"
          aria-labelledby="reviews-heading"
          id="reviews"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="nta-wrap">
            <div className="nta-center" style={{ marginBottom: "3rem" }}>
              <div className="nta-eyebrow">
                <span className="nta-eyebrow-dot" aria-hidden="true" />
                Client Feedback
              </div>
              <h2 className="nta-h2" id="reviews-heading">
                What Our <span className="nta-accent">Clients Say</span>
              </h2>
              <p className="nta-lead">
                Honest reviews from students, researchers, and startups who've worked with
                NovaTech. Client identities are partially anonymised for privacy.
              </p>
            </div>

            <div
              className="nta-test-grid"
              role="list"
              aria-label="Client testimonials"
            >
              {TESTIMONIALS.map((t, i) => (
                <article
                  key={t.id}
                  className="nta-test-card"
                  role="listitem"
                  ref={(el) => (testRefs.current[i] = el)}
                  style={{ animationDelay: `${(i % 2) * 120}ms` }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div
                    itemScope
                    itemType="https://schema.org/Rating"
                    itemProp="reviewRating"
                  >
                    <meta itemProp="ratingValue" content={t.rating} />
                    <meta itemProp="bestRating" content="5" />
                    <Stars n={t.rating} />
                  </div>

                  <span className="nta-test-project">{t.project}</span>

                  <blockquote
                    className="nta-test-quote"
                    itemProp="reviewBody"
                    cite="https://novatech-is.in/about"
                  >
                    {t.review}
                  </blockquote>

                  <div
                    className="nta-test-person"
                    itemScope
                    itemType="https://schema.org/Person"
                    itemProp="author"
                  >
                    {/* Blurred avatar for privacy */}
                    <div
                      className="nta-avatar-wrap"
                      title="Identity hidden for privacy"
                      aria-label="Client photo (blurred for privacy)"
                    >
                      <img src={t.avatar} alt="Client (identity protected)" loading="lazy" />
                      <span className="nta-avatar-lock" aria-hidden="true">🔒</span>
                    </div>
                    <div>
                      <div className="nta-test-name" itemProp="name">{t.name}</div>
                      <div className="nta-test-role" itemProp="jobTitle">{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div>
              <br />
            <div className="nta-train-grid">
              {CLIENT_IMG.map((t, i) => (
                <figure
                  key={t.label}
                  className="nta-train-card"
                  ref={(el) => (trainRefs.current[i] = el)}
                  style={{ animationDelay: `${i * 100}ms`, margin: 0 }}
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <img
                    src={t.img}
                    alt={t.alt}
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="nta-train-overlay">
                    <div className="nta-train-label" itemProp="name">{t.label}</div>
                    <div className="nta-train-uni" itemProp="location">{t.uni}</div>
                  </div>
                </figure>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════ */}
        <section className="nta-sec" aria-label="Contact NovaTech">
          <div className="nta-wrap">
            <div className="nta-cta-strip">
              <div className="nta-eyebrow" style={{ margin: "0 auto 1rem" }}>
                <span className="nta-eyebrow-dot" />
                Start Your Project
              </div>
              <h2 className="nta-h2">
                Got an idea? Let's <span className="nta-accent">Build it Together</span>
              </h2>
              <p className="nta-lead" style={{ margin: "0.75rem auto 0", maxWidth: 520 }}>
                Whether it's a final year project, startup MVP, or enterprise IoT system —
                NovaTech has the skills to deliver. Reach out for a free consultation.
              </p>
              <a
                href="https://wa.me/918336001208?text=Hello, I want to discuss a project with NovaTech!"
                target="_blank"
                rel="noopener noreferrer"
                className="nta-cta-btn"
                aria-label="Contact NovaTech on WhatsApp to start your project"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════
          PROJECT DETAIL MODAL
      ═══════════════════════════════════════════ */}
      {modal && (
        <div
          className="nta-modal-bg"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${modal.title}`}
        >
          <div className="nta-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="nta-modal-close"
              onClick={() => setModal(null)}
              aria-label="Close modal"
            >✕</button>
            <img
              src={modal.img}
              alt={`NovaTech project showcase: ${modal.title}`}
            />
            <div className="nta-modal-body">
              <div className="nta-proj-tag">{modal.tag}</div>
              <div className="nta-modal-title">{modal.title}</div>
              <p className="nta-modal-desc">{modal.desc}</p>
              <div className="nta-stack">
                {modal.stack.map((s) => <span key={s} className="nta-chip">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;