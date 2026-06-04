import React, { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   NovaTech Innovative Solutions — SEO Pricing
   ─────────────────────────────────────────────
   SEO Layers:
   • <section> with id + aria-labelledby tied to <h1>
   • JSON-LD Offer/Product schema for each pricing plan
   • Proper h1 → h2 → h3 heading hierarchy
   • Each card uses <article> with itemscope Product schema
   • PriceSpecification microdata (price, currency, name)
   • WhatsApp CTAs have keyword-rich aria-labels
   • Scroll-reveal via IntersectionObserver (no lib needed)
   ───────────────────────────────────────────── */

const plans = [
  {
    id: "consultancy",
    title: "Only Consultancy",
    badge: "Guidance & Mentorship",
    price: "₹500",
    priceRaw: "500",
    priceSub: "Per project guidance",
    featured: false,
    features: [
      "1:1 live consultation sessions",
      "Step-by-step guidance",
      "Help with selecting tools & tech",
      "2 weeks support",
    ],
  },
  {
    id: "personal-website",
    title: "Personal Website",
    badge: "Portfolio & Brand Identity",
    price: "₹2,500",
    priceRaw: "2500",
    priceSub: "One-time",
    featured: false,
    features: [
      "Responsive personal/portfolio site",
      "Modern UI design",
      "SEO-friendly pages",
      "Basic hosting support",
    ],
  },
  {
    id: "personal-app",
    title: "Personal Application",
    badge: "Web / Mobile Apps",
    price: "₹3,000",
    priceRaw: "3000",
    priceSub: "Depends on features",
    featured: false,
    features: [
      "Custom web or mobile application",
      "Database integration",
      "Login & user management",
      "Institute branding",
    ],
  },
  {
    id: "docs-ppt",
    title: "Docs + PPT + Assignments",
    badge: "Academic Pack",
    price: "₹500 – ₹1,500",
    priceRaw: "500",
    priceSub: "Bundle",
    featured: false,
    features: [
      "Full report documentation",
      "Presentation PPT (10–15 slides)",
      "Assignments & writeups",
      "2 weeks support",
    ],
  },
  {
    id: "model-only",
    title: "Project Model Only",
    badge: "Proof-of-Concept",
    price: "₹6,000",
    priceRaw: "6000",
    priceSub: "One-time",
    featured: false,
    features: [
      "Working prototype / model",
      "Source code (cleaned)",
      "Basic setup guide",
      "1 week support",
    ],
  },
  {
    id: "project-doc-paper",
    title: "Project + Doc + Paper",
    badge: "Final Year Ready",
    price: "₹16,000+",
    priceRaw: "16000",
    priceSub: "One-time",
    featured: true,
    features: [
      "Everything in Project + Docs",
      "Research paper draft (IEEE style)",
      "Reference list & experiments",
      "3 weeks support",
    ],
  },
  {
    id: "paper-ppt",
    title: "Research Paper + PPT",
    badge: "Publication Pack",
    price: "₹8,000+",
    priceRaw: "8000",
    priceSub: "One-time",
    featured: false,
    features: [
      "Polished research paper (submit-ready)",
      "Presentation PPT (10–15 slides)",
      "Figures & charts prepared",
      "1 week support",
    ],
  },
  {
    id: "custom",
    title: "Custom Package",
    badge: "Tailored Solution",
    price: "Custom Quote",
    priceRaw: null,
    priceSub: "Based on requirements",
    featured: false,
    features: [
      "Multi-module systems",
      "Enterprise integrations",
      "Extended research support",
      "Custom deliverables",
    ],
  },
];

/* JSON-LD structured data for all plans */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Pricing — NovaTech Innovative Solutions",
      description:
        "Affordable pricing for software development, academic project guidance, research papers, and training services by NovaTech Innovative Solutions.",
      url: "https://novatech-is.in/pricing",
    },
    ...plans
      .filter((p) => p.priceRaw)
      .map((p) => ({
        "@type": "Offer",
        name: p.title,
        description: p.features.join(". "),
        price: p.priceRaw,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "NovaTech Innovative Solutions",
        },
      })),
  ],
};

