import React, { useMemo, useState } from "react";

// Import JSON project files
import iot from "./projects/iot.json";
import aiml from "./projects/aiml.json";
import healthcare from "./projects/healthcare.json";
import webdev from "./projects/webdev.json";
import robotics from "./projects/robotics.json";
import cybersecurity from "./projects/cybersecurity.json";
import datascience from "./projects/datascience.json";
import cloud from "./projects/cloud.json";
import embedded from "./projects/embedded.json";

const styles = {
  page: {
    fontFamily: "Inter, Arial, sans-serif",
    background: "#f9fafb",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  topbar: {
    background: "linear-gradient(90deg, #2563eb, #1e40af)",
    color: "#fff",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  btnOutline: {
    padding: "10px 18px",
    background: "transparent",
    border: "2px solid #2563eb",
    color: "#2563eb",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  hero: { padding: "40px", textAlign: "center" },
  highlight: { fontWeight: "bold", color: "#16a34a", marginTop: "10px" },
  searchbox: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    width: "60%",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "20px",
    border: "1px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "14px",
  },
  badgeActive: { background: "#2563eb", color: "#fff" },
  projects: { padding: "30px 40px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
  },
  domain: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#2563eb",
    textTransform: "uppercase",
  },
  topPick: {
    background: "#facc15",
    padding: "2px 6px",
    borderRadius: "6px",
    fontSize: "12px",
    marginLeft: "10px",
  },
  footer: {
    marginTop: "auto",
    padding: "30px",
    background: "#f1f5f9",
    textAlign: "center",
  },
  cta: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginTop: "10px",
  },
  // Popup styles
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popupContent: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "80%",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },
  codeBox: {
    background: "#1e293b",
    color: "#f1f5f9",
    padding: "10px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
    marginTop: "10px",
  },
};

const TAGS = [
  "All",
  "IoT",
  "AI/ML",
  "Web Dev",
  "Robotics",
  "Cybersecurity",
  "Data Science",
  "Healthcare AI",
];
const DIFFICULTY = ["All", "Beginner", "Intermediate", "Advanced"];

function Badge({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ ...styles.badge, ...(active ? styles.badgeActive : {}) }}
    >
      {children}
    </button>
  );
}

function ProjectCard({ p }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Normal Project Card */}
      <div
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = styles.cardHover.transform;
          e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = styles.card.boxShadow;
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <span style={styles.domain}>{p.domain}</span>
          {p.featured && <span style={styles.topPick}>★ Top Pick</span>}
        </div>
        <h3>{p.title}</h3>
        <p>{p.blurb}</p>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          {p.stack.map((s, i) => (
            <span
              key={i}
              style={{
                background: "#f3f4f6",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "12px",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <button
          onClick={() => setShow(true)}
          style={{ marginTop: "10px", ...styles.btn }}
        >
          Show Details
        </button>
      </div>

   {/* Fullscreen Popup */}
{show && (
  <div style={styles.popupOverlay}>
    <div style={styles.popupContent}>
      <button style={styles.closeBtn} onClick={() => setShow(false)}>
        ❌
      </button>
      <h2>{p.title}</h2>
      <p>
        <b>🛠 How it's done:</b> {p.details.how}
      </p>
      <p>
        <b>💻 Tech Stack:</b> {p.details.tech}
      </p>

      {/* Features list */}
      {p.details.features && (
        <>
          <h3>✨ Features</h3>
          <ul>
            {p.details.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {/* Components list */}
      {p.details.components && (
        <>
          <h3>🧩 Components Required</h3>
          <ul>
            {p.details.components.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </>
      )}

      {/* Code links */}
      {p.details.code && (
        <>
          <h3>📜 Code</h3>
          <ul>
            {p.details.code.map((link, idx) => (
              <li key={idx}>
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Images */}
      {p.details.images && (
        <>
          <h3>📷 Images</h3>
          {p.details.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="project"
              style={{
                borderRadius: "8px",
                margin: "10px 0",
                maxWidth: "100%",
              }}
            />
          ))}
        </>
      )}

      {/* Videos */}
      {p.details.videos && (
        <>
          <h3>🎥 Videos</h3>
          {p.details.videos.map((vid, idx) => (
            <video key={idx} width="100%" height="240" controls>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </>
      )}

      {/* WhatsApp Contact Button */}
      <a
        href={`https://wa.me/918336001208?text=Hi%20NovaTech%20Innovative%20Solutions,%20I%20want%20full%20details%20about%20the%20project:%20${encodeURIComponent(
          p.title
        )}`}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: "20px",
          display: "inline-block",
          background: "#2fb861ff",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: "6px",
          fontSize: "15px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        📲 Contact for Full Project Details
      </a>
    </div>
  </div>
)}


    </>
  );
}

export default function TopProjectsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState("Featured");

  // ✅ Merge all JSON project lists into one array
  const allProjects = [
    ...iot,
    ...aiml,
    ...healthcare,
    ...webdev,
    ...robotics,
    ...cybersecurity,
    ...datascience,
    ...cloud,
    ...embedded,
  ];

  const filtered = useMemo(() => {
    let out = allProjects.filter((p) => {
      const matchesQ = [p.title, p.domain, p.blurb, ...(p.stack || [])]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase());
      const matchesTag = tag === "All" ? true : p.domain === tag;
      const matchesLevel = level === "All" ? true : p.level === level;
      return matchesQ && matchesTag && matchesLevel;
    });

    if (sort === "Featured")
      out = out.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    if (sort === "A→Z") out = out.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Z→A") out = out.sort((a, b) => b.title.localeCompare(a.title));
    return out;
  }, [q, tag, level, sort]);

  return (
    <div style={styles.page}>
      <header style={styles.topbar}>
        <h1>NovaTech – Top Projects Across Domains</h1>
        <a
          href="https://novatech-is.in/prices"
          target="_blank"
          rel="noreferrer"
        >
          <button style={styles.btn}>Get Guidance</button>
        </a>
      </header>

      <section style={styles.hero}>
        <h2>Explore curated projects in IoT, AI/ML, Web, Robotics, and more</h2>
        <p>Handpicked ideas with stacks, difficulty, and detailed breakdown.</p>
        <p style={styles.highlight}>
          ✅ Free Consultancy: Get your project idea refined today.
        </p>

        <div style={styles.searchbox}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects, stacks, or domains…"
            style={styles.input}
          />
          <div style={styles.filters}>
            {TAGS.map((t) => (
              <Badge key={t} active={t === tag} onClick={() => setTag(t)}>
                {t}
              </Badge>
            ))}
          </div>
          <div style={styles.filters}>
            {DIFFICULTY.map((d) => (
              <Badge key={d} active={d === level} onClick={() => setLevel(d)}>
                {d}
              </Badge>
            ))}
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option>Featured</option>
              <option>A→Z</option>
              <option>Z→A</option>
            </select>
          </div>
        </div>
      </section>

      <section style={styles.projects}>
        <h3>All Projects</h3>
        <div style={styles.grid}>
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <h4>Want full source code & documentation?</h4>
        <p>
          Upgrade to our paid guidance for end-to-end mentorship,
          implementation, and viva support.
        </p>
        <div style={styles.cta}>
          <a
            href="https://novatech-is.in/prices"
            target="_blank"
            rel="noreferrer"
          >
            <button style={styles.btn}>View Pricing</button>
          </a>
          <a
            href="https://wa.me/918336001208"
            target="_blank"
            rel="noreferrer"
          >
            <button style={styles.btnOutline}>Free Consultancy</button>
          </a>
        </div>
      </footer>
    </div>
  );
}
