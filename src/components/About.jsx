import React, { useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS — identical to Home.jsx
   ───────────────────────────────────────────────────────────── */
const T = {
  navy:      "#07091c",
  navyMid:   "#0d1236",
  blue:      "#1346e8",
  blueLight: "#e8effe",
  yellow:    "#f5c518",
  white:     "#ffffff",
  offWhite:  "#f7f8fc",
  border:    "#e4e8f0",
  text:      "#111827",
  muted:     "#6b7280",
  fontHead:  "'Syne', sans-serif",
  fontBody:  "'DM Sans', sans-serif",
};

/* ─────────────────────────────────────────────────────────────
   GLOBAL CSS — same system as Home.jsx
   ───────────────────────────────────────────────────────────── */
const ABOUT_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: ${T.fontBody}; background: ${T.white}; color: ${T.text}; line-height: 1.65; }

  /* ── Reveal animation ── */
  .nt-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .nt-reveal.nt-visible { opacity: 1; transform: none; }
  .nt-reveal-d1 { transition-delay: 0.1s !important; }
  .nt-reveal-d2 { transition-delay: 0.2s !important; }
  .nt-reveal-d3 { transition-delay: 0.3s !important; }
  .nt-reveal-d4 { transition-delay: 0.4s !important; }
  .nt-reveal-d5 { transition-delay: 0.5s !important; }
  .nt-reveal-d6 { transition-delay: 0.6s !important; }

  /* ── About Hero banner ── */
  .about-hero {
    background: ${T.navy}; padding: 80px 5% 90px;
    position: relative; overflow: hidden;
  }
  .about-hero::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 50% 60% at 80% 50%, rgba(19,70,232,0.2) 0%, transparent 70%),
      radial-gradient(ellipse 25% 35% at 5% 70%, rgba(245,197,24,0.07) 0%, transparent 60%);
  }
  .about-hero-inner {
    max-width: 1200px; margin: auto; position: relative; z-index: 1;
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;
  }
  .about-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(245,197,24,0.12); border: 1px solid rgba(245,197,24,0.3);
    border-radius: 100px; padding: 5px 14px;
    font-size: 0.78rem; font-weight: 600; color: ${T.yellow};
    letter-spacing: 0.04em; margin-bottom: 24px;
  }
  .about-h1 {
    font-family: ${T.fontHead}; font-weight: 800; color: #fff;
    font-size: clamp(2rem, 3.8vw, 3.2rem); line-height: 1.1;
    letter-spacing: -0.035em; margin-bottom: 22px;
  }
  .about-h1 em { font-style: normal; color: ${T.yellow}; }
  .about-hero-desc {
    font-size: 1.05rem; color: rgba(255,255,255,0.6);
    max-width: 500px; font-weight: 300; line-height: 1.78; margin-bottom: 36px;
  }
  .about-hero-cta {
    background: ${T.yellow}; color: ${T.navy};
    padding: 13px 28px; border-radius: 8px;
    font-size: 0.95rem; font-weight: 700; font-family: ${T.fontHead};
    text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
    transition: opacity 0.2s, transform 0.15s;
  }
  .about-hero-cta:hover { opacity: 0.88; transform: translateY(-2px); }

  /* Hero right — CEO card */
  .ceo-hero-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px; padding: 32px;
    display: flex; flex-direction: column; align-items: center; text-align: center; gap: 18px;
  }
  .ceo-avatar {
    width: 110px; height: 110px; border-radius: 50%;
    border: 3px solid ${T.yellow}; object-fit: cover;
    display: block;
  }
  .ceo-hero-name {
    font-family: ${T.fontHead}; font-size: 1.15rem; font-weight: 800; color: #fff;
  }
  .ceo-hero-role {
    font-size: 0.82rem; color: ${T.yellow}; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase; margin-top: 2px;
  }
  .ceo-hero-quote {
    font-size: 0.9rem; color: rgba(255,255,255,0.6); font-style: italic;
    line-height: 1.72; border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 16px; margin-top: 4px;
  }

  /* ── Trust bar ── */
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

  /* ── Section wrappers ── */
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
    font-size: 1rem; color: ${T.muted}; max-width: 600px;
    font-weight: 300; line-height: 1.78;
  }

  /* ── Services / Features grid ── */
  .about-bg-white { background: ${T.white}; }
  .about-bg-off   { background: ${T.offWhite}; }
  .about-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px; margin-top: 52px;
  }
  .about-card {
    background: ${T.offWhite}; border: 1px solid ${T.border};
    border-radius: 20px; overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: default; display: flex; flex-direction: column;
  }
  .about-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 48px rgba(19,70,232,0.1);
    border-color: #c2d0f8;
  }
  .about-card-img-wrap { position: relative; height: 180px; overflow: hidden; }
  .about-card-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s ease;
  }
  .about-card:hover .about-card-img { transform: scale(1.04); }
  .about-card-badge {
    position: absolute; top: 12px; left: 12px;
    background: ${T.yellow}; color: ${T.navy};
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em;
    text-transform: uppercase; padding: 4px 10px; border-radius: 100px;
  }
  .about-card-body { padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column; }
  .about-card-icon {
    width: 40px; height: 40px; border-radius: 9px;
    background: ${T.blueLight}; display: flex; align-items: center;
    justify-content: center; margin-bottom: 14px; flex-shrink: 0;
  }
  .about-card-icon svg { width: 20px; height: 20px; color: ${T.blue}; }
  .about-card-title {
    font-family: ${T.fontHead}; font-size: 1.05rem; font-weight: 700;
    color: ${T.navy}; margin-bottom: 8px;
  }
  .about-card-text { font-size: 0.875rem; color: ${T.muted}; line-height: 1.72; flex: 1; }
  .about-card-link {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.82rem; font-weight: 600; color: ${T.blue};
    text-decoration: none; margin-top: 16px;
  }
  .about-card-link svg { width: 13px; height: 13px; }

  /* ── Mission / Vision strip ── */
  .mv-strip {
    background: ${T.navy}; border-radius: 20px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 0;
    overflow: hidden; margin-top: 52px;
  }
  .mv-block { padding: 40px 36px; }
  .mv-block + .mv-block { border-left: 1px solid rgba(255,255,255,0.08); }
  .mv-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: ${T.yellow}; margin-bottom: 12px;
  }
  .mv-title {
    font-family: ${T.fontHead}; font-size: 1.4rem; font-weight: 800;
    color: #fff; margin-bottom: 14px; line-height: 1.2;
  }
  .mv-text { font-size: 0.9rem; color: rgba(255,255,255,0.58); line-height: 1.75; }

  /* ── CEO full section ── */
  .ceo-section { background: ${T.offWhite}; }
  .ceo-inner {
    max-width: 1200px; margin: auto;
    display: grid; grid-template-columns: 340px 1fr; gap: 64px; align-items: start;
  }
  .ceo-card {
    background: ${T.white}; border: 1px solid ${T.border};
    border-radius: 20px; padding: 36px; text-align: center;
    position: sticky; top: 84px;
  }
  .ceo-photo {
    width: 130px; height: 130px; border-radius: 50%;
    border: 3px solid ${T.yellow}; object-fit: cover;
    margin: 0 auto 18px; display: block;
  }
  .ceo-name {
    font-family: ${T.fontHead}; font-size: 1.2rem; font-weight: 800;
    color: ${T.navy}; margin-bottom: 4px;
  }
  .ceo-role {
    font-size: 0.78rem; font-weight: 700; color: ${T.blue};
    letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 18px;
  }
  .ceo-divider { border: none; border-top: 1px solid ${T.border}; margin: 18px 0; }
  .ceo-stat { margin-bottom: 12px; }
  .ceo-stat-num {
    font-family: ${T.fontHead}; font-size: 1.6rem; font-weight: 800; color: ${T.yellow};
  }
  .ceo-stat-lbl { font-size: 0.75rem; color: ${T.muted}; margin-top: 2px; }
  .ceo-stat-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .ceo-socials { display: flex; justify-content: center; gap: 10px; margin-top: 18px; }
  .ceo-social-btn {
    width: 36px; height: 36px; border-radius: 8px;
    background: ${T.blueLight}; color: ${T.blue};
    display: flex; align-items: center; justify-content: center;
    text-decoration: none; transition: background 0.2s;
  }
  .ceo-social-btn:hover { background: ${T.blue}; color: #fff; }
  .ceo-social-btn svg { width: 16px; height: 16px; }

  .ceo-content { display: flex; flex-direction: column; gap: 24px; padding-top: 8px; }
  .ceo-msg-title {
    font-family: ${T.fontHead}; font-size: 1.8rem; font-weight: 800;
    color: ${T.navy}; line-height: 1.2; letter-spacing: -0.025em; margin-bottom: 6px;
  }
  .ceo-msg-title em { font-style: normal; color: ${T.blue}; }
  .ceo-para { font-size: 0.95rem; color: ${T.muted}; line-height: 1.82; font-weight: 300; }
  .ceo-quote-block {
    background: ${T.navy}; border-radius: 16px; padding: 28px 32px;
    position: relative; overflow: hidden;
  }
  .ceo-quote-block::before {
    content: '"';
    position: absolute; top: -10px; left: 16px;
    font-family: ${T.fontHead}; font-size: 7rem; font-weight: 800;
    color: rgba(245,197,24,0.12); line-height: 1; pointer-events: none;
  }
  .ceo-quote-text {
    font-family: ${T.fontHead}; font-size: 1.15rem; font-weight: 600;
    color: #fff; line-height: 1.55; position: relative; z-index: 1;
  }
  .ceo-quote-attr {
    font-size: 0.8rem; color: ${T.yellow}; font-weight: 600;
    margin-top: 14px; letter-spacing: 0.04em;
  }
  .ceo-values { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .ceo-value-chip {
    background: ${T.blueLight}; border: 1px solid rgba(19,70,232,0.12);
    border-radius: 10px; padding: 14px 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .ceo-value-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: ${T.blue}; color: #fff;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .ceo-value-icon svg { width: 15px; height: 15px; }
  .ceo-value-label { font-size: 0.83rem; font-weight: 600; color: ${T.navy}; }

  /* ── Numbers section ── */
  .nums-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px; margin-top: 52px;
  }
  .num-card {
    background: ${T.white}; border: 1px solid ${T.border};
    border-radius: 16px; padding: 28px 24px; text-align: center;
    transition: transform 0.22s, border-color 0.22s;
  }
  .num-card:hover { transform: translateY(-4px); border-color: #c2d0f8; }
  .num-card.accent { background: ${T.navy}; border-color: transparent; }
  .num-card.accent .num-val { color: ${T.yellow}; }
  .num-card.accent .num-lbl { color: rgba(255,255,255,0.55); }
  .num-val {
    font-family: ${T.fontHead}; font-size: 2.6rem; font-weight: 800;
    color: ${T.blue}; letter-spacing: -0.03em;
  }
  .num-lbl { font-size: 0.85rem; color: ${T.muted}; margin-top: 6px; line-height: 1.4; }

  /* ── CTA footer strip ── */
  .about-cta {
    background: ${T.yellow}; padding: 56px 5%;
  }
  .about-cta-inner {
    max-width: 1200px; margin: auto;
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px;
  }
  .about-cta h2 {
    font-family: ${T.fontHead}; font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800; color: ${T.navy}; letter-spacing: -0.02em;
  }
  .about-cta p { font-size: 0.95rem; color: rgba(10,15,46,0.6); margin-top: 6px; }
  .about-cta-btn {
    background: ${T.navy}; color: #fff;
    padding: 13px 28px; border-radius: 8px;
    font-family: ${T.fontHead}; font-size: 0.95rem; font-weight: 700;
    text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
    transition: opacity 0.2s, transform 0.15s; white-space: nowrap;
  }
  .about-cta-btn:hover { opacity: 0.85; transform: translateY(-2px); }

  /* ── Footer ── */
  .nt-footer { background: #06071a; padding: 36px 5%; border-top: 1px solid rgba(255,255,255,0.06); }
  .nt-footer-inner {
    max-width: 1200px; margin: auto;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
  }
  .nt-footer-logo { font-family: ${T.fontHead}; font-size: 1.1rem; font-weight: 800; color: #fff; }
  .nt-footer-logo em { font-style: normal; color: ${T.yellow}; }
  .nt-footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.3); }
  .nt-footer-links { display: flex; gap: 22px; }
  .nt-footer-links a { font-size: 0.8rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
  .nt-footer-links a:hover { color: rgba(255,255,255,0.8); }

  /* ── Responsive ── */
  @media (max-width: 860px) {
    .about-hero-inner { grid-template-columns: 1fr; }
    .ceo-hero-card { display: none; }
    .ceo-inner { grid-template-columns: 1fr; gap: 40px; }
    .ceo-card { position: static; }
    .mv-strip { grid-template-columns: 1fr; }
    .mv-block + .mv-block { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); }
    .nt-nav-links { display: none; }
    .ceo-values { grid-template-columns: 1fr; }
    .about-cta-inner { flex-direction: column; align-items: flex-start; }
  }
`;

/* ─────────────────────────────────────────────────────────────
   INLINE SVG ICONS
   ───────────────────────────────────────────────────────────── */
const Ic = {
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  graduation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  factory: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V7l6-3v16M8 20V11l6-3v12M14 20V9l6-2v13"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  rocket: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
};

/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL HOOK
   ───────────────────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("nt-visible"); ob.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".nt-reveal").forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=640&q=80",
    badge: "Web",
    icon: Ic.globe,
    title: "Personal & Company Websites",
    text: "Modern, responsive websites for individuals, startups, and businesses to establish a powerful online presence — built with performance and SEO in mind.",
    link: "/#contact",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=640&q=80",
    badge: "Academic",
    icon: Ic.graduation,
    title: "Student Final Year Projects",
    text: "End-to-end support for final year engineering projects in software, hardware, IoT, AI, robotics, and embedded systems — from concept to submission.",
    link: "/#contact",
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80",
    badge: "Industry",
    icon: Ic.factory,
    title: "Industry-Level Projects",
    text: "End-to-end industrial automation projects, prototypes, and scalable tech systems for startups and established businesses.",
    link: "/#contact",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&q=80",
    badge: "Dev",
    icon: Ic.code,
    title: "Software & Hardware Solutions",
    text: "From mobile apps and desktop tools to embedded hardware and IoT devices — tailored tech solutions that solve real-world problems.",
    link: "/#contact",
  },
  {
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=640&q=80",
    badge: "Research",
    icon: Ic.book,
    title: "Research & Thesis Support",
    text: "Practical guidance for research theses, academic papers, and innovative ideas — from literature review to final implementation.",
    link: "/#contact",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&q=80",
    badge: "Training",
    icon: Ic.users,
    title: "Mentorship & Training",
    text: "Hands-on workshops, mentorship programs, and internship opportunities in IoT, robotics, AI, and full-stack development.",
    link: "/#contact",
  },
];

const CEO_VALUES = [
  { icon: Ic.rocket, label: "Innovation First" },
  { icon: Ic.heart,  label: "Student-Centred" },
  { icon: Ic.star,   label: "Quality Driven" },
  { icon: Ic.users,  label: "Community Impact" },
];

const NUMBERS = [
  { val: "20+", lbl: "Projects Delivered",        accent: false },
  { val: "6",    lbl: "Service Domains",            accent: false },
  { val: "200+",  lbl: "Students Trained",   accent: true  },
  { val: "98%",  lbl: "Client Satisfaction Rate",  accent: false },
  { val: "24h",  lbl: "Response Guarantee",         accent: false },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
const AboutUs = () => {
  useReveal();

  return (
    <>
      {/* Inject CSS */}
      <style>{ABOUT_CSS}</style>

      {/* ── JSON-LD: Organization + AboutPage ─────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "AboutPage"],
        "name": "NovaTech Innovative Solutions",
        "url": "https://www.novatechinnovative.com/about",
        "description": "NovaTech Innovative Solutions provides software development, hardware & IoT, AI projects, academic guidance, research support, and professional training workshops.",
        "founder": {
          "@type": "Person",
          "name": "Chandramouli Haldar",
          "jobTitle": "Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "NovaTech Innovative Solutions" }
        },
        "knowsAbout": ["Software Development", "IoT", "Embedded Systems", "AI", "Machine Learning", "Academic Project Guidance", "Training & Workshops"],
        "serviceArea": { "@type": "Country", "name": "India" }
      })}} />

         <main>
        {/* ── ABOUT HERO ────────────────────────────────────── */}
        <section className="about-hero" aria-labelledby="about-heading">
          <div className="about-hero-inner">
            {/* Left */}
            <div>
              <div className="about-badge">💡 Your Innovation Partner</div>
              <h1 className="about-h1" id="about-heading">
                Who We <em>Are</em> &amp;<br />What We Stand For
              </h1>
              <p className="about-hero-desc">
                At <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>NovaTech Innovative Solutions</strong>, we specialize in end-to-end solutions for students, professionals, and industries — transforming ideas into impactful technology with passion and precision.
              </p>
              <a href="/#contact" className="about-hero-cta">
                Work With Us
                <span style={{ display: "flex", width: 16, height: 16 }}>{Ic.arrow}</span>
              </a>
            </div>

            {/* Right — CEO snapshot */}
                         
             
            </div>
        
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────── */}
        <div className="nt-trust" role="complementary" aria-label="Trust signals">
          <div className="nt-trust-inner">
            {[["🎓","Academic Specialists"], ["⚙️","End-to-End Delivery"], ["✅","Transparent Pricing"], ["🤝","Dedicated Mentorship"]].map(([ic, lb]) => (
              <span key={lb} className="nt-trust-item"><span>{ic}</span>{lb}</span>
            ))}
          </div>
        </div>

        {/* ── WHAT WE DO ────────────────────────────────────── */}
        <section
          id="what-we-do"
          className="nt-section about-bg-white"
          aria-labelledby="features-heading"
        >
          <div className="nt-section-inner">
            <p className="nt-section-label nt-reveal">What We Do</p>
            <h2 className="nt-section-title nt-reveal" id="features-heading">
              Six Ways We Deliver Value
            </h2>
            <p className="nt-section-sub nt-reveal">
              From personal websites to industrial-grade systems — NovaTech bridges the gap between education and the real world.
            </p>

            <div className="about-grid" role="list">
              {FEATURES.map((f, i) => (
                <article
                  key={f.title}
                  className={`about-card nt-reveal nt-reveal-d${(i % 3) + 1}`}
                  role="listitem"
                  aria-labelledby={`feat-${i}`}
                >
                  <div className="about-card-img-wrap">
                    <img
                      src={f.img}
                      alt={`NovaTech — ${f.title}`}
                      className="about-card-img"
                      loading="lazy"
                    />
                    <span className="about-card-badge">{f.badge}</span>
                  </div>
                  <div className="about-card-body">
                    <div className="about-card-icon" aria-hidden="true">{f.icon}</div>
                    <h3 className="about-card-title" id={`feat-${i}`}>{f.title}</h3>
                    <p className="about-card-text">{f.text}</p>
                    <a href={f.link} className="about-card-link">
                      Learn more <span style={{ display: "flex", width: 13, height: 13 }}>{Ic.arrow}</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ──────────────────────────────── */}
        <section className="nt-section about-bg-off" aria-labelledby="mv-heading">
          <div className="nt-section-inner">
            <p className="nt-section-label nt-reveal">Our Purpose</p>
            <h2 className="nt-section-title nt-reveal" id="mv-heading">Mission &amp; Vision</h2>
            <div className="mv-strip nt-reveal nt-reveal-d1">
              <div className="mv-block">
                <div className="mv-label">Our Mission</div>
                <div className="mv-title">Empower Through Technology</div>
                <p className="mv-text">
                  To empower students, startups, and industries with innovative solutions that merge creativity, technology, and education — making cutting-edge tech accessible to everyone.
                </p>
              </div>
              <div className="mv-block">
                <div className="mv-label">Our Vision</div>
                <div className="mv-title">Bridge Academia &amp; Industry</div>
                <p className="mv-text">
                  To be India's most trusted innovation partner — where every student's idea finds a path to real-world impact, and every business finds a reliable technology companion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── NUMBERS ───────────────────────────────────────── */}
        <section className="nt-section about-bg-white" aria-labelledby="nums-heading">
          <div className="nt-section-inner" style={{ textAlign: "center" }}>
            <p className="nt-section-label nt-reveal">By the Numbers</p>
            <h2 className="nt-section-title nt-reveal" id="nums-heading">NovaTech at a Glance</h2>
            <div className="nums-grid">
              {NUMBERS.map((n, i) => (
                <div key={n.val} className={`num-card nt-reveal nt-reveal-d${i + 1}${n.accent ? " accent" : ""}`}>
                  <div className="num-val">{n.val}</div>
                  <div className="num-lbl">{n.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CEO SECTION ───────────────────────────────────── */}
        <section
          id="founder"
          className="nt-section ceo-section"
          aria-labelledby="ceo-heading"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="ceo-inner">
            {/* Sticky card */}
            <div className="ceo-card nt-reveal">
              <img
                src="/CEO_DP.jpg"
                alt="Chandramouli Haldar, Founder and CEO of NovaTech Innovative Solutions"
                className="ceo-photo"
                itemProp="image"
              />
              <div className="ceo-name" itemProp="name">Chandramouli Haldar</div>
              <div className="ceo-role" itemProp="jobTitle">Founder &amp; CEO</div>
              <hr className="ceo-divider" />
              <div className="ceo-stat-row">
                <div className="ceo-stat">
                  <div className="ceo-stat-num">20+</div>
                  <div className="ceo-stat-lbl">Projects Led</div>
                </div>
                <div className="ceo-stat">
                  <div className="ceo-stat-num">200+</div>
                  <div className="ceo-stat-lbl">Trained</div>
                </div>
              </div>
              <div className="ceo-socials" aria-label="Founder social links">
                <a
                  href="https://www.linkedin.com/in/chandramouli-haldar"
                  className="ceo-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chandramouli Haldar on LinkedIn"
                >
                  <span style={{ display: "flex" }}>{Ic.linkedin}</span>
                </a>
                <a
                  href="mailto:novatechinnovativesolution@gmail.com"
                  className="ceo-social-btn"
                  aria-label="Email NovaTech"
                >
                  <span style={{ display: "flex" }}>{Ic.mail}</span>
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="ceo-content">
              <div className="nt-reveal">
                <h2 className="ceo-msg-title" id="ceo-heading">
                  Message from the<br /><em>Founder &amp; CEO</em>
                </h2>
              </div>

              <p className="ceo-para nt-reveal nt-reveal-d1" itemProp="description">
                At NovaTech, our mission has always been clear — to empower students, startups, and industries with innovative solutions that merge creativity, technology, and education. We don't just build projects; we build futures.
              </p>
              <p className="ceo-para nt-reveal nt-reveal-d2">
                From final year academic projects to large-scale industrial deployments, our goal is to bridge the gap between academia and the real world. Every idea brought to us is treated with the same passion and precision — whether it's a student's first IoT prototype or a company's next product launch.
              </p>
              <p className="ceo-para nt-reveal nt-reveal-d3">
                We believe technology should be accessible, affordable, and impactful. That's why NovaTech operates on a foundation of transparency, mentorship, and genuine care for every client and student we work with.
              </p>

              <div className="ceo-quote-block nt-reveal nt-reveal-d2">
                <p className="ceo-quote-text">
                  Your ideas, our innovation — together we build the future.
                </p>
                <p className="ceo-quote-attr">— Chandramouli Haldar, Founder &amp; CEO</p>
              </div>

              <div>
                <p className="nt-section-label nt-reveal" style={{ marginBottom: 14 }}>Core Values</p>
                <div className="ceo-values nt-reveal nt-reveal-d1">
                  {CEO_VALUES.map((v) => (
                    <div key={v.label} className="ceo-value-chip">
                      <div className="ceo-value-icon" aria-hidden="true">
                        <span style={{ display: "flex", width: 15, height: 15 }}>{v.icon}</span>
                      </div>
                      <span className="ceo-value-label">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA STRIP ─────────────────────────────────────── */}
        <div className="about-cta" role="complementary">
          <div className="about-cta-inner">
            <div>
              <h2>Ready to Start Your Project?</h2>
              <p>Let's turn your idea into reality — consultation is free.</p>
            </div>
            <a href="/#contact" className="about-cta-btn">
              Contact NovaTech
              <span style={{ display: "flex", width: 16, height: 16 }}>{Ic.arrow}</span>
            </a>
          </div>
        </div>
      </main>


    </>
  );
};

export default AboutUs;