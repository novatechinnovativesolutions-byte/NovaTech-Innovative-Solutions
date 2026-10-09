import React from "react";

/* NovaTech IS — combined About + Services page (route: /about).
   Same tokens/head handling as Home.jsx (React 19 hoists <title>/<meta>; on React 18 wrap <Seo/> in react-helmet-async <Helmet>).
   Pillar hrefs match the routes used on the Home page. */

const SITE = "https://www.novatechinnovative.com";
const PAGE = SITE + "/about";
const TITLE = "NovaTech IS | IoT, AI/ML Solutions, Training & R&D in India";
const DESC = "NovaTech Innovative Solutions builds IoT and AI/ML products, trains students and supports research. See our services, projects, mission and founder.";
const OG_IMAGE = SITE + "/og-image.png";
const LINKEDIN = "https://www.linkedin.com/in/chandramouli01/";
const WA = "https://wa.me/918336001208?text=" + encodeURIComponent("Hello, I want to discuss a project with NovaTech!");
const EM = "mailto:chandramoulihaldar@gmail.com";

const T = { navy: "#07091c", blue: "#1346e8", blueLight: "#e8effe", yellow: "#f5c518", off: "#f7f8fc", border: "#e4e8f0", text: "#111827", muted: "#5b6472", head: "'Syne', sans-serif", body: "'DM Sans', sans-serif" };

const PILLARS = [
  { id: "solutions", icon: "chip", href: "/features", cta: "Explore Solutions", title: "Hardware & Software Solutions", pitch: "Practical technology, from prototype to product.", best: "Start-ups, small businesses and individuals.",
    svcs: [["IoT and embedded systems", "Sensors, firmware and connected devices that work in the field."], ["PCB design and prototyping", "Custom boards and testable prototypes."], ["AI/ML and Edge AI", "Models that run on the device, including TinyML."], ["Web and mobile apps", "MERN, Java and Flutter apps built around your users."], ["Automation, robotics, cybersecurity", "Smart systems for real-world use."]] },
  { id: "training", icon: "grad", href: "/training", cta: "Explore Training", title: "Student Training & Internships", pitch: "Skills built by doing real work.", best: "Students, graduates and colleges.",
    svcs: [["Training and bootcamps", "IoT, AI/ML, embedded, robotics and full-stack."], ["Internships", "Guided, project-based learning."], ["College workshops and hackathons", "Beyond-curriculum training for universities."]] },
  { id: "research", icon: "flask", href: "/lab", cta: "Explore R&D", title: "Research & Development", pitch: "Ideas turned into research outcomes.", best: "Researchers, academics and industry partners.",
    svcs: [["Proofs of concept", "Test an idea before a full build."], ["AI, IoT and embedded research", "Including industry-sponsored work."], ["Project mentoring", "Thesis, paper and patent documentation guidance."], ["Publications", "Books, chapters, lab manuals and workshop material."]] },
];

const PROJECTS = [
  ["IoT Fire Alarm System", "IoT · Safety", "/img/gasSmoke.jpeg", "MQ-2 and DHT11 sensing with instant alerts and a buzzer.", ["ESP8266", "MQ-2", "Blynk"]],
  ["IoT Solar Charging Bag", "IoT · Green Tech", "/img/solarbag.jpeg", "MPPT charging with a real-time energy dashboard.", ["ESP32", "MPPT", "MQTT"]],
  ["Secret Morse Communication", "Embedded · Security", "/img/morsecode.png", "Encodes and decodes messages over RF and LED.", ["Arduino", "RF", "LCD"]],
];

const TRAIN = [["/img/surtech.jpg", "IoT and embedded systems training: students working with NodeMCU and sensors", "IoT & ES Beyond Curriculum Training"], ["/img/jisce.png", "VLSI and embedded training session in an engineering college lab", "VLSI Beyond Curriculum Training"]];

const FEEDBACK = [["/img/client1.jpeg", "Written feedback from a student for a completed 7th semester personal project", "Completed Personal Project for 7th Semester"], ["/img/client2.jpeg", "Written feedback from a student for a final year project and research paper", "Complete Final Year Project + Research Paper"]];

