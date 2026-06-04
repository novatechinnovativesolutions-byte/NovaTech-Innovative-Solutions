import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* ─────────────────────────────────────────────
   NovaTech Innovative Solutions — SEO Footer
   ─────────────────────────────────────────────
   SEO Layers:
   • <footer> with role="contentinfo" — ARIA landmark
   • Schema.org Organization microdata inline
   • Descriptive, keyword-rich anchor text on all links
   • Social links use aria-label with brand + platform name
   • Logo alt text includes brand + service keywords
   • Address wrapped in <address> tag (helps local SEO)
   • Internal links use <Link> for SPA routing (no full reload)
   • Copyright year auto-updates (freshness signal)
   ───────────────────────────────────────────── */

const SOCIAL_LINKS = [
  {
    href: "https://github.com/NovaTech-Innovate-Solutions",
    icon: faGithub,
    label: "NovaTech Innovative Solutions on GitHub",
  },
  {
    href: "https://www.linkedin.com/in/novatechinnovativesolutions/",
    icon: faLinkedin,
    label: "NovaTech Innovative Solutions on LinkedIn",
  },
  {
    href: "https://instagram.com/",
    icon: faInstagram,
    label: "NovaTech Innovative Solutions on Instagram",
  },
  {
    href: "https://www.youtube.com/channel/UC2wbdTuQ_HpWNtcZaP14qiQ",
    icon: faYoutube,
    label: "NovaTech Innovative Solutions on YouTube",
  },
];

