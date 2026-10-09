import React, { useEffect, useId, useState } from "react";

/* NovaTech IS — Home page, restyled to the same design system as AboutServices.jsx and Solutions.jsx.
   SEO tags use React 19 head hoisting. On React 18 or lower, wrap <Seo/> output in react-helmet-async's <Helmet>. */

const SITE = "https://www.novatechinnovative.com";
const FORM_URL = "https://docs.google.com/forms/d/1Z5UN_RCFAV1hdX7gVK2Pj8TiJzTuFK0zOgxCAflycRE/formResponse";

const T = { navy: "#07091c", navyMid: "#0d1236", blue: "#1346e8", blueLight: "#e8effe", yellow: "#f5c518", off: "#f7f8fc", border: "#e4e8f0", text: "#111827", muted: "#5b6472", head: "'Syne', sans-serif", body: "'DM Sans', sans-serif" };

const PILLARS = [
  { icon: "chip", href: "/features", name: "Build", title: "Hardware & Software Solutions", lead: "Practical technology solutions, from prototype to product.",
    items: ["IoT and embedded systems development", "PCB design, prototyping and sensor integration", "AI/ML and Edge AI solutions", "Web and mobile application development", "Automation, robotics and cybersecurity"], cta: "Explore Solutions" },
  { icon: "grad", href: "/training", name: "Learn", title: "Student Training & Internships", lead: "Practical skills and technical talent.",
    items: ["Training in IoT, AI/ML, embedded systems, robotics and full-stack development", "Hands-on workshops and bootcamps", "Project-based learning and internships", "College workshops, technical events and hackathons"], cta: "Explore Training" },
  { icon: "flask", href: "/lab", name: "Discover", title: "Research & Development", lead: "Ideas turned into innovations and research outcomes.",
    items: ["Proof-of-concept and prototype development", "AI, IoT and embedded systems research", "Industry-sponsored research projects", "Project mentoring, technical editing and research support", "Books, lab manuals and conference proceedings"], cta: "Explore R&D" },
];

const LOOP = [
  ["R&D feeds Solutions", "Proofs of concept and prototypes grow into products and client solutions."],
  ["Solutions feed Training", "Real projects become hands-on learning and internship work."],
  ["Training feeds R&D", "Trained talent and student projects move into research and publications."],
];

const AUDIENCES = [
  ["Students and graduates", "Training, internships, project mentoring and technical skills.", "/training"],
  ["Researchers and academics", "Research support, data analysis, technical editing and publishing.", "/lab"],
  ["Colleges and universities", "Workshops, laboratory projects and R&D collaborations.", "/training"],
  ["Start-ups and small businesses", "Software development, IoT solutions, prototyping and technical consulting.", "/features"],
  ["Individuals", "Personal projects, web pages, custom software or hardware.", "/features"],
];

const WHY = [
  ["One team, three disciplines", "The people who build your product also train and research, so nothing gets handed off between separate businesses."],
  ["End-to-end guidance", "From idea validation to final deployment, for students and businesses alike."],
  ["Clear pricing and communication", "A plan, a timeline and honest pricing before you commit."],
  ["Regular milestones", "Consistent updates and on-time delivery."],
];

const TECH = [
  // Embedded Systems & IoT
  "Embedded C",
  "Arduino",
  "ESP32",
  "Raspberry Pi",
  "STM32",
  "MQTT",
  "IoT Sensors",
  "PCB Design",

  // AI, ML & Computer Vision
  "Python",
  "Machine Learning",
  "TensorFlow",
  "OpenCV",
  "Computer Vision",
  "TinyML",
  "Edge AI",

  // Web & Mobile Development
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MERN Stack",
  "React Native",

  // Robotics & Connected Systems
  "Robotics",
  "Automation",
  "Edge Computing",
  "Sensor Integration",
];

