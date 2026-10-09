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
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --nt-navy: #10234f;
          --nt-navy2: #091735;
          --nt-blue: #2449a8;
          --nt-sky: #356df3;
          --nt-yellow: #ffd84d;
          --nt-gold: #f3b82f;
          --nt-white: #ffffff;
          --nt-muted: #5e6b82;
          --nt-border: #e2e8f3;
          --nt-glass: #ffffff;
          --font-d: 'Plus Jakarta Sans', sans-serif;
          --font-b: 'Manrope', sans-serif;
        }

        .ntos-page {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 100vh;
          background: #f5f7fc;
          color: var(--nt-navy);
          font-family: var(--font-b);
        }

        .ntos-page,
        .ntos-page * { box-sizing: border-box; }

        .ntos-page a {
          transition: color .2s ease, background .2s ease, border-color .2s ease,
            box-shadow .2s ease, transform .2s ease;
        }

        .ntos-page :focus-visible {
          outline: 3px solid var(--nt-sky);
          outline-offset: 3px;
        }

        .ntos-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: clamp(4rem, 7vw, 6.5rem) 2rem clamp(3.5rem, 6vw, 5rem);
          text-align: center;
          color: #fff;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(71,116,237,.32), transparent 58%),
            linear-gradient(135deg, #091735 0%, #102653 55%, #173875 100%);
          border-bottom: 4px solid var(--nt-yellow);
        }

        .ntos-hero::before,
        .ntos-hero::after {
          content: '';
          position: absolute;
          z-index: -1;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 50%;
        }

        .ntos-hero::before {
          width: 520px;
          height: 520px;
          top: -330px;
          left: calc(50% - 260px);
          box-shadow: 0 0 0 48px rgba(255,255,255,.025),
            0 0 0 96px rgba(255,255,255,.02);
        }

        .ntos-hero-inner { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; }

        .ntos-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: .55rem;
          padding: .45rem 1rem;
          margin-bottom: 1.35rem;
          color: var(--nt-yellow);
          background: rgba(255,216,77,.1);
          border: 1px solid rgba(255,216,77,.32);
          border-radius: 999px;
          font-size: .72rem;
          font-weight: 800;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .ntos-eyebrow-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: var(--nt-yellow);
          box-shadow: 0 0 12px rgba(255,216,77,.65);
        }

        .ntos-h1 {
          margin: 0 0 1.1rem;
          color: #fff;
          font-family: var(--font-d);
          font-size: clamp(2.35rem, 5.5vw, 4.1rem);
          font-weight: 800;
          letter-spacing: -.055em;
          line-height: 1.08;
          overflow-wrap: anywhere;
        }

        .ntos-grad {
          color: var(--nt-yellow);
          background: linear-gradient(90deg, #ffe783, var(--nt-yellow), #f5b936);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ntos-hero-meta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .55rem;
          padding: .6rem 1rem;
          margin-bottom: .5rem;
          color: rgba(255,255,255,.82);
          background: rgba(255,255,255,.075);
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 999px;
          font-size: .8rem;
          font-weight: 600;
          backdrop-filter: blur(8px);
        }

        .ntos-hero-desc {
          max-width: 650px;
          margin: 1.15rem auto 0;
          color: rgba(255,255,255,.76);
          font-size: .98rem;
          line-height: 1.85;
        }

        .ntos-hero-desc strong { color: #fff; font-weight: 800; }

        .ntos-notice {
          width: min(1240px, 100%);
          margin: 2rem auto 0;
          padding: 0 clamp(1rem, 4vw, 2.5rem);
        }

        .ntos-notice-inner {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.15rem 1.4rem;
          color: #53617a;
          background: #fff9df;
          border: 1px solid #f3df91;
          border-left: 4px solid var(--nt-yellow);
          border-radius: 14px;
          box-shadow: 0 8px 22px rgba(16,35,79,.045);
          font-size: .87rem;
          line-height: 1.75;
        }

        .ntos-notice-inner strong { color: var(--nt-navy); }
        .ntos-notice-inner a { color: var(--nt-blue) !important; font-weight: 800; text-underline-offset: 3px; }
        .ntos-notice-inner a:hover { color: var(--nt-sky) !important; text-decoration: underline !important; }
        .ntos-notice-icon { flex-shrink: 0; margin-top: .05rem; font-size: 1.25rem; }

        .ntos-layout {
          display: grid;
          grid-template-columns: 255px minmax(0, 1fr);
          align-items: start;
          gap: clamp(1.5rem, 3.5vw, 3.25rem);
          width: min(1240px, 100%);
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem) 5rem;
        }

        .ntos-toc {
          position: sticky;
          top: 96px;
          padding: 1.35rem 1rem;
          background: #fff;
          border: 1px solid var(--nt-border);
          border-radius: 18px;
          box-shadow: 0 12px 35px rgba(16,35,79,.06);
        }

        .ntos-toc-title {
          padding: 0 .6rem 1rem;
          margin-bottom: .75rem;
          color: var(--nt-blue);
          border-bottom: 1px solid var(--nt-border);
          font-family: var(--font-d);
          font-size: .75rem;
          font-weight: 800;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .ntos-toc-list {
          display: flex;
          flex-direction: column;
          gap: .25rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .ntos-toc-btn {
          display: block;
          width: 100%;
          padding: .68rem .7rem;
          color: #5e6b82;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 10px;
          font-family: var(--font-b);
          font-size: .79rem;
          font-weight: 700;
          line-height: 1.45;
          text-align: left;
          cursor: pointer;
          transition: color .2s ease, background .2s ease, border-color .2s ease,
            transform .2s ease;
        }

        .ntos-toc-btn:hover {
          color: var(--nt-blue);
          background: #f0f4ff;
          border-color: #e0e8ff;
          transform: translateX(2px);
        }

        .ntos-content { display: flex; flex-direction: column; gap: 1.25rem; min-width: 0; }

        .ntos-sec {
          position: relative;
          min-width: 0;
          padding: clamp(1.4rem, 3vw, 2.15rem);
          background: #fff;
          border: 1px solid var(--nt-border);
          border-radius: 20px;
          box-shadow: 0 8px 28px rgba(16,35,79,.045);
          opacity: 0;
          transform: translateY(20px);
          scroll-margin-top: 105px;
          transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
        }

        .ntos-sec.ntos-show { animation: ntos-up .55s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes ntos-up { to { opacity: 1; transform: translateY(0); } }

        .ntos-sec:hover {
          border-color: #cbd8fa;
          box-shadow: 0 16px 38px rgba(16,35,79,.075);
        }

        .ntos-sec-header {
          display: flex;
          align-items: center;
          gap: .9rem;
          padding-bottom: 1.1rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid #edf0f7;
        }

        .ntos-sec-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          color: var(--nt-blue);
          background: linear-gradient(145deg, #edf2ff, #e3ebff);
          border: 1px solid #d9e3ff;
          border-radius: 14px;
          font-size: 1.3rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.9);
        }

        .ntos-sec h2 {
          margin: 0;
          color: var(--nt-navy);
          font-family: var(--font-d);
          font-size: clamp(1.05rem, 1.7vw, 1.25rem);
          font-weight: 800;
          letter-spacing: -.025em;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }

        .ntos-sec p {
          margin-bottom: .85rem;
          color: #5e6b82;
          font-size: .92rem;
          line-height: 1.85;
          overflow-wrap: anywhere;
        }

        .ntos-sec p:last-child { margin-bottom: 0; }

        .ntos-sec p a {
          color: var(--nt-blue) !important;
          font-weight: 700;
          text-underline-offset: 3px;
        }

        .ntos-sec p a:hover { color: var(--nt-sky) !important; text-decoration: underline !important; }

        .ntos-sec ul {
          display: flex;
          flex-direction: column;
          gap: .65rem;
          margin: .75rem 0;
          padding: 0;
          list-style: none;
        }

        .ntos-sec ul li {
          display: flex;
          align-items: flex-start;
          gap: .7rem;
          color: #526079;
          font-size: .9rem;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .ntos-sec ul li::before {
          content: '';
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          margin-top: .58rem;
          background: var(--nt-sky);
          border-radius: 50%;
          box-shadow: 0 0 0 4px #edf2ff;
        }

        .ntos-sec strong { color: var(--nt-navy); font-weight: 800; }

        .ntos-service-grid { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: 1rem; }

        .ntos-chip {
          padding: .45rem .8rem;
          color: #2449a8;
          background: #f0f4ff;
          border: 1px solid #dce6ff;
          border-radius: 999px;
          font-size: .76rem;
          font-weight: 700;
          line-height: 1.4;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }

        .ntos-chip:hover { background: #e4ecff; border-color: #bdceff; transform: translateY(-1px); }

        .ntos-highlight {
          padding: 1rem 1.15rem;
          margin-top: 1rem;
          color: #53617a;
          background: #f0f4ff;
          border: 1px solid #dce6ff;
          border-left: 4px solid var(--nt-sky);
          border-radius: 12px;
          font-size: .88rem;
          line-height: 1.75;
        }

        .ntos-contact-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: clamp(1.5rem, 3vw, 2.2rem);
          background:
            radial-gradient(circle at 100% 0%, rgba(53,109,243,.18), transparent 45%),
            linear-gradient(135deg, #10234f, #173875);
          border: 1px solid rgba(53,109,243,.3);
          border-radius: 20px;
          box-shadow: 0 16px 38px rgba(16,35,79,.14);
          opacity: 0;
          transform: translateY(20px);
          scroll-margin-top: 105px;
        }

        .ntos-contact-card.ntos-show { animation: ntos-up .55s cubic-bezier(.2,.7,.2,1) forwards; }
        .ntos-contact-card h2 { margin: 0; color: #fff; font-family: var(--font-d); font-size: 1.25rem; font-weight: 800; }
        .ntos-contact-card p { margin: 0; color: rgba(255,255,255,.76); font-size: .92rem; line-height: 1.8; }
        .ntos-contact-card .ntos-sec-icon { background: rgba(255,216,77,.12); border-color: rgba(255,216,77,.25); }
        .ntos-contact-card address { color: rgba(255,255,255,.8); font-size: .9rem; line-height: 1.9; overflow-wrap: anywhere; }
        .ntos-contact-card address strong { color: #fff; }
        .ntos-contact-card address a { color: var(--nt-yellow) !important; text-decoration: none; text-underline-offset: 3px; }
        .ntos-contact-card address a:hover { color: #fff !important; text-decoration: underline; }

        .ntos-contact-row { display: flex; flex-wrap: wrap; gap: .75rem; }

        .ntos-contact-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          min-height: 46px;
          padding: .7rem 1.15rem;
          border-radius: 10px;
          font-family: var(--font-d);
          font-size: .85rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }

        .ntos-contact-link:hover { transform: translateY(-2px); }
        .ntos-contact-link.filled { color: var(--nt-navy); background: var(--nt-yellow); border: 1px solid var(--nt-yellow); box-shadow: 0 6px 18px rgba(255,216,77,.2); }
        .ntos-contact-link.filled:hover { background: #ffe681; box-shadow: 0 9px 24px rgba(255,216,77,.3); }
        .ntos-contact-link.outline { color: #ffe783; background: rgba(255,255,255,.04); border: 1px solid rgba(255,216,77,.48); }
        .ntos-contact-link.outline:hover { color: #fff; background: rgba(255,216,77,.1); border-color: var(--nt-yellow); }

        .ntos-ack {
          padding: 1.1rem 1.4rem;
          margin-top: .25rem;
          color: #68758c;
          background: #fff;
          border: 1px solid var(--nt-border);
          border-left: 4px solid var(--nt-yellow);
          border-radius: 12px;
          font-size: .82rem;
          line-height: 1.75;
          text-align: center;
        }

        .ntos-ack a { color: var(--nt-blue) !important; font-weight: 800; text-underline-offset: 3px; }
        .ntos-ack a:hover { color: var(--nt-sky) !important; text-decoration: underline !important; }

        @media (max-width: 980px) {
          .ntos-layout { grid-template-columns: 1fr; gap: 1.5rem; }
          .ntos-toc { position: static; padding: 1.15rem; }
          .ntos-toc-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .35rem; }
        }

        @media (max-width: 600px) {
          .ntos-hero { padding: 4rem 1.25rem 3.25rem; }
          .ntos-h1 { font-size: clamp(2.2rem, 10vw, 3.2rem); }
          .ntos-hero-desc { font-size: .9rem; }
          .ntos-notice { padding: 0 1rem; margin-top: 1.25rem; }
          .ntos-notice-inner { gap: .7rem; padding: 1rem; font-size: .82rem; }
          .ntos-layout { padding: 1.5rem 1rem 3rem; }
          .ntos-toc-list { grid-template-columns: 1fr; }
          .ntos-sec { padding: 1.35rem 1.15rem; border-radius: 16px; }
          .ntos-sec-header { align-items: flex-start; gap: .75rem; }
          .ntos-sec-icon { width: 42px; height: 42px; flex-basis: 42px; border-radius: 12px; }
          .ntos-sec p, .ntos-sec ul li { font-size: .87rem; }
          .ntos-contact-card { padding: 1.35rem 1.15rem; border-radius: 16px; }
          .ntos-contact-row { flex-direction: column; }
          .ntos-contact-link { width: 100%; }
          .ntos-ack { padding: 1rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ntos-page *, .ntos-page *::before, .ntos-page *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
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