const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { to: "/about",    label: "About NovaTech" },
      { to: "/projects", label: "Our Projects" },
      { to: "/lab",      label: "R&D Lab" },
    ],
  },
  {
    heading: "Services",
    links: [
      { to: "/features", label: "Software Development" },
      { to: "/features", label: "Hardware Solutions" },
      { to: "/features", label: "IoT & AI/ML Systems" },
      { to: "/features", label: "Web & App Development" },
    ],
  },
  {
    heading: "Learning",
    links: [
      { to: "/features", label: "Academic Project Guidance" },
      { to: "/features", label: "Training & Workshops" },
      { to: "/pricing",  label: "Pricing Plans" },
    ],
  },
 
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
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
          --nt-muted:  rgba(255,255,255,0.55);
          --nt-border: rgba(255,255,255,0.09);
          --nt-glass:  rgba(255,255,255,0.04);
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
        }

        /* ── Footer shell ── */
        .ntf-footer {
          background: var(--nt-navy2);
          color: var(--nt-white);
          font-family: var(--font-body);
          border-top: 1px solid var(--nt-border);
          position: relative;
          overflow: hidden;
        }

        /* subtle background glow */
        .ntf-footer::before {
          content: '';
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Top accent bar ── */
        .ntf-accent {
          height: 3px;
          background: linear-gradient(90deg, var(--nt-sky) 0%, var(--nt-yellow) 60%, var(--nt-gold) 100%);
        }

        /* ── Main grid ── */
        .ntf-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2rem;
        }

        .ntf-grid {
          display: grid;
          grid-template-columns: 1.6fr repeat(4, 1fr);
          gap: 2.5rem 2rem;
          align-items: start;
        }

        /* ── Brand column ── */
        .ntf-brand {}
        .ntf-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          text-decoration: none;
        }
        .ntf-logo-wrap img {
          height: 44px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(255,215,0,0.2));
        }
        .ntf-brand-text {}
        .ntf-brand-text strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 800;
          color: var(--nt-white);
          letter-spacing: 0.02em;
        }
        .ntf-brand-text span {
          font-size: 0.6rem;
          font-weight: 500;
          color: var(--nt-yellow);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ntf-tagline {
          font-size: 0.85rem;
          color: var(--nt-muted);
          line-height: 1.65;
          margin-bottom: 1.25rem;
          max-width: 240px;
        }

        /* ── Social ── */
        .ntf-social {
          display: flex;
          gap: 0.6rem;
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
          flex-wrap: wrap;
        }
        .ntf-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }
        .ntf-social a:hover {
          background: var(--nt-yellow);
          color: var(--nt-navy);
          border-color: var(--nt-yellow);
          transform: translateY(-2px);
        }

        /* ── Newsletter mini CTA ── */
        .ntf-cta-strip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          border-radius: 8px;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .ntf-cta-strip:hover {
          background: rgba(37,99,235,0.28);
          border-color: var(--nt-sky);
        }
        .ntf-cta-strip-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--nt-yellow);
          flex-shrink: 0;
          animation: ntf-pulse 2s infinite;
        }
        @keyframes ntf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }

        /* ── Link columns ── */
        .ntf-col {}
        .ntf-col-heading {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--nt-yellow);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .ntf-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .ntf-link-list a {
          font-size: 0.86rem;
          color: var(--nt-muted);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: inline-block;
        }
        .ntf-link-list a:hover {
          color: var(--nt-white);
          padding-left: 4px;
        }

        /* ── Divider ── */
        .ntf-divider {
          border: none;
          border-top: 1px solid var(--nt-border);
          margin: 2.5rem 0 1.5rem;
        }

        /* ── Bottom bar ── */
        .ntf-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .ntf-copy {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.38);
        }
        .ntf-copy strong {
          color: rgba(255,255,255,0.55);
          font-weight: 500;
        }
        .ntf-bottom-links {
          display: flex;
          gap: 1.25rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ntf-bottom-links a {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ntf-bottom-links a:hover { color: rgba(255,255,255,0.7); }

        /* ── Back to top ── */
        .ntf-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--nt-yellow);
          color: var(--nt-navy);
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(255,215,0,0.35);
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease;
          opacity: 0;
          transform: translateY(16px);
          pointer-events: none;
        }
        .ntf-top-btn.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .ntf-top-btn:hover {
          box-shadow: 0 6px 28px rgba(255,215,0,0.5);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 1060px) {
          .ntf-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .ntf-brand {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 0 2rem;
            align-items: start;
          }
          .ntf-tagline { max-width: 100%; }
          .ntf-cta-strip { grid-column: 1 / -1; }
        }
        @media (max-width: 680px) {
          .ntf-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ntf-brand {
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
          }
          .ntf-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
        @media (max-width: 400px) {
          .ntf-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/*
        ════════════════════════════════════════
        FOOTER
        role="contentinfo" = ARIA landmark for
        search engines to identify site footer
        itemscope/itemtype = Organization schema
        ════════════════════════════════════════
      */}
      <footer
        role="contentinfo"
        className="ntf-footer"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Gradient accent bar */}
        <div className="ntf-accent" aria-hidden="true" />

        <div className="ntf-inner">
          <div className="ntf-grid">

            {/* ── Brand Column ── */}
            <div className="ntf-brand">
              {/* Logo — keyword-rich alt for image SEO */}
              <a
                href="https://novatech-is.in/"
                className="ntf-logo-wrap"
                aria-label="NovaTech Innovative Solutions — Home"
                itemProp="url"
              >
                                <div className="ntf-brand-text">
                  <strong itemProp="name">NovaTech</strong>
                  <span>Innovative Solutions</span>
                </div>
              </a>

              {/* Tagline — natural keyword inclusion */}
              <p className="ntf-tagline" itemProp="description">
                Software, hardware, AI/ML, and academic project solutions — designed,
                developed, and deployed with passion across India.
              </p>

              {/* Social links — aria-label includes brand + platform (SEO + accessibility) */}
              <ul className="ntf-social" aria-label="NovaTech social media profiles">
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918336001208?text=Hello, I need some help with my Project !"
                target="_blank"
                rel="noopener noreferrer"
                className="ntf-cta-strip"
                aria-label="Contact NovaTech on WhatsApp for project support"
              >
                <span className="ntf-cta-strip-dot" aria-hidden="true" />
                💬 Chat with us on WhatsApp
              </a>
            </div>

            {/* ── Link Columns ── */}
            {FOOTER_COLS.map((col) => (
              <nav
                key={col.heading}
                className="ntf-col"
                aria-label={`${col.heading} links`}
              >
                {/* h3 heading creates logical heading hierarchy for crawlers */}
                <h3 className="ntf-col-heading">{col.heading}</h3>
                <ul className="ntf-link-list">
                  {col.links.map(({ to, label }) => (
                    <li key={label}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <hr className="ntf-divider" />

          {/* ── Bottom bar ── */}
          <div className="ntf-bottom">
            <p className="ntf-copy">
              © {year}{" "}
              <strong itemProp="legalName">NovaTech Innovative Solutions</strong>.
              All rights reserved.
            </p>

            {/* Legal links — important for E-E-A-T trust signals */}
            <ul className="ntf-bottom-links">
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
              <li>
                <address style={{ display: "inline", fontStyle: "normal" }}>
                  {/* <address> tag boosts local SEO */}
                  <a
                    href="mailto:chandramouli@novatech-is.in"
                    style={{ color: "inherit", textDecoration: "none" }}
                    itemProp="email"
                  >
                    chandramouli@novatech-is.in
                  </a>
                </address>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* ── Back to Top ── */}
      <button
        className={`ntf-top-btn${showTop ? " visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        title="Back to top"
      >
        ↑
      </button>
    </>
  );
};

export default Footer;