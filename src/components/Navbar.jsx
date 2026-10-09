import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/* ─────────────────────────────────────────────
   NovaTech Innovative Solutions — Navbar (light theme)
   Same tokens as the R&D services page: navy text, electric blue
   accent, yellow call-to-action, Syne + DM Sans.
   Logo files go in /public:  logo-nav.png  (wordmark, transparent)
   SEO / a11y: <header> banner landmark, labelled <nav>s, aria-current
   on the active link, descriptive alt text, real <a> links,
   closed mobile drawer is hidden from keyboard and screen readers.
   ───────────────────────────────────────────── */

const NAV_LINKS = [
  { to: "/",                         label: "Home"         },
  { to: "/about",                    label: "About Us"     },
  { to: "/features",                 label: "Services"     },

  { to: "/Training",                  label: "Training"      },
  { to: "/lab",                      label: "R&D Services" },
];

const WA_URL = `https://wa.me/918336001208?text=${encodeURIComponent("Hello, I need some help with my Project!")}`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  /* Close on outside click (header and drawer both count as "inside") and on Escape */
  useEffect(() => {
    const onDown = (e) => {
      const inside = (headerRef.current && headerRef.current.contains(e.target)) ||
                     (drawerRef.current && drawerRef.current.contains(e.target));
      if (!inside) setIsOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');

        :root {
          --nt-navy:   #0A0F2E;
          --nt-blue:   #1346E8;
          --nt-blue-l: #EEF3FF;
          --nt-yellow: #FFC800;
          --nt-text:   #1B2140;
          --nt-muted:  #5B6482;
          --nt-border: #E3E8F5;
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
          --nav-h: 68px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Header (sticky, height = --nav-h so page tabs can sit right under it) ── */
        .nt-header {
          position: sticky; top: 0; z-index: 1000;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--nt-border);
          font-family: var(--font-body);
          transition: box-shadow .25s ease;
        }
        .nt-header.scrolled { box-shadow: 0 8px 28px rgba(19,70,232,0.10); }
        /* brand accent line sits on top edge without adding height */
        .nt-header::before {
          content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--nt-blue), var(--nt-yellow));
        }

        .nt-container {
          max-width: 1280px; margin: 0 auto; padding: 0 1.5rem;
          height: var(--nav-h);
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
        }

        /* ── Logo ── */
        .nt-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
        .nt-logo img { height: 46px; width: auto; display: block; }

        /* ── Desktop links ── */
        .nt-nav { display: flex; align-items: center; gap: .25rem; list-style: none; }
        .nt-link {
          display: inline-flex; align-items: center;
          padding: .5rem .85rem; border-radius: 8px;
          font-size: .92rem; font-weight: 500; color: var(--nt-navy);
          text-decoration: none; white-space: nowrap;
          transition: background .2s ease, color .2s ease;
        }
        .nt-link:hover { background: var(--nt-blue-l); }
        .nt-link[aria-current="page"] { background: var(--nt-blue-l); color: var(--nt-blue); font-weight: 700; }

        /* ── CTAs ── */
        .nt-cta-group { display: flex; align-items: center; gap: .6rem; flex-shrink: 0; }
        .nt-cta-outline, .nt-cta-filled {
          display: inline-flex; align-items: center; gap: .4rem;
          padding: .5rem 1.1rem; border-radius: 8px;
          font-family: var(--font-display); font-size: .85rem; font-weight: 700;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          transition: transform .15s ease, background .2s ease, color .2s ease, box-shadow .2s ease;
        }
        .nt-cta-outline { border: 2px solid var(--nt-navy); color: var(--nt-navy); background: transparent; }
        .nt-cta-outline:hover { background: var(--nt-navy); color: #fff; transform: translateY(-1px); }
        .nt-cta-filled { border: 2px solid var(--nt-yellow); background: var(--nt-yellow); color: var(--nt-navy); }
        .nt-cta-filled:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(255,200,0,.45); }
        .nt-link:focus-visible, .nt-cta-outline:focus-visible, .nt-cta-filled:focus-visible,
        .nt-burger:focus-visible, .nt-mobile-link:focus-visible, .nt-mobile-close:focus-visible,
        .nt-logo:focus-visible { outline: 3px solid var(--nt-yellow); outline-offset: 3px; }

        /* ── Burger ── */
        .nt-burger {
          display: none; flex-direction: column; justify-content: center; align-items: center; gap: 5px;
          width: 42px; height: 42px; flex-shrink: 0; cursor: pointer;
          background: #fff; border: 1px solid var(--nt-border); border-radius: 8px;
        }
        .nt-burger span { display: block; width: 22px; height: 2px; background: var(--nt-navy); border-radius: 2px; transition: transform .3s ease, opacity .3s ease; }
        .nt-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nt-burger.open span:nth-child(2) { opacity: 0; }
        .nt-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile overlay + drawer ── */
        .nt-mobile-overlay {
          display: none; position: fixed; inset: 0; z-index: 998;
          background: rgba(10,15,46,0); pointer-events: none; transition: background .3s ease;
        }
        .nt-mobile-overlay.open { background: rgba(10,15,46,.55); pointer-events: all; }
        .nt-mobile-nav {
          display: none; position: fixed; top: 0; right: 0; z-index: 999;
          width: min(88vw, 340px); height: 100dvh; overflow-y: auto; flex-direction: column;
          background: #fff; border-left: 1px solid var(--nt-border);
          box-shadow: -8px 0 40px rgba(10,15,46,.18);
          transform: translateX(100%); visibility: hidden;
          transition: transform .35s cubic-bezier(.4,0,.2,1), visibility 0s linear .35s;
          font-family: var(--font-body);
        }
        .nt-mobile-nav.open { transform: translateX(0); visibility: visible; transition-delay: 0s; }
        .nt-mobile-top { display: flex; align-items: center; justify-content: space-between; padding: 1.1rem 1.5rem; border-bottom: 1px solid var(--nt-border); }
        .nt-mobile-close {
          width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
          background: #fff; color: var(--nt-navy); border: 1px solid var(--nt-border); border-radius: 8px; cursor: pointer; font-size: 1rem;
        }
        .nt-mobile-links { list-style: none; padding: 1rem; display: flex; flex-direction: column; gap: .25rem; }
        .nt-mobile-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: .85rem 1rem; border-radius: 8px;
          color: var(--nt-navy); font-size: 1rem; font-weight: 500; text-decoration: none;
          transition: background .2s ease, color .2s ease;
        }
        .nt-mobile-link:hover { background: var(--nt-blue-l); }
        .nt-mobile-link[aria-current="page"] { background: var(--nt-blue-l); color: var(--nt-blue); font-weight: 700; }
        .nt-mobile-arrow { font-size: .8rem; opacity: .5; }
        .nt-mobile-divider { margin: .25rem 1.5rem; border: none; border-top: 1px solid var(--nt-border); }
        .nt-mobile-cta-wrap { padding: 1rem 1.5rem 1.5rem; display: flex; flex-direction: column; gap: .65rem; }
        .nt-mobile-cta { justify-content: center; width: 100%; padding: .85rem 1rem; font-size: .95rem; }
        .nt-mobile-tagline { padding: 0 1.5rem 1.5rem; font-size: .78rem; color: var(--nt-muted); text-align: center; }

        /* ── Responsive ── */
        @media (max-width: 1100px) { .nt-link { padding: .45rem .6rem; font-size: .88rem; } }
        @media (max-width: 960px)  {
          .nt-nav, .nt-cta-group { display: none !important; }
          .nt-burger { display: flex; }
          .nt-mobile-nav, .nt-mobile-overlay { display: flex; }
        }
        @media (max-width: 400px) { .nt-logo img { height: 38px; } }
        @media (prefers-reduced-motion: reduce) { .nt-header *, .nt-mobile-nav, .nt-mobile-overlay { transition: none !important; } }
      `}</style>

      <header className={`nt-header${scrolled ? " scrolled" : ""}`} role="banner" ref={headerRef}>
        <div className="nt-container">
          <Link to="/" className="nt-logo" aria-label="NovaTech Innovative Solutions — Home">
            <img
              src="/logo-nav.png"
              alt="NovaTech Innovative Solutions"
              width="60"
              height="auto"
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          <nav aria-label="Main navigation">
            <ul className="nt-nav">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="nt-link" aria-current={isActive(to) ? "page" : undefined}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nt-cta-group" role="group" aria-label="Quick actions">
            {/* <Link to="/lab" className="nt-cta-outline" aria-label="Visit NovaTech R&D Lab — AI, IoT and Embedded Systems Research">
              <span aria-hidden="true">🔬</span>R&amp;D Lab
            </Link> */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nt-cta-filled" aria-label="Contact NovaTech on WhatsApp for project help">
              <span aria-hidden="true">💬</span>Get in Touch
            </a>
          </div>

          <button
            className={`nt-burger${isOpen ? " open" : ""}`}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="nt-mobile-menu"
          >
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`nt-mobile-overlay${isOpen ? " open" : ""}`} onClick={() => setIsOpen(false)} aria-hidden="true" />

      <nav id="nt-mobile-menu" ref={drawerRef} className={`nt-mobile-nav${isOpen ? " open" : ""}`} aria-label="Mobile navigation" aria-hidden={!isOpen}>
        <div className="nt-mobile-top">
          <Link to="/" className="nt-logo" onClick={() => setIsOpen(false)} aria-label="NovaTech — Home">
            <img src="/logo-nav.png" alt="NovaTech Innovative Solutions" width="122" height="39" style={{ height: 39 }} />
          </Link>
          <button className="nt-mobile-close" onClick={() => setIsOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <ul className="nt-mobile-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="nt-mobile-link" aria-current={isActive(to) ? "page" : undefined} onClick={() => setIsOpen(false)}>
                {label}<span className="nt-mobile-arrow" aria-hidden="true">›</span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="nt-mobile-divider" />

        <div className="nt-mobile-cta-wrap">
          {/* <Link to="/lab" className="nt-cta-outline nt-mobile-cta" aria-label="Visit NovaTech R&D Lab" onClick={() => setIsOpen(false)}>
            <span aria-hidden="true">🔬</span>R&amp;D Lab
          </Link> */}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nt-cta-filled nt-mobile-cta" aria-label="Contact NovaTech on WhatsApp" onClick={() => setIsOpen(false)}>
            <span aria-hidden="true">💬</span>Get in Touch on WhatsApp
          </a>
        </div>

        <p className="nt-mobile-tagline">From Ideas to Innovation.</p>
      </nav>
    </>
  );
};

export default Navbar;