const STEPS = [["Share your idea", "Tell us what to build, learn or research. Consultation is free."], ["Get a clear plan", "Plan, timeline and pricing within 24 hours."], ["Build with milestones", "Regular updates keep you in the loop."], ["Deliver", "From validation to final deployment."]];

// VERIFY: publish only figures you can back up.
const STATS = [["20+", "Projects delivered"], ["200+", "Students trained"], ["5+", "Universities reached"], ["24h", "Typical reply time"]];

// VERIFY: use only real, permitted testimonials (full name/consent preferred). Empty the array to hide.
const QUOTES = [["Built a complete IoT attendance system for my final-year project, from hardware to report and presentation.", "Rohan M.", "Final-year B.Tech student"], ["Delivered a working TinyML health-monitoring prototype for my thesis within the deadline.", "Priya S.", "M.Tech research scholar"], ["The embedded systems workshop was hands-on and clear. I built my first IoT project in two days.", "Sneha D.", "Diploma student, Electronics"]];

const PATHS = { chip: "M7 7h10v10H7zM9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3", grad: "M22 10 12 5 2 10l10 5zM22 10v6M6 12v5c3 3 9 3 12 0v-5", flask: "M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7.5 15h9" };
const Ico = ({ n }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>);

/* Hero graphic: shown on desktop only.
   On screens <= 860px the <source> swaps in a 1x1 transparent GIF so the SVG is never downloaded,
   and CSS (.hero-art) hides the element as well. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const Hero3 = () => (
  <picture className="hero-art">
    <source media="(max-width: 860px)" srcSet={BLANK} />
    <img src="/novatech-services.svg" alt="NovaTech Innovative Solutions: Solutions, Training and R&D" fetchPriority="high" decoding="async" />
  </picture>
);

const Seo = () => {
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": SITE + "/#org", name: "NovaTech Innovative Solutions", alternateName: "NovaTech IS", url: SITE, slogan: "From Ideas to Innovation", description: DESC, areaServed: { "@type": "Country", name: "India" }, founder: { "@id": SITE + "/#founder" } },
    { "@type": "WebSite", "@id": SITE + "/#website", name: "NovaTech Innovative Solutions", url: SITE, inLanguage: "en-IN", publisher: { "@id": SITE + "/#org" } },
    { "@type": "Person", "@id": SITE + "/#founder", name: "Chandramouli Haldar", jobTitle: "Founder & CEO", image: SITE + "/CEO_DP.jpg", sameAs: [LINKEDIN], worksFor: { "@id": SITE + "/#org" } },
    ...PILLARS.map((p) => ({ "@type": "Service", "@id": SITE + p.href + "#service", name: p.title, description: p.pitch + " " + p.svcs.map((x) => x[0]).join(", ") + ".", url: SITE + p.href, provider: { "@id": SITE + "/#org" }, areaServed: { "@type": "Country", name: "India" } })),
    { "@type": "ItemList", name: "NovaTech featured projects", itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p[0], description: p[3], image: SITE + p[2] })) },
    { "@type": "AboutPage", "@id": PAGE + "#webpage", url: PAGE, name: TITLE, description: DESC, inLanguage: "en-IN", isPartOf: { "@id": SITE + "/#website" }, about: { "@id": SITE + "/#org" }, mainEntity: { "@id": SITE + "/#org" }, breadcrumb: { "@id": PAGE + "#breadcrumb" } },
    { "@type": "BreadcrumbList", "@id": PAGE + "#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: "About", item: PAGE }] },
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
    <meta property="og:image:alt" content="NovaTech Innovative Solutions: IoT, AI/ML solutions, training and R&D" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={TITLE} /><meta name="twitter:description" content={DESC} /><meta name="twitter:image" content={OG_IMAGE} />
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;700&display=swap" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  </>);
};

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{font-family:${T.body};color:${T.text};line-height:1.65;background:#fff}a{color:inherit}
main{overflow-x:clip}
:focus-visible{outline:3px solid ${T.blue};outline-offset:3px}
.dark :focus-visible{outline-color:${T.yellow}}
.sec{padding:88px 5%}.in{max-width:1200px;margin:auto}.light{background:${T.off}}.dark{background:${T.navy}}
.h2{font-family:${T.head};font-weight:800;color:${T.navy};font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.18;letter-spacing:-.025em;margin-bottom:14px;overflow-wrap:break-word}
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
.lead{color:${T.muted};font-weight:300;font-size:1.05rem;max-width:560px;margin-bottom:28px}
.hero-art{display:block;width:100%;max-width:440px;margin:auto;min-width:0}.hero-art img{display:block;width:100%;height:auto}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(180px,100%),1fr));gap:18px;max-width:1200px;margin:auto}
.stats div{border-left:3px solid ${T.yellow};padding:4px 0 4px 18px}.stats b{display:block;font-family:${T.head};font-size:2.2rem;color:#fff}.stats span{color:rgba(255,255,255,.78);font-size:.88rem}
.rows{display:flex;flex-direction:column;gap:26px;margin-top:44px}
.row{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:44px;background:#fff;border:1px solid ${T.border};border-left:6px solid ${T.blue};border-radius:20px;padding:36px}
.row:nth-child(2){border-left-color:${T.yellow}}.row:nth-child(3){border-left-color:${T.navy}}
.ico{width:64px;height:64px;border-radius:18px;background:${T.blueLight};color:${T.blue};display:flex;align-items:center;justify-content:center}.ico svg{width:34px;height:34px}
.row h3{font-family:${T.head};font-size:1.5rem;color:${T.navy};margin:14px 0 8px}.best{font-size:.9rem;margin:12px 0 16px}
.svcs{list-style:none;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px}.svcs li{border-left:3px solid ${T.yellow};padding-left:14px}
.svcs b{display:block;font-family:${T.head};font-size:.98rem;color:${T.navy}}.svcs span{font-size:.87rem;color:${T.muted}}
.pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:24px;margin-top:44px}
.pc{background:#fff;border:1px solid ${T.border};border-radius:20px;overflow:hidden;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s}
.pc:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(19,70,232,.14)}
.pc img{width:100%;aspect-ratio:16/9;object-fit:cover;background:${T.blueLight};display:block}
.pb{padding:22px;display:flex;flex-direction:column;flex:1}.tag{font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${T.blue};margin-bottom:6px}
.pb h3{font-family:${T.head};font-size:1.1rem;color:${T.navy};margin-bottom:6px}.pb p{color:${T.muted};font-size:.9rem;flex:1;margin-bottom:12px}
.pb .tag{flex:none;margin-bottom:6px;font-size:.72rem;color:${T.blue}}
.chips{display:flex;flex-wrap:wrap;gap:6px;list-style:none}.chips li{background:${T.blueLight};color:${T.blue};border-radius:100px;padding:3px 11px;font-size:.75rem;font-weight:700}
.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:24px;margin-top:40px}
.tg figure{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/9;background:${T.navy}}.tg img{width:100%;height:100%;object-fit:cover;display:block}
.tg figcaption{position:absolute;inset:auto 0 0;padding:40px 20px 16px;background:linear-gradient(transparent,rgba(7,9,28,.92));color:#fff;font-family:${T.head};font-weight:700}
.steps{list-style:none;counter-reset:s;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:20px;margin-top:40px}
.steps li{counter-increment:s;background:${T.off};border:1px solid ${T.border};border-radius:16px;padding:24px}
.steps li::before{content:counter(s);display:flex;width:34px;height:34px;border-radius:50%;background:${T.blue};color:#fff;font-weight:700;align-items:center;justify-content:center;margin-bottom:12px}
.steps h3{font-family:${T.head};font-size:1.05rem;color:${T.navy};margin-bottom:6px}.steps p{font-size:.9rem;color:${T.muted}}
.qs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr));gap:22px;margin-top:40px}
.q{background:#fff;border:1px solid ${T.border};border-radius:18px;padding:26px}.q blockquote{color:${T.text};font-size:.95rem;margin-bottom:14px}.q b{font-family:${T.head};color:${T.navy}}.q span{display:block;color:${T.muted};font-size:.82rem}
.mv{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);background:${T.navy};border-radius:20px;overflow:hidden;margin-top:40px}
.mv>div{padding:36px 32px}.mv>div+div{border-left:1px solid rgba(255,255,255,.1)}.mv h3{font-family:${T.head};color:${T.yellow};margin-bottom:10px}.mv p{color:rgba(255,255,255,.8);font-size:.95rem}
.founder{display:grid;grid-template-columns:300px minmax(0,1fr);gap:56px;align-items:start;max-width:1200px;margin:auto}
.fcard{background:#fff;border:1px solid ${T.border};border-radius:20px;padding:32px;text-align:center}.fcard img{border-radius:50%;border:3px solid ${T.yellow};object-fit:cover;margin:0 auto 14px;display:block}
.fname{font-family:${T.head};font-size:1.17rem;font-weight:700;color:${T.navy}}.fcard .role{color:${T.blue};font-weight:700;font-size:.85rem;margin:4px 0 14px}.fcard div{display:flex;justify-content:center;gap:22px}
.fmsg{display:flex;flex-direction:column;gap:18px}.fmsg p{color:${T.muted};font-weight:300}
.quote{background:${T.navy};border-radius:16px;padding:24px 28px}.quote q{font-family:${T.head};font-size:1.1rem;font-weight:600;color:#fff;quotes:none;display:block}.quote cite{display:block;margin-top:10px;color:${T.yellow};font-weight:600;font-size:.85rem;font-style:normal}
.cta{background:${T.yellow};padding:52px 5%}.cta-in{max-width:1200px;margin:auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:22px}
.cta h2{font-family:${T.head};font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:${T.navy}}.cta p{color:rgba(10,15,46,.8)}.btn-n{background:${T.navy};color:#fff}
@media(max-width:860px){
.hero-in,.founder,.mv,.row,.svcs{grid-template-columns:minmax(0,1fr);gap:28px}
.hero-art{display:none}
.mv>div+div{border-left:none;border-top:1px solid rgba(255,255,255,.1)}
.btn-o{margin:12px 0 0}
.fcard{max-width:380px;width:100%;margin:0 auto}
.crumbs{margin-bottom:24px}
}
@media(max-width:600px){
.sec{padding:60px 5%}
.hero{padding:32px 5% 56px}.hero::before{width:5px}
.btn{display:block;text-align:center}
.row{padding:24px 20px;gap:22px}.row h3{font-size:1.3rem}
.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.stats b{font-size:1.8rem}
.mv>div{padding:26px 22px}
.tg figcaption{padding:32px 16px 12px;font-size:.92rem}
.cta{padding:40px 5%}.cta-in .btn{width:100%}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
`;

const AboutServices = () => (
  <main id="top">
    <style>{CSS}</style>
    <Seo />

    <section className="hero" aria-labelledby="about-h">
      <div className="hero-in">
        <div>
          <p className="badge">From Ideas to Innovation</p>
          <h1 className="h1" id="about-h">About NovaTech: <em>IoT, AI/ML Solutions, Training &amp; R&amp;D</em></h1>
          <p className="lead">NovaTech Innovative Solutions is one team for practical hardware and software solutions, hands-on student training and research support. Based in India, we turn ideas into working products, skills and publications.</p>
          <a href={WA} className="btn btn-y">Get a free consultation</a>
          <a href="#services" className="btn btn-o">See our services</a>
        </div>
        <Hero3 />
      </div>
    </section>

    {STATS.length > 0 && (
      <section className="dark" style={{ padding: "44px 5%" }} aria-label="NovaTech at a glance">
        <div className="stats">{STATS.map(([n, l]) => (<div key={l}><b>{n}</b><span>{l}</span></div>))}</div>
      </section>
    )}

    <section className="sec" id="services" aria-labelledby="svc-h">
      <div className="in">
        <h2 className="h2" id="svc-h">Our services: three pillars, one team</h2>
        <p className="sub">Each pillar has its own page with full details, pricing and examples.</p>
        <div className="rows">
          {PILLARS.map((p) => (
            <article className="row" key={p.id} id={p.id}>
              <div>
                <div className="ico"><Ico n={p.icon} /></div>
                <h3>{p.title}</h3>
                <p className="sub">{p.pitch}</p>
                <p className="best"><strong>Best for:</strong> {p.best}</p>
                <a className="plink" href={p.href}>{p.cta} →</a>
              </div>
              <ul className="svcs">{p.svcs.map(([n, d]) => (<li key={n}><b>{n}</b><span>{d}</span></li>))}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sec light" id="projects" aria-labelledby="proj-h">
      <div className="in">
        <h2 className="h2" id="proj-h">Featured projects we have built</h2>
        { <p className="sub">A sample of our IoT, embedded and AI work. </p> } 
        <div className="pgrid">
          {PROJECTS.map(([t, tag, img, d, stack]) => (
            <article className="pc" key={t}>
              <img src={img} alt={`${t}: ${tag} project by NovaTech`} loading="lazy" decoding="async" width="600" height="338" />
              <div className="pb">
                <p className="tag">{tag}</p><h3>{t}</h3><p>{d}</p>
                <ul className="chips" aria-label="Technologies used">{stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sec" aria-labelledby="how-h">
      <div className="in">
        <h2 className="h2" id="how-h">How we work with you</h2>
        <ol className="steps">{STEPS.map(([t, d]) => (<li key={t}><h3>{t}</h3><p>{d}</p></li>))}</ol>
      </div>
    </section>

    <section className="sec light" id="training-gallery" aria-labelledby="tr-h">
      <div className="in">
        <h2 className="h2" id="tr-h">Hands-on training across engineering colleges</h2>
        <p className="sub">Project-based IoT, embedded and AI/ML workshops for students. <a className="plink" href="/training">See training programs</a></p>
        <div className="tg">{TRAIN.map(([src, alt, cap]) => (<figure key={cap}><img src={src} alt={alt} loading="lazy" decoding="async" width="800" height="450" /><figcaption>{cap}</figcaption></figure>))}</div>
      </div>
    </section>

    {QUOTES.length > 0 && (
      <section className="sec" aria-labelledby="rev-h">
        <div className="in">
          <h2 className="h2" id="rev-h">What students and clients say</h2>
          <div className="qs">{QUOTES.map(([q, n, r]) => (<figure className="q" key={n}><blockquote>“{q}”</blockquote><figcaption><b>{n}</b><span>{r}</span></figcaption></figure>))}</div>
          <div className="tg">{FEEDBACK.map(([src, alt, cap]) => (<figure key={cap}><img src={src} alt={alt} loading="lazy" decoding="async" width="800" height="450" /><figcaption>{cap}</figcaption></figure>))}</div>
        </div>
      </section>
    )}

    <section className="sec light" aria-labelledby="mv-h">
      <div className="in">
        <h2 className="h2" id="mv-h">Our mission and vision</h2>
        <div className="mv">
          <div><h3>Mission</h3><p>To bridge the gap between education, technology and research by delivering innovative hardware and software solutions, practical industry-relevant training, and R&amp;D support, empowering students, researchers, institutions and businesses to turn ideas into practical solutions.</p></div>
          <div><h3>Vision</h3><p>To become a trusted technology and research organization in India, fostering a culture of innovation, learning and scientific advancement, and strengthening the connection between academia, industry and research.</p></div>
        </div>
      </div>
    </section>

    <section className="sec" id="founder" aria-labelledby="ceo-h">
      <div className="founder">
        <div className="fcard">
          <img src="/CEO_DP.jpg" alt="Portrait of Chandramouli Haldar, Founder and CEO of NovaTech" width="130" height="130" loading="lazy" decoding="async" />
          <p className="fname">Chandramouli Haldar</p><p className="role">Founder &amp; CEO</p>
          <div><a className="plink" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="plink" href={EM}>Email</a></div>
        </div>
        <div className="fmsg">
          <h2 className="h2" id="ceo-h">Message from the Founder</h2>
          <p>At NovaTech our mission is clear: empower students, startups and industries with solutions that combine creativity, technology and education. We don't just build projects; we build futures.</p>
          <p>Every idea gets the same care, whether it is a student's first IoT prototype or a company's next product. We work on transparency, mentorship and genuine care for every client and student.</p>
          <blockquote className="quote"><q>Your ideas, our innovation. Together we build the future.</q><cite>Chandramouli Haldar, Founder &amp; CEO</cite></blockquote>
        </div>
      </div>
    </section>

    <section className="cta" aria-labelledby="cta-h">
      <div className="cta-in">
        <div><h2 id="cta-h">Ready to build, learn or research with us?</h2><p>Consultation is free. Tell us about your idea.</p></div>
        <a href="/contact" className="btn btn-n">Contact NovaTech</a>
      </div>
    </section>
  </main>
);

export default AboutServices;