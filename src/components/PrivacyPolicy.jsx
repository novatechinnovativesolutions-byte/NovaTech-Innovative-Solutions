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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --nt-navy:   #0B1F4A;
          --nt-navy2:  #071530;
          --nt-blue:   #1E3A8A;
          --nt-sky:    #2563EB;
          --nt-yellow: #FFD700;
          --nt-gold:   #F59E0B;
          --nt-white:  #FFFFFF;
          --nt-muted:  rgba(255,255,255,0.58);
          --nt-border: rgba(255,255,255,0.09);
          --nt-glass:  rgba(255,255,255,0.04);
          --font-d: 'Syne', sans-serif;
          --font-b: 'DM Sans', sans-serif;
        }

        /* ── Page ── */
        .npp-page {
          background: linear-gradient(180deg, #071530 0%, #0B1F4A 55%, #0e2454 100%);
          min-height: 100vh;
          color: var(--nt-white);
          font-family: var(--font-b);
        }

        /* ── Hero ── */
        .npp-hero {
          padding: 80px 2rem 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--nt-border);
        }
        .npp-hero::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .npp-hero-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
        .npp-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.3rem 1rem; margin-bottom: 1.25rem;
          background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.25);
          border-radius: 999px; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--nt-yellow);
        }
        .npp-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--nt-yellow); }
        .npp-h1 {
          font-family: var(--font-d);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; line-height: 1.12; margin-bottom: 1rem;
        }
        .npp-grad {
          background: linear-gradient(90deg, var(--nt-yellow), var(--nt-gold));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .npp-hero-meta {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: var(--nt-glass); border: 1px solid var(--nt-border);
          border-radius: 999px; font-size: 0.78rem; color: var(--nt-muted);
          margin-bottom: 0.5rem;
        }

        /* ── Layout ── */
        .npp-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem 5rem;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 3rem;
          align-items: start;
        }

        /* ── Sidebar TOC ── */
        .npp-toc {
          position: sticky;
          top: 88px;
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 16px;
          padding: 1.5rem 1.25rem;
        }
        .npp-toc-title {
          font-family: var(--font-d);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--nt-yellow); margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .npp-toc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.25rem; }
        .npp-toc-btn {
          display: block; width: 100%;
          padding: 0.5rem 0.75rem;
          background: none; border: none;
          border-radius: 7px;
          color: var(--nt-muted);
          font-family: var(--font-b); font-size: 0.78rem; font-weight: 500;
          text-align: left; cursor: pointer;
          transition: background 0.2s, color 0.2s;
          line-height: 1.4;
        }
        .npp-toc-btn:hover { background: rgba(255,255,255,0.06); color: var(--nt-white); }

        /* ── Content area ── */
        .npp-content { display: flex; flex-direction: column; gap: 1.5rem; }

        /* ── Section card ── */
        .npp-sec {
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 18px;
          padding: 2rem 2rem;
          opacity: 0;
          transform: translateY(24px);
          scroll-margin-top: 96px;
        }
        .npp-sec.npp-show { animation: npp-up 0.5s ease forwards; }
        @keyframes npp-up { to { opacity: 1; transform: translateY(0); } }
        .npp-sec:hover { border-color: rgba(255,215,0,0.18); }

        .npp-sec-header {
          display: flex; align-items: center; gap: 0.85rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .npp-sec-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: rgba(37,99,235,0.18); border: 1px solid rgba(37,99,235,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; flex-shrink: 0;
        }
        .npp-sec h2 {
          font-family: var(--font-d);
          font-size: 1.1rem; font-weight: 800;
          color: var(--nt-white); margin: 0;
          line-height: 1.3;
        }
        .npp-sec p {
          font-size: 0.9rem; color: var(--nt-muted);
          line-height: 1.8; margin-bottom: 0.75rem;
        }
        .npp-sec p:last-child { margin-bottom: 0; }
        .npp-sec ul {
          padding-left: 0; list-style: none;
          display: flex; flex-direction: column; gap: 0.5rem;
          margin: 0.5rem 0;
        }
        .npp-sec ul li {
          display: flex; align-items: flex-start; gap: 0.65rem;
          font-size: 0.88rem; color: var(--nt-muted); line-height: 1.6;
        }
        .npp-sec ul li::before {
          content: '›';
          color: var(--nt-yellow); font-size: 1rem;
          font-weight: 700; flex-shrink: 0; margin-top: 0.05rem;
        }
        .npp-sec strong { color: rgba(255,255,255,0.85); font-weight: 600; }

        /* ── Service chip grid ── */
        .npp-service-grid {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .npp-service-chip {
          padding: 0.28rem 0.75rem;
          background: rgba(37,99,235,0.16);
          border: 1px solid rgba(37,99,235,0.3);
          border-radius: 999px;
          font-size: 0.72rem; font-weight: 600;
          color: rgba(255,255,255,0.7);
        }

        /* ── Contact card ── */
        .npp-contact-card {
          background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(255,215,0,0.06));
          border: 1px solid rgba(37,99,235,0.35);
          border-radius: 18px;
          padding: 2rem;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .npp-contact-card h2 {
          font-family: var(--font-d);
          font-size: 1.2rem; font-weight: 800;
          color: var(--nt-white); margin: 0;
        }
        .npp-contact-card p { font-size: 0.9rem; color: var(--nt-muted); line-height: 1.7; margin: 0; }
        .npp-contact-row {
          display: flex; flex-wrap: wrap; gap: 0.75rem;
        }
        .npp-contact-link {
          display: inline-flex; align-items: center; gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border-radius: 8px; text-decoration: none;
          font-family: var(--font-d); font-size: 0.84rem; font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .npp-contact-link:hover { transform: translateY(-2px); }
        .npp-contact-link.filled {
          background: var(--nt-yellow); color: var(--nt-navy);
          box-shadow: 0 4px 16px rgba(255,215,0,0.25);
        }
        .npp-contact-link.filled:hover { box-shadow: 0 6px 24px rgba(255,215,0,0.4); }
        .npp-contact-link.outline {
          border: 1.5px solid rgba(255,215,0,0.45); color: var(--nt-yellow);
        }
        .npp-contact-link.outline:hover {
          background: rgba(255,215,0,0.08);
          border-color: var(--nt-yellow);
        }

        /* ── Acknowledgement banner ── */
        .npp-ack {
          background: rgba(255,215,0,0.06);
          border: 1px solid rgba(255,215,0,0.2);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          line-height: 1.7;
          margin-top: 0.5rem;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .npp-layout { grid-template-columns: 1fr; }
          .npp-toc { position: static; }
        }
        @media (max-width: 500px) {
          .npp-hero { padding: 60px 1.25rem 40px; }
          .npp-layout { padding: 2rem 1.25rem 4rem; }
          .npp-sec { padding: 1.5rem 1.25rem; }
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