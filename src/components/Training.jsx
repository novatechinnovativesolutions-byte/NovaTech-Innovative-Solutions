import React from "react";

/* NovaTech IS — Training & Internships page (/training).
   Head tags use React 19 hoisting; on React 18 wrap <Seo/> output in react-helmet-async's <Helmet>.
   Brochure PDFs live in /public/brochures/ (see BATCHES below).
   Batch banners: set `img` to a file you own (e.g. "/batches/embedded.svg"). Leave it empty to show an icon tile.
   Fill `meta` (duration, mode, fee, start) per batch: courses with a visible fee and start date convert far better.
   VERIFY every "learn", "who" and "build" line against the real syllabus before publishing. */

const SITE = "https://www.novatechinnovative.com";
const PAGE = SITE + "/training";
const TITLE = "IoT & Embedded Systems Training, Internships | NovaTech IS";
const DESC = "Hands-on IoT and embedded systems courses with internships. Two batches running now; PCB design and research on demand. Download the brochure and enquire.";
const OG_IMAGE = SITE + "/og-image.png";
const wa = (msg) => "https://wa.me/918336001208?text=" + encodeURIComponent(msg);
const WA = wa("Hello, I want to know about NovaTech training batches!");

const T = {
  navy: "#07091c", blue: "#1346e8", blueLight: "#e8effe", yellow: "#f5c518", off: "#f7f8fc",
  border: "#e4e8f0", text: "#111827", muted: "#5b6472",
  head: "'Syne', sans-serif", body: "'DM Sans', sans-serif",
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const PATHS = {
  chip: "M7 7h10v10H7zM9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3",
  iot: "M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01",
  pcb: "M4 4h16v16H4zM8 8h4v4M12 12h4M8 16h2M16 8v2M16 16h.01",
  flask: "M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7.5 15h9",
  grad: "M22 10 12 5 2 10l10 5zM22 10v6M6 12v5c3 3 9 3 12 0v-5",
  brief: "M3 7h18v13H3zM8 7V4h8v3M3 13h18",
  school: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",
};
const Ico = ({ n }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>
);

/* Batches. status: "active" or "demand". Active batches carry a brochure PDF link.
   meta: duration, mode (Online / Offline / Hybrid), fee (number as text, in INR, optional), start. Empty values are hidden. */
const BATCHES = [
  { status: "active", icon: "chip", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_FvgpxcPPIQhuAnqTNXlfe5AI8mn2A3Em5QLeUA5_Bx2Xz49krdCQnc&s=10", brochure: "/brochures/embedded-systems-training-brochure.pdf",
    name: "Embedded Systems & Microcontroller Programming Course",
    text: "Learn to program microcontrollers and build embedded systems through hands-on practice.",
    who: "Diploma and engineering students, and beginners starting in embedded systems.",
    learn: ["Embedded C for microcontrollers", "GPIO, timers, ADC and interrupts", "UART, I2C and SPI communication", "Arduino and ESP32 projects"],
    build: "A working microcontroller-based project you can show in interviews.",
    meta: { duration: "", mode: "", fee: "", start: "" },
    chips: ["Embedded C", "Microcontrollers", "Arduino", "ESP32"] },

  { status: "active", icon: "iot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBf5T6grLcJPCI_kAeUpbfJjR6a-G3EYOxXh5KS54kuQ&s=10", brochure: "/brochures/intro-to-iot-training-brochure.pdf",
    name: "Introduction to Internet of Things (IoT) Course",
    text: "Get started with connected devices: sensors, microcontrollers and how devices send data to the cloud.",
    who: "Students and beginners who are new to IoT.",
    learn: ["How IoT devices sense and send data", "Sensors and ESP32 programming", "MQTT messaging and live dashboards", "Building a connected device end to end"],
    build: "A connected IoT device that sends live sensor data to a dashboard.",
    meta: { duration: "", mode: "", fee: "", start: "" },
    chips: ["Sensors", "ESP32", "MQTT"] },

     { status: "demand", icon: "flask", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOga_Bw9pvLcFDZjktZpCdzKsDs0QMfq0NZqVtf4uc5w&s=10",
    name: "AI, IoT & Embedded Research Mentoring",
    text: "Take a research idea forward in AI, IoT or embedded systems, with guided mentoring from our team.",
    who: "Final-year, M.Tech and research students.",
    learn: ["Choosing a research problem", "Experiment design and implementation", "Technical writing and paper preparation", "Guided mentoring from our team"],
    build: "A research project taken toward a paper.",
    meta: { duration: "", mode: "", fee: "", start: "" },
    chips: ["AI", "IoT", "Embedded", "Mentoring"] },

  { status: "demand", icon: "pcb", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzGM9z2DxWt5oT-h-xpKsdOMT10mAZ4mmP8EZjMfnew&s=10",
    name: "PCB Design Course",
    text: "Design printed circuit boards and take a board from schematic toward a working prototype.",
    who: "Electronics, embedded and IoT students who want to design their own boards.",
    learn: ["Schematic capture", "PCB layout and routing", "Preparing a board for fabrication", "From schematic toward a prototype"],
    build: "A PCB design for your own circuit.",
    meta: { duration: "", mode: "", fee: "", start: "" },
    chips: ["Schematic", "PCB layout", "Prototyping"] },
 
];

const WHY = [
  ["Project-based, not slide-based", "Every batch is built around making something work, so you leave with a project to show."],
  ["Taught by people who build products", "The same team ships IoT and embedded solutions for clients, so training reflects real work."],
  ["A path beyond the course", "Move from a batch to a guided internship, project mentoring or research support."],
  ["Clear details before you commit", "Schedule, format and fees are shared up front, with no obligation."],
];

const WAYS = [
  { icon: "grad", title: "Training and bootcamps", pitch: "Practical skills, built by doing.",
    best: "Students and graduates.", href: "/contact", cta: "Enquire about training",
    svcs: [["Technical training", "Structured training in IoT, AI/ML, embedded systems, robotics and full-stack development."],
           ["Hands-on workshops and bootcamps", "Practical sessions focused on building."],
           ["Programming skills", "Programming practice for embedded and full-stack projects."]] },
  { icon: "brief", title: "Internships and project-based learning", pitch: "Learn by working on real projects.",
    best: "Students who want project experience.", href: "/contact", cta: "Ask about internships",
    svcs: [["Guided internships", "Work on real projects with guidance from our team."],
           ["Project-based learning", "Build projects from idea to prototype."],
           ["Project mentoring", "Need help with a final-year project? See our R&D support."]] },
  { icon: "school", title: "College workshops and hackathons", pitch: "Bring NovaTech to your campus.",
    best: "Colleges and universities.", href: "/contact", cta: "Book a workshop",
    svcs: [["College workshops", "Workshops delivered for colleges and universities."],
           ["Technical events", "Technical events for student communities."],
           ["Hackathons", "Hackathons for engineering students."]] },
];

const STATS = [["2", "Batches running now"], ["4", "Courses to choose from"], ["3", "Ways to learn"], ["24h", "Reply to every enquiry"]];

const STEPS = [
  ["Pick a course", "Join an active batch, request an on-demand one, or tell us what you want to learn."],
  ["Send an enquiry", "Message us on WhatsApp or use the contact form. We reply within 24 hours."],
  ["Confirm the details", "We share the schedule, format and fees before you commit."],
  ["Start learning", "Build hands-on projects with guidance from our team."],
];

const FAQS = [
  ["What training does NovaTech offer?", "Hands-on training, workshops and bootcamps, project-based learning and internships in IoT, AI/ML, embedded systems, robotics and full-stack development."],
  ["Which batches are active right now?", "Embedded Systems and Microcontroller Programming and Introduction to IoT are active now. You can download the brochure for each one from the course card."],
  ["I am a beginner. Which course should I join?", "Introduction to IoT is a good starting point for beginners. Tell us your branch and level on WhatsApp and we will suggest the right batch."],
  ["What does on demand mean for PCB Design and Research?", "These batches start when students ask for them. Send an enquiry for the course you want and we confirm the schedule, format and fees with you."],
  ["How do I join a batch?", "Message us on WhatsApp or send an enquiry through the contact page. We reply within 24 hours and share the schedule, format and fees for the batch you choose."],
  ["Do you offer internships?", "Yes. We offer guided internships and project-based learning so you can work on real projects."],
  ["Can my college book a workshop?", "Yes. We run workshops, technical events and hackathons for colleges and universities."],
];

const Seo = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": SITE + "/#org", name: "NovaTech Innovative Solutions", alternateName: "NovaTech IS", url: SITE, address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" }, areaServed: { "@type": "Country", name: "India" } },
      { "@type": "WebSite", "@id": SITE + "/#website", url: SITE, name: "NovaTech Innovative Solutions", publisher: { "@id": SITE + "/#org" }, inLanguage: "en-IN" },
      { "@type": "WebPage", "@id": PAGE + "#webpage", url: PAGE, name: TITLE, description: DESC, inLanguage: "en-IN",
        isPartOf: { "@id": SITE + "/#website" }, about: { "@id": PAGE + "#service" }, breadcrumb: { "@id": PAGE + "#breadcrumb" } },
      { "@type": "Service", "@id": PAGE + "#service", name: "Student Training & Internships", url: PAGE,
        description: "Hands-on training, workshops, bootcamps, project-based learning and internships in IoT, AI/ML, embedded systems, robotics and full-stack development.",
        provider: { "@id": SITE + "/#org" }, areaServed: { "@type": "Country", name: "India" } },
      ...BATCHES.map((b) => {
        const m = b.meta || {};
        const c = { "@type": "Course", "@id": PAGE + "#" + slug(b.name), name: b.name, description: b.text + " " + b.learn.join(", ") + ".", url: PAGE + "#" + slug(b.name),
          provider: { "@type": "Organization", name: "NovaTech Innovative Solutions", sameAs: SITE },
          teaches: b.learn, audience: { "@type": "EducationalAudience", educationalRole: "student" } };
        if (b.img) c.image = SITE + b.img;
        if (m.fee && /^\d+$/.test(m.fee)) c.offers = { "@type": "Offer", category: "Paid", price: m.fee, priceCurrency: "INR", url: PAGE + "#" + slug(b.name) };
        if (m.mode || m.duration || m.start) c.hasCourseInstance = { "@type": "CourseInstance", courseMode: m.mode || "Onsite", ...(m.start ? { startDate: m.start } : {}), ...(m.duration ? { courseWorkload: m.duration } : {}) };
        return c;
      }),
      { "@type": "BreadcrumbList", "@id": PAGE + "#breadcrumb", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Training & Internships", item: PAGE } ] },
      { "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
  return (
    <>
      <title>{TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={DESC} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#07091c" />
      <link rel="canonical" href={PAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={PAGE} />
      <meta property="og:site_name" content="NovaTech Innovative Solutions" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="NovaTech Innovative Solutions: IoT and embedded systems training and internships" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;700&display=swap" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
    </>
  );
};

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{font-family:${T.body};color:${T.text};line-height:1.65;background:#fff}a{color:inherit}
main{overflow-x:clip}
:focus-visible{outline:3px solid ${T.blue};outline-offset:3px}
.dark :focus-visible,.cta :focus-visible,.mbar :focus-visible{outline-color:${T.yellow}}
.cta :focus-visible{outline-color:${T.navy}}
.sec{padding:88px 5%;scroll-margin-top:16px}.in{max-width:1200px;margin:auto}.light{background:${T.off}}.dark{background:${T.navy}}
.h2{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.5rem,3vw,2.4rem);line-height:1.18;letter-spacing:-.025em;margin-bottom:14px;overflow-wrap:break-word}
.sub{color:${T.muted};max-width:640px;font-weight:300}
.btn{display:inline-block;padding:13px 28px;border-radius:8px;font-weight:700;font-size:.95rem;text-decoration:none;font-family:${T.head};transition:transform .15s}
.btn:hover{transform:translateY(-2px)}.btn-y{background:${T.yellow};color:${T.navy}}.btn-o{border:2px solid ${T.navy};color:${T.navy};margin-left:10px}
.plink{display:inline-block;padding:10px 0;font-weight:700;color:${T.blue};text-decoration:none}.plink:hover{text-decoration:underline}
.hero{background:linear-gradient(135deg,#eef3ff,#fff 62%);border-bottom:1px solid ${T.border};padding:56px 5% 80px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0 auto 0 0;width:8px;background:linear-gradient(${T.blue},${T.yellow})}
.crumbs{max-width:1200px;margin:0 auto 36px;font-size:.85rem;color:${T.muted}}.crumbs ol{list-style:none;display:flex;flex-wrap:wrap;gap:8px}.crumbs li+li::before{content:"/";margin-right:8px}.crumbs a{text-decoration:none;display:inline-block;padding:8px 0}.crumbs a:hover{text-decoration:underline}
.hero-in{max-width:1200px;margin:auto;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.badge{display:inline-block;background:${T.blueLight};border:1px solid #c2d0f8;border-radius:100px;padding:5px 14px;font-size:.8rem;font-weight:700;color:${T.blue};margin-bottom:18px}
.h1{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.9rem,3.8vw,3.2rem);line-height:1.1;letter-spacing:-.035em;margin-bottom:18px;overflow-wrap:break-word}
.h1 em{font-style:normal;background:linear-gradient(90deg,${T.blue},#6a8cff);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:${T.muted};font-weight:300;font-size:1.05rem;max-width:560px;margin-bottom:20px}
.pts{list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:26px;max-width:560px}.pts li{position:relative;padding-left:26px;font-size:.95rem}.pts li::before{content:"✓";position:absolute;left:0;color:${T.blue};font-weight:700}
.hero-art{display:block;width:100%;max-width:440px;margin:auto;min-width:0;filter:drop-shadow(0 20px 40px rgba(19,70,232,.15))}.hero-art img{display:block;width:100%;height:auto}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(180px,100%),1fr));gap:18px;max-width:1200px;margin:auto}
.stats div{border-left:3px solid ${T.yellow};padding:4px 0 4px 18px}.stats b{display:block;font-family:${T.head};font-size:2.2rem;color:#fff}.stats span{color:rgba(255,255,255,.78);font-size:.88rem}
.rows{display:flex;flex-direction:column;gap:26px;margin-top:44px}
.row{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:44px;background:#fff;border:1px solid ${T.border};border-left:6px solid ${T.blue};border-radius:20px;padding:36px}
.row:nth-child(2){border-left-color:${T.yellow}}.row:nth-child(3){border-left-color:${T.navy}}
.ico{width:64px;height:64px;border-radius:18px;background:${T.blueLight};color:${T.blue};display:flex;align-items:center;justify-content:center}.ico svg{width:34px;height:34px}
.row h3{font-family:${T.head};font-size:1.5rem;color:${T.navy};margin:14px 0 8px}.pitch{color:${T.muted}}.best{font-size:.9rem;margin:12px 0 16px}
.svcs{list-style:none;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px}.svcs li{border-left:3px solid ${T.yellow};padding-left:14px}
.svcs b{display:block;font-family:${T.head};font-size:.98rem;color:${T.navy}}.svcs span{font-size:.87rem;color:${T.muted}}
.pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:24px;margin-top:44px}
.pc{background:#fff;border:1px solid ${T.border};border-radius:20px;overflow:hidden;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s;scroll-margin-top:16px}
.pc:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(19,70,232,.14)}
.pc img,.ph{width:100%;aspect-ratio:16/9;object-fit:cover;background:${T.blueLight};display:block}
.ph{display:flex;align-items:center;justify-content:center;color:${T.blue};background:linear-gradient(135deg,${T.blueLight},#fff)}.ph svg{width:56px;height:56px}
.pc.live{border-top:4px solid ${T.blue}}.pc.od{border-top:4px solid ${T.yellow}}
.pb{padding:22px;display:flex;flex-direction:column;flex:1}.tag{font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${T.blue};margin-bottom:6px}
.tag.od{color:#8a6a00}
.pb h3{font-family:${T.head};font-size:1.15rem;color:${T.navy};margin-bottom:6px;overflow-wrap:break-word}.pb>p{color:${T.muted};font-size:.92rem;margin-bottom:12px}
.pb h4{font-family:${T.head};font-size:.82rem;color:${T.navy};text-transform:uppercase;letter-spacing:.06em;margin:4px 0 6px}
.learn{list-style:none;margin-bottom:12px}.learn li{font-size:.88rem;padding-left:22px;position:relative;margin-bottom:3px}.learn li::before{content:"✓";position:absolute;left:0;color:${T.blue};font-weight:700}
.who{font-size:.88rem;background:${T.off};border-radius:10px;padding:10px 12px;margin-bottom:12px}.who strong{color:${T.navy}}
.meta{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 14px;margin-bottom:14px;font-size:.84rem}.meta dt{color:${T.muted};font-size:.74rem;text-transform:uppercase;letter-spacing:.06em}.meta dd{font-weight:700;color:${T.navy}}
.note{font-size:.82rem;color:${T.muted};margin-bottom:14px}
.chips{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin:auto 0 16px}.chips li{background:${T.blueLight};color:${T.blue};border-radius:100px;padding:3px 11px;font-size:.75rem;font-weight:700}
.acts{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px}
.bro{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:8px 18px;border-radius:8px;background:${T.yellow};color:${T.navy};font-family:${T.head};font-weight:700;font-size:.88rem;text-decoration:none;transition:transform .15s}.bro:hover{transform:translateY(-2px)}
.bro-o{background:#fff;border:2px solid ${T.navy}}
.why{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:18px;margin-top:40px}
.why div{border-left:3px solid ${T.yellow};padding:4px 0 4px 18px}.why h3{font-family:${T.head};font-size:1.02rem;color:#fff;margin-bottom:6px}.why p{font-size:.9rem;color:rgba(255,255,255,.78)}
.dark .h2{color:#fff}.dark .sub{color:rgba(255,255,255,.72)}
.steps{list-style:none;counter-reset:s;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:20px;margin-top:40px}
.steps li{counter-increment:s;background:${T.off};border:1px solid ${T.border};border-radius:16px;padding:24px}
.steps li::before{content:counter(s);display:flex;width:34px;height:34px;border-radius:50%;background:${T.blue};color:#fff;font-weight:700;align-items:center;justify-content:center;margin-bottom:12px}
.steps h3{font-family:${T.head};font-size:1.05rem;color:${T.navy};margin-bottom:6px}.steps p{font-size:.9rem;color:${T.muted}}
.faq{max-width:860px;margin-top:36px}.faq details{background:#fff;border:1px solid ${T.border};border-radius:12px;padding:6px 20px;margin-bottom:12px}
.faq summary{display:flex;align-items:center;min-height:48px;font-family:${T.head};font-weight:700;color:${T.navy};cursor:pointer}.faq p{color:${T.muted};margin:0 0 14px;font-size:.93rem}
.cta{background:${T.yellow};padding:52px 5%}.cta-in{max-width:1200px;margin:auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:22px}
.cta h2{font-family:${T.head};font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${T.navy}}.cta p{color:rgba(10,15,46,.8)}.cta p a{font-weight:700;display:inline-block;padding:6px 0}.btn-n{background:${T.navy};color:#fff}
.cta-b{display:flex;flex-wrap:wrap;gap:12px}
.mbar{display:none}
@media(max-width:860px){
.hero-in,.row,.svcs{grid-template-columns:minmax(0,1fr);gap:28px}
.hero-art{display:none}
.btn-o{margin:12px 0 0}
.mbar{display:flex;gap:10px;position:fixed;left:0;right:0;bottom:0;z-index:20;padding:10px 5% calc(10px + env(safe-area-inset-bottom));background:rgba(7,9,28,.97);border-top:1px solid rgba(255,255,255,.12)}
.mbar a{flex:1;display:flex;align-items:center;justify-content:center;min-height:46px;border-radius:8px;font-family:${T.head};font-weight:700;font-size:.92rem;text-decoration:none;text-align:center}
.mbar .m1{background:${T.yellow};color:${T.navy}}.mbar .m2{border:2px solid #fff;color:#fff}
.cta{padding-bottom:calc(96px + env(safe-area-inset-bottom))}
}
@media(max-width:600px){
.sec{padding:56px 5%}
.hero{padding:28px 5% 48px}.hero::before{width:5px}
.crumbs{margin-bottom:20px}
.btn{display:block;text-align:center}
.row{padding:24px 20px;gap:22px}.row h3{font-size:1.3rem}
.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.stats b{font-size:1.8rem}
.pb{padding:20px 18px}.meta{grid-template-columns:minmax(0,1fr)}
.acts .bro{flex:1 1 100%}
.cta-b,.cta-b .btn{width:100%}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
`;

/* Hero graphic: desktop only.
   On screens <= 860px the <source> swaps in a 1x1 transparent GIF so the SVG is never downloaded,
   and CSS (.hero-art) hides the element as well. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const Art = () => (
  <picture className="hero-art">
    <source media="(max-width: 860px)" srcSet={BLANK} />
    <img src="/novatech-training.svg" alt="NovaTech Innovative Solutions: IoT and embedded systems training, internships and R&D" width="600" height="600" fetchPriority="high" decoding="async" />
  </picture>
);

const Meta = ({ m }) => {
  const rows = [["Duration", m.duration], ["Mode", m.mode], ["Fee", m.fee && /^\d+$/.test(m.fee) ? "₹" + Number(m.fee).toLocaleString("en-IN") : m.fee], ["Next start", m.start]].filter((r) => r[1]);
  if (!rows.length) return <p className="note">Duration, mode, fee and start date are shared when you enquire. No obligation.</p>;
  return <dl className="meta">{rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>;
};

const Training = () => (
  <main id="top">
    <style>{CSS}</style>
    <Seo />

    <section className="hero" aria-labelledby="t-h">
           <div className="hero-in">
        <div>
          <p className="badge">Two batches running now</p>
          <h1 className="h1" id="t-h">IoT &amp; Embedded Systems <em>Training with Internships</em></h1>
          <p className="lead">Learn by building. NovaTech runs project-based courses in embedded systems and IoT, with PCB design and research mentoring on demand, plus workshops, bootcamps and guided internships.</p>
          <ul className="pts">
            <li>Build a real project in every course</li>
            <li>Download the brochure and see the details before you commit</li>
            <li>We reply to every enquiry within 24 hours</li>
          </ul>
          <a href={WA} className="btn btn-y" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
          <a href="#batches" className="btn btn-o">See courses and batches</a>
        </div>
        <Art />
      </div>
    </section>

    <section className="sec dark" style={{ padding: "44px 5%" }} aria-label="Training at a glance">
      <div className="stats">{STATS.map(([n, l]) => (<div key={l}><b>{n}</b><span>{l}</span></div>))}</div>
    </section>

    <section className="sec" id="batches" aria-labelledby="b-h">
      <div className="in">
        <h2 className="h2" id="b-h">IoT, embedded systems, PCB design and research courses</h2>
        <p className="sub">Two batches are running now and two more start on demand. Check what you will learn and who each course is for, then download the brochure or message us for the schedule, format and fees.</p>
        <div className="pgrid">
          {BATCHES.map((b) => {
            const live = b.status === "active";
            const id = slug(b.name);
            return (
              <article className={"pc " + (live ? "live" : "od")} key={b.name} id={id}>
                {b.img ? <img src={b.img} alt={`${b.name} banner`} width="640" height="360" loading="lazy" decoding="async" /> : <div className="ph" aria-hidden="true"><Ico n={b.icon} /></div>}
                <div className="pb">
                  <p className={"tag" + (live ? "" : " od")}>{live ? "Active batch" : "On demand"}</p>
                  <h3>{b.name}</h3>
                  <p>{b.text}</p>
                  <h4>What you will learn</h4>
                  <ul className="learn">{b.learn.map((x) => <li key={x}>{x}</li>)}</ul>
                  <p className="who"><strong>Who it is for:</strong> {b.who}</p>
                  <p className="who"><strong>You will build:</strong> {b.build}</p>
                  <Meta m={b.meta} />
                  <ul className="chips" aria-label="Topics covered">{b.chips.map((c) => <li key={c}>{c}</li>)}</ul>
                  <div className="acts">
                    <a className="bro" href={wa((live ? "Hello, I want to join the " : "Hello, I want to request the ") + b.name + " batch at NovaTech.")} target="_blank" rel="noopener noreferrer">{live ? "Enrol on WhatsApp" : "Request this batch"}</a>
                    {live && b.brochure && (
                      <a className="bro bro-o" href={b.brochure} target="_blank" rel="noopener noreferrer">Brochure (PDF)</a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="sec dark" aria-labelledby="y-h">
      <div className="in">
        <h2 className="h2" id="y-h">Why learn with NovaTech</h2>
        <p className="sub">Training that sits next to real IoT and embedded product work.</p>
        <div className="why">{WHY.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}</div>
      </div>
    </section>

    <section className="sec light" id="ways" aria-labelledby="w-h">
      <div className="in">
        <h2 className="h2" id="w-h">Workshops, bootcamps and internships</h2>
        <p className="sub">Choose a batch, join an internship, or bring a workshop to your college.</p>
        <div className="rows">
          {WAYS.map((w) => (
            <article className="row" key={w.title}>
              <div>
                <div className="ico"><Ico n={w.icon} /></div>
                <h3>{w.title}</h3>
                <p className="pitch">{w.pitch}</p>
                <p className="best"><strong>Best for:</strong> {w.best}</p>
                <a className="plink" href={w.href}>{w.cta} →</a>
              </div>
              <ul className="svcs">{w.svcs.map(([n, d]) => (<li key={n}><b>{n}</b><span>{d}</span></li>))}</ul>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>Need help with a final-year project or research paper? See our <a className="plink" href="/research-development">research and development support</a>, or browse <a className="plink" href="/projects">projects we have built</a>.</p>
      </div>
    </section>

    <section className="sec" aria-labelledby="j-h">
      <div className="in">
        <h2 className="h2" id="j-h">How to join a batch</h2>
        <ol className="steps">{STEPS.map(([t, d]) => (<li key={t}><h3>{t}</h3><p>{d}</p></li>))}</ol>
      </div>
    </section>

    <section className="sec light" id="faq" aria-labelledby="f-h">
      <div className="in">
        <h2 className="h2" id="f-h">Training and internships: frequently asked questions</h2>
        <div className="faq">{FAQS.map(([q, a]) => (<details key={q}><summary>{q}</summary><p>{a}</p></details>))}</div>
      </div>
    </section>

    <section className="cta" aria-labelledby="c-h">
      <div className="cta-in">
        <div>
          <h2 id="c-h">Ready to start learning?</h2>
          <p>We reply within 24 hours. Or explore our <a href="/solutions">IoT, web and app solutions</a> to see what we build.</p>
        </div>
        <div className="cta-b">
          <a href={WA} className="btn btn-n" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
          <a href="/contact" className="btn btn-o">Use the contact form</a>
        </div>
      </div>
    </section>

    <div className="mbar">
      <a className="m1" href={WA} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
      <a className="m2" href="#batches">See courses</a>
    </div>
  </main>
);

export default Training;