const FAQS = [
  ["What does NovaTech Innovative Solutions offer?", "Three connected services under one brand: hardware and software solutions, student training and internships, and research and development services including academic support and publications."],
  ["Do you run workshops for colleges?", "Yes. We run college workshops, technical events and hackathons in areas such as IoT, AI/ML, embedded systems, robotics and full-stack development."],
  ["Do you help with final-year projects?", "Yes. We offer project mentoring, from idea validation and prototyping to implementation guidance and technical editing."],
  ["Who are NovaTech's services for?", "Students and graduates, researchers and academics, colleges and universities, start-ups and small businesses, and individuals with personal software or hardware projects."],
  ["What is NovaTech's mission?", "To bridge the gap between education, technology and research by delivering hardware and software solutions, practical industry-relevant training, and R&D support."],
  ["How do I get started?", "Fill in the contact form below. We respond within 24 hours with a clear plan, timeline and pricing, with no commitment required."],
];

const TITLE = "IoT & AI/ML Solutions, Training and R&D | NovaTech IS";
const DESC = "NovaTech Innovative Solutions builds IoT, embedded and AI/ML solutions, trains students through workshops and internships, and supports R&D. Free consultation.";
const OG_IMAGE = SITE + "/og-image.png";

const Seo = () => {
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": SITE + "/#org", name: "NovaTech Innovative Solutions", alternateName: "NovaTech IS", url: SITE, slogan: "From Ideas to Innovation", description: DESC, areaServed: { "@type": "Country", name: "India" },
      address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
      knowsAbout: ["IoT", "Embedded systems", "AI and machine learning", "Edge AI", "PCB design and prototyping", "Robotics and automation", "Cybersecurity", "Full-stack development", "Technical training", "Research and development"],
      hasOfferCatalog: { "@type": "OfferCatalog", name: "NovaTech IS services", itemListElement: PILLARS.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: p.title, description: p.lead, url: SITE + p.href } })) } },
    { "@type": "WebSite", "@id": SITE + "/#website", name: "NovaTech Innovative Solutions", url: SITE, inLanguage: "en-IN", publisher: { "@id": SITE + "/#org" } },
    { "@type": "WebPage", "@id": SITE + "/#webpage", url: SITE + "/", name: TITLE, description: DESC, inLanguage: "en-IN", isPartOf: { "@id": SITE + "/#website" }, about: { "@id": SITE + "/#org" } },
    { "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ] };
  return (<>
    <title>{TITLE}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={DESC} />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#07091c" />
    <link rel="canonical" href={SITE + "/"} />
    <meta property="og:type" content="website" /><meta property="og:title" content={TITLE} /><meta property="og:description" content={DESC} /><meta property="og:url" content={SITE + "/"} />
    <meta property="og:site_name" content="NovaTech Innovative Solutions" /><meta property="og:locale" content="en_IN" /><meta property="og:image" content={OG_IMAGE} />
    <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="NovaTech Innovative Solutions: IoT, AI/ML solutions, training and R&D" />
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
.dark :focus-visible,.panel :focus-visible{outline-color:${T.yellow}}
.sec{padding:88px 5%}.in{max-width:1200px;margin:auto}.light{background:${T.off}}.dark{background:${T.navy}}
.h2{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.18;letter-spacing:-.025em;margin-bottom:14px;overflow-wrap:break-word}
.sub{color:${T.muted};max-width:640px;font-weight:300}
.dark .h2{color:#fff}.dark .sub{color:rgba(255,255,255,.7)}
.btn{display:inline-block;padding:13px 28px;border-radius:8px;font-weight:700;font-size:.95rem;text-decoration:none;font-family:${T.head};transition:transform .15s}
.btn:hover{transform:translateY(-2px)}.btn-y{background:${T.yellow};color:${T.navy}}.btn-o{border:2px solid ${T.navy};color:${T.navy};margin-left:10px}
.plink{display:inline-block;padding:10px 0;font-weight:700;color:${T.blue};text-decoration:none}.plink:hover{text-decoration:underline}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

.hero{background:linear-gradient(135deg,#eef3ff,#fff 62%);border-bottom:1px solid ${T.border};padding:88px 5%;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0 auto 0 0;width:8px;background:linear-gradient(${T.blue},${T.yellow})}
.hero-in{max-width:1200px;margin:auto;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.badge{display:inline-block;background:${T.blueLight};border:1px solid #c2d0f8;border-radius:100px;padding:5px 14px;font-size:.8rem;font-weight:700;color:${T.blue};margin-bottom:18px}
.h1{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(2rem,4vw,3.4rem);line-height:1.1;letter-spacing:-.035em;margin-bottom:18px;min-height:2.4em;overflow-wrap:break-word}
.lead{color:${T.muted};font-weight:300;font-size:1.05rem;max-width:560px;margin-bottom:28px}
.typed{background:linear-gradient(90deg,${T.blue},#6a8cff);-webkit-background-clip:text;background-clip:text;color:transparent}
.caret{display:inline-block;width:3px;height:.9em;background:${T.blue};margin-left:4px;vertical-align:-.1em;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.hero-vis{display:flex;flex-direction:column;gap:16px;min-width:0}
.gcard{background:#fff;border:1px solid ${T.border};border-radius:20px;padding:26px 28px;box-shadow:0 18px 50px rgba(19,70,232,.1)}
.gcard p{color:${T.muted}}
.cyc{font-family:${T.head};font-size:clamp(2rem,3.6vw,2.8rem);font-weight:800;color:${T.blue};line-height:1.1;margin-bottom:8px}
.pills{display:flex;flex-wrap:wrap;gap:7px;list-style:none}
.pills li{font-size:.8rem;font-weight:700;color:${T.blue};background:${T.blueLight};border-radius:100px;padding:4px 12px}

.pillars{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:22px;margin-top:44px}
.pillar{background:#fff;border:1px solid ${T.border};border-top:5px solid ${T.blue};border-radius:20px;padding:32px 28px;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s}
.pillar:nth-child(2){border-top-color:${T.yellow}}.pillar:nth-child(3){border-top-color:${T.navy}}
.pillar:hover{transform:translateY(-5px);box-shadow:0 16px 44px rgba(19,70,232,.13)}
.ico{width:64px;height:64px;border-radius:18px;background:${T.blueLight};color:${T.blue};display:flex;align-items:center;justify-content:center;margin-bottom:18px}.ico svg{width:34px;height:34px}
.pname{font-weight:700;color:${T.blue};font-size:.85rem;margin-bottom:6px}
.pillar h3{font-family:${T.head};font-size:1.3rem;color:${T.navy};margin-bottom:8px}
.pillar>p{color:${T.muted};margin-bottom:16px}
.pillar ul{list-style:none;display:flex;flex-direction:column;gap:9px;margin-bottom:24px;flex:1}
.pillar li{font-size:.9rem;padding-left:14px;border-left:3px solid ${T.yellow}}

.show{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:28px;margin-top:40px;align-items:stretch}
.tabs{list-style:none;display:flex;flex-direction:column;gap:6px;min-width:0}
.tabs button{width:100%;min-height:44px;text-align:left;background:#fff;border:1px solid ${T.border};border-radius:12px;padding:11px 16px;font:600 .92rem ${T.body};color:${T.navy};cursor:pointer;display:flex;gap:12px;align-items:center;transition:border-color .2s,background .2s}
.tabs button:hover{border-color:${T.blue}}.tabs button span{font-size:.75rem;font-weight:700;color:${T.blue};min-width:62px}
.tabs button.on{background:${T.navy};color:#fff;border-color:${T.navy}}.tabs button.on span{color:${T.yellow}}
.panel{background:${T.navy};border-radius:20px;padding:38px 34px;position:relative;min-height:320px;min-width:0;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;overflow:hidden}
.panel .pname{color:${T.yellow}}.panel h3{font-family:${T.head};color:#fff;font-size:1.65rem;line-height:1.2;margin-bottom:12px;overflow-wrap:break-word}
.panel p{color:rgba(255,255,255,.78);max-width:480px;margin-bottom:24px}.panel p.pname{margin-bottom:6px;color:${T.yellow}}
.pp{position:absolute;top:12px;right:14px;min-height:44px;min-width:44px;background:none;border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:100px;padding:6px 16px;font-size:.8rem;cursor:pointer}
.bar{position:absolute;left:0;bottom:0;height:3px;width:100%;background:${T.yellow};transform-origin:left;animation:fill 6.5s linear both}
@keyframes fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}

.loop{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));margin-top:40px;border:1px solid rgba(255,255,255,.14);border-radius:20px;overflow:hidden}
.loop>div{padding:30px 28px;border-right:1px solid rgba(255,255,255,.14)}.loop>div:last-child{border-right:none}
.loop h3{font-family:${T.head};color:${T.yellow};font-size:1.05rem;margin-bottom:8px}.loop p{color:rgba(255,255,255,.72);font-size:.92rem}

.aud{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:16px;margin-top:40px}
.aud a{background:#fff;border:1px solid ${T.border};border-left:4px solid ${T.yellow};border-radius:16px;padding:24px;text-decoration:none;display:block;transition:border-color .2s,transform .2s}
.aud a:hover{border-color:${T.blue};transform:translateY(-3px)}.aud h3{font-family:${T.head};font-size:1rem;color:${T.navy};margin-bottom:6px}.aud p{font-size:.86rem;color:${T.muted}}

.duo{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:22px;margin-top:40px}
.duo>div{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:20px;padding:32px}
.duo h3{font-family:${T.head};color:#fff;font-size:1.3rem;margin-bottom:10px}.duo p{color:rgba(255,255,255,.72);margin-bottom:18px}

.mv{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);background:${T.navy};border-radius:20px;overflow:hidden;margin-top:40px}
.mv>div{padding:36px 32px}.mv>div+div{border-left:1px solid rgba(255,255,255,.1)}.mv h3{font-family:${T.head};color:${T.yellow};margin-bottom:10px}.mv p{color:rgba(255,255,255,.78);font-size:.95rem}

.why{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:18px;margin-top:40px}
.why div{border-left:3px solid ${T.yellow};padding:4px 0 4px 18px}.why h3{font-family:${T.head};font-size:1rem;color:${T.navy};margin-bottom:6px}.why p{font-size:.88rem;color:${T.muted}}

.faq{max-width:780px;margin:36px auto 0;display:flex;flex-direction:column;gap:12px}
.faq-i{border:1px solid ${T.border};border-radius:14px;overflow:hidden;background:#fff}
.faq-q{width:100%;min-height:48px;padding:18px 22px;background:none;border:none;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;font-family:${T.head};font-size:.98rem;font-weight:700;color:${T.navy}}
.faq-q span{flex-shrink:0;font-size:1.2rem}
.faq-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s}.faq-i.open .faq-a{grid-template-rows:1fr}
.faq-a>div{overflow:hidden}.faq-a p{padding:0 22px 20px;color:${T.muted};font-size:.92rem}

.contact{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:64px;max-width:1200px;margin:auto;align-items:start}
.contact ul{list-style:none;display:flex;flex-direction:column;gap:10px;color:rgba(255,255,255,.82);font-size:.92rem}
.contact li::before{content:"\\2713";color:${T.yellow};font-weight:700;margin-right:10px}
.form{display:flex;flex-direction:column;gap:14px}.row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
.fg{display:flex;flex-direction:column;gap:5px}.fg label{font-size:.82rem;font-weight:700;color:rgba(255,255,255,.8)}
.fg input,.fg select,.fg textarea{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.28);border-radius:8px;padding:11px 14px;min-height:44px;color:#fff;font:inherit;font-size:1rem;width:100%}
.fg textarea{min-height:110px;resize:vertical}.fg option{background:${T.navyMid}}.fg input::placeholder,.fg textarea::placeholder{color:rgba(255,255,255,.6)}
.send{align-self:flex-start;min-height:48px;background:${T.yellow};color:${T.navy};border:none;border-radius:8px;padding:13px 30px;font-family:${T.head};font-weight:700;font-size:.95rem;cursor:pointer}.send:hover{opacity:.9}

.fade{animation:rise .7s ease both}@keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:860px){
.hero-in,.duo,.contact,.show,.mv{grid-template-columns:minmax(0,1fr);gap:32px}
.hero-vis .gcard:first-child{display:none}
.row{grid-template-columns:minmax(0,1fr)}
.mv>div+div{border-left:none;border-top:1px solid rgba(255,255,255,.1)}
.loop{grid-template-columns:minmax(0,1fr)}.loop>div{border-right:none;border-bottom:1px solid rgba(255,255,255,.14)}.loop>div:last-child{border-bottom:none}
.h1{min-height:3.6em}
.tabs{flex-direction:row;overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch}.tabs li{flex:0 0 auto}.tabs button{white-space:nowrap;width:auto}
.panel{min-height:280px;padding-top:64px}
.btn-o{margin:12px 0 0}
}
@media(max-width:600px){
.sec,.hero{padding:60px 5%}
.hero::before{width:5px}
.h1{min-height:4.4em}
.panel{padding:64px 22px 34px}.panel h3{font-size:1.4rem}
.pillar{padding:26px 22px}.duo>div,.mv>div{padding:26px 22px}.loop>div{padding:24px 22px}
.faq-q{padding:16px 18px}.faq-a p{padding:0 18px 18px}
.btn{display:block;text-align:center}.btn-o{margin-top:12px}.panel .btn{display:inline-block}
.send{width:100%;align-self:stretch}
}
@media(prefers-reduced-motion:reduce){.fade,.caret,.bar{animation:none}html{scroll-behavior:auto}*{transition:none!important}}
`;

const PATHS = {
  chip: "M7 7h10v10H7zM9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3",
  grad: "M22 10 12 5 2 10l10 5zM22 10v6M6 12v5c3 3 9 3 12 0v-5",
  flask: "M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7.5 15h9",
};
const Ico = ({ n }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>);

const Faq = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`faq-i${open ? " open" : ""}`}>
      <h3><button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>{q}<span aria-hidden="true">{open ? "−" : "+"}</span></button></h3>
      <div className="faq-a" id={id} role="region" aria-label={q}><div><p>{a}</p></div></div>
    </div>
  );
};

/* Animated text (respects prefers-reduced-motion) */
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const useCycle = (n, ms, paused = false) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused || reduced() || n < 2) return;
    const t = setTimeout(() => setI((v) => (v + 1) % n), ms);
    return () => clearTimeout(t);
  }, [n, ms, paused, i]);
  return [i, setI];
};

const Typed = ({ words }) => {
  const [w, setW] = useState(0);
  const [txt, setTxt] = useState(() => (reduced() ? words[0] : ""));
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (reduced()) { setTxt(words[0]); return; }
    const full = words[w];
    if (del && txt === "") { setDel(false); setW((w + 1) % words.length); return; }
    const wait = !del && txt === full ? 1700 : del ? 32 : 65;
    const t = setTimeout(() => {
      if (!del && txt === full) setDel(true);
      else setTxt(full.slice(0, txt.length + (del ? -1 : 1)));
    }, wait);
    return () => clearTimeout(t);
  }, [txt, del, w, words]);
  return <span className="typed">{txt}<span className="caret" aria-hidden="true" /></span>;
};

const Write = ({ text, speed = 16 }) => {
  const [n, setN] = useState(() => (reduced() ? text.length : 0));
  useEffect(() => {
    if (reduced()) { setN(text.length); return; }
    setN(0);
    const t = setInterval(() => setN((v) => (v >= text.length ? v : v + 1)), speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return (<><span className="sr">{text}</span><span aria-hidden="true">{text.slice(0, n)}</span></>);
};

const PHRASES = ["build IoT and embedded solutions.", "create AI and Edge AI systems.", "train tomorrow's engineers.", "turn research into innovation.", "take ideas to innovation."];

const CYCLE = [["Build", "Hardware and software solutions, from prototype to product."], ["Learn", "Hands-on training, workshops and internships."], ["Discover", "Research, proofs of concept and publications."]];
const Cycler = () => {
  const [i] = useCycle(CYCLE.length, 2600);
  return (<div key={i} className="fade"><div className="cyc">{CYCLE[i][0]}</div><p>{CYCLE[i][1]}</p></div>);
};

const SERVICES = [
  ["Build", "IoT and embedded systems solutions", "Connected devices and embedded systems, developed from sensors to firmware to a working product.", "/features"],
  ["Build", "PCB design and prototyping", "Custom PCB design, sensor integration and fast prototypes, so ideas become hardware you can test.", "/features"],
  ["Build", "AI/ML Solutions", "Machine learning and Edge AI solutions, including intelligence that runs on the device itself.", "/features"],
  ["Build", "Web and mobile apps", "Web and mobile applications built around your users and your data.", "/features"],
  ["Learn", "Training and bootcamps", "Hands-on training in IoT, AI/ML, embedded systems, robotics and full-stack development.", "/training"],
  ["Learn", "Internships and project-based learning", "Learn by building real projects through guided internships.", "/training"],
  ["Learn", "College workshops and hackathons", "Workshops, technical events and hackathons for colleges and universities.", "/training"],
  ["Discover", "Proofs of concept and prototypes", "Test an idea with a proof of concept before committing to a full build.", "/lab"],
  ["Discover", "Research support and publishing", "Project mentoring, technical editing, patent documentation support, plus books, lab manuals and proceedings.", "/lab"],
];
const LINK_TEXT = { "/features": "Explore Solutions", "/training": "Explore Training", "/lab": "Explore R&D" };

const Showcase = () => {
  const [hov, setHov] = useState(false);
  const [hold, setHold] = useState(false);
  const paused = hov || hold;
  const [i, setI] = useCycle(SERVICES.length, 6500, paused);
  const [group, title, text, href] = SERVICES[i];
  return (
    <div className="show" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onFocus={() => setHov(true)} onBlur={() => setHov(false)}>
      <ul className="tabs">
        {SERVICES.map(([g, t], k) => (
          <li key={t}><button className={k === i ? "on" : ""} aria-current={k === i ? "true" : undefined} onClick={() => setI(k)}><span>{g}</span>{t}</button></li>
        ))}
      </ul>
      <div className="panel" key={i}>
        <button className="pp" onClick={() => setHold(!hold)} aria-pressed={hold}>{hold ? "Play" : "Pause"}</button>
        <p className="pname">{group}</p>
        <h3><Write text={title} speed={28} /></h3>
        <p><Write text={text} /></p>
        <a className="btn btn-y" href={href}>{LINK_TEXT[href]}</a>
        {!paused && <div className="bar" aria-hidden="true" />}
      </div>
    </div>
  );
};

const Home = () => (
  <main id="top">
    <style>{CSS}</style>
    <Seo />

    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-in">
        <div className="fade">
          <p className="badge">From Ideas to Innovation</p>
          <h1 className="h1" id="hero-h">
            <span className="sr">NovaTech Innovative Solutions: IoT and AI/ML solutions, student training and R&D in one technology ecosystem</span>
            <span aria-hidden="true">We <Typed words={PHRASES} /></span>
          </h1>
          <p className="lead">NovaTech Innovative Solutions bridges education, technology and research with practical hardware and software, hands-on training, and R&amp;D services.</p>
          <a href="/features" className="btn btn-y">Explore our services</a>
          <a href="#contact" className="btn btn-o">Get a free consultation</a>
        </div>
        <div className="hero-vis" aria-hidden="true">
          <div className="gcard"><Cycler /></div>
          <div className="gcard"><ul className="pills">{TECH.map((t) => <li key={t}>{t}</li>)}</ul></div>
        </div>
      </div>
    </section>

    <section className="sec" id="pillars" aria-labelledby="pillars-h">
      <div className="in">
        <h2 className="h2" id="pillars-h">Solutions, training and R&amp;D, all under one roof</h2>
        <p className="sub">Every service shares the same team, infrastructure and mission. Pick the one you need, and use the others as they become useful.</p>
        <div className="pillars">
          {PILLARS.map((p) => (
            <article className="pillar" key={p.title}>
              <div className="ico"><Ico n={p.icon} /></div>
              <p className="pname">{p.name}</p>
              <h3>{p.title}</h3>
              <p>{p.lead}</p>
              <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <a className="plink" href={p.href}>{p.cta} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sec light" id="services" aria-labelledby="show-h">
      <div className="in">
        <h2 className="h2" id="show-h">IoT, AI/ML, training and research services</h2>
        <p className="sub">Watch each service appear, or pick one from the list.</p>
        <Showcase />
      </div>
    </section>

    <section className="sec dark" aria-labelledby="eco-h">
      <div className="in">
        <h2 className="h2" id="eco-h">How the pillars work together</h2>
        <p className="sub">NovaTech is one organization, not three separate divisions. Each pillar makes the others stronger.</p>
        <div className="loop">{LOOP.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}</div>
      </div>
    </section>

    <section className="sec" aria-labelledby="aud-h">
      <div className="in">
        <h2 className="h2" id="aud-h">Who we work with: students, colleges, researchers and businesses</h2>
        <p className="sub">Choose the path that fits you.</p>
        <div className="aud">{AUDIENCES.map(([t, d, h]) => (<a key={t} href={h}><h3>{t}</h3><p>{d}</p></a>))}</div>
      </div>
    </section>

    <section className="sec dark" aria-labelledby="spot-h">
      <div className="in">
        <h2 className="h2" id="spot-h">Student training, internships and R&amp;D</h2>
        <p className="sub">Training and R&amp;D are core services, not add-ons.</p>
        <div className="duo">
          <div><h3>Student Training &amp; Internships</h3><p>Workshops, bootcamps, project-based learning and internships in IoT, AI/ML, embedded systems, robotics and full-stack development.</p><a href="/training" className="btn btn-y">View training</a></div>
          <div><h3>Research &amp; Development</h3><p>Proofs of concept, AI and IoT research, industry-sponsored projects, research support, and publications such as books and lab manuals.</p><a href="/lab" className="btn btn-y">View R&amp;D</a></div>
        </div>
      </div>
    </section>

    <section className="sec light" aria-labelledby="mv-h">
      <div className="in">
        <h2 className="h2" id="mv-h">Our mission and vision</h2>
        <div className="mv">
          <div><h3>Mission</h3><p>To bridge the gap between education, technology and research by delivering innovative hardware and software solutions, practical industry-relevant training, and support for research and development.</p></div>
          <div><h3>Vision</h3><p>To become a trusted and recognized technology and research organization in India, fostering a culture of innovation, learning and scientific advancement.</p></div>
        </div>
        <p style={{ marginTop: 28 }}><a className="plink" href="/about">About NovaTech Innovative Solutions →</a></p>
      </div>
    </section>

    <section className="sec" aria-labelledby="why-h">
      <div className="in">
        <h2 className="h2" id="why-h">Why choose NovaTech Innovative Solutions</h2>
        <div className="why">{WHY.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}</div>
      </div>
    </section>

    <section className="sec light" id="faq" aria-labelledby="faq-h">
      <div className="in" style={{ textAlign: "center" }}><h2 className="h2" id="faq-h">Frequently asked questions about NovaTech IS</h2></div>
      <div className="faq">{FAQS.map(([q, a]) => <Faq key={q} q={q} a={a} />)}</div>
    </section>

    <section className="sec dark" id="contact" aria-labelledby="contact-h">
      <div className="contact">
        <div>
          <h2 className="h2" id="contact-h">Tell us what you want to build, learn or research</h2>
          <p className="sub" style={{ marginBottom: 24 }}>We reply within 24 hours with a clear plan, timeline and pricing.</p>
          <p style={{ marginBottom: 20 }}><a className="plink" style={{ color: T.yellow }} href="/contact">See all ways to contact NovaTech</a></p>
          <ul>
            <li>Free consultation, no obligation</li>
            <li>Support for students, colleges, businesses and researchers</li>
            <li>One team across solutions, training and R&amp;D</li>
          </ul>
        </div>
        <form className="form" action={FORM_URL} method="POST" target="_blank" aria-label="Contact NovaTech Innovative Solutions">
          <div className="row">
            <div className="fg"><label htmlFor="f-name">Name *</label><input id="f-name" name="entry.1345170053" type="text" placeholder="Your full name" required autoComplete="name" /></div>
            <div className="fg"><label htmlFor="f-phone">Phone</label><input id="f-phone" name="entry.1254174415" type="tel" placeholder="+91 00000 00000" autoComplete="tel" /></div>
          </div>
          <div className="fg"><label htmlFor="f-email">Email *</label><input id="f-email" name="entry.585538982" type="email" placeholder="you@example.com" required autoComplete="email" /></div>
          <div className="fg"><label htmlFor="f-svc">I am interested in</label>
            {/* TODO: replace "entry.service" with this field's real Google Form entry ID, otherwise this answer is not saved */}
            <select id="f-svc" name="entry.service" defaultValue="">
              <option value="">Select an option</option>
              <option>Hardware &amp; software solutions</option>
              <option>Training &amp; internships</option>
              <option>College workshops or events</option>
              <option>Research &amp; development</option>
              <option>Project mentoring &amp; academic support</option>
              <option>Publications</option>
            </select></div>
          <div className="fg"><label htmlFor="f-msg">How can we help?</label><textarea id="f-msg" name="entry.1659687318" placeholder="Describe your project or requirement" /></div>
          <button type="submit" className="send">Send message</button>
        </form>
      </div>
    </section>
  </main>
);

export default Home;