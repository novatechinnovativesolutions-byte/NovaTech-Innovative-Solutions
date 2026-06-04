import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/* ─────────────────────────────────────────────
   NovaTech Innovative Solutions — SEO Navbar
   ─────────────────────────────────────────────
   SEO Layers:
   • <header> with role="banner" (ARIA landmark — search engines use landmarks)
   • <nav> with aria-label="Main navigation" (helps Google understand page structure)
   • All links have descriptive text (no "click here")
   • Active link marked with aria-current="page" (accessibility + Googlebot signal)
   • Logo img has keyword-rich alt text
   • Structured links use exact service keywords for internal anchor text SEO
   • rel="noopener noreferrer" on external links (security + SEO hygiene)
   • Sticky nav keeps brand signals in viewport (reduces bounce rate)
   ───────────────────────────────────────────── */

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/features", label: "Services" },
    { to: "/lab", label: "R&D Lab" },
  { to: "/projects", label: "Projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ── Close mobile menu on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* ── Inject fonts + keyframes once ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --nt-navy:   #0B1F4A;
          --nt-blue:   #1E3A8A;
          --nt-sky:    #2563EB;
          --nt-yellow: #FFD700;
          --nt-gold:   #F59E0B;
          --nt-white:  #FFFFFF;
          --nt-glass:  rgba(255,255,255,0.06);
          --nt-border: rgba(255,255,255,0.10);
          --nt-shadow: 0 8px 32px rgba(11,31,74,0.45);
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
          --nav-h: 68px;
        }

        /* ── Base Reset ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Navbar wrapper ── */
        .nt-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--nt-navy);
          border-bottom: 1px solid var(--nt-border);
          transition: box-shadow 0.3s ease, background 0.3s ease;
          font-family: var(--font-body);
        }
        .nt-header.scrolled {
          background: rgba(11,31,74,0.97);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: var(--nt-shadow);
        }

        /* ── Top accent bar ── */
        .nt-accent-bar {
          height: 3px;
          background: linear-gradient(90deg, var(--nt-sky) 0%, var(--nt-yellow) 60%, var(--nt-gold) 100%);
        }

        /* ── Inner container ── */
        .nt-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        /* ── Logo ── */
        .nt-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nt-logo img {
          height: 46px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(255,215,0,0.25));
          transition: filter 0.3s ease;
        }
        .nt-logo:hover img { filter: drop-shadow(0 4px 14px rgba(255,215,0,0.5)); }
        .nt-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .nt-logo-text span:first-child {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--nt-white);
          letter-spacing: 0.02em;
        }
        .nt-logo-text span:last-child {
          font-size: 0.62rem;
          font-weight: 500;
          color: var(--nt-yellow);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ── Desktop nav list ── */
        .nt-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        /* ── Nav link ── */
        .nt-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .nt-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          background: var(--nt-yellow);
          border-radius: 2px;
          transition: transform 0.25s ease;
        }
        .nt-link:hover,
        .nt-link[aria-current="page"] {
          color: var(--nt-white);
          background: var(--nt-glass);
        }
        .nt-link:hover::after,
        .nt-link[aria-current="page"]::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nt-link[aria-current="page"] {
          color: var(--nt-yellow);
        }

        /* ── CTA button ── */
        .nt-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.25rem;
          background: var(--nt-yellow);
          color: var(--nt-navy);
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 7px;
          border: 2px solid transparent;
          letter-spacing: 0.02em;
          transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nt-cta:hover {
          background: transparent;
          color: var(--nt-yellow);
          border-color: var(--nt-yellow);
          box-shadow: 0 0 18px rgba(255,215,0,0.28);
          transform: translateY(-1px);
        }
        .nt-cta-icon { font-size: 0.95rem; }

        /* ── Hamburger ── */
        .nt-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 42px;
          height: 42px;
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 8px;
          cursor: pointer;
          gap: 5px;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .nt-burger:hover { background: rgba(255,255,255,0.12); }
        .nt-burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--nt-white);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .nt-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nt-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nt-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile overlay ── */
        .nt-mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(11,31,74,0.0);
          z-index: 998;
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .nt-mobile-overlay.open {
          background: rgba(11,31,74,0.75);
          pointer-events: all;
        }

        /* ── Mobile drawer ── */
        .nt-mobile-nav {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: min(88vw, 340px);
          height: 100dvh;
          background: var(--nt-navy);
          border-left: 1px solid var(--nt-border);
          box-shadow: -8px 0 40px rgba(0,0,0,0.4);
          z-index: 999;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        .nt-mobile-nav.open { transform: translateX(0); }

        .nt-mobile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .nt-mobile-close {
          background: none;
          border: 1px solid var(--nt-border);
          color: var(--nt-white);
          width: 36px;
          height: 36px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .nt-mobile-close:hover { background: var(--nt-glass); }

        .nt-mobile-links {
          list-style: none;
          padding: 1rem 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .nt-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .nt-mobile-link:hover,
        .nt-mobile-link[aria-current="page"] {
          background: var(--nt-glass);
          color: var(--nt-white);
        }
        .nt-mobile-link[aria-current="page"] { color: var(--nt-yellow); }
        .nt-mobile-link-arrow { font-size: 0.75rem; opacity: 0.45; }

        .nt-mobile-cta-wrap {
          padding: 1rem 1.5rem 2rem;
        }
        .nt-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.9rem 1rem;
          background: var(--nt-yellow);
          color: var(--nt-navy);
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 8px;
          letter-spacing: 0.03em;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }
        .nt-mobile-cta:hover {
          background: var(--nt-gold);
          box-shadow: 0 4px 20px rgba(255,215,0,0.3);
        }

        .nt-mobile-divider {
          margin: 0.5rem 1.5rem;
          border: none;
          border-top: 1px solid var(--nt-border);
        }

        .nt-mobile-tagline {
          padding: 0 1.5rem 1rem;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          font-style: italic;
          text-align: center;
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1024px) {
          .nt-link { padding: 0.4rem 0.55rem; font-size: 0.85rem; }
        }
        @media (max-width: 860px) {
          .nt-nav, .nt-cta { display: none !important; }
          .nt-burger { display: flex; }
          .nt-mobile-nav, .nt-mobile-overlay { display: flex; }
        }
        @media (max-width: 400px) {
          .nt-logo-text { display: none; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════
          HEADER — role="banner" signals page header
          to search engines and screen readers
      ═══════════════════════════════════════════ */}
      <header
        className={`nt-header${scrolled ? " scrolled" : ""}`}
        role="banner"
        ref={navRef}
      >
        {/* Gradient accent line — brand identity signal */}
        <div className="nt-accent-bar" aria-hidden="true" />

        <div className="nt-container">

          {/* ── Logo ── */}
          {/* alt text includes brand name + core keywords for image SEO */}
          <Link
            to="/"
            className="nt-logo"
            aria-label="NovaTech Innovative Solutions — Home"
          >
          
            <div className="nt-logo-text">
              <span>NovaTech</span>
              <span>Innovative Solutions</span>
            </div>
          </Link>

          {/* ── Desktop Navigation ──
              <nav> + aria-label enables Google to parse
              the navigation landmark separately from content */}
          <nav aria-label="Main navigation">
            <ul className="nt-nav" role="listitem">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="nt-link"
                    aria-current={isActive(to) ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── CTA ── descriptive anchor text = SEO + UX ── */}
          <a
            href="https://wa.me/918336001208?text=Hello, I need some help with my Project !"
            target="_blank"
            rel="noopener noreferrer"
            className="nt-cta"
            aria-label="Contact NovaTech on WhatsApp for project help"
          >
            <span className="nt-cta-icon">💬</span>
            Get in Touch
          </a>

          {/* ── Hamburger (mobile) ── */}
          <button
            className={`nt-burger${isOpen ? " open" : ""}`}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="nt-mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          MOBILE OVERLAY + DRAWER
          (rendered outside header so it covers
           the full viewport; hidden from crawlers
           via aria-hidden when closed)
      ═══════════════════════════════════════ */}
      <div
        className={`nt-mobile-overlay${isOpen ? " open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="nt-mobile-menu"
        className={`nt-mobile-nav${isOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="nt-mobile-top">
          <Link
            to="/"
            className="nt-logo"
            onClick={() => setIsOpen(false)}
            aria-label="NovaTech — Home"
          >
            <img
              src="https://raw.githubusercontent.com/NovaTech-Innovate-Solutions/NovaTech-Innovate-Solutions.github.io/refs/heads/main/logofianla-removebg-preview.png"
              alt="NovaTech Innovative Solutions"
              style={{ height: 40 }}
            />
            <div className="nt-logo-text">
              <span>NovaTech</span>
              <span>Innovative Solutions</span>
            </div>
          </Link>
          <button
            className="nt-mobile-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <ul className="nt-mobile-links" role="listitem">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to} >
              <Link
                to={to}
                className="nt-mobile-link"
                aria-current={isActive(to) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
                <span className="nt-mobile-link-arrow" aria-hidden="true">›</span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="nt-mobile-divider" />

        {/* Drawer CTA */}
        <div className="nt-mobile-cta-wrap">
          <a
            href="https://wa.me/918336001208?text=Hello, I need some help with my Project !"
            target="_blank"
            rel="noopener noreferrer"
            className="nt-mobile-cta"
            aria-label="Contact NovaTech on WhatsApp"
            onClick={() => setIsOpen(false)}
          >
            <span aria-hidden="true">💬</span>
            Get in Touch on WhatsApp
          </a>
        </div>

        <p className="nt-mobile-tagline">
          Designed, developed &amp; deployed with passion.
        </p>
      </nav>
    </>
  );
};

export default Navbar;