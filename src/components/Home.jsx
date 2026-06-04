import React, { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   SEO: Helmet-style head tags (drop <Head> from
   Next.js / react-helmet if you use them)
   ───────────────────────────────────────────── */
const SEOMeta = () => (
  <>
  <SEOMeta
  title="NovaTech Innovative Solutions"
  description="Software and Hardware Development"
/>
    {/* Primary meta */}
    <title>NovaTech Innovative Solutions | Software, IoT, AI & Training India</title>
    <meta
      name="description"
      content="NovaTech Innovative Solutions delivers expert software development, hardware & IoT systems, AI automation projects, and hands-on training workshops for students and businesses across India."
    />
    <meta
      name="keywords"
      content="NovaTech, embedded systems, IoT solutions India, software development, AI projects, academic project guidance, training workshops, MERN stack, robotics, Arduino, Raspberry Pi"
    />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="NovaTech Innovative Solutions" />
    <link rel="canonical" href="https://www.novatechinnovative.com/" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="NovaTech Innovative Solutions | Tech That Builds Tomorrow" />
    <meta
      property="og:description"
      content="Software, hardware, IoT, AI automation & training solutions — designed, developed and deployed with passion."
    />
    <meta property="og:url" content="https://www.novatechinnovative.com/" />
    <meta property="og:site_name" content="NovaTech Innovative Solutions" />
    <meta property="og:locale" content="en_IN" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="NovaTech Innovative Solutions" />
    <meta name="twitter:description" content="Software, hardware, IoT, AI automation & training solutions." />

    {/* Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
      rel="stylesheet"
    />

    {/* Structured Data: Organization */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NovaTech Innovative Solutions",
        url: "https://www.novatechinnovative.com",
        description:
          "NovaTech delivers software development, hardware & IoT, AI automation, academic project guidance, and training workshops.",
        foundingLocation: { "@type": "Place", addressCountry: "IN" },
        serviceArea: { "@type": "Country", name: "India" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "NovaTech Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardware & IoT Solutions" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Automation Projects" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Training & Workshops" } },
          ],
        },
      })}
    </script>

    {/* Structured Data: FAQPage */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does NovaTech Innovative Solutions offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "NovaTech offers software development (MERN stack, mobile apps), hardware & IoT solutions, AI & automation projects, and training workshops for students and professionals.",
            },
          },
          {
            "@type": "Question",
            name: "Does NovaTech help with final-year academic projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. NovaTech provides end-to-end academic project guidance including idea validation, prototyping, embedded systems, IoT, and final deployment for engineering students.",
            },
          },
          {
            "@type": "Question",
            name: "What technologies does NovaTech work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We work with Arduino, Raspberry Pi, ESP32, Embedded C/C++, Python AI/ML (TensorFlow, OpenCV), MERN Stack, React Native, and IoT protocols like MQTT.",
            },
          },
        ],
      })}
    </script>
  </>
);

/* ─────────────────────────────────────────────
   DESIGN TOKENS
   ───────────────────────────────────────────── */
const T = {
  navy:       "#07091c",
  navyMid:    "#0d1236",
  blue:       "#1346e8",
  blueLight:  "#e8effe",
  yellow:     "#f5c518",
  yellowSoft: "rgba(245,197,24,0.12)",
  white:      "#ffffff",
  offWhite:   "#f7f8fc",
  border:     "#e4e8f0",
  text:       "#111827",
  muted:      "#6b7280",
  fontHead:   "'Syne', sans-serif",
  fontBody:   "'DM Sans', sans-serif",
};