const Pricing = () => {
  const cardRefs = useRef([]);

  /* Scroll-reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("ntp-reveal")),
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleCTA = (plan) => {
    const msg = `Hello, I am interested in the "${plan.title}" package (${plan.price}). Please share more details.`;
    window.open(`https://wa.me/918336001208?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ── JSON-LD Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --nt-navy:   #0B1F4A;
          --nt-blue:   #1E3A8A;
          --nt-sky:    #2563EB;
          --nt-yellow: #FFD700;
          --nt-gold:   #F59E0B;
          --nt-white:  #FFFFFF;
          --nt-glass:  rgba(255,255,255,0.05);
          --nt-border: rgba(255,255,255,0.10);
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
        }

        /* ── Section ── */
        .ntp-section {
          background: linear-gradient(180deg, #071530 0%, #0B1F4A 60%, #0e2454 100%);
          padding: 90px 20px 80px;
          font-family: var(--font-body);
          color: var(--nt-white);
          position: relative;
          overflow: hidden;
        }
        /* background glow blobs */
        .ntp-section::before,
        .ntp-section::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .ntp-section::before {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
          top: -100px; left: -150px;
        }
        .ntp-section::after {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%);
          bottom: -80px; right: -100px;
        }

        /* ── Container ── */
        .ntp-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .ntp-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .ntp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.25);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--nt-yellow);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .ntp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--nt-yellow);
        }
        .ntp-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--nt-white);
          margin-bottom: 1rem;
          line-height: 1.15;
        }
        .ntp-title span {
          background: linear-gradient(90deg, var(--nt-yellow), var(--nt-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ntp-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ── Trust bar ── */
        .ntp-trust {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem 2rem;
          margin: 2rem 0 0;
        }
        .ntp-trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
        }
        .ntp-trust-icon {
          font-size: 1rem;
        }

        /* ── Grid ── */
        .ntp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        /* ── Card ── */
        .ntp-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--nt-border);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          /* scroll-reveal start state */
          opacity: 0;
          transform: translateY(28px);
        }
        .ntp-card.ntp-reveal {
          animation: ntp-fadeup 0.55s ease forwards;
        }
        @keyframes ntp-fadeup {
          to { opacity: 1; transform: translateY(0); }
        }
        .ntp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.35);
          border-color: rgba(255,255,255,0.18);
        }

        /* Featured card */
        .ntp-card.featured {
          background: linear-gradient(145deg, rgba(37,99,235,0.25), rgba(11,31,74,0.6));
          border-color: rgba(37,99,235,0.5);
        }
        .ntp-card.featured:hover {
          border-color: var(--nt-sky);
          box-shadow: 0 24px 56px rgba(37,99,235,0.3);
        }
        .ntp-featured-tag {
          position: absolute;
          top: 0; right: 0;
          background: linear-gradient(135deg, var(--nt-sky), var(--nt-yellow));
          color: var(--nt-navy);
          font-family: var(--font-display);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 0 16px 0 12px;
        }

        /* ── Card parts ── */
        .ntp-badge {
          display: inline-block;
          padding: 0.28rem 0.75rem;
          border-radius: 999px;
          background: rgba(37,99,235,0.18);
          border: 1px solid rgba(37,99,235,0.35);
          color: rgba(255,255,255,0.75);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .ntp-plan-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--nt-white);
          margin-bottom: 0.85rem;
          line-height: 1.3;
        }
        .ntp-price-wrap {
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--nt-border);
        }
        .ntp-price {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--nt-yellow);
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .ntp-price-sub {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
        }

        /* Features list */
        .ntp-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .ntp-feat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.84rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.45;
        }
        .ntp-check {
          flex-shrink: 0;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--nt-sky), #1d4ed8);
          color: var(--nt-white);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 800;
          margin-top: 1px;
        }
        .ntp-card.featured .ntp-check {
          background: linear-gradient(135deg, var(--nt-yellow), var(--nt-gold));
          color: var(--nt-navy);
        }

        /* CTA button */
        .ntp-btn {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          background: rgba(255,255,255,0.08);
          border: 1px solid var(--nt-border);
          color: var(--nt-white);
        }
        .ntp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          background: rgba(255,255,255,0.14);
        }
        .ntp-card.featured .ntp-btn {
          background: linear-gradient(90deg, var(--nt-sky), #1d4ed8);
          border-color: transparent;
          box-shadow: 0 4px 20px rgba(37,99,235,0.4);
        }
        .ntp-card.featured .ntp-btn:hover {
          box-shadow: 0 8px 30px rgba(37,99,235,0.55);
        }

        /* ── Note ── */
        .ntp-note {
          margin-top: 3rem;
          text-align: center;
          padding: 1.5rem 2rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--nt-border);
          border-radius: 14px;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.6);
        }
        .ntp-note a {
          color: var(--nt-yellow);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .ntp-note a:hover { color: var(--nt-gold); text-decoration: underline; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ntp-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 780px) {
          .ntp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .ntp-grid { grid-template-columns: 1fr; }
          .ntp-section { padding: 60px 16px 60px; }
        }
      `}</style>

      {/*
        ══════════════════════════════════════════
        SECTION — aria-labelledby ties the heading
        to the section for screen readers & crawlers
        ══════════════════════════════════════════
      */}
      <section
        className="ntp-section"
        id="pricing"
        aria-labelledby="pricing-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="ntp-container">

          {/* ── Header ── */}
          <header className="ntp-header">
            <div className="ntp-eyebrow" aria-hidden="true">
              <span className="ntp-eyebrow-dot" />
              Transparent Pricing
            </div>

            {/* h1 — single primary heading; keyword-rich for on-page SEO */}
            <h1 className="ntp-title" id="pricing-heading" itemProp="name">
              Pricing for <span>Every Student & Startup</span>
            </h1>
            <p className="ntp-subtitle">
              Affordable, negotiable packages for software development,
              academic project guidance, research papers, and training —
              by NovaTech Innovative Solutions.
            </p>

            {/* Trust signals — E-E-A-T signals for Google */}
            <div className="ntp-trust" aria-label="Trust highlights">
              {[
                { icon: "⚡", text: "Fast Turnaround" },
                { icon: "🎓", text: "Student Friendly" },
                { icon: "🔒", text: "Secure & Confidential" },
              ].map(({ icon, text }) => (
                <div className="ntp-trust-item" key={text}>
                  <span className="ntp-trust-icon" aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </header>

          {/* ── Pricing Cards ── */}
          <div
            className="ntp-grid"
            role="list"
            aria-label="NovaTech service pricing plans"
          >
            {plans.map((plan, i) => (
              /*
                <article> = self-contained content unit (good for crawlers)
                itemscope Product = enables Google Rich Results for pricing
              */
              <article
                key={plan.id}
                id={`plan-${plan.id}`}
                className={`ntp-card${plan.featured ? " featured" : ""}`}
                role="listitem"
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ animationDelay: `${(i % 4) * 80}ms` }}
                itemScope
                itemType="https://schema.org/Product"
              >
                {plan.featured && (
                  <div className="ntp-featured-tag" aria-label="Most popular plan">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Badge */}
                <div className="ntp-badge" aria-label={`Category: ${plan.badge}`}>
                  {plan.badge}
                </div>

                {/* Plan title — h2 keeps heading hierarchy */}
                <h2 className="ntp-plan-title" itemProp="name">
                  {plan.title}
                </h2>

                {/* Price — PriceSpecification microdata */}
                <div
                  className="ntp-price-wrap"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <div
                    className="ntp-price"
                    aria-label={`Price: ${plan.price}`}
                  >
                    <span itemProp="price" content={plan.priceRaw ?? "0"}>
                      {plan.price}
                    </span>
                    {plan.priceRaw && (
                      <meta itemProp="priceCurrency" content="INR" />
                    )}
                  </div>
                  <div className="ntp-price-sub">{plan.priceSub}</div>
                  <link itemProp="availability" href="https://schema.org/InStock" />
                </div>

                {/* Features — keyword-rich list content */}
                <ul className="ntp-features" aria-label={`${plan.title} features`}>
                  {plan.features.map((f) => (
                    <li key={f} className="ntp-feat-item" itemProp="description">
                      <span className="ntp-check" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — descriptive aria-label for accessibility + SEO */}
                <button
                  className="ntp-btn"
                  onClick={() => handleCTA(plan)}
                  aria-label={`Enquire about ${plan.title} plan on WhatsApp`}
                >
                  💬 Chat on WhatsApp
                </button>
              </article>
            ))}
          </div>

          {/* ── Bottom Note ── */}
          <aside className="ntp-note" aria-label="Custom pricing enquiry">
            Need something unique?{" "}
            <a
              href="https://wa.me/918336001208?text=Hello, I need a custom project quote from NovaTech."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact NovaTech for a custom project quote on WhatsApp"
            >
              Contact us on WhatsApp
            </a>{" "}
            for a fully tailored quote — we work with every budget.
          </aside>
        </div>
      </section>
    </>
  );
};

export default Pricing;