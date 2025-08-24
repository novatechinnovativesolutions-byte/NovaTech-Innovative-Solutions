import React from "react";

const styles = {
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "auto",
    padding: "40px 0",
  },

  /* Buttons */
  btn: {
    padding: "12px 28px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s ease",
    marginRight: "10px",
  },
  btnPrimary: {
    background: "#1a73e8", // Blue
    color: "#fff",
  },
  btnSecondary: {
    background: "#FFD60A", // Yellow
    color: "#1a1a2e",
  },

  /* Hero Section */
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  heroContent: { flex: 1, textAlign: "left" },
  heroTitle: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    color: "#1a1a2e",
  },
  heroText: {
    fontSize: "1.1rem",
    marginBottom: "24px",
    maxWidth: "500px",
    color: "#444",
  },
  heroBanner: {
    flex: 1,
    borderRadius: "12px",
  },
  heroImage: {
    width: "100%",
    borderRadius: "12px",
  },

  /* Section Titles */
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#1a1a2e",
    textAlign: "center",
  },
  sectionText: {
    fontSize: "1rem",
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto 20px",
    textAlign: "center",
  },

  /* About Cards */
  aboutList: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    listStyle: "none",
    marginTop: "30px",
    padding: 0,
  },
  aboutCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.06)",
    flex: "1 1 280px",
    textAlign: "center",
    transition: "0.3s ease",
  },
  aboutCardImage: {
    width: "80px",
    height: "80px",
    marginBottom: "15px",
  },
  aboutCardTitle: {
    fontSize: "1.2rem",
    margin: "10px 0",
    color: "#1a73e8",
  },

  /* Features */
  features: {
    background: "#f8fbff",
    padding: "70px 0",
  },
  featuresList: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px",
    listStyle: "none",
    padding: 0,
  },
  featuresItem: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    padding: "25px",
    flex: "1 1 300px",
    textAlign: "center",
    transition: "0.3s ease",
  },
  featuresImage: {
    width: "100px",
    marginBottom: "15px",
  },
  itemTitle: {
    fontSize: "1.3rem",
    marginBottom: "10px",
    color: "#FFD60A",
  },

  /* CTA */
  cta: {
    background: "linear-gradient(135deg, #1a73e8, #FFD60A)",
    padding: "70px 20px",
    textAlign: "center",
    color: "#1a1a2e",
    borderRadius: "12px",
    margin: "50px auto",
    width: "90%",
  },
  ctaTitle: { fontSize: "1.8rem", marginBottom: "20px" },
  ctaForm: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  ctaInput: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    width: "300px",
  },

  /* Contact Form */
  contact: { padding: "70px 0" },
  contactForm: {
    maxWidth: "600px",
    margin: "auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },
  inputWrapper: { marginBottom: "20px" },
  inputLabel: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "500",
    color: "#1a73e8",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
};

