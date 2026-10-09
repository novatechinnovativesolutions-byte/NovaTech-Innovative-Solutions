import React from "react";

/* NovaTech IS — Solutions page (route: /solutions). Same tokens/head handling as Home.jsx and AboutServices.jsx.
   No prices on this page. Customers request a quote through the buttons. Edit content in the data arrays below;
   they feed both the page and the JSON-LD structured data.
   Item names are the generic terms people search for. An optional 5th value adds a "NovaTech build" product name. */

const SITE = "https://www.novatechinnovative.com";
const PAGE = SITE + "/solutions";
const TITLE = "IoT, Web & App Development Services in India | NovaTech IS";
const DESC = "NovaTech builds IoT systems, websites, mobile apps and Edge AI products in India: smart home, RFID attendance, e-commerce and custom PCB. Free quote in 24h.";
const OG_IMAGE = SITE + "/og-image.png";
const WA = "https://wa.me/918336001208?text=" + encodeURIComponent("Hello, I want a quote for a solution from NovaTech!");

const T = { navy: "#07091c", blue: "#1346e8", blueLight: "#e8effe", yellow: "#f5c518", off: "#f7f8fc", border: "#e4e8f0", text: "#111827", muted: "#5b6472", head: "'Syne', sans-serif", body: "'DM Sans', sans-serif" };

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// [name, description, quoteNote, includes[], optional NovaTech product name]
const GROUPS = [
  { id: "iot", tab: "IoT & Embedded", icon: "chip", title: "IoT & Embedded Systems Development", intro: "Connected devices with sensors, firmware, a dashboard and alerts, delivered as a working product.", items: [
    ["Smart Home Automation System", "Control lights, fans and appliances from a mobile app or remote, with security sensing.", "per setup", ["ESP32 or Arduino controller", "Relay and sensor modules", "Mobile app control"]],
    ["Smoke & Gas Leak Detection System", "IoT fire and gas alarm with smoke, gas and temperature detection, a buzzer and instant phone alerts.", "per unit", ["MQ-2 and DHT11 sensing", "WhatsApp or SMS alerts", "Cloud dashboard"], "IoT Fire Alarm System"],
    ["RFID Attendance System", "Card-based attendance logging live to Google Sheets with records and notifications.", "per system", ["MFRC522 reader", "Google Sheets logging", "Admin records"]],
    ["Smart Irrigation & Soil Monitoring System", "Soil moisture sensing and automated watering with a cloud dashboard for farms and gardens.", "per kit", ["Soil moisture sensors", "Pump automation", "Web or mobile dashboard"]],
    ["Custom IoT Product & PCB Design", "Your own idea taken from schematic and PCB design to firmware and a tested prototype.", "per prototype", ["PCB design", "Firmware", "Testing and handover"]],
    ["Edge AI & TinyML Development", "Machine learning that runs on the device: detection, monitoring and alerts without a cloud.", "per prototype", ["Model training", "On-device deployment", "Documentation"]],
  ] },
  { id: "web", tab: "Websites & Web Apps", icon: "web", title: "Website Design & Web Application Development", intro: "Fast, SEO-ready websites and full-stack web apps for individuals, institutions and companies.", items: [
    ["Portfolio Website Design", "A clean, responsive personal website for a student, researcher or professional.", "per site", ["Up to 5 pages", "Mobile-friendly design", "Basic SEO setup"]],
    ["Business Website Development", "A professional company website that explains your services and brings in enquiries.", "per site", ["Up to 10 pages", "SEO-optimized structure", "Contact and WhatsApp links"]],
    ["E-Commerce Website Development", "Online store with catalogue, cart, payments and order management for a growing shop.", "per store", ["Product and order admin", "Payment gateway setup", "Responsive storefront"]],
    ["Management System Development (MERN or Java)", "College, restaurant and internship management software for orders, records, results and billing.", "per system", ["Role-based login", "Admin dashboard", "Database and reports"]],
  ] },
  { id: "mobile", tab: "Mobile Apps", icon: "phone", title: "Mobile App Development (Android & iOS)", intro: "Android and iOS apps, including apps that control your IoT devices.", items: [
    ["Flutter Mobile App Development", "A cross-platform Android and iOS app for your business, startup or project.", "per app", ["Android and iOS from one codebase", "Clean UI design", "API integration"]],
    ["IoT Mobile App Development", "A companion app to monitor and control your hardware over Wi-Fi, Bluetooth or MQTT.", "per app", ["Live sensor data", "Device control", "Alerts"]],
  ] },
  { id: "innovative", tab: "Innovative Products", icon: "spark", title: "Innovative IoT & Robotics Products", intro: "Products we designed ourselves. Buy them as they are, or have them customised.", items: [
    ["Solar-Powered Smart Backpack", "A solar charging bag with MPPT charging, USB output and a battery-health dashboard.", "per unit", ["Solar panel and MPPT", "USB-C and USB-A output", "Energy dashboard"], "IoT Solar Charging Bag"],
    ["AI Voice & Face Recognition Robot", "Speech recognition, face detection and mobile control in one interactive robot.", "per robot", ["Speech and vision", "Servo handshake", "Bluetooth app"], "AI Voice Interactive Robot"],
    ["Wearable Health Monitoring System", "Monitoring of heart rate, SpO2 and temperature with a live dashboard and alerts.", "per prototype", ["Multi-sensor vitals", "Live dashboard", "Alert logic"]],
    ["Secure RF Communication Device", "Message encoding and decoding over RF and LED channels for private communication.", "per pair", ["RF module", "LCD and keypad", "Encode and decode"]],
  ] },
];

