import React from "react";

const styles = {
  section: {
    background: "linear-gradient(180deg, #f9fbff 0%, #ffffff 100%)",
    padding: "70px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1a1a2e",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "36px",
    fontWeight: 800,
    color: "#003580",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "17px",
    color: "#444",
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "28px",
    marginTop: "40px",
    alignItems: "stretch",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e0e8ff",
    borderRadius: "16px",
    padding: "28px 22px",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  badge: {
    display: "inline-block",
    padding: "7px 12px",
    borderRadius: "999px",
    background: "#e6f0ff",
    color: "#003580",
    fontWeight: 600,
    fontSize: "13px",
    marginBottom: "16px",
    border: "1px solid #c9deff",
  },
  planTitle: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#004aad",
    marginBottom: "12px",
  },
  price: {
    fontSize: "30px",
    fontWeight: 800,
    color: "#111",
    marginBottom: "6px",
  },
  priceSub: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "18px",
  },
  features: {
    textAlign: "left",
    marginTop: "10px",
    marginBottom: "20px",
    flex: "1 0 auto",
  },
  featItem: {
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
    marginBottom: "10px",
    color: "#333",
    fontSize: "14px",
  },
  check: {
    minWidth: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#004aad",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 700,
  },
  cta: {
    marginTop: "20px",
  },
  primaryBtn: {
    background: "linear-gradient(90deg, #004aad, #0077ff)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 700,
    width: "100%",
    fontSize: "15px",
    transition: "all 0.25s ease",
    boxShadow: "0 6px 16px rgba(0,74,173,0.2)",
  },
  note: {
    marginTop: "40px",
    textAlign: "center",
    color: "#555",
    fontSize: "15px",
  },
};

const plans = [
  {
    id: "consultancy",
    title: "Only Consultancy",
    badge: "Guidance & Mentorship",
    price: "₹500",
    priceSub: "Per project guidance",
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
    price: "*₹2,500",
    priceSub: "One-time",
    features: [
      "Responsive personal/portfolio site",
      "Modern UI design",
      "SEO-friendly pages",
      "Basic hosting support",
    ],
  },
  {
    id: "app-institute",
    title: "Personal Application",
    badge: "Web / Mobile Apps",
    price: "*₹3,000",
    priceSub: "Depends on features",
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
    price: "₹500 – 1,500",
    priceSub: "Bundle",
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
    price: "*₹5,000",
    priceSub: "One-time",
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
    price: "*₹9,000",
    priceSub: "One-time",
    features: [
      "Everything in Project + Doc",
      "Research paper draft (IEEE style)",
      "Reference list & experiments",
      "3 weeks support",
    ],
  },
  {
    id: "paper-ppt",
    title: "Research Paper + PPT",
    badge: "Publication Pack",
    price: "*₹4,000",
    priceSub: "One-time",
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
    price: "₹???",
    priceSub: "Based on requirements",
    features: [
      "Multi-module systems",
      "Enterprise integrations",
      "Extended research support",
      "Custom deliverables",
    ],
  },
];

const Pricing = () => {
  const handleCTA = (plan) => {
    const msg = `Hello, I am interested in the ${plan.title} package.`;
    window.open(
      `https://wa.me/918336001208?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <section style={styles.section} id="pricing">
      <style>{`
        @media (max-width: 992px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .plan-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,74,173,0.15);
        }
        .plan-card button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,74,173,0.25);
        }
      `}</style>

      <div style={styles.container}>
        <header style={styles.header}>
          <h2 style={styles.title}>Pricing Packages</h2>
          <p style={styles.subtitle}>
            Clear, affordable, and <b>negotiable</b> pricing designed for
            students, researchers, startups, and industry professionals.
          </p>
        </header>

        <div className="pricing-grid" style={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card" style={styles.card}>
              <div>
                <div style={styles.badge}>{plan.badge}</div>
                <h3 style={styles.planTitle}>{plan.title}</h3>

                <div style={styles.price}>{plan.price}</div>
                <div style={styles.priceSub}>{plan.priceSub}</div>

                <div style={styles.features}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={styles.featItem}>
                      <div style={styles.check}>✓</div>
                      <div>{f}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={styles.cta}>
                <button
                  style={styles.primaryBtn}
                  onClick={() => handleCTA(plan)}
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <p style={styles.note}>
          Need something else entirely?{" "}
          <strong>
            <a
              href="https://wa.me/918336001208?text=Hello, I need a custom project quote."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#004aad", textDecoration: "underline" }}
            >
              Contact us on WhatsApp
            </a>
          </strong>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