const Home = () => {
  return (
    <div id="top">
      {/* ✅ Inject responsive CSS here */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
          }
          .hero {
            flex-direction: column !important;
            text-align: center !important;
          }
          .hero div {
            text-align: center !important;
          }
          .ctaForm {
            flex-direction: column !important;
            align-items: center !important;
          }
          .ctaInput {
            width: 100% !important;
            margin-bottom: 15px !important;
          }
          ul {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>

      <main>
        <article>
          {/* HERO SECTION */}
          <section className="hero" style={styles.hero}>
            <div style={styles.container}>
              <div style={styles.heroContent}>
                <h1 style={styles.heroTitle}>
                  Empowering Innovation with Tech Solutions
                </h1>
                <p style={styles.heroText}>
                  NovaTech Innovative Solutions delivers end-to-end hardware and
                  software systems—designed, developed, and deployed with
                  passion.
                </p>
                <a href="/about">
                  <button style={{ ...styles.btn, ...styles.btnPrimary }}>
                    Explore Projects
                  </button>
                </a>
              </div>
              <br />
              <div style={styles.heroBanner}>
                <img
                  src="https://www.bundeswirtschaftsministerium.de/Redaktion/EN/Bilder/Dossier/innovationspolitik.jpg?__blob=wide&v=1&size=1900w"
                  alt="Innovation"
                  style={styles.heroImage}
                />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section style={styles.container}>
            <h2 style={styles.sectionTitle}>What We Offer</h2>
            <p style={styles.sectionText}>
              From academic prototypes to industrial deployments, NovaTech is
              your partner in innovation across Embedded Systems, IoT, AI, and
              full-stack software.
            </p>
            <ul style={styles.aboutList}>
              <li style={styles.aboutCard}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                  alt="IoT"
                  style={styles.aboutCardImage}
                />
                <h3 style={styles.aboutCardTitle}>Embedded & IoT Systems</h3>
                <p>
                  Custom-built microcontroller-based systems for real-world
                  automation and monitoring.
                </p>
              </li>
              <li style={styles.aboutCard}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
                  alt="Software"
                  style={styles.aboutCardImage}
                />
                <h3 style={styles.aboutCardTitle}>Software Development</h3>
                <p>
                  From MERN stack web apps to Java-based desktop systems, we
                  bring software to life.
                </p>
              </li>
              <li style={styles.aboutCard}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                  alt="AI"
                  style={styles.aboutCardImage}
                />
                <h3 style={styles.aboutCardTitle}>AI & Automation Projects</h3>
                <p>
                  Integrating Machine Learning, TinyML, and automation into
                  modern problem-solving solutions.
                </p>
              </li>
            </ul>
          </section>

          {/* FEATURES */}
          <section style={styles.features}>
            <div style={styles.container}>
              <h2 style={styles.sectionTitle}>
                What Makes NovaTech Different?
              </h2>
              <p style={styles.sectionText}>
                A passionate team of engineers, developers, and innovators from
                diverse backgrounds—dedicated to bringing your tech ideas to
                life.
              </p>
              <ul style={styles.featuresList}>
                <li style={styles.featuresItem}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Project Approach"
                    style={styles.featuresImage}
                  />
                  <h3 style={styles.itemTitle}>Project-Based Approach</h3>
                  <p>
                    Whether it's a final-year project or a full commercial
                    product, we tailor our process to meet your goal.
                  </p>
                </li>
                <li style={styles.featuresItem}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3588/3588395.png"
                    alt="Affordable"
                    style={styles.featuresImage}
                  />
                  <h3 style={styles.itemTitle}>Transparent & Affordable</h3>
                  <p>
                    Clear pricing, honest communication, and results-driven
                    execution—no hidden charges, ever.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section style={styles.cta}>
            <h3 style={styles.ctaTitle}>Let’s Work Together</h3>
            <form className="ctaForm" style={styles.ctaForm}
            action="https://docs.google.com/forms/d/1Z5UN_RCFAV1hdX7gVK2Pj8TiJzTuFK0zOgxCAflycRE/formResponse"
                method="POST"
                target="_blank"
            >
              <input
                type="email"
                name="entry.82239818"
                placeholder="Your email address"
                className="ctaInput"
                style={styles.ctaInput}
              />
              <button style={{ ...styles.btn, ...styles.btnSecondary }}>
                Submit
              </button>
            </form>
          </section>

         {/* CONTACT with Google Form */}
          <section style={styles.contact}>
            <div style={styles.container}>
              <h2 style={styles.sectionTitle}>Start Building with NovaTech</h2>
              <form
                style={styles.contactForm}
                action="https://docs.google.com/forms/d/1Z5UN_RCFAV1hdX7gVK2Pj8TiJzTuFK0zOgxCAflycRE/formResponse"
                method="POST"
                target="_blank"
              >
                <div style={styles.inputWrapper}>
                  <label style={styles.inputLabel}>Name</label>
                  <input type="text" name="entry.1345170053" style={styles.inputField} placeholder="Type Name" required />
                </div>
                <div style={styles.inputWrapper}>
                  <label style={styles.inputLabel}>Phone</label>
                  <input type="tel" name="entry.1254174415" style={styles.inputField} placeholder="Type Phone" />
                </div>
                <div style={styles.inputWrapper}>
                  <label style={styles.inputLabel}>Email</label>
                  <input type="email" name="entry.585538982" style={styles.inputField} placeholder="Type Email" required />
                </div>
                <div style={styles.inputWrapper}>
                  <label style={styles.inputLabel}>How can we help?</label>
                  <textarea
                    style={styles.inputField}
                    name="entry.1659687318"
                    placeholder="Type Description"
                  ></textarea>
                </div>
                <button type="submit" style={{ ...styles.btn, ...styles.btnPrimary }}>
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
