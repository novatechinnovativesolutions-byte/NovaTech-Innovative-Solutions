import React from "react";

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "60px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#004aad",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    marginTop: "40px",
    alignItems: "stretch",
  },
  card: {
    background: "#f8fbff",
    border: "2px solid #e6f0ff",
    borderRadius: "12px",
    padding: "22px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(4, 36, 97, 0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "default",
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#fff7cc",
    color: "#7a6400",
    fontWeight: 700,
    fontSize: "12px",
    marginBottom: "14px",
    border: "1px solid #ffe58a",
  },
  planTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#004aad",
    marginBottom: "8px",
  },
  price: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#1a1a2e",
    marginBottom: "6px",
  },
  priceSub: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "16px",
  },
  features: {
    textAlign: "left",
    marginTop: "8px",
    marginBottom: "18px",
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
    borderRadius: "4px",
    background: "#004aad",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 700,
  },
  cta: {
    marginTop: "18px",
  },
  primaryBtn: {
    background: "#004aad",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 700,
    width: "100%",
    boxShadow: "0 6px 18px rgba(0, 74, 173, 0.12)",
  },
  note: {
    marginTop: "30px",
    textAlign: "center",
    color: "#555",
    fontSize: "14px",
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
      "Step-by-step guidance to build project",
      "Help with selecting tools & tech",
      "2 weeks support",
    ],
  },
  {
    id: "docs-only",
    title: "Docs & Reports",
    badge: "College Ready",
    price: "₹100 - 500",
    priceSub: "Per Doc",
    features: [
      "Project Report (IEEE / College format)",
      "Flowcharts & block diagrams",
      "Plagiarism check support",
      "1 week support",
    ],
  },
  {
    id: "docs-ppt",
    title: "Docs + PPT + Assignments",
    badge: "Academic Pack",
    price: "₹50 - 500",
    priceSub: "Per Doc",
    features: [
      "Full report documentation",
      "Presentation PPT (10–15 slides)",
      "Assignments & writeups",
      "2 weeks support",
    ],
  },
  {
    id: "model-only",
    title: "Model Only",
    badge: "Best for Proof-of-Concept",
    price: "₹6,000",
    priceSub: "One-time",
    features: [
      "Working prototype / model",
      "Source code (cleaned)",
      "Basic setup guide",
      "1 week support",
    ],
  },
  {
    id: "project-doc",
    title: "Project + Documentation",
    badge: "Student Favorite",
    price: "₹10,000",
    priceSub: "One-time",
    features: [
      "Complete project (hardware/software)",
      "Detailed documentation (report)",
      "Block diagrams & flowcharts",
      "2 weeks support",
    ],
  },
  {
    id: "project-doc-paper",
    title: "Project + Doc + Paper",
    badge: "Research Ready",
    price: "₹16,000",
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
    badge: "Publication & Presentation",
    price: "₹8,000",
    priceSub: "One-time",
    features: [
      "Polished research paper (ready to submit)",
      "Presentation PPT (10–15 slides)",
      "Figures / Charts prepared",
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
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(4,36,97,0.12);
        }
      `}</style>

      <div style={styles.container}>
        <header style={styles.header}>
          <h2 style={styles.title}>Pricing Packages</h2>
          <p style={styles.subtitle}>
            Clear, affordable, and <b>negotiable</b> pricing designed for
            students, researchers, startups, and industry professionals. Choose
            from consultancy, documentation, or full project delivery — whatever
            fits your needs, we’ll make it work for you.
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