const POPULAR = ["Smart Home Automation System", "RFID Attendance System", "Smoke & Gas Leak Detection System", "Smart Irrigation & Soil Monitoring System", "Custom IoT Product & PCB Design", "Business Website Development", "E-Commerce Website Development", "Flutter Mobile App Development"];

const STEPS = [["Share your idea", "Tell us what to build. Consultation is free."], ["Get a clear quote", "Plan, timeline and final quote within 24 hours."], ["Build with milestones", "Regular updates and demos."], ["Deliver and support", "Testing, handover and help after delivery."]];

const FAQ = [
  ["How much does an IoT project cost?", "The cost depends on the sensors, hardware, features and timeline. Simple devices such as alarms and automation are quick to build, while custom devices with PCB design and firmware take more work. Tell us what you need and we send a fixed written quote within 24 hours."],
  ["Can I get a custom version of a listed solution?", "Yes. Every solution here can be customised for your sensors, features, branding or budget."],
  ["Which platforms do you use for IoT development?", "We build with ESP32, ESP8266, Arduino and Raspberry Pi, and connect devices to dashboards and mobile apps over Wi-Fi, Bluetooth or MQTT."],
  ["Can you build a website and a mobile app together?", "Yes. We can build a website, a mobile app and the IoT devices behind them as one project, so everything works together."],
  ["How long does a project take?", "Small IoT builds and websites often take one to three weeks. Larger apps and custom hardware take longer, and you get a timeline with the quote."],
  ["Do you support student and college projects?", "Yes. We build and guide IoT, AI and web projects for final-year and semester students. See our student project mentoring and training pages for guided projects, reports and workshops."],
];

const PATHS = { chip: "M7 7h10v10H7zM9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3", web: "M3 5h18v14H3zM3 9h18M6 7h.01M9 7h.01", phone: "M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2", spark: "M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z" };
const Ico = ({ n }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>);