/* ─────────────────────────────────────────────
   GLOBAL STYLES (injected once)
   ───────────────────────────────────────────── */
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: ${T.fontBody}; background: ${T.white}; color: ${T.text}; line-height: 1.65; font-size: 16px; }

  /* Scroll reveal */
  .nt-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .nt-reveal.nt-visible { opacity: 1; transform: none; }
  .nt-reveal-d1 { transition-delay: 0.1s !important; }
  .nt-reveal-d2 { transition-delay: 0.2s !important; }
  .nt-reveal-d3 { transition-delay: 0.3s !important; }
  .nt-reveal-d4 { transition-delay: 0.4s !important; }

  
  /* Hero */
  .nt-hero {
    background: ${T.navy}; min-height: 90vh;
    display: flex; align-items: center;
    padding: 80px 5%; position: relative; overflow: hidden;
  }
  .nt-hero::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 60% at 75% 50%, rgba(19,70,232,0.22) 0%, transparent 70%),
      radial-gradient(ellipse 30% 30% at 10% 80%, rgba(245,197,24,0.07) 0%, transparent 60%);
  }
  .nt-hero-grid {
    max-width: 1200px; margin: auto; width: 100%;
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
    position: relative; z-index: 1;
  }
  .nt-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: ${T.yellowSoft}; border: 1px solid rgba(245,197,24,0.3);
    border-radius: 100px; padding: 5px 14px;
    font-size: 0.78rem; font-weight: 600; color: ${T.yellow};
    letter-spacing: 0.04em; margin-bottom: 24px;
  }
  .nt-h1 {
    font-family: ${T.fontHead}; font-weight: 800; color: #fff;
    font-size: clamp(2.2rem, 4vw, 3.5rem); line-height: 1.1;
    letter-spacing: -0.035em; margin-bottom: 22px;
  }
  .nt-h1 em { font-style: normal; color: ${T.yellow}; }
  .nt-hero-desc {
    font-size: 1.05rem; color: rgba(255,255,255,0.62);
    max-width: 480px; margin-bottom: 36px;
    font-weight: 300; line-height: 1.78;
  }
  .nt-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
  .nt-btn-primary {
    background: ${T.blue}; color: #fff;
    padding: 13px 28px; border-radius: 8px;
    font-size: 0.95rem; font-weight: 500; font-family: ${T.fontBody};
    text-decoration: none; border: none; cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    transition: background 0.2s, transform 0.15s;
  }
  .nt-btn-primary:hover { background: #0d35c4; transform: translateY(-2px); }
  .nt-btn-outline {
    background: transparent; color: #fff;
    padding: 13px 28px; border-radius: 8px;
    font-size: 0.95rem; font-weight: 500; font-family: ${T.fontBody};
    text-decoration: none; border: 1px solid rgba(255,255,255,0.22); cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    transition: border-color 0.2s, transform 0.15s;
  }
  .nt-btn-outline:hover { border-color: rgba(255,255,255,0.6); transform: translateY(-2px); }
  .nt-hero-visual { display: flex; flex-direction: column; gap: 14px; }
  .nt-glass {
    background: rgba(255,255,255,0.055);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 22px 26px;
  }
  .nt-stat-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .nt-stat-num { font-family: ${T.fontHead}; font-size: 2rem; font-weight: 800; color: ${T.yellow}; }
  .nt-stat-lbl { font-size: 0.78rem; color: rgba(255,255,255,0.48); margin-top: 3px; }
  .nt-pills { display: flex; flex-wrap: wrap; gap: 7px; }
  .nt-pill {
    font-size: 0.73rem; font-weight: 500;
    color: rgba(255,255,255,0.68);
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 100px; padding: 4px 12px;
  }

  /* Trust bar */
  .nt-trust { background: ${T.yellow}; padding: 13px 5%; }
  .nt-trust-inner {
    max-width: 1200px; margin: auto;
    display: flex; justify-content: center; align-items: center;
    gap: 44px; flex-wrap: wrap;
  }
  .nt-trust-item {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.82rem; font-weight: 700; color: ${T.navy};
  }
  .nt-trust-icon { font-size: 17px; }

  /* Section wrapper */
  .nt-section { padding: 96px 5%; }
  .nt-section-inner { max-width: 1200px; margin: auto; }
  .nt-section-label {
    font-size: 0.75rem; font-weight: 700; color: ${T.blue};
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px;
  }
  .nt-section-title {
    font-family: ${T.fontHead}; font-weight: 800; color: ${T.navy};
    font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.18;
    letter-spacing: -0.025em; margin-bottom: 14px;
  }
  .nt-section-sub {
    font-size: 1rem; color: ${T.muted};
    max-width: 540px; font-weight: 300; line-height: 1.78;
  }

  /* Services */
  .nt-services-bg { background: ${T.white}; }
  .nt-services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px; margin-top: 52px;
  }
  .nt-svc-card {
    background: ${T.offWhite};
    border: 1px solid ${T.border};
    border-radius: 20px; padding: 32px 28px;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: default; display: flex; flex-direction: column;
  }
  .nt-svc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 48px rgba(19,70,232,0.1);
    border-color: #c2d0f8;
  }
  .nt-svc-card.featured { background: ${T.navy}; border-color: transparent; }
  .nt-svc-card.featured .nt-svc-title { color: #fff; }
  .nt-svc-card.featured .nt-svc-body { color: rgba(255,255,255,0.6); }
  .nt-svc-card.featured .nt-svc-icon { background: rgba(255,255,255,0.1); }
  .nt-svc-card.featured .nt-svc-icon svg { color: ${T.yellow}; }
  .nt-svc-card.featured .nt-svc-link { color: ${T.yellow}; }
  .nt-svc-icon {
    width: 48px; height: 48px; border-radius: 10px;
    background: ${T.blueLight}; display: flex; align-items: center;
    justify-content: center; margin-bottom: 22px; flex-shrink: 0;
  }
  .nt-svc-icon svg { width: 24px; height: 24px; color: ${T.blue}; }
  .nt-svc-title {
    font-family: ${T.fontHead}; font-size: 1.1rem; font-weight: 700;
    color: ${T.navy}; margin-bottom: 10px;
  }
  .nt-svc-body { font-size: 0.88rem; color: ${T.muted}; line-height: 1.72; flex: 1; }
  .nt-svc-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; }
  .nt-svc-tag {
    font-size: 0.7rem; font-weight: 600;
    background: rgba(19,70,232,0.08); color: ${T.blue};
    border-radius: 100px; padding: 3px 10px;
  }
  .nt-svc-card.featured .nt-svc-tag { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }
  .nt-svc-link {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.83rem; font-weight: 600; color: ${T.blue};
    text-decoration: none; margin-top: 20px;
  }
  .nt-svc-link svg { width: 14px; height: 14px; }

  /* Why */
  .nt-why-bg { background: ${T.offWhite}; }
  .nt-why-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 72px; align-items: center; margin-top: 56px;
  }
  .nt-why-list { display: flex; flex-direction: column; gap: 16px; }
  .nt-why-item {
    display: flex; gap: 16px;
    background: ${T.white}; border: 1px solid ${T.border};
    border-radius: 14px; padding: 22px 24px;
    transition: border-color 0.2s, transform 0.2s;
  }
  .nt-why-item:hover { border-color: #c2d0f8; transform: translateX(4px); }
  .nt-why-icon {
    width: 42px; height: 42px; min-width: 42px;
    border-radius: 10px; background: ${T.blueLight};
    display: flex; align-items: center; justify-content: center;
  }
  .nt-why-icon svg { width: 20px; height: 20px; color: ${T.blue}; }
  .nt-why-item h3 {
    font-family: ${T.fontHead}; font-size: 0.98rem; font-weight: 700;
    color: ${T.navy}; margin-bottom: 5px;
  }
  .nt-why-item p { font-size: 0.86rem; color: ${T.muted}; line-height: 1.68; }
  .nt-metrics { display: flex; flex-direction: column; gap: 16px; }
  .nt-metric-hero {
    background: ${T.navy}; border-radius: 20px; padding: 36px;
  }
  .nt-metric-hero .num {
    font-family: ${T.fontHead}; font-size: 3.2rem; font-weight: 800; color: ${T.yellow};
  }
  .nt-metric-hero .lbl { font-size: 0.88rem; color: rgba(255,255,255,0.55); margin-top: 6px; }
  .nt-metric-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .nt-metric-sm {
    background: ${T.white}; border: 1px solid ${T.border};
    border-radius: 14px; padding: 22px;
  }
  .nt-metric-sm .num {
    font-family: ${T.fontHead}; font-size: 1.9rem; font-weight: 800; color: ${T.blue};
  }
  .nt-metric-sm .lbl { font-size: 0.78rem; color: ${T.muted}; margin-top: 3px; }

  /* FAQ */
  .nt-faq-bg { background: ${T.white}; }
  .nt-faq-list { margin-top: 52px; display: flex; flex-direction: column; gap: 12px; max-width: 760px; margin-left: auto; margin-right: auto; }
  .nt-faq-item { border: 1px solid ${T.border}; border-radius: 14px; overflow: hidden; }
  .nt-faq-q {
    width: 100%; padding: 20px 24px;
    font-family: ${T.fontHead}; font-size: 0.98rem; font-weight: 600; color: ${T.navy};
    cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px;
    background: ${T.white}; border: none; text-align: left;
    transition: background 0.18s;
  }
  .nt-faq-q:hover { background: ${T.offWhite}; }
  .nt-faq-icon { font-size: 20px; color: ${T.muted}; transition: transform 0.3s; line-height: 1; }
  .nt-faq-item.open .nt-faq-icon { transform: rotate(45deg); }
  .nt-faq-a {
    max-height: 0; overflow: hidden;
    transition: max-height 0.38s ease, padding 0.2s;
    font-size: 0.9rem; color: ${T.muted}; line-height: 1.78;
    padding: 0 24px;
  }
  .nt-faq-item.open .nt-faq-a { max-height: 220px; padding: 0 24px 22px; }

  /* CTA / Contact */
  .nt-cta-bg { background: ${T.navy}; }
  .nt-cta-grid {
    max-width: 1200px; margin: auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: start;
  }
  .nt-cta-left h2 {
    font-family: ${T.fontHead}; font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 800; color: #fff; line-height: 1.15;
    letter-spacing: -0.025em; margin-bottom: 18px;
  }
  .nt-cta-left h2 em { font-style: normal; color: ${T.yellow}; }
  .nt-cta-left p { font-size: 0.95rem; color: rgba(255,255,255,0.5); font-weight: 300; line-height: 1.78; margin-bottom: 28px; }
  .nt-cta-trust { display: flex; flex-direction: column; gap: 12px; }
  .nt-cta-trust-item { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.7); }
  .nt-cta-trust-icon { color: ${T.yellow}; font-size: 16px; }
  .nt-contact-form { display: flex; flex-direction: column; gap: 14px; }
  .nt-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .nt-form-group { display: flex; flex-direction: column; gap: 5px; }
  .nt-form-label { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.55); letter-spacing: 0.04em; text-transform: uppercase; }
  .nt-form-input, .nt-form-textarea, .nt-form-select {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px; padding: 11px 14px;
    font-size: 0.9rem; color: #fff; font-family: ${T.fontBody};
    transition: border-color 0.2s; width: 100%;
  }
  .nt-form-input::placeholder, .nt-form-textarea::placeholder { color: rgba(255,255,255,0.28); }
  .nt-form-input:focus, .nt-form-textarea:focus, .nt-form-select:focus {
    outline: none; border-color: rgba(255,255,255,0.4);
  }
  .nt-form-textarea { resize: vertical; min-height: 96px; }
  .nt-form-select option { background: ${T.navyMid}; color: #fff; }
  .nt-form-submit {
    background: ${T.yellow}; color: ${T.navy};
    border: none; padding: 13px 30px; border-radius: 8px;
    font-size: 0.95rem; font-weight: 700; font-family: ${T.fontHead};
    cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
    align-self: flex-start; transition: opacity 0.2s, transform 0.15s;
  }
  .nt-form-submit:hover { opacity: 0.88; transform: translateY(-2px); }

  /* CTA email strip */
  .nt-strip { background: ${T.yellow}; padding: 56px 5%; }
  .nt-strip-inner {
    max-width: 1200px; margin: auto;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 24px;
  }
  .nt-strip h3 {
    font-family: ${T.fontHead}; font-size: 1.6rem; font-weight: 800;
    color: ${T.navy}; letter-spacing: -0.02em;
  }
  .nt-strip p { font-size: 0.95rem; color: rgba(10,15,46,0.65); margin-top: 6px; }
  .nt-strip-form { display: flex; gap: 10px; flex-wrap: wrap; }
  .nt-strip-input {
    padding: 12px 16px; border-radius: 8px;
    border: 1.5px solid rgba(10,15,46,0.2);
    font-size: 0.9rem; font-family: ${T.fontBody}; width: 280px;
    background: rgba(255,255,255,0.75);
  }
  .nt-strip-input:focus { outline: none; border-color: ${T.navy}; background: #fff; }
  .nt-strip-btn {
    background: ${T.navy}; color: #fff;
    padding: 12px 24px; border-radius: 8px;
    border: none; font-size: 0.9rem; font-weight: 600;
    font-family: ${T.fontHead}; cursor: pointer;
    transition: opacity 0.2s;
  }
  .nt-strip-btn:hover { opacity: 0.85; }

  /* Footer */
  footer { background: #06071a; padding: 36px 5%; border-top: 1px solid rgba(255,255,255,0.06); }
  .nt-footer-inner {
    max-width: 1200px; margin: auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
  }
  .nt-footer-logo { font-family: ${T.fontHead}; font-size: 1.1rem; font-weight: 800; color: #fff; }
  .nt-footer-logo em { font-style: normal; color: ${T.yellow}; }
  .nt-footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.3); }
  .nt-footer-links { display: flex; gap: 22px; }
  .nt-footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
  .nt-footer-links a:hover { color: rgba(255,255,255,0.8); }

  /* Responsive */
  @media (max-width: 820px) {
    .nt-hero-grid { grid-template-columns: 1fr; }
    .nt-hero-visual { display: none; }
    .nt-why-grid { grid-template-columns: 1fr; gap: 40px; }
    .nt-cta-grid { grid-template-columns: 1fr; gap: 48px; }
    .nt-nav-links { display: none; }
    .nt-strip-inner { flex-direction: column; }
    .nt-form-row { grid-template-columns: 1fr; }
    .nt-metric-row { grid-template-columns: 1fr 1fr; }
    .nt-strip-input { width: 100%; }
  }
`;

/* ─────────────────────────────────────────────
   ICONS (inline SVG — no external deps)
   ───────────────────────────────────────────── */
const Icon = {
  chip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 9H5M7 12H5M7 15H5M17 9h2M17 12h2M17 15h2M9 7V5M12 7V5M15 7V5M9 17v2M12 17v2M15 17v2"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  ),
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  route: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>
    </svg>
  ),
  rupee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12M6 8h12M6 13l11 8M6 8a4 4 0 0 1 0 5h3"/>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   SCROLL REVEAL HOOK
   ───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("nt-visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".nt-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */
const FORM_URL =
  "https://docs.google.com/forms/d/1Z5UN_RCFAV1hdX7gVK2Pj8TiJzTuFK0zOgxCAflycRE/formResponse";

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`nt-faq-item${open ? " open" : ""}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="nt-faq-q"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span itemProp="name">{q}</span>
        <span className="nt-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div
        className="nt-faq-a"
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p itemProp="text">{a}</p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
const Home = () => {
  useReveal();

  const services = [
    {
      icon: Icon.chip,
      title: "Hardware & IoT Solutions",
      body: "Custom-built embedded systems, sensor networks, and real-world IoT automation and monitoring using Arduino, Raspberry Pi, ESP32 and more.",
      tags: ["Arduino", "Raspberry Pi", "ESP32", "MQTT"],
      featured: false,
    },
    {
      icon: Icon.code,
      title: "Software Development",
      body: "Scalable MERN stack web applications, React Native mobile apps, REST APIs, and enterprise software solutions built for performance.",
      tags: ["React", "Node.js", "MongoDB", "Mobile"],
      featured: true,
    },
    {
      icon: Icon.brain,
      title: "AI & Automation Projects",
      body: "Machine learning models, computer vision pipelines, and intelligent automation using Python, TensorFlow, and OpenCV.",
      tags: ["Python", "TensorFlow", "OpenCV", "ML"],
      featured: false,
    },
    {
      icon: Icon.graduation,
      title: "Training & Workshops",
      body: "Hands-on programs in IoT, robotics, AI, and full-stack development for engineering students and working professionals.",
      tags: ["IoT", "Robotics", "AI/ML", "Full-Stack"],
      featured: false,
    },
  ];

  const whyItems = [
    { icon: Icon.route, title: "End-to-End Project Guidance", body: "From idea validation to final deployment — complete support for students and businesses at every stage of development." },
    { icon: Icon.rupee, title: "Transparent & Affordable Pricing", body: "Clear pricing, open communication, and high-quality results — zero hidden charges, zero surprises, ever." },
    { icon: Icon.users, title: "Academic Project Specialists", body: "Dedicated guidance for final-year engineering and diploma students across IoT, AI, and software streams." },
    { icon: Icon.rocket, title: "Fast, Agile Delivery", body: "Regular milestones, consistent updates, and on-time delivery without compromising on quality." },
  ];

  const faqs = [
    { q: "What services does NovaTech Innovative Solutions offer?", a: "NovaTech offers software development (MERN stack, mobile apps), hardware & IoT solutions, AI & automation projects, academic project guidance, and training workshops for students and professionals across India." },
    { q: "Does NovaTech help with final-year academic projects?", a: "Yes! We specialize in end-to-end academic project guidance — from idea selection and component procurement to prototyping, coding, and final submission support for engineering and diploma students." },
    { q: "What technologies does NovaTech work with?", a: "We work with Arduino, Raspberry Pi, ESP32, Embedded C/C++, Python AI/ML (TensorFlow, OpenCV), the MERN Stack (MongoDB, Express, React, Node.js), React Native, and IoT protocols like MQTT and HTTP." },
    { q: "How do I get started with NovaTech?", a: "Simply fill out the contact form below or drop us your email. Our team will respond within 24 hours with a clear plan, timeline, and honest pricing — no commitment required." },
  ];

  return (
    <div id="top">
      {/* Inject styles */}
      <style>{GLOBAL_CSS}</style>

         <main>
        {/* ── HERO ──────────────────────── */}
        <section className="nt-hero" aria-labelledby="hero-heading">
          <div className="nt-hero-grid">
            {/* Left */}
            <div>
              <div className="nt-badge">⚡ India's Trusted Innovation Partner</div>
              <h1 className="nt-h1" id="hero-heading">
                Tech That <em>Builds</em><br />Your Tomorrow
              </h1>
              <p className="nt-hero-desc">
                NovaTech Innovative Solutions delivers end-to-end{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>software</strong>,{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>hardware</strong>,{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>IoT</strong>,{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>AI projects</strong>, and hands-on training — designed, developed, and deployed with passion.
              </p>
              <div className="nt-hero-actions">
                <a href="#services" className="nt-btn-primary">
                  Explore Services
                  <span style={{ display: "flex", width: 16, height: 16 }}>{Icon.arrow}</span>
                </a>
                <a href="#contact" className="nt-btn-outline">Start a Project</a>
              </div>
            </div>

            {/* Right — visual stats */}
            <div className="nt-hero-visual" aria-hidden="true">
              <div className="nt-glass">
                <div className="nt-stat-row">
                  <div>
                    <div className="nt-stat-num">20+</div>
                    <div className="nt-stat-lbl">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="nt-stat-num">4</div>
                    <div className="nt-stat-lbl">Core Domains</div>
                  </div>
                </div>
              </div>
              <div className="nt-glass">
                <div className="nt-pills">
                  {["Embedded C", "Arduino", "Raspberry Pi", "MERN Stack", "Python AI/ML", "Node.js", "ESP32", "React Native", "TensorFlow", "MQTT IoT"].map((t) => (
                    <span key={t} className="nt-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="nt-glass">
                <div className="nt-stat-row">
                  <div>
                    <div className="nt-stat-num">98%</div>
                    <div className="nt-stat-lbl">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="nt-stat-num">200+</div>
                    <div className="nt-stat-lbl">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────── */}
        <div className="nt-trust" role="complementary" aria-label="Trust signals">
          <div className="nt-trust-inner">
            {[
              ["🎓", "Academic Project Experts"],
              ["✅", "Transparent Pricing"],
              ["⚙️", "End-to-End Delivery"],
              ["🤝", "Dedicated Support"],
            ].map(([icon, label]) => (
              <span key={label} className="nt-trust-item">
                <span className="nt-trust-icon">{icon}</span> {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── SERVICES ─────────────────── */}
        <section id="services" className="nt-section nt-services-bg" aria-labelledby="services-heading">
          <div className="nt-section-inner">
            <p className="nt-section-label nt-reveal">What We Offer</p>
            <h2 className="nt-section-title nt-reveal" id="services-heading">Our Core Services</h2>
            <p className="nt-section-sub nt-reveal">
              From academic prototypes to enterprise deployments — we bring your ideas to life with precision and passion.
            </p>
            <div className="nt-services-grid" role="list">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`nt-svc-card nt-reveal nt-reveal-d${i + 1}${s.featured ? " featured" : ""}`}
                  role="listitem"
                  aria-labelledby={`svc-${i}`}
                >
                  <div className="nt-svc-icon" aria-hidden="true">{s.icon}</div>
                  <h3 className="nt-svc-title" id={`svc-${i}`}>{s.title}</h3>
                  <p className="nt-svc-body">{s.body}</p>
                  <div className="nt-svc-tags">
                    {s.tags.map((t) => <span key={t} className="nt-svc-tag">{t}</span>)}
                  </div>
                  <a href="#contact" className="nt-svc-link">
                    Enquire now <span style={{ display: "flex", width: 14, height: 14 }}>{Icon.arrow}</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY NOVATECH ─────────────── */}
        <section id="why" className="nt-section nt-why-bg" aria-labelledby="why-heading">
          <div className="nt-section-inner">
            <p className="nt-section-label nt-reveal">Why NovaTech</p>
            <h2 className="nt-section-title nt-reveal" id="why-heading">
              Built on Expertise.<br />Driven by Results.
            </h2>
            <div className="nt-why-grid">
              <div className="nt-why-list">
                {whyItems.map((w, i) => (
                  <div key={w.title} className={`nt-why-item nt-reveal nt-reveal-d${i + 1}`}>
                    <div className="nt-why-icon" aria-hidden="true">{w.icon}</div>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="nt-metrics nt-reveal nt-reveal-d2" aria-hidden="true">
                <div className="nt-metric-hero">
                  <div className="num">20+</div>
                  <div className="lbl">Successful projects delivered across software, hardware, AI & training domains</div>
                </div>
                <div className="nt-metric-row">
                  <div className="nt-metric-sm">
                    <div className="num">50+</div>
                    <div className="lbl">Students & professionals trained</div>
                  </div>
                  <div className="nt-metric-sm">
                    <div className="num">98%</div>
                    <div className="lbl">Client satisfaction rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EMAIL STRIP (CTA) ─────────── */}
        <div className="nt-strip">
          <div className="nt-strip-inner">
            <div>
              <h3>🚀 Let's Build the Future Together</h3>
              <p>Drop your email — we'll reach out within 24 hours.</p>
            </div>
            <form
              className="nt-strip-form"
              action={FORM_URL}
              method="POST"
              target="_blank"
              aria-label="Quick email subscription"
            >
              <input
                type="email"
                name="entry.82239818"
                placeholder="Your email address"
                className="nt-strip-input"
                required
                aria-label="Email address"
              />
              <button type="submit" className="nt-strip-btn">Submit →</button>
            </form>
          </div>
        </div>

        {/* ── FAQ ───────────────────────── */}
        <section
          id="faq"
          className="nt-section nt-faq-bg"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="nt-section-inner" style={{ textAlign: "center" }}>
            <p className="nt-section-label nt-reveal">FAQ</p>
            <h2 className="nt-section-title nt-reveal" id="faq-heading">Common Questions</h2>
            <p className="nt-section-sub nt-reveal" style={{ margin: "0 auto" }}>
              Everything you need to know before getting started with NovaTech.
            </p>
          </div>
          <div className="nt-faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="nt-reveal">
                <FaqItem q={f.q} a={f.a} />
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ───────────────────── */}
        <section id="contact" className="nt-section nt-cta-bg" aria-labelledby="contact-heading">
          <div className="nt-cta-grid">
            {/* Left */}
            <div className="nt-cta-left nt-reveal">
              <h2 id="contact-heading">
                Start Building<br />with <em>NovaTech</em>
              </h2>
              <p>
                Tell us about your project. We'll get back to you within 24 hours with a clear plan, timeline, and honest pricing — no commitment required.
              </p>
              <div className="nt-cta-trust">
                {[
                  "Free consultation, no obligations",
                  "Transparent pricing from day one",
                  "Student & academic project support",
                  "Response within 24 hours",
                ].map((item) => (
                  <div key={item} className="nt-cta-trust-item">
                    <span className="nt-cta-trust-icon" style={{ display: "flex", width: 16, height: 16 }}>{Icon.check}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="nt-reveal nt-reveal-d2">
              <form
                className="nt-contact-form"
                action={FORM_URL}
                method="POST"
                target="_blank"
                aria-label="Contact NovaTech Innovative Solutions"
              >
                <div className="nt-form-row">
                  <div className="nt-form-group">
                    <label className="nt-form-label" htmlFor="f-name">Name *</label>
                    <input
                      id="f-name"
                      type="text"
                      name="entry.1345170053"
                      className="nt-form-input"
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="nt-form-group">
                    <label className="nt-form-label" htmlFor="f-phone">Phone</label>
                    <input
                      id="f-phone"
                      type="tel"
                      name="entry.1254174415"
                      className="nt-form-input"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="nt-form-group">
                  <label className="nt-form-label" htmlFor="f-email">Email *</label>
                  <input
                    id="f-email"
                    type="email"
                    name="entry.585538982"
                    className="nt-form-input"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="nt-form-group">
                  <label className="nt-form-label" htmlFor="f-service">Service of Interest</label>
                  <select id="f-service" className="nt-form-select" name="entry.service">
                    <option value="">Select a service...</option>
                    <option value="software">Software Development</option>
                    <option value="iot">Hardware &amp; IoT Solutions</option>
                    <option value="ai">AI &amp; Automation Projects</option>
                    <option value="academic">Academic Project Guidance</option>
                    <option value="training">Training &amp; Workshops</option>
                  </select>
                </div>
                <div className="nt-form-group">
                  <label className="nt-form-label" htmlFor="f-msg">How Can We Help?</label>
                  <textarea
                    id="f-msg"
                    className="nt-form-textarea"
                    name="entry.1659687318"
                    placeholder="Describe your project or requirement..."
                  />
                </div>
                <button type="submit" className="nt-form-submit">
                  Send Message
                  <span style={{ display: "flex", width: 16, height: 16 }}>{Icon.send}</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;