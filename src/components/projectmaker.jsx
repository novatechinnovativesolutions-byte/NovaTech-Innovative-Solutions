import React, { useState } from "react";

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    domain: "IoT",
    level: "Beginner",
    stack: "",
    blurb: "",
    how: "",
    tech: "",
    features: "",
    components: "",
  });

  const [jsonOutput, setJsonOutput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    const idPrefix = form.domain.toLowerCase().replace(/[^a-z0-9]/g, "");
    const uniqueNumber = Math.floor(Math.random() * 1000);
    const projectId = `${idPrefix}-${uniqueNumber}`;

    const jsonData = {
      id: projectId,
      title: form.title,
      domain: form.domain,
      level: form.level,
      stack: form.stack.split(",").map((s) => s.trim()),
      blurb: form.blurb,
      details: {
        how: form.how,
        tech: form.tech,
        features: form.features
          .split("\n")
          .map((f) => f.trim())
          .filter(Boolean),
        components: form.components
          .split("\n")
          .map((c) => c.trim())
          .filter(Boolean),
      },
    };

    const formatted = "," + JSON.stringify(jsonData, null, 2);
    setJsonOutput(formatted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonOutput);
    alert("✅ JSON copied to clipboard!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Project JSON Generator</h2>
      <p style={styles.subText}>
        Fill out the form and generate project JSON instantly.
      </p>

      <div style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Project Type Dropdown */}
        <label style={styles.label}>
          Project Type:
          <select
            name="domain"
            value={form.domain}
            onChange={handleChange}
            style={styles.select}
          >
            <option>IoT</option>
            <option>AI/ML</option>
            <option>Web</option>
            <option>Robotics</option>
            <option>Embedded</option>
            <option>Blockchain</option>
            <option>AR/VR</option>
          </select>
        </label>

        {/* Project Level Dropdown */}
        <label style={styles.label}>
          Level:
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            style={styles.select}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </label>

        <input
          type="text"
          name="stack"
          placeholder="Stack (comma separated, e.g. ESP32, MQTT)"
          value={form.stack}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="blurb"
          placeholder="Short Blurb (1 line summary)"
          value={form.blurb}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="how"
          placeholder="How it's done"
          value={form.how}
          onChange={handleChange}
          style={styles.textarea}
        />
        <textarea
          name="tech"
          placeholder="Tech stack explanation"
          value={form.tech}
          onChange={handleChange}
          style={styles.textarea}
        />
        <textarea
          name="features"
          placeholder="Features (one per line)"
          value={form.features}
          onChange={handleChange}
          style={styles.textarea}
        />
        <textarea
          name="components"
          placeholder="Components Required (one per line)"
          value={form.components}
          onChange={handleChange}
          style={styles.textarea}
        />
      </div>

      <button onClick={handleGenerate} style={styles.generateBtn}>
        Generate JSON
      </button>

      {jsonOutput && (
        <div style={styles.outputBox}>
          <h3 style={styles.outputHeading}>📦 Generated JSON</h3>
          <button onClick={handleCopy} style={styles.copyBtn}>
            📋 Copy JSON
          </button>
          <pre style={styles.pre}>{jsonOutput}</pre>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Inter, sans-serif",
    maxWidth: "700px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subText: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gap: "12px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    minHeight: "80px",
  },
  select: {
    padding: "8px",
    marginLeft: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
  },
  generateBtn: {
    marginTop: "20px",
    background: "#2563eb",
    color: "#fff",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
  outputBox: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  },
  outputHeading: {
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "600",
  },
  copyBtn: {
    marginBottom: "10px",
    background: "#22c55e",
    color: "#fff",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
  },
  pre: {
    background: "#1e293b",
    color: "#f8fafc",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
  },
};