/* Hero graphic: desktop only.
   On screens <= 860px the <source> swaps in a 1x1 transparent GIF so the SVG is never downloaded,
   and CSS (.hero-art) hides the element as well. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const Hero4 = () => (
  <picture className="hero-art">
    <source media="(max-width: 860px)" srcSet={BLANK} />
    <img src="/novatech-services2.svg" alt="NovaTech Innovative Solutions: IoT, web and mobile app solutions, training and R&D" width="600" height="500" fetchPriority="high" decoding="async" />
  </picture>
);

const Seo = () => {
  const offers = GROUPS.map((g) => ({ "@type": "Service", "@id": PAGE + "#" + g.id, name: g.title, description: g.intro, serviceType: g.title, provider: { "@id": SITE + "/#org" }, areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: { "@type": "OfferCatalog", name: g.title, itemListElement: g.items.map(([n, d]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: d, provider: { "@id": SITE + "/#org" } } })) } }));
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": SITE + "/#org", name: "NovaTech Innovative Solutions", alternateName: "NovaTech IS", url: SITE, address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" }, areaServed: { "@type": "Country", name: "India" } },
    { "@type": "WebSite", "@id": SITE + "/#website", url: SITE, name: "NovaTech Innovative Solutions", publisher: { "@id": SITE + "/#org" }, inLanguage: "en-IN" },
    ...offers,
    { "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@type": "WebPage", "@id": PAGE + "#webpage", url: PAGE, name: TITLE, description: DESC, inLanguage: "en-IN", isPartOf: { "@id": SITE + "/#website" }, about: { "@id": SITE + "/#org" }, breadcrumb: { "@id": PAGE + "#breadcrumb" } },
    { "@type": "BreadcrumbList", "@id": PAGE + "#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: PAGE }] },
  ] };
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
    <meta property="og:image:alt" content="NovaTech Innovative Solutions: IoT, website and mobile app development" />
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
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.sec{padding:80px 5%;scroll-margin-top:64px}.in{max-width:1200px;margin:auto}.light{background:${T.off}}
.h2{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.5rem,3vw,2.3rem);line-height:1.18;letter-spacing:-.025em;margin-bottom:12px;overflow-wrap:break-word}
.sub{color:${T.muted};max-width:680px;font-weight:300}
.btn{display:inline-block;padding:12px 26px;border-radius:8px;font-weight:700;font-size:.95rem;text-decoration:none;font-family:${T.head};transition:transform .15s}
.btn:hover{transform:translateY(-2px)}.btn-y{background:${T.yellow};color:${T.navy}}.btn-n{background:${T.navy};color:#fff}.btn-o{border:2px solid ${T.navy};color:${T.navy};margin-left:10px}
.hero{background:linear-gradient(135deg,#eef3ff,#fff 62%);border-bottom:1px solid ${T.border};padding:56px 5% 72px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;inset:0 auto 0 0;width:8px;background:linear-gradient(${T.blue},${T.yellow})}
.crumbs{max-width:1200px;margin:0 auto 34px;font-size:.85rem;color:${T.muted}}.crumbs ol{list-style:none;display:flex;flex-wrap:wrap;gap:8px}.crumbs li+li::before{content:"/";margin-right:8px}.crumbs a{text-decoration:none;display:inline-block;padding:8px 0}.crumbs a:hover{text-decoration:underline}
.hero-in{max-width:1200px;margin:auto;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.badge{display:inline-block;background:${T.blueLight};border:1px solid #c2d0f8;border-radius:100px;padding:5px 14px;font-size:.8rem;font-weight:700;color:${T.blue};margin-bottom:18px}
.h1{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.9rem,3.8vw,3.1rem);line-height:1.1;letter-spacing:-.035em;margin-bottom:18px;overflow-wrap:break-word}
.h1 em{font-style:normal;background:linear-gradient(90deg,${T.blue},#6a8cff);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:${T.muted};font-weight:300;font-size:1.05rem;max-width:560px;margin-bottom:26px}
.hero-art{display:block;width:100%;max-width:420px;margin:auto;min-width:0;filter:drop-shadow(0 20px 40px rgba(19,70,232,.15))}.hero-art img{display:block;width:100%;height:auto}
.tabs{position:sticky;top:0;z-index:5;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid ${T.border};padding:10px 5%}
.tabs ul{max-width:1200px;margin:auto;list-style:none;display:flex;gap:10px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:thin}
.tabs a{display:flex;align-items:center;min-height:44px;white-space:nowrap;padding:8px 18px;border-radius:100px;border:1px solid ${T.border};font-weight:700;font-size:.85rem;text-decoration:none;color:${T.navy};font-family:${T.head}}
.tabs a:hover{background:${T.blueLight};border-color:#c2d0f8}
.pop{list-style:none;display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.pop a{display:inline-flex;align-items:center;min-height:44px;padding:8px 16px;border-radius:100px;background:#fff;border:1px solid ${T.border};font-size:.88rem;font-weight:700;color:${T.blue};text-decoration:none}
.pop a:hover{background:${T.blueLight};border-color:#c2d0f8}
.ghead{display:flex;align-items:center;gap:18px;margin-bottom:10px}
.ico{flex:none;width:60px;height:60px;border-radius:18px;background:${T.blueLight};color:${T.blue};display:flex;align-items:center;justify-content:center}.ico svg{width:32px;height:32px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:22px;margin-top:36px}
.card{background:#fff;border:1px solid ${T.border};border-top:4px solid ${T.blue};border-radius:18px;padding:26px;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s;scroll-margin-top:72px}
.card:nth-child(even){border-top-color:${T.yellow}}.card:hover{transform:translateY(-5px);box-shadow:0 16px 44px rgba(19,70,232,.13)}
.card h3{font-family:${T.head};font-size:1.12rem;color:${T.navy};margin-bottom:6px;overflow-wrap:break-word}.card>p{color:${T.muted};font-size:.9rem;margin-bottom:14px}
.card>.brand{color:${T.blue};font-size:.8rem;font-weight:700;margin:-2px 0 8px}
.card ul{list-style:none;margin-bottom:18px;flex:1}.card li{font-size:.88rem;padding-left:22px;position:relative;margin-bottom:4px}.card li::before{content:"✓";position:absolute;left:0;color:${T.blue};font-weight:700}
.price{border-top:1px dashed ${T.border};padding-top:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.price small{color:${T.muted};font-size:.8rem;display:block}.price b{font-family:${T.head};font-size:1.05rem;color:${T.navy}}
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
}
@media(max-width:600px){
.sec{padding:56px 5%}
.hero{padding:28px 5% 48px}.hero::before{width:5px}
.crumbs{margin-bottom:20px}
.btn{display:block;text-align:center}
.ico{width:48px;height:48px;border-radius:14px}.ico svg{width:26px;height:26px}.ghead{gap:12px}
.card{padding:22px 20px}
.cta{padding:40px 5%}.cta .btn{width:100%}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
`;

const Solutions = () => (
  <main id="top">
    <style>{CSS}</style>
    <Seo />

    <section className="hero" aria-labelledby="sol-h">
           <div className="hero-in">
        <div>
          <p className="badge">Free quote within 24 hours</p>
          <h1 className="h1" id="sol-h">IoT, Web &amp; Mobile App <em>Development Services</em></h1>
          <p className="lead">From smart home automation, RFID attendance and fire alarm systems to company websites, e-commerce stores and Flutter mobile apps, NovaTech builds practical solutions in India and sends you a clear written quote before we start.</p>
          <a href="/contact" className="btn btn-y">Get a free quote</a>
          <a href={WA} className="btn btn-o" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
        <Hero4 />
      </div>
    </section>

    <nav className="tabs" aria-label="Solution categories">
      <ul>{GROUPS.map((g) => <li key={g.id}><a href={"#" + g.id}>{g.tab}</a></li>)}</ul>
    </nav>

    <section className="sec" aria-labelledby="pop-h">
      <div className="in">
        <h2 className="h2" id="pop-h">Popular IoT, website and app requests</h2>
        <p className="sub">Jump straight to the solution people ask us for most.</p>
        <ul className="pop">{POPULAR.map((n) => <li key={n}><a href={"#" + slug(n)}>{n}</a></li>)}</ul>
      </div>
    </section>

    {GROUPS.map((g, gi) => (
      <section key={g.id} id={g.id} className={"sec" + (gi % 2 === 0 ? " light" : "")} aria-labelledby={g.id + "-h"}>
        <div className="in">
          <div className="ghead"><div className="ico"><Ico n={g.icon} /></div><h2 className="h2" id={g.id + "-h"} style={{ margin: 0 }}>{g.title}</h2></div>
          <p className="sub">{g.intro}</p>
          <div className="grid">
            {g.items.map(([n, d, note, inc, brand]) => (
              <article className="card" key={n} id={slug(n)}>
                <h3>{n}</h3>
                {brand && <p className="brand">NovaTech product: {brand}</p>}
                <p>{d}</p>
                <ul aria-label={"What is included in " + n}>{inc.map((x) => <li key={x}>{x}</li>)}</ul>
                <div className="price"><div><b>Free quote</b><small>{note}</small></div><a className="quote" href={"/contact?solution=" + encodeURIComponent(n)}>Get a quote<span className="sr"> for {n}</span> →</a></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ))}

    <section className="sec" aria-labelledby="how-h">
      <div className="in">
        <h2 className="h2" id="how-h">How ordering works</h2>
        <ol className="steps">{STEPS.map(([t, d]) => (<li key={t}><h3>{t}</h3><p>{d}</p></li>))}</ol>
        <p className="note"><strong>About quotes:</strong> the final cost depends on features, hardware, number of pages or screens and timeline. You get a fixed written quote before we begin, with no commitment.</p>
      </div>
    </section>

    <section className="sec light" aria-labelledby="faq-h">
      <div className="in">
        <h2 className="h2" id="faq-h">IoT, web and app development: common questions</h2>
        <div className="faq">{FAQ.map(([q, a]) => (<details key={q}><summary>{q}</summary><p>{a}</p></details>))}</div>
        <nav className="links" aria-label="Related pages">
          <a href="/about">About NovaTech</a><a href="/projects">See our projects</a><a href="/training">Student training</a><a href="/research-development">Research &amp; development</a>
        </nav>
      </div>
    </section>

    <section className="cta" aria-labelledby="cta-h">
      <div className="cta-in">
        <div><h2 id="cta-h">Have a device, app or website in mind?</h2><p>Tell us what you need. We reply within 24 hours with a plan and a quote.</p></div>
        <a href="/contact" className="btn btn-n">Request a quote</a>
      </div>
    </section>
  </main>
);

export default Solutions;