import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

/* NovaTech Innovative Solutions — SEO Footer
   • Every link goes to a real page or a real section of that page (ids exist on /solutions, /training, /research-development).
   • <footer> landmark, one <nav> per link column, <address> for contact. Organization data comes from each page's JSON-LD,
     so no duplicate microdata here.
   • Fonts are loaded by each page's <head>; this component does not import them.
   • Hash links like /about#founder need <ScrollToHash /> (ScrollToHash.jsx) placed once inside your <BrowserRouter>. */

const LOGO = "/logo-full.png"; // TODO: set to your logo file (a transparent PNG/SVG that works on dark navy)
const EMAIL = "chandramouli@novatech-is.in"; // VERIFY: this mailbox must exist (your About page uses a different address)
const WA_NUMBER = "918336001208";
const WA_DISPLAY = "+91 83360 01208";

/* Only real profiles. Add Instagram back when you have the real profile URL.
   VERIFY: a company LinkedIn page normally looks like linkedin.com/company/<name>, not /in/<name>. */
const SOCIAL_LINKS = [
  { href: "https://github.com/NovaTech-Innovate-Solutions", icon: faGithub, label: "NovaTech Innovative Solutions on GitHub" },
  { href: "https://www.linkedin.com/in/novatechinnovativesolutions/", icon: faLinkedin, label: "NovaTech Innovative Solutions on LinkedIn" },
  { href: "https://www.youtube.com/channel/UC2wbdTuQ_HpWNtcZaP14qiQ", icon: faYoutube, label: "NovaTech Innovative Solutions on YouTube" },
];

