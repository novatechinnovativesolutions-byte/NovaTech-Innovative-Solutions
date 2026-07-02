import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

/* ─────────────────────────────────────────────────────────────
   NovaTech Innovative Solutions — Terms of Service
   SEO Layers:
   • Helmet: title, meta description, robots, canonical, OG tags
   • JSON-LD WebPage schema with dateModified
   • <main> with role="main", <article> wrapping content
   • h1 → h2 semantic heading hierarchy
   • <address> tag for contact info (local SEO signal)
   • All sections have id for deep-linking & anchor SEO
   • Scroll-reveal via IntersectionObserver
   ───────────────────────────────────────────────────────────── */

const EFFECTIVE_DATE = "July 2, 2026";
const CANONICAL_URL  = "https://novatech-is.in/terms";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service — NovaTech Innovative Solutions",
  description:
    "Read the Terms of Service for NovaTech Innovative Solutions. Understand the rules, responsibilities, and agreements that govern the use of our software, hardware, IoT, and academic services.",
  url: CANONICAL_URL,
  dateModified: "2026-07-02",
  publisher: {
    "@type": "Organization",
    name: "NovaTech Innovative Solutions",
    url: "https://novatech-is.in",
  },
};

const SECTIONS = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    icon: "✅",
    content: (
      <>
        <p>
          By accessing or using the website at{" "}
          <a href="https://novatech-is.in" style={{ color: "var(--nt-yellow)", textDecoration: "none" }}>
            https://novatech-is.in
          </a>{" "}
          or engaging with any service provided by <strong>NovaTech Innovative Solutions</strong>, you
          acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service
          and our <a href="/privacy-policy" style={{ color: "var(--nt-yellow)", textDecoration: "none" }}>Privacy Policy</a>.
        </p>
        <p>
          If you do not agree with any part of these terms, you must not use our website or services.
          These terms apply to all visitors, clients, users, students, researchers, and any other party
          who accesses or uses our services in any capacity.
        </p>
        <p>
          NovaTech Innovative Solutions reserves the right to update or modify these terms at any time.
          Continued use of the website or services after any changes constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    id: "services",
    heading: "Our Services",
    icon: "🛠️",
    content: (
      <>
        <p>
          NovaTech Innovative Solutions provides a range of technology, academic, and training services.
          By engaging with us, you agree to the terms applicable to the specific service(s) you use:
        </p>
        <div className="ntos-service-grid">
          {[
            "Software Development","Web Development","Mobile Applications",
            "Hardware Design & Prototyping","Embedded Systems","IoT Solutions",
            "Artificial Intelligence & ML","Computer Vision","Robotics",
            "TinyML & Edge AI","Academic Project Guidance","Thesis Support",
            "Research Paper Assistance","Technical Consultancy","Training & Workshops",
            "UAV & Drone Systems","Research & Development","Publication Support",
          ].map((s) => (
            <span key={s} className="ntos-chip">{s}</span>
          ))}
        </div>
        <p style={{ marginTop: "0.85rem" }}>
          The scope, deliverables, timeline, and pricing of any service shall be as agreed upon between
          NovaTech Innovative Solutions and the client prior to commencement of work, either verbally,
          via WhatsApp, email, or a written agreement.
        </p>
      </>
    ),
  },
  {
    id: "user-obligations",
    heading: "User Obligations",
    icon: "👤",
    content: (
      <>
        <p>By using our website and services, you agree to:</p>
        <ul>
          <li>Provide accurate, truthful, and complete information when contacting us or engaging our services</li>
          <li>Use our website and services only for lawful purposes and in compliance with applicable laws</li>
          <li>Not attempt to gain unauthorised access to any part of our website, servers, or systems</li>
          <li>Not use our services to create content that is illegal, harmful, defamatory, or infringes third-party rights</li>
          <li>Not reverse-engineer, copy, resell, or redistribute our proprietary tools, code, or methodologies without written consent</li>
          <li>Pay agreed fees on time and as per the payment terms discussed before project commencement</li>
          <li>Communicate requirements clearly and provide timely feedback during project development</li>
          <li>Respect the intellectual property rights of NovaTech Innovative Solutions and third parties</li>
        </ul>
      </>
    ),
  },
  {
    id: "academic-terms",
    heading: "Academic & Research Services",
    icon: "🎓",
    content: (
      <>
        <p>
          NovaTech Innovative Solutions provides academic project guidance, thesis support, research
          consultation, and publication assistance strictly for <strong>educational and research purposes</strong>.
          The following terms specifically govern these services:
        </p>
        <ul>
          <li>
            <strong>Academic Integrity:</strong> Clients are solely responsible for ensuring that any
            work submitted to academic institutions complies with their institution's policies on
            academic integrity, plagiarism, and originality
          </li>
          <li>
            <strong>Guidance vs. Submission:</strong> Our role is to provide technical guidance,
            structure advice, and research support. The final work must be the client's own intellectual
            contribution, which they review, modify, and submit
          </li>
          <li>
            <strong>No Guarantees:</strong> We do not guarantee specific grades, publication acceptance,
            thesis approval, or any particular academic outcome
          </li>
          <li>
            <strong>Confidentiality:</strong> Research ideas, thesis topics, and unpublished content
            shared with us are treated as confidential and will not be disclosed to third parties
          </li>
          <li>
            <strong>Liability:</strong> NovaTech Innovative Solutions is not responsible for any
            academic penalties, institutional actions, or consequences arising from the client's misuse
            of our services
          </li>
          <li>
            <strong>Research Collaboration:</strong> Any joint publications or research outputs will
            credit all contributing parties as mutually agreed in writing before submission
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "payment",
    heading: "Payment Terms",
    icon: "💳",
    content: (
      <>
        <p>
          All service fees are quoted in Indian Rupees (INR) unless otherwise agreed. The following
          payment terms apply:
        </p>
        <ul>
          <li>
            <strong>Advance Payment:</strong> A minimum of 50% advance payment is required before
            commencement of any project unless otherwise agreed in writing
          </li>
          <li>
            <strong>Final Payment:</strong> The remaining balance is due upon project completion and
            before final delivery of files, source code, or documentation
          </li>
          <li>
            <strong>Consultancy Sessions:</strong> Fees for consultation sessions are payable before
            or at the time of the session
          </li>
          <li>
            <strong>Custom Packages:</strong> Payment schedules for large or multi-phase projects
            will be defined in a separate written agreement
          </li>
          <li>
            <strong>Late Payment:</strong> Delays in payment may result in suspension of work or
            extended timelines. We reserve the right to charge a late fee of 2% per week on overdue amounts
          </li>
          <li>
            <strong>Refunds:</strong> Advance payments are non-refundable once work has commenced,
            except in cases where NovaTech Innovative Solutions is unable to deliver the agreed service
          </li>
          <li>
            <strong>Taxes:</strong> All applicable taxes (GST or otherwise) are the client's
            responsibility and will be added to invoices where required
          </li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Prices listed on our website are indicative and subject to change based on project complexity,
          scope, and requirements discussed during consultation.
        </p>
      </>
    ),
  },
  {
    id: "deliverables",
    heading: "Deliverables & Timelines",
    icon: "📦",
    content: (
      <>
        <p>
          NovaTech Innovative Solutions commits to delivering agreed outputs within the timelines
          discussed. The following conditions apply:
        </p>
        <ul>
          <li>
            <strong>Timeline Estimates:</strong> All timelines are estimates based on requirements
            provided at the time of agreement. Changes in scope may extend timelines
          </li>
          <li>
            <strong>Client Delays:</strong> Delays caused by the client (e.g., late feedback,
            missing information, or payment delays) will extend the delivery timeline accordingly
          </li>
          <li>
            <strong>Revisions:</strong> Minor revisions within the original agreed scope are included.
            Significant changes to requirements after project commencement may incur additional charges
          </li>
          <li>
            <strong>Delivery Format:</strong> Final deliverables will be provided in the format agreed
            upon (source code, documentation, hardware prototype, PDF report, etc.)
          </li>
          <li>
            <strong>Force Majeure:</strong> We are not liable for delays caused by circumstances beyond
            our reasonable control (power outages, internet disruptions, health emergencies, etc.)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    icon: "©️",
    content: (
      <>
        <p>
          Intellectual property rights are an important aspect of our client relationships. The
          following terms govern ownership of work:
        </p>
        <ul>
          <li>
            <strong>Client Ownership (Upon Full Payment):</strong> Upon receipt of full payment,
            the client receives ownership of all custom code, designs, and project-specific
            deliverables created exclusively for them
          </li>
          <li>
            <strong>NovaTech Ownership:</strong> NovaTech Innovative Solutions retains ownership of
            all pre-existing frameworks, tools, reusable components, methodologies, internal libraries,
            and any work created before the client engagement
          </li>
          <li>
            <strong>Open Source Components:</strong> Projects may include open-source libraries.
            These remain subject to their respective open-source licences and are not owned by
            either party
          </li>
          <li>
            <strong>Portfolio Rights:</strong> Unless explicitly restricted in writing, NovaTech
            Innovative Solutions reserves the right to showcase completed work in our portfolio,
            case studies, and promotional materials without disclosing confidential client information
          </li>
          <li>
            <strong>Research Publications:</strong> For jointly authored research, publication rights
            and authorship order will be mutually agreed upon before submission
          </li>
          <li>
            <strong>No Transfer Before Payment:</strong> Ownership of deliverables does not transfer
            to the client until all outstanding payments have been received in full
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    icon: "🔐",
    content: (
      <>
        <p>
          Both parties agree to maintain confidentiality with respect to sensitive information shared
          during the course of the engagement:
        </p>
        <ul>
          <li>
            <strong>Client Information:</strong> NovaTech Innovative Solutions will not disclose
            client project details, requirements, source code, or business information to any third
            party without explicit written consent
          </li>
          <li>
            <strong>Research & Thesis Content:</strong> Unpublished research ideas, thesis topics,
            and proprietary data shared by clients are treated as strictly confidential
          </li>
          <li>
            <strong>Duration:</strong> Confidentiality obligations apply during the project and for
            a period of 2 years after project completion unless otherwise agreed
          </li>
          <li>
            <strong>Exceptions:</strong> Confidentiality obligations do not apply to information
            that is publicly available, independently developed, or required to be disclosed by law
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    icon: "⚠️",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, NovaTech Innovative Solutions shall not
          be liable for:
        </p>
        <ul>
          <li>Indirect, incidental, special, consequential, or punitive damages</li>
          <li>Loss of data, revenue, profits, business opportunities, or goodwill</li>
          <li>Delays or failures caused by third-party service providers, platforms, or infrastructure</li>
          <li>Academic penalties, institutional consequences, or outcomes arising from the client's misuse of our services</li>
          <li>Errors or omissions in client-provided information that affect the quality or accuracy of deliverables</li>
          <li>Hardware failures, component defects from third-party manufacturers, or damage caused by improper use of delivered hardware prototypes</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Our total liability in connection with any service shall not exceed the total amount paid by
          the client for that specific service in the 3 months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    heading: "Warranties & Disclaimers",
    icon: "🛡️",
    content: (
      <>
        <p>
          NovaTech Innovative Solutions provides services with reasonable care and skill. However:
        </p>
        <ul>
          <li>
            <strong>No Absolute Guarantee:</strong> We do not warrant that our services will be
            error-free, uninterrupted, or meet every specific expectation of the client
          </li>
          <li>
            <strong>Website Availability:</strong> We do not guarantee that our website will be
            continuously available or free from technical errors
          </li>
          <li>
            <strong>Third-Party Services:</strong> We make no warranties regarding third-party APIs,
            platforms, libraries, or components used within delivered projects
          </li>
          <li>
            <strong>Hardware Prototypes:</strong> Hardware prototypes are delivered as proof-of-concept
            devices. They are not certified for production, commercial, or medical deployment unless
            explicitly stated
          </li>
          <li>
            <strong>Research Outcomes:</strong> We disclaim all warranties regarding academic results,
            publication acceptance, or research findings
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    heading: "Termination",
    icon: "🚫",
    content: (
      <>
        <p>Either party may terminate a service engagement under the following conditions:</p>
        <ul>
          <li>
            <strong>By Client:</strong> The client may cancel the engagement by providing written
            notice. Any work completed up to the cancellation date will be invoiced and must be paid.
            Advance payments for uncompleted work may be partially refunded at NovaTech's discretion
          </li>
          <li>
            <strong>By NovaTech:</strong> We reserve the right to terminate an engagement if the
            client fails to make payment, provides false information, repeatedly delays feedback,
            or requests work that violates these terms or applicable laws
          </li>
          <li>
            <strong>Upon Termination:</strong> All outstanding payments become immediately due.
            Deliverables completed and paid for will be handed over. Unpaid deliverables remain
            the property of NovaTech Innovative Solutions
          </li>
          <li>
            <strong>Website Access:</strong> We reserve the right to restrict or terminate access
            to our website for users who violate these terms
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law & Dispute Resolution",
    icon: "⚖️",
    content: (
      <>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of
          India. Any disputes arising from or related to these terms or our services shall be subject
          to the exclusive jurisdiction of the courts of <strong>West Bengal, India</strong>.
        </p>
        <p>
          Before initiating any formal legal proceedings, both parties agree to attempt resolution
          through good-faith negotiation. If a resolution cannot be reached within 30 days of written
          notice, either party may pursue their legal remedies.
        </p>
        <p>
          For minor disputes, both parties may mutually agree to resolve the matter through
          arbitration or mediation as an alternative to court proceedings.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    heading: "Changes to These Terms",
    icon: "🔄",
    content: (
      <>
        <p>
          NovaTech Innovative Solutions reserves the right to modify, update, or replace these Terms
          of Service at any time at our sole discretion. Changes will be effective immediately upon
          posting to this page with an updated effective date.
        </p>
        <p>
          We encourage you to review these Terms periodically. For significant changes, we may
          notify active clients via email or WhatsApp. Your continued use of our website or services
          after any changes constitutes your agreement to the revised terms.
        </p>
      </>
    ),
  },
];

const TermsOfService = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ntos-show");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.06 }
    );
    sectionRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Helmet>
        <title>Terms of Service | NovaTech Innovative Solutions</title>
        <meta
          name="description"
          content="Read the Terms of Service for NovaTech Innovative Solutions. Understand the rules, payment terms, intellectual property rights, and agreements governing our software, hardware, IoT, and academic services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content="Terms of Service | NovaTech Innovative Solutions" />
        <meta property="og:description" content="Terms and conditions governing the use of NovaTech Innovative Solutions' software, hardware, IoT, research, and academic services." />
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
        .ntos-page {
          background: linear-gradient(180deg, #071530 0%, #0B1F4A 55%, #0e2454 100%);
          min-height: 100vh;
          color: var(--nt-white);
          font-family: var(--font-b);
        }

        /* ── Hero ── */
        .ntos-hero {
          padding: 80px 2rem 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--nt-border);
        }
        .ntos-hero::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .ntos-hero-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }

        .ntos-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.3rem 1rem; margin-bottom: 1.25rem;
          background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.25);
          border-radius: 999px; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--nt-yellow);
        }
        .ntos-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--nt-yellow); }

        .ntos-h1 {
          font-family: var(--font-d);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; line-height: 1.12; margin-bottom: 1rem;
        }
        .ntos-grad {
          background: linear-gradient(90deg, var(--nt-yellow), var(--nt-gold));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ntos-hero-meta {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: var(--nt-glass); border: 1px solid var(--nt-border);
          border-radius: 999px; font-size: 0.78rem; color: var(--nt-muted);
          margin-bottom: 0.75rem;
        }
        .ntos-hero-desc {
          font-size: 0.92rem; color: var(--nt-muted);
          line-height: 1.8; margin-top: 1rem;
        }

        /* ── Quick notice banner ── */
        .ntos-notice {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding: 0 2rem;
        }
        .ntos-notice-inner {
          display: flex; align-items: flex-start; gap: 1rem;
          background: rgba(255,215,0,0.07);
          border: 1px solid rgba(255,215,0,0.22);
          border-radius: 14px;
          padding: 1rem 1.5rem;
          font-size: 0.84rem; color: var(--nt-muted); line-height: 1.7;
        }
        .ntos-notice-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 0.1rem; }

        /* ── Layout ── */
        .ntos-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem 5rem;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 3rem;
          align-items: start;
        }

        /* ── Sidebar TOC ── */
        .ntos-toc {
          position: sticky;
          top: 88px;
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 16px;
          padding: 1.5rem 1.25rem;
        }
        .ntos-toc-title {
          font-family: var(--font-d);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--nt-yellow); margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .ntos-toc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.2rem; }
        .ntos-toc-btn {
          display: block; width: 100%;
          padding: 0.48rem 0.75rem;
          background: none; border: none;
          border-radius: 7px;
          color: var(--nt-muted);
          font-family: var(--font-b); font-size: 0.76rem; font-weight: 500;
          text-align: left; cursor: pointer;
          transition: background 0.2s, color 0.2s;
          line-height: 1.4;
        }
        .ntos-toc-btn:hover { background: rgba(255,255,255,0.06); color: var(--nt-white); }

        /* ── Content ── */
        .ntos-content { display: flex; flex-direction: column; gap: 1.5rem; }

        /* ── Section card ── */
        .ntos-sec {
          background: var(--nt-glass);
          border: 1px solid var(--nt-border);
          border-radius: 18px;
          padding: 2rem;
          opacity: 0;
          transform: translateY(24px);
          scroll-margin-top: 96px;
          transition: border-color 0.3s;
        }
        .ntos-sec.ntos-show { animation: ntos-up 0.5s ease forwards; }
        @keyframes ntos-up { to { opacity: 1; transform: translateY(0); } }
        .ntos-sec:hover { border-color: rgba(255,215,0,0.18); }

        .ntos-sec-header {
          display: flex; align-items: center; gap: 0.85rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .ntos-sec-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: rgba(37,99,235,0.18); border: 1px solid rgba(37,99,235,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; flex-shrink: 0;
        }
        .ntos-sec h2 {
          font-family: var(--font-d);
          font-size: 1.1rem; font-weight: 800;
          color: var(--nt-white); margin: 0; line-height: 1.3;
        }
        .ntos-sec p {
          font-size: 0.9rem; color: var(--nt-muted);
          line-height: 1.8; margin-bottom: 0.75rem;
        }
        .ntos-sec p:last-child { margin-bottom: 0; }
        .ntos-sec ul {
          padding-left: 0; list-style: none;
          display: flex; flex-direction: column; gap: 0.55rem;
          margin: 0.5rem 0;
        }
        .ntos-sec ul li {
          display: flex; align-items: flex-start; gap: 0.65rem;
          font-size: 0.88rem; color: var(--nt-muted); line-height: 1.65;
        }
        .ntos-sec ul li::before {
          content: '›';
          color: var(--nt-yellow); font-size: 1rem;
          font-weight: 700; flex-shrink: 0; margin-top: 0.05rem;
        }
        .ntos-sec strong { color: rgba(255,255,255,0.85); font-weight: 600; }

        /* ── Service chip grid ── */
        .ntos-service-grid {
          display: flex; flex-wrap: wrap; gap: 0.45rem;
          margin-top: 0.75rem;
        }
        .ntos-chip {
          padding: 0.26rem 0.72rem;
          background: rgba(37,99,235,0.16);
          border: 1px solid rgba(37,99,235,0.3);
          border-radius: 999px;
          font-size: 0.7rem; font-weight: 600;
          color: rgba(255,255,255,0.7);
        }

        /* ── Highlight box (used inside sections) ── */
        .ntos-highlight {
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(37,99,235,0.28);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          font-size: 0.86rem; color: rgba(255,255,255,0.7);
          line-height: 1.7; margin-top: 0.85rem;
        }

        /* ── Contact card ── */
        .ntos-contact-card {
          background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(255,215,0,0.06));
          border: 1px solid rgba(37,99,235,0.35);
          border-radius: 18px;
          padding: 2rem;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .ntos-contact-card h2 {
          font-family: var(--font-d);
          font-size: 1.2rem; font-weight: 800;
          color: var(--nt-white); margin: 0;
        }
        .ntos-contact-card p {
          font-size: 0.9rem; color: var(--nt-muted); line-height: 1.7; margin: 0;
        }
        .ntos-contact-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .ntos-contact-link {
          display: inline-flex; align-items: center; gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border-radius: 8px; text-decoration: none;
          font-family: var(--font-d); font-size: 0.84rem; font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ntos-contact-link:hover { transform: translateY(-2px); }
        .ntos-contact-link.filled {
          background: var(--nt-yellow); color: var(--nt-navy);
          box-shadow: 0 4px 16px rgba(255,215,0,0.25);
        }
        .ntos-contact-link.filled:hover { box-shadow: 0 6px 24px rgba(255,215,0,0.4); }
        .ntos-contact-link.outline {
          border: 1.5px solid rgba(255,215,0,0.45); color: var(--nt-yellow);
        }
        .ntos-contact-link.outline:hover {
          background: rgba(255,215,0,0.08); border-color: var(--nt-yellow);
        }

        /* ── Acknowledgement ── */
        .ntos-ack {
          background: rgba(255,215,0,0.06);
          border: 1px solid rgba(255,215,0,0.2);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          font-size: 0.82rem; color: rgba(255,255,255,0.5);
          text-align: center; line-height: 1.7;
          margin-top: 0.5rem;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .ntos-layout { grid-template-columns: 1fr; }
          .ntos-toc { position: static; }
        }
        @media (max-width: 500px) {
          .ntos-hero { padding: 60px 1.25rem 40px; }
          .ntos-layout { padding: 2rem 1.25rem 4rem; }
          .ntos-sec { padding: 1.5rem 1.25rem; }
          .ntos-notice { padding: 0 1.25rem; }
        }
      `}</style>

      <div className="ntos-page">

        {/* ── Hero ── */}
        <section className="ntos-hero" aria-labelledby="tos-heading">
          <div className="ntos-hero-inner">
            <div className="ntos-eyebrow">
              <span className="ntos-eyebrow-dot" aria-hidden="true" />
              Legal
            </div>
            <h1 className="ntos-h1" id="tos-heading">
              Terms of <span className="ntos-grad">Service</span>
            </h1>
            <div className="ntos-hero-meta" aria-label={`Effective date: ${EFFECTIVE_DATE}`}>
              🗓️ Effective Date: {EFFECTIVE_DATE}
            </div>
            <p className="ntos-hero-desc">
              These Terms of Service govern your use of the{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>NovaTech Innovative Solutions</strong>{" "}
              website and all services we provide. Please read them carefully before engaging with us.
            </p>
          </div>
        </section>

        {/* ── Notice banner ── */}
        <div className="ntos-notice" role="note" aria-label="Important notice">
          <div className="ntos-notice-inner">
            <span className="ntos-notice-icon" aria-hidden="true">📌</span>
            <span>
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Important:</strong> By using our
              website or engaging any of our services, you automatically agree to these Terms of
              Service. If you do not agree, please refrain from using our services. For questions,{" "}
              <a href="mailto:chandramouli@novatech-is.in" style={{ color: "var(--nt-yellow)", textDecoration: "none" }}>
                contact us directly
              </a>.
            </span>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="ntos-layout">

          {/* ── Sidebar TOC ── */}
          <aside aria-label="Table of contents">
            <nav className="ntos-toc">
              <div className="ntos-toc-title">Contents</div>
              <ul className="ntos-toc-list" >
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <button
                      className="ntos-toc-btn"
                      onClick={() => scrollToSection(s.id)}
                      aria-label={`Jump to ${s.heading}`}
                    >
                      {s.icon} {s.heading}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="ntos-toc-btn"
                    onClick={() => scrollToSection("contact")}
                    aria-label="Jump to Contact"
                  >
                    📬 Contact Us
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* ── Content ── */}
          <main role="main" aria-label="Terms of Service content">
            <article itemScope itemType="https://schema.org/WebPage">
              <div className="ntos-content">

                {SECTIONS.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className="ntos-sec"
                    ref={(el) => { if (el) sectionRefs.current[i] = el; }}
                    style={{ animationDelay: `${i * 35}ms` }}
                    aria-labelledby={`tos-sec-${s.id}`}
                  >
                    <div className="ntos-sec-header">
                      <div className="ntos-sec-icon" aria-hidden="true">{s.icon}</div>
                      <h2 id={`tos-sec-${s.id}`}>{s.heading}</h2>
                    </div>
                    {s.content}
                  </section>
                ))}

                {/* ── Contact section ── */}
                <section
                  id="contact"
                  className="ntos-contact-card"
                  ref={(el) => { if (el) sectionRefs.current[SECTIONS.length] = el; }}
                  aria-labelledby="tos-contact-heading"
                  itemScope itemType="https://schema.org/ContactPage"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <div className="ntos-sec-icon" aria-hidden="true">📬</div>
                    <h2 id="tos-contact-heading" style={{ fontFamily: "var(--font-d)", fontSize: "1.2rem", fontWeight: 800, color: "var(--nt-white)", margin: 0 }}>
                      Contact Us
                    </h2>
                  </div>
                  <p>
                    If you have any questions about these Terms of Service, would like to clarify any
                    clause, or wish to discuss a specific engagement, please reach out to us directly.
                    We are happy to help.
                  </p>
                  <address style={{ fontStyle: "normal" }}>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--nt-muted)", lineHeight: 1.8 }}>
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
                  <div className="ntos-contact-row">
                    <a
                      href="mailto:chandramouli@novatech-is.in"
                      className="ntos-contact-link filled"
                      aria-label="Email NovaTech Innovative Solutions"
                    >
                      ✉️ Email Us
                    </a>
                    <a
                      href="https://wa.me/918336001208?text=Hello, I have a question about NovaTech Terms of Service."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ntos-contact-link outline"
                      aria-label="Contact NovaTech on WhatsApp about Terms of Service"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </section>

                {/* ── Acknowledgement ── */}
                <p className="ntos-ack" role="note">
                  By using the NovaTech Innovative Solutions website or engaging our services, you
                  confirm that you have read, understood, and agree to be bound by these Terms of
                  Service and our{" "}
                  <a href="/privacy-policy" style={{ color: "var(--nt-yellow)", textDecoration: "none" }}>
                    Privacy Policy
                  </a>.
                </p>

              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;