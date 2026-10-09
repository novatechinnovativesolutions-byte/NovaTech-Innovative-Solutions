import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

/* ─────────────────────────────────────────────────────────────
   NovaTech Innovative Solutions — Privacy Policy
   SEO Layers:
   • Helmet: title, meta description, robots, canonical, OG tags
   • JSON-LD WebPage schema with dateModified
   • <main> with role="main", <article> wrapping content
   • h1 → h2 semantic heading hierarchy
   • <address> tag for contact info (local SEO signal)
   • All sections labelled with id for deep-linking
   • Scroll-reveal via IntersectionObserver
   ───────────────────────────────────────────────────────────── */

const EFFECTIVE_DATE = "November 09, 2025";
const CANONICAL_URL  = "https://novatech-is.in/privacy-policy";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy — NovaTech Innovative Solutions",
  description:
    "Read NovaTech Innovative Solutions' Privacy Policy to understand how we collect, use, store, and protect your personal data.",
  url: CANONICAL_URL,
  dateModified: "2025-11-09",
  publisher: {
    "@type": "Organization",
    name: "NovaTech Innovative Solutions",
    url: "https://novatech-is.in",
  },
};

const SECTIONS = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    icon: "📋",
    content: (
      <>
        <p>When you visit our website or use our services, we may collect the following categories of information:</p>
        <ul>
          <li><strong>Identity Data:</strong> Full name, organisation name</li>
          <li><strong>Contact Data:</strong> Email address, phone number, WhatsApp number</li>
          <li><strong>Project Data:</strong> Requirements, service interests, uploaded documents</li>
          <li><strong>Communication Data:</strong> Messages submitted via our contact form or WhatsApp</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, referring URLs, click events</li>
          <li><strong>Cookie Data:</strong> Session cookies, preference cookies, analytics identifiers</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    icon: "⚙️",
    content: (
      <>
        <p>Your information is used exclusively for legitimate business purposes, including:</p>
        <ul>
          <li>Responding to service inquiries and consultation requests</li>
          <li>Delivering software, hardware, and IoT project services</li>
          <li>Providing academic guidance, thesis support, and research consultation</li>
          <li>Sending project updates, status reports, and support communications</li>
          <li>Improving our website performance and user experience</li>
          <li>Maintaining security and preventing fraudulent activity</li>
          <li>Complying with applicable legal and regulatory obligations</li>
          <li>Conducting internal analytics to better understand client needs</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          We do not use your information for automated decision-making or profiling without your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: "services-covered",
    heading: "Services Covered",
    icon: "🛠️",
    content: (
      <>
        <p>This Privacy Policy applies to all services delivered by NovaTech Innovative Solutions, including:</p>
        <div className="npp-service-grid">
          {[
            "Software Development","Web Development","Mobile Applications",
            "Hardware Design","Embedded Systems","IoT Solutions",
            "Artificial Intelligence","Machine Learning","Robotics",
            "TinyML & Edge AI","Research & Development","Academic Project Guidance",
            "Thesis Support","Research Publication Guidance","Technical Consultancy",
            "Training Programs & Workshops","UAV Systems","Computer Vision Projects",
          ].map((s) => (
            <span key={s} className="npp-service-chip">{s}</span>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies & Tracking Technologies",
    icon: "🍪",
    content: (
      <>
        <p>
          We use cookies and similar tracking technologies to improve website performance, remember your preferences,
          analyse visitor traffic, and personalise your experience. The types of cookies we use:
        </p>
        <ul>
          <li><strong>Strictly Necessary:</strong> Required for the website to function — cannot be disabled</li>
          <li><strong>Performance:</strong> Help us understand how visitors interact with our site (e.g. Google Analytics)</li>
          <li><strong>Preference:</strong> Remember settings such as language and region</li>
          <li><strong>Marketing:</strong> Track effectiveness of any promotional content</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          You may disable or delete cookies at any time through your browser settings. Note that disabling certain
          cookies may affect the functionality of our website.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    heading: "Data Protection & Security",
    icon: "🔒",
    content: (
      <>
        <p>
          We take the security of your personal data seriously. We implement appropriate administrative,
          technical, and organisational safeguards to protect your information against:
        </p>
        <ul>
          <li>Unauthorised access, use, or disclosure</li>
          <li>Accidental loss, destruction, or damage</li>
          <li>Unlawful processing or alteration</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Our website is served over HTTPS. However, no online transmission or electronic storage system
          is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          If you believe your data has been compromised, please contact us immediately.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    heading: "Information Sharing & Disclosure",
    icon: "🤝",
    content: (
      <>
        <p>
          <strong>We never sell, rent, or trade your personal information.</strong> Your data may only be
          shared in the following limited circumstances:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> Trusted third-party vendors (hosting, email, analytics) who assist in delivering our services, bound by confidentiality agreements</li>
          <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, with advance notice</li>
          <li><strong>Safety:</strong> To protect the rights, property, or safety of NovaTech, our clients, or the public</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          All third-party service providers are required to handle your data in compliance with applicable
          privacy laws and our data processing standards.
        </p>
      </>
    ),
  },
  {
    id: "academic-disclaimer",
    heading: "Academic & Research Disclaimer",
    icon: "🎓",
    content: (
      <>
        <p>
          NovaTech Innovative Solutions provides academic guidance, research consultation, thesis assistance,
          and publication support services strictly for <strong>educational and research purposes</strong>.
        </p>
        <ul>
          <li>Clients are solely responsible for maintaining academic integrity and adhering to their institution's code of conduct</li>
          <li>Our services provide technical and research support — final work must be submitted and owned by the client</li>
          <li>We do not guarantee grades, publication acceptance, or any specific academic outcomes</li>
          <li>Any misuse of our services in violation of institutional policies is the client's responsibility</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    icon: "⚖️",
    content: (
      <>
        <p>
          Depending on your jurisdiction, you may have the following rights regarding your personal data:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data where applicable</li>
          <li><strong>Restriction:</strong> Request that we limit how we use your data</li>
          <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing or optional communications at any time</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          To exercise any of these rights, please contact us using the details in the Contact section below.
          We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    icon: "🗂️",
    content: (
      <>
        <p>
          We retain your personal data only for as long as necessary to fulfil the purposes for which
          it was collected, or as required by law. Specifically:
        </p>
        <ul>
          <li><strong>Project & Client Data:</strong> Retained for the duration of the project and up to 3 years after completion for support and legal purposes</li>
          <li><strong>Contact Form Submissions:</strong> Retained for up to 12 months or until request resolved</li>
          <li><strong>Analytics Data:</strong> Retained in aggregated, anonymised form indefinitely</li>
          <li><strong>Cookie Data:</strong> Session cookies are deleted when you close your browser; persistent cookies expire as per their set duration</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Upon expiry of the retention period, your data is securely deleted or anonymised.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    heading: "Third-Party Services",
    icon: "🌐",
    content: (
      <>
        <p>
          Our website and services may integrate with the following third-party platforms. Each has their own
          privacy policy which we encourage you to review:
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> Website traffic analysis</li>
          <li><strong>Google Fonts:</strong> Typography loading (may log IP addresses)</li>
          <li><strong>WhatsApp (Meta):</strong> Direct client communication</li>
          <li><strong>GitHub:</strong> Code repository and project hosting</li>
          <li><strong>Firebase / Cloud Hosting:</strong> Backend infrastructure</li>
          <li><strong>Email Service Providers:</strong> Transactional emails</li>
          <li><strong>YouTube:</strong> Embedded educational content</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          NovaTech is not responsible for the privacy practices of third-party services. We recommend
          reviewing their respective policies before using those platforms.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    icon: "👶",
    content: (
      <p>
        Our services are not directed to individuals under the age of 13. We do not knowingly collect
        personal information from children under 13. If you believe a child has provided us with
        personal information, please contact us immediately and we will delete it.
      </p>
    ),
  },
  {
    id: "policy-updates",
    heading: "Policy Updates",
    icon: "🔄",
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our practices, technology,
        or legal requirements. Any significant changes will be posted on this page with an updated
        effective date. We encourage you to review this page regularly. Continued use of our website
        after changes are posted constitutes your acceptance of the updated policy.
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("npp-show");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.07 }
    );
    sectionRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | NovaTech Innovative Solutions</title>
        <meta name="description" content="Read NovaTech Innovative Solutions' Privacy Policy to understand how we collect, use, store, and protect your personal information across all our software, hardware, IoT, and academic services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Privacy Policy | NovaTech Innovative Solutions" />
        <meta property="og:description" content="How NovaTech Innovative Solutions collects, uses, and protects your personal data." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <style>{`
        import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        :root {
          --nt-navy:#10234f; --nt-navy2:#091735; --nt-blue:#2449a8; --nt-sky:#356df3;
          --nt-yellow:#ffd84d; --nt-gold:#f3b82f; --nt-white:#fff; --nt-muted:#5e6b82;
          --nt-border:#e2e8f3; --nt-glass:#fff;
          --font-d:'Plus Jakarta Sans',sans-serif; --font-b:'Manrope',sans-serif;
        }
        .npp-page { position:relative; isolation:isolate; overflow:hidden; min-height:100vh; background:#f5f7fc; color:var(--nt-navy); font-family:var(--font-b); }
        .npp-page,.npp-page * { box-sizing:border-box; }
        .npp-page a { transition:color .2s ease,background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease; }
        .npp-page :focus-visible { outline:3px solid var(--nt-sky); outline-offset:3px; }
        .npp-hero { position:relative; isolation:isolate; overflow:hidden; padding:clamp(4rem,7vw,6.5rem) 2rem clamp(3.5rem,6vw,5rem); text-align:center; color:#fff; background:radial-gradient(ellipse at 50% 0%,rgba(71,116,237,.32),transparent 58%),linear-gradient(135deg,#091735 0%,#102653 55%,#173875 100%); border-bottom:4px solid var(--nt-yellow); }
        .npp-hero::before,.npp-hero::after { content:''; position:absolute; z-index:-1; pointer-events:none; border:1px solid rgba(255,255,255,.09); border-radius:50%; }
        .npp-hero::before { width:520px; height:520px; top:-330px; left:calc(50% - 260px); box-shadow:0 0 0 48px rgba(255,255,255,.025),0 0 0 96px rgba(255,255,255,.02); }
        .npp-hero::after { width:240px; height:240px; right:-120px; bottom:-155px; box-shadow:0 0 0 28px rgba(255,255,255,.025); }
        .npp-hero-inner { position:relative; z-index:1; max-width:760px; margin:0 auto; }
        .npp-eyebrow { display:inline-flex; align-items:center; gap:.55rem; padding:.45rem 1rem; margin-bottom:1.35rem; color:var(--nt-yellow); background:rgba(255,216,77,.1); border:1px solid rgba(255,216,77,.32); border-radius:999px; font-size:.72rem; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
        .npp-eyebrow-dot { width:7px; height:7px; flex:0 0 7px; border-radius:50%; background:var(--nt-yellow); box-shadow:0 0 12px rgba(255,216,77,.65); }
        .npp-h1 { margin:0 0 1.1rem; color:#fff; font-family:var(--font-d); font-size:clamp(2.4rem,5.5vw,4.2rem); font-weight:800; letter-spacing:-.055em; line-height:1.08; overflow-wrap:anywhere; }
        .npp-grad { color:var(--nt-yellow); background:linear-gradient(90deg,#ffe783,var(--nt-yellow),#f5b936); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
        .npp-hero-meta { display:inline-flex; align-items:center; justify-content:center; gap:.55rem; padding:.6rem 1rem; margin-bottom:.5rem; color:rgba(255,255,255,.82); background:rgba(255,255,255,.075); border:1px solid rgba(255,255,255,.16); border-radius:999px; font-size:.8rem; font-weight:600; backdrop-filter:blur(8px); }
        .npp-hero-inner > p { max-width:650px; margin:1.15rem auto 0; color:rgba(255,255,255,.76); font-size:.98rem; line-height:1.85; }
        .npp-hero-inner > p strong { color:#fff; font-weight:800; }
        .npp-layout { display:grid; grid-template-columns:255px minmax(0,1fr); align-items:start; gap:clamp(1.5rem,3.5vw,3.25rem); width:min(1240px,100%); margin:0 auto; padding:clamp(2rem,5vw,4rem) clamp(1.25rem,4vw,2.5rem) 5rem; }
        .npp-toc { position:sticky; top:96px; padding:1.35rem 1rem; background:#fff; border:1px solid var(--nt-border); border-radius:18px; box-shadow:0 12px 35px rgba(16,35,79,.06); }
        .npp-toc-title { padding:0 .6rem 1rem; margin-bottom:.75rem; color:var(--nt-blue); border-bottom:1px solid var(--nt-border); font-family:var(--font-d); font-size:.75rem; font-weight:800; letter-spacing:.11em; text-transform:uppercase; }
        .npp-toc-list { display:flex; flex-direction:column; gap:.25rem; margin:0; padding:0; list-style:none; }
        .npp-toc-btn { display:block; width:100%; padding:.68rem .7rem; color:#5e6b82; background:transparent; border:1px solid transparent; border-radius:10px; font-family:var(--font-b); font-size:.79rem; font-weight:700; line-height:1.45; text-align:left; cursor:pointer; transition:color .2s ease,background .2s ease,border-color .2s ease,transform .2s ease; }
        .npp-toc-btn:hover { color:var(--nt-blue); background:#f0f4ff; border-color:#e0e8ff; transform:translateX(2px); }
        .npp-content { display:flex; flex-direction:column; gap:1.25rem; min-width:0; }
        .npp-sec { position:relative; min-width:0; padding:clamp(1.4rem,3vw,2.15rem); background:#fff; border:1px solid var(--nt-border); border-radius:20px; box-shadow:0 8px 28px rgba(16,35,79,.045); opacity:0; transform:translateY(20px); scroll-margin-top:105px; transition:border-color .25s ease,box-shadow .25s ease,transform .25s ease; }
        .npp-sec.npp-show { animation:npp-up .55s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes npp-up { to { opacity:1; transform:translateY(0); } }
        .npp-sec:hover { border-color:#cbd8fa; box-shadow:0 16px 38px rgba(16,35,79,.075); }
        .npp-sec-header { display:flex; align-items:center; gap:.9rem; padding-bottom:1.1rem; margin-bottom:1.25rem; border-bottom:1px solid #edf0f7; }
        .npp-sec-icon { display:flex; align-items:center; justify-content:center; width:48px; height:48px; flex:0 0 48px; color:var(--nt-blue); background:linear-gradient(145deg,#edf2ff,#e3ebff); border:1px solid #d9e3ff; border-radius:14px; font-size:1.3rem; box-shadow:inset 0 1px 0 rgba(255,255,255,.9); }
        .npp-sec h2 { margin:0; color:var(--nt-navy); font-family:var(--font-d); font-size:clamp(1.05rem,1.7vw,1.25rem); font-weight:800; letter-spacing:-.025em; line-height:1.35; overflow-wrap:anywhere; }
        .npp-sec p { margin-bottom:.85rem; color:#5e6b82; font-size:.92rem; line-height:1.85; overflow-wrap:anywhere; }
        .npp-sec p:last-child { margin-bottom:0; }
        .npp-sec ul { display:flex; flex-direction:column; gap:.65rem; margin:.75rem 0; padding:0; list-style:none; }
        .npp-sec ul li { display:flex; align-items:flex-start; gap:.7rem; color:#526079; font-size:.9rem; line-height:1.7; overflow-wrap:anywhere; }
        .npp-sec ul li::before { content:''; width:7px; height:7px; flex:0 0 7px; margin-top:.58rem; background:var(--nt-sky); border-radius:50%; box-shadow:0 0 0 4px #edf2ff; }
        .npp-sec strong { color:var(--nt-navy); font-weight:800; }
        .npp-service-grid { display:flex; flex-wrap:wrap; gap:.55rem; margin-top:1rem; }
        .npp-service-chip { padding:.45rem .8rem; color:#2449a8; background:#f0f4ff; border:1px solid #dce6ff; border-radius:999px; font-size:.76rem; font-weight:700; line-height:1.4; transition:background .2s ease,border-color .2s ease,transform .2s ease; }
        .npp-service-chip:hover { background:#e4ecff; border-color:#bdceff; transform:translateY(-1px); }
        .npp-contact-card { display:flex; flex-direction:column; gap:1rem; padding:clamp(1.5rem,3vw,2.2rem); background:radial-gradient(circle at 100% 0%,rgba(53,109,243,.18),transparent 45%),linear-gradient(135deg,#10234f,#173875); border:1px solid rgba(53,109,243,.3); border-radius:20px; box-shadow:0 16px 38px rgba(16,35,79,.14); opacity:0; transform:translateY(20px); scroll-margin-top:105px; }
        .npp-contact-card.npp-show { animation:npp-up .55s cubic-bezier(.2,.7,.2,1) forwards; }
        .npp-contact-card h2 { margin:0; color:#fff; font-family:var(--font-d); font-size:1.25rem; font-weight:800; }
        .npp-contact-card p { margin:0; color:rgba(255,255,255,.76); font-size:.92rem; line-height:1.8; }
        .npp-contact-card .npp-sec-icon { background:rgba(255,216,77,.12); border-color:rgba(255,216,77,.25); }
        .npp-contact-card address { color:rgba(255,255,255,.8); font-size:.9rem; line-height:1.9; overflow-wrap:anywhere; }
        .npp-contact-card address strong { color:#fff; }
        .npp-contact-card address a { color:var(--nt-yellow)!important; text-decoration:none; text-underline-offset:3px; }
        .npp-contact-card address a:hover { color:#fff!important; text-decoration:underline; }
        .npp-contact-row { display:flex; flex-wrap:wrap; gap:.75rem; }
        .npp-contact-link { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; min-height:46px; padding:.7rem 1.15rem; border-radius:10px; font-family:var(--font-d); font-size:.85rem; font-weight:800; text-decoration:none; transition:transform .2s ease,box-shadow .2s ease,background .2s ease; }
        .npp-contact-link:hover { transform:translateY(-2px); }
        .npp-contact-link.filled { color:var(--nt-navy); background:var(--nt-yellow); border:1px solid var(--nt-yellow); box-shadow:0 6px 18px rgba(255,216,77,.2); }
        .npp-contact-link.filled:hover { background:#ffe681; box-shadow:0 9px 24px rgba(255,216,77,.3); }
        .npp-contact-link.outline { color:#ffe783; background:rgba(255,255,255,.04); border:1px solid rgba(255,216,77,.48); }
        .npp-contact-link.outline:hover { color:#fff; background:rgba(255,216,77,.1); border-color:var(--nt-yellow); }
        .npp-ack { padding:1.1rem 1.4rem; margin-top:.25rem; color:#68758c; background:#fff; border:1px solid var(--nt-border); border-left:4px solid var(--nt-yellow); border-radius:12px; font-size:.82rem; line-height:1.75; text-align:center; }
        @media (max-width:980px) {
          .npp-layout { grid-template-columns:1fr; gap:1.5rem; }
          .npp-toc { position:static; padding:1.15rem; }
          .npp-toc-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.35rem; }
        }
        @media (max-width:600px) {
          .npp-hero { padding:4rem 1.25rem 3.25rem; }
          .npp-h1 { font-size:clamp(2.25rem,10vw,3.2rem); }
          .npp-hero-inner > p { font-size:.9rem; }
          .npp-layout { padding:1.5rem 1rem 3rem; }
          .npp-toc-list { grid-template-columns:1fr; }
          .npp-sec { padding:1.35rem 1.15rem; border-radius:16px; }
          .npp-sec-header { align-items:flex-start; gap:.75rem; }
          .npp-sec-icon { width:42px; height:42px; flex-basis:42px; border-radius:12px; }
          .npp-sec p,.npp-sec ul li { font-size:.87rem; }
          .npp-contact-card { padding:1.35rem 1.15rem; border-radius:16px; }
          .npp-contact-row { flex-direction:column; }
          .npp-contact-link { width:100%; }
          .npp-ack { padding:1rem; }
        }
        @media (prefers-reduced-motion:reduce) {
          .npp-page *, .npp-page *::before, .npp-page *::after {
            scroll-behavior:auto!important; animation-duration:.01ms!important;
            animation-iteration-count:1!important; transition-duration:.01ms!important;
          }
        }
          
      `}</style>

      <div className="npp-page">

        {/* ── Hero ── */}
        <section className="npp-hero" aria-labelledby="pp-heading">
          <div className="npp-hero-inner">
            <div className="npp-eyebrow">
              <span className="npp-eyebrow-dot" aria-hidden="true" />
              Legal
            </div>
            <h1 className="npp-h1" id="pp-heading">
              Privacy <span className="npp-grad">Policy</span>
            </h1>
            <div className="npp-hero-meta" aria-label={`Effective date: ${EFFECTIVE_DATE}`}>
              🗓️ Effective Date: {EFFECTIVE_DATE}
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--nt-muted)", lineHeight: 1.75, marginTop: "1rem" }}>
              At <strong style={{ color: "rgba(255,255,255,0.85)" }}>NovaTech Innovative Solutions</strong>, your
              privacy is a priority. This policy explains what data we collect, why we collect it, how we
              protect it, and what rights you have over it.
            </p>
          </div>
        </section>

        {/* ── Main layout: TOC + Content ── */}
        <div className="npp-layout">

          {/* ── Sidebar Table of Contents ── */}
          <aside aria-label="Table of contents">
            <nav className="npp-toc">
              <div className="npp-toc-title">Contents</div>
              <ul className="npp-toc-list">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <button
                      className="npp-toc-btn"
                      onClick={() => scrollToSection(s.id)}
                      aria-label={`Jump to ${s.heading}`}
                    >
                      {s.icon} {s.heading}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="npp-toc-btn"
                    onClick={() => scrollToSection("contact")}
                    aria-label="Jump to Contact Us"
                  >
                    📬 Contact Us
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* ── Content ── */}
          <main role="main" aria-label="Privacy Policy content">
            <article itemScope itemType="https://schema.org/WebPage">
              <div className="npp-content">

                {SECTIONS.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className="npp-sec"
                    ref={(el) => { if (el) sectionRefs.current[i] = el; }}
                    style={{ animationDelay: `${i * 40}ms` }}
                    aria-labelledby={`sec-${s.id}`}
                  >
                    <div className="npp-sec-header">
                      <div className="npp-sec-icon" aria-hidden="true">{s.icon}</div>
                      <h2 id={`sec-${s.id}`}>{s.heading}</h2>
                    </div>
                    {s.content}
                  </section>
                ))}

                {/* ── Contact section ── */}
                <section
                  id="contact"
                  className="npp-contact-card"
                  ref={(el) => { if (el) sectionRefs.current[SECTIONS.length] = el; }}
                  aria-labelledby="contact-heading"
                  itemScope itemType="https://schema.org/ContactPage"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <div className="npp-sec-icon" aria-hidden="true">📬</div>
                    <h2 id="contact-heading" style={{ fontFamily: "var(--font-d)", fontSize: "1.2rem", fontWeight: 800, color: "var(--nt-white)", margin: 0 }}>
                      Contact Us
                    </h2>
                  </div>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how we
                    handle your personal data, please reach out to us. We aim to respond within 30 days.
                  </p>
                  <address style={{ fontStyle: "normal" }}>
                    <p style={{ margin: 0 }}>
                      <strong style={{ color: "rgba(255,255,255,0.85)" }}>NovaTech Innovative Solutions</strong><br />
                      West Bengal, India<br />
                      Website:{" "}
                      <a
                        href="https://novatech-is.in"
                        style={{ color: "var(--nt-yellow)", textDecoration: "none" }}
                        itemProp="url"
                      >
                        https://novatech-is.in
                      </a><br />
                      Email:{" "}
                      <a
                        href="mailto:chandramouli@novatech-is.in"
                        style={{ color: "var(--nt-yellow)", textDecoration: "none" }}
                        itemProp="email"
                      >
                        chandramouli@novatech-is.in
                      </a>
                    </p>
                  </address>
                  <div className="npp-contact-row">
                    <a
                      href="mailto:chandramouli@novatech-is.in"
                      className="npp-contact-link filled"
                      aria-label="Email NovaTech Innovative Solutions"
                    >
                      ✉️ Email Us
                    </a>
                    <a
                      href="https://wa.me/918336001208?text=Hello, I have a query about your Privacy Policy."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="npp-contact-link outline"
                      aria-label="Contact NovaTech on WhatsApp about Privacy Policy"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </section>

                {/* ── Acknowledgement ── */}
                <p className="npp-ack" role="note">
                  By using the NovaTech Innovative Solutions website and services, you acknowledge that you
                  have read, understood, and agree to be bound by this Privacy Policy.
                </p>

              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;