/* Each link has its own destination and a descriptive label. */
const FOOTER_COLS = [
  { heading: "Solutions", links: [
    { to: "/features#smart-home-automation-system", label: "IoT & Embedded Systems" },
    { to: "/features#e-commerce-website-development", label: "Website & Web App Development" },
    { to: "/features#mobile", label: "Mobile App Development" },
    { to: "/features#innovative", label: "Innovative IoT Products" },
  ] },
  { heading: "Training", links: [
    { to: "/training#batches", label: "All Courses" },
    { to: "/training#introduction-to-iot-course-esp32-sensors-mqtt", label: "Introduction to IoT Course" },
    { to: "/training#pcb-design-course", label: "PCB Design Course" },
    { to: "/training#ways", label: "Internships & College Workshops" },
  ] },
  { heading: "R&D Lab", links: [
        { to: "/lab#services", label: "R&D Services" },
    { to: "/lab#projectss", label: "Research Projects" },
    { to: "/lab#publications", label: "Publications" },
    { to: "/lab#infrastructure", label: "Lab Infrastructure" },
  ] },
  { heading: "Company", links: [
    { to: "/about", label: "About NovaTech" },
    { to: "/about#founder", label: "Meet the Founder" },
    { to: "/about#projects", label: "Our Projects" },
    { to: "/contact", label: "Contact Us" },
  ] },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

  return (
    <>
      <style>{`
        :root{--nt-navy:#07091c;--nt-sky:#2563EB;--nt-yellow:#f5c518;--nt-gold:#F59E0B;--nt-white:#FFFFFF;--nt-muted:rgba(255,255,255,0.72);--nt-border:rgba(255,255,255,0.12);--nt-glass:rgba(255,255,255,0.05);--font-display:'Syne',sans-serif;--font-body:'DM Sans',sans-serif}
        .ntf-footer{background:var(--nt-navy);color:var(--nt-white);font-family:var(--font-body);border-top:1px solid var(--nt-border);position:relative;overflow:hidden}
        .ntf-footer *,.ntf-footer *::before,.ntf-footer *::after{box-sizing:border-box}
        .ntf-footer::before{content:'';position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:700px;max-width:100%;height:300px;background:radial-gradient(ellipse,rgba(37,99,235,0.12) 0%,transparent 70%);pointer-events:none}
        .ntf-accent{height:3px;background:linear-gradient(90deg,var(--nt-sky) 0%,var(--nt-yellow) 60%,var(--nt-gold) 100%)}
        .ntf-inner{max-width:1280px;margin:0 auto;padding:3.5rem 5% 2rem;position:relative}
        .ntf-grid{display:grid;grid-template-columns:minmax(0,1.5fr) repeat(4,minmax(0,1fr));gap:2.5rem 2rem;align-items:start}
        .ntf-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
        .ntf-logo-wrap{display:inline-block;margin-bottom:1rem;text-decoration:none}
        .ntf-logo-wrap img{width:200px;max-width:100%;height:auto;display:block}
        .ntf-tagline{font-size:.88rem;color:var(--nt-muted);line-height:1.65;margin-bottom:1.1rem;max-width:300px}
        .ntf-address{font-style:normal;font-size:.86rem;color:var(--nt-muted);line-height:1.7;margin-bottom:1.1rem}
        .ntf-address a{color:var(--nt-white);text-decoration:none;display:inline-flex;align-items:center;min-height:32px;overflow-wrap:anywhere}.ntf-address a:hover{text-decoration:underline}
        .ntf-social{display:flex;gap:.6rem;list-style:none;padding:0;margin:0 0 1.25rem;flex-wrap:wrap}
        .ntf-social a{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;background:var(--nt-glass);border:1px solid var(--nt-border);color:rgba(255,255,255,0.85);font-size:1.05rem;text-decoration:none;transition:background .2s,color .2s,border-color .2s,transform .15s}
        .ntf-social a:hover{background:var(--nt-yellow);color:var(--nt-navy);border-color:var(--nt-yellow);transform:translateY(-2px)}
        .ntf-cta-strip{display:inline-flex;align-items:center;gap:.55rem;min-height:44px;padding:.55rem 1rem;background:rgba(37,99,235,0.18);border:1px solid rgba(37,99,235,0.4);border-radius:10px;font-size:.84rem;color:rgba(255,255,255,0.9);text-decoration:none;transition:background .2s,border-color .2s}
        .ntf-cta-strip:hover{background:rgba(37,99,235,0.3);border-color:var(--nt-sky)}
        .ntf-cta-strip-dot{width:8px;height:8px;border-radius:50%;background:var(--nt-yellow);flex-shrink:0;animation:ntf-pulse 2s infinite}
        @keyframes ntf-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.75)}}
        .ntf-col-heading{font-family:var(--font-display);font-size:.82rem;font-weight:700;color:var(--nt-yellow);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.75rem;padding-bottom:.5rem;border-bottom:1px solid var(--nt-border)}
        .ntf-link-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.1rem}
        .ntf-link-list a{font-size:.88rem;color:var(--nt-muted);text-decoration:none;transition:color .2s;display:inline-flex;align-items:center;min-height:36px;padding:.2rem 0;line-height:1.35}
        .ntf-link-list a:hover{color:var(--nt-white);text-decoration:underline}
        .ntf-link-list a:focus-visible,.ntf-bottom-links a:focus-visible,.ntf-social a:focus-visible,.ntf-cta-strip:focus-visible,.ntf-logo-wrap:focus-visible,.ntf-address a:focus-visible,.ntf-top-btn:focus-visible{outline:3px solid var(--nt-yellow);outline-offset:3px}
        .ntf-divider{border:none;border-top:1px solid var(--nt-border);margin:2rem 0 1.25rem}
        .ntf-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem 1rem}
        .ntf-copy{font-size:.82rem;color:rgba(255,255,255,0.65)}.ntf-copy strong{color:rgba(255,255,255,0.85);font-weight:600}
        .ntf-bottom-links{display:flex;gap:.25rem 1.25rem;list-style:none;padding:0;margin:0;flex-wrap:wrap}
        .ntf-bottom-links a{display:inline-flex;align-items:center;min-height:44px;font-size:.82rem;color:rgba(255,255,255,0.72);text-decoration:none;transition:color .2s}.ntf-bottom-links a:hover{color:#fff;text-decoration:underline}
        .ntf-top-btn{position:fixed;bottom:24px;right:24px;z-index:9999;width:44px;height:44px;border-radius:10px;background:var(--nt-yellow);color:var(--nt-navy);border:none;cursor:pointer;font-size:1.1rem;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(245,197,24,0.35);transition:opacity .3s,transform .3s,visibility .3s;opacity:0;visibility:hidden;transform:translateY(16px)}
        .ntf-top-btn.visible{opacity:1;visibility:visible;transform:translateY(0)}
        .ntf-top-btn.visible:hover{transform:translateY(-2px)}
        @media(max-width:1100px){.ntf-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.ntf-brand{grid-column:1/-1}.ntf-tagline{max-width:520px}}
        @media(max-width:860px){.ntf-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ntf-top-btn{bottom:calc(80px + env(safe-area-inset-bottom))}.ntf-footer{padding-bottom:0}}
        @media(max-width:680px){.ntf-inner{padding-top:2.5rem}.ntf-link-list a{min-height:44px}.ntf-bottom{flex-direction:column;align-items:flex-start}}
        @media(max-width:420px){.ntf-grid{grid-template-columns:minmax(0,1fr)}}
        @media(prefers-reduced-motion:reduce){.ntf-cta-strip-dot{animation:none}*{transition:none!important}}
      `}</style>

      <footer className="ntf-footer">
        <div className="ntf-accent" aria-hidden="true" />
        <div className="ntf-inner">
          <div className="ntf-grid">

            <div className="ntf-brand">
              <Link to="/" className="ntf-logo-wrap" aria-label="NovaTech Innovative Solutions, home page">
                <img src={LOGO} alt="NovaTech Innovative Solutions logo" width="200" height="60" loading="lazy" decoding="async" />
              </Link>

              <p className="ntf-tagline">
                IoT and AI/ML solutions, student training and research support, designed, developed and delivered across India.
              </p>

              <address className="ntf-address">
                Kolkata, West Bengal, India<br />
                <a href={"mailto:" + EMAIL}>{EMAIL}</a><br />
                <a href={"https://wa.me/" + WA_NUMBER} target="_blank" rel="noopener noreferrer">WhatsApp {WA_DISPLAY}</a>
              </address>

              <ul className="ntf-social" aria-label="NovaTech social media profiles">
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><FontAwesomeIcon icon={icon} /></a>
                  </li>
                ))}
              </ul>

              <a href={"https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent("Hello, I need some help with my project!")} target="_blank" rel="noopener noreferrer" className="ntf-cta-strip">
                <span className="ntf-cta-strip-dot" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
            </div>

            {FOOTER_COLS.map((col) => (
              <nav key={col.heading} className="ntf-col" aria-label={`${col.heading} links`}>
                <h2 className="ntf-col-heading">{col.heading}</h2>
                <ul className="ntf-link-list">
                  {col.links.map(({ to, label }) => (<li key={to}><Link to={to}>{label}</Link></li>))}
                </ul>
              </nav>
            ))}
          </div>

          <hr className="ntf-divider" />

          <div className="ntf-bottom">
            <p className="ntf-copy">
              © {year > 2025 ? `2025 - ${year}` : "2025"} <strong>NovaTech Innovative Solutions</strong>. All rights reserved.
            </p>
            <ul className="ntf-bottom-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      <button type="button" className={`ntf-top-btn${showTop ? " visible" : ""}`} onClick={scrollToTop} aria-label="Scroll back to top of page" title="Back to top" tabIndex={showTop ? 0 : -1}>↑</button>
    </>
  );
};

export default